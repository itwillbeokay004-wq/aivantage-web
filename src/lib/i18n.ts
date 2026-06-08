import {
  internalRoutePaths,
  routeKeysByInternalPath,
  routeKeysByLocalizedPath,
  routePaths,
  type RouteKey,
} from "@/data/routes";
export type Locale = "es" | "en";

export const defaultLocale: Locale = "es";
export const englishLocale: Locale = "en";
export const locales = ["es", "en"] as const satisfies readonly Locale[];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function isEnglishRoute(pathname: string | null | undefined) {
  return pathname === "/en" || Boolean(pathname?.startsWith("/en/"));
}

export function isSpanishRoute(pathname: string | null | undefined) {
  return !isEnglishRoute(pathname);
}

export function getLocaleFromPathname(pathname: string | null | undefined): Locale {
  return isEnglishRoute(pathname) ? "en" : defaultLocale;
}

export function localeFromPathname(pathname: string | null | undefined): Locale {
  return getLocaleFromPathname(pathname);
}

export function getLocalizedPath(routeKey: RouteKey, locale: Locale) {
  return routePaths[routeKey][locale];
}

const dictionaries = {
  es: {
    locale: "es",
    site: {
      name: "AiVantage",
      domain: "aivantage.es",
      tagline: "Tu ventaja con IA, construida para negocios reales.",
      description:
        "AiVantage ayuda a las empresas a diseñar, desplegar y gestionar agentes de IA para soporte, ventas, operaciones y experiencia del cliente.",
    },
    nav: {
      platform: "Plataforma",
      solutions: "Clientes",
      resources: "Recursos",
      pricing: "Precios",
      contact: "Contacto",
      bookDemo: "Reservar demo",
    },
    cta: {
      bookDemo: "Reservar demo",
      startFreeConsultation: "Consulta gratuita",
    },
    routes: routePaths,
  },
  en: {
    locale: "en",
    site: {
      name: "AiVantage",
      domain: "aivantage.es",
      tagline: "Your AI advantage, built for real business.",
      description:
        "AiVantage helps businesses design, deploy, and manage AI agents for support, sales, operations, and customer engagement.",
    },
    nav: {
      platform: "Platform",
      solutions: "Customers",
      resources: "Resources",
      pricing: "Pricing",
      contact: "Contact",
      bookDemo: "Book a demo",
    },
    cta: {
      bookDemo: "Book a Demo",
      startFreeConsultation: "Start Free Consultation",
    },
    routes: routePaths,
  },
} as const satisfies Record<Locale, object>;

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
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

function findRouteKeyFromPathname(pathname: string): RouteKey | undefined {
  return routeKeysByLocalizedPath[pathname] ?? routeKeysByInternalPath[pathname];
}

export function toInternalPath(pathname: string): string {
  const routeKey = findRouteKeyFromPathname(pathname);

  if (routeKey) {
    return internalRoutePaths[routeKey];
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
  const routeKey = routeKeysByLocalizedPath[pathname];

  if (routeKey) {
    return {
      internalPath: internalRoutePaths[routeKey],
      locale: getLocaleFromPathname(pathname),
    };
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

  if (isEnglishRoute(pathname)) {
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
  const routeKey = routeKeysByInternalPath[normalizedPath];

  if (routeKey) {
    return `${getLocalizedPath(routeKey, locale)}${suffix}`;
  }

  if (normalizedPath.startsWith("/resources/")) {
    const localizedPrefix = locale === "es" ? "/recursos" : "/en/resources";

    return `${normalizedPath.replace(/^\/resources/, localizedPrefix)}${suffix}`;
  }

  return `${normalizedPath}${suffix}`;
}

export function getAlternateLanguagePath(pathname: string) {
  const alternateLocale: Locale = getLocaleFromPathname(pathname) === "es" ? "en" : "es";

  return localizeHref(pathname, alternateLocale);
}

export const localizedRoutes = Object.fromEntries(
  Object.entries(internalRoutePaths).map(([routeKey, internalPath]) => [
    internalPath,
    routePaths[routeKey as RouteKey],
  ]),
) as Record<string, Record<Locale, string>>;
