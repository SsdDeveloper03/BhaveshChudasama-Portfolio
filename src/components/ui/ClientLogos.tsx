"use client";

const placeholders = ["Enterprise", "Growth", "Innovation", "Leadership", "Operations", "Strategy"];

export function ClientLogos() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {placeholders.map((label) => (
        <div key={label} className="glass-card rounded-[1.2rem] border border-white/10 p-4 text-center text-sm font-semibold uppercase tracking-[0.26em] text-white/65">
          {label}
        </div>
      ))}
    </div>
  );
}
