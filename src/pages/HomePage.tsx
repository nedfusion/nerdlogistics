import React from 'react';
import Hero from '../components/home/Hero';
import ServicesSection from '../components/home/ServicesSection';
import AboutSection from '../components/home/AboutSection';
import TrackingSection from '../components/home/TrackingSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import StatsSection from '../components/home/StatsSection';
import QuoteSection from '../components/home/QuoteSection';
import ContactForm from '../components/common/ContactForm';
import Section from '../components/common/Section';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TrackingSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <QuoteSection />
      
      <Section
        title="Get in Touch"
        subtitle="Have questions or need a custom logistics solution? Our team is here to help."
        bgColor="bg-neutral-50"
      >
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </Section>
    </div>
  );
};

export default HomePage;