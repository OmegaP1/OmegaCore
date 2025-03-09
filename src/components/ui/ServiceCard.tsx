"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ServiceType } from '../../types';
import Image from 'next/image';
import Link from "next/link";

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
        ease: "easeOut",
      },
    }),
  };

  // Hover animations for elements inside card
  const iconMotion = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3, type: "spring", stiffness: 400 },
    },
  };

  const titleMotion = {
    rest: { y: 0 },
    hover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const gradientMotion = {
    rest: { opacity: 0, scale: 0.95 },
    hover: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  // Map service IDs to URL paths
  const getServiceUrl = (id: string) => {
    const serviceUrls: { [key: string]: string } = {
      "personal-assistants": "/services/ai-personal-assistants",
      "generative-ai": "/services/generative-ai",
      integration: "/services/ai-integration",
      development: "/services/custom-ai-development",
      strategy: "/services/ai-strategy-consulting",
      education: "/services/ai-training",
    };

    return serviceUrls[id] || "#";
  };

  return (
    <Link href={getServiceUrl(service.id)} className="block">
      <motion.div
        custom={index}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover="hover"
        className="glass-card p-8 rounded-xl flex flex-col items-center text-center relative overflow-hidden group cursor-pointer h-full"
      >
        {/* Top gradient border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>

        {/* Hover gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 pointer-events-none"
          variants={gradientMotion}
          initial="rest"
          animate="rest"
        />

        {/* Service Icon with animation */}
        <motion.div className="service-icon-container" variants={iconMotion}>
          <Image
            src={`/images/icons/${service.icon}.svg`}
            alt={service.title}
            width={40}
            height={40}
            className="text-accent"
          />
        </motion.div>

        {/* Service Title with animation */}
        <motion.h3
          className="text-2xl font-semibold text-accent mb-4"
          variants={titleMotion}
        >
          {service.title}
        </motion.h3>

        {/* Service Description */}
        <p className="text-white/90">{service.description}</p>

        {/* Animated learn more link */}
        <motion.div
          className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ y: 10, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
        >
          <span className="text-accent hover:text-white transition-colors duration-300 flex items-center gap-1">
            <span>Learn more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ServiceCard;