"use client";

import { motion } from "framer-motion";

interface PhilosophyCardProps {
  icon: string;
  title: string;
  description: string;
}

export function PhilosophyCard({ icon, title, description }: PhilosophyCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="glass-card rounded-[1.6rem] border border-white/10 p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sunrise/30 bg-sunrise/10 text-xl text-sunrise">
        {icon}
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-8 text-white/70">{description}</p>
    </motion.article>
  );
}
