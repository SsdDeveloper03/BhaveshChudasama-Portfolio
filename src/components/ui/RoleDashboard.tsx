"use client";

import { motion } from "framer-motion";
import { Code2, Radio, TrendingUp, Compass, Mic2, ArrowRight } from "lucide-react";

const rolesDashboard = [
  {
    id: "products",
    icon: Code2,
    role: "SOFTWARE EXPERT",
    badge: "SOFTWARE",
    punchline: "Turning technology challenges into practical business solutions.",
    color: "from-[#FF6B35] to-[#F5A623]",
    target: "#products",
    image: "/images/software_expert_card.png",
  },
  {
    id: "podcaster",
    icon: Radio,
    role: "PODCASTER",
    badge: "MEDIA",
    punchline: "Real conversations. Real stories. Real growth.",
    color: "from-[#0084FF] to-[#00C6FF]",
    target: "#podcaster",
    image: "/images/podcaster_card.png",
  },
  {
    id: "growth-coach",
    icon: TrendingUp,
    role: "GROWTH COACH",
    badge: "STRATEGY",
    punchline: "Clarity creates direction. Action creates growth.",
    color: "from-[#F5A623] to-[#FFD000]",
    target: "#growth-coach",
    image: "/images/growth_coach_card.png",
  },
  {
    id: "life-mentor",
    icon: Compass,
    role: "LIFE MENTOR",
    badge: "PURPOSE",
    punchline: "Better questions. Better perspective. Better direction.",
    color: "from-[#10B981] to-[#059669]",
    target: "#life-mentor",
    image: "/images/life_mentor_card.png",
  },
  {
    id: "public-speaker",
    icon: Mic2,
    role: "PUBLIC SPEAKER",
    badge: "KEYNOTE",
    punchline: "Ideas become powerful when people can feel them.",
    color: "from-[#8B5CF6] to-[#6366F1]",
    target: "#public-speaker",
    image: "/images/public_speaker_card.png",
  },
];

export function RoleDashboard() {
  const handleRoleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof rolesDashboard[0]) => {
    e.preventDefault();
    if (item.id === "products") {
      window.dispatchEvent(new CustomEvent("open-software-matrix"));
    }
    const targetEl = document.querySelector(item.target);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="roles" className="relative border-y border-white/10 bg-[#070b18] py-14 sm:py-20">
      {/* Background Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,107,53,0.06),_transparent_70%)] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#FF6B35] backdrop-blur-md">
            <span>PERSONAL BRAND DASHBOARD</span>
          </div>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Technology. Conversations. Growth.
          </h2>
          <p className="mt-3 text-xs sm:text-base text-white/70 max-w-xl mx-auto font-medium">
            Select a dimension of Bhavesh J. Chudasama&apos;s expertise to jump straight to operational details:
          </p>
        </div>

        {/* 5 Interactive Role Cards Grid (Smooth Nav Scroll on Click) */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {rolesDashboard.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.role}
                href={item.target}
                onClick={(e) => handleRoleClick(e, item)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.45 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group cursor-pointer relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-[#0c111d]/90 p-4 transition-all duration-300 hover:border-[#FF6B35] hover:shadow-[0_20px_50px_rgba(255,107,53,0.25)] backdrop-blur-xl"
              >
                {/* Glowing Top Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />

                <div>
                  {/* High Resolution Topic Image Container */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-2xl bg-slate-900 mb-4 border border-white/15 shadow-xl">
                    <img
                      src={item.image}
                      alt={item.role}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b18] via-[#070b18]/20 to-transparent" />

                    {/* Floating Icon & Badge */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-black/75 text-[#FF6B35] backdrop-blur-md group-hover:scale-110 group-hover:border-[#FF6B35] transition-all">
                        <Icon size={18} />
                      </div>
                      <span className="text-[10px] font-black tracking-widest text-white uppercase px-2.5 py-1 rounded-full border border-white/20 bg-black/75 backdrop-blur-md shadow-md">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Card Title & Quote */}
                  <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#FF6B35] transition-colors">
                    {item.role}
                  </h3>

                  <p className="mt-2 text-xs text-white/75 leading-relaxed font-normal italic">
                    &quot;{item.punchline}&quot;
                  </p>
                </div>

                {/* Explore Action Button */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#FF6B35] group-hover:text-white transition-colors">
                    EXPLORE ROLE →
                  </span>
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6B35]/15 text-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all">
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
