"use client";

import { motion } from "framer-motion";

import { ImpactCard } from "@/components/ui/ImpactCard";
import { PhilosophyCard } from "@/components/ui/PhilosophyCard";
import { MentorshipCard } from "@/components/ui/MentorshipCard";
import { impactStats } from "@/lib/constants";

const philosophies = [
  {
    icon: "⚡",
    title: "Technology With Purpose",
    description: "Building software that solves real business problems and creates measurable value.",
  },
  {
    icon: "🧭",
    title: "Innovation Through Execution",
    description: "Turning ideas into scalable products through disciplined execution and clear thinking.",
  },
  {
    icon: "🤝",
    title: "People First Leadership",
    description: "Growing teams through trust, ownership, and mentorship that inspires long-term impact.",
  },
  {
    icon: "🌱",
    title: "Continuous Growth",
    description: "Learning, adapting, and improving every day to stay relevant in a changing world.",
  },
];

const mentorshipAreas = [
  { title: "Technology", description: "Guiding developers and engineers through practical technical growth and architectural thinking." },
  { title: "Career Growth", description: "Helping professionals shape strong career paths through real-world perspective and leadership insight." },
  { title: "Entrepreneurship", description: "Supporting founders with product clarity, execution discipline, and strategic thinking." },
  { title: "Leadership", description: "Building confidence in teams, decision-making, and long-term talent development." },
];

export function Leadership() {
  return (
    <section aria-label="Leadership and Mentorship" className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.1),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.12),_transparent_32%)] py-12 sm:py-16 lg:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Leadership & Mentorship</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            Building technology is important. Building capable people is the real impact.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Leadership is about creating clarity for teams, helping people grow, and turning ambition into long-term value.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {philosophies.map((philosophy) => (
            <PhilosophyCard key={philosophy.title} {...philosophy} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Founder Philosophy</p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                Great technology is built by great minds. My mission is to create solutions and empower people who create them.
              </h3>
              <p className="mt-4 text-base leading-8 text-white/70">
                The goal is not only to develop software, but to create an environment where thoughtful people can grow, contribute, and lead with confidence.
              </p>
            </div>

            <div className="rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.18),_transparent_30%)] p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {impactStats.map((stat) => (
                  <ImpactCard key={stat.title} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Mentorship</p>
            <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Mentoring Future Technology Leaders</h3>
            <p className="mt-4 text-lg leading-8 text-white/70">
              Guidance, perspective, and leadership experience are shared to help others grow with clarity and confidence in a changing technology landscape.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {mentorshipAreas.map((area) => (
              <MentorshipCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
