"use client";

import { motion } from "framer-motion";

const clientLogos = [
  { name: "SUMICOT", detail: "LIMITED", style: "font-serif tracking-[0.18em]" },
  { name: "Sachinam", detail: "Fabrics Pvt. Ltd.", style: "font-serif text-cyan-300" },
  { name: "STUDIO ROCKY", detail: "CREATIVE HOUSE", style: "tracking-[0.12em]" },
  { name: "suitronic", detail: "", style: "lowercase tracking-[0.16em]" },
  { name: "JOGI", detail: "ayurved", style: "font-serif text-teal-300" },
  { name: "CITYX", detail: "LIFESCIENCES", style: "font-black tracking-[0.12em]" },
  { name: "YES I STYLE", detail: "", style: "font-serif tracking-[0.08em]" },
  { name: "colourtex", detail: "", style: "font-black lowercase text-red-300" },
  { name: "HIGH TOUCH", detail: "1994", style: "font-black tracking-[0.1em]" },
  { name: "SBJ", detail: "STUDIO & SALON", style: "font-serif tracking-[0.16em]" },
  { name: "BADASAAB", detail: "", style: "font-serif tracking-[0.14em]" },
];

function LogoRow() {
  return (
    <div className="flex shrink-0 items-center gap-4 pr-4">
      {clientLogos.map((logo) => (
        <div
          key={logo.name}
          className="flex h-24 w-44 shrink-0 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 text-center text-[#18345d] shadow-[0_12px_35px_rgba(19,52,93,0.08)]"
        >
          <span className={`text-lg font-bold ${logo.style}`}>{logo.name}</span>
          {logo.detail && <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500">{logo.detail}</span>}
        </div>
      ))}
    </div>
  );
}

export function ClientLogos() {
  return (
    <div className="mt-10 overflow-hidden" aria-label="Clients and partner brands">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 34, ease: "linear", repeat: Infinity }}
        whileHover={{ animationPlayState: "paused" }}
        whileFocus={{ animationPlayState: "paused" }}
      >
        <LogoRow />
        <LogoRow />
      </motion.div>
    </div>
  );
}
