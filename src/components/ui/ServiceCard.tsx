"use client";

import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  featured?: boolean;
}

export function ServiceCard({ title, description, icon, features, featured = false }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.015, rotate: -0.35 }}
      className={`glass-card rounded-[1.8rem] border border-white/10 p-6 transition-all duration-300 hover:border-sunrise/30 hover:shadow-[0_20px_70px_rgba(255,122,0,0.16)] ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sunrise/30 bg-sunrise/10 text-xl text-sunrise">
          {icon}
        </div>
        {featured ? <span className="rounded-full border border-sunrise/30 bg-sunrise/10 px-3 py-1 text-sm text-sunrise">Featured</span> : null}
      </div>

      <h3 className="mt-6 font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-8 text-white/70">{description}</p>

      <ul className="mt-6 space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-white/70">
            <span className="mt-1 text-sunrise">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

    </motion.article>
  );
}
