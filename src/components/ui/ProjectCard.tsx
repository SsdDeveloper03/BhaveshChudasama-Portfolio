"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  impact: string;
  image: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  category,
  description,
  impact,
  image,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.015, rotate: -0.4 }}
      className={`glass-card overflow-hidden rounded-[1.8rem] border border-white/10 transition-all duration-300 hover:border-sunrise/30 hover:shadow-[0_20px_70px_rgba(255,122,0,0.16)] ${featured ? "md:col-span-2" : ""}`}
    >
      <div className="h-48 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.24),_transparent_30%),linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.02))] p-6">
        <div className="flex h-full items-end justify-between rounded-[1.2rem] border border-white/10 bg-[rgba(5,8,22,0.45)] p-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sunrise">{category}</p>
            <p className="mt-2 text-xl font-semibold text-white">{title}</p>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-sunrise">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-7 text-white/70">{description}</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">Impact</p>
          <p className="mt-2 text-sm leading-7 text-white/70">{impact}</p>
        </div>
      </div>
    </motion.article>
  );
}
