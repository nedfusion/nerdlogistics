import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Map, BarChart, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-primary-950 to-primary-800 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="container">
          <div className="max-w-3xl animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Nigeria's Premier<br />
              <span className="text-secondary-500">Logistics & Freight</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl">
              Efficient, reliable, and secure transportation services across Nigeria. We deliver with speed and precision.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/quote" className="btn bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-400">
                Request a Quote
              </Link>
              <Link to="/services" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white">
                Explore Our Services
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-secondary-500 p-2 rounded-md">
                  <Truck size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Nationwide Coverage</h3>
                  <p className="text-sm text-neutral-200">Serving all 36 states across Nigeria</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-secondary-500 p-2 rounded-md">
                  <Map size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Real-time Tracking</h3>
                  <p className="text-sm text-neutral-200">Monitor your shipments 24/7</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-secondary-500 p-2 rounded-md">
                  <BarChart size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Competitive Pricing</h3>
                  <p className="text-sm text-neutral-200">Best rates for quality service</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 flex items-start gap-3">
                <div className="bg-secondary-500 p-2 rounded-md">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">24/7 Support</h3>
                  <p className="text-sm text-neutral-200">Always available when you need us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;