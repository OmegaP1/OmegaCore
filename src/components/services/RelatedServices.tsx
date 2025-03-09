"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceInfo {
  id: string;
  name: string;
  href: string;
  icon: string;
  shortDesc: string;
  relatedServices: string[]; // IDs of related services
}

// Enhanced services data with relation information
const servicesData: ServiceInfo[] = [
  {
    id: "ai-personal-assistants",
    name: "AI Personal Assistants",
    href: "/services/ai-personal-assistants",
    icon: "personal-assistant",
    shortDesc: "Custom AI helpers that boost your productivity",
    relatedServices: ["generative-ai", "ai-integration", "custom-ai-development"]
  },
  {
    id: "generative-ai",
    name: "Generative AI",
    href: "/services/generative-ai",
    icon: "generative-ai",
    shortDesc: "Create content, designs & more with AI",
    relatedServices: ["ai-personal-assistants", "custom-ai-development", "ai-training"]
  },
  {
    id: "ai-integration",
    name: "AI Integration",
    href: "/services/ai-integration",
    icon: "integration",
    shortDesc: "Connect AI with your existing systems",
    relatedServices: ["ai-personal-assistants", "custom-ai-development", "ai-strategy-consulting"]
  },
  {
    id: "custom-ai-development",
    name: "Custom AI Development",
    href: "/services/custom-ai-development",
    icon: "development",
    shortDesc: "Tailor-made AI solutions for your needs",
    relatedServices: ["ai-integration", "ai-strategy-consulting", "generative-ai"]
  },
  {
    id: "ai-strategy-consulting",
    name: "AI Strategy",
    href: "/services/ai-strategy-consulting",
    icon: "strategy",
    shortDesc: "Expert guidance for your AI journey",
    relatedServices: ["ai-training", "custom-ai-development", "ai-integration"]
  },
  {
    id: "ai-training",
    name: "AI Training",
    href: "/services/ai-training",
    icon: "education",
    shortDesc: "Help your team master AI technologies",
    relatedServices: ["ai-strategy-consulting", "generative-ai", "ai-personal-assistants"]
  }
];

const RelatedServices: React.FC = () => {
  const pathname = usePathname();
  
  // Extract the service ID from the pathname
  const currentServiceId = pathname?.split('/').pop() || '';
  
  // Find the current service
  const currentService = servicesData.find(service => service.id === currentServiceId);
  
  // If service not found or no related services, don't render
  if (!currentService || !currentService.relatedServices.length) {
    return null;
  }
  
  // Get the related services data
  const relatedServices = servicesData.filter(service => 
    currentService.relatedServices.includes(service.id)
  );
  
  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      }
    }
  };
  
  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 }
  };
  
  // Scroll to top when navigating
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <section className="mt-24 mb-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 primary-gradient-text">Related Services</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
        >
          {relatedServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Link
                href={service.href}
                onClick={handleClick}
                className="block h-full glass-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mr-3 group-hover:bg-accent/30 transition-colors">
                    <img 
                      src={`/images/icons/${service.icon}.svg`}
                      alt=""
                      className="w-5 h-5"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-accent">{service.name}</h3>
                </div>
                
                <p className="text-white/80 mb-4 text-sm">{service.shortDesc}</p>
                
                <div className="text-accent group-hover:text-white mt-auto transition-colors flex items-center text-sm">
                  <span>Learn more</span>
                  <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedServices;