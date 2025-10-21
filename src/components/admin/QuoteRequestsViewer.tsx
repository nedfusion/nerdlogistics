import React, { useState, useEffect } from 'react';
import { Search, Trash2, Mail, Phone, Building, Package, MapPin } from 'lucide-react';
import { supabase, type QuoteRequest } from '../../lib/supabase';

const QuoteRequestsViewer: React.FC = () => {
  const [requests, setRequests] = useState<QuoteRequest[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState<QuoteRequest | null>(null);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setRequests(data);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this quote request?')) {
      const { error } = await supabase
        .from('quote_requests')
        .delete()
        .eq('id', id);

      if (!error) {
        await fetchRequests();
        setSelectedRequest(null);
      }
    }
  };

  const updateRequest = async (id: string, updates: Partial<QuoteRequest>) => {
    const { error } = await supabase
      .from('quote_requests')
      .update(updates)
      .eq('id', id);

    if (!error) {
      await fetchRequests();
      if (selectedRequest && selectedRequest.id === id) {
        setSelectedRequest({ ...selectedRequest, ...updates });
      }
    }
  };

  const formatCurrency = (amount: number | null) => {
    if (!amount) return 'Not quoted';
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount);
  };

  const filteredRequests = requests.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.service_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Quote Requests</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search requests..."
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
              {filteredRequests.map((request) => (
                <div
                  key={request.id}
                  onClick={() => setSelectedRequest(request)}
                  className={`p-4 cursor-pointer hover:bg-gray-50 ${
                    selectedRequest?.id === request.id ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{request.name}</h4>
                      <p className="text-sm text-gray-600">{request.email}</p>
                      <p className="text-sm text-gray-700 mt-1">
                        {request.service_type} - {request.origin} → {request.destination}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs rounded ${
                      request.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      request.status === 'quoted' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(request.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          {selectedRequest ? (
            <>
              <div className="p-6 border-b">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">Quote Details</h3>
                  <button
                    onClick={() => handleDelete(selectedRequest.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail size={18} className="text-gray-400" />
                  <span className="text-sm font-medium">{selectedRequest.email}</span>
                </div>
                {selectedRequest.phone && (
                  <div className="flex items-center space-x-2">
                    <Phone size={18} className="text-gray-400" />
                    <span className="text-sm font-medium">{selectedRequest.phone}</span>
                  </div>
                )}
                {selectedRequest.company && (
                  <div className="flex items-center space-x-2">
                    <Building size={18} className="text-gray-400" />
                    <span className="text-sm font-medium">{selectedRequest.company}</span>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                  <p className="text-sm text-gray-900">{selectedRequest.service_type}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Origin</label>
                    <p className="text-sm text-gray-900">{selectedRequest.origin}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <p className="text-sm text-gray-900">{selectedRequest.destination}</p>
                  </div>
                </div>
                {selectedRequest.weight && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight</label>
                    <p className="text-sm text-gray-900">{selectedRequest.weight} kg</p>
                  </div>
                )}
                {selectedRequest.dimensions && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Dimensions</label>
                    <p className="text-sm text-gray-900">{selectedRequest.dimensions}</p>
                  </div>
                )}
                {selectedRequest.description && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedRequest.description}</p>
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quoted Amount (NGN)</label>
                  <input
                    type="number"
                    value={selectedRequest.quoted_amount || ''}
                    onChange={(e) => updateRequest(selectedRequest.id, {
                      quoted_amount: Number(e.target.value),
                      status: 'quoted'
                    })}
                    placeholder="Enter quote amount"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <p className="text-sm text-gray-600 mt-1">{formatCurrency(selectedRequest.quoted_amount)}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                  <select
                    value={selectedRequest.status}
                    onChange={(e) => updateRequest(selectedRequest.id, { status: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="pending">Pending</option>
                    <option value="quoted">Quoted</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                  <textarea
                    value={selectedRequest.notes || ''}
                    onChange={(e) => updateRequest(selectedRequest.id, { notes: e.target.value })}
                    rows={3}
                    placeholder="Add notes..."
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="text-xs text-gray-500">
                  Received: {new Date(selectedRequest.created_at).toLocaleString()}
                </div>
              </div>
            </>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <Package size={48} className="mx-auto mb-4 text-gray-300" />
              <p>Select a request to view details</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteRequestsViewer;
