"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaEllipsisH } from 'react-icons/fa';

// Type definitions for service info
interface ServiceLink {
  id: string;
  name: string;
  href: string;
  icon: string;
  shortDesc: string;
}

// Enhanced services data with short descriptions
const services: ServiceLink[] = [
  {
    id: "personal-assistants",
    name: "AI Personal Assistants",
    href: "/services/ai-personal-assistants",
    icon: "personal-assistant",
    shortDesc: "Custom AI helpers that boost your productivity"
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    href: "/services/generative-ai",
    icon: "generative-ai",
    shortDesc: "Create content, designs & more with AI"
  },
  {
    id: "integration",
    name: "AI Integration",
    href: "/services/ai-integration",
    icon: "integration",
    shortDesc: "Connect AI with your existing systems"
  },
  {
    id: "development",
    name: "Custom AI Development",
    href: "/services/custom-ai-development",
    icon: "development",
    shortDesc: "Tailor-made AI solutions for your needs"
  },
  {
    id: "strategy",
    name: "AI Strategy",
    href: "/services/ai-strategy-consulting",
    icon: "strategy",
    shortDesc: "Expert guidance for your AI journey"
  },
  {
    id: "education",
    name: "AI Training",
    href: "/services/ai-training",
    icon: "education",
    shortDesc: "Help your team master AI technologies"
  }
];

const EnhancedServicesNavigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState<number | null>(null);
  
  // Handle scroll to top on navigation
  const handleServiceClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };
  
  // Find the current service index for prev/next navigation
  useEffect(() => {
    const index = services.findIndex(service => service.href === pathname);
    setCurrentServiceIndex(index);
  }, [pathname]);
  
  // Get prev/next service links if available
  const prevService = currentServiceIndex !== null && currentServiceIndex > 0 
    ? services[currentServiceIndex - 1] 
    : null;
    
  const nextService = currentServiceIndex !== null && currentServiceIndex < services.length - 1 
    ? services[currentServiceIndex + 1] 
    : null;
  
  return (
    <>
      {/* Main Services Navigation Bar */}
      <div className="bg-medium/50 backdrop-blur-sm py-4 sticky top-20 z-20 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex space-x-1 md:space-x-4 min-w-max pb-2">
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
      
      {/* Previous/Next Service Navigation (Desktop) */}
      {(prevService || nextService) && (
        <div className="hidden md:block">
          <div className="fixed top-1/2 left-0 -translate-y-1/2 z-20">
            {prevService && (
              <Link 
                href={prevService.href} 
                onClick={handleServiceClick}
                className="bg-medium/80 backdrop-blur-sm hover:bg-accent/20 text-white/70 hover:text-white p-3 rounded-r-lg flex items-center transition-all hover:pl-5"
                title={`Previous: ${prevService.name}`}
              >
                <FaChevronLeft className="text-xl" />
              </Link>
            )}
          </div>
          <div className="fixed top-1/2 right-0 -translate-y-1/2 z-20">
            {nextService && (
              <Link 
                href={nextService.href} 
                onClick={handleServiceClick}
                className="bg-medium/80 backdrop-blur-sm hover:bg-accent/20 text-white/70 hover:text-white p-3 rounded-l-lg flex items-center transition-all hover:pr-5"
                title={`Next: ${nextService.name}`}
              >
                <FaChevronRight className="text-xl" />
              </Link>
            )}
          </div>
        </div>
      )}
      
      {/* Mobile Quick Navigation Button */}
      <div className="md:hidden fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shadow-lg"
          aria-label="Quick service navigation"
        >
          <FaEllipsisH className="text-white" />
        </button>
      </div>
      
      {/* Mobile Services Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm z-40 flex items-center justify-center md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-medium rounded-xl p-6 m-4 max-w-md w-full"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => {
                  const isActive = pathname === service.href;
                  
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`flex items-center p-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-accent/20 text-white' 
                          : 'hover:bg-white/5 text-white/80 hover:text-white'
                      }`}
                      onClick={handleServiceClick}
                    >
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mr-3">
                        <img 
                          src={`/images/icons/${service.icon}.svg`}
                          alt=""
                          className="w-5 h-5"
                        />
                      </div>
                      <div>
                        <div className="font-medium">{service.name}</div>
                        <div className="text-sm text-white/60">{service.shortDesc}</div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EnhancedServicesNavigation;