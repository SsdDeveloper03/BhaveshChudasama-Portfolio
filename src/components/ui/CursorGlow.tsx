"use client";

import { useEffect, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

export function CursorGlow() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleOver = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const interactiveTarget = target?.closest("a, button, input, textarea, select, .glass-card, [data-cursor-interactive]");
      setInteractive(Boolean(interactiveTarget));
    };
    const handleOut = () => setInteractive(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseover", handleOver, true);
    document.addEventListener("mouseout", handleOut, true);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseover", handleOver, true);
      document.removeEventListener("mouseout", handleOut, true);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[140] hidden md:block" aria-hidden="true">
      <div
        className={`absolute h-5 w-5 rounded-full bg-sunrise/80 blur-[2px] transition-all duration-200 ${interactive ? "scale-150" : "scale-100"}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)`, left: -10, top: -10 }}
      />
      <div
        className={`absolute h-10 w-10 rounded-full border border-sunrise/40 transition-all duration-300 ${interactive ? "scale-125 border-sunrise/80 bg-sunrise/10" : "scale-100 bg-transparent"}`}
        style={{ transform: `translate(${position.x}px, ${position.y}px)`, left: -20, top: -20 }}
      />
    </div>
  );
}
