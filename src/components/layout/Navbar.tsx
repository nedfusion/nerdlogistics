import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Truck } from 'lucide-react';
import Logo from '../common/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 transition-colors duration-200 font-medium ${
      isActive
        ? 'text-secondary-500'
        : 'text-neutral-700 hover:text-secondary-500'
    }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
          <Logo className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/coverage" className={navLinkClasses}>
            Coverage
          </NavLink>
          <NavLink to="/fleet" className={navLinkClasses}>
            Our Fleet
          </NavLink>
          <NavLink to="/testimonials" className={navLinkClasses}>
            Testimonials
          </NavLink>
          <NavLink to="/blog" className={navLinkClasses}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <NavLink
            to="/tracking"
            className="flex items-center gap-1 text-sm font-medium text-primary-950 hover:text-primary-800"
          >
            <Truck size={16} />
            <span>Track Shipment</span>
          </NavLink>
          <Link to="/quote" className="btn btn-primary text-sm py-2">
            Get a Quote
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-neutral-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container py-4 space-y-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/coverage"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Coverage
            </NavLink>
            <NavLink
              to="/fleet"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Our Fleet
            </NavLink>
            <NavLink
              to="/testimonials"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/blog"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>

          <div className="flex flex-col space-y-3 pt-2 border-t border-neutral-200">
            <Link
              to="/tracking"
              className="flex items-center gap-2 text-primary-950 font-medium"
              onClick={closeMenu}
            >
              <Truck size={18} />
              <span>Track Shipment</span>
            </Link>
            <Link
              to="/quote"
              className="btn btn-primary text-center"
              onClick={closeMenu}
            >
              Get a Quote
            </Link>
            <div className="flex items-center gap-2 text-primary-950">
              <Phone size={18} />
              <a href="tel:+2348064189445" className="font-medium">
                +234 806 418 9445
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;