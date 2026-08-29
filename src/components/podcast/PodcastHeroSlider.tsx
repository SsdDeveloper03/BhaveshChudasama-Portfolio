"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mic, Sparkles, CheckCircle2, TrendingUp, ShieldCheck } from "lucide-react";

const sliderSlides = [
  {
    id: 1,
    tag: "SLIDE 1 — WHY PODCAST?",
    title: "Great Conversations Create Big Impact.",
    subtitle: "Don’t just tell your expertise. Let your conversation prove it.",
    accentColor: "from-[#FF7A00] to-amber-500",
    icon: Sparkles,
    content: (
      <div className="space-y-3">
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5 text-amber-200">
          <p className="text-xs font-semibold leading-relaxed">
            💡 <strong className="text-white">Core Insight:</strong> In a crowded market, self-promotion gets ignored, but deep business dialogue builds instant credibility. One powerful episode positions your experience as an industry benchmark.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    tag: "SLIDE 2 — THE 5-STEP BRAND AUTHORITY ENGINE",
    title: "The 5-Step Brand Authority Engine",
    subtitle: "How real conversations convert into enterprise business growth:",
    accentColor: "from-blue-500 to-cyan-400",
    icon: TrendingUp,
    content: (
      <div className="space-y-2">
        {[
          { num: "01", title: "Real Conversation", desc: "Raw, unscripted discussions that reveal your core mastery." },
          { num: "02", title: "Authentic Story", desc: "Moving beyond corporate jargon to humanize your journey and struggles." },
          { num: "03", title: "Audience Trust", desc: "When decision-makers hear your thinking, trust forms organically." },
          { num: "04", title: "Market Authority", desc: "Being seen and heard as the go-to specialist in your niche." },
          { num: "05", title: "Business Growth", desc: "Transforming brand equity into high-value leads and long-term client relationships." },
        ].map((step) => (
          <div key={step.num} className="rounded-xl border border-white/10 bg-white/5 p-2 text-left">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-black text-[#FF7A00]">
              <span>{step.num}.</span>
              <span className="text-white">{step.title}:</span>
            </div>
            <p className="text-[10px] text-white/70 mt-0.5 leading-snug">{step.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    tag: "SLIDE 3 — MEASURABLE BUSINESS OUTCOMES",
    title: "Measurable Business Outcomes",
    subtitle: "Direct outcomes achieved after your episode airs:",
    accentColor: "from-emerald-500 to-teal-400",
    icon: ShieldCheck,
    content: (
      <div className="space-y-2">
        {[
          { title: "More Visibility & Reach", desc: "Put your story in front of business owners, peers, and potential partners." },
          { title: "Stronger Industry Authority", desc: "Stand out from generic competitors with high-production video assets." },
          { title: "Deeper Client Trust", desc: "Shorten sales cycles by letting prospects hear your domain expertise directly." },
          { title: "High-Ticket Opportunities", desc: "Turn personal brand equity into investor attention, enterprise contracts, and strategic partnerships." },
        ].map((item, idx) => (
          <div key={idx} className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-2.5 text-left">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-300">
              <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
              <span>{item.title}</span>
            </div>
            <p className="text-[10px] text-emerald-100/70 mt-0.5 leading-snug pl-4">{item.desc}</p>
          </div>
        ))}
      </div>
    ),
  },
];

export function PodcastHeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % sliderSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + sliderSlides.length) % sliderSlides.length);
  };

  const activeSlide = sliderSlides[currentIndex];

  return (
    <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#FF7A00] flex items-center gap-1.5">
          <Sparkles size={14} /> 9:16 Visual Showcase
        </span>
        <span className="text-xs font-mono text-white/50">
          {currentIndex + 1} / {sliderSlides.length}
        </span>
      </div>

      {/* 9:16 Aspect Ratio Slider Container */}
      <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border border-[#FF7A00]/40 bg-[#0c101c] shadow-[0_20px_60px_rgba(255,122,0,0.2)] group p-6 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col justify-between h-full relative z-10"
          >
            {/* Header Tag */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-mono font-bold text-[#FF7A00] uppercase tracking-wider mb-3">
                <Mic size={12} />
                {activeSlide.tag}
              </div>

              <h3 className="text-lg sm:text-xl font-black text-white leading-tight">
                {activeSlide.title}
              </h3>
              <p className="mt-1 text-[11px] text-white/70 font-medium">
                {activeSlide.subtitle}
              </p>
            </div>

            {/* Middle Content */}
            <div className="my-2">{activeSlide.content}</div>

            {/* Bottom Footer Badge */}
            <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-white/50">GROWTH KA DIGITAL PARTNER</span>
              <span className="text-[10px] font-mono font-bold text-[#FF7A00]">@GDPPODCAST</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Ambient Gradient Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00]/10 via-transparent to-blue-950/40 pointer-events-none" />

        {/* Navigation Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:bg-[#FF7A00] hover:border-[#FF7A00]"
          aria-label="Previous slide"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white backdrop-blur-md transition hover:bg-[#FF7A00] hover:border-[#FF7A00]"
          aria-label="Next slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Thumbnails Dots */}
      <div className="mt-4 flex items-center justify-center gap-2">
        {sliderSlides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "w-8 bg-[#FF7A00]" : "w-2 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
