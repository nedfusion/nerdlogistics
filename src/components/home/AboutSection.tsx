import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Section from '../common/Section';

const AboutSection: React.FC = () => {
  const achievements = [
    { value: 'Nigeria', label: 'Nationwide' },
    { value: 'West Africa', label: 'Coverage' },
    { value: '30-45T', label: 'Truck Fleet' },
    { value: '24/7', label: 'Support' },
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Premium Logistics & Haulage Services Across Nigeria</h2>

          <p className="text-neutral-700 mb-6">
            Nerd Logistics is a premium logistics and haulage Services Company committed to providing efficient,
            reliable, and secure transportation solutions across Nigeria and West Africa. We don't just move goods —
            we move businesses forward by offering tailored logistics solutions that help our clients achieve
            operational efficiency and customer satisfaction.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex gap-3">
              <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Modern Fleet with GPS Tracking</h3>
                <p className="text-neutral-600">
                  30-tonne and 45-tonne trucks equipped with GPS tracking and route optimization software for
                  real-time monitoring and maximum efficiency.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Technology-Driven Operations</h3>
                <p className="text-neutral-600">
                  Real-time tracking, digital proof of delivery, automated invoicing, and 24/7 customer service
                  portal powered by cutting-edge technology.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <CheckCircle className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-lg mb-1">Nationwide & Cross-Border Coverage</h3>
                <p className="text-neutral-600">
                  Comprehensive coverage across Nigeria and West Africa, serving FMCG, agriculture, construction,
                  energy, and e-commerce sectors.
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