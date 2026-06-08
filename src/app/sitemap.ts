import type { MetadataRoute } from "next";

import { resourceArticles } from "@/data/resources";
import { siteConfig } from "@/data/site";

const routes = [
  "",
  "/platform",
  "/solutions",
  "/ai-models",
  "/use-cases",
  "/pricing",
  "/resources",
  "/about",
  "/contact",
  "/book-demo",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.flatMap((route) => {
    const path = route || "";
    const englishPath = route ? `/en${route}` : "/en";

    return [
      {
        url: `${siteConfig.url}${path}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
        priority: route === "" ? 1 : 0.7,
      },
      {
        url: `${siteConfig.url}${englishPath}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
        priority: route === "" ? 0.9 : 0.65,
      },
    ];
  });

  const resourceRoutes = resourceArticles.flatMap((article) => [
    {
      url: `${siteConfig.url}/resources/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    },
    {
      url: `${siteConfig.url}/en/resources/${article.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
  ]);

  return [...staticRoutes, ...resourceRoutes];
}
