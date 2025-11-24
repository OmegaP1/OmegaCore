import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StructuredData from './structured-data'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from "@/components/layout/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://omegacore-ai.com"),
  title: {
    default: "OmegaCore AI - Advanced AI Solutions & Generative AI Services",
    template: "%s | OmegaCore AI",
  },
  description:
    "OmegaCore AI provides cutting-edge AI services including personal assistants, generative AI solutions, and custom AI development to transform your business operations.",
  keywords:
    "AI solutions, generative AI, AI personal assistants, AI integration, custom AI development, AI strategy consulting, AI training, artificial intelligence, machine learning",
  authors: [{ name: "OmegaCore AI Technologies" }],
  creator: "OmegaCore AI Technologies",
  publisher: "OmegaCore AI Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omegacore-ai.com",
    siteName: "OmegaCore AI Technologies",
    title: "OmegaCore AI - Advanced AI Solutions & Generative AI Services",
    description:
      "Transform your business with cutting-edge AI and generative AI solutions.",
    images: [
      {
        url: "https://omegacore-ai.com/api/og",
        width: 1200,
        height: 630,
        alt: "OmegaCore AI Solutions",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmegaCore AI - Advanced AI Solutions",
    description: "Transform your business with cutting-edge AI solutions.",
    images: ["https://omegacore-ai.com/api/og"],
    creator: "@OmegaCore_AI",
    site: "@OmegaCore_AI",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://omegacore-ai.com",
    languages: {
      en: "https://omegacore-ai.com",
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3a0ca3",
      },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
        {/* Additional SEO meta tags if needed */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>{children}</ErrorBoundary>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}