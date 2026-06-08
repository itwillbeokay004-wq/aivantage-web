import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";

import { Analytics } from "@/components/analytics";
import { ChatWidget } from "@/components/chat-widget";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { LocaleProvider } from "@/components/locale-provider";
import { siteConfig, siteConfigByLocale } from "@/data/site";
import { defaultLocale, isLocale, localizeHref, type Locale } from "@/lib/i18n";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AiVantage | Agentes de IA para empresas reales",
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
    "agentes de IA",
    "automatización con IA",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      es: siteConfig.url,
      en: `${siteConfig.url}/en`,
      "x-default": siteConfig.url,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.svg"],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "AiVantage | Agentes de IA para empresas reales",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "es_ES",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AiVantage | Agentes de IA para empresas reales",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const requestHeaders = await headers();
  const headerLocale = requestHeaders.get("x-aivantage-locale");
  const locale: Locale = isLocale(headerLocale) ? headerLocale : defaultLocale;
  const localizedSiteConfig = siteConfigByLocale[locale];
  const organizationId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const serviceId = `${siteConfig.url}/#service-ai-automation`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: localizedSiteConfig.name,
        url: siteConfig.url,
        email: localizedSiteConfig.email,
        description: localizedSiteConfig.description,
        slogan: localizedSiteConfig.tagline,
        logo: `${siteConfig.url}/favicon.svg`,
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: localizedSiteConfig.name,
        url: siteConfig.url,
        description: localizedSiteConfig.description,
        publisher: {
          "@id": organizationId,
        },
        inLanguage: locale === "es" ? "es-ES" : "en-US",
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name:
          locale === "es"
            ? "Servicios de automatización con agentes de IA"
            : "AI agent automation services",
        serviceType:
          locale === "es"
            ? "Automatización con IA, agentes de IA, chat, voz y automatización de procesos"
            : "AI automation, AI agents, chat automation, voice automation, and workflow automation",
        description:
          locale === "es"
            ? "AiVantage diseña, despliega y gestiona agentes de IA personalizados para atención al cliente, ventas, operaciones, comunicación con clientes y automatización de procesos."
            : "AiVantage designs, deploys, and manages custom AI agents for support, sales, operations, customer engagement, and business workflow automation.",
        provider: {
          "@id": organizationId,
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
        url: `${siteConfig.url}${localizeHref("/solutions", locale)}`,
      },
    ],
  };

  return (
    <html lang={locale}>
      <body>
        <LocaleProvider locale={locale}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ChatWidget />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
