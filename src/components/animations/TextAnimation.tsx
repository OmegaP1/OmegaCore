"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TextAnimationProps {
  text: string;
  className?: string;
  type?: 'word' | 'character' | 'line';
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  once?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const TextAnimation: React.FC<TextAnimationProps> = ({
  text,
  className = '',
  type = 'word',
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.03,
  once = true,
  as = 'div',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  // Split by different types
  const getTextArray = () => {
    switch (type) {
      case 'character':
        // Split by character
        return text.split('');
      case 'word':
        // Split by words but preserve spaces
        return text.split(/(\s+)/).filter((word) => word !== '');
      case 'line':
        // Split by line breaks
        return text.split(/\r?\n/).filter((line) => line !== '');
      default:
        return [text];
    }
  };

  const textArray = getTextArray();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren: delay * i,
      },
    }),
  };

  const childVariants = {
    hidden: {
      y: 20,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Render appropriate element based on "as" prop
  const Element = as;

  return (
    <Element ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        aria-label={text}
        style={{ display: 'inline-block' }}
      >
        {textArray.map((item, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            style={{ 
              display: type === 'word' ? 'inline-block' : 'inline',
              whiteSpace: type === 'word' ? 'pre' : 'normal'
            }}
          >
            {item}
          </motion.span>
        ))}
      </motion.div>
    </Element>
  );
};

export default TextAnimation;