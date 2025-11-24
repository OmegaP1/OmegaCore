"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import EnhancedServicesNavigation from "./EnhancedServicesNavigation";

interface ModernServiceLayoutProps {
  title: string;
  subtitle: string;
  icon: string;
  heroImage?: string;
  children: React.ReactNode;
  ctaText?: string;
}

const ModernServiceLayout: React.FC<ModernServiceLayoutProps> = ({
  title,
  subtitle,
  icon,
  children,
  ctaText = "Get Started",
}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Header />
      <EnhancedServicesNavigation />
      <motion.div
        className="min-h-screen bg-dark"
        initial="initial"
        animate="animate"
        variants={pageVariants}
      >
        {/* Hero Section */}
        <section className="relative pt-8 pb-16 md:pb-32 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Back button */}
            <Link href="/services" className="inline-flex items-center text-white/60 hover:text-white mb-8 transition-colors">
              <FaArrowLeft className="mr-2" />
              Back to Services
            </Link>

            <motion.div variants={contentVariants} className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 header-gradient-text">
                {title}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
                {subtitle}
              </p>
              <Button size="lg">
                {ctaText}
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-6 py-16 relative z-10">
          <motion.div variants={contentVariants}>
            {children}
          </motion.div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default ModernServiceLayout;
