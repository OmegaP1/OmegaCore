"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiTrendingUp, FiClock, FiCheckCircle } from 'react-icons/fi';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-accent/40 transition-all"
    >
      <div className="text-accent text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const AIAgentsBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <FiZap />,
      title: "24/7 Automation",
      description: "Your AI agents work around the clock, handling tasks without breaks or delays. Deliver faster responses to customers and stakeholders."
    },
    {
      icon: <FiTrendingUp />,
      title: "Scale Without Hiring",
      description: "Handle more work without increasing headcount. AI agents grow with your business needs instantly."
    },
    {
      icon: <FiClock />,
      title: "Faster Decision-Making",
      description: "Real-time data processing and insights enable quicker business decisions and immediate action on opportunities."
    },
    {
      icon: <FiCheckCircle />,
      title: "Error Reduction",
      description: "Eliminate human error on repetitive tasks. AI agents execute tasks with consistent accuracy every single time."
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Business Results
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            AI agents aren't just a nice-to-have. They directly impact your bottom line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIAgentsBenefits;
