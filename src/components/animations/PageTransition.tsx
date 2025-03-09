"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  
  useEffect(() => {
    // After first component mount, set to false
    setIsFirstLoad(false);
  }, []);
  
  // Only animate on first page load, not on subsequent re-renders
  if (isFirstLoad) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="page-transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }
  
  // Otherwise just render the children directly
  return <>{children}</>;
};

export default PageTransition;