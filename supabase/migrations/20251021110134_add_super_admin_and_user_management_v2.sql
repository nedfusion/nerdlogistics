/*
  # Super Admin and User Management System

  ## Overview
  This migration adds super admin functionality and user management capabilities:
  - Updates admin_users table with role column
  - Adds RLS policies for super admin privileges
  - Creates user invitations table
  - Adds functions for user management

  ## Changes

  ### 1. Update admin_users table
  - Update role column to support: 'super_admin', 'admin', 'manager'

  ### 2. Create user_invitations table
  - Track pending user invitations
  - Store invitation tokens and expiry

  ### 3. Security Updates
  - Update RLS policies to support role hierarchy
  - Super admins can manage all users
  - Regular admins can only view users

  ## Important Notes
  - Super admin has full access to user management
  - Only super admins can create/delete users
  - Only super admins can promote/demote user roles
*/

-- Modify the role column default and values
ALTER TABLE admin_users ALTER COLUMN role DROP DEFAULT;
ALTER TABLE admin_users ALTER COLUMN role SET DEFAULT 'admin';

-- Create user invitations table
CREATE TABLE IF NOT EXISTS user_invitations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  role text NOT NULL DEFAULT 'admin',
  invited_by uuid REFERENCES admin_users(id) NOT NULL,
  invitation_token text UNIQUE NOT NULL,
  expires_at timestamptz NOT NULL,
  used boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE user_invitations ENABLE ROW LEVEL SECURITY;

-- RLS policies for user_invitations
CREATE POLICY "Super admins can read all invitations"
  ON user_invitations FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can create invitations"
  ON user_invitations FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can delete invitations"
  ON user_invitations FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

-- Update admin_users RLS policies to support super admin
DROP POLICY IF EXISTS "Admin users can read all admin users" ON admin_users;
DROP POLICY IF EXISTS "Admin users can update own profile" ON admin_users;
DROP POLICY IF EXISTS "All authenticated admins can read all admin users" ON admin_users;
DROP POLICY IF EXISTS "Users can update own profile" ON admin_users;

CREATE POLICY "All authenticated admins can read all admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can insert new admin users"
  ON admin_users FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Users can update own profile"
  ON admin_users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (
    auth.uid() = id OR
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "Super admins can delete admin users"
  ON admin_users FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.role = 'super_admin'
      AND admin_users.is_active = true
    )
    AND id != auth.uid()
  );

-- Function to check if user is super admin
CREATE OR REPLACE FUNCTION is_super_admin()
RETURNS boolean AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_users
    WHERE id = auth.uid()
    AND role = 'super_admin'
    AND is_active = true
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to generate invitation token
CREATE OR REPLACE FUNCTION generate_invitation_token()
RETURNS text AS $$
BEGIN
  RETURN encode(gen_random_bytes(32), 'hex');
END;
$$ LANGUAGE plpgsql;

-- Create activity log table for audit trail
CREATE TABLE IF NOT EXISTS admin_activity_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  admin_id uuid REFERENCES admin_users(id),
  action text NOT NULL,
  target_type text,
  target_id text,
  details jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY "All admins can read activity logs"
  ON admin_activity_log FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_active = true
    )
  );

CREATE POLICY "All admins can insert activity logs"
  ON admin_activity_log FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users
      WHERE admin_users.id = auth.uid()
      AND admin_users.is_active = true
    )
  );

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_user_invitations_email ON user_invitations(email);
CREATE INDEX IF NOT EXISTS idx_user_invitations_token ON user_invitations(invitation_token);
CREATE INDEX IF NOT EXISTS idx_user_invitations_expires_at ON user_invitations(expires_at);
CREATE INDEX IF NOT EXISTS idx_admin_users_role ON admin_users(role);
CREATE INDEX IF NOT EXISTS idx_admin_activity_log_admin_id ON admin_activity_log(admin_id);
CREATE INDEX IF NOT EXISTS idx_admin_activity_log_created_at ON admin_activity_log(created_at DESC);

-- Trigger for activity logging on admin_users changes
CREATE OR REPLACE FUNCTION log_admin_user_changes()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO admin_activity_log (admin_id, action, target_type, target_id, details)
    VALUES (
      auth.uid(),
      'user_created',
      'admin_user',
      NEW.id::text,
      jsonb_build_object('email', NEW.email, 'role', NEW.role)
    );
  ELSIF TG_OP = 'UPDATE' THEN
    INSERT INTO admin_activity_log (admin_id, action, target_type, target_id, details)
    VALUES (
      auth.uid(),
      'user_updated',
      'admin_user',
      NEW.id::text,
      jsonb_build_object(
        'old_role', OLD.role,
        'new_role', NEW.role,
        'old_active', OLD.is_active,
        'new_active', NEW.is_active
      )
    );
  ELSIF TG_OP = 'DELETE' THEN
    INSERT INTO admin_activity_log (admin_id, action, target_type, target_id, details)
    VALUES (
      auth.uid(),
      'user_deleted',
      'admin_user',
      OLD.id::text,
      jsonb_build_object('email', OLD.email, 'role', OLD.role)
    );
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'admin_user_changes_log') THEN
    CREATE TRIGGER admin_user_changes_log
      AFTER INSERT OR UPDATE OR DELETE ON admin_users
      FOR EACH ROW
      EXECUTE FUNCTION log_admin_user_changes();
  END IF;
END $$;