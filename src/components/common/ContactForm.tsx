import React from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    console.log('Form data:', data);
    
    // Add API call here when backend is available
    await new Promise(r => setTimeout(r, 1000));
    
    reset();
  };

  return (
    <div className={`card p-6 md:p-8 ${className}`}>
      {isSubmitSuccessful ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-500 text-white mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-neutral-600 mb-6">
            Your message has been sent successfully. We'll get back to you shortly.
          </p>
          <button
            onClick={() => reset({ name: '', email: '', phone: '', subject: '', message: '' })}
            className="btn btn-outline"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name <span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                className={`form-input ${errors.name ? 'border-error-500 focus:ring-error-500' : ''}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
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
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-input"
                {...register('phone')}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="form-label">
                Subject <span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                className={`form-input ${errors.subject ? 'border-error-500 focus:ring-error-500' : ''}`}
                {...register('subject', { required: 'Subject is required' })}
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="form-label">
              Message <span className="text-error-500">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              className={`form-input ${errors.message ? 'border-error-500 focus:ring-error-500' : ''}`}
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <Send size={20} /> Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;