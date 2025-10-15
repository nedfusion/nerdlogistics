import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Warehouse, Clock, TruckIcon, ShieldCheck } from 'lucide-react';
import Section from '../components/common/Section';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  imageSrc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon, 
  title, 
  description, 
  features,
  link,
  imageSrc
}) => {
  return (
    <div className="card group h-full flex flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 to-transparent"></div>
        <div className="absolute bottom-4 left-6 bg-white p-2 rounded-lg">
          <div className="text-primary-950">{icon}</div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-neutral-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={link} 
          className="btn btn-outline w-full text-center transition-colors hover:bg-primary-50"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Truck size={28} />,
      title: 'Logistics Solutions',
      description: 'Comprehensive logistics management tailored to your specific needs.',
      features: [
        'Supply chain optimization',
        'Route planning and management',
        'Inventory management',
        'Last-mile delivery',
      ],
      link: '/services/logistics',
      imageSrc: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    {
      icon: <TruckIcon size={28} />,
      title: 'Haulage Services',
      description: 'Reliable transportation of goods across Nigeria with our modern fleet.',
      features: [
        'Full truckload (FTL) services',
        'Less than truckload (LTL) options',
        'Specialized equipment available',
        'Bulk material transportation',
      ],
      link: '/services/haulage',
      imageSrc: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    {
      icon: <Package size={28} />,
      title: 'Freight Operations',
      description: 'Efficient freight transport with competitive pricing and flexible scheduling.',
      features: [
        'Intercity freight services',
        'Import/export coordination',
        'Cross-docking capabilities',
        'Freight consolidation',
      ],
      link: '/services/freight',
      imageSrc: 'https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    {
      icon: <Warehouse size={28} />,
      title: 'Warehousing',
      description: 'Secure storage facilities strategically located across major Nigerian cities.',
      features: [
        'Short and long-term storage',
        'Inventory management systems',
        'Pick and pack services',
        'Distribution center capabilities',
      ],
      link: '/services/warehousing',
      imageSrc: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    {
      icon: <Clock size={28} />,
      title: 'Express Delivery',
      description: 'Time-critical express deliveries with guaranteed arrival windows.',
      features: [
        'Same-day delivery options',
        'Next-day delivery services',
        'Priority handling',
        'Real-time tracking',
      ],
      link: '/services/express-delivery',
      imageSrc: 'https://images.pexels.com/photos/4428286/pexels-photo-4428286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
    {
      icon: <ShieldCheck size={28} />,
      title: 'Specialized Transport',
      description: 'Custom transport solutions for unique cargo requirements.',
      features: [
        'Temperature-controlled transport',
        'High-value item security',
        'Oversized load transport',
        'Hazardous materials handling',
      ],
      link: '/services/specialized-transport',
      imageSrc: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-neutral-200">
              Comprehensive logistics, haulage, and freight services tailored to your specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services List */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              link={service.link}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section
        title="Industries We Serve"
        subtitle="Our logistics solutions are tailored to meet the specific needs of various industries."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Retail & E-commerce" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Retail & E-commerce</h3>
            <p className="text-neutral-600 text-sm">Inventory management and last-mile delivery services</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Manufacturing" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Manufacturing</h3>
            <p className="text-neutral-600 text-sm">Raw material delivery and finished goods distribution</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Agriculture" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Agriculture</h3>
            <p className="text-neutral-600 text-sm">Farm-to-market transportation and cold chain logistics</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Healthcare" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Healthcare</h3>
            <p className="text-neutral-600 text-sm">Specialized medical equipment and pharmaceutical transport</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Construction" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Construction</h3>
            <p className="text-neutral-600 text-sm">Building materials and equipment transportation</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/2108813/pexels-photo-2108813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Oil & Gas" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Oil & Gas</h3>
            <p className="text-neutral-600 text-sm">Equipment transport and specialized logistics services</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/5331099/pexels-photo-5331099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="FMCG" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">FMCG</h3>
            <p className="text-neutral-600 text-sm">Fast-moving consumer goods distribution networks</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <img 
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Events & Exhibitions" 
              className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Events & Exhibitions</h3>
            <p className="text-neutral-600 text-sm">Time-sensitive event logistics and equipment transport</p>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-white">
        <div className="bg-primary-50 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Logistics Solution?</h2>
            <p className="text-neutral-700 mb-8">
              Our logistics experts can design a custom solution tailored to your specific business requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/quote" className="btn btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;