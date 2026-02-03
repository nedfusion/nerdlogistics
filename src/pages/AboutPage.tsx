import React from 'react';
import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import Section from '../components/common/Section';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4481326/pexels-photo-4481326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Nerd Logistics</h1>
            <p className="text-xl text-neutral-200">
              Learn about our journey to becoming Nigeria's premier logistics and freight partner.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-neutral-700 mb-4">
              Nerd Logistics is a premium logistics and haulage Services Company committed to providing efficient,
              reliable, and secure transportation solutions across Nigeria and West Africa. We specialize in the
              movement of goods and cargo for businesses and individuals, utilizing a modern fleet of high-capacity
              trucks, cutting-edge technology, and a professional team to ensure timely and safe deliveries.
            </p>
            <p className="text-neutral-700 mb-4">
              At Nerd Logistics, we don't just move goods — we move businesses forward by offering tailored logistics
              solutions that help our clients achieve operational efficiency and customer satisfaction.
            </p>
            <p className="text-neutral-700">
              Our clients include manufacturers, agricultural businesses, retailers, importers/exporters, and government
              agencies. We serve industries such as Fast-Moving Consumer Goods (FMCG), Agriculture, Construction and
              Building Materials, Energy and Oil & Gas, and E-commerce and Retail Distribution.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              alt="Company history"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section bgColor="bg-neutral-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-primary-50 p-2 rounded-full mr-3">
                <Award className="text-primary-950" size={24} />
              </div>
              Our Mission
            </h3>
            <ul className="text-neutral-700 space-y-3">
              <li className="flex items-start">
                <CheckCircle className="text-primary-950 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>To deliver high-quality, timely, and cost-effective logistics and haulage services.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary-950 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>To leverage technology to simplify supply chain processes.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary-950 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>To build long-term relationships with clients based on trust, professionalism, and integrity.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary-950 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>To foster economic growth by connecting businesses with markets efficiently.</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-primary-50 p-2 rounded-full mr-3">
                <TrendingUp className="text-primary-950" size={24} />
              </div>
              Our Vision
            </h3>
            <p className="text-neutral-700">
              To be the most trusted and innovative logistics partner in Africa, providing seamless freight and
              haulage solutions through technology-driven processes and customer-centric services.
            </p>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section
        title="Our Core Values"
        subtitle="These principles guide everything we do at Nerd Logistics."
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-neutral-700">
              We operate with honesty and transparency in all our dealings.
            </p>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reliability</h3>
            <p className="text-neutral-700">
              You can count on us to deliver on time, every time.
            </p>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-neutral-700">
              We use modern tools and technology to optimize our services.
            </p>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer Commitment</h3>
            <p className="text-neutral-700">
              We put our clients first and work tirelessly to exceed their expectations.
            </p>
          </div>

          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety</h3>
            <p className="text-neutral-700">
              We prioritize the safety of goods, people, and the environment.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section
        title="Executive Leadership Team"
        subtitle="Meet the experienced professionals who drive our success."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Mr. Uko Chinedu"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Mr. Uko Chinedu</h3>
              <p className="text-secondary-500 mb-4">Chief Executive Officer</p>
              <p className="text-neutral-600 text-sm">
                Visionary founder and CEO with strong background in logistics, transportation management, and
                business strategy. Leads with focus on operational excellence, technological innovation, and
                customer satisfaction.
              </p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Mr. Isaac Eke"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Mr. Isaac Eke</h3>
              <p className="text-secondary-500 mb-4">Chief Operations Officer</p>
              <p className="text-neutral-600 text-sm">
                Oversees operations ensuring seamless movement of goods across regions. Manages fleet performance,
                route planning, operational staff, and service quality with wealth of experience in fleet management.
              </p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Engr. Uko Iheanyi"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Engr. Uko Iheanyi</h3>
              <p className="text-secondary-500 mb-4">Chief Technology Officer</p>
              <p className="text-neutral-600 text-sm">
                Responsible for all technological initiatives including fleet tracking systems, digital platforms,
                and internal software management. Leads digital transformation ensuring cutting-edge technology
                powers operations.
              </p>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Miss Stellamaris Ogonna Chukwu"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Miss Stellamaris Ogonna Chukwu</h3>
              <p className="text-secondary-500 mb-4">General Manager</p>
              <p className="text-neutral-600 text-sm">
                Handles day-to-day administrative and business functions. Oversees sales, customer relations, and
                operational support, ensuring smooth coordination between departments to deliver high-quality services.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-primary-950" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Our Services?</h2>
          <p className="text-neutral-300 mb-8">
            Join thousands of businesses across Nigeria who trust Nerd Logistics with their freight and 
            logistics needs. Contact us today to discuss how we can help optimize your supply chain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white">
              Contact Us
            </a>
            <a href="/quote" className="btn bg-transparent border-2 border-white text-white hover:bg-white/10">
              Request a Quote
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;