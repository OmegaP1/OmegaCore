"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../animations/ScrollReveal';

interface Step {
  number: number;
  title: string;
  emoji: string;
  description: string;
  details: string[];
}

const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      number: 1,
      title: "Requirements Gathering",
      emoji: "📋",
      description: "We understand your business goals, workflows, and pain points.",
      details: [
        "In-depth discovery sessions",
        "Identify automation opportunities",
        "Define success metrics",
        "Create implementation roadmap"
      ]
    },
    {
      number: 2,
      title: "Implementation",
      emoji: "🛠️",
      description: "Our team builds and configures your custom AI agents.",
      details: [
        "Design agent workflows",
        "Configure integrations",
        "Set up automation rules",
        "Continuous optimization"
      ]
    },
    {
      number: 3,
      title: "UAT (Testing)",
      emoji: "✅",
      description: "Thorough testing ensures the agents work perfectly.",
      details: [
        "User acceptance testing",
        "Performance validation",
        "Edge case handling",
        "Quality assurance checks"
      ]
    },
    {
      number: 4,
      title: "Deployment",
      emoji: "🚀",
      description: "Go live with full support and monitoring.",
      details: [
        "Production deployment",
        "Team training",
        "24/7 monitoring",
        "Ongoing support & optimization"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 primary-gradient-text"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/70"
          >
            A simple, proven 4-step process to deploy your AI agents
          </motion.p>
        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative"
        >
          {/* Connection Lines - Only visible on desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative z-10"
            >
              <div className="glass-card rounded-2xl p-8 h-full border-2 border-accent/30 hover:border-accent/60 transition-all duration-300">
                {/* Step Number Circle */}
                <div className="flex items-center justify-center mb-6">
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-primary/20 flex items-center justify-center"
                    >
                      <span className="text-3xl font-bold text-accent">{step.number}</span>
                    </motion.div>
                  </div>
                </div>

                {/* Emoji */}
                <motion.div
                  initial={{ y: 0 }}
                  whileInView={{ y: -8 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-5xl mb-4 text-center"
                >
                  {step.emoji}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm mb-5 text-center leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <ul className="space-y-2">
                  {step.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-white/80 text-sm"
                    >
                      <span className="text-accent mt-1">✓</span>
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Arrow for mobile/tablet */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="lg:hidden flex justify-center mt-6"
                  >
                    <div className="text-2xl text-accent/50">↓</div>
                  </motion.div>
                )}
              </div>

              {/* Desktop Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="hidden lg:flex absolute top-24 right-0 translate-x-full w-4 justify-center items-center"
                >
                  <div className="text-2xl text-accent/50">→</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline Info - Mobile/Tablet */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-xl p-6 md:p-8 border border-accent/20 inline-block">
            <p className="text-white/80 mb-2">Typical Timeline</p>
            <p className="text-2xl font-bold text-accent">4 to 16 Weeks</p>
            <p className="text-white/60 text-sm mt-2">From discovery to full deployment</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-dark font-bold transition-all duration-300 hover:scale-105"
          >
            <span>Start Your Journey</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
