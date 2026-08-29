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
