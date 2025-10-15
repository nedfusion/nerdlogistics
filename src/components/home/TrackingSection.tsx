import React, { useState } from 'react';
import { Search, Loader } from 'lucide-react';
import Section from '../common/Section';

const TrackingSection: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<null | { status: string; location: string; eta: string }>(null);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }
    
    // Reset states
    setError('');
    setIsSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      // For demo purposes - in a real app, this would be an API call
      if (trackingNumber === 'NLG12345') {
        setSearchResult({
          status: 'In Transit',
          location: 'Ibadan, Oyo State',
          eta: 'May 15, 2025, 12:00 PM',
        });
      } else {
        setError('No shipment found with this tracking number. Please check and try again.');
      }
      
      setIsSearching(false);
    }, 1500);
  };

  return (
    <Section
      bgColor="bg-primary-50"
      className="relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Track Your Shipment</h2>
          <p className="text-neutral-700 mb-8">
            Enter your tracking number to get real-time updates on your shipment's location, status, and estimated delivery time.
          </p>
          
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Enter tracking number (e.g. NLG12345)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full py-3 px-4 pl-12 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
            </div>
            
            {error && (
              <p className="mt-2 text-error-500 text-sm">{error}</p>
            )}
            
            <button
              type="submit"
              className="btn btn-primary w-full mt-4 flex justify-center items-center gap-2"
              disabled={isSearching}
            >
              {isSearching ? (
                <>
                  <Loader className="animate-spin" size={20} /> Searching...
                </>
              ) : (
                'Track Shipment'
              )}
            </button>
          </form>

          {searchResult && (
            <div className="bg-white p-6 rounded-lg border border-primary-100 shadow-sm animate-fadeIn">
              <h3 className="font-semibold text-lg mb-4">Tracking Result</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-neutral-500">Tracking Number</div>
                  <div className="font-medium">{trackingNumber}</div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Status</div>
                  <div className="font-medium text-primary-600">{searchResult.status}</div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Current Location</div>
                  <div className="font-medium">{searchResult.location}</div>
                </div>
                
                <div>
                  <div className="text-sm text-neutral-500">Estimated Delivery</div>
                  <div className="font-medium">{searchResult.eta}</div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-neutral-100">
                <a
                  href="/tracking"
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  View Detailed Tracking Information
                </a>
              </div>
            </div>
          )}
          
          <p className="text-sm text-neutral-500 mt-4">
            Note: For the demo, use tracking number "NLG12345" to see a sample result.
          </p>
        </div>
        
        <div className="relative hidden lg:block">
          <img
            src="https://images.pexels.com/photos/6169859/pexels-photo-6169859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
            alt="Tracking shipments"
            className="rounded-lg shadow-lg w-full object-cover h-[500px]"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg w-72">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-primary-950">Real-time Updates</h4>
                <p className="text-sm text-neutral-600">Track your shipment 24/7</p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-3 rounded-md mb-3">
              <div className="flex justify-between text-sm">
                <span>Lagos</span>
                <span>Abuja</span>
              </div>
              <div className="relative h-2 bg-neutral-200 rounded-full mt-2">
                <div className="absolute top-0 left-0 h-2 bg-primary-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="text-xs text-neutral-500">Last updated: 2 hours ago</div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TrackingSection;