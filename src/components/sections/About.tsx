"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Mic,
  TrendingUp,
  Brain,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

const bentoCards = [
  {
    id: "logic-code",
    title: "Logic & Code",
    category: "ERPs & Automation",
    tag: "SOFTWARE ARCHITECTURE",
    description:
      "Architecting robust, scalable software systems for SMEs. Transforming chaotic manual workflows into streamlined digital ERP platforms across Tailoring, Transport, Payroll, and Billing.",
    icon: Code2,
    accent: "#FF6B35",
    bgGradient: "from-[#FF6B35]/15 via-transparent to-transparent",
    borderColor: "border-[#FF6B35]/30",
    glowColor: "rgba(255,107,53,0.25)",
    points: [
      "Custom Enterprise ERP Systems",
      "IBM SAP PM Experience",
      "Tailoring & Transport Solutions",
    ],
  },
  {
    id: "media-reach",
    title: "Media & Reach",
    category: "Podcast Authority",
    tag: "GROWTH KA DIGITAL PARTNER",
    description:
      "Driving powerful, high-impact conversations with industry leaders, founders, and changemakers. Unlocking digital growth strategies and empowering thousands of aspiring entrepreneurs.",
    icon: Mic,
    accent: "#0084FF",
    bgGradient: "from-[#0084FF]/15 via-transparent to-transparent",
    borderColor: "border-[#0084FF]/30",
    glowColor: "rgba(0,132,255,0.25)",
    points: [
      "GDP Talks Podcast Host",
      "Founder Interviews & Media",
      "Digital Branding Strategy",
    ],
  },
  {
    id: "strategy-execution",
    title: "Strategy & Execution",
    category: "Scalable Roadmaps",
    tag: "GROWTH COACHING",
    description:
      "Providing battle-tested growth frameworks, operational mastery, and execution roadmaps that help SME owners scale revenue, optimize processes, and achieve market leadership.",
    icon: TrendingUp,
    accent: "#F5A623",
    bgGradient: "from-[#F5A623]/15 via-transparent to-transparent",
    borderColor: "border-[#F5A623]/30",
    glowColor: "rgba(245,166,35,0.25)",
    points: [
      "SME Business Scaling",
      "Operational Optimization",
      "Revenue & Process Systems",
    ],
  },
  {
    id: "mindset-life",
    title: "Mindset & Life",
    category: "Grounded Leadership",
    tag: "LIFE MENTORSHIP",
    description:
      "Guiding individuals to cultivate unshakeable mental clarity, emotional resilience, and disciplined habits. Balancing high-performance business output with grounded personal leadership.",
    icon: Brain,
    accent: "#10B981",
    bgGradient: "from-[#10B981]/15 via-transparent to-transparent",
    borderColor: "border-[#10B981]/30",
    glowColor: "rgba(16,185,129,0.25)",
    points: [
      "Clarity & Mental Resilience",
      "Disciplined Leadership Habits",
      "Holistic Life Alignment",
    ],
  },
];

const highlights = [
  { value: "2009", label: "Started Tech Journey" },
  { value: "2016", label: "Founded Sunrise Software" },
  { value: "5+", label: "Enterprise Software Products" },
  { value: "100+", label: "SME Businesses Empowered" },
];

export function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/10 bg-[#060a14] pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Ambient Radial Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,107,53,0.08),_transparent_45%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,132,255,0.06),_transparent_45%)] pointer-events-none" />

      <div className="section-container relative z-10">
        
        {/* Section Top Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="text-left max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF6B35] backdrop-blur-md">
            <Sparkles size={14} className="text-[#FF6B35]" />
            <span>01 — ABOUT BHAVESH CHUDASAMA</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            One Mind. Five Dimensions.
            <span className="block text-[#FF6B35] mt-1">
              Engineering Business Systems &amp; Human Potential.
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-white/70 font-medium">
            15+ years spanning enterprise software architecture, SME business transformation, high-impact media, and executive growth mentoring.
          </p>
        </motion.div>

        {/* Bento Grid (4 Distinct Impact Cards) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {bentoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl border ${card.borderColor} bg-gradient-to-br ${card.bgGradient} bg-[#0c111d]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl transition duration-300 hover:scale-[1.01] hover:border-white/30`}
              >
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="rounded-full px-3 py-1 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest"
                    style={{
                      backgroundColor: `${card.accent}1A`,
                      color: card.accent,
                      border: `1px solid ${card.accent}44`,
                    }}
                  >
                    {card.tag}
                  </span>
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 shadow-lg"
                    style={{
                      backgroundColor: `${card.accent}20`,
                      borderColor: `${card.accent}40`,
                    }}
                  >
                    <Icon size={24} style={{ color: card.accent }} />
                  </div>
                </div>

                {/* Card Title & Category */}
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50">
                    {card.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {card.title}
                  </h3>
                </div>

                {/* Card Description */}
                <p className="mt-3 text-xs sm:text-sm text-white/75 leading-relaxed font-normal">
                  {card.description}
                </p>

                {/* Key Bullet Points */}
                <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                  {card.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2 text-xs font-bold text-white/90">
                      <CheckCircle2 size={14} style={{ color: card.accent }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Read Full Story Button & Expandable Career Story */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 px-7 py-3 text-xs font-extrabold tracking-wider uppercase text-[#FF6B35] transition duration-300 hover:bg-[#FF6B35]/20 hover:border-[#FF6B35] hover:scale-105"
          >
            <Zap size={15} />
            <span>{expanded ? "Show Less Story" : "Read Full Background & Milestones"}</span>
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Expandable Career Details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-8 space-y-4 rounded-3xl border border-white/15 bg-[#0e1424]/90 p-6 sm:p-8 text-sm leading-relaxed text-white/80 backdrop-blur-xl max-w-4xl mx-auto shadow-2xl">
                <h4 className="text-xl font-black text-white">The Founder Journey (2009 – Present)</h4>
                <p>
                  My software journey began in 2009 as a passionate developer, building custom digital architecture across demanding industries including Diamonds, Textiles, Pharmaceuticals, Retail, Manufacturing, and IT.
                </p>
                <p>
                  Transitioning into Business Development, I managed international outsourcing clients across global markets, developing a dual lens on technical execution and enterprise value creation.
                </p>
                <p>
                  A pivotal milestone was serving as <span className="font-bold text-white">SAP Project Manager with IBM</span>, leading enterprise ERP implementations for API Manufacturing &amp; Pharma. Managing multi-layered digital implementations reinforced the vital alignment between technology, leadership, and operational workflows.
                </p>
                <p>
                  In 2016, I founded <span className="font-bold text-[#FF6B35]">Sunrise Software Development</span> to bridge the gap for small and medium enterprises — replacing generic spreadsheets with purpose-built software platforms like ProperERP, Transport Management, Tailoring Software, and Payroll systems.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-4 grid-cols-2">
          {highlights.map((item) => (
            <StatCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>

      </div>
    </section>
  );
}
