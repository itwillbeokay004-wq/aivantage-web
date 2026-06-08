export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";
export const englishLocale: Locale = "en";

export const localizedRoutes = {
  "/": { es: "/", en: "/en" },
  "/platform": { es: "/plataforma", en: "/en/platform" },
  "/solutions": { es: "/soluciones", en: "/en/solutions" },
  "/ai-models": { es: "/modelos-ia", en: "/en/ai-models" },
  "/use-cases": { es: "/casos-de-uso", en: "/en/use-cases" },
  "/pricing": { es: "/precios", en: "/en/pricing" },
  "/resources": { es: "/recursos", en: "/en/resources" },
  "/contact": { es: "/contacto", en: "/en/contact" },
  "/book-demo": { es: "/reservar-demo", en: "/en/book-demo" },
  "/privacy": { es: "/privacidad", en: "/en/privacy" },
  "/terms": { es: "/terminos", en: "/en/terms" },
} as const satisfies Record<string, Record<Locale, string>>;

type LocalizedRouteKey = keyof typeof localizedRoutes;

const exactPublicToInternal = new Map<string, { internalPath: string; locale: Locale }>();

for (const [internalPath, localizedPath] of Object.entries(localizedRoutes)) {
  exactPublicToInternal.set(localizedPath.es, {
    internalPath,
    locale: "es",
  });
  exactPublicToInternal.set(localizedPath.en, {
    internalPath,
    locale: "en",
  });
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function localeFromPathname(pathname: string | null | undefined): Locale {
  if (pathname === "/en" || pathname?.startsWith("/en/")) {
    return "en";
  }

  return defaultLocale;
}

export function splitPathSuffix(href: string) {
  const [pathname, suffix = ""] = href.split(/(?=[?#])/, 2);

  return {
    pathname: pathname || "/",
    suffix,
  };
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

export function toInternalPath(pathname: string): string {
  const exactMatch = exactPublicToInternal.get(pathname);

  if (exactMatch) {
    return exactMatch.internalPath;
  }

  if (pathname.startsWith("/recursos/")) {
    return pathname.replace(/^\/recursos/, "/resources");
  }

  if (pathname.startsWith("/en/resources/")) {
    return pathname.replace(/^\/en/, "");
  }

  return stripLocalePrefix(pathname);
}

export function resolvePublicPathname(pathname: string) {
  const exactMatch = exactPublicToInternal.get(pathname);

  if (exactMatch) {
    return exactMatch;
  }

  if (pathname.startsWith("/recursos/")) {
    return {
      internalPath: pathname.replace(/^\/recursos/, "/resources"),
      locale: "es" as const,
    };
  }

  if (pathname.startsWith("/en/resources/")) {
    return {
      internalPath: pathname.replace(/^\/en/, ""),
      locale: "en" as const,
    };
  }

  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return {
      internalPath: stripLocalePrefix(pathname),
      locale: "en" as const,
    };
  }

  return {
    internalPath: pathname,
    locale: defaultLocale,
  };
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

  const { pathname, suffix } = splitPathSuffix(href);
  const normalizedPath = toInternalPath(pathname);

  if (normalizedPath.startsWith("/resources/")) {
    const localizedPrefix = locale === "es" ? "/recursos" : "/en/resources";

    return `${normalizedPath.replace(/^\/resources/, localizedPrefix)}${suffix}`;
  }

  const localizedPath =
    localizedRoutes[normalizedPath as LocalizedRouteKey]?.[locale];

  if (localizedPath) {
    return `${localizedPath}${suffix}`;
  }

  return `${normalizedPath}${suffix}`;
}
