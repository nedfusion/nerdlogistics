import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Section from '../components/common/Section';
import ContactForm from '../components/common/ContactForm';

const ContactPage: React.FC = () => {
  const officeLocations = [
    {
      city: 'Lagos (Headquarters)',
      address: '123 Logistics Way, Lekki, Lagos',
      phone: '+234 901 234 5678',
      email: 'lagos@nerdlogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
    {
      city: 'Abuja',
      address: '45 Capital Boulevard, Central District, Abuja',
      phone: '+234 902 345 6789',
      email: 'abuja@nerdlogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
    {
      city: 'Port Harcourt',
      address: '78 Riverside Road, GRA Phase 2, Port Harcourt',
      phone: '+234 903 456 7890',
      email: 'portharcourt@nerdlogistics.com',
      hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7709206/pexels-photo-7709206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-neutral-200">
              Get in touch with our team for any inquiries about our logistics services.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Details */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-neutral-700 mb-8">
              Have questions about our services or need a custom logistics solution? 
              Our team is ready to assist you. Fill out the form, and we'll get back to you promptly.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-full text-primary-950">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Phone Support</h3>
                  <p className="text-neutral-700">24/7 Customer Service</p>
                  <a href="tel:+2348064189445" className="text-primary-950 font-medium hover:text-primary-700">
                    +234 806 418 9445
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-full text-primary-950">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email</h3>
                  <p className="text-neutral-700">For Inquiries & Support</p>
                  <a href="mailto:infor@nerdlogistics.net" className="text-primary-950 font-medium hover:text-primary-700">
                    infor@nerdlogistics.net
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-primary-50 p-3 rounded-full text-primary-950">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-neutral-700">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-neutral-700">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-neutral-200 pt-8">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-950 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
                  </svg>
                </a>
                <a href="#" className="bg-primary-950 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="bg-primary-950 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="bg-primary-950 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-800 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Office Locations */}
      <Section 
        title="Our Offices"
        subtitle="Visit us at one of our convenient locations across Nigeria."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officeLocations.map((office, index) => (
            <div key={index} className="card p-6 relative">
              <div className="absolute top-0 right-0 bg-primary-950 text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
                {index === 0 ? 'HQ' : 'Branch Office'}
              </div>
              <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="text-secondary-500 flex-shrink-0" size={20} />
                  <p className="text-neutral-700">{office.address}</p>
                </div>
                
                <div className="flex gap-3">
                  <Phone className="text-secondary-500 flex-shrink-0" size={20} />
                  <a href={`tel:${office.phone}`} className="text-neutral-700 hover:text-primary-700">
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Mail className="text-secondary-500 flex-shrink-0" size={20} />
                  <a href={`mailto:${office.email}`} className="text-neutral-700 hover:text-primary-700">
                    {office.email}
                  </a>
                </div>
                
                <div className="flex gap-3">
                  <Clock className="text-secondary-500 flex-shrink-0" size={20} />
                  <p className="text-neutral-700">{office.hours}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Map Section */}
      <Section bgColor="bg-white">
        <div className="bg-neutral-200 rounded-lg w-full h-[400px] flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold mb-4">Interactive Map</h3>
            <p className="text-neutral-700 mb-4">
              This would be an embedded Google Map showing our office locations.
            </p>
            <p className="text-neutral-500 text-sm">
              (For an actual implementation, you would include a Google Maps embed here)
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Find answers to commonly asked questions about our services and operations."
        bgColor="bg-neutral-50"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What areas do you cover for deliveries?</h3>
              <p className="text-neutral-700">
                We provide comprehensive logistics and delivery services across all 36 states in Nigeria, with a focus on major cities and commercial centers.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How can I track my shipment?</h3>
              <p className="text-neutral-700">
                You can track your shipment in real-time using the tracking number provided at the time of booking. Simply enter the number on our tracking page or contact our customer service team.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What are your customer service hours?</h3>
              <p className="text-neutral-700">
                Our customer service team is available 24/7 to assist with any inquiries or issues. For general inquiries, our office hours are Monday to Friday, 8:00 AM to 6:00 PM, and Saturday, 9:00 AM to 2:00 PM.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How do I request a quote for your services?</h3>
              <p className="text-neutral-700">
                You can request a quote by filling out our online quote form, calling our customer service line, or visiting one of our offices. We'll need details about your shipment to provide an accurate quote.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;