"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../../constants/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // Animation variants
  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Check if we're on a service page
  const isServicePage = pathname?.startsWith("/services");

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        {navItems.map((item, index) => (
          <motion.li
            key={item.href}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            <Link
              href={isServicePage ? `/${item.href}` : item.href}
              className="text-white hover:text-accent relative py-2 transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-dark z-50 p-6 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <ul className="flex flex-col items-center space-y-6">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                  className="w-full text-center"
                >
                  <Link
                    href={isServicePage ? `/${item.href}` : item.href}
                    className="text-white hover:text-accent text-2xl inline-block py-2 w-full"
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;