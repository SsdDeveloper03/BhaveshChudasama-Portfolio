"use client";

import { motion } from "framer-motion";

interface ImpactCardProps {
  value: string;
  title: string;
  description: string;
}

export function ImpactCard({ value, title, description }: ImpactCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="glass-card rounded-[1.4rem] border border-white/10 p-5"
    >
      <p className="font-heading text-2xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.26em] text-sunrise">{title}</p>
      <p className="mt-2 text-sm leading-7 text-white/70">{description}</p>
    </motion.div>
  );
}
