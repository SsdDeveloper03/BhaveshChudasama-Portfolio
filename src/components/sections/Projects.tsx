"use client";

import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/constants";

const categories = ["Enterprise Software", "SaaS Platforms", "Web Applications", "Mobile Solutions", "Automation"];

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.12),_transparent_30%),radial-gradient(circle_at_right,_rgba(37,99,235,0.08),_transparent_24%)] py-12 sm:py-16 lg:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Projects Showcase</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            A technology partner building scalable digital solutions for modern businesses.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            From software products to enterprise platforms, the work spans strategy, product, and intelligent automation — all shaped for measurable growth.
          </p>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span key={category} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white/70">
              {category}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
