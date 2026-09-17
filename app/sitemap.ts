import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Required from Next 15: with `output: 'export'` a metadata route has to opt
// into being static explicitly, otherwise the build fails while collecting
// page data.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // `lastModified` is intentionally omitted: it would change on every build and
  // says nothing useful.
  return [
    {
      url: siteUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/diploma`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
