import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StructuredData from './structured-data'
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OmegaCore AI - Advanced AI Solutions & Generative AI Services",
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
    url: "https://OmegaCore AI.com",
    siteName: "OmegaCore AI Technologies",
    title: "OmegaCore AI - Advanced AI Solutions & Generative AI Services",
    description:
      "Transform your business with cutting-edge AI and generative AI solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OmegaCore AI AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmegaCore AI - Advanced AI Solutions",
    description: "Transform your business with cutting-edge AI solutions.",
    images: ["/images/og-image.jpg"],
    creator: "@OmegaCore AI",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#3a0ca3",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://OmegaCore AI.com",
  },
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
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}