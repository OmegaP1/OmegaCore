// Modifying: src/components/services/EnhancedServicesNavigation.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronRight, FaChevronLeft, FaBars, FaTimes } from "react-icons/fa";

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
    shortDesc: "Custom AI helpers that boost your productivity",
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    href: "/services/generative-ai",
    icon: "generative-ai",
    shortDesc: "Create content, designs & more with AI",
  },
  {
    id: "integration",
    name: "AI Integration",
    href: "/services/ai-integration",
    icon: "integration",
    shortDesc: "Connect AI with your existing systems",
  },
  {
    id: "development",
    name: "Custom AI Development",
    href: "/services/custom-ai-development",
    icon: "development",
    shortDesc: "Tailor-made AI solutions for your needs",
  },
  {
    id: "strategy",
    name: "AI Strategy",
    href: "/services/ai-strategy-consulting",
    icon: "strategy",
    shortDesc: "Expert guidance for your AI journey",
  },
  {
    id: "education",
    name: "AI Training",
    href: "/services/ai-training",
    icon: "education",
    shortDesc: "Help your team master AI technologies",
  },
];

const EnhancedServicesNavigation: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState<number | null>(
    null
  );

  // Handle scroll to top on navigation
  const handleServiceClick = () => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  };

  // Find the current service index for prev/next navigation
  useEffect(() => {
    const index = services.findIndex((service) => service.href === pathname);
    setCurrentServiceIndex(index);
  }, [pathname]);

  // Get prev/next service links if available
  const prevService =
    currentServiceIndex !== null && currentServiceIndex > 0
      ? services[currentServiceIndex - 1]
      : null;

  const nextService =
    currentServiceIndex !== null && currentServiceIndex < services.length - 1
      ? services[currentServiceIndex + 1]
      : null;

  return (
    <>
      {/* Mobile Menu Toggle Button */}
      <div className="lg:hidden sticky top-20 z-30 bg-medium/80 backdrop-blur-sm py-2 px-4 border-y border-white/10">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-between w-full py-2 text-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="font-medium">Services Navigation</span>
          {mobileMenuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-medium/60 backdrop-blur-md z-20"
          >
            <div className="py-2 px-4 space-y-1">
              {services.map((service) => {
                const isActive = pathname === service.href;

                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className={`block py-3 px-4 rounded-lg flex items-center transition-colors ${
                      isActive
                        ? "bg-accent/20 text-white"
                        : "hover:bg-white/5 text-white/70 hover:text-white"
                    }`}
                    onClick={handleServiceClick}
                  >
                    <img
                      src={`/images/icons/${service.icon}.svg`}
                      alt=""
                      className="w-5 h-5 mr-3"
                    />
                    <span>{service.name}</span>
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
                        ? "text-white bg-accent/20"
                        : "text-white/70 hover:text-white hover:bg-white/5"
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
    </>
  );
};

export default EnhancedServicesNavigation;
