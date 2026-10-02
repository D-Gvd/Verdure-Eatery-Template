import { restaurant } from "@/config/restaurant.config";

export default function sitemap() {
  return [
    {
      url: restaurant.seo.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
