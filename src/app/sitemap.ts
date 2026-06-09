import type { MetadataRoute } from "next";

import type { Locale } from "@/lib/i18n";
import { localizedSeoUrls } from "@/lib/seo";

const routes = [
  "/",
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

  return staticRoutes;
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
