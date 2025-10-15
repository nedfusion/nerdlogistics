import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Package, Warehouse, Map, ShieldCheck, PackageCheck } from 'lucide-react';
import Section from '../common/Section';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <div className="card p-6 md:p-8 flex flex-col h-full">
      <div className="bg-primary-50 p-4 rounded-full w-16 h-16 flex items-center justify-center text-primary-950 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-neutral-600 mb-6 flex-grow">{description}</p>
      <Link to={link} className="text-primary-950 font-medium flex items-center hover:text-primary-700 transition-colors">
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Truck size={32} />,
      title: 'Logistics Solutions',
      description: 'End-to-end logistics management tailored to your specific business needs, ensuring smooth operations and timely deliveries.',
      link: '/services/logistics',
    },
    {
      icon: <Package size={32} />,
      title: 'Freight Operations',
      description: 'Efficient freight transport by road across Nigeria, with flexible scheduling options and competitive pricing.',
      link: '/services/freight',
    },
    {
      icon: <Warehouse size={32} />,
      title: 'Warehousing',
      description: 'Secure storage facilities strategically located across major Nigerian cities for efficient distribution.',
      link: '/services/warehousing',
    },
    {
      icon: <PackageCheck size={32} />,
      title: 'Express Delivery',
      description: 'Time-critical express deliveries for urgent shipments with guaranteed arrival windows.',
      link: '/services/express-delivery',
    },
    {
      icon: <Map size={32} />,
      title: 'Nationwide Haulage',
      description: 'Heavy goods transportation across all 36 states with our modern fleet of vehicles designed for various cargo types.',
      link: '/services/haulage',
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'Specialized Transport',
      description: 'Custom transport solutions for special cargo requirements, including temperature-controlled and high-security shipments.',
      link: '/services/specialized-transport',
    },
  ];

  return (
    <Section
      title="Our Services"
      subtitle="Nerd Logistics offers a comprehensive range of transportation and logistics services to meet your specific business needs."
      bgColor="bg-neutral-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link to="/services" className="btn btn-primary">
          View All Services
        </Link>
      </div>
    </Section>
  );
};

export default ServicesSection;