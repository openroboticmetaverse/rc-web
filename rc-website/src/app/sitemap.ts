import { MetadataRoute } from "next";
import { getAllEventSlugs } from "@/data/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roboticscollective.org";
  
  // Get all event slugs to create sitemap entries for each event page
  const eventSlugs = getAllEventSlugs();
  const eventPages = eventSlugs.map(slug => ({
    url: `${baseUrl}/events/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    // Include all individual event pages
    ...eventPages,
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
}