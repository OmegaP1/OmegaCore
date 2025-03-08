"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  service: string;
}

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    service: 'default',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the form data to your API
      console.log('Form submitted:', formData);
      
      // Show success state
      setIsSubmitted(true);
      
      // Reset form after 3 seconds and close modal
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          service: 'default',
        });
        onClose();
      }, 3000);
      
    } catch (err) {
      setError('There was a problem submitting your form. Please try again.');
      console.error('Form submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Animation variants
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: 50,
      transition: { duration: 0.3 }
    }
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        className="bg-dark/90 backdrop-blur-md rounded-xl p-8 max-w-md w-full mx-auto"
        variants={formVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="text-center">
          <div className="text-accent text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-white/80 mb-6">
            Thank you for reaching out. We'll get back to you shortly.
          </p>
          <Button onClick={onClose}>Close</Button>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-dark/90 backdrop-blur-md rounded-xl p-8 max-w-md w-full mx-auto"
      variants={formVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Contact Us</h2>
        <button 
          type="button" 
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-medium border border-primary/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-medium border border-primary/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            placeholder="john@example.com"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-1">Company (Optional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-medium border border-primary/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
            placeholder="Your Company"
          />
        </div>
        
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">Service Interested In</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg bg-medium border border-primary/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/50"
          >
            <option value="default" disabled>Select a service</option>
            <option value="ai-personal-assistants">AI Personal Assistants</option>
            <option value="generative-ai">Generative AI Solutions</option>
            <option value="ai-integration">AI Integration Services</option>
            <option value="custom-ai">Custom AI Development</option>
            <option value="ai-strategy">AI Strategy Consulting</option>
            <option value="ai-training">AI Training & Education</option>
            <option value="other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg bg-medium border border-primary/30 text-white focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
            placeholder="Tell us about your project or requirements..."
          ></textarea>
        </div>
        
        {error && (
          <div className="text-red-400 text-sm py-2">
            {error}
          </div>
        )}
        
        <div className="mt-6">
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : "Send Message"}
          </Button>
        </div>
      </div>
    </motion.form>
  );
};

export default ContactForm;