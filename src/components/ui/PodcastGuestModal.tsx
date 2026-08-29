"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mic, CheckCircle2, MessageSquare } from "lucide-react";

interface PodcastGuestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PodcastGuestModal({ isOpen, onClose }: PodcastGuestModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    companyName: "",
    industry: "",
    topicStory: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Podcaster',
          customerName: formData.fullName,
          companyName: formData.companyName || '',
          mobileNumber: formData.phone,
          roleSpecificData: {
            comments: formData.topicStory || '',
            industry: formData.industry || '',
            enquiryType: 'Podcast Guest',
          },
          proposalJson: JSON.stringify({ source: 'Podcast Guest Modal', timestamp: new Date().toISOString() })
        }),
      });
    } catch (err) {
      console.error('API Error:', err);
    }

    // Construct detailed WhatsApp message for +91 8200414301
    const message = `🎙️ *NEW PODCAST GUEST APPLICATION*

👤 *Full Name:* ${formData.fullName}
📱 *WhatsApp Number:* ${formData.phone}
🏢 *Company / Brand Name:* ${formData.companyName || "N/A"}
🎯 *Industry / Area of Expertise:* ${formData.industry || "N/A"}
💡 *Key Topic / Story:* ${formData.topicStory || "N/A"}

---
*Growth Ka Digital Partner Podcast*`;

    const targetPhone = "918200414301";
    const encodedMessage = encodeURIComponent(message);
    
    // Smart device detection: WhatsApp Web for Desktop, wa.me deep link for Mobile
    const isMobile = typeof window !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/${targetPhone}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${targetPhone}&text=${encodedMessage}`;

    // Open WhatsApp directly
    window.open(whatsappUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        fullName: "",
        phone: "",
        companyName: "",
        industry: "",
        topicStory: "",
      });
    }, 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-[#FF7A00]/40 bg-[#0c101c] p-6 sm:p-8 shadow-2xl z-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/70 hover:border-[#FF7A00] hover:text-white transition"
              aria-label="Close form"
            >
              <X size={18} />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] mb-3">
              <Mic size={14} />
              🎙️ BECOME OUR NEXT PODCAST GUEST
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
              Next Guest Could Be You!
            </h3>
            <p className="mt-1.5 text-xs text-white/70">
              Don&apos;t just watch. Take action &amp; let&apos;s build your brand authority together.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-8 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mb-3" />
                <h4 className="text-lg font-bold text-white">Opening WhatsApp...</h4>
                <p className="mt-1.5 text-xs text-emerald-300">
                  Your application details have been sent directly to +91 8200414301 on WhatsApp!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter your contact number"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#FF7A00] focus:outline-none"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                      Company / Brand Name
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Your brand name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#FF7A00] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                      Your Industry / Expertise
                    </label>
                    <input
                      type="text"
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      placeholder="Software, Retail, Logistics..."
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#FF7A00] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1">
                    Key Topic / Story You Want to Share
                  </label>
                  <textarea
                    rows={2}
                    value={formData.topicStory}
                    onChange={(e) => setFormData({ ...formData, topicStory: e.target.value })}
                    placeholder="Share your key story, growth lesson, or expertise topic..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs text-white placeholder-white/40 focus:border-[#FF7A00] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 py-3.5 text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition"
                >
                  <MessageSquare size={16} />
                  👉 SEND DETAILS TO WHATSAPP (+91 8200414301) ➔
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
