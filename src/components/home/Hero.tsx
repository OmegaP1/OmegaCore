"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import ParticlesBackground from '../animations/ParticlesBackground';
import TextAnimation from "../animations/TextAnimation";
import ParallaxElement from "../animations/ParallaxElement";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-pattern-bg">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/20 z-0"></div>

      {/* Parallax Elements - Only on larger screens */}
      <div className="hidden md:block">
        <ParallaxElement
          offsetY={[-5, 5]}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-accent/5 blur-3xl z-0"
          children={undefined}
          aria-hidden="true"
        />
        <ParallaxElement
          offsetY={[5, -15]}
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl z-0"
          speed={1.5}
          children={undefined}
          aria-hidden="true"
        />
      </div>

      {/* Particles Background */}
      <ParticlesBackground />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl">
          {/* Responsive text sizes */}
          <TextAnimation
            text="AI Agents That Work"
            as="h1"
            type="word"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 header-gradient-text"
          />
          <TextAnimation
            text="For Your Business"
            as="h1"
            type="word"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white"
            delay={0.3}
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 max-w-2xl"
          >
            Deploy autonomous AI agents that automate repetitive tasks,
            accelerate decision-making, and drive measurable business growth. No
            more slow manual processes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="#contact" size="lg">
              Get Started
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Explore Services
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down to see more content"
        role="presentation"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <span className="text-white/60 text-sm mb-2">Scroll Down</span>
          <div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            aria-hidden="true"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;