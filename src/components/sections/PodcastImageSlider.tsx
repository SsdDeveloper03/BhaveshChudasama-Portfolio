"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Camera, ChevronLeft, ChevronRight, ExternalLink, Radio } from "lucide-react";

type Slide = {
  eyebrow: string;
  title: string[];
  description: string;
  kind: "voice" | "conversation" | "brand" | "growth" | "guest" | "signature" | "reel";
  link?: string;
};

const slides: Slide[] = [
  {
    eyebrow: "GROWTH KA DIGITAL PARTNER",
    title: ["YOUR VOICE", "CAN BECOME", "YOUR IDENTITY."],
    description: "Real stories. Clear direction.",
    kind: "voice",
  },
  {
    eyebrow: "CONVERSATIONS THAT DRIVE GROWTH.",
    title: ["REAL PEOPLE.", "REAL STORIES.", "REAL IMPACT."],
    description: "Two perspectives. One meaningful conversation.",
    kind: "conversation",
  },
  {
    eyebrow: "FOUNDER PERSONAL BRAND",
    title: ["YOUR STORY.", "YOUR VOICE.", "YOUR BRAND."],
    description: "From visibility to authority.",
    kind: "brand",
  },
  {
    eyebrow: "THE GROWTH PATH",
    title: ["CONVERSATIONS", "THAT DRIVE", "GROWTH."],
    description: "Ideas become strategy. Strategy becomes action.",
    kind: "growth",
  },
  {
    eyebrow: "GROWTH KA DIGITAL PARTNER",
    title: ["THE NEXT VOICE", "COULD BE", "YOURS."],
    description: "Share your story. Inspire others.",
    kind: "guest",
  },
  {
    eyebrow: "GROWTH KA DIGITAL PARTNER",
    title: ["GROWTH", "KA DIGITAL", "PARTNER"],
    description: "REAL TALKS. REAL STRATEGIES. REAL GROWTH.",
    kind: "signature",
  },
  {
    eyebrow: "INSTAGRAM REEL",
    title: ["REAL TALK.", "REAL ENERGY.", "WATCH THE REEL."],
    description: "A featured Growth Ka Digital Partner moment.",
    kind: "reel",
    link: "https://www.instagram.com/reel/Dc0AMW9CJxo/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

function Waveform({ dense = false }: { dense?: boolean }) {
  const bars = dense ? [18, 44, 30, 66, 40, 82, 38, 72, 25, 54, 35, 68, 28, 48, 20] : [25, 64, 38, 82, 46, 70, 32, 58, 24, 76, 42, 62];
  return (
    <div className="flex h-8 items-center gap-1" aria-hidden="true">
      {bars.map((height, index) => (
        <motion.span
          key={index}
          animate={{ height: [`${height}%`, `${Math.max(18, height - 18)}%`, `${height}%`] }}
          transition={{ duration: 1.1 + index * 0.04, repeat: Infinity, ease: "easeInOut", delay: index * 0.05 }}
          className="w-1 rounded-full bg-gradient-to-t from-[#0084FF] to-[#FF7A00]"
        />
      ))}
    </div>
  );
}

function Microphone({ className = "" }: { className?: string }) {
  return (
    <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-[#FF7A00]/25 blur-2xl" />
      <svg viewBox="0 0 120 170" className="relative h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="39" y="10" width="42" height="90" rx="21" stroke="#FFA94D" strokeWidth="5" />
        <path d="M25 75C25 104 40 119 60 119C80 119 95 104 95 75" stroke="#FF7A00" strokeWidth="5" strokeLinecap="round" />
        <path d="M60 119V151M42 151H78" stroke="#94A3B8" strokeWidth="5" strokeLinecap="round" />
        <path d="M48 33V70M60 24V82M72 39V70" stroke="#0084FF" strokeWidth="3" strokeLinecap="round" opacity=".8" />
      </svg>
    </motion.div>
  );
}

function Rings() {
  return <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden="true"><motion.div animate={{ scale: [0.85, 1.12, 0.85], opacity: [0.35, 0.08, 0.35] }} transition={{ duration: 3.5, repeat: Infinity }} className="absolute size-48 rounded-full border border-[#FF7A00]/50" /><motion.div animate={{ scale: [0.75, 1.2, 0.75], opacity: [0.22, 0.04, 0.22] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="absolute size-64 rounded-full border border-[#0084FF]/40" /></div>;
}

function Particles() {
  return <>{["left-8 top-28", "right-10 top-44", "left-14 bottom-32", "right-8 bottom-52", "left-1/2 top-20"].map((position, index) => <motion.span key={position} animate={{ y: [0, index % 2 ? 10 : -10, 0], opacity: [0.25, 0.8, 0.25] }} transition={{ duration: 3 + index * 0.4, repeat: Infinity }} className={`absolute ${position} size-1 rounded-full bg-[#FFA94D] shadow-[0_0_12px_#FF7A00]`} />)}</>;
}

function SlideVisual({ kind }: { kind: Slide["kind"] }) {
  if (kind === "reel") return <div className="relative flex flex-col items-center justify-center"><Rings /><motion.div animate={{ rotate: [0, 4, -4, 0] }} transition={{ duration: 4, repeat: Infinity }} className="relative z-10 flex h-40 w-40 items-center justify-center rounded-[2rem] border border-[#FF7A00]/50 bg-gradient-to-br from-[#FF7A00]/20 via-[#0B1220] to-[#0084FF]/20 shadow-[0_0_45px_rgba(255,122,0,0.18)]"><Camera className="size-16 text-white" strokeWidth={1.4} /><span className="absolute bottom-4 rounded-full border border-[#FF7A00]/40 bg-[#050816]/80 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-[#FFA94D]">REEL</span></motion.div></div>;
  if (kind === "conversation") return <div className="relative flex items-center justify-center gap-8"><Microphone className="h-28 w-16" /><motion.div animate={{ opacity: [0.3, 1, 0.3], scaleX: [0.8, 1.1, 0.8] }} transition={{ duration: 2, repeat: Infinity }} className="absolute h-px w-32 bg-gradient-to-r from-[#0084FF] via-[#FF7A00] to-[#0084FF]" /><Microphone className="h-28 w-16" /></div>;
  if (kind === "brand") return <div className="relative flex items-center justify-center"><Rings /><Microphone className="z-10 h-36 w-24" /><div className="absolute -left-20 top-0 text-[9px] font-bold tracking-[0.18em] text-[#FFA94D]">STORY</div><div className="absolute -right-20 top-6 text-[9px] font-bold tracking-[0.18em] text-[#0084FF]">EXPERTISE</div><div className="absolute -left-24 bottom-2 text-[9px] font-bold tracking-[0.18em] text-[#0084FF]">VISION</div><div className="absolute -right-20 bottom-0 text-[9px] font-bold tracking-[0.18em] text-[#FFA94D]">GROWTH</div></div>;
  if (kind === "growth") return <div className="flex items-end gap-3"><Microphone className="mr-2 h-24 w-16" />{[30, 48, 65, 88].map((height, index) => <motion.span key={height} initial={{ height: 0 }} whileInView={{ height: `${height}px` }} viewport={{ once: true }} transition={{ delay: index * 0.12, duration: 0.6 }} className="w-5 rounded-t-md bg-gradient-to-t from-[#0084FF] to-[#FF7A00]" />)}</div>;
  if (kind === "guest") return <div className="relative flex h-44 w-52 items-end justify-center rounded-[50%] border border-[#FF7A00]/40 bg-gradient-to-t from-[#FF7A00]/15 to-transparent"><div className="absolute -top-10 h-16 w-32 rounded-full bg-[#FFA94D]/15 blur-2xl" /><Microphone className="z-10 h-32 w-20" /></div>;
  return <div className="relative flex items-center justify-center"><Rings /><Microphone className="z-10 h-40 w-28" /></div>;
}

function Poster({ slide }: { slide: Slide }) {
  return <div className="relative flex h-full flex-col overflow-hidden bg-[radial-gradient(circle_at_50%_38%,rgba(255,122,0,0.2),transparent_28%),linear-gradient(145deg,#0B1220,#050816)] p-6 sm:p-8"><div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.14)_1px,transparent_1px)] [background-size:28px_28px]" /><Particles /><div className="relative z-10 flex items-center justify-between text-[9px] font-bold tracking-[0.22em] text-[#FFA94D]"><span>{slide.eyebrow}</span>{slide.kind === "reel" ? <Camera size={14} /> : <Radio size={14} />}</div><div className="relative z-10 mt-8"><p className="font-heading text-3xl font-black leading-[0.98] tracking-tight text-white sm:text-4xl">{slide.title.map((line) => <span key={line} className="block">{line}</span>)}</p><p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/55">{slide.description}</p></div><div className="relative z-10 flex flex-1 items-center justify-center py-5"><SlideVisual kind={slide.kind} /></div><div className="relative z-10 mt-auto space-y-4"><Waveform dense={slide.kind === "signature" || slide.kind === "reel"} /><div className="flex items-center justify-between border-t border-white/10 pt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/45"><span>GROWTH / {slide.kind === "reel" ? "REEL" : "01—06"}</span>{slide.link ? <a href={slide.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#FF7A00] transition hover:text-white">Watch Reel <ExternalLink size={11} /></a> : <span className="flex items-center gap-1 text-[#FF7A00]">Listen <ArrowRight size={12} /></span>}</div></div></div>;
}

export function PodcastImageSlider() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const move = (direction: number) => {
    setActiveIndex((index) => (index + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    if (reducedMotion || isPaused) return;

    const interval = window.setInterval(() => move(1), 6000);
    return () => window.clearInterval(interval);
  }, [isPaused, reducedMotion]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      className="group relative mx-auto w-[88vw] max-w-[25rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-500 hover:scale-[1.01] hover:shadow-[0_24px_80px_rgba(255,122,0,0.18)] sm:w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220]" tabIndex={0} aria-label="Podcast visual carousel">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={slides[activeIndex].kind}
            className="absolute inset-0"
            initial={reducedMotion ? false : { opacity: 0, x: 18, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0, x: -18, scale: 0.96 }}
            transition={{ duration: 0.42, ease: "easeOut" }}
            drag={reducedMotion ? false : "x"}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -45) move(1);
              if (info.offset.x > 45) move(-1);
            }}
          >
            <Poster slide={slides[activeIndex]} />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous podcast visual"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-[#050816]/70 p-2.5 text-white backdrop-blur-md transition hover:border-[#FF7A00]/60 hover:text-[#FF7A00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next podcast visual"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 bg-[#050816]/70 p-2.5 text-white backdrop-blur-md transition hover:border-[#FF7A00]/60 hover:text-[#FF7A00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00]"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2 rounded-full border border-white/15 bg-[#050816]/70 px-3 py-2 backdrop-blur-md" role="tablist" aria-label="Podcast visuals">
          {slides.map((slide, index) => (
            <button
              key={slide.kind}
              type="button"
              role="tab"
              aria-label={`Show podcast visual ${index + 1}`}
              aria-selected={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7A00] ${index === activeIndex ? "w-6 bg-[#FF7A00]" : "w-1.5 bg-white/45 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
