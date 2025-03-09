"use client";

import { usePathname } from "next/navigation";

// Define service types for type safety
type ServiceSlug =
  | "ai-personal-assistants"
  | "generative-ai"
  | "ai-integration"
  | "custom-ai-development"
  | "ai-strategy-consulting"
  | "ai-training";

// Define the type for service details
interface ServiceDetail {
  name: string;
  description: string;
}

export default function StructuredData() {
  const pathname = usePathname();

  // Organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OmegaCore AI",
    url: "https://omegacore-ai.com",
    logo: {
      "@type": "ImageObject",
      url: "https://omegacore-ai.com/images/logos/omegacore-logo.svg",
      width: "400",
      height: "400",
    },
    sameAs: [
      "https://twitter.com/OmegaCore_AI",
      "https://linkedin.com/company/omegacore-ai",
      "https://facebook.com/OmegaCoreAI",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      availableLanguage: ["English"],
      email: "contact@omegacore-ai.com",
    },
    description:
      "OmegaCore AI provides cutting-edge AI and personal assistant services to transform business operations.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Innovation Way",
      addressLocality: "Tech City",
      addressRegion: "CA",
      postalCode: "94103",
      addressCountry: "US",
    },
    founder: {
      "@type": "Person",
      name: "OmegaCore Founder",
    },
    foundingDate: "2022-01-01",
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
            url: "https://omegacore-ai.com/services/ai-personal-assistants",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generative AI Solutions",
            url: "https://omegacore-ai.com/services/generative-ai",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Integration Services",
            url: "https://omegacore-ai.com/services/ai-integration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Custom AI Development",
            url: "https://omegacore-ai.com/services/custom-ai-development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy Consulting",
            url: "https://omegacore-ai.com/services/ai-strategy-consulting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Training & Education",
            url: "https://omegacore-ai.com/services/ai-training",
          },
        },
      ],
    },
  };

  // WebSite schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://omegacore-ai.com/",
    name: "OmegaCore AI",
    description: "Advanced AI Solutions & Generative AI Services",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://omegacore-ai.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  // BreadcrumbList schema for service pages
  const getBreadcrumbSchema = () => {
    // Only add breadcrumbs for service pages
    if (!pathname || !pathname.startsWith("/services")) {
      return null;
    }

    const pathSegments = pathname.split("/").filter(Boolean);
    const breadcrumbItems = [];

    // Home
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://omegacore-ai.com",
    });

    // Services (if in services section)
    if (pathSegments[0] === "services") {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://omegacore-ai.com/services",
      });

      // Specific service page
      if (pathSegments.length > 1) {
        // Map service slugs to readable names - with type safety
        const serviceNames: Record<ServiceSlug, string> = {
          "ai-personal-assistants": "AI Personal Assistants",
          "generative-ai": "Generative AI Solutions",
          "ai-integration": "AI Integration Services",
          "custom-ai-development": "Custom AI Development",
          "ai-strategy-consulting": "AI Strategy Consulting",
          "ai-training": "AI Training & Education",
        };

        const slug = pathSegments[1] as ServiceSlug;
        const serviceName = serviceNames[slug] || pathSegments[1];

        breadcrumbItems.push({
          "@type": "ListItem",
          position: 3,
          name: serviceName,
          item: `https://omegacore-ai.com/${pathSegments[0]}/${pathSegments[1]}`,
        });
      }
    }

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };
  };

  // Service specific schema (for service detail pages)
  const getServiceDetailsSchema = () => {
    if (!pathname || !pathname.startsWith("/services/")) {
      return null;
    }

    const pathParts = pathname.split("/");
    const serviceSlug = pathParts[pathParts.length - 1] as ServiceSlug;

    // Map service slugs to details with type safety
    const serviceDetails: Record<ServiceSlug, ServiceDetail> = {
      "ai-personal-assistants": {
        name: "AI Personal Assistants",
        description:
          "Custom-built AI assistants designed to handle your tasks, manage your schedule, and provide real-time insights to enhance productivity and efficiency.",
      },
      "generative-ai": {
        name: "Generative AI Solutions",
        description:
          "Leverage the latest in generative AI technology to create content, designs, and more, all powered by advanced machine learning algorithms.",
      },
      "ai-integration": {
        name: "AI Integration Services",
        description:
          "Seamlessly integrate AI capabilities into your existing systems and workflows, ensuring a smooth transition to more intelligent operations.",
      },
      "custom-ai-development": {
        name: "Custom AI Development",
        description:
          "Bespoke AI solutions built from the ground up to address your unique challenges and requirements, with ongoing support and maintenance.",
      },
      "ai-strategy-consulting": {
        name: "AI Strategy Consulting",
        description:
          "Expert guidance on incorporating AI into your business strategy, identifying opportunities, and planning for long-term AI adoption.",
      },
      "ai-training": {
        name: "AI Training & Education",
        description:
          "Comprehensive training programs to help your team understand and effectively work with AI technologies in your business context.",
      },
    };

    // Use type guard to check if slug is a valid key
    const isValidServiceSlug = (slug: string): slug is ServiceSlug => {
      return slug in serviceDetails;
    };

    if (!isValidServiceSlug(serviceSlug)) {
      return null;
    }

    const service = serviceDetails[serviceSlug];

    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.name,
      provider: {
        "@type": "Organization",
        name: "OmegaCore AI",
      },
      description: service.description,
      url: `https://omegacore-ai.com${pathname}`,
    };
  };

  const breadcrumbSchema = getBreadcrumbSchema();
  const serviceDetailsSchema = getServiceDetailsSchema();

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {serviceDetailsSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceDetailsSchema),
          }}
        />
      )}
    </>
  );
}
