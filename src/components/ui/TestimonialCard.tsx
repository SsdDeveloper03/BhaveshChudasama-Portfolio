"use client";

import { motion } from "framer-motion";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
  featured?: boolean;
}

export function TestimonialCard({
  name,
  role,
  company,
  message,
  avatar,
  featured = false,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.015, rotate: -0.25 }}
      className={`glass-card rounded-[1.8rem] border border-white/10 p-6 transition-all duration-300 hover:border-sunrise/30 hover:shadow-[0_20px_70px_rgba(255,122,0,0.16)] ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-sunrise/30 bg-sunrise/10 text-sm font-semibold text-sunrise">
          {avatar}
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-white/60">{role}</p>
          <p className="text-sm text-white/50">{company}</p>
        </div>
      </div>

      <p className="mt-6 text-base leading-8 text-white/75">“{message}”</p>
      <div className="mt-6 text-sm font-semibold text-sunrise">Trusted partnership</div>
    </motion.article>
  );
}
