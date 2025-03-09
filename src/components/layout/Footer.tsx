"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../constants/navigation';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer: React.FC = () => {
  // Get current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Map icon names to actual components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedin':
        return <FaLinkedin size={20} />;
      case 'FaTwitter':
        return <FaTwitter size={20} />;
      case 'FaFacebook':
        return <FaFacebook size={20} />;
      default:
        return null;
    }
  };
  
  return (
    <footer className="relative bg-dark/80 py-12 overflow-hidden">
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"></div>

      <div className="container mx-auto px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold primary-gradient-text mb-2">
              OmegaCore AI
            </h2>
            <p className="text-sm text-white/60 max-w-md mx-auto">
              Transforming businesses through advanced AI solutions and
              intelligent automation.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-white transition-colors duration-300"
                aria-label={link.platform}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/50 text-sm"
          >
            &copy; {currentYear} OmegaCore AI. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;