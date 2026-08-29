"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });

  // extract numeric value and suffix (eg. 10 and '+')
  const numeric = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const duration = 1400; // ms

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOut cubic
      setCount(Math.floor(eased * numeric));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(numeric);
      }
    };

    requestAnimationFrame(step);
  }, [inView, numeric]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="glass-card rounded-[1.4rem] border border-white/10 p-5 transition-all duration-300 hover:border-sunrise/30 hover:shadow-[0_16px_48px_rgba(255,122,0,0.12)]"
    >
      <p className="font-heading text-2xl font-semibold text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/70">{label}</p>
    </motion.div>
  );
}
