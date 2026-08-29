"use client";

import { motion } from "framer-motion";
import { HeartHandshake, Lightbulb, Shield, Flame, Sparkles, Quote } from "lucide-react";

const mentorPrinciples = [
  {
    icon: Flame,
    title: "Relentless Discipline",
    description: "Motivation starts the engine, but consistency keeps it moving. Discipline is choosing between what you want now and what you want most.",
  },
  {
    icon: Lightbulb,
    title: "Growth Mindset",
    description: "Every setback in business and life is a data point. Embracing continuous learning converts friction into wisdom.",
  },
  {
    icon: Shield,
    title: "Value-Driven Leadership",
    description: "True leadership is measured by integrity, clarity, and the growth of the people around you — not titles or vanity metrics.",
  },
  {
    icon: HeartHandshake,
    title: "Authentic Relationships",
    description: "Trust is the ultimate currency in life and business. Long-term partnerships are built on transparency and shared values.",
  },
];

export function LifeMentor() {
  return (
    <section
      id="life-mentor"
      className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,122,0,0.08),_transparent_32%),radial-gradient(circle_at_top_left,_rgba(99,102,241,0.06),_transparent_28%)] py-16 sm:py-20 lg:py-24"
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
            <span>05 — LIFE MENTOR &amp; PERSONAL PHILOSOPHY</span>
          </div>

          <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Character, Mindset, and Grounded Leadership
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            "Technology creates tools, but character builds legacy." Practical life lessons on discipline, clarity, and living with purpose.
          </p>
        </motion.div>

        {/* Authentic Founder Quote Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-md relative overflow-hidden"
        >
          <Quote size={60} className="absolute -top-3 -left-3 text-sunrise/10 pointer-events-none" />
          <p className="relative z-10 text-lg sm:text-xl font-medium text-white/90 italic leading-relaxed">
            "Before you scale a company, you must scale your own character. Growth is not just about quarterly numbers — it is about how disciplined, humble, and resilient you remain through every season."
          </p>
          <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-sunrise">
            — Bhavesh J. Chudasama
          </p>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mentorPrinciples.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-sunrise/40 hover:bg-white/[0.05]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-sunrise/30 bg-sunrise/10 text-sunrise">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/70">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
