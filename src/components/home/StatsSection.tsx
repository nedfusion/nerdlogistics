import React from 'react';
import Section from '../common/Section';

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary-950 mb-2">
        {value}
      </div>
      <div className="text-neutral-600">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  return (
    <Section bgColor="bg-white" className="py-16">
      <div className="bg-primary-950 rounded-xl py-12 px-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3377395/pexels-photo-3377395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-10"></div>
        
        <div className="relative">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="10+" label="Years of Experience" />
            <Stat value="5M+" label="Kilometers Covered" />
            <Stat value="25k+" label="Deliveries Completed" />
            <Stat value="98%" label="On-time Delivery Rate" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatsSection;