"use client";

import { motion, Variants } from "framer-motion";
import { PodcastEpisode } from "@/data/podcasts";
import { EpisodeCard } from "./EpisodeCard";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface EpisodeGridProps {
  episodes: PodcastEpisode[];
  onSelectEpisode: (episode: PodcastEpisode) => void;
  selectedEpisodeId?: string;
}

export function EpisodeGrid({ episodes, onSelectEpisode, selectedEpisodeId }: EpisodeGridProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut",
      },
    },
  };

  if (!episodes || episodes.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
    >
      {episodes.map((episode) => (
        <motion.div key={episode.id} variants={itemVariants} className="h-full">
          <EpisodeCard
            episode={episode}
            onSelectEpisode={onSelectEpisode}
            isSelected={episode.id === selectedEpisodeId}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
