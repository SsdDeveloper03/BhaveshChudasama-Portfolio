"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "FOUNDER & CEO",
  "SOFTWARE EXPERT",
  "GROWTH COACH",
  "LIFE MENTOR",
  "PUBLIC SPEAKER",
  "PODCASTER",
];

export function AnimatedRole() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, []);

  const currentRole = roles[index];
  const showWaveform = currentRole === "Podcaster";

  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 text-lg font-semibold text-white/90 sm:text-xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRole}
          initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(10px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-sunrise drop-shadow-[0_0_12px_rgba(255,122,0,0.3)]"
        >
          {currentRole}
        </motion.span>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {showWaveform ? (
          <motion.span
            key="podcast-waveform"
            initial={{ opacity: 0, scale: 0.9, x: -6 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -6 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3 py-1 text-xs font-semibold text-sunrise shadow-lg shadow-sunrise/20 backdrop-blur-md"
          >
            <span className="text-sunrise animate-pulse">🎙</span>
            <span className="inline-flex items-end gap-1 h-3">
              <motion.span
                animate={{ height: ["40%", "100%", "50%"] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="w-0.5 bg-sunrise rounded-full shadow-sm shadow-sunrise"
              />
              <motion.span
                animate={{ height: ["80%", "30%", "90%"] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                className="w-0.5 bg-sunrise rounded-full shadow-sm shadow-sunrise"
              />
              <motion.span
                animate={{ height: ["30%", "90%", "40%"] }}
                transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
                className="w-0.5 bg-sunrise rounded-full shadow-sm shadow-sunrise"
              />
              <motion.span
                animate={{ height: ["100%", "40%", "80%"] }}
                transition={{ duration: 0.65, repeat: Infinity, repeatType: "reverse" }}
                className="w-0.5 bg-sunrise rounded-full shadow-sm shadow-sunrise"
              />
            </span>
          </motion.span>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
