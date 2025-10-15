import React from 'react';
import { Star } from 'lucide-react';
import Section from '../common/Section';

interface TestimonialProps {
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  company,
  image,
  quote,
  rating,
}) => {
  return (
    <div className="card p-6 md:p-8">
      <div className="flex gap-4 items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-neutral-500 text-sm">{company}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={`${
              i < rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-300'
            }`}
          />
        ))}
      </div>
      
      <blockquote className="text-neutral-700 italic">"{quote}"</blockquote>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      company: 'ABC Manufacturing Ltd',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'Nerd Logistics has transformed our distribution capabilities. Their reliable service and real-time tracking have significantly improved our customer satisfaction rates.',
      rating: 5,
    },
    {
      name: 'Chioma Okafor',
      company: 'Sunrise Retailers',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'We\'ve been working with Nerd Logistics for over 3 years now, and they\'ve consistently delivered on their promises. Their nationwide coverage is unmatched.',
      rating: 5,
    },
    {
      name: 'Mohammed Ibrahim',
      company: 'Green Harvest Exports',
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=120',
      quote: 'The specialized transport service for our temperature-sensitive goods has been flawless. I highly recommend their services to any business with unique shipping requirements.',
      rating: 4,
    },
  ];

  return (
    <Section
      title="What Our Clients Say"
      subtitle="Don't just take our word for it. Here's what some of our valued clients have to say about our logistics services."
      bgColor="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;