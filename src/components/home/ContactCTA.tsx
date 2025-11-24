"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import ContactForm from "../ui/ContactForm";
import ScrollReveal from "../animations/ScrollReveal";
import TextAnimation from "../animations/TextAnimation";

const ContactCTA: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  // Floating elements animation settings
  const floatingElements = [...Array(8)].map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4, // 4px to 12px
    opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
    moveX: (Math.random() * 200 - 100) * 0.6,
    moveY: (Math.random() * 200 - 100) * 0.6,
    duration: 5 + Math.random() * 8,
  }));

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 z-0"></div>

      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full z-0 opacity-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute top-10 left-10 w-40 h-40 border-2 border-white rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 60, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-60 h-60 border-2 border-white rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.03, 1],
          }}
          transition={{
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-white rounded-full"
          animate={{
            rotate: 180,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <ScrollReveal>
          <TextAnimation
            text="Ready to Deploy Your AI Agents?"
            as="h2"
            type="word"
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Let's discuss how custom AI agents can automate your workflow, save
            time, and accelerate your business growth. Book a consultation with
            our AI experts.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button onClick={openContactModal} size="lg">
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="flex items-center"
              >
                <span>Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                </svg>
              </motion.span>
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </ScrollReveal>

        {/* Contact Form Modal */}
        <Modal isOpen={isContactModalOpen} onClose={closeContactModal}>
          <ContactForm onClose={closeContactModal} />
        </Modal>

        {/* Floating elements animation */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {floatingElements.map((element) => (
            <motion.div
              key={element.id}
              className="absolute rounded-full bg-white/20"
              initial={{
                x: element.initialX + "%",
                y: element.initialY + "%",
                opacity: element.opacity,
                width: element.size,
                height: element.size,
              }}
              animate={{
                x: [
                  element.initialX + "%",
                  element.initialX + element.moveX + "%",
                  element.initialX + "%",
                ],
                y: [
                  element.initialY + "%",
                  element.initialY + element.moveY + "%",
                  element.initialY + "%",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: element.duration,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;