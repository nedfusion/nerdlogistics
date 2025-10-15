import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Truck, Package, Clock, Calendar, MapPin, ChevronDown, CheckCircle2 } from 'lucide-react';
import Section from '../components/common/Section';

type FormData = {
  pickupName: string;
  pickupPhone: string;
  pickupAddress: string;
  pickupCity: string;
  pickupState: string;
  deliveryName: string;
  deliveryPhone: string;
  deliveryAddress: string;
  deliveryCity: string;
  deliveryState: string;
  shipmentType: string;
  weight: string;
  dimensions: string;
  value: string;
  serviceType: string;
  pickupDate: string;
  pickupTime: string;
  specialInstructions: string;
};

const BookingPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const [bookingComplete, setBookingComplete] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const nigerianStates = [
    'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno',
    'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT (Abuja)', 'Gombe',
    'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara',
    'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau',
    'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'
  ];

  const serviceTypes = [
    'Standard Delivery (3-5 business days)',
    'Express Delivery (1-2 business days)',
    'Same-Day Delivery (Major cities only)',
    'Specialized Transport (Temperature-controlled)',
    'Heavy Freight (5+ tons)'
  ];

  const shipmentTypes = [
    'Documents',
    'Parcels',
    'Palletized Goods',
    'Bulk Items',
    'Fragile Items',
    'Hazardous Materials',
    'Temperature-Sensitive Goods',
    'Other'
  ];

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    console.log('Form data submitted:', data);
    
    // Simulate delay for API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate random booking reference
    const reference = 'NLB' + Math.floor(10000 + Math.random() * 90000);
    setBookingReference(reference);
    setBookingComplete(true);
    
    // In a real application, you would send this data to your server
    reset();
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-primary-950 pt-32 pb-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4482874/pexels-photo-4482874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')] bg-cover bg-center opacity-20"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Online Booking</h1>
            <p className="text-xl text-neutral-200">
              Book your shipment quickly and easily with our online booking system.
            </p>
          </div>
        </div>
      </div>

      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          {bookingComplete ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center animate-fadeIn">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-success-500 text-white mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Booking Confirmed!</h2>
              <p className="text-neutral-700 text-lg mb-6">
                Your shipment has been booked successfully. We'll be in touch shortly to confirm the details.
              </p>
              
              <div className="bg-primary-50 p-6 rounded-lg mb-8 inline-block">
                <h3 className="font-semibold mb-2">Your Booking Reference</h3>
                <div className="text-3xl font-bold text-primary-950">{bookingReference}</div>
                <p className="text-sm text-neutral-500 mt-2">
                  Please keep this reference number for tracking your shipment.
                </p>
              </div>
              
              <div className="space-y-4 mb-8 text-left max-w-md mx-auto">
                <h3 className="font-semibold">What happens next?</h3>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-950 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <p className="text-neutral-700">
                    Our team will review your booking details
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-950 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <p className="text-neutral-700">
                    You'll receive a confirmation email with your booking details
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-950 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <p className="text-neutral-700">
                    Our driver will contact you before pickup
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary-100 text-primary-950 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <p className="text-neutral-700">
                    You can track your shipment using the booking reference
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <button
                  onClick={() => {
                    reset();
                    setBookingComplete(false);
                  }}
                  className="btn btn-outline"
                >
                  Book Another Shipment
                </button>
                <a href="/tracking" className="btn btn-primary">
                  Track Your Shipment
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-lg">
              <div className="p-6 border-b border-neutral-200">
                <h2 className="text-2xl font-bold">Book Your Shipment</h2>
                <p className="text-neutral-600">
                  Fill out the form below to book your shipment with Nerd Logistics.
                </p>
              </div>
              
              <div className="p-6 md:p-8 space-y-8">
                {/* Pickup Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <MapPin className="mr-2 text-secondary-500" size={20} />
                    Pickup Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="pickupName" className="form-label">
                        Contact Name <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="pickupName"
                        className={`form-input ${errors.pickupName ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('pickupName', { required: 'Contact name is required' })}
                      />
                      {errors.pickupName && (
                        <p className="mt-1 text-sm text-error-500">{errors.pickupName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="pickupPhone" className="form-label">
                        Phone Number <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="pickupPhone"
                        className={`form-input ${errors.pickupPhone ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('pickupPhone', { required: 'Phone number is required' })}
                      />
                      {errors.pickupPhone && (
                        <p className="mt-1 text-sm text-error-500">{errors.pickupPhone.message}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="pickupAddress" className="form-label">
                        Address <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="pickupAddress"
                        className={`form-input ${errors.pickupAddress ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('pickupAddress', { required: 'Address is required' })}
                      />
                      {errors.pickupAddress && (
                        <p className="mt-1 text-sm text-error-500">{errors.pickupAddress.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="pickupCity" className="form-label">
                        City <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="pickupCity"
                        className={`form-input ${errors.pickupCity ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('pickupCity', { required: 'City is required' })}
                      />
                      {errors.pickupCity && (
                        <p className="mt-1 text-sm text-error-500">{errors.pickupCity.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="pickupState" className="form-label">
                        State <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="pickupState"
                          className={`form-input appearance-none pr-10 ${errors.pickupState ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('pickupState', { required: 'State is required' })}
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
                      {errors.pickupState && (
                        <p className="mt-1 text-sm text-error-500">{errors.pickupState.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Delivery Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <MapPin className="mr-2 text-secondary-500" size={20} />
                    Delivery Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="deliveryName" className="form-label">
                        Contact Name <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="deliveryName"
                        className={`form-input ${errors.deliveryName ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('deliveryName', { required: 'Contact name is required' })}
                      />
                      {errors.deliveryName && (
                        <p className="mt-1 text-sm text-error-500">{errors.deliveryName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="deliveryPhone" className="form-label">
                        Phone Number <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="deliveryPhone"
                        className={`form-input ${errors.deliveryPhone ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('deliveryPhone', { required: 'Phone number is required' })}
                      />
                      {errors.deliveryPhone && (
                        <p className="mt-1 text-sm text-error-500">{errors.deliveryPhone.message}</p>
                      )}
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="deliveryAddress" className="form-label">
                        Address <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="deliveryAddress"
                        className={`form-input ${errors.deliveryAddress ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('deliveryAddress', { required: 'Address is required' })}
                      />
                      {errors.deliveryAddress && (
                        <p className="mt-1 text-sm text-error-500">{errors.deliveryAddress.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="deliveryCity" className="form-label">
                        City <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="deliveryCity"
                        className={`form-input ${errors.deliveryCity ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('deliveryCity', { required: 'City is required' })}
                      />
                      {errors.deliveryCity && (
                        <p className="mt-1 text-sm text-error-500">{errors.deliveryCity.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="deliveryState" className="form-label">
                        State <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="deliveryState"
                          className={`form-input appearance-none pr-10 ${errors.deliveryState ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('deliveryState', { required: 'State is required' })}
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
                      {errors.deliveryState && (
                        <p className="mt-1 text-sm text-error-500">{errors.deliveryState.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Shipment Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Package className="mr-2 text-secondary-500" size={20} />
                    Shipment Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="shipmentType" className="form-label">
                        Type of Shipment <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="shipmentType"
                          className={`form-input appearance-none pr-10 ${errors.shipmentType ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('shipmentType', { required: 'Shipment type is required' })}
                        >
                          <option value="">Select shipment type</option>
                          {shipmentTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
                      </div>
                      {errors.shipmentType && (
                        <p className="mt-1 text-sm text-error-500">{errors.shipmentType.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="weight" className="form-label">
                        Weight (kg) <span className="text-error-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="weight"
                        placeholder="e.g., 25"
                        className={`form-input ${errors.weight ? 'border-error-500 focus:ring-error-500' : ''}`}
                        {...register('weight', { required: 'Weight is required' })}
                      />
                      {errors.weight && (
                        <p className="mt-1 text-sm text-error-500">{errors.weight.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="dimensions" className="form-label">
                        Dimensions (cm)
                      </label>
                      <input
                        type="text"
                        id="dimensions"
                        placeholder="e.g., 30 x 20 x 15"
                        className="form-input"
                        {...register('dimensions')}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="value" className="form-label">
                        Declared Value (₦)
                      </label>
                      <input
                        type="text"
                        id="value"
                        placeholder="e.g., 25000"
                        className="form-input"
                        {...register('value')}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Service & Schedule */}
                <div>
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Truck className="mr-2 text-secondary-500" size={20} />
                    Service & Schedule
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label htmlFor="serviceType" className="form-label">
                        Service Type <span className="text-error-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="serviceType"
                          className={`form-input appearance-none pr-10 ${errors.serviceType ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('serviceType', { required: 'Service type is required' })}
                        >
                          <option value="">Select service type</option>
                          {serviceTypes.map((type, index) => (
                            <option key={index} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500 pointer-events-none" size={18} />
                      </div>
                      {errors.serviceType && (
                        <p className="mt-1 text-sm text-error-500">{errors.serviceType.message}</p>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="text-neutral-500" size={20} />
                      <div className="flex-grow">
                        <label htmlFor="pickupDate" className="form-label">
                          Pickup Date <span className="text-error-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="pickupDate"
                          className={`form-input ${errors.pickupDate ? 'border-error-500 focus:ring-error-500' : ''}`}
                          {...register('pickupDate', { required: 'Pickup date is required' })}
                        />
                        {errors.pickupDate && (
                          <p className="mt-1 text-sm text-error-500">{errors.pickupDate.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="text-neutral-500" size={20} />
                      <div className="flex-grow">
                        <label htmlFor="pickupTime" className="form-label">
                          Preferred Pickup Time
                        </label>
                        <input
                          type="time"
                          id="pickupTime"
                          className="form-input"
                          {...register('pickupTime')}
                        />
                      </div>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="specialInstructions" className="form-label">
                        Special Instructions
                      </label>
                      <textarea
                        id="specialInstructions"
                        rows={3}
                        placeholder="Any specific handling instructions or delivery notes"
                        className="form-input"
                        {...register('specialInstructions')}
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-950 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-neutral-700 text-sm">
                      By submitting this form, you agree to our <a href="#" className="text-primary-950 font-medium">terms and conditions</a>. 
                      Please note that all bookings are subject to confirmation based on availability and 
                      service area coverage. Our team will contact you to confirm your booking details.
                    </p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary px-8 flex items-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Shipment
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </Section>

      {/* How It Works */}
      <Section
        title="How Online Booking Works"
        subtitle="Our streamlined process makes booking a shipment quick and easy."
        bgColor="bg-neutral-50"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-card text-center relative">
              <div className="absolute top-3 right-3 bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Complete Booking Form</h3>
              <p className="text-neutral-600 text-sm">
                Fill out the online booking form with your shipment details
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center relative">
              <div className="absolute top-3 right-3 bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Receive Confirmation</h3>
              <p className="text-neutral-600 text-sm">
                Get a booking confirmation with your reference number
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center relative">
              <div className="absolute top-3 right-3 bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Pickup & Delivery</h3>
              <p className="text-neutral-600 text-sm">
                Our team picks up your shipment at the scheduled time
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center relative">
              <div className="absolute top-3 right-3 bg-primary-950 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Track Your Shipment</h3>
              <p className="text-neutral-600 text-sm">
                Monitor your shipment's journey with real-time tracking
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our online booking process."
        bgColor="bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How far in advance should I book my shipment?</h3>
              <p className="text-neutral-700">
                We recommend booking at least 24 hours in advance for standard deliveries, and 48 hours for specialized transport services. Same-day bookings are available in major cities but subject to availability.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">Can I change or cancel my booking?</h3>
              <p className="text-neutral-700">
                Yes, you can modify or cancel your booking up to 4 hours before the scheduled pickup time without any penalty. Changes made less than 4 hours before pickup may incur a fee. Please contact our customer service team to make changes.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">How do I pay for my shipment?</h3>
              <p className="text-neutral-700">
                After your booking is confirmed, you can pay through our secure payment portal using credit/debit cards, bank transfers, or mobile payment options. Corporate clients can also use their account for billing.
              </p>
            </div>
            
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-2">What if my package requires special handling?</h3>
              <p className="text-neutral-700">
                For items requiring special handling, please select the appropriate shipment type and add specific instructions in the "Special Instructions" field. For very specialized needs, we recommend contacting us directly to discuss your requirements.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default BookingPage;

import { Link } from 'react-router-dom';