"use client";

import { motion } from "framer-motion";
import { Code2, TrendingUp, Target, Radio, Brain, Mic2, Sparkles, ArrowRight } from "lucide-react";

const expertiseCards = [
  {
    icon: Code2,
    title: "Software Expert",
    description: "Organizing industries with custom software solutions.",
    stat: "17+ Yrs Tech",
    badge: "SOFTWARE",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategist",
    description: "Actionable strategies for measurable business growth.",
    stat: "SME Scaling",
    badge: "STRATEGY",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: Target,
    title: "Personal Branding",
    description: "Building authentic brands through great conversations.",
    stat: "Voice & Authority",
    badge: "BRANDING",
    color: "from-sky-500 to-indigo-500",
  },
  {
    icon: Radio,
    title: "Podcaster",
    description: "Conversations that drive growth and create impact.",
    stat: "GDP Talks Host",
    badge: "PODCAST",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: Brain,
    title: "Life Mentor",
    description: "Empowering leaders with mentorship and guidance.",
    stat: "Discipline & Purpose",
    badge: "MENTORSHIP",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Mic2,
    title: "Public Speaker",
    description: "Inspiring audiences with real stories and insights.",
    stat: "Keynote Leader",
    badge: "SPEAKER",
    color: "from-purple-500 to-pink-500",
  },
];

export function Expertise() {
  return (
    <section
      id="expertise"
      className="relative overflow-hidden border-t border-white/10 bg-[#050816] py-16 sm:py-20 lg:py-24"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-sunrise/10 blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sunrise backdrop-blur-md">
            <Sparkles size={14} className="text-sunrise" />
            <span>10 — CORE EXPERTISE &amp; VALUE CARDS</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Multi-Dimensional Expertise for Complete Leadership Impact
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Bridging technical software architecture, executive mentorship, brand voice, and strategic business growth.
          </p>
        </motion.div>

        {/* 6 Visual Expertise Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertiseCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-sunrise/50 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_rgba(255,122,0,0.15)] backdrop-blur-md"
              >
                {/* Animated Hover Gradient Accent Top Border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-sunrise group-hover:border-sunrise/40 group-hover:bg-sunrise/10 group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-sunrise">
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-xl font-bold text-white group-hover:text-sunrise transition-colors">
                  {card.title}
                </h3>

                <p className="mt-2 text-xs leading-relaxed text-white/75">
                  &quot;{card.description}&quot;
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[11px] font-mono font-semibold text-white/50">
                    {card.stat}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-sunrise group-hover:translate-x-1 transition-transform">
                    Learn More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
