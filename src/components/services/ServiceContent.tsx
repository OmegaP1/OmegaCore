"use client";

import React from 'react';
import ScrollReveal from '../animations/ScrollReveal';
import Image from 'next/image';

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface ServiceContentProps {
  overview: string;
  benefits: FeatureItem[];
  features: FeatureItem[];
  process: FeatureItem[];
  casestudy?: {
    title: string;
    description: string;
    results: string[];
    image?: string;
  };
  faq: {
    question: string;
    answer: string;
  }[];
}

const ServiceContent: React.FC<ServiceContentProps> = ({
  overview,
  benefits,
  features,
  process,
  casestudy,
  faq
}) => {
  return (
    <div className="space-y-16">
      {/* Overview Section */}
      <section>
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 primary-gradient-text">Overview</h2>
        </ScrollReveal>
        
        <ScrollReveal>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">{overview}</p>
          </div>
        </ScrollReveal>
      </section>
      
      {/* Benefits Section */}
      <section>
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 primary-gradient-text">Key Benefits</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="up">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-accent">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* Features Section */}
      <section>
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 primary-gradient-text">Features</h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1} direction="left">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-accent">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/80">{feature.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* Process Section */}
      <section>
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 primary-gradient-text">Our Process</h2>
        </ScrollReveal>
        
        <div className="relative border-l-2 border-accent/30 pl-8 ml-4 space-y-8">
          {process.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="relative">
                <div className="absolute -left-12 top-0 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      
      {/* Case Study Section */}
      {casestudy && (
        <section>
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 primary-gradient-text">Case Study</h2>
          </ScrollReveal>
          
          <div className="glass-card p-8 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8">
              {casestudy.image && (
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src={casestudy.image}
                      alt={casestudy.title}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              )}
              
              <div className={casestudy.image ? "md:w-2/3" : "w-full"}>
                <h3 className="text-xl font-semibold mb-3">{casestudy.title}</h3>
                <p className="mb-4 text-white/80">{casestudy.description}</p>
                
                <h4 className="text-lg font-medium mb-2">Results:</h4>
                <ul className="list-disc pl-5 space-y-1 text-white/80">
                  {casestudy.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* FAQ Section */}
      <section>
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 primary-gradient-text">Frequently Asked Questions</h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {faq.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-accent">{item.question}</h3>
                <p className="text-white/80">{item.answer}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceContent;  