import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// Required from Next 15: with `output: 'export'` a metadata route has to opt
// into being static explicitly, otherwise the build fails while collecting
// page data.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
