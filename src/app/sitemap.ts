import type { MetadataRoute } from "next";

import { resourceArticles } from "@/data/resources";
import { siteConfig } from "@/data/site";
import { localizeHref } from "@/lib/i18n";

const routes = [
  "/",
  "/platform",
  "/solutions",
  "/ai-models",
  "/use-cases",
  "/pricing",
  "/resources",
  "/contact",
  "/book-demo",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.flatMap((route) => {
    const isHome = route === "/";

    return [
      {
        url: `${siteConfig.url}${localizeHref(route, "es")}`,
        lastModified: new Date(),
        changeFrequency: isHome ? ("weekly" as const) : ("monthly" as const),
        priority: isHome ? 1 : 0.7,
      },
      {
        url: `${siteConfig.url}${localizeHref(route, "en")}`,
        lastModified: new Date(),
        changeFrequency: isHome ? ("weekly" as const) : ("monthly" as const),
        priority: isHome ? 0.9 : 0.65,
      },
    ];
  });

  const resourceRoutes = resourceArticles.flatMap((article) => [
    {
      url: `${siteConfig.url}${localizeHref(`/resources/${article.slug}`, "es")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    },
    {
      url: `${siteConfig.url}${localizeHref(`/resources/${article.slug}`, "en")}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]);

  return [...staticRoutes, ...resourceRoutes];
}
