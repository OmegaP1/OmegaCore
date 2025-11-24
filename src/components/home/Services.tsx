"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SectionTitle from "../ui/SectionTitle";
import { services } from "../../constants/services";
import Image from "next/image";

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const getGradientColor = () => "from-accent/20 to-accent/5";

  const getAccentColor = () => "text-accent";

  const getBorderColor = () => "border-accent/30 hover:border-accent/60";

  const serviceRoutes: { [key: string]: string } = {
    development: "/services/custom-ai-development",
    strategy: "/services/ai-strategy-consulting",
    education: "/services/ai-training",
  };

  return (
    <section id="services" className="py-20 md:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <SectionTitle
            title="Why AI Agents?"
            subtitle="Turn repetitive work into competitive advantage"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              whileHover="hover"
            >
              <Link
                href={serviceRoutes[service.id] || "#"}
                className={`glass-card rounded-2xl overflow-hidden border-2 transition-all duration-300 group block h-full ${getBorderColor()}`}
              >
                <div className="bg-gradient-to-br from-accent/30 via-accent/10 to-transparent p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 ${getAccentColor()}`}
                      >
                        <Image
                          src={`/images/icons/${service.icon}.svg`}
                          alt={service.title}
                          width={24}
                          height={24}
                        />
                      </div>
                      <div>
                        <h3
                          className={`text-xl md:text-2xl font-bold ${getAccentColor()}`}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 text-base leading-relaxed mb-6 min-h-[60px]">
                    {service.description}
                  </p>
                  <div
                    className={`${getAccentColor()} hover:translate-x-1 transition-transform duration-300 flex items-center text-sm font-semibold`}
                  >
                    <span>Explore This Service</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4 ml-2"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to Services Page */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent hover:bg-accent/90 text-dark font-bold transition-all duration-300"
          >
            <span>Explore All Services in Detail</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;