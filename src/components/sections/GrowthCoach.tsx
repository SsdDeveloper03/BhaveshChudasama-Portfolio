"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Cpu, Compass, Target, ShieldCheck, Sparkles, MessageCircle, ArrowDown, ArrowRight, CircleDot, Workflow, Gauge, Layers3, Network } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    subtitle: "From Chaos to Scalable Revenue",
    description: "Aligning product positioning, market strategy, and operational readiness to drive sustainable revenue growth without compromising quality.",
  },
  {
    icon: Cpu,
    title: "Operational Scaling",
    subtitle: "Systemizing SME Workflows",
    description: "Replacing manual dependencies and fragmented spreadsheets with automated, digital-first operational systems designed for SME scale.",
  },
  {
    icon: Compass,
    title: "Leadership Strategy",
    subtitle: "Founder-Led Strategic Clarity",
    description: "Empowering founders with actionable decision-making frameworks, clear long-term direction, and resilient team alignment.",
  },
  {
    icon: Target,
    title: "Execution Discipline",
    subtitle: "Turning Vision into Daily Action",
    description: "Instilling ruthless prioritization, goal tracking, and execution momentum across every layer of the business.",
  },
  {
    icon: ShieldCheck,
    title: "Technology Modernization",
    subtitle: "Future-Proof Digital Assets",
    description: "Guiding traditional businesses through seamless digital transformation, legacy software upgrades, and modern cloud solutions.",
  },
];

const transformationStages = [
  { label: "CHAOS", icon: CircleDot, color: "#94A3B8" },
  { label: "SYSTEM", icon: Workflow, color: "#0084FF" },
  { label: "EXECUTION", icon: Gauge, color: "#FF7A00" },
  { label: "SCALE", icon: Layers3, color: "#FFA94D" },
  { label: "GROWTH", icon: TrendingUp, color: "#10B981" },
];

const beforeAfter = {
  before: ["Manual Work", "Fragmented Systems", "Unclear Priorities", "Founder Dependency"],
  after: ["Digital Systems", "Clear Processes", "Strategic Focus", "Scalable Operations"],
};

export function GrowthCoach() {
  const reducedMotion = useReducedMotion();
  const [activeStage, setActiveStage] = useState(4);

  return (
    <section
      id="growth-coach"
      className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(255,122,0,0.08),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.06),_transparent_28%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <motion.div
          animate={reducedMotion ? undefined : { x: [0, 28, 0], y: [0, -16, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] top-[30%] size-1 rounded-full bg-sunrise shadow-[0_0_18px_#FF7A00]"
        />
        <motion.div
          animate={reducedMotion ? undefined : { x: [0, -32, 0], y: [0, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[18%] top-[18%] size-1 rounded-full bg-[#0084FF] shadow-[0_0_18px_#0084FF]"
        />
        <div className="absolute left-[12%] top-[30%] h-px w-[76%] bg-gradient-to-r from-transparent via-sunrise/20 to-transparent" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 grid items-center gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14"
        >
          <motion.div
            animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-full max-w-[20rem] lg:mx-0"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-sunrise/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.04] p-2 shadow-[0_24px_70px_rgba(255,122,0,0.18)] backdrop-blur-md">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src="/images/profile.jpg" alt="Bhavesh Chudasama, founder and mentor" fill priority={false} sizes="(max-width: 1024px) 80vw, 20rem" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-5 left-5 rounded-full border border-sunrise/40 bg-[#050816]/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-sunrise backdrop-blur-md">
                Founder • Mentor • Strategist
              </div>
            </div>
          </motion.div>

          <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sunrise backdrop-blur-md">
            <Sparkles size={14} className="text-sunrise" />
            <span>04 — GROWTH COACH &amp; FOUNDER MENTOR</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Empowering Ambitious Founders to Build Resilient Systems
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Practical mentorship grounded in 15+ years of software architecture, business operations, and leading SME transformation — zero fluff, pure execution.
          </p>
        </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.16)] backdrop-blur-md sm:p-7"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-sunrise">THE GROWTH PATH</p>
              <p className="mt-2 text-sm text-white/60">A practical movement from pressure to performance.</p>
            </div>
            <Network className="hidden size-6 text-[#0084FF] sm:block" />
          </div>
          <div className="grid grid-cols-5 gap-1 sm:gap-4">
            {transformationStages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = index <= activeStage;
              return (
                <button
                  key={stage.label}
                  type="button"
                  onClick={() => setActiveStage(index)}
                  className="group relative flex min-w-0 flex-col items-center gap-3 text-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunrise"
                  aria-label={`Show ${stage.label} stage`}
                >
                  {index < transformationStages.length - 1 && <span className={`absolute left-[58%] top-5 h-px w-[84%] transition-colors duration-500 ${index < activeStage ? "bg-sunrise/70" : "bg-white/10"}`} />}
                  <span className={`relative z-10 flex size-10 items-center justify-center rounded-full border transition duration-500 sm:size-12 ${isActive ? "border-sunrise/70 bg-sunrise/15 text-sunrise shadow-[0_0_22px_rgba(255,122,0,0.18)]" : "border-white/15 bg-white/[0.04] text-white/40"}`}>
                    <Icon size={18} />
                  </span>
                  <span className={`text-[9px] font-bold tracking-[0.12em] transition-colors sm:text-[10px] ${isActive ? "text-white" : "text-white/40"}`}>{stage.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 5 Core Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-sunrise/40 hover:bg-white/[0.06] hover:shadow-[0_15px_40px_rgba(255,122,0,0.12)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sunrise/30 bg-sunrise/10 text-sunrise transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-sunrise/90">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-xs leading-relaxed text-white/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}

          {/* Direct Coaching CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5, duration: 0.45 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sunrise/40 bg-gradient-to-br from-sunrise/15 via-sunrise/5 to-transparent p-7 shadow-xl backdrop-blur-md"
          >
            <div className="pointer-events-none absolute -right-8 -top-10 size-40 opacity-20">
              <div className="absolute inset-0 rounded-full border border-sunrise/70" />
              <div className="absolute inset-6 rounded-full border border-[#0084FF]/60" />
              <motion.div
                animate={reducedMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1/2 h-px w-24 origin-left bg-gradient-to-r from-sunrise to-transparent"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-sunrise/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sunrise">
                Founder Advisory
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Need Advisory for Your Business?</h3>
              <p className="mt-2 text-xs text-white/80 leading-relaxed">
                Connect directly with Bhavesh to discuss operational strategy, software architecture, or organizational growth.
              </p>
            </div>

            <a
              href="https://wa.me/919727001838?text=Hi%20Bhavesh%2C%20I%20am%20interested%20in%20your%20Growth%20Coach%20advisory%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sunrise px-6 py-3 text-xs font-bold text-white shadow-lg shadow-sunrise/30 transition hover:bg-orange-600 hover:shadow-sunrise/50"
            >
              <MessageCircle size={16} />
              Book Advisory Session
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-12 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-stretch sm:p-7"
        >
          <div className="rounded-2xl border border-white/10 bg-[#050816]/40 p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">Before</p>
            <div className="mt-4 space-y-3">
              {beforeAfter.before.map((item) => <p key={item} className="flex items-center gap-3 text-sm text-white/60"><span className="size-1.5 rounded-full bg-white/30" />{item}</p>)}
            </div>
          </div>
          <div className="flex items-center justify-center text-sunrise"><ArrowRight className="hidden size-7 sm:block" /><ArrowDown className="size-6 sm:hidden" /></div>
          <div className="rounded-2xl border border-sunrise/25 bg-sunrise/[0.06] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sunrise">After</p>
            <div className="mt-4 space-y-3">
              {beforeAfter.after.map((item, index) => <motion.p key={item} initial={reducedMotion ? false : { opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="flex items-center gap-3 text-sm text-white"><span className="size-1.5 rounded-full bg-sunrise" />{item}</motion.p>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
