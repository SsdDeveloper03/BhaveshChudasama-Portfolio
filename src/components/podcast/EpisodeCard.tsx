"use client";

import { motion } from "framer-motion";
import { Play, Tag, Headphones, Share2, Check } from "lucide-react";
import { useState } from "react";
import { PodcastEpisode } from "@/data/podcasts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface EpisodeCardProps {
  episode: PodcastEpisode;
  onSelectEpisode: (episode: PodcastEpisode) => void;
  isSelected?: boolean;
}

export function EpisodeCard({ episode, onSelectEpisode, isSelected }: EpisodeCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `https://www.youtube.com/watch?v=${episode.videoId}`;
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const thumbnailSrc =
    episode.thumbnail || `https://i.ytimg.com/vi/${episode.videoId}/hqdefault.jpg`;

  const epNumStr = `EPISODE ${episode.episodeNumber}`;

  return (
    <motion.div
      whileHover={!prefersReducedMotion ? { y: -6 } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={() => onSelectEpisode(episode)}
      role="button"
      tabIndex={0}
      aria-label={`Select ${episode.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectEpisode(episode);
        }
      }}
      className={`group relative flex flex-col justify-between h-full rounded-3xl border border-white/15 bg-[#0B1220]/90 backdrop-blur-xl p-4 sm:p-5 transition-all duration-500 shadow-xl hover:border-sunrise/40 hover:shadow-[0_0_35px_rgba(255,122,0,0.2)] cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-sunrise ${
        isSelected ? "ring-2 ring-sunrise border-sunrise/50" : ""
      }`}
    >
      {/* Glass Reflection Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-sunrise/5 rounded-3xl pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-500" />

      <div>
        {/* Thumbnail Container */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#050816] border border-white/10 group-hover:border-sunrise/30 transition-colors duration-500">
          {/* eslint-disable-next-html-element-for-img */}
          <img
            src={thumbnailSrc}
            alt={episode.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

          {/* Sunrise Orange Glowing Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-sunrise text-slate-950 shadow-[0_0_25px_rgba(255,122,0,0.6)] backdrop-blur-md transition-shadow duration-300"
            >
              <div className="absolute inset-0 rounded-full bg-sunrise animate-ping opacity-30" />
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-slate-950 translate-x-0.5" />
            </motion.div>
          </div>

          {/* Episode Number Badge */}
          <div className="absolute top-3 left-3 bg-[#0B1220]/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-mono text-sunrise font-semibold">
            {epNumStr}
          </div>
        </div>

        {/* Info Area */}
        <div className="mt-4 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
            {episode.category && (
              <span className="text-sunrise bg-sunrise/10 border border-sunrise/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {episode.category}
              </span>
            )}

            {episode.channelName && (
              <span className="flex items-center gap-1 text-[11px] text-slate-400">
                <Headphones className="w-3 h-3 text-sunrise" />
                {episode.channelName}
              </span>
            )}
          </div>

          <h4 className="font-heading text-base sm:text-lg font-semibold text-white leading-snug group-hover:text-sunrise transition-colors duration-300">
            {episode.title}
          </h4>

          {/* Subtle Waveform Animation inside card */}
          <div className="pt-1 flex items-center gap-2">
            <div className="flex items-end gap-1 h-4 px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.span
                  key={i}
                  animate={
                    !prefersReducedMotion
                      ? {
                          height: ["20%", "100%", "30%"],
                        }
                      : { height: "50%" }
                  }
                  transition={{
                    duration: 0.6 + (i % 4) * 0.15,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  className="w-0.5 bg-sunrise/60 group-hover:bg-sunrise rounded-full transition-colors"
                />
              ))}
            </div>
            <span className="text-[11px] font-mono text-slate-400">Audio Stream Ready</span>
          </div>

          {episode.description && (
            <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              {episode.description}
            </p>
          )}
        </div>
      </div>

      {/* Footer Controls */}
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectEpisode(episode);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-sunrise px-3.5 py-1.5 text-xs font-semibold text-slate-950 hover:bg-sunrise-light transition-all shadow-md shadow-sunrise/20"
        >
          <Play className="w-3.5 h-3.5 fill-slate-950" />
          <span>Select Episode</span>
        </button>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sunrise transition-colors px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-sunrise/30 bg-white/5"
          title="Share episode link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </>
          )}
        </button>
      </div>
    </motion.div>
  );
}
