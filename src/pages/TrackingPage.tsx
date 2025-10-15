import React, { useState } from 'react';
import { Search, Clock, MapPin, Truck, Package, Check, AlertTriangle, Loader } from 'lucide-react';
import Section from '../components/common/Section';

interface TrackingResult {
  trackingNumber: string;
  status: 'Delivered' | 'In Transit' | 'Processing' | 'Exception';
  statusDescription: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  lastUpdate: string;
  history: {
    date: string;
    time: string;
    location: string;
    activity: string;
  }[];
}

const TrackingPage: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [trackingResult, setTrackingResult] = useState<TrackingResult | null>(null);
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
        setTrackingResult({
          trackingNumber: 'NLG12345',
          status: 'In Transit',
          statusDescription: 'Your shipment is in transit to the destination',
          origin: 'Lagos, Lagos State',
          destination: 'Abuja, FCT',
          estimatedDelivery: 'May 15, 2025, 12:00 PM',
          lastUpdate: 'May 13, 2025, 2:30 PM',
          history: [
            {
              date: 'May 13, 2025',
              time: '2:30 PM',
              location: 'Ibadan, Oyo State',
              activity: 'In transit to next facility',
            },
            {
              date: 'May 12, 2025',
              time: '5:45 PM',
              location: 'Ibadan, Oyo State',
              activity: 'Arrived at Ibadan distribution center',
            },
            {
              date: 'May 12, 2025',
              time: '8:30 AM',
              location: 'Lagos, Lagos State',
              activity: 'Departed from origin facility',
            },
            {
              date: 'May 11, 2025',
              time: '4:15 PM',
              location: 'Lagos, Lagos State',
              activity: 'Shipment picked up',
            },
            {
              date: 'May 10, 2025',
              time: '1:20 PM',
              location: 'Lagos, Lagos State',
              activity: 'Shipment information received',
            },
          ],
        });
      } else if (trackingNumber === 'NLG54321') {
        setTrackingResult({
          trackingNumber: 'NLG54321',
          status: 'Delivered',
          statusDescription: 'Your shipment has been delivered',
          origin: 'Port Harcourt, Rivers State',
          destination: 'Kano, Kano State',
          estimatedDelivery: 'May 10, 2025, 3:00 PM',
          lastUpdate: 'May 10, 2025, 2:45 PM',
          history: [
            {
              date: 'May 10, 2025',
              time: '2:45 PM',
              location: 'Kano, Kano State',
              activity: 'Delivered to recipient',
            },
            {
              date: 'May 10, 2025',
              time: '11:30 AM',
              location: 'Kano, Kano State',
              activity: 'Out for delivery',
            },
            {
              date: 'May 9, 2025',
              time: '8:15 PM',
              location: 'Kano, Kano State',
              activity: 'Arrived at destination facility',
            },
            {
              date: 'May 8, 2025',
              time: '7:30 AM',
              location: 'Abuja, FCT',
              activity: 'In transit to next facility',
            },
            {
              date: 'May 7, 2025',
              time: '2:00 PM',
              location: 'Port Harcourt, Rivers State',
              activity: 'Shipment picked up',
            },
          ],
        });
      } else {
        setError('No shipment found with this tracking number. Please check and try again.');
      }
      
      setIsSearching(false);
    }, 1500);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <Check className="text-success-500" size={24} />;
      case 'In Transit':
        return <Truck className="text-primary-500" size={24} />;
      case 'Processing':
        return <Package className="text-secondary-500" size={24} />;
      case 'Exception':
        return <AlertTriangle className="text-error-500" size={24} />;
      default:
        return <Package className="text-neutral-500" size={24} />;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7232405/pexels-photo-7232405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Track Your Shipment</h1>
            <p className="text-xl text-neutral-200 mb-8">
              Get real-time updates on your shipment's location and status.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter tracking number (Try NLG12345 or NLG54321)"
                  value={trackingNumber}
                  onChange={(e) => setTrackingNumber(e.target.value)}
                  className="w-full py-4 px-5 pl-12 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-secondary-500 text-lg"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={24} />
              </div>
              
              {error && (
                <p className="mt-4 text-error-400 text-sm bg-error-400/10 p-3 rounded-lg">
                  {error}
                </p>
              )}
              
              <button
                type="submit"
                className="btn bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-400 mt-4 w-full py-4 text-lg"
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <Loader className="animate-spin mr-2" size={20} /> Searching...
                  </>
                ) : (
                  'Track Shipment'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Tracking Result */}
      {trackingResult && (
        <Section bgColor="bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary-50 p-6 md:p-8 rounded-lg mb-8">
              <div className="flex flex-wrap justify-between gap-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary-950 mb-2">
                    Tracking #{trackingResult.trackingNumber}
                  </h2>
                  <div className="flex items-center gap-2">
                    {getStatusIcon(trackingResult.status)}
                    <span className="font-medium text-lg">Status: {trackingResult.status}</span>
                  </div>
                  <p className="mt-2 text-neutral-600">
                    {trackingResult.statusDescription}
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-md shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="text-neutral-500 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-sm font-medium text-neutral-500">Est. Delivery</div>
                      <div className="font-semibold">{trackingResult.estimatedDelivery}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="text-neutral-500 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-sm font-medium text-neutral-500">Last Update</div>
                      <div className="font-semibold">{trackingResult.lastUpdate}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin size={18} className="text-secondary-500" />
                    Shipment Route
                  </h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                      <div>
                        <div className="text-sm font-medium text-neutral-500">Origin</div>
                        <div className="font-semibold">{trackingResult.origin}</div>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-neutral-500">Destination</div>
                        <div className="font-semibold">{trackingResult.destination}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Truck size={18} className="text-secondary-500" />
                    Shipment Progress
                  </h3>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="relative h-4 bg-neutral-200 rounded-full overflow-hidden">
                      <div 
                        className={`absolute top-0 left-0 h-4 rounded-full ${
                          trackingResult.status === 'Delivered' 
                            ? 'bg-success-500 w-full' 
                            : 'bg-primary-500'
                        }`}
                        style={{ 
                          width: trackingResult.status === 'In Transit' 
                            ? '65%' 
                            : trackingResult.status === 'Processing' 
                              ? '25%' 
                              : trackingResult.status === 'Exception' 
                                ? '50%' 
                                : '100%'
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-neutral-500">
                      <span>Pickup</span>
                      <span>In Transit</span>
                      <span>Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Shipment History */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold mb-6">Shipment History</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-6 md:left-8 w-0.5 bg-neutral-200"></div>
                
                <div className="space-y-8">
                  {trackingResult.history.map((item, index) => (
                    <div key={index} className="relative pl-14 md:pl-20">
                      <div className={`absolute left-4 md:left-6 w-4 h-4 rounded-full border-2 ${
                        index === 0 
                          ? 'bg-primary-950 border-primary-950' 
                          : 'bg-white border-neutral-300'
                      }`}></div>
                      
                      <div className="flex flex-wrap justify-between gap-4">
                        <div>
                          <h4 className="font-semibold">{item.activity}</h4>
                          <p className="text-neutral-500">{item.location}</p>
                        </div>
                        <div className="text-right text-neutral-500">
                          <div>{item.date}</div>
                          <div>{item.time}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Tracking Info */}
      {!trackingResult && (
        <Section 
          title="How to Track Your Shipment"
          subtitle="Our advanced tracking system allows you to monitor your shipment's journey in real-time."
          bgColor="bg-white"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-primary-950">1</div>
                </div>
                <h3 className="font-semibold mb-3">Enter Tracking Number</h3>
                <p className="text-neutral-600">
                  Enter your tracking number in the search box above.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-primary-950">2</div>
                </div>
                <h3 className="font-semibold mb-3">View Status</h3>
                <p className="text-neutral-600">
                  See the current status and location of your shipment.
                </p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-primary-950">3</div>
                </div>
                <h3 className="font-semibold mb-3">Track History</h3>
                <p className="text-neutral-600">
                  View the complete journey of your shipment from origin to destination.
                </p>
              </div>
            </div>
            
            <div className="bg-primary-50 p-6 md:p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">For Demo Purposes</h3>
              <p className="text-neutral-700 mb-4">
                Try these sample tracking numbers to see how our tracking system works:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-md">
                  <div className="font-medium">NLG12345</div>
                  <div className="text-sm text-neutral-500">In-transit shipment from Lagos to Abuja</div>
                </div>
                
                <div className="bg-white p-4 rounded-md">
                  <div className="font-medium">NLG54321</div>
                  <div className="text-sm text-neutral-500">Delivered shipment from Port Harcourt to Kano</div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* FAQ Section */}
      <Section
        title="Tracking FAQs"
        subtitle="Common questions about our tracking system and shipment statuses."
        bgColor="bg-neutral-50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How often is tracking information updated?</h3>
              <p className="text-neutral-700">
                Our tracking system updates in real-time as your shipment moves through our network. Each scan point automatically refreshes your tracking information.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What should I do if my tracking isn't updating?</h3>
              <p className="text-neutral-700">
                If your tracking information hasn't updated in 24 hours, please contact our customer service team for assistance. This could be due to a scanning issue or a delay in transit.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I track multiple shipments at once?</h3>
              <p className="text-neutral-700">
                Yes, corporate clients with a Nerd Logistics account can track multiple shipments simultaneously through our client portal. For individual customers, please track one shipment at a time.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What do the different status messages mean?</h3>
              <p className="text-neutral-700">
                <span className="font-medium">Processing:</span> Your shipment has been received and is being prepared for transport.<br/>
                <span className="font-medium">In Transit:</span> Your shipment is on its way to the destination.<br/>
                <span className="font-medium">Out for Delivery:</span> Your shipment is on its final journey to the delivery address.<br/>
                <span className="font-medium">Delivered:</span> Your shipment has been delivered to the recipient.<br/>
                <span className="font-medium">Exception:</span> There is a delay or issue with your shipment.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TrackingPage;