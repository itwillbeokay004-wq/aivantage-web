import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { Analytics } from "@/components/analytics";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { siteConfig } from "@/data/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AiVantage | AI Agents for Real Business",
    template: "%s | AiVantage",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "AI agents",
    "AI automation",
    "voice automation",
    "chat automation",
    "workflow automation",
    "enterprise AI",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "AiVantage | AI Agents for Real Business",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AiVantage | AI Agents for Real Business",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const serviceId = `${siteConfig.url}/#service-ai-automation`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        logo: `${siteConfig.url}/favicon.svg`,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "AI agent automation services",
        serviceType: "AI automation, AI agents, chat automation, voice automation, and workflow automation",
        description:
          "AiVantage designs, deploys, and manages custom AI agents for support, sales, operations, customer engagement, and business workflow automation.",
        provider: {
          "@id": organizationId,
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        url: `${siteConfig.url}/solutions`,
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
