"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import Modal from '../ui/Modal';
import ContactForm from '../ui/ContactForm';

const ContactCTA: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Contact us today to discover how OmegaCore can help you implement powerful AI solutions tailored to your specific needs.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={openContactModal} size="lg">Contact Us</Button>
            <Button href="#services" variant="outline" size="lg">Learn More</Button>
          </div>
        </FadeIn>
        
        {/* Contact Form Modal */}
        <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
          <ContactForm onClose={closeContactModal} />
        </Modal>
        
        {/* Floating elements animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-white/20"
              initial={{ 
                x: Math.random() * 100, 
                y: Math.random() * 100,
                opacity: 0.2 + Math.random() * 0.5
              }}
              animate={{ 
                x: [null, Math.random() * 200 - 100],
                y: [null, Math.random() * 200 - 100],
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 5 + Math.random() * 5,
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;