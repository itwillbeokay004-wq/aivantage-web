import type { Locale } from "@/lib/i18n";

export const routeKeys = [
  "home",
  "platform",
  "solutions",
  "aiModels",
  "useCases",
  "pricing",
  "resources",
  "contact",
  "bookDemo",
  "privacy",
  "terms",
] as const;

export type RouteKey = (typeof routeKeys)[number];

export const routePaths = {
  home: { es: "/", en: "/en" },
  platform: { es: "/plataforma", en: "/en/platform" },
  solutions: { es: "/soluciones", en: "/en/solutions" },
  aiModels: { es: "/modelos-ia", en: "/en/ai-models" },
  useCases: { es: "/casos-de-uso", en: "/en/use-cases" },
  pricing: { es: "/precios", en: "/en/pricing" },
  resources: { es: "/recursos", en: "/en/resources" },
  contact: { es: "/contacto", en: "/en/contact" },
  bookDemo: { es: "/reservar-demo", en: "/en/book-demo" },
  privacy: { es: "/privacidad", en: "/en/privacy" },
  terms: { es: "/terminos", en: "/en/terms" },
} as const satisfies Record<RouteKey, Record<Locale, string>>;

export const internalRoutePaths = {
  home: "/",
  platform: "/platform",
  solutions: "/solutions",
  aiModels: "/ai-models",
  useCases: "/use-cases",
  pricing: "/pricing",
  resources: "/resources",
  contact: "/contact",
  bookDemo: "/book-demo",
  privacy: "/privacy",
  terms: "/terms",
} as const satisfies Record<RouteKey, string>;

export const routeKeysByInternalPath = Object.fromEntries(
  routeKeys.map((routeKey) => [internalRoutePaths[routeKey], routeKey]),
) as Record<string, RouteKey>;

export const routeKeysByLocalizedPath = Object.fromEntries(
  routeKeys.flatMap((routeKey) => [
    [routePaths[routeKey].es, routeKey],
    [routePaths[routeKey].en, routeKey],
  ]),
) as Record<string, RouteKey>;
