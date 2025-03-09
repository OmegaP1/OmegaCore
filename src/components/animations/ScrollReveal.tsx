"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  margin?: string;
  className?: string;
  once?: boolean;
  cascade?: boolean;
  childrenDelay?: number;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  margin = '0px',
  className = '',
  once = true,
  cascade = false,
  childrenDelay = 0.1,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: once,
    rootMargin: margin,
  });

  // Set initial animation state based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      case 'none':
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  // If cascade effect is enabled and there are multiple children
  if (cascade && React.Children.count(children) > 1) {
    return (
      <div ref={ref} className={className}>
        {React.Children.map(children, (child, index) => (
          <motion.div
            initial={getInitialPosition()}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
            transition={{ 
              duration, 
              delay: delay + (index * childrenDelay),
              ease: 'easeOut'
            }}
            className="will-change-transform"
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  // Default animation for a single element or group
  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : getInitialPosition()}
      transition={{ 
        duration,
        delay,
        ease: 'easeOut'
      }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;