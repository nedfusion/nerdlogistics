import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Section from '../common/Section';

const AboutSection: React.FC = () => {
  const achievements = [
    { value: '36+', label: 'States Covered' },
    { value: '1000+', label: 'Happy Clients' },
    { value: '500+', label: 'Vehicles' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <Section bgColor="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Logistics operations"
              className="rounded-lg shadow-lg w-full object-cover h-96 md:h-[500px]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg hidden md:grid grid-cols-2 gap-4 w-72">
              {achievements.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-950">{item.value}</div>
                  <div className="text-sm text-neutral-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nigeria's Most Trusted Logistics & Freight Partner</h2>
          
          <p className="text-neutral-700 mb-6">
            At Nerd Logistics, we combine industry expertise with cutting-edge technology to provide reliable, efficient, and secure logistics solutions. With over 10 years of experience, we've built a reputation for excellence in the transport and logistics sector.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Modern Fleet</h3>
                <p className="text-neutral-600">
                  Our extensive fleet of well-maintained vehicles ensures we can handle any logistics challenge.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Experienced Team</h3>
                <p className="text-neutral-600">
                  Our professional drivers and logistics experts bring years of industry knowledge to every delivery.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Nationwide Network</h3>
                <p className="text-neutral-600">
                  With operations spanning all 36 Nigerian states, we offer true nationwide coverage.
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:hidden grid grid-cols-2 gap-4 my-8">
            {achievements.map((item, index) => (
              <div key={index} className="text-center p-4 bg-neutral-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-950">{item.value}</div>
                <div className="text-sm text-neutral-600">{item.label}</div>
              </div>
            ))}
          </div>
          
          <Link to="/about" className="btn btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;