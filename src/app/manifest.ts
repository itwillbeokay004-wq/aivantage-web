import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AiVantage",
    short_name: "AiVantage",
    description:
      "AiVantage helps businesses launch AI agents for support, sales, operations, chat, voice, and workflow automation.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#050914",
    theme_color: "#050914",
    categories: ["business", "productivity", "technology"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
    id: siteConfig.url,
  };
}
