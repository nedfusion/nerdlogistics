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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-neutral-700 mb-4">
              Nerd Logistics was founded in 2015 with a vision to transform Nigeria's logistics landscape. 
              What began as a small operation with just three trucks in Lagos has grown into one of the 
              country's most trusted logistics providers.
            </p>
            <p className="text-neutral-700 mb-4">
              Our journey has been defined by a commitment to reliability, innovation, and customer satisfaction. 
              We've continuously invested in our fleet, technology, and people to ensure we deliver the highest 
              quality service to our clients.
            </p>
            <p className="text-neutral-700">
              Today, we operate across all 36 states in Nigeria, with a modern fleet of over 500 vehicles and 
              a team of experienced professionals dedicated to moving your cargo safely and efficiently.
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
            <p className="text-neutral-700">
              To provide reliable, efficient, and innovative logistics solutions that empower businesses 
              across Nigeria to thrive in an increasingly connected economy. We are committed to delivering 
              excellence in every shipment while maintaining the highest standards of safety and customer service.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-card">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <div className="bg-primary-50 p-2 rounded-full mr-3">
                <TrendingUp className="text-primary-950" size={24} />
              </div>
              Our Vision
            </h3>
            <p className="text-neutral-700">
              To be the undisputed leader in logistics and freight services in West Africa, known for our 
              reliability, innovation, and commitment to customer success. We aim to set new standards in 
              the industry through sustainable practices, technological advancement, and operational excellence.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Reliability</h3>
            <p className="text-neutral-700">
              We deliver on our promises, ensuring consistent and dependable service that our clients can count on.
            </p>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Safety</h3>
            <p className="text-neutral-700">
              We prioritize the safety of our team, our clients' cargo, and the communities we serve.
            </p>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-neutral-700">
              We continuously seek better ways to serve our clients through technology and process improvements.
            </p>
          </div>
          
          <div className="bg-primary-50 p-6 rounded-lg">
            <div className="bg-primary-950 text-white w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-neutral-700">
              We conduct our business with honesty and transparency, building trust with every interaction.
            </p>
          </div>
        </div>
      </Section>

      {/* Leadership Team */}
      <Section 
        title="Our Leadership Team" 
        subtitle="Meet the experienced professionals who drive our success."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Oluwaseun Adeyemi" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Oluwaseun Adeyemi</h3>
              <p className="text-secondary-500 mb-4">Chief Executive Officer</p>
              <p className="text-neutral-600">
                With over 15 years in logistics and supply chain management, Oluwaseun has led Nerd Logistics 
                to become one of Nigeria's most trusted freight providers.
              </p>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Ngozi Okonkwo" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Ngozi Okonkwo</h3>
              <p className="text-secondary-500 mb-4">Chief Operations Officer</p>
              <p className="text-neutral-600">
                Ngozi oversees our nationwide operations, ensuring seamless coordination between our fleet, 
                warehousing, and customer service teams.
              </p>
            </div>
          </div>
          
          <div className="card overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img 
                src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Ibrahim Garba" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Ibrahim Garba</h3>
              <p className="text-secondary-500 mb-4">Technology Director</p>
              <p className="text-neutral-600">
                Ibrahim leads our technological initiatives, including our real-time tracking system and 
                digital transformation efforts.
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