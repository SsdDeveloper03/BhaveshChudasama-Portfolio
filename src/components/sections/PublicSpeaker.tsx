"use client";

import { motion } from "framer-motion";
import { Mic2, Presentation, Users, Sparkles, Calendar, MessageCircle } from "lucide-react";

const speakingTopics = [
  {
    title: "Software & Digital Transformation",
    desc: "How SMEs can replace legacy manual processes with purpose-built software platforms.",
  },
  {
    title: "SME Growth Strategies",
    desc: "Actionable frameworks for scaling operations, customer acquisition, and technology adoption.",
  },
  {
    title: "Podcasting & Personal Branding",
    desc: "Leveraging voice and video content to build authentic authority and founder influence.",
  },
  {
    title: "Leadership & Mindset",
    desc: "Cultivating discipline, strategic clarity, and resilience in rapidly evolving markets.",
  },
];

const formats = [
  { icon: Presentation, title: "Keynote Addresses" },
  { icon: Users, title: "Panel Discussions" },
  { icon: Mic2, title: "Founder Workshops" },
  { icon: Calendar, title: "Industry Masterclasses" },
];

export function PublicSpeaker() {
  return (
    <section
      id="public-speaker"
      className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.08),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.06),_transparent_28%)] py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sunrise backdrop-blur-md">
              <Sparkles size={14} className="text-sunrise" />
              <span>06 — PUBLIC SPEAKER &amp; PANELIST</span>
            </div>

            <h2 className="mt-4 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Inspiring Audiences on Technology, Business &amp; Leadership
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
              Bhavesh Chudasama delivers engaging, high-impact keynotes and interactive workshops for industry summits, corporate conventions, and founder communities.
            </p>

            {/* Speaking Formats */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {formats.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-sm"
                  >
                    <Icon size={20} className="text-sunrise mb-2" />
                    <span className="text-xs font-bold text-white">{f.title}</span>
                  </div>
                );
              })}
            </div>

            {/* Inquire CTA Button */}
            <div className="mt-8">
              <a
                href="https://wa.me/919727001838?text=Hi%20Bhavesh%2C%20I%20would%20like%20to%20inquire%20about%20booking%20you%20as%20a%20speaker%20for%20our%20event."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-orange-500 via-sunrise to-amber-500 px-8 py-4 text-sm font-bold text-white shadow-[0_15px_45px_rgba(255,122,0,0.35)] transition duration-300 hover:scale-105 hover:shadow-[0_20px_55px_rgba(255,122,0,0.5)]"
              >
                <MessageCircle size={18} />
                INQUIRE FOR SPEAKING
              </a>
            </div>
          </motion.div>

          {/* Topics Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-sunrise mb-4">
              Key Speaking Topics
            </h3>
            {speakingTopics.map((topic, idx) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition hover:border-sunrise/40 hover:bg-white/[0.06]"
              >
                <h4 className="text-base font-bold text-white">{topic.title}</h4>
                <p className="mt-1 text-xs text-white/70 leading-relaxed">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
