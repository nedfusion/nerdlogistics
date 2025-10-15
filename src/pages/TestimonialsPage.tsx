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
      name: 'Adebayo Johnson',
      company: 'ABC Manufacturing Ltd',
      position: 'Operations Manager',
      location: 'Lagos',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'Nerd Logistics has transformed our distribution capabilities. Their reliable service and real-time tracking have significantly improved our customer satisfaction rates. We\'ve been working with them for over 2 years, and they consistently exceed our expectations.',
      rating: 5,
      service: 'Logistics Solutions',
    },
    {
      name: 'Chioma Okafor',
      company: 'Sunrise Retailers',
      position: 'Supply Chain Director',
      location: 'Abuja',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'We\'ve been working with Nerd Logistics for over 3 years now, and they\'ve consistently delivered on their promises. Their nationwide coverage is unmatched, and their customer service is exceptional. They\'ve become an integral part of our supply chain.',
      rating: 5,
      service: 'Nationwide Haulage',
    },
    {
      name: 'Mohammed Ibrahim',
      company: 'Green Harvest Exports',
      position: 'CEO',
      location: 'Kano',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'The specialized transport service for our temperature-sensitive goods has been flawless. I highly recommend their services to any business with unique shipping requirements. Their attention to detail and commitment to quality are outstanding.',
      rating: 4,
      service: 'Specialized Transport',
    },
    {
      name: 'Funke Adebisi',
      company: 'TechSolutions Nigeria',
      position: 'Logistics Coordinator',
      location: 'Port Harcourt',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'We needed a reliable partner for our express delivery needs, and Nerd Logistics has exceeded our expectations. Their on-time delivery rate is impressive, and their tracking system gives us complete visibility into our shipments.',
      rating: 5,
      service: 'Express Delivery',
    },
    {
      name: 'Emeka Okafor',
      company: 'BuildRight Construction',
      position: 'Procurement Manager',
      location: 'Enugu',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'Our construction projects rely on timely delivery of materials, and Nerd Logistics has never let us down. Their heavy haulage services are professional and reliable, and their team is always responsive to our needs.',
      rating: 5,
      service: 'Freight Operations',
    },
    {
      name: 'Aisha Mohammed',
      company: 'FreshGoods Nigeria',
      position: 'Operations Director',
      location: 'Kaduna',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'The warehousing solutions provided by Nerd Logistics have helped us optimize our inventory management and improve our distribution efficiency. Their facilities are well-maintained and their staff is professional.',
      rating: 4,
      service: 'Warehousing',
    },
    {
      name: 'Olumide Bankole',
      company: 'Retail Plus Stores',
      position: 'CEO',
      location: 'Ibadan',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'Since partnering with Nerd Logistics, we\'ve seen a 30% improvement in our delivery times. Their nationwide network allows us to reach customers in remote areas, which has been crucial for our expansion strategy.',
      rating: 5,
      service: 'Nationwide Haulage',
    },
    {
      name: 'Grace Nwosu',
      company: 'HealthPlus Clinics',
      position: 'Supply Chain Manager',
      location: 'Lagos',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'The specialized transport service for our medical equipment was handled with the utmost care. The team at Nerd Logistics understands the critical nature of our shipments and treats them accordingly.',
      rating: 5,
      service: 'Specialized Transport',
    },
  ];

  const highlightedTestimonials = testimonials.slice(0, 3);
  const regularTestimonials = testimonials.slice(3);

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
              <h3 className="text-2xl font-bold mb-2">ABC Manufacturing Ltd</h3>
              <p className="text-neutral-500">Lagos, Nigeria</p>
            </div>
            
            <h4 className="text-lg font-semibold mb-3">The Challenge</h4>
            <p className="text-neutral-700 mb-6">
              ABC Manufacturing was struggling with unreliable logistics providers, resulting in delayed deliveries and unhappy customers. They needed a partner who could handle their nationwide distribution needs with consistency and reliability.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Our Solution</h4>
            <p className="text-neutral-700 mb-6">
              We implemented a comprehensive logistics solution that included dedicated transport routes, real-time tracking, and proactive communication protocols. Our team worked closely with ABC to understand their specific needs and create a tailored approach.
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
              <footer className="mt-2 font-medium not-italic">— Adebayo Johnson, Operations Manager</footer>
            </blockquote>
          </div>
          
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-card">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Green Harvest Exports</h3>
              <p className="text-neutral-500">Kano, Nigeria</p>
            </div>
            
            <h4 className="text-lg font-semibold mb-3">The Challenge</h4>
            <p className="text-neutral-700 mb-6">
              Green Harvest Exports needed a specialized transport solution for their temperature-sensitive agricultural products. Previous providers had failed to maintain the required temperature conditions, resulting in product spoilage and financial losses.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">Our Solution</h4>
            <p className="text-neutral-700 mb-6">
              We provided temperature-controlled vehicles with continuous monitoring systems to ensure optimal conditions throughout transit. Our specialized handling protocols and trained personnel ensured the integrity of their sensitive cargo.
            </p>
            
            <h4 className="text-lg font-semibold mb-3">The Results</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">99%</div>
                <div className="text-neutral-600">Product integrity maintained</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">35%</div>
                <div className="text-neutral-600">Reduction in spoilage</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">20%</div>
                <div className="text-neutral-600">Increase in export volume</div>
              </div>
              <div className="bg-primary-50 p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary-950">15%</div>
                <div className="text-neutral-600">Improved profit margins</div>
              </div>
            </div>
            
            <blockquote className="bg-neutral-100 p-4 rounded-lg italic text-neutral-700">
              "The specialized transport service from Nerd Logistics has revolutionized our export business. We can now confidently ship our products knowing they'll arrive in perfect condition."
              <footer className="mt-2 font-medium not-italic">— Mohammed Ibrahim, CEO</footer>
            </blockquote>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/contact" className="btn btn-primary">
            Discuss Your Success Story
          </Link>
        </div>
      </Section>

      {/* More Testimonials */}
      <Section
        title="More Client Feedback"
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-neutral-50 p-6 rounded-lg h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonial.rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-secondary-500">
                  <Quote size={20} />
                </div>
              </div>
              
              <blockquote className="text-neutral-700 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="mt-auto pt-4 border-t border-neutral-200">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-neutral-500 text-sm">{testimonial.position}, {testimonial.company}</div>
              </div>
            </div>
          ))}
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