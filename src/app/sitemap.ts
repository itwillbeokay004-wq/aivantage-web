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
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : 0.7,
  }));

  const resourceRoutes = resourceArticles.map((article) => ({
    url: `${siteConfig.url}/resources/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
