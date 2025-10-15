import React from 'react';
import { Shield, Clock, Map, Truck, BarChart, UserCheck } from 'lucide-react';
import Section from '../common/Section';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300">
      <div className="text-secondary-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Safety First',
      description: 'We prioritize the safety of your goods with secure packaging, trained drivers, and vehicle monitoring systems.',
    },
    {
      icon: <Clock size={32} />,
      title: 'Timely Delivery',
      description: 'Our optimized routes and scheduling ensure your shipments arrive on time, every time.',
    },
    {
      icon: <Map size={32} />,
      title: 'Nationwide Network',
      description: 'Our extensive network covers all 36 states of Nigeria, ensuring seamless deliveries anywhere.',
    },
    {
      icon: <Truck size={32} />,
      title: 'Modern Fleet',
      description: 'Our diverse and well-maintained fleet can handle any type of cargo with precision and care.',
    },
    {
      icon: <BarChart size={32} />,
      title: 'Data-Driven Solutions',
      description: 'We leverage analytics to continuously improve our routes and delivery efficiency.',
    },
    {
      icon: <UserCheck size={32} />,
      title: 'Experienced Team',
      description: 'Our professionals bring years of logistics expertise to ensure smooth operations.',
    },
  ];

  return (
    <Section
      title="Why Choose Nerd Logistics"
      subtitle="We combine industry expertise with cutting-edge technology to deliver reliable and efficient logistics solutions."
      bgColor="bg-neutral-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;