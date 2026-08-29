"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Tag, Tv } from "lucide-react";
import { PodcastEpisode } from "@/data/podcasts";

interface PodcastModalProps {
  episode: PodcastEpisode | null;
  onClose: () => void;
}

export function PodcastModal({ episode, onClose }: PodcastModalProps) {
  // Lock body scroll when modal is open and restore on close
  useEffect(() => {
    if (episode) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [episode, onClose]);

  if (!episode) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-xl overflow-y-auto"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="podcast-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl rounded-3xl border border-white/20 bg-[#0B1220] p-4 sm:p-6 shadow-[0_25px_80px_rgba(0,0,0,0.85)] shadow-sunrise/15 text-left overflow-hidden"
        >
          {/* Ambient Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-sunrise/15 via-transparent to-blue-500/10 opacity-70 pointer-events-none rounded-3xl" />

          {/* Modal Header Bar */}
          <div className="relative z-10 flex items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sunrise bg-sunrise/10 px-3 py-1 rounded-full border border-sunrise/30 flex items-center gap-1.5 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-sunrise" />
                EPISODE {episode.episodeNumber}
              </span>

              {episode.category && (
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  <Tag className="w-3 h-3 text-sunrise" />
                  {episode.category}
                </span>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="relative z-20 flex items-center justify-center w-9 h-9 rounded-full bg-white/10 hover:bg-sunrise hover:text-slate-950 text-white transition-colors border border-white/15 focus:outline-none focus:ring-2 focus:ring-sunrise"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Episode Title */}
          <h3
            id="podcast-modal-title"
            className="relative z-10 mt-4 text-base sm:text-lg lg:text-xl font-semibold text-white tracking-tight leading-snug"
          >
            {episode.title}
          </h3>

          {/* 16:9 Responsive Video Container */}
          <div className="relative z-10 mt-4 w-full aspect-video rounded-2xl overflow-hidden bg-[#050816] border border-white/15 shadow-2xl">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${episode.videoId}?autoplay=1&rel=0&enablejsapi=1`}
              title={episode.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0 rounded-2xl"
            />
          </div>

          {/* Modal Footer Controls Info */}
          <div className="relative z-10 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Tv className="w-3.5 h-3.5 text-sunrise" />
              <span>HD Player Active</span>
            </div>
            <span className="text-slate-500">Press ESC or tap ✕ to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
