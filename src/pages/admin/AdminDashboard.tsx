import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Package,
  BarChart3,
  Settings,
  Bell,
  LogOut,
  Users,
  MessageSquare,
  FileText,
  Star,
  Mail,
  DollarSign,
  TrendingUp,
  Truck,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { supabase } from '../../lib/supabase';
import ShipmentsManager from '../../components/admin/ShipmentsManager';
import BlogManager from '../../components/admin/BlogManager';
import TestimonialsManager from '../../components/admin/TestimonialsManager';
import ContactInquiriesViewer from '../../components/admin/ContactInquiriesViewer';
import QuoteRequestsViewer from '../../components/admin/QuoteRequestsViewer';

interface DashboardStats {
  totalShipments: number;
  activeShipments: number;
  deliveredShipments: number;
  blogPosts: number;
  testimonials: number;
  contactInquiries: number;
  quoteRequests: number;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [stats, setStats] = useState<DashboardStats>({
    totalShipments: 0,
    activeShipments: 0,
    deliveredShipments: 0,
    blogPosts: 0,
    testimonials: 0,
    contactInquiries: 0,
    quoteRequests: 0
  });
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    setLoading(true);

    const [
      shipmentsResult,
      activeShipmentsResult,
      deliveredShipmentsResult,
      blogPostsResult,
      testimonialsResult,
      contactInquiriesResult,
      quoteRequestsResult
    ] = await Promise.all([
      supabase.from('shipments').select('id', { count: 'exact', head: true }),
      supabase.from('shipments').select('id', { count: 'exact', head: true }).in('status', ['processing', 'in_transit']),
      supabase.from('shipments').select('id', { count: 'exact', head: true }).eq('status', 'delivered'),
      supabase.from('blog_posts').select('id', { count: 'exact', head: true }),
      supabase.from('testimonials').select('id', { count: 'exact', head: true }),
      supabase.from('contact_inquiries').select('id', { count: 'exact', head: true }),
      supabase.from('quote_requests').select('id', { count: 'exact', head: true })
    ]);

    setStats({
      totalShipments: shipmentsResult.count || 0,
      activeShipments: activeShipmentsResult.count || 0,
      deliveredShipments: deliveredShipmentsResult.count || 0,
      blogPosts: blogPostsResult.count || 0,
      testimonials: testimonialsResult.count || 0,
      contactInquiries: contactInquiriesResult.count || 0,
      quoteRequests: quoteRequestsResult.count || 0
    });

    setLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const renderDashboard = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Shipments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalShipments}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Package className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Shipments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeShipments}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Truck className="text-orange-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Delivered</p>
              <p className="text-2xl font-bold text-gray-900">{stats.deliveredShipments}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Blog Posts</p>
              <p className="text-2xl font-bold text-gray-900">{stats.blogPosts}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <FileText className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Testimonials</p>
              <p className="text-2xl font-bold text-gray-900">{stats.testimonials}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Star className="text-yellow-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Contact Inquiries</p>
              <p className="text-2xl font-bold text-gray-900">{stats.contactInquiries}</p>
            </div>
            <div className="bg-teal-100 p-3 rounded-full">
              <Mail className="text-teal-600" size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Quote Requests</p>
              <p className="text-2xl font-bold text-gray-900">{stats.quoteRequests}</p>
            </div>
            <div className="bg-emerald-100 p-3 rounded-full">
              <DollarSign className="text-emerald-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => setActiveTab('shipments')}
            className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-left"
          >
            <Package className="text-blue-600 mb-2" size={24} />
            <p className="text-sm font-medium text-blue-600">Manage Shipments</p>
          </button>
          <button
            onClick={() => setActiveTab('blog')}
            className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left"
          >
            <FileText className="text-green-600 mb-2" size={24} />
            <p className="text-sm font-medium text-green-600">Manage Blog</p>
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className="p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors text-left"
          >
            <MessageSquare className="text-orange-600 mb-2" size={24} />
            <p className="text-sm font-medium text-orange-600">View Inquiries</p>
          </button>
          <button
            onClick={() => setActiveTab('quotes')}
            className="p-4 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors text-left"
          >
            <DollarSign className="text-teal-600 mb-2" size={24} />
            <p className="text-sm font-medium text-teal-600">Quote Requests</p>
          </button>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'shipments', label: 'Shipments', icon: Package },
    { id: 'blog', label: 'Blog', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
    { id: 'quotes', label: 'Quotes', icon: DollarSign },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900">
                <Bell size={20} />
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {user?.email}
                </span>
              </div>
              <button
                onClick={handleSignOut}
                className="p-2 text-gray-600 hover:text-gray-900"
                title="Sign out"
              >
                <LogOut size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <nav className="w-64 bg-white shadow-sm min-h-screen">
          <div className="p-6">
            <div className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        <main className="flex-1 p-6">
          {loading && activeTab === 'dashboard' ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <>
              {activeTab === 'dashboard' && renderDashboard()}
              {activeTab === 'shipments' && <ShipmentsManager />}
              {activeTab === 'blog' && <BlogManager />}
              {activeTab === 'testimonials' && <TestimonialsManager />}
              {activeTab === 'contact' && <ContactInquiriesViewer />}
              {activeTab === 'quotes' && <QuoteRequestsViewer />}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
