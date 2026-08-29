"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Sparkles, Headphones, Share2, Check, Play, Tv, Tag, Radio } from "lucide-react";
import { PodcastEpisode } from "@/data/podcasts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface FeaturedEpisodeProps {
  episode: PodcastEpisode;
  onPlayInModal?: (episode: PodcastEpisode) => void;
}

export function FeaturedEpisode({ episode, onPlayInModal }: FeaturedEpisodeProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [copied, setCopied] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

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

  const videoScaleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="featured-player" className="space-y-6">
      {/* Featured Header Badge & Share Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sunrise bg-sunrise/10 px-3.5 py-1 rounded-full border border-sunrise/25 flex items-center gap-1.5 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-sunrise" />
            FEATURED EPISODE
          </span>

          <span className="text-xs font-mono text-sunrise font-semibold bg-sunrise/10 border border-sunrise/20 px-3 py-1 rounded-full">
            {epNumStr}
          </span>

          {episode.category && (
            <span className="text-xs font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-sunrise" />
              {episode.category}
            </span>
          )}

          {episode.channelName && (
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-sunrise" />
              {episode.channelName}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sunrise transition-colors px-3 py-1.5 rounded-lg border border-white/10 hover:border-sunrise/30 bg-white/5"
          title="Share episode link"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-green-400" />
              <span className="text-green-400">Link Copied</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Episode</span>
            </>
          )}
        </button>
      </div>

      {/* LARGE CINEMATIC VIDEO PLAYER (PRIMARY VISUAL FOCUS) */}
      <motion.div variants={videoScaleVariants} className="relative w-full">
        <div className="relative rounded-3xl border border-white/15 bg-[#0B1220] p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,0.65)] shadow-sunrise/10 group overflow-hidden transition-all duration-500 hover:border-sunrise/30">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sunrise/20 via-transparent to-blue-500/10 opacity-70 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

          {/* 16:9 Aspect Ratio Responsive Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#050816] border border-white/10 shadow-inner">
            {isPlayingInline ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${episode.videoId}?autoplay=1&rel=0&enablejsapi=1`}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 rounded-2xl pointer-events-auto"
              />
            ) : (
              <div
                onClick={() => setIsPlayingInline(true)}
                className="relative w-full h-full cursor-pointer group/thumb"
                role="button"
                tabIndex={0}
                aria-label={`Play ${episode.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsPlayingInline(true);
                  }
                }}
              >
                {/* Real YouTube Video Thumbnail */}
                {/* eslint-disable-next-html-element-for-img */}
                <img
                  src={thumbnailSrc}
                  alt={episode.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-105"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent opacity-80 group-hover/thumb:opacity-60 transition-opacity duration-500" />

                {/* Glowing Sunrise Orange Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sunrise text-slate-950 shadow-[0_0_35px_rgba(255,122,0,0.6)] backdrop-blur-md transition-shadow duration-300"
                  >
                    <div className="absolute inset-0 rounded-full bg-sunrise animate-ping opacity-30" />
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-slate-950 translate-x-0.5" />
                  </motion.div>
                </div>
              </div>
            )}
          </div>

          {/* Player Footnote */}
          <div className="mt-3 px-2 py-1 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Tv className="w-3.5 h-3.5 text-sunrise shrink-0" />
              <span>Full Interactive Native YouTube Controls</span>
            </div>

            {onPlayInModal && (
              <button
                type="button"
                onClick={() => onPlayInModal(episode)}
                className="inline-flex items-center gap-2 rounded-xl bg-sunrise/10 border border-sunrise/30 px-3 py-1 text-xs font-semibold font-mono text-sunrise hover:bg-sunrise hover:text-slate-950 transition-all"
              >
                <Radio className="w-3.5 h-3.5" />
                <span>Modal Theater View</span>
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* EPISODE TITLE & SHORT INFORMATION (BELOW VIDEO) */}
      <div className="space-y-3 pt-2">
        <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight leading-snug">
          {episode.title}
        </h3>

        {episode.description && (
          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {episode.description}
          </p>
        )}
      </div>
    </div>
  );
}
