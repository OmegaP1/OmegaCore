export default function StructuredData() {
    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "OmegaCore",
      "url": "https://omegacore.com",
      "logo": "https://omegacore.com/images/logos/omegacore-logo.svg",
      "sameAs": [
        "https://twitter.com/omegacore",
        "https://linkedin.com/company/omegacore",
        "https://facebook.com/omegacore"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-123-4567",
        "contactType": "customer service",
        "availableLanguage": ["English"]
      },
      "description": "OmegaCore provides cutting-edge AI and personal assistant services to transform business operations."
    };
  
    // Service schema
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "AI Solutions",
      "provider": {
        "@type": "Organization",
        "name": "OmegaCore"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Global"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Personal Assistants"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Generative AI Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Integration Services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom AI Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Strategy Consulting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI Training & Education"
            }
          }
        ]
      }
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