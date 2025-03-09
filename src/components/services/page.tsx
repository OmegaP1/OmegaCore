import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';
import { services } from '../../constants/services';
import ScrollReveal from '../../components/animations/ScrollReveal';
import Image from 'next/image';

export const metadata = {
  title: 'OmegaCore AI Services',
  description: 'Explore our comprehensive AI services including personal assistants, generative AI, integration, custom development, strategy, and training.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <ScrollReveal>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 primary-gradient-text">
                Our AI Services
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-white/80">
                Explore our comprehensive range of AI solutions designed to transform your business operations, enhance productivity, and drive innovation.
              </p>
            </ScrollReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Link href={`/services/${service.id === 'personal-assistants' ? 'ai-personal-assistants' : 
                                     service.id === 'generative-ai' ? 'generative-ai' : 
                                     service.id === 'integration' ? 'ai-integration' : 
                                     service.id === 'development' ? 'custom-ai-development' : 
                                     service.id === 'strategy' ? 'ai-strategy-consulting' : 
                                     'ai-training'}`} 
                   key={service.id} 
                   className="glass-card p-8 rounded-xl block hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4">
                    <Image 
                      src={`/images/icons/${service.icon}.svg`}
                      alt={service.title}
                      width={24}
                      height={24}
                      className="text-accent"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-accent">{service.title}</h2>
                </div>
                <p className="text-white/80 mb-4">{service.description}</p>
                <div className="text-accent hover:text-white transition-colors duration-300 flex items-center text-sm">
                  <span>Learn more</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}