import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import AIAgentsBenefits from "../components/home/AIAgentsBenefits";
import Services from "../components/home/Services";
import HowItWorks from "../components/home/HowItWorks";
import ContactCTA from "../components/home/ContactCTA";
import InitialLoader from "../components/animations/InitialLoader";
import ScrollProgressBar from "../components/animations/ScrollProgressBar";
import PageTransition from "../components/animations/PageTransition";

export default function Home() {
  return (
    <main className="min-h-screen">
      <InitialLoader />
      <ScrollProgressBar />
      <PageTransition>
        <Header />
        <Hero />
        <AIAgentsBenefits />
        <Services />
        <HowItWorks />
        <ContactCTA />
        <Footer />
      </PageTransition>
    </main>
  );
}