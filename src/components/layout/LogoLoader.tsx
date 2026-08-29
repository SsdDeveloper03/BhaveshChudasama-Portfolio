"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "sunrise-loader-seen";

export function LogoLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const seen = window.sessionStorage.getItem(STORAGE_KEY) === "true";

    if (seen) {
      return;
    }

    const showTimer = window.setTimeout(() => {
      setVisible(true);
    }, 0);

    const fallbackTimer = window.setTimeout(() => {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
      setVisible(false);
    }, 3200);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  const dismissLoader = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    }

    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050816]"
        >
          <div className="flex flex-col items-center justify-center px-6 text-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full border border-white/10 bg-white/5 text-center text-sm text-white/80 sm:h-56 sm:w-56">
              <span>Loading experience…</span>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.4em] text-white/60">
              Startup loader active without video
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
