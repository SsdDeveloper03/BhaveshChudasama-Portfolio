"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

import { Button } from "@/components/ui/Button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Software" },
  { href: "#journey", label: "Journey" },
  { href: "#podcaster", label: "Podcast" },
  { href: "#growth-coach", label: "Growth Coach" },
  { href: "#life-mentor", label: "Life Mentor" },
  { href: "#public-speaker", label: "Speaker" },
  { href: "#contact", label: "Contact" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 24, stiffness: 240 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-[rgba(5,8,22,0.97)] p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <p className="font-heading text-lg font-semibold text-white">Navigate</p>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-sunrise/40 hover:text-sunrise"
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/80 transition hover:border-sunrise/40 hover:text-sunrise"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Button className="w-full justify-between" onClick={onClose}>
                Let&apos;s Work Together
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}
