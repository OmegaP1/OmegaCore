"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import ScrollReveal from "../animations/ScrollReveal";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import ServicesNavigation from "./ServicesNavigation";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  icon: string;
  children: React.ReactNode;
  ctaText?: string;
  ctaLink?: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  icon,
  children,
  ctaText = "Get Started",
  ctaLink = "#contact",
}) => {
  // Scroll to top when the service page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-accent hover:text-white transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Services Navigation */}
        <ServicesNavigation />

        {/* Header Section */}
        <header className="bg-gradient-to-r from-primary to-accent py-16 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-black" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Service Icon */}
              <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <img
                  src={`/images/icons/${icon}.svg`}
                  alt={title}
                  className="w-12 h-12"
                />
              </div>

              <div>
                <ScrollReveal>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                    {title}
                  </h1>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                  <p className="text-xl text-white/80 max-w-2xl">{subtitle}</p>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>

        {/* CTA Section */}
        <section className="mt-16 py-16 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Ready to leverage {title}?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Contact our team today to discuss how we can implement custom{" "}
                {title.toLowerCase()} solutions for your business needs.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Button href="/#contact" size="lg">
                {ctaText}
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServiceLayout;