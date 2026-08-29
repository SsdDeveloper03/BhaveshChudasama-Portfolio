"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Sparkles } from "lucide-react";

interface ITSolutionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ITSolutionModal({ isOpen, onClose }: ITSolutionModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    needs: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({ name: "", phone: "", businessName: "", needs: "" });
    }, 2500);
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
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-sunrise/30 bg-[#0b1220] p-6 sm:p-8 shadow-2xl z-10"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 rounded-full border border-white/10 p-2 text-white/70 hover:border-sunrise hover:text-white transition"
              aria-label="Close form"
            >
              <X size={18} />
            </button>

            <div className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sunrise mb-3">
              <Sparkles size={14} />
              IT SOLUTIONS CONSULTATION
            </div>

            <h3 className="text-2xl font-bold text-white">Connect For Best IT Solutions</h3>
            <p className="mt-2 text-xs text-white/70">
              Tell Bhavesh about your business &amp; software requirements to receive direct founder guidance.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="my-8 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mb-3" />
                <h4 className="text-lg font-bold text-white">Inquiry Received!</h4>
                <p className="mt-1 text-xs text-emerald-300">
                  Thank you! Bhavesh will reach out to you shortly via WhatsApp / Phone.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-sunrise focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-sunrise focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Your company or shop name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-sunrise focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                    What Do You Need?
                  </label>
                  <textarea
                    rows={3}
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    placeholder="Describe your software, ERP, or billing requirements..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-sunrise focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-sunrise to-amber-500 py-3 text-sm font-bold text-white shadow-lg shadow-sunrise/30 hover:shadow-sunrise/50 transition"
                >
                  <Send size={16} />
                  Submit Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
