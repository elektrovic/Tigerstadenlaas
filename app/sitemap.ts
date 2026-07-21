import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/* sitemap.xml — lister alle offentlige sider slik at Google finner dem raskt.
   Forsiden prioriteres høyest; undersidene like under. */
export default function sitemap(): MetadataRoute.Sitemap {
  const sider = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/tjenester", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/dognvakt", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/om-oss", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" as const },
  ];
  return sider.map((s) => ({
    url: `${SITE_URL}${s.path}`,
    changeFrequency: s.changeFrequency,
    priority: s.priority,
  }));
}
