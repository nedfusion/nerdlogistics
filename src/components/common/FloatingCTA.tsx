import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Truck, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem('ctaDismissed') === 'true';
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const dismissCTA = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ctaDismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-40 max-w-sm bg-white rounded-lg shadow-lg animate-slideIn">
      <div className="relative p-5">
        <button
          onClick={dismissCTA}
          className="absolute top-2 right-2 text-neutral-500 hover:text-neutral-800"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        <div className="flex items-center gap-4">
          <div className="bg-primary-50 p-3 rounded-full">
            <Truck className="text-primary-950" size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-primary-950 mb-1">
              Need shipping solutions?
            </h4>
            <p className="text-neutral-600 text-sm mb-3">
              Get an instant quote for your logistics needs.
            </p>
            <div className="flex gap-2">
              <Link to="/quote" className="btn btn-primary py-2 px-4 text-sm">
                Request Quote
              </Link>
              <Link to="/tracking" className="btn btn-outline py-2 px-4 text-sm">
                Track Shipment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;