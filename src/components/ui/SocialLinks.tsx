"use client";

import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaFacebook,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";

const socialLinks = [
  {
    id: "whatsapp",
    icon: FaWhatsapp,
    label: "WhatsApp",
    punchline: "Start a Conversation That Drives Growth.",
    href: "https://wa.me/919727001838?text=Hi%20Bhavesh%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    brandBg: "bg-[#25D366]/10 hover:bg-[#25D366]/20 border-[#25D366]/30",
    badgeGradient: "from-[#25D366] to-[#128C7E]",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    punchline: "Behind the Scenes. Real Stories.",
    href: "https://www.instagram.com/chudasamabhavesh/",
    brandBg: "bg-[#E4405F]/10 hover:bg-[#E4405F]/20 border-[#E4405F]/30",
    badgeGradient: "from-[#f09433] via-[#dc2743] to-[#bc1888]",
  },
  {
    id: "youtube-podcast",
    icon: FaYoutube,
    label: "YouTube Podcast",
    punchline: "Growth Ka Digital Partner.",
    href: "https://youtube.com/@gdppodcast?si=RE37Iwf3VyxLz_gG",
    brandBg: "bg-[#FF0000]/10 hover:bg-[#FF0000]/20 border-[#FF0000]/30",
    badgeGradient: "from-[#FF0000] to-[#CC0000]",
  },
  {
    id: "call",
    icon: FaPhoneAlt,
    label: "Let's Talk",
    punchline: "No Robots. Just Results.",
    href: "tel:+919727001838",
    brandBg: "bg-[#10B981]/10 hover:bg-[#10B981]/20 border-[#10B981]/30",
    badgeGradient: "from-[#10B981] to-[#059669]",
  },
  {
    id: "website",
    icon: FaGlobe,
    label: "Website",
    punchline: "Sunrise Software Development.",
    href: "https://sunrisesoftware.in/",
    brandBg: "bg-[#FF6B35]/10 hover:bg-[#FF6B35]/20 border-[#FF6B35]/30",
    badgeGradient: "from-[#FF6B35] to-[#E05A2B]",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    label: "LinkedIn",
    punchline: "Connect with a Visionary Leader.",
    href: "https://www.linkedin.com/in/bhavesh-chudasama-48280728?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    brandBg: "bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 border-[#0A66C2]/30",
    badgeGradient: "from-[#0A66C2] to-[#004182]",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    label: "Facebook",
    punchline: "Join the Growth Community.",
    href: "https://www.facebook.com/share/1DZB2eiZmL/",
    brandBg: "bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border-[#1877F2]/30",
    badgeGradient: "from-[#1877F2] to-[#0d52b7]",
  },
];

export function SocialLinks() {
  return (
    <div className="w-full mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex items-center gap-3.5 p-3.5 rounded-2xl border transition-all duration-300 ${social.brandBg} backdrop-blur-md shadow-md`}
            >
              {/* Official Brand Logo Icon Badge */}
              <div className={`w-10 h-10 shrink-0 rounded-xl bg-gradient-to-tr ${social.badgeGradient} flex items-center justify-center text-white shadow-md shadow-black/30 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 text-white" />
              </div>

              {/* Text Information */}
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-bold text-white group-hover:text-white transition-colors duration-300 truncate">
                  {social.label}
                </span>
                <span className="text-[11px] text-white/65 group-hover:text-white/90 transition-colors duration-300 line-clamp-1 leading-tight mt-0.5">
                  {social.punchline}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
}
