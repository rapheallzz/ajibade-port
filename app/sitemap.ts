import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://stephen-frontend-ui.vercel.app";
  const projectIds = ["01", "02", "03", "04", "05", "06", "07", "08"];

  const projectUrls = projectIds.map((id) => ({
    url: `${baseUrl}/work/${id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    ...projectUrls,
  ];
}
