"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <span className="text-[#FF6B35] text-xs sm:text-sm font-semibold tracking-widest uppercase">
        ✦ {subtitle}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mt-2">
        <span className="bg-gradient-to-r from-[#FF6B35] to-[#F5A623] bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {description && (
        <p className="text-gray-400 mt-3 text-sm max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
