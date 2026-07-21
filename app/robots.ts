import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* robots.txt — tillater all indeksering og peker søkemotorer til sitemap.
   API-ruten trenger ikke indekseres. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
