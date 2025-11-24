import React from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import InteractiveServiceExplorer from "../../components/services/InteractiveServiceExplorer";

export const metadata = {
  title: "OmegaCore AI Services",
  description:
    "Explore our AI agent services including custom agent development, strategic integration planning, and team training programs.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <InteractiveServiceExplorer />
      </main>
      <Footer />
    </>
  );
}