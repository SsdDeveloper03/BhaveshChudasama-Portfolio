"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const rolesList = [
  "SOFTWARE EXPERT",
  "PODCASTER",
  "GROWTH COACH",
  "LIFE MENTOR",
  "PUBLIC SPEAKER",
];

const socialPillLinks = [
  {
    id: "instagram",
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/chudasamabhavesh/",
  },
  {
    id: "youtube-podcast",
    label: "YouTube – Podcast",
    icon: YoutubeIcon,
    href: "https://youtube.com/@gdppodcast?si=RE37Iwf3VyxLz_gG",
  },
  {
    id: "youtube-main",
    label: "YouTube",
    icon: YoutubeIcon,
    href: "https://youtube.com/@gdptalks",
  },
  {
    id: "website",
    label: "Website",
    icon: Globe,
    href: "https://sunrisesoftware.in/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/bhavesh-chudasama-48280728?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/share/1DZB2eiZmL/",
  },
];

export function Hero() {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRoleIndex((prev) => (prev + 1) % rolesList.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#050816] min-h-screen flex items-center justify-center pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      {/* Background Radial Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,107,53,0.15),_transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,166,35,0.1),_transparent_60%)] pointer-events-none" />

      <div className="section-container relative z-10 w-full">
        <div className="grid w-full items-center gap-8 lg:gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          
          {/* LEFT COLUMN: Clean White Circular Photo Frame WITHOUT outer box container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 flex justify-center w-full"
          >
            <div className="relative aspect-square w-full max-w-[280px] sm:max-w-[360px] lg:max-w-[420px] rounded-full border-2 border-white/90 p-1.5 shadow-[0_20px_60px_rgba(255,107,53,0.35)] bg-slate-900 mx-auto">
              {/* Soft Ambient Glow Ring Behind Circle */}
              <div className="absolute inset-[-12px] rounded-full bg-gradient-to-tr from-[#FF6B35]/30 via-transparent to-[#F5A623]/25 blur-xl animate-pulse pointer-events-none" />

              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Bhavesh J. Chudasama - Founder & CEO"
                  fill
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Text Content & Dynamic Role Cycling (SECOND ON MOBILE) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex flex-col items-start text-left w-full max-w-full"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-bold text-white/80 uppercase tracking-widest backdrop-blur-md">
              <span>FOUNDER &amp; CEO · {COMPANY_NAME}</span>
            </div>

            {/* Main Headline: BHAVESH J / CHUDASAMA */}
            <h1 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95] text-white">
              <span className="block text-white">BHAVESH J</span>
              <span className="block text-[#FF6B35]">CHUDASAMA</span>
            </h1>

            {/* DYNAMIC CYCLING ROLE BADGE - BIG, BOLD & HIGHLIGHTED */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2.5 sm:gap-3 overflow-hidden h-11 sm:h-14">
              <span className="text-[#FF6B35] font-black text-xl sm:text-3xl animate-pulse">•</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={rolesList[activeRoleIndex]}
                  initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="rounded-xl border border-[#FF6B35]/40 bg-[#FF6B35]/15 px-3.5 sm:px-4 py-1 sm:py-1.5 shadow-[0_0_20px_rgba(255,107,53,0.3)] backdrop-blur-md"
                >
                  <span className="text-base sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-wider text-[#FF6B35] drop-shadow-[0_2px_10px_rgba(255,107,53,0.5)]">
                    {rolesList[activeRoleIndex]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* All Roles Highlight Line */}
            <div className="mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-white/70">
              {rolesList.map((r, idx) => (
                <span
                  key={r}
                  className={`px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md transition-all duration-300 ${
                    idx === activeRoleIndex
                      ? "bg-[#FF6B35] text-white font-extrabold shadow-md scale-105"
                      : "bg-white/5 border border-white/10 text-white/60 hover:text-white"
                  }`}
                >
                  • {r}
                </span>
              ))}
            </div>

            {/* Core Statement Block */}
            <div className="mt-5 sm:mt-6 space-y-1">
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                Technology builds the business.
              </h2>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                Conversations build the person.
              </h2>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#FF6B35] leading-tight">
                Growth connects them both.
              </h2>
            </div>

            {/* Subtitle Description */}
            <p className="mt-3 text-xs sm:text-base font-medium text-white/70">
              Building businesses. Starting conversations. Creating growth.
            </p>

            {/* CTAs Row: Solid Orange WHATSAPP + Dark CALL NOW */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/919727001838?text=Hi%20Bhavesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#FF6B35] px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-extrabold text-white uppercase tracking-widest shadow-lg shadow-[#FF6B35]/30 transition duration-300 hover:bg-[#e05a2b] hover:shadow-[#FF6B35]/50 hover:scale-105"
              >
                WHATSAPP
              </a>
              <a
                href="tel:+919727001838"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-black/40 px-6 sm:px-8 py-3 sm:py-3.5 text-xs font-extrabold text-white uppercase tracking-widest transition duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105"
              >
                CALL NOW
              </a>
            </div>

            {/* Social Pill Buttons Row */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-2.5 w-full max-w-full overflow-x-auto pb-1 scrollbar-none">
              {socialPillLinks.map((pill) => {
                const Icon = pill.icon;
                return (
                  <a
                    key={pill.id}
                    href={pill.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-bold text-white/90 transition duration-300 hover:border-[#FF6B35] hover:bg-white/10 hover:text-white hover:scale-105"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#FF6B35]" />
                    <span className="whitespace-nowrap">{pill.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
