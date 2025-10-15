import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle2, Truck, ChevronDown, Send } from 'lucide-react';
import Section from '../components/common/Section';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  originCity: string;
  originState: string;
  destinationCity: string;
  destinationState: string;
  cargoType: string;
  weight: string;
  dimensions: string;
  specialRequirements: string;
  message: string;
};

const QuotePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe',
    'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const serviceTypes = [
    'Logistics Solutions',
    'Haulage Services',
    'Freight Operations',
    'Warehousing',
    'Express Delivery',
    'Specialized Transport',
  ];

  const cargoTypes = [
    'General Merchandise',
    'Perishable Goods',
    'Electronics',
    'Furniture',
    'Construction Materials',
    'Hazardous Materials',
    'Medical Supplies',
    'Agricultural Products',
    'Other',
  ];

  const goToStep = (step: number) => {
    if (step > 0 && step <= totalSteps) {
      setCurrentStep(step);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log('Form data submitted:', data);
    
    // Simulate delay for API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In a real application, you would send this data to your server
    reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7233126/pexels-photo-7233126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Request a Quote</h1>
            <p className="text-xl text-neutral-200 mb-8">
              Get a personalized quote for your logistics needs in a few simple steps.
            </p>
          </div>
        </div>
      </div>

      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          {isSubmitSuccessful ? (
            <div className="text-center py-16 animate-fadeIn">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success-500 text-white mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-neutral-700 text-lg mb-8 max-w-xl mx-auto">
                Your quote request has been submitted successfully. Our team will review your requirements and get back to you within 24 hours with a personalized quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => {
                    reset();
                    setCurrentStep(1);
                  }}
                  className="btn btn-outline"
                >
                  Request Another Quote
                </button>
                <Link to="/contact" className="btn btn-primary">
                  Contact Us
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg">
              {/* Progress Bar */}
              <div className="p-6 border-b border-neutral-200">
                <div className="flex justify-between mb-2">
                  {[...Array(totalSteps)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToStep(index + 1)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
                        currentStep > index
                          ? 'bg-primary-950 text-white'
                          : currentStep === index + 1
                          ? 'bg-primary-200 text-primary-950 border-2 border-primary-950'
                          : 'bg-neutral-200 text-neutral-500'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="relative h-2 bg-neutral-200 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-2 bg-primary-950 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm font-medium text-neutral-500">
                  <span>Personal Info</span>
                  <span>Shipment Details</span>
                  <span>Additional Info</span>
                </div>
              </div>
              
              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="firstName" className="form-label">
                          First Name <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className={`form-input ${errors.firstName ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('firstName', { required: 'First name is required' })}
                        />
                        {errors.firstName && (
                          <p className="mt-1 text-sm text-error-500">{errors.firstName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="lastName" className="form-label">
                          Last Name <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className={`form-input ${errors.lastName ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('lastName', { required: 'Last name is required' })}
                        />
                        {errors.lastName && (
                          <p className="mt-1 text-sm text-error-500">{errors.lastName.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="form-label">
                          Email Address <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className={`form-input ${errors.email ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('email', {
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address',
                            },
                          })}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="form-label">
                          Phone Number <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className={`form-input ${errors.phone ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('phone', { required: 'Phone number is required' })}
                        />
                        {errors.phone && (
                          <p className="mt-1 text-sm text-error-500">{errors.phone.message}</p>
                        )}
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="company" className="form-label">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          className="form-input"
                          {...register('company')}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => goToStep(2)}
                        className="btn btn-primary"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Shipment Details */}
                {currentStep === 2 && (
                  <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-6">Shipment Details</h2>
                    
                    <div className="mb-6">
                      <label htmlFor="serviceType" className="form-label">
                        Service Type <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          className={`form-input appearance-none pr-10 ${errors.serviceType ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('serviceType', { required: 'Please select a service type' })}
                        >
                          <option value="">Select a service type</option>
                          {serviceTypes.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
                      </div>
                      {errors.serviceType && (
                        <p className="mt-1 text-sm text-error-500">{errors.serviceType.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Origin</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="originCity" className="form-label">
                              City <span className="text-error-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="originCity"
                              className={`form-input ${errors.originCity ? 'border-error-500 focus:ring-error-500' : ''}`}
                              {...register('originCity', { required: 'Origin city is required' })}
                            />
                            {errors.originCity && (
                              <p className="mt-1 text-sm text-error-500">{errors.originCity.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="originState" className="form-label">
                              State <span className="text-error-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="originState"
                                className={`form-input appearance-none pr-10 ${errors.originState ? 'border-error-500 focus:ring-error-500' : ''}`}
                                {...register('originState', { required: 'Origin state is required' })}
                              >
                                <option value="">Select a state</option>
                                {nigerianStates.map((state, index) => (
                                  <option key={index} value={state}>
                                    {state}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
                            </div>
                            {errors.originState && (
                              <p className="mt-1 text-sm text-error-500">{errors.originState.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Destination</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="destinationCity" className="form-label">
                              City <span className="text-error-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="destinationCity"
                              className={`form-input ${errors.destinationCity ? 'border-error-500 focus:ring-error-500' : ''}`}
                              {...register('destinationCity', { required: 'Destination city is required' })}
                            />
                            {errors.destinationCity && (
                              <p className="mt-1 text-sm text-error-500">{errors.destinationCity.message}</p>
                            )}
                          </div>
                          
                          <div>
                            <label htmlFor="destinationState" className="form-label">
                              State <span className="text-error-500">*</span>
                            </label>
                            <div className="relative">
                              <select
                                id="destinationState"
                                className={`form-input appearance-none pr-10 ${errors.destinationState ? 'border-error-500 focus:ring-error-500' : ''}`}
                                {...register('destinationState', { required: 'Destination state is required' })}
                              >
                                <option value="">Select a state</option>
                                {nigerianStates.map((state, index) => (
                                  <option key={index} value={state}>
                                    {state}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
                            </div>
                            {errors.destinationState && (
                              <p className="mt-1 text-sm text-error-500">{errors.destinationState.message}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <label htmlFor="cargoType" className="form-label">
                          Cargo Type <span className="text-error-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="cargoType"
                            className={`form-input appearance-none pr-10 ${errors.cargoType ? 'border-error-500 focus:ring-error-500' : ''}`}
                            {...register('cargoType', { required: 'Cargo type is required' })}
                          >
                            <option value="">Select cargo type</option>
                            {cargoTypes.map((type, index) => (
                              <option key={index} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
                        </div>
                        {errors.cargoType && (
                          <p className="mt-1 text-sm text-error-500">{errors.cargoType.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="weight" className="form-label">
                          Estimated Weight (kg)
                        </label>
                        <input
                          type="text"
                          id="weight"
                          placeholder="e.g., 500"
                          className="form-input"
                          {...register('weight')}
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label htmlFor="dimensions" className="form-label">
                          Dimensions (if applicable)
                        </label>
                        <input
                          type="text"
                          id="dimensions"
                          placeholder="e.g., 2m x 1m x 1.5m"
                          className="form-input"
                          {...register('dimensions')}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => goToStep(1)}
                        className="btn btn-outline"
                      >
                        Previous
                      </button>
                      <button
                        type="button"
                        onClick={() => goToStep(3)}
                        className="btn btn-primary"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Additional Information */}
                {currentStep === 3 && (
                  <div className="animate-fadeIn">
                    <h2 className="text-2xl font-bold mb-6">Additional Information</h2>
                    
                    <div className="space-y-6 mb-8">
                      <div>
                        <label htmlFor="specialRequirements" className="form-label">
                          Special Requirements
                        </label>
                        <input
                          type="text"
                          id="specialRequirements"
                          placeholder="e.g., Temperature-controlled, Fragile items, etc."
                          className="form-input"
                          {...register('specialRequirements')}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="form-label">
                          Additional Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="form-input"
                          placeholder="Any other details you'd like us to know?"
                          {...register('message')}
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="bg-primary-50 p-4 rounded-lg mb-8">
                      <div className="flex items-start gap-3">
                        <Truck className="text-primary-950 mt-1 flex-shrink-0" size={20} />
                        <p className="text-neutral-700 text-sm">
                          Once submitted, our team will review your quote request and respond within 24 hours with 
                          a detailed quote. For urgent requests, please call our customer service at 
                          <a href="tel:+2349012345678" className="font-medium text-primary-950"> +234 901 234 5678</a>.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={() => goToStep(2)}
                        className="btn btn-outline"
                      >
                        Previous
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary flex items-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send size={20} /> Submit Request
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section 
        title="Why Request a Quote With Us"
        subtitle="Experience the benefits of working with Nigeria's premier logistics partner."
        bgColor="bg-neutral-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">Quick Response Time</h3>
            <p className="text-neutral-600">
              Receive your personalized quote within 24 hours of your request.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">Transparent Pricing</h3>
            <p className="text-neutral-600">
              Detailed breakdown of costs with no hidden fees or surprise charges.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-card text-center">
            <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg mb-3">Customized Solutions</h3>
            <p className="text-neutral-600">
              Tailor-made logistics plans designed for your specific business needs.
            </p>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section bgColor="bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-neutral-600">
              Read about the experiences of businesses who requested quotes and became loyal customers.
            </p>
          </div>
          
          <div className="bg-neutral-50 p-6 md:p-8 rounded-lg">
            <div className="flex items-start gap-4">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=120"
                alt="Adebayo Johnson"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-secondary-500 fill-secondary-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-neutral-700 italic mb-4">
                  <a href="tel:+2348064189445" className="font-medium text-primary-950"> +234 806 418 9445</a>.
                </p>
                <div>
                  <div className="font-semibold">Adebayo Johnson</div>
                  <div className="text-neutral-500 text-sm">Operations Manager, ABC Manufacturing Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default QuotePage;

import { Link } from 'react-router-dom';