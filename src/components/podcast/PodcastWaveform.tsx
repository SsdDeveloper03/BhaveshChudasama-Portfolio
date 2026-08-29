"use client";

import { motion } from "framer-motion";
import { Volume2 } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function PodcastWaveform() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#0B1220]/70 p-5 sm:p-6 backdrop-blur-xl space-y-3 shadow-xl">
      <div className="flex items-center justify-between text-xs font-mono text-slate-400">
        <div className="flex items-center gap-2 text-sunrise font-semibold">
          <Volume2 className="w-4 h-4" />
          <span>PODCAST AUDIO FREQUENCY</span>
        </div>
        <span>FOUNDER PODCAST IDENTITY</span>
      </div>

      <div className="h-14 w-full bg-[#050816] rounded-xl border border-white/10 px-4 py-2 flex items-center justify-between gap-1 shadow-inner overflow-hidden">
        {Array.from({ length: 36 }).map((_, i) => {
          const baseHeights = [
            35, 60, 45, 80, 95, 50, 75, 40, 90, 65, 40, 85, 100, 50, 80, 60,
            95, 45, 70, 85, 35, 95, 55, 80, 45, 90, 65, 40, 85, 60, 45, 75, 90,
            50, 65, 40
          ];
          const heightPct = baseHeights[i % baseHeights.length];

          return (
            <motion.span
              key={i}
              animate={
                !prefersReducedMotion
                  ? {
                      height: [
                        `${Math.max(15, heightPct * 0.35)}%`,
                        `${heightPct}%`,
                        `${Math.max(12, heightPct * 0.25)}%`,
                      ],
                    }
                  : { height: `${heightPct * 0.4}%` }
              }
              transition={{
                duration: 0.85 + (i % 6) * 0.12,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="w-1 rounded-full bg-sunrise/40 hover:bg-sunrise transition-colors duration-500"
            />
          );
        })}
      </div>
    </div>
  );
}
