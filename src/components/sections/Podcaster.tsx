"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Radio, Mic, Sparkles, CheckCircle2, TrendingUp, Award, Play, ExternalLink } from "lucide-react";
import { podcasts } from "@/data/podcasts";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { PodcastGuestModal } from "@/components/ui/PodcastGuestModal";
import PodcasterEnquiry from "@/components/PodcasterEnquiry";

const podcastPillars = [
  {
    icon: Mic,
    title: "🎙️ Expert Conversations",
    desc: "Real people. Real stories. Real impact.",
    color: "#FF7A00",
  },
  {
    icon: TrendingUp,
    title: "🎯 Proven Strategies",
    desc: "Actionable ideas that drive measurable revenue.",
    color: "#0084FF",
  },
  {
    icon: Award,
    title: "📈 Business Growth",
    desc: "Scale smarter, build stronger, grow consistently.",
    color: "#10B981",
  },
  {
    icon: Sparkles,
    title: "💡 Actionable Insights",
    desc: "Turn practical insights into immediate execution.",
    color: "#EC4899",
  },
];

export function Podcaster() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="podcaster"
      aria-label="Podcaster & Growth Ka Digital Partner"
      className="relative overflow-hidden border-t border-white/10 py-16 sm:py-24 bg-[#050816]"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,122,0,0.14),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,132,255,0.09),_transparent_55%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* ================================================== */}
        {/* 1. HEADER, ANIMATED WAVEFORM & FLOATING LOGO      */}
        {/* ================================================== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="max-w-3xl space-y-3">
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF7A00] backdrop-blur-md">
                <Radio className="w-3.5 h-3.5 text-[#FF7A00] animate-pulse" />
                PODCASTER MODULE
              </div>
              <span className="text-xs font-mono text-white/50">Growth Ka Digital Partner (@gdppodcast)</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Your Voice Can Become Your Identity
            </motion.h2>

            {/* Oscillating Studio Audio Waveform */}
            <motion.div variants={itemVariants} className="flex items-center gap-1.5 py-1">
              {[40, 75, 30, 90, 50, 85, 35, 95, 60, 80, 45, 100, 55, 70, 30, 85, 40].map((h, i) => (
                <motion.span
                  key={i}
                  animate={{ scaleY: [0.3, 1, 0.4] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.07,
                    ease: "easeInOut",
                  }}
                  style={{ height: `${h}%` }}
                  className="w-1 h-6 rounded-full bg-gradient-to-t from-blue-500 via-[#FF7A00] to-amber-400 opacity-90 origin-bottom"
                />
              ))}
              <span className="text-[10px] font-mono font-bold text-[#FF7A00] uppercase tracking-widest pl-2">
                LIVE STUDIO AUDIO
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-[#FF7A00] font-mono text-sm sm:text-base font-extrabold">
              — Your Voice. Your Brand Identity.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg leading-relaxed text-white/80"
            >
              Real Talks. Real Strategies. Real Growth. Podcasts that build your personal brand and drive business expansion.
            </motion.p>
          </div>

          {/* Hero Logo Floating & Glow Pulse */}
          <motion.div
            variants={itemVariants}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="shrink-0 relative aspect-square w-24 sm:w-28 overflow-hidden rounded-3xl border-2 border-[#FF7A00]/50 bg-white p-2 shadow-[0_0_25px_rgba(255,122,0,0.3)] hover:shadow-[0_0_35px_rgba(255,122,0,0.5)] transition-shadow duration-300"
          >
            <Image
              src="/images/gdp_podcast_logo.jpg"
              alt="Growth Ka Digital Partner Official Podcast Logo"
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-contain p-1"
            />
          </motion.div>
        </motion.div>

        {/* ================================================== */}
        {/* 2. CORE PODCAST PILLARS (4 VALUE CARDS)           */}
        {/* ================================================== */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {podcastPillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md hover:border-[#FF7A00] hover:bg-white/[0.06] transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition duration-300" style={{ color: pillar.color }}>
                    <IconComp size={20} />
                  </div>
                  <h3 className="text-sm font-black text-white group-hover:text-[#FF7A00] transition">{pillar.title}</h3>
                </div>
                <p className="mt-2.5 text-xs text-white/70 leading-relaxed font-medium">{pillar.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ================================================== */}
        {/* 3. RECENT PODCAST EPISODES (3 SPECIFIC VIDEOS)     */}
        {/* ================================================== */}
        <div className="space-y-6 pt-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider">
                OFFICIAL SHOW CHANNEL: @GDPPODCAST
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">Our Recent Podcasts</h3>
            </div>
            
            {/* Glowing Pill Visit Channel Button */}
            <a
              href="https://www.youtube.com/@gdppodcast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/15 px-4 py-2 text-xs font-extrabold text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white shadow-lg hover:shadow-[#FF7A00]/40 transition duration-300"
            >
              <span>Visit Channel</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {podcasts.map((episode) => {
              const isPlaying = activeVideoId === episode.videoId;
              return (
                <motion.div
                  key={episode.id}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/15 bg-[#0c101c] p-4 backdrop-blur-md shadow-xl transition-all duration-300 hover:border-[#FF7A00] hover:shadow-[0_10px_30px_rgba(255,122,0,0.25)]"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-950 mb-3.5 shadow-md">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${episode.videoId}?autoplay=1`}
                        title={episode.title}
                        className="h-full w-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div
                        onClick={() => setActiveVideoId(episode.videoId)}
                        className="relative h-full w-full cursor-pointer overflow-hidden"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${episode.videoId}/hqdefault.jpg`}
                          alt={episode.title}
                          className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          {/* Play Button Pulse Animation */}
                          <motion.div
                            animate={{ scale: [1, 1.12, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/50 group-hover:scale-125 transition duration-300"
                          >
                            <Play size={20} className="fill-white ml-0.5" />
                          </motion.div>
                        </div>
                        
                        {/* Floating Category Pill Tag */}
                        <span className="absolute top-2 left-2 rounded-full border border-white/20 bg-black/80 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-mono font-black text-[#FF7A00]">
                          EPISODE {episode.episodeNumber} • {episode.category}
                        </span>
                      </div>
                    )}
                  </div>

                  <span className="text-[10px] font-mono font-bold text-white/50">{episode.channelName}</span>
                  <h4 className="mt-1 text-sm font-extrabold text-white group-hover:text-[#FF7A00] transition line-clamp-2">
                    {episode.title}
                  </h4>

                  <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2.5 text-xs font-bold">
                    <button
                      type="button"
                      onClick={() => setActiveVideoId(episode.videoId)}
                      className="text-red-400 hover:text-white transition inline-flex items-center gap-1 text-[11px]"
                    >
                      ▶ {isPlaying ? "Playing Now" : "Watch Episode"}
                    </button>
                    <a
                      href={`https://youtu.be/${episode.videoId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/40 hover:text-[#FF7A00] transition"
                      title="Open on YouTube"
                    >
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================================================== */}
        {/* 4. CTA: SHORT, PUNCHY & MODERN (MOBILE SCANNABLE)  */}
        {/* ================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-[#FF7A00]/40 bg-gradient-to-r from-[#0c101c] via-[#151c2e] to-[#0c101c] p-8 sm:p-10 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF7A00]/20 border border-[#FF7A00]/40 px-3.5 py-1 text-xs font-mono font-bold text-[#FF7A00] uppercase tracking-wider">
                <Mic size={14} />
                🎙️ Share Your Blueprint
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Be the Next Voice on Growth Ka Digital Partner.
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Transform how prospects perceive your business. Step into the studio and let your conversation do the selling.
              </p>
            </div>

            <PodcasterEnquiry
              buttonText="Request Next Recording Slot →"
              buttonClassName="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-[#FF7A00] to-amber-500 px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-[#FF7A00]/35 hover:scale-105 hover:shadow-[#FF7A00]/50 transition duration-300 shrink-0"
            />
          </div>
        </motion.div>

      </div>

      {/* GUEST APPLICATION FORM MODAL */}
      <PodcastGuestModal
        isOpen={isGuestModalOpen}
        onClose={() => setIsGuestModalOpen(false)}
      />
    </section>
  );
}
