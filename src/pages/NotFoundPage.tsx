import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, HelpCircle, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-grow flex items-center justify-center py-20">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-block bg-primary-50 p-6 rounded-full">
                <HelpCircle className="h-16 w-16 text-primary-950" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-950">404</h1>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-800">Page Not Found</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
              The page you are looking for doesn't exist or has been moved. Please check the URL or try one of the options below.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Link to="/" className="btn btn-primary flex items-center gap-2">
                <Home size={20} />
                Go to Homepage
              </Link>
              <Link to="/contact" className="btn btn-outline flex items-center gap-2">
                <HelpCircle size={20} />
                Contact Support
              </Link>
            </div>
            
            <div className="max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Looking for something specific?</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search our website..."
                  className="w-full py-3 px-4 pl-12 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-neutral-200">
            <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/services" className="text-center p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="text-primary-950 font-medium">Our Services</div>
              </Link>
              <Link to="/tracking" className="text-center p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="text-primary-950 font-medium">Track Shipment</div>
              </Link>
              <Link to="/quote" className="text-center p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="text-primary-950 font-medium">Get a Quote</div>
              </Link>
              <Link to="/blog" className="text-center p-4 rounded-lg hover:bg-neutral-50 transition-colors">
                <div className="text-primary-950 font-medium">Blog</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;