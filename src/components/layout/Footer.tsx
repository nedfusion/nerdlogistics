import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from '../common/Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <Logo className="h-10 w-auto" isWhite={true} />
            </Link>
            <p className="text-neutral-300">
              Providing comprehensive logistics, haulage, and freight services across Nigeria with reliability, efficiency, and professionalism.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-neutral-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-neutral-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-neutral-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-neutral-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-300 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/coverage" className="text-neutral-300 hover:text-white transition-colors">Coverage Area</Link>
              </li>
              <li>
                <Link to="/fleet" className="text-neutral-300 hover:text-white transition-colors">Our Fleet</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-neutral-300 hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/blog" className="text-neutral-300 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/logistics" className="text-neutral-300 hover:text-white transition-colors">Logistics Solutions</Link>
              </li>
              <li>
                <Link to="/services/haulage" className="text-neutral-300 hover:text-white transition-colors">Haulage Services</Link>
              </li>
              <li>
                <Link to="/services/freight" className="text-neutral-300 hover:text-white transition-colors">Freight Operations</Link>
              </li>
              <li>
                <Link to="/services/warehousing" className="text-neutral-300 hover:text-white transition-colors">Warehousing</Link>
              </li>
              <li>
                <Link to="/services/express-delivery" className="text-neutral-300 hover:text-white transition-colors">Express Delivery</Link>
              </li>
              <li>
                <Link to="/services/specialized-transport" className="text-neutral-300 hover:text-white transition-colors">Specialized Transport</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-neutral-300">Harmony Court Estate Afric Road Iporin, Surulere</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-secondary-500 flex-shrink-0" size={18} />
                <a href="tel:+2348064189445" className="text-neutral-300 hover:text-white transition-colors">+234 806 418 9445</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-secondary-500 flex-shrink-0" size={18} />
                <a href="mailto:infor@nerdlogistics.net" className="text-neutral-300 hover:text-white transition-colors">infor@nerdlogistics.net</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-secondary-500 flex-shrink-0" size={18} />
                <span className="text-neutral-300">24/7 Customer Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-neutral-400 text-sm">
            &copy; {currentYear} Nerd Logistics and Freight Limited. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6 justify-center md:justify-end">
            <Link to="/privacy-policy" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm text-neutral-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;