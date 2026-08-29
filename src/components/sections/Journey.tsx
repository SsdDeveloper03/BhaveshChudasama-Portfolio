"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Layers, Globe, Briefcase, Rocket, Award, Sparkles } from "lucide-react";
import { journey } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  code: Code,
  layers: Layers,
  globe: Globe,
  briefcase: Briefcase,
  rocket: Rocket,
  award: Award,
};

export function Journey() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <div id="journey" className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10 backdrop-blur-md">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="max-w-3xl mb-12 text-center md:text-left"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sunrise backdrop-blur-md">
          <Sparkles size={14} className="text-sunrise" />
          <span>02 — CAREER JOURNEY (2009 → 2026)</span>
        </div>
        <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl">
          15+ Years of Technology Evolution &amp; Leadership
        </h2>
        <p className="mt-3 text-base leading-relaxed text-white/70 sm:text-lg">
          From hands-on software development to enterprise ERP management and founder leadership — building software that powers real businesses.
        </p>
      </motion.div>

      {/* STRAIGHT LINE TIMELINE WITH ALTERNATING LEFT & RIGHT CONTENT CARDS */}
      <div className="relative">
        {/* SINGLE STRAIGHT LINE (CENTERED ON DESKTOP, LEFT ON MOBILE) */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-6 w-0.5 -translate-x-1/2 bg-[#FF7A00]/50" />

        <div className="space-y-8 md:space-y-12">
          {journey.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Code;
            const isHovered = activeIdx === idx;
            const isRightSide = idx % 2 === 1; // Odd (idx 0, 2, 4) -> Left Side | Even (idx 1, 3, 5) -> Right Side

            return (
              <div
                key={item.year}
                onMouseEnter={() => setActiveIdx(idx)}
                onMouseLeave={() => setActiveIdx(null)}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* CENTER STRAIGHT LINE NODE BADGE */}
                <div
                  className={`absolute left-4 md:left-1/2 top-5 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isHovered
                      ? "border-[#FF7A00] bg-[#FF7A00] text-white shadow-[0_0_20px_rgba(255,122,0,0.9)] scale-110"
                      : "border-[#FF7A00] bg-[#050816] text-[#FF7A00] shadow-[0_0_10px_rgba(255,122,0,0.4)]"
                  }`}
                >
                  <IconComponent size={18} />
                </div>

                {/* LEFT SIDE CONTENT CARD (2009, 2012–2015, 2016–2020) */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:pr-10 text-left md:text-right">
                  {!isRightSide && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-md transition-all duration-300 ${
                        isHovered
                          ? "border-[#FF7A00] bg-white/[0.08] shadow-[0_10px_25px_rgba(255,122,0,0.2)] md:-translate-x-1"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-start md:justify-end gap-2.5 border-b border-white/10 pb-3">
                        <span className="rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/15 px-3 py-0.5 text-xs font-mono font-black text-[#FF7A00]">
                          {item.year}
                        </span>
                        <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                          {item.company}
                        </span>
                      </div>

                      <div className="mt-3">
                        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs font-extrabold text-[#FF7A00]">
                          {item.stage}
                        </p>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* RIGHT SIDE CONTENT CARD (2009–2015, 2014–2015, 2021–2026) */}
                <div className="w-full md:w-1/2 pl-12 md:pl-10 text-left">
                  {isRightSide && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      className={`rounded-2xl border p-5 sm:p-6 backdrop-blur-md transition-all duration-300 ${
                        isHovered
                          ? "border-[#FF7A00] bg-white/[0.08] shadow-[0_10px_25px_rgba(255,122,0,0.2)] md:translate-x-1"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20"
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-start gap-2.5 border-b border-white/10 pb-3">
                        <span className="rounded-full border border-[#FF7A00]/40 bg-[#FF7A00]/15 px-3 py-0.5 text-xs font-mono font-black text-[#FF7A00]">
                          {item.year}
                        </span>
                        <span className="rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/70">
                          {item.company}
                        </span>
                      </div>

                      <div className="mt-3">
                        <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="mt-0.5 text-xs font-extrabold text-[#FF7A00]">
                          {item.stage}
                        </p>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
