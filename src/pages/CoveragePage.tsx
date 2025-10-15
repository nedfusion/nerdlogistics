import React from 'react';
import { MapPin, Check } from 'lucide-react';
import Section from '../components/common/Section';

const CoveragePage: React.FC = () => {
  // Group Nigerian states by region
  const regions = {
    'North Central': ['Benue', 'FCT (Abuja)', 'Kogi', 'Kwara', 'Nasarawa', 'Niger', 'Plateau'],
    'North East': ['Adamawa', 'Bauchi', 'Borno', 'Gombe', 'Taraba', 'Yobe'],
    'North West': ['Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Sokoto', 'Zamfara'],
    'South East': ['Abia', 'Anambra', 'Ebonyi', 'Enugu', 'Imo'],
    'South South': ['Akwa Ibom', 'Bayelsa', 'Cross River', 'Delta', 'Edo', 'Rivers'],
    'South West': ['Ekiti', 'Lagos', 'Ogun', 'Ondo', 'Osun', 'Oyo']
  };
  
  // Major cities with presence
  const majorCities = [
    { name: 'Lagos', state: 'Lagos', services: ['Headquarters', 'Warehousing', 'Distribution Center', 'Vehicle Maintenance'] },
    { name: 'Abuja', state: 'FCT', services: ['Regional Office', 'Warehousing', 'Distribution Center'] },
    { name: 'Port Harcourt', state: 'Rivers', services: ['Regional Office', 'Warehousing', 'Oil & Gas Logistics'] },
    { name: 'Kano', state: 'Kano', services: ['Regional Office', 'Distribution Center'] },
    { name: 'Ibadan', state: 'Oyo', services: ['Distribution Center', 'Warehousing'] },
    { name: 'Enugu', state: 'Enugu', services: ['Distribution Center'] },
    { name: 'Calabar', state: 'Cross River', services: ['Distribution Center'] },
    { name: 'Benin City', state: 'Edo', services: ['Distribution Center'] },
    { name: 'Kaduna', state: 'Kaduna', services: ['Distribution Center'] },
    { name: 'Jos', state: 'Plateau', services: ['Distribution Center'] },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Coverage Area</h1>
            <p className="text-xl text-neutral-200">
              Nerd Logistics provides comprehensive logistics and freight services across all 36 states of Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nationwide Network</h2>
            <p className="text-neutral-700 mb-6">
              Our extensive logistics network covers all 36 states and the Federal Capital Territory, 
              with strategic hubs in major cities to ensure efficient and timely deliveries nationwide. 
              With our headquarters in Lagos, we've established regional offices and distribution centers 
              across the country to serve you better.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <MapPin className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Strategic Locations</h3>
                  <p className="text-neutral-600">
                    Regional offices and distribution centers placed strategically across Nigeria's six geopolitical zones.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Check className="text-secondary-500 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Complete Coverage</h3>
                  <p className="text-neutral-600">
                    Delivery capabilities extend to all states and major cities, including remote areas.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-500 flex-shrink-0 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Optimized Routes</h3>
                  <p className="text-neutral-600">
                    Carefully planned transportation routes that minimize delivery times and costs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 p-5 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Delivery Times by Region</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium mb-1">Within Same City</div>
                  <div className="text-primary-950 font-semibold">Same Day - 24 Hours</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Neighboring States</div>
                  <div className="text-primary-950 font-semibold">24 - 48 Hours</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Cross-Regional</div>
                  <div className="text-primary-950 font-semibold">48 - 72 Hours</div>
                </div>
                <div>
                  <div className="text-sm font-medium mb-1">Remote Areas</div>
                  <div className="text-primary-950 font-semibold">72 - 96 Hours</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-neutral-100 rounded-lg p-5 h-[500px] flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-xl font-semibold mb-4">Interactive Nigeria Map</h3>
                <p className="text-neutral-700 mb-4">
                  This would be an interactive map showing our coverage across Nigeria.
                </p>
                <p className="text-neutral-500 text-sm">
                  (For an actual implementation, you would include an interactive map here)
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Major Cities */}
      <Section
        title="Our Presence in Major Cities"
        subtitle="Strategic locations across Nigeria to serve you better."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {majorCities.map((city, index) => (
            <div key={index} className="card p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary-50 p-2 rounded-full text-primary-950">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{city.name}</h3>
                  <p className="text-neutral-500">{city.state} State</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm text-neutral-500 mb-2">Available Services:</h4>
                <ul className="space-y-1">
                  {city.services.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-secondary-500 flex-shrink-0 mt-0.5" size={16} />
                      <span className="text-neutral-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* States by Region */}
      <Section
        title="States We Cover"
        subtitle="Our logistics services extend to all states across Nigeria's six geopolitical zones."
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(regions).map(([region, states]) => (
            <div key={region} className="bg-neutral-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-primary-950">{region}</h3>
              <ul className="space-y-2">
                {states.map((state, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-secondary-500" size={16} />
                    <span>{state}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-primary-950" className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Ship Across Nigeria?
            </h2>
            <p className="text-neutral-300 mb-8">
              Whether you need to transport goods to major cities or remote areas, our nationwide network ensures reliable and efficient delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/quote" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
                Get a Quote
              </a>
              <a href="/contact" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Have a Specific Route Question?</h3>
            <p className="text-neutral-700 mb-4">
              If you need information about a specific route or delivery time, our team is here to help.
            </p>
            <form className="space-y-4">
              <div>
                <label className="form-label">Route Details</label>
                <input 
                  type="text"
                  placeholder="e.g., Lagos to Maiduguri"
                  className="form-input"
                />
              </div>
              <div>
                <label className="form-label">Your Email</label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  className="form-input"
                />
              </div>
              <button type="button" className="btn btn-primary w-full">
                Get Route Information
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default CoveragePage;