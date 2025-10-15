import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import Section from '../components/common/Section';

const serviceData = {
  logistics: {
    title: 'Logistics Solutions',
    hero: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    description: 'Our comprehensive logistics solutions are designed to optimize your supply chain, reduce costs, and improve efficiency.',
    features: [
      'End-to-end supply chain management',
      'Customized logistics planning and execution',
      'Real-time visibility and tracking',
      'Logistics optimization and consulting',
      'Inventory management systems integration',
      'Multi-modal transportation solutions'
    ],
    benefits: [
      'Reduce operational costs',
      'Improve delivery times',
      'Enhance customer satisfaction',
      'Optimize inventory levels',
      'Increase supply chain visibility',
      'Scale operations efficiently'
    ],
    process: [
      { title: 'Initial Consultation', description: 'We analyze your current logistics operations and identify opportunities for improvement.' },
      { title: 'Custom Solution Design', description: 'Our team designs a tailored logistics solution based on your specific needs and goals.' },
      { title: 'Implementation', description: 'We implement the solution with minimal disruption to your ongoing operations.' },
      { title: 'Monitoring & Optimization', description: 'Continuous monitoring and refinement to ensure optimal performance.' }
    ],
    caseStudy: {
      title: 'How We Optimized Logistics for TechRetail Nigeria',
      description: 'TechRetail faced challenges with their expanding e-commerce operations. We implemented a comprehensive logistics solution that reduced delivery times by 35% and cut operational costs by 22%.',
      results: ['35% reduction in delivery times', '22% decrease in operational costs', '99.8% on-time delivery rate', 'Expanded delivery coverage to all 36 states']
    }
  },
  haulage: {
    title: 'Haulage Services',
    hero: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    description: 'Our nationwide haulage services provide reliable transportation for all types of cargo, from full truckload to specialized equipment.',
    features: [
      'Full truckload (FTL) services',
      'Less than truckload (LTL) options',
      'Heavy equipment transportation',
      'Oversized cargo handling',
      'Multi-point pickup and delivery',
      'GPS-tracked fleet'
    ],
    benefits: [
      'Reliable and timely deliveries',
      'Flexible capacity options',
      'Real-time shipment tracking',
      'Cost-effective transportation',
      'Experienced drivers and handlers',
      'Comprehensive insurance coverage'
    ],
    process: [
      { title: 'Booking', description: 'Contact us with your haulage requirements, including cargo details, pickup and delivery locations.' },
      { title: 'Vehicle Assignment', description: 'We assign the appropriate vehicle(s) based on your cargo specifications.' },
      { title: 'Loading & Transport', description: 'Professional loading, securing, and transportation of your goods.' },
      { title: 'Delivery & Confirmation', description: 'Safe delivery to destination with digital proof of delivery.' }
    ],
    caseStudy: {
      title: 'Supporting Nationwide Expansion for BuildRight Construction',
      description: 'BuildRight needed a reliable partner to transport construction materials to multiple project sites across Nigeria. Our haulage services ensured timely deliveries and helped them complete projects on schedule.',
      results: ['100% on-time delivery for critical materials', 'Reduced transit damage by 95%', 'Supported simultaneous projects in 15 states', 'Saved 18% on transportation costs']
    }
  },
  freight: {
    title: 'Freight Operations',
    hero: 'https://images.pexels.com/photos/5025512/pexels-photo-5025512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    description: 'Our freight operations provide efficient transport solutions with flexible scheduling options and competitive pricing.',
    features: [
      'Intercity freight services',
      'Import/export coordination',
      'Cross-docking capabilities',
      'Freight consolidation',
      'Documentation management',
      'Customs clearance assistance'
    ],
    benefits: [
      'Streamlined shipping processes',
      'Reduced freight costs',
      'Faster transit times',
      'Simplified customs procedures',
      'Reduced paperwork burden',
      'Single point of contact for all freight needs'
    ],
    process: [
      { title: 'Freight Analysis', description: 'We analyze your freight requirements to determine the optimal shipping solution.' },
      { title: 'Route Optimization', description: 'Planning the most efficient routes to minimize transit time and costs.' },
      { title: 'Documentation', description: 'We handle all necessary paperwork and compliance requirements.' },
      { title: 'Execution & Tracking', description: 'Seamless execution with real-time tracking throughout the journey.' }
    ],
    caseStudy: {
      title: 'Streamlining Import Operations for FreshGoods Nigeria',
      description: 'FreshGoods struggled with delays and complexity in their import operations. Our freight services simplified their process, reduced transit times, and improved their supply chain reliability.',
      results: ['Reduced import processing time by 40%', 'Decreased documentation errors by 95%', 'Improved inventory forecasting accuracy', 'Saved approximately ₦15 million annually in logistics costs']
    }
  },
  warehousing: {
    title: 'Warehousing',
    hero: 'https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    description: 'Our strategic warehousing solutions provide secure storage and efficient distribution capabilities across major Nigerian cities.',
    features: [
      'Short and long-term storage options',
      'Temperature-controlled facilities',
      'Inventory management systems',
      'Order fulfillment services',
      'Cross-docking operations',
      'Value-added services (kitting, labeling)'
    ],
    benefits: [
      'Reduced capital investment in facilities',
      'Flexible storage capacity',
      'Improved inventory control',
      'Faster order processing',
      'Reduced transportation costs',
      'Improved customer satisfaction'
    ],
    process: [
      { title: 'Needs Assessment', description: 'We evaluate your storage and distribution requirements.' },
      { title: 'Facility Selection', description: 'We identify the optimal warehouse locations based on your distribution network.' },
      { title: 'Implementation', description: 'Setting up inventory systems and operational processes.' },
      { title: 'Ongoing Management', description: 'Professional management of your inventory and order fulfillment.' }
    ],
    caseStudy: {
      title: 'Enhancing Distribution for PharmaHealth Nigeria',
      description: 'PharmaHealth needed a temperature-controlled warehousing solution for their pharmaceutical products. Our specialized facilities and inventory management systems improved their product availability and reduced waste.',
      results: ['Zero temperature excursions for sensitive products', 'Reduced stockouts by 85%', 'Improved order accuracy to 99.9%', '30% reduction in distribution costs']
    }
  },
  'express-delivery': {
    title: 'Express Delivery',
    hero: 'https://images.pexels.com/photos/4428286/pexels-photo-4428286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    description: 'Our express delivery services ensure your time-critical shipments arrive on schedule with guaranteed delivery windows.',
    features: [
      'Same-day delivery options',
      'Next-day delivery services',
      'Priority handling',
      'Real-time tracking',
      'Proof of delivery confirmation',
      'Time-definite delivery options'
    ],
    benefits: [
      'Meet urgent deadlines',
      'Reduce inventory carrying costs',
      'Improve customer satisfaction',
      'Handle emergency situations',
      'Support just-in-time operations',
      'Maintain business continuity'
    ],
    process: [
      { title: 'Booking', description: 'Schedule your express delivery with specific time requirements.' },
      { title: 'Pickup', description: 'Immediate collection of your shipment from your location.' },
      { title: 'Expedited Transport', description: 'Priority routing and handling throughout the journey.' },
      { title: 'Confirmed Delivery', description: 'On-time delivery with electronic confirmation.' }
    ],
    caseStudy: {
      title: 'Supporting Critical Operations for TechSystems Nigeria',
      description: 'When TechSystems faced a critical hardware failure at their data center, our express delivery service transported replacement parts within hours, minimizing downtime and potential revenue loss.',
      results: ['Delivered critical components in under 3 hours', 'Helped prevent an estimated ₦25 million in downtime costs', 'Established ongoing express delivery protocol for critical parts', 'Maintained 100% on-time performance for all subsequent deliveries']
    }
  },
  'specialized-transport': {
    title: 'Specialized Transport',
    hero: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    description: 'Our specialized transport solutions are designed for unique cargo requirements, ensuring safe and compliant transportation.',
    features: [
      'Temperature-controlled transport',
      'High-value item security',
      'Oversized load transport',
      'Hazardous materials handling',
      'Fragile cargo specialists',
      'Custom packaging solutions'
    ],
    benefits: [
      'Maintain product integrity',
      'Ensure regulatory compliance',
      'Reduce risk of damage or loss',
      'Specialized equipment and training',
      'Custom handling procedures',
      'End-to-end visibility'
    ],
    process: [
      { title: 'Requirements Analysis', description: 'We assess your specialized cargo requirements and applicable regulations.' },
      { title: 'Solution Design', description: 'Custom transport solution designed for your specific cargo.' },
      { title: 'Preparation', description: 'Special equipment preparation, permits, and route planning.' },
      { title: 'Execution', description: 'Carefully monitored transportation with specialized handling.' }
    ],
    caseStudy: {
      title: 'Transporting Medical Equipment for HealthPlus Clinics',
      description: 'HealthPlus needed to transport sensitive medical imaging equipment to their new facilities across Nigeria. Our specialized transport service ensured the safe delivery of these high-value, delicate items.',
      results: ['Zero damage to sensitive equipment worth over ₦500 million', 'Coordinated delivery to match installation schedule', 'Temperature and vibration monitoring throughout transport', 'Reduced insurance costs due to specialized handling']
    }
  }
};

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Default to 'logistics' if serviceId is not found in our data
  const service = serviceId && serviceData[serviceId as keyof typeof serviceData] 
    ? serviceData[serviceId as keyof typeof serviceData] 
    : serviceData.logistics;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${service.hero})` }}></div>
        <div className="container relative">
          <div className="max-w-3xl">
            <div className="text-neutral-300 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={16} className="inline mx-2" />
              <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={16} className="inline mx-2" />
              <span>{service.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-neutral-200">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section bgColor="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Key Features</h2>
            <div className="space-y-5">
              {service.features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-lg font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8">Benefits</h2>
            <div className="space-y-5">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="text-lg font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section
        title="Our Process"
        subtitle="How we deliver exceptional service from start to finish."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-card relative">
              <div className="w-10 h-10 bg-primary-950 text-white rounded-full flex items-center justify-center font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-neutral-600">{step.description}</p>
              
              {index < service.process.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 transform translate-x-1/2">
                  <ArrowRight className="text-neutral-300" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Case Study Section */}
      <Section bgColor="bg-white">
        <div className="bg-primary-50 rounded-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="bg-primary-950 text-white text-sm font-medium px-3 py-1 rounded-full">Case Study</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.caseStudy.title}</h3>
            <p className="text-neutral-700 mb-8">
              {service.caseStudy.description}
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-4">Results:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="text-secondary-500 flex-shrink-0 mt-1" size={18} />
                    <p>{result}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section bgColor="bg-neutral-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-neutral-700 mb-8">
            Contact our team today to discuss how our {service.title.toLowerCase()} can benefit your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/quote" className="btn btn-primary">
              Request a Quote
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section
        title="Explore Other Services"
        subtitle="Discover our full range of logistics and transportation solutions."
        bgColor="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(serviceData)
            .filter(([key]) => key !== serviceId)
            .slice(0, 3)
            .map(([key, relatedService]) => (
              <Link to={`/services/${key}`} key={key} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={relatedService.hero} 
                    alt={relatedService.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-700 transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="text-neutral-600 mb-4 line-clamp-2">
                    {relatedService.description}
                  </p>
                  <span className="text-primary-950 font-medium flex items-center">
                    Learn More
                    <ChevronRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </Section>
    </div>
  );
};

export default ServiceDetailPage;