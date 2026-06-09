import type { Metadata } from "next";

import { siteConfig } from "@/data/site";
import { defaultLocale, localizeHref, type Locale } from "@/lib/i18n";

export function absoluteUrl(path = "") {
  if (!path || path === "/") {
    return siteConfig.url;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function localizedSeoUrls(path: string, locale: Locale = defaultLocale) {
  const canonical = absoluteUrl(localizeHref(path, locale));
  const spanish = absoluteUrl(localizeHref(path, "es"));
  const english = absoluteUrl(localizeHref(path, "en"));

  return {
    canonical,
    languages: {
      es: spanish,
      en: english,
      "x-default": spanish,
    },
  } as const;
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
  const { canonical, languages } = localizedSeoUrls(path, locale);

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
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
