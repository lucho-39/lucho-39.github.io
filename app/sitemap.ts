import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // The portfolio is a single page, so the sitemap has one entry. `lastModified`
  // is intentionally omitted: it would change on every build and say nothing.
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
