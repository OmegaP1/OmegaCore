"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { services } from '../../constants/services';
import Image from 'next/image';

interface ServiceDetails {
  [key: string]: {
    keyFeatures: string[];
    keyBenefits: string[];
    idealFor: string;
    timeline: string;
  };
}

const serviceDetails: ServiceDetails = {
  development: {
    keyFeatures: [
      "Autonomous decision-making",
      "24/7 operation without supervision",
      "Multi-task workflow automation",
      "Custom integration with your systems",
      "Real-time learning and adaptation"
    ],
    keyBenefits: [
      "Reduce operational costs by 60-80%",
      "Eliminate human error in repetitive tasks",
      "Scale operations without hiring",
      "Faster task completion times",
      "Improved consistency and quality"
    ],
    idealFor: "Companies looking to automate complex workflows and scale efficiently",
    timeline: "4-12 weeks depending on complexity"
  },
  strategy: {
    keyFeatures: [
      "Workflow analysis and optimization",
      "AI readiness assessment",
      "Integration roadmap planning",
      "ROI projection and modeling",
      "Change management strategy"
    ],
    keyBenefits: [
      "Identify high-impact automation opportunities",
      "Minimize implementation risks",
      "Maximize return on investment",
      "Smooth organizational transition",
      "Strategic competitive advantage"
    ],
    idealFor: "Organizations planning strategic AI transformation",
    timeline: "2-6 weeks for comprehensive planning"
  },
  education: {
    keyFeatures: [
      "Hands-on technical training",
      "Deployment best practices",
      "Optimization techniques",
      "Troubleshooting and support",
      "Ongoing learning resources"
    ],
    keyBenefits: [
      "Team becomes self-sufficient",
      "Faster AI agent adoption",
      "Better decision-making with AI",
      "Reduced dependency on external support",
      "Enhanced team confidence"
    ],
    idealFor: "Teams wanting to master AI agent technology",
    timeline: "1-3 weeks intensive programs"
  }
};

const InteractiveServiceExplorer: React.FC = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const serviceRoutes: { [key: string]: string } = {
    development: "/services/custom-ai-development",
    strategy: "/services/ai-strategy-consulting",
    education: "/services/ai-training",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  };

  const expandVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3 }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 }
    }
  };

  const getGradientColor = () => 'from-accent/20 to-accent/5';

  const getAccentColor = () => 'text-accent';

  const getBorderColor = () => 'border-accent/30 hover:border-accent/60';

  return (
    <section className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 primary-gradient-text"
          >
            Explore Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            Click on any service to discover detailed features, benefits, and implementation timelines
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={cardVariants}>
              <motion.button
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                whileHover="hover"
                variants={cardVariants}
                className={`w-full text-left glass-card rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer group ${getBorderColor()}`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${getGradientColor()} p-8 md:p-10`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 ${getAccentColor()}`}>
                        <Image
                          src={`/images/icons/${service.icon}.svg`}
                          alt={service.title}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold ${getAccentColor()}`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center ${getAccentColor()}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      variants={expandVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="border-t border-white/10"
                    >
                      <div className="p-8 md:p-10 space-y-6">
                        {/* Key Features */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {serviceDetails[service.id].keyFeatures.map((feature, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-start gap-2 text-white/80"
                              >
                                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${getAccentColor()} bg-white/10`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Benefits */}
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">
                            Key Benefits
                          </h4>
                          <ul className="space-y-2">
                            {serviceDetails[service.id].keyBenefits.map((benefit, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (idx + 5) * 0.05 }}
                                className="flex items-start gap-2 text-white/80"
                              >
                                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${getAccentColor()} bg-white/10`}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </span>
                                <span>{benefit}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Details Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-white/5 rounded-lg p-4">
                            <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Ideal For</p>
                            <p className="text-white font-medium text-sm">
                              {serviceDetails[service.id].idealFor}
                            </p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-4">
                            <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Timeline</p>
                            <p className={`${getAccentColor()} font-medium text-sm`}>
                              {serviceDetails[service.id].timeline}
                            </p>
                          </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                          href={serviceRoutes[service.id] || '#'}
                          className="block w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-center bg-accent hover:bg-accent/90 text-dark"
                        >
                          Explore This Service →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mt-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              className={`h-2 rounded-full transition-all duration-300 ${
                expandedService === service.id ? 'w-8 bg-accent' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Navigate to ${service.title}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServiceExplorer;
