import React from 'react';
import { Truck, CheckCircle2, Shield, Users, Settings, FileText } from 'lucide-react';
import Section from '../components/common/Section';

interface VehicleCardProps {
  name: string;
  image: string;
  capacity: string;
  dimensions: string;
  features: string[];
  useCases: string[];
}

const VehicleCard: React.FC<VehicleCardProps> = ({
  name,
  image,
  capacity,
  dimensions,
  features,
  useCases,
}) => {
  return (
    <div className="card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{name}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-sm text-neutral-500">Capacity</div>
            <div className="font-medium">{capacity}</div>
          </div>
          <div>
            <div className="text-sm text-neutral-500">Dimensions</div>
            <div className="font-medium">{dimensions}</div>
          </div>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-neutral-500 mb-2">Key Features</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-neutral-700 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-neutral-500 mb-2">Ideal For</h4>
          <ul className="space-y-1">
            {useCases.map((useCase, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="text-primary-500 flex-shrink-0 mt-0.5" size={16} />
                <span className="text-neutral-700 text-sm">{useCase}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const FleetPage: React.FC = () => {
  const vehicles = [
    {
      name: 'Light Delivery Van',
      image: 'https://images.pexels.com/photos/5025524/pexels-photo-5025524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      capacity: '1-2 tons',
      dimensions: '4m x 2m x 2m',
      features: [
        'Fuel-efficient engines',
        'GPS tracking system',
        'Easy urban maneuverability',
        'Climate-controlled cargo area'
      ],
      useCases: [
        'Urban deliveries',
        'Last-mile logistics',
        'E-commerce fulfillment',
        'Courier services'
      ]
    },
    {
      name: 'Medium Duty Truck',
      image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      capacity: '5-10 tons',
      dimensions: '7m x 2.5m x 2.8m',
      features: [
        'Reinforced cargo bed',
        'Hydraulic lift gate',
        'Advanced security system',
        'Extended range fuel tanks'
      ],
      useCases: [
        'Regional distribution',
        'Retail store replenishment',
        'Construction materials',
        'Manufacturing goods'
      ]
    },
    {
      name: 'Heavy-Duty Truck',
      image: 'https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      capacity: '15-30 tons',
      dimensions: '12m x 2.6m x 3m',
      features: [
        'High-torque diesel engines',
        'Air ride suspension',
        'Driver comfort features',
        'Enhanced braking systems'
      ],
      useCases: [
        'Long-haul transport',
        'Bulk goods movement',
        'Industrial equipment',
        'Intercity freight'
      ]
    },
    {
      name: 'Refrigerated Truck',
      image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      capacity: '5-15 tons',
      dimensions: '8m x 2.5m x 3m',
      features: [
        'Temperature control (-25°C to +25°C)',
        'Temperature monitoring system',
        'Insulated cargo compartment',
        'Backup power systems'
      ],
      useCases: [
        'Perishable goods',
        'Pharmaceutical products',
        'Frozen foods',
        'Temperature-sensitive materials'
      ]
    },
    {
      name: 'Flatbed Truck',
      image: 'https://images.pexels.com/photos/2996322/pexels-photo-2996322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      capacity: '10-25 tons',
      dimensions: '12m x 2.5m x 1.5m',
      features: [
        'Reinforced flatbed platform',
        'Multiple tie-down points',
        'Optional side rails',
        'Heavy-duty winch systems'
      ],
      useCases: [
        'Construction equipment',
        'Steel and metal products',
        'Machinery transport',
        'Oversized loads'
      ]
    },
    {
      name: 'Tanker Truck',
      image: 'https://images.pexels.com/photos/2909532/pexels-photo-2909532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
      capacity: '15-30,000 liters',
      dimensions: '10m x 2.5m x 3.5m',
      features: [
        'Stainless steel tanks',
        'Multiple compartment options',
        'Advanced pumping systems',
        'Safety pressure valves'
      ],
      useCases: [
        'Liquid transport',
        'Fuel delivery',
        'Chemical transport',
        'Bulk liquids'
      ]
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Fleet</h1>
            <p className="text-xl text-neutral-200">
              Discover our modern and diverse fleet of vehicles equipped to handle any logistics challenge.
            </p>
          </div>
        </div>
      </div>

      {/* Fleet Overview */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl font-bold mb-6">Modern Fleet for Every Need</h2>
          <p className="text-neutral-700 mb-6">
            At Nerd Logistics, we maintain a diverse and well-maintained fleet of over 500 vehicles designed 
            to meet any logistics requirement. From small delivery vans to heavy-duty trucks, our fleet is 
            equipped with the latest technology to ensure safe, efficient, and reliable transportation.
          </p>
          <p className="text-neutral-700">
            All our vehicles undergo regular maintenance and safety checks to ensure they meet the highest 
            standards of performance and reliability. Our drivers are professionally trained and committed 
            to delivering your cargo safely and on time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <VehicleCard
              key={index}
              name={vehicle.name}
              image={vehicle.image}
              capacity={vehicle.capacity}
              dimensions={vehicle.dimensions}
              features={vehicle.features}
              useCases={vehicle.useCases}
            />
          ))}
        </div>
      </Section>

      {/* Fleet Management */}
      <Section 
        title="Advanced Fleet Management"
        subtitle="Our modern fleet is backed by cutting-edge technology and rigorous maintenance protocols."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-950">
                  <Shield size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Safety First Approach</h3>
                  <p className="text-neutral-700">
                    Our vehicles are equipped with advanced safety features and undergo regular safety inspections. 
                    We maintain comprehensive insurance coverage and adhere to all transportation regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-950">
                  <Settings size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Preventive Maintenance</h3>
                  <p className="text-neutral-700">
                    Our rigorous maintenance program ensures vehicles are always in optimal condition. 
                    Regular servicing, inspections, and part replacements minimize breakdowns and delays.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-950">
                  <Truck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                  <p className="text-neutral-700">
                    Every vehicle in our fleet is equipped with GPS tracking technology, providing real-time 
                    location data and allowing for efficient route management and accurate delivery estimates.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-lg text-primary-950">
                  <Users size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Drivers</h3>
                  <p className="text-neutral-700">
                    Our drivers undergo extensive training in safe driving practices, cargo handling, 
                    and customer service. We invest in continuous education to ensure our team stays current 
                    with industry best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Fleet management" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Compliance & Certifications */}
      <Section 
        title="Compliance & Certifications"
        subtitle="Our operations adhere to the highest industry standards and regulations."
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-neutral-50 p-6 rounded-lg text-center">
            <div className="bg-primary-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={28} />
            </div>
            <h3 className="font-semibold mb-2">ISO 9001:2015</h3>
            <p className="text-neutral-600 text-sm">
              Certified for quality management systems in logistics operations
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg text-center">
            <div className="bg-primary-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">FRSC Compliance</h3>
            <p className="text-neutral-600 text-sm">
              Full compliance with Federal Road Safety Corps regulations
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg text-center">
            <div className="bg-primary-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">NUPENG Certification</h3>
            <p className="text-neutral-600 text-sm">
              Certified by the Nigerian Union of Petroleum and Natural Gas Workers
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 rounded-lg text-center">
            <div className="bg-primary-950 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">NIMASA Compliance</h3>
            <p className="text-neutral-600 text-sm">
              Compliant with Nigerian Maritime Administration and Safety Agency standards
            </p>
          </div>
        </div>
      </Section>

      {/* Custom Transport Solutions */}
      <Section
        title="Custom Transport Solutions"
        subtitle="Need a specialized logistics solution? We can customize our fleet to meet your specific requirements."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-4">Temperature-Controlled Transport</h3>
                <p className="text-neutral-700 mb-4">
                  Our refrigerated vehicles maintain precise temperature control for sensitive goods like pharmaceuticals, 
                  food products, and perishable items. Temperature ranges from -25°C to +25°C with continuous monitoring.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Multiple temperature zones available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Real-time temperature monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Backup cooling systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-4">High-Security Transport</h3>
                <p className="text-neutral-700 mb-4">
                  For high-value or sensitive cargo, our secure transport solutions include armored vehicles, 
                  security personnel, and advanced monitoring systems to ensure the safety of your goods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">GPS tracking and geofencing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">24/7 monitoring center</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Tamper-evident seals and locks</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-4">Oversized Load Transport</h3>
                <p className="text-neutral-700 mb-4">
                  Our specialized equipment can handle oversized and heavy loads such as industrial machinery, 
                  construction equipment, and large structures with proper permits and escort vehicles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Route planning for oversized cargo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Permit acquisition assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Specialized loading/unloading equipment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-card">
                <h3 className="text-xl font-semibold mb-4">Hazardous Materials Transport</h3>
                <p className="text-neutral-700 mb-4">
                  Our certified drivers and specially equipped vehicles ensure the safe transport of hazardous 
                  materials in compliance with all relevant regulations and safety standards.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">HAZMAT certified personnel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Emergency response planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-neutral-700 text-sm">Specialized containment systems</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-primary-950 p-8 rounded-lg text-white">
            <h3 className="text-xl font-bold mb-6">Request a Custom Solution</h3>
            <p className="mb-6">
              Have unique logistics requirements? Our team can design a custom solution tailored specifically to your needs.
            </p>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">
                  Business Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-1">
                  Transport Requirement
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  placeholder="Describe your logistics needs"
                  rows={4}
                ></textarea>
              </div>
              
              <button type="button" className="btn w-full bg-secondary-500 hover:bg-secondary-600 text-white">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-white">
        <div className="bg-primary-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Fleet in Action?</h2>
          <p className="text-neutral-700 mb-8 max-w-3xl mx-auto">
            Whether you need a single delivery or a comprehensive logistics solution, our fleet is ready to serve you. 
            Contact our team today to discuss how we can support your transportation needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/quote" className="btn btn-primary">
              Request a Quote
            </a>
            <a href="/contact" className="btn btn-outline">
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FleetPage;