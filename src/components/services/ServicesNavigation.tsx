"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface ServiceLink {
  name: string;
  href: string;
  icon: string;
}

const services: ServiceLink[] = [
  {
    name: "AI Personal Assistants",
    href: "/services/ai-personal-assistants",
    icon: "personal-assistant"
  },
  {
    name: "Generative AI",
    href: "/services/generative-ai",
    icon: "generative-ai"
  },
  {
    name: "AI Integration",
    href: "/services/ai-integration",
    icon: "integration"
  },
  {
    name: "Custom AI Development",
    href: "/services/custom-ai-development",
    icon: "development"
  },
  {
    name: "AI Strategy Consulting",
    href: "/services/ai-strategy-consulting",
    icon: "strategy"
  },
  {
    name: "AI Training & Education",
    href: "/services/ai-training",
    icon: "education"
  }
];

const ServicesNavigation: React.FC = () => {
  const pathname = usePathname();
  
  return (
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
  );
};

export default ServicesNavigation;