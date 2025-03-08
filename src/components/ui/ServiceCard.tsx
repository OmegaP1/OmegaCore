"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceType } from '../../types';
import Image from 'next/image';

interface ServiceCardProps {
  service: ServiceType;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="glass-card p-8 rounded-xl flex flex-col items-center text-center relative overflow-hidden"
    >
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
      
      {/* Service Icon */}
      <div className="service-icon-container">
        <Image 
          src={`/images/icons/${service.icon}.svg`}
          alt={service.title}
          width={40}
          height={40}
          className="text-accent"
        />
      </div>
      
      {/* Service Title */}
      <h3 className="text-2xl font-semibold text-accent mb-4">{service.title}</h3>
      
      {/* Service Description */}
      <p className="text-white/90">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;