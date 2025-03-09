"use client";

import React, { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxElementProps {
  children: ReactNode; // This is the missing required prop
  offsetY?: number[]; // Start and end Y offsets as percentage
  className?: string;
  speed?: number; // Parallax speed multiplier
}

const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  offsetY = [-10, 10], // Default: move from -10% to 10%
  className = '',
  speed = 1, // Default speed multiplier
}) => {
  // Track scroll progress
  const { scrollYProgress } = useScroll();
  
  // Create transform based on scroll position
  // The default range creates a subtle parallax effect
  const adjustedOffsetY = offsetY.map(offset => offset * speed);
  const y = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`${adjustedOffsetY[0]}%`, `${adjustedOffsetY[1]}%`]
  );
  
  return (
    <motion.div
      style={{ y }}
      className={`will-change-transform relative ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxElement;