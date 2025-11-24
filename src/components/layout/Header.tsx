"use client";

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import AnimatedLogo from '../ui/AnimatedLogo';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform header background opacity based on scroll
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.9)']
  );
  
  // Header blur effect based on scroll
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(8px)']
  );
  
  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        backdropFilter: headerBlur,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-lg" : "py-3 sm:py-6"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        {/* Logo - smaller on mobile */}
        <a href="/" className="flex items-center">
          <div className="w-10 h-10 sm:w-14 sm:h-14 relative">
            <AnimatedLogo />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold primary-gradient-text ml-2 sm:ml-4">
            OMEGACORE
          </h1>
        </a>

        {/* Navigation */}
        <Navigation />
      </div>
    </motion.header>
  );
};

export default Header;