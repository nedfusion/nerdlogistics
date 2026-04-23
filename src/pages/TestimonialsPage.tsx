import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote } from 'lucide-react';
import Section from '../components/common/Section';

interface Testimonial {
  name: string;
  company: string;
  position: string;
  location: string;
  image: string;
  quote: string;
  rating: number;
  service: string;
}

const TestimonialsPage: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Hayat',
      company: 'Hayat',
      position: 'Management',
      location: 'Lagos',
      image: '/Hayat_logo.png',
      quote: 'Nerd Logistics has transformed our distribution capabilities. Their reliable service and real-time tracking have significantly improved our customer satisfaction rates. We\'ve been working with them for over 2 years, and they consistently exceed our expectations.',
      rating: 5,
      service: 'Logistics Solutions',
    },
    {
      name: 'FMCG Distributors',
      company: 'FMCG Distributors',
      position: 'Supply Chain Director',
      location: 'Abuja',
      image: '/top-logo-fmcg-new-2.png',
      quote: 'We\'ve been working with Nerd Logistics for over 3 years now, and they\'ve consistently delivered on their promises. Their nationwide coverage is unmatched, and their customer service is exceptional. They\'ve become an integral part of our supply chain.',
      rating: 5,
      service: 'Nationwide Haulage',
    },
    {
      name: 'Cubana Group',
      company: 'Cubana Group',
      position: 'Operations',
      location: 'Lagos',
      image: '/Cubana.jpeg',
      quote: 'The specialized transport service for our goods has been flawless. I highly recommend their services to any business with unique shipping requirements. Their attention to detail and commitment to quality are outstanding.',
      rating: 5,
      service: 'Specialized Transport',
    },
  ];

  const highlightedTestimonials = testimonials;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h1>
            <p className="text-xl text-neutral-200">
              Hear what our clients have to say about their experience working with Nerd Logistics.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Testimonials */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlightedTestimonials.map((testimonial, index) => (
            <div key={index} className="card p-6 h-full flex flex-col relative">
              <div className="text-secondary-500 absolute top-6 right-6">
                <Quote size={24} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-neutral-500 text-sm">{testimonial.position}</p>
                  <p className="text-primary-950 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < testimonial.rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              
              <blockquote className="text-neutral-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="text-sm text-neutral-500 flex items-center">
                  <span>Service: </span>
                  <span className="ml-1 text-primary-950 font-medium">{testimonial.service}</span>
                </div>
                <div className="text-sm text-neutral-500">
                  Location: {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Client Stories */}
      <Section
        title="Client Success Stories"
        subtitle="Discover how we've helped businesses across Nigeria optimize their logistics operations."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Hayat</h3>
              <p className="text-neutral-500">Lagos, Nigeria</p>
            </div>

            <h4 className="text-lg font-semibold mb-3">The Challenge</h4>
            <p className="text-neutral-700 mb-6">
              Hayat was struggling with unreliable logistics providers, resulting in delayed deliveries and unhappy customers. They needed a partner who could handle their nationwide distribution needs with consistency and reliability.
            </p>

            <h4 className="text-lg font-semibold mb-3">Our Solution</h4>
            <p className="text-neutral-700 mb-6">
              We implemented a comprehensive logistics solution that included dedicated transport routes, real-time tracking, and proactive communication protocols. Our team worked closely with Hayat to understand their specific needs and create a tailored approach.
            </p>

            <h4 className="text-lg font-semibold mb-3">The Results</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">98%</div>
                <div className="text-neutral-600">On-time delivery rate</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">25%</div>
                <div className="text-neutral-600">Reduction in logistics costs</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">40%</div>
                <div className="text-neutral-600">Faster delivery times</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">30%</div>
                <div className="text-neutral-600">Increase in customer satisfaction</div>
              </div>
            </div>

            <blockquote className="bg-neutral-100 p-4 rounded-lg italic text-neutral-700">
              "Nerd Logistics has been a game-changer for our business. Their reliable service and proactive approach have significantly improved our logistics operations."
              <footer className="mt-2 font-medium not-italic">-- Hayat, Management</footer>
            </blockquote>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Cubana Group</h3>
              <p className="text-neutral-500">Lagos, Nigeria</p>
            </div>

            <h4 className="text-lg font-semibold mb-3">The Challenge</h4>
            <p className="text-neutral-700 mb-6">
              Cubana Group needed a specialized and dependable transport solution for their hospitality and entertainment operations. Previous providers had failed to deliver consistently, resulting in operational disruptions and financial losses.
            </p>

            <h4 className="text-lg font-semibold mb-3">Our Solution</h4>
            <p className="text-neutral-700 mb-6">
              We provided dedicated vehicles with continuous monitoring systems to ensure timely and secure deliveries throughout transit. Our specialized handling protocols and trained personnel ensured the integrity of every shipment.
            </p>

            <h4 className="text-lg font-semibold mb-3">The Results</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">99%</div>
                <div className="text-neutral-600">Delivery integrity maintained</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">35%</div>
                <div className="text-neutral-600">Reduction in delays</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">20%</div>
                <div className="text-neutral-600">Increase in operational volume</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">15%</div>
                <div className="text-neutral-600">Improved profit margins</div>
              </div>
            </div>

            <blockquote className="bg-neutral-100 p-4 rounded-lg italic text-neutral-700">
              "The transport service from Nerd Logistics has revolutionized our operations. We can now confidently manage our logistics knowing everything will arrive on time and in perfect condition."
              <footer className="mt-2 font-medium not-italic">-- Cubana Group, Operations</footer>
            </blockquote>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="btn btn-primary">
            Discuss Your Success Story
          </Link>
        </div>
      </Section>

      {/* Stats Section */}
      <Section bgColor="bg-primary-950" className="py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Numbers Speak for Themselves
          </h2>
          <p className="text-neutral-300">
            Our commitment to excellence is reflected in our client satisfaction metrics.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-neutral-300">Client Satisfaction Rate</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">95%</div>
            <div className="text-neutral-300">On-Time Delivery</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-neutral-300">Active Clients</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-white mb-2">90%</div>
            <div className="text-neutral-300">Client Retention Rate</div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="bg-white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-neutral-700 mb-8">
            Experience the Nerd Logistics difference and see why businesses across Nigeria trust us with their logistics needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Our Team
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default TestimonialsPage;