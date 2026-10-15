export interface PodcastEpisode {
  id: string;
  episodeNumber: string;
  title: string;
  videoId: string;
  thumbnail?: string;
  description?: string;
  publishedAt?: string;
  category?: string;
  channelName?: string;
  duration?: string;
  featured?: boolean;
}

export type Podcast = PodcastEpisode;

export const podcasts: PodcastEpisode[] = [
  {
    id: "episode-01",
    episodeNumber: "01",
    title: "Leadership Insights & Overcoming Market Hurdles",
    videoId: "IgNLuoQw59U",
    category: "Leadership & Market Strategy",
    channelName: "Growth Ka Digital Partner (@gdppodcast)",
    description: "Deep dive into executive leadership, navigating market disruptions, and building resilient high-performing teams.",
  },
  {
    id: "episode-02",
    episodeNumber: "02",
    title: "Turning Founder Stories into Industry Authority",
    videoId: "5WNPBjZbC2M",
    category: "Brand Authority & Founder Journeys",
    channelName: "Growth Ka Digital Partner (@gdppodcast)",
    description: "Learn how personal storytelling and authentic podcasting transform founder experiences into trusted industry authority.",
  },
  {
    id: "episode-03",
    episodeNumber: "03",
    title: "Scaling Smarter & Business Growth Strategies",
    videoId: "2v6NrmW4gXc",
    category: "Business Growth & Scaling",
    channelName: "Growth Ka Digital Partner (@gdppodcast)",
    description: "Discover actionable strategies on scaling business operations, optimizing tech infrastructure, and driving exponential growth.",
    featured: true,
  },
  {
    id: "episode-04",
    episodeNumber: "04",
    title: "How to Build Personal Brand | Brand Building & Digital Marketing",
    videoId: "1vbEoi4YuZ0",
    category: "Personal Branding & Growth",
    channelName: "Growth Ka Digital Partner (@gdppodcast)",
    description: "Learn how to build a powerful personal brand, leverage the business benefits of podcasting, and establish lasting digital authority.",
  },
  {
    id: "episode-05",
    episodeNumber: "05",
    title: "Expert Ayurved Podcast Gujarati | સ્વસ્થ રહેવાનું સાચું રહસ્ય",
    videoId: "ha38TqpTkoo",
    category: "Ayurveda & Health Insights",
    channelName: "Growth Ka Digital Partner (@gdppodcast)",
    description: "An insightful Gujarati podcast exploring the timeless wisdom of Ayurveda, natural holistic wellness, and healthy living.",
  },
  {
    id: "episode-06",
    episodeNumber: "06",
    title: "वास्तु शास्त्र क्या है? बिना तोड़फोड़ के वास्तु उपाय | Vastu Podcast",
    videoId: "28O_v97tRSE",
    category: "Vastu Shastra & Space Harmony",
    channelName: "Growth Ka Digital Partner (@gdppodcast)",
    description: "Discover practical Vastu Shastra guidance and effective non-demolition remedies to harmonize positive energy in living and work spaces.",
  },
];

export function getSortedEpisodes(
  epList: PodcastEpisode[] = podcasts
): PodcastEpisode[] {
  return [...epList].sort((a, b) => {
    const numA = parseInt(a.episodeNumber, 10) || 0;
    const numB = parseInt(b.episodeNumber, 10) || 0;
    return numA - numB;
  });
}

export function getFeaturedEpisode(
  epList: PodcastEpisode[] = podcasts
): PodcastEpisode {
  const sorted = getSortedEpisodes(epList);
  const featured = sorted.find((ep) => ep.featured);
  return featured || sorted[0];
}
