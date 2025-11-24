"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ScrollReveal from "../animations/ScrollReveal";

interface ContentBlock {
  icon: string | React.ReactNode;
  title: string;
  description: string;
}

interface ModernServiceContentProps {
  highlights: ContentBlock[];
  keyPoints?: string[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  ctaText?: string;
}

const ModernServiceContent: React.FC<ModernServiceContentProps> = ({
  highlights,
  keyPoints,
  process,
  ctaText = "Get Started Today",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="space-y-20">
      {/* Key Highlights - Visual Cards */}
      <motion.section
        className="space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 hover:border-accent/40 transition-all duration-300 hover:shadow-xl"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {typeof highlight.icon === "string" ? highlight.icon : highlight.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-white/70 leading-relaxed">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Key Points - Checklist Style */}
      {keyPoints && keyPoints.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="bg-gradient-to-r from-primary/5 to-accent/5 p-12 rounded-2xl border border-primary/10"
        >
          <h2 className="text-3xl font-bold text-white mb-8">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-dark text-sm font-bold">✓</span>
                </div>
                <p className="text-white/80 text-lg">{point}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Process - Step by Step */}
      {process && process.length > 0 && (
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="text-3xl font-bold text-white mb-12">How It Works</h2>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent"></div>

            <div className="space-y-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-0 md:pl-32"
                >
                  {/* Step circle */}
                  <div className="hidden md:block absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="p-6 rounded-xl bg-primary/10 border border-primary/20 hover:border-accent/40 transition-all">
                    <h3 className="text-xl font-bold text-accent mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="text-center py-12"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can implement this solution for your business.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            {ctaText}
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ModernServiceContent;
