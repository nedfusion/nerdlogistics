import React, { useState, useEffect } from 'react';
import { Search, Plus, Edit as EditIcon, Trash2, X, Save, Shield, UserPlus, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { supabase, type AdminUser } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';

const UsersManager: React.FC = () => {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<AdminUser | null>(null);
  const [currentUserRole, setCurrentUserRole] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    role: 'admin' as 'super_admin' | 'admin' | 'manager',
    is_active: true
  });
  const { user } = useAuth();

  useEffect(() => {
    fetchUsers();
    fetchCurrentUserRole();
  }, []);

  const fetchCurrentUserRole = async () => {
    if (!user) return;

    const { data } = await supabase
      .from('admin_users')
      .select('role')
      .eq('id', user.id)
      .maybeSingle();

    if (data) {
      setCurrentUserRole(data.role);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('admin_users')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setUsers(data);
    }
    setLoading(false);
  };

  const isSuperAdmin = currentUserRole === 'super_admin';

  const handleCreate = () => {
    if (!isSuperAdmin) {
      alert('Only super admins can create users');
      return;
    }
    setEditingUser(null);
    setFormData({
      email: '',
      password: '',
      full_name: '',
      role: 'admin',
      is_active: true
    });
    setShowModal(true);
  };

  const handleEdit = (user: AdminUser) => {
    if (!isSuperAdmin) {
      alert('Only super admins can edit users');
      return;
    }
    setEditingUser(user);
    setFormData({
      email: user.email,
      password: '',
      full_name: user.full_name,
      role: user.role as 'super_admin' | 'admin' | 'manager',
      is_active: user.is_active
    });
    setShowModal(true);
  };

  const handleSave = async () => {
    if (!isSuperAdmin) {
      alert('Only super admins can manage users');
      return;
    }

    try {
      if (editingUser) {
        const updates: any = {
          full_name: formData.full_name,
          role: formData.role,
          is_active: formData.is_active
        };

        const { error: updateError } = await supabase
          .from('admin_users')
          .update(updates)
          .eq('id', editingUser.id);

        if (updateError) throw updateError;

        if (formData.password) {
          const { error: passwordError } = await supabase.auth.admin.updateUserById(
            editingUser.id,
            { password: formData.password }
          );
          if (passwordError) throw passwordError;
        }

        await fetchUsers();
        setShowModal(false);
        alert('User updated successfully');
      } else {
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.full_name
            }
          }
        });

        if (authError) throw authError;

        if (authData.user) {
          const { error: insertError } = await supabase
            .from('admin_users')
            .insert([{
              id: authData.user.id,
              email: formData.email,
              full_name: formData.full_name,
              role: formData.role,
              is_active: formData.is_active
            }]);

          if (insertError) throw insertError;

          await fetchUsers();
          setShowModal(false);
          alert('User created successfully');
        }
      }
    } catch (error: any) {
      alert(error.message || 'An error occurred');
    }
  };

  const handleDelete = async (userId: string) => {
    if (!isSuperAdmin) {
      alert('Only super admins can delete users');
      return;
    }

    if (userId === user?.id) {
      alert('You cannot delete your own account');
      return;
    }

    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    try {
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);
      if (authError) throw authError;

      const { error: dbError } = await supabase
        .from('admin_users')
        .delete()
        .eq('id', userId);

      if (dbError) throw dbError;

      await fetchUsers();
      alert('User deleted successfully');
    } catch (error: any) {
      alert(error.message || 'An error occurred');
    }
  };

  const toggleUserStatus = async (userId: string, currentStatus: boolean) => {
    if (!isSuperAdmin) {
      alert('Only super admins can change user status');
      return;
    }

    if (userId === user?.id) {
      alert('You cannot deactivate your own account');
      return;
    }

    try {
      const { error } = await supabase
        .from('admin_users')
        .update({ is_active: !currentStatus })
        .eq('id', userId);

      if (error) throw error;

      await fetchUsers();
    } catch (error: any) {
      alert(error.message || 'An error occurred');
    }
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'bg-red-100 text-red-800';
      case 'admin':
        return 'bg-blue-100 text-blue-800';
      case 'manager':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'Super Admin';
      case 'admin':
        return 'Admin';
      case 'manager':
        return 'Manager';
      default:
        return role;
    }
  };

  const filteredUsers = users.filter(u =>
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.full_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">User Management</h2>
          {!isSuperAdmin && (
            <p className="text-sm text-gray-600 mt-1">View only - Super admin privileges required for management</p>
          )}
        </div>
        {isSuperAdmin && (
          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Plus size={20} />
            New User
          </button>
        )}
      </div>

      {isSuperAdmin && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <Shield className="text-blue-600 mt-0.5 mr-2" size={20} />
            <div>
              <h4 className="font-semibold text-blue-900">Super Admin Privileges</h4>
              <p className="text-sm text-blue-700 mt-1">
                You have full access to create, edit, and delete users. Use these privileges responsibly.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {loading ? (
          <div className="p-12 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  {isSuperAdmin && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((adminUser) => (
                  <tr key={adminUser.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-sm font-medium text-blue-700">
                            {adminUser.full_name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                            {adminUser.full_name}
                            {adminUser.id === user?.id && (
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">You</span>
                            )}
                          </div>
                          <div className="text-sm text-gray-500">{adminUser.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRoleBadgeColor(adminUser.role)}`}>
                        {adminUser.role === 'super_admin' && <Shield size={12} className="mr-1" />}
                        {getRoleLabel(adminUser.role)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => isSuperAdmin && toggleUserStatus(adminUser.id, adminUser.is_active)}
                        disabled={!isSuperAdmin || adminUser.id === user?.id}
                        className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          adminUser.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        } ${isSuperAdmin && adminUser.id !== user?.id ? 'cursor-pointer hover:opacity-80' : 'cursor-not-allowed'}`}
                      >
                        {adminUser.is_active ? 'Active' : 'Inactive'}
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(adminUser.created_at).toLocaleDateString()}
                    </td>
                    {isSuperAdmin && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(adminUser)}
                            className="text-blue-600 hover:text-blue-900"
                            title="Edit user"
                          >
                            <EditIcon size={16} />
                          </button>
                          {adminUser.id !== user?.id && (
                            <button
                              onClick={() => handleDelete(adminUser.id)}
                              className="text-red-600 hover:text-red-900"
                              title="Delete user"
                            >
                              <Trash2 size={16} />
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full">
            <div className="p-6 border-b flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {editingUser ? 'Edit User' : 'Create New User'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={!!editingUser}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                  placeholder="user@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.full_name}
                  onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password {editingUser && '(leave blank to keep unchanged)'}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                    placeholder={editingUser ? 'Leave blank to keep current password' : 'Enter password'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value as any })}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="manager">Manager</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Super Admin: Full access | Admin: Manage content | Manager: View only
                </p>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="is_active" className="ml-2 block text-sm text-gray-900">
                  Active (user can sign in)
                </label>
              </div>
            </div>
            <div className="p-6 border-t flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Save size={20} />
                {editingUser ? 'Update' : 'Create'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersManager;
