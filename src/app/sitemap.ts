import type { MetadataRoute } from "next";

const siteUrl = "https://spiritualwalk.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "about", "journey", "destinations", "gallery", "wellness",
    "director", "booking", "contact", "faq", "privacy", "terms",
  ];
  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
