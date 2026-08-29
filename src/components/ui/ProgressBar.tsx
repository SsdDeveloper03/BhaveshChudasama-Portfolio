"use client";

import { motion, useScroll } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[120] h-1 origin-left bg-gradient-to-r from-sunrise via-orange-400 to-amber-300"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
