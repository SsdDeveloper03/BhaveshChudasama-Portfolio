"use client";

import { motion } from "framer-motion";

interface MentorshipCardProps {
  title: string;
  description: string;
}

export function MentorshipCard({ title, description }: MentorshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass-card rounded-[1.6rem] border border-white/10 p-6"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">{title}</p>
      <p className="mt-3 text-base leading-8 text-white/70">{description}</p>
    </motion.div>
  );
}
