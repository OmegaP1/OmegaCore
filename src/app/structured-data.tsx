export default function StructuredData() {
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "OmegaCore AI",
      url: "https://OmegaCore AI.com",
      logo: "https://OmegaCore AI.com/images/logos/OmegaCore AI-logo.svg",
      sameAs: [
        "https://twitter.com/OmegaCore AI",
        "https://linkedin.com/company/OmegaCore AI",
        "https://facebook.com/OmegaCore AI",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "customer service",
        availableLanguage: ["English"],
      },
      description:
        "OmegaCore AI provides cutting-edge AI and personal assistant services to transform business operations.",
    };

    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "AI Solutions",
      provider: {
        "@type": "Organization",
        name: "OmegaCore AI",
      },
      areaServed: {
        "@type": "Country",
        name: "Global",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Personal Assistants",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Generative AI Solutions",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Integration Services",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom AI Development",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Strategy Consulting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Training & Education",
            },
          },
        ],
      },
    };
  
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </>
    );
  }