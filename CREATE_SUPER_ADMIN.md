# Creating Your First Super Admin

To create your first super admin user, follow these steps:

## Method 1: Using Supabase Dashboard (Recommended)

1. Go to your Supabase project dashboard at https://supabase.com
2. Navigate to **Authentication** → **Users**
3. Click **Add User** and create a new user with email and password
4. Note the user ID (uuid) that was created
5. Go to **SQL Editor**
6. Run this SQL query (replace `YOUR_USER_ID` and `YOUR_EMAIL` with actual values):

```sql
INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES (
  'YOUR_USER_ID',
  'YOUR_EMAIL',
  'Super Admin',
  'super_admin',
  true
);
```

## Method 2: Using SQL Editor Directly

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run this complete script (replace values as needed):

```sql
-- First, create the auth user (replace with your email and password)
-- You'll need to do this through the Supabase Dashboard UI first
-- then get the user ID and run:

INSERT INTO admin_users (id, email, full_name, role, is_active)
VALUES (
  'paste-user-id-here',
  'admin@nerdlogistics.net',
  'Super Admin',
  'super_admin',
  true
)
ON CONFLICT (id) DO UPDATE
SET role = 'super_admin',
    is_active = true;
```

## Method 3: Promote Existing Admin to Super Admin

If you already have an admin user, you can promote them:

```sql
UPDATE admin_users
SET role = 'super_admin'
WHERE email = 'your-email@example.com';
```

## After Creating Super Admin

1. Go to `/admin/login` on your website
2. Sign in with the email and password you created
3. You will now have access to the **Users** tab
4. From there, you can create additional admin users with different roles:
   - **Super Admin**: Full system access, can create/edit/delete users
   - **Admin**: Can manage content (shipments, blog, testimonials, etc.)
   - **Manager**: View-only access to the dashboard

## Role Hierarchy

- **Super Admin**:
  - Create, edit, and delete users
  - Manage all content
  - Full system access

- **Admin**:
  - Manage shipments, blog posts, testimonials
  - View contact inquiries and quote requests
  - Cannot manage users

- **Manager**:
  - View-only access to dashboard and data
  - Cannot modify anything

## Security Notes

- Only super admins can create new users
- Users cannot delete their own accounts
- Users cannot deactivate themselves
- All user management actions are logged in the audit trail
