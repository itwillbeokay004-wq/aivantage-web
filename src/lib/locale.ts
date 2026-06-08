export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const englishLocale: Locale = "en";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (pathname === "/en" || pathname?.startsWith("/en/")) {
    return "en";
  }

  return defaultLocale;
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/en") {
    return "/";
  }

  if (pathname.startsWith("/en/")) {
    return pathname.slice(3) || "/";
  }

  return pathname;
}

export function localizeHref(href: string, locale: Locale) {
  if (
    !href.startsWith("/") ||
    href.startsWith("/api/") ||
    href.startsWith("/_next/") ||
    href.startsWith("//")
  ) {
    return href;
  }

  const [pathname, suffix = ""] = href.split(/(?=[?#])/, 2);
  const normalizedPath = stripLocalePrefix(pathname || "/");

  if (locale === "en") {
    return `${normalizedPath === "/" ? "/en" : `/en${normalizedPath}`}${suffix}`;
  }

  return `${normalizedPath}${suffix}`;
}
