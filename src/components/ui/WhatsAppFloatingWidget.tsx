"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloatingWidget() {
  return (
    <a
      href="https://wa.me/919727001838?text=Hi%20Bhavesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center text-decoration-none group"
      aria-label="Chat on WhatsApp with Bhavesh J. Chudasama"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex items-center gap-2.5 rounded-full bg-[#FF6B35] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-[0_10px_30px_rgba(255,107,53,0.4)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#e05a2b] group-hover:shadow-[0_15px_40px_rgba(255,107,53,0.6)]"
      >
        <MessageCircle size={18} className="fill-white/20" />
        <span>CHAT ON WHATSAPP</span>
      </motion.div>
    </a>
  );
}
