"use client";

import { motion } from "framer-motion";
import { TrendingUp, Cpu, Compass, Target, ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

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

export function GrowthCoach() {
  return (
    <section
      id="growth-coach"
      className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(255,122,0,0.08),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.06),_transparent_28%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
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
            className="flex flex-col justify-between rounded-3xl border border-sunrise/40 bg-gradient-to-br from-sunrise/15 via-sunrise/5 to-transparent p-7 shadow-xl backdrop-blur-md"
          >
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
      </div>
    </section>
  );
}
