// Modifying: src/components/services/EnhancedServicesNavigation.tsx

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Type definitions for service info
interface ServiceLink {
  id: string;
  name: string;
  href: string;
  icon: string;
  shortDesc: string;
}

// Enhanced services data with short descriptions - Updated for new AI Agent focus
const services: ServiceLink[] = [
  {
    id: "development",
    name: "Custom AI Agents",
    href: "/services/custom-ai-development",
    icon: "development",
    shortDesc: "Tailored autonomous agents for your workflows"
  },
  {
    id: "strategy",
    name: "AI Strategy & Integration",
    href: "/services/ai-strategy-consulting",
    icon: "strategy",
    shortDesc: "Strategic planning and seamless integration"
  },
  {
    id: "education",
    name: "AI Team Training",
    href: "/services/ai-training",
    icon: "education",
    shortDesc: "Empower your team to work with AI agents"
  }
];

const EnhancedServicesNavigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Handle scroll to top on navigation
  const handleServiceClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };
  
  return (
    <>
      {/* Mobile navigation header with toggle */}
      <div className="lg:hidden sticky top-0 z-30 bg-dark border-b border-white/10 p-4 flex justify-between items-center">
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="text-white text-lg font-medium"
        >
          Services Navigation
        </button>
      </div>

      {/* Mobile navigation modal overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark z-50 lg:hidden"
          >
            <div className="p-4 flex justify-between items-center border-b border-white/10">
              <h2 className="text-white text-lg font-medium">Services Navigation</h2>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <FaTimes className="text-white text-2xl" />
              </button>
            </div>

            <div className="px-4 py-2">
              {services.map((service) => {
                const isActive = pathname === service.href;
                
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block p-4 my-2 rounded-lg flex items-center ${
                      isActive 
                        ? 'bg-accent/20 text-white' 
                        : 'text-white/80 hover:text-white'
                    }`}
                    onClick={handleServiceClick}
                  >
                    <div className="w-8 h-8 flex items-center justify-center mr-4">
                      <img 
                        src={`/images/icons/${service.icon}.svg`}
                        alt=""
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="text-lg">{service.name}</span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Desktop Horizontal Menu - hidden on mobile */}
      <div className="hidden lg:block bg-medium/50 backdrop-blur-sm py-4 sticky top-20 z-20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 min-w-max pb-2">
              {services.map((service) => {
                const isActive = pathname === service.href;
                
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`relative px-3 py-2 rounded-full flex items-center whitespace-nowrap transition-colors ${
                      isActive 
                        ? 'text-white bg-accent/20' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                    onClick={handleServiceClick}
                    title={service.shortDesc}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceIndicator"
                        className="absolute inset-0 bg-accent/20 rounded-full"
                        initial={false}
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <img 
                      src={`/images/icons/${service.icon}.svg`}
                      alt=""
                      className="w-4 h-4 mr-2"
                    />
                    <span className="relative z-10">{service.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnhancedServicesNavigation;