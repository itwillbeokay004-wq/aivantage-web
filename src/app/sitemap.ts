import type { MetadataRoute } from "next";

import { resourceArticles } from "@/data/resources";
import type { Locale } from "@/lib/i18n";
import { localizedSeoUrls } from "@/lib/seo";

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
      sitemapEntry(route, "es", {
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 1 : 0.7,
      }),
      sitemapEntry(route, "en", {
        changeFrequency: isHome ? "weekly" : "monthly",
        priority: isHome ? 0.9 : 0.65,
      }),
    ];
  });

  const resourceRoutes = resourceArticles.flatMap((article) => [
    sitemapEntry(`/resources/${article.slug}`, "es", {
      changeFrequency: "monthly",
      priority: 0.55,
    }),
    sitemapEntry(`/resources/${article.slug}`, "en", {
      changeFrequency: "monthly",
      priority: 0.5,
    }),
  ]);

  return [...staticRoutes, ...resourceRoutes];
}

function sitemapEntry(
  path: string,
  locale: Locale,
  {
    changeFrequency,
    priority,
  }: {
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  },
): MetadataRoute.Sitemap[number] {
  const { canonical, languages } = localizedSeoUrls(path, locale);

  return {
    url: canonical,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: {
      languages,
    },
  };
}
