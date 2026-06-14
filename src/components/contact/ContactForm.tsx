'use client';

import React, { useState } from 'react';
import { sendEnquiry } from '@/lib/emailjs';
import { ContactFormData } from '@/types';
import { GlossyButton } from '@/components/ui/GlossyButton';
import { industries } from '@/data/industries';

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    sector: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 20) {
      newErrors.message = 'Please provide a bit more detail (min 20 characters)';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      await sendEnquiry(formData);
      setStatus('success');
      setFormData({ name: '', company: '', email: '', sector: '', message: '' });
    } catch (error) {
      console.error('Failed to send enquiry:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass glass-border rounded-2xl p-8 text-center" aria-live="polite">
        <div className="w-16 h-16 bg-cyan/20 text-cyan rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Received</h3>
        <p className="text-bluegrey-300">
          Thank you for reaching out to AppCloid Technologies. One of our engineers will be in touch with you shortly to discuss your requirements.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-cyan hover:text-white transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass glass-border rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-bluegrey-300 mb-2">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full bg-midnight/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-shadow`}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-bluegrey-300 mb-2">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-midnight/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-shadow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-bluegrey-300 mb-2">Work Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full bg-midnight/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-shadow`}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="sector" className="block text-sm font-medium text-bluegrey-300 mb-2">Industry Sector</label>
          <select
            id="sector"
            name="sector"
            value={formData.sector}
            onChange={handleChange}
            className="w-full bg-midnight/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-shadow appearance-none"
          >
            <option value="">Select an industry...</option>
            {industries.map(ind => (
              <option key={ind.id} value={ind.sector}>{ind.sector}</option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-bluegrey-300 mb-2">How can we help? *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`w-full bg-midnight/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan transition-shadow resize-y`}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <div className="mb-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            There was an error sending your message. Please try again or contact us directly at contact@appcloid.com.
          </div>
        )}
      </div>

      <div>
        <GlossyButton 
          type="submit" 
          variant="primary" 
          className={`w-full sm:w-auto ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-midnight" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Submit Enquiry'}
        </GlossyButton>
      </div>
    </form>
  );
};
