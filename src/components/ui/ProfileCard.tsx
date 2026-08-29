"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

import { LOCATION, ROLE, SITE_NAME } from "@/lib/constants";

interface ProfileCardProps {
  useVideo?: boolean;
}

interface VideoPortraitProps {
  src: string;
  stage: number;
  onStageChange: (stage: number) => void;
}

function VideoPortrait({ src, stage, onStageChange }: VideoPortraitProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.6 });
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (prefersReducedMotion) {
      onStageChange(6);
      return;
    }

    const startedRef = { current: false };
    const thresholdsRef = { current: [1, 4, 6, 8, 10] };

    function updateStage() {
      if (!video) return;
      const t = video.currentTime || 0;
      const thresholds = thresholdsRef.current;
      if (t < thresholds[0]) onStageChange(1);
      else if (t < thresholds[1]) onStageChange(2);
      else if (t < thresholds[2]) onStageChange(3);
      else if (t < thresholds[3]) onStageChange(4);
      else if (t < thresholds[4]) onStageChange(5);
      else onStageChange(5);
    }

    function handleEnded() {
      if (!video) return;
      video.currentTime = 0;
      onStageChange(1);
      const p = video.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    }

    function onLoadedMetadata() {
      if (!video) return;
      const d = video.duration || 10;
      thresholdsRef.current = [d * 0.1, d * 0.4, d * 0.6, d * 0.8, d];
      updateStage();
    }

    video.addEventListener("loadedmetadata", onLoadedMetadata);

    if (inView) {
      video.muted = true;
      video.playsInline = true;
      video.loop = false;
      const p = video.play();
      if (p !== undefined) {
        p.then(() => {
          startedRef.current = true;
        }).catch(() => {
          const tryPlay = () => {
            video.play();
            startedRef.current = true;
            document.removeEventListener("click", tryPlay);
          };
          document.addEventListener("click", tryPlay);
        });
      } else {
        startedRef.current = true;
      }
      video.addEventListener("timeupdate", updateStage);
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("timeupdate", updateStage);
        video.removeEventListener("ended", handleEnded);
        video.removeEventListener("loadedmetadata", onLoadedMetadata);
        if (!startedRef.current) {
          try {
            video.pause();
          } catch (e) {}
        }
      }
    };
  }, [inView, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="relative h-full w-full">
        <Image src="/images/profile.jpg" alt={SITE_NAME} fill className="object-cover object-center" />
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative h-full w-full">
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        controls={false}
        loop={false}
        preload="auto"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function ProfileCard({ useVideo = false }: ProfileCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [stage, setStage] = useState<number>(0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="glass-card w-full max-w-xl rounded-[1.5rem] sm:rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-2 hover:border-sunrise/30 hover:shadow-[0_30px_100px_rgba(255,122,0,0.16)]"
    >
      <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-gradient-to-b from-white/10 via-white/5 to-transparent flex items-center justify-center">
        {/* subtle orbit ring + dot */}
        <svg className="absolute inset-0 m-auto h-64 w-64 sm:h-80 sm:w-80 opacity-10 pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="70" stroke="rgba(255,122,0,0.08)" strokeWidth="1" />
        </svg>
        <motion.div
          className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-[64px] sm:-translate-y-[78px] rounded-full bg-orange-400 shadow-[0_6px_18px_rgba(255,122,0,0.18)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        />

        {useVideo ? (
          <VideoPortrait src="/videos/animated-logo.mp4" stage={stage} onStageChange={setStage} />
        ) : (
          <Image
            src="/images/profile.jpg"
            alt={SITE_NAME}
            fill
            className="object-cover object-center scale-[1.06]"
            priority
            sizes="(max-width: 640px) 100vw, 448px"
          />
        )}
      </div>
      <div className="p-4 sm:p-8">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={stage >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.45, delay: 0 }}
          className="text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.32em] text-sunrise"
        >
          ● Building • Leading • Mentoring
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          animate={stage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-2 sm:mt-3 font-heading text-xl sm:text-2xl font-semibold text-white"
        >
          {SITE_NAME}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={stage >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="mt-1 sm:mt-2 text-base sm:text-lg text-white/85"
        >
          {ROLE}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={stage >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-white/70"
        >
          {LOCATION}
        </motion.p>

        <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-2.5 sm:gap-3">
          {[
            { label: "Innovation", value: "Technology-first" },
            { label: "Leadership", value: "Vision-led" },
            { label: "Growth", value: "Business-ready" },
            { label: "Focus", value: "Execution" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ translateY: -6 }}
              className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:p-4 transition-all duration-300"
            >
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white/45">{item.label}</p>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-white">{item.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-5 sm:mt-6 border-t border-white/6 pt-4 sm:pt-6">
          <p className="italic text-xs sm:text-sm text-white/70">“Build systems that make businesses better.”</p>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm font-semibold text-white">— Bhavesh J. Chudasama</p>
          <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/60">BJC</div>
        </div>
      </div>
    </motion.div>
  );
}
