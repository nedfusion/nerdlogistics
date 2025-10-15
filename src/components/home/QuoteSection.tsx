import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from '../common/Section';

const QuoteSection: React.FC = () => {
  return (
    <Section bgColor="bg-primary-950" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-neutral-300 text-lg mb-8 max-w-2xl">
            Get a personalized quote for your logistics needs and discover how Nerd Logistics can help streamline your supply chain.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/quote" className="btn bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-400">
              Get Your Free Quote <ArrowRight size={18} className="ml-2" />
            </Link>
            <Link to="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white">
              Contact Our Team
            </Link>
          </div>
        </div>
        
        <div className="md:col-span-2 relative">
          <img 
            src="https://images.pexels.com/photos/6169111/pexels-photo-6169111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Logistics professional" 
            className="rounded-lg shadow-lg w-full h-64 md:h-80 object-cover"
          />
          <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 md:p-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-success-500"></div>
              <p className="font-medium text-primary-950">Available 24/7</p>
            </div>
            <p className="text-neutral-600 text-sm">
              Our customer support team is always ready to assist you.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default QuoteSection;