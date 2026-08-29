"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, MessageCircle } from "lucide-react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { SITE_NAME } from "@/lib/constants";

const links = [
  { href: "#home", label: "HOME" },
  { href: "#about", label: "ABOUT" },
  { href: "#products", label: "SOFTWARE" },
  { href: "#podcaster", label: "PODCAST" },
  { href: "#growth-coach", label: "GROWTH" },
  { href: "#life-mentor", label: "LIFE" },
  { href: "#public-speaker", label: "SPEAKING" },
  { href: "#contact", label: "CONTACT" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
        frame = 0;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-4 sm:top-6 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl"
      >
        <div
          className={`flex h-14 sm:h-16 items-center justify-between rounded-full border px-4 sm:px-6 transition-all duration-300 ${
            scrolled
              ? "bg-[#080d1a]/95 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)] border-white/15"
              : "bg-[#080d1a]/80 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.3)] border-white/10"
          }`}
        >
          {/* Top Left Logo Image ONLY */}
          <Link href="#home" className="flex items-center gap-2 transition duration-300 hover:scale-[1.03]">
            <Image
              src="/images/logo.jpg"
              alt={SITE_NAME}
              width={44}
              height={44}
              className="rounded-xl shadow-[0_4px_16px_rgba(255,107,53,0.3)] border border-white/15 object-cover"
              priority
            />
          </Link>

          {/* Nav Links: HOME, ABOUT, SOFTWARE, PODCAST, GROWTH, LIFE, SPEAKING */}
          <nav className="hidden items-center gap-4 lg:gap-6 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] lg:text-xs font-bold tracking-widest text-white/80 transition duration-300 hover:text-[#FF6B35]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Action Button */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919727001838?text=Hi%20Bhavesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-5 py-2 text-xs font-bold text-white shadow-lg shadow-[#FF6B35]/30 transition duration-300 hover:bg-[#e05a2b] hover:shadow-[#FF6B35]/50"
            >
              <MessageCircle size={14} className="fill-white/20" />
              <span>WHATSAPP</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex items-center justify-center rounded-full border border-white/10 bg-white/[0.06] p-2 text-white transition hover:border-[#FF6B35]/40 hover:text-[#FF6B35] md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
