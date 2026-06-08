import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { defaultLocale, localizeHref, type Locale } from "@/lib/i18n";

export function absoluteUrl(path = "") {
  if (!path) {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  locale = defaultLocale,
}: {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
}): Metadata {
  const url = absoluteUrl(localizeHref(path, locale));
  const spanishUrl = absoluteUrl(localizeHref(path, "es"));
  const englishUrl = absoluteUrl(localizeHref(path, "en"));

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        es: spanishUrl,
        en: englishUrl,
        "x-default": spanishUrl,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      alternateLocale: [locale === "es" ? "en_US" : "es_ES"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
