import React, { useState, useEffect } from 'react';
import { Search, Eye, Trash2, Mail, Phone, Building, MessageSquare } from 'lucide-react';
import { supabase, type ContactInquiry } from '../../lib/supabase';

const ContactInquiriesViewer: React.FC = () => {
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setInquiries(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this inquiry?')) {
      const { error } = await supabase
        .from('contact_inquiries')
        .delete()
        .eq('id', id);

      if (!error) {
        await fetchInquiries();
        setSelectedInquiry(null);
      }
    }
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from('contact_inquiries')
      .update({ status })
      .eq('id', id);

    if (!error) {
      await fetchInquiries();
      if (selectedInquiry && selectedInquiry.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status });
      }
    }
  };

  const filteredInquiries = inquiries.filter(i =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (i.subject && i.subject.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Inquiries</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search inquiries..."
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
            <div className="divide-y max-h-[600px] overflow-y-auto">
              {filteredInquiries.map((inquiry) => (
                <div
                  key={inquiry.id}
                  onClick={() => setSelectedInquiry(inquiry)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedInquiry?.id === inquiry.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{inquiry.name}</h4>
                      <p className="text-sm text-gray-600">{inquiry.email}</p>
                      {inquiry.subject && (
                        <p className="text-sm text-gray-700 mt-1">{inquiry.subject}</p>
                      )}
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      inquiry.status === 'new' ? 'bg-blue-100 text-blue-800' :
                      inquiry.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {inquiry.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(inquiry.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          {selectedInquiry ? (
            <>
              <div className="p-6 border-b">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Inquiry Details</h3>
                  <button
                    onClick={() => handleDelete(selectedInquiry.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">{selectedInquiry.email}</span>
                </div>
                {selectedInquiry.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone size={18} className="text-gray-400" />
                    <span className="text-sm font-medium">{selectedInquiry.phone}</span>
                  </div>
                )}
                {selectedInquiry.company && (
                  <div className="flex items-center space-x-2">
                    <Building size={18} className="text-gray-400" />
                    <span className="text-sm font-medium">{selectedInquiry.company}</span>
                  </div>
                )}
                {selectedInquiry.subject && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <p className="text-sm text-gray-900">{selectedInquiry.subject}</p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedInquiry.message}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={selectedInquiry.status}
                    onChange={(e) => updateStatus(selectedInquiry.id, e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                  </select>
                </div>
                <div className="text-xs text-gray-500">
                  Received: {new Date(selectedInquiry.created_at).toLocaleString()}
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <MessageSquare size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Select an inquiry to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactInquiriesViewer;
