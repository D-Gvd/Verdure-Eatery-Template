import { restaurant } from "@/config/restaurant.config";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${restaurant.seo.siteUrl}/sitemap.xml`,
  };
}
