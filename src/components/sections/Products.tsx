"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Scissors,
  Users,
  CheckCircle2,
  Play,
  ArrowRight,
  Sparkles,
  Receipt,
  Building2,
  ExternalLink,
  X,
  MessageSquare,
} from "lucide-react";

import { Journey } from "@/components/sections/Journey";
import SoftwareEnquiry from "@/components/SoftwareEnquiry";
import { SoftwareExpertExpandedModal } from "@/components/ui/SoftwareExpertExpandedModal";

function InstagramIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 20, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

// ... softwareList ...


const softwareList = [
  {
    id: "tailoring",
    name: "Tailoring & Apparel ERP",
    users: "42,850+",
    icon: Scissors,
    color: "#F5A623",
    bg: "rgba(245, 166, 35, 0.12)",
    borderColor: "rgba(245, 166, 35, 0.3)",
    description: "Scalable editions from boutique showrooms to large-scale garment production & karigar workshops.",
    features: [
      "LITE: Digital measurement slips, customer directory & booking receipts.",
      "STANDARD: Karigar piece-rate wages, job work allocation & WIP tracking.",
      "ERP: Fabric rolls inventory, multi-barcode tagging & POS GST billing.",
    ],
    image: "/images/products/tailoring_real.png",
  },
  {
    id: "transport",
    name: "Transport & Fleet Logistics ERP",
    users: "12,400+",
    icon: Truck,
    color: "#0084FF",
    bg: "rgba(0, 132, 255, 0.12)",
    borderColor: "rgba(0, 132, 255, 0.3)",
    description: "Complete fleet tracking, LR/bilty generation, trip cost accounting, and driver advances.",
    features: [
      "Fleet & Driver KYC: Own vs. hired vehicle masters & capacity tracking.",
      "Dispatch: Computerized LR/Bilty generation, route freight & hub slips.",
      "Accounting: Diesel slips, toll expenses, driver advances & party ledgers.",
    ],
    image: "/images/products/transport_real.png",
  },
  {
    id: "payroll",
    name: "HR & Enterprise Payroll",
    users: "15,620+",
    icon: Users,
    color: "#10B981",
    bg: "rgba(16, 185, 129, 0.12)",
    borderColor: "rgba(16, 185, 129, 0.3)",
    description: "Automated workforce attendance, piece-rate payroll, statutory compliance, and salary slips.",
    features: [
      "Attendance Sync: Real-time biometric & facial recognition device integration.",
      "Compensation: Piece-rate + monthly salary, allowances & overtime rules.",
      "Compliance: PF, ESIC, PT, TDS deductions & 1-click WhatsApp salary slips.",
    ],
    image: "/images/products/payroll_real.png",
  },
  {
    id: "billing",
    name: "Retail POS & Billing ERP",
    users: "25,180+",
    icon: Receipt,
    color: "#EC4899",
    bg: "rgba(236, 72, 153, 0.12)",
    borderColor: "rgba(236, 72, 153, 0.3)",
    description: "High-speed POS retail invoicing, barcode scanning, stock tracking, and automated GST reports.",
    features: [
      "High-Speed POS: Barcode scanning, custom bill formats & thermal printing.",
      "Inventory Control: Multi-item stock, batch tracking & re-order triggers.",
      "GST & Finance: Auto GSTR-1/3B return exports, DSR & daily cash collection.",
    ],
    image: "/images/products/billing_real_env.png",
  },
  {
    id: "business-management",
    name: "Business CRM & Stock ERP",
    users: "18,940+",
    icon: Building2,
    color: "#FF6B35",
    bg: "rgba(255, 107, 53, 0.12)",
    borderColor: "rgba(255, 107, 53, 0.3)",
    description: "Complete pipeline from initial lead inquiry to quotation, sales order, and multi-warehouse stock.",
    features: [
      "Lead & Sales Pipeline: Follow-up scheduling, alerts & lead status tracking.",
      "Quotation Engine: 1-click conversion from Quotation ➔ Sales Order ➔ Invoice.",
      "Warehouse & Stock: Real-time multi-warehouse transfers & vendor ledgers.",
    ],
    image: "/images/products/business_real_env.png",
  },
];

const demoReels = [
  {
    id: "reel1",
    code: "DSwE46MCO62",
    title: "Software Innovation & Digital Growth Reel",
    url: "https://www.instagram.com/reel/DSwE46MCO62/",
  },
  {
    id: "reel2",
    code: "DVOPDbZEi0s",
    title: "Transport & Fleet ERP Automation Reel",
    url: "https://www.instagram.com/reel/DVOPDbZEi0s/",
  },
  {
    id: "reel3",
    code: "DY_ZVgnOkbR",
    title: "Tailoring Order & Measurement Masterclass Reel",
    url: "https://www.instagram.com/reel/DY_ZVgnOkbR/",
  },
  {
    id: "reel4",
    code: "DZzXWsjpPAU",
    title: "Piece-Rate HR & Payroll Automation Reel",
    url: "https://www.instagram.com/reel/DZzXWsjpPAU/",
  },
  {
    id: "reel5",
    code: "DaKoLmUJ58H",
    title: "Executive Business Systems & Leadership Reel",
    url: "https://www.instagram.com/reel/DaKoLmUJ58H/",
  },
  {
    id: "reel6",
    code: "DZhhByIiX-j",
    title: "Sunrise Software Brand Media Post",
    url: "https://www.instagram.com/p/DZhhByIiX-j/",
    isPost: true,
  },
];

const youtubeSoftwareVideos = [
  {
    id: "yt1",
    code: "Sv88xxrWCPI",
    title: "Sunrise Software — Enterprise Business & ERP Solution",
    url: "https://youtu.be/Sv88xxrWCPI",
    thumbnail: "https://img.youtube.com/vi/Sv88xxrWCPI/hqdefault.jpg",
  },
  {
    id: "yt2",
    code: "CKGh17Z-iSk",
    title: "Transport & Logistics ERP Software Full Walkthrough",
    url: "https://youtu.be/CKGh17Z-iSk",
    thumbnail: "https://img.youtube.com/vi/CKGh17Z-iSk/hqdefault.jpg",
  },
  {
    id: "yt3",
    code: "5dk_RaB2ikk",
    title: "Tailoring Order & Measurement Management System",
    url: "https://youtu.be/5dk_RaB2ikk",
    thumbnail: "https://img.youtube.com/vi/5dk_RaB2ikk/hqdefault.jpg",
  },
  {
    id: "yt4",
    code: "_CKhCM9ux_E",
    title: "HR & Piece-Rate Payroll Automation Demo",
    url: "https://youtu.be/_CKhCM9ux_E",
    thumbnail: "https://img.youtube.com/vi/_CKhCM9ux_E/hqdefault.jpg",
  },
  {
    id: "yt5",
    code: "gTYhUEX7F5c",
    title: "POS Billing & Multi-Branch Inventory Control",
    url: "https://youtu.be/gTYhUEX7F5c",
    thumbnail: "https://img.youtube.com/vi/gTYhUEX7F5c/hqdefault.jpg",
  },
  {
    id: "yt6",
    code: "QFp5VVyQkwU",
    title: "SME Digital Transformation Masterclass",
    url: "https://youtu.be/QFp5VVyQkwU",
    thumbnail: "https://img.youtube.com/vi/QFp5VVyQkwU/hqdefault.jpg",
  },
  {
    id: "yt7",
    code: "MRLMZzcnJ0I",
    title: "Automating Business Workflows with Sunrise Software",
    url: "https://youtu.be/MRLMZzcnJ0I",
    thumbnail: "https://img.youtube.com/vi/MRLMZzcnJ0I/hqdefault.jpg",
  },
  {
    id: "yt8",
    code: "K_HpcCLBV2g",
    title: "Cloud Infrastructure & Multi-Tenant Architecture",
    url: "https://youtu.be/K_HpcCLBV2g",
    thumbnail: "https://img.youtube.com/vi/K_HpcCLBV2g/hqdefault.jpg",
  },
  {
    id: "yt9",
    code: "ZQ-of_OjIx4",
    title: "GST Invoice & Party Master Automation",
    url: "https://youtu.be/ZQ-of_OjIx4",
    thumbnail: "https://img.youtube.com/vi/ZQ-of_OjIx4/hqdefault.jpg",
  },
  {
    id: "yt10",
    code: "rMzV2sAmljM",
    title: "Fleet Tracking & Transport Bilty Generation",
    url: "https://youtu.be/rMzV2sAmljM",
    thumbnail: "https://img.youtube.com/vi/rMzV2sAmljM/hqdefault.jpg",
  },
  {
    id: "yt11",
    code: "Z0LV4DXrjgc",
    title: "Piece-Rate Payroll & Attendance Logging",
    url: "https://youtu.be/Z0LV4DXrjgc",
    thumbnail: "https://img.youtube.com/vi/Z0LV4DXrjgc/hqdefault.jpg",
  },
  {
    id: "yt12",
    code: "osu_J6VAhrI",
    title: "Scaling Manufacturing Operations with Custom ERP",
    url: "https://youtu.be/osu_J6VAhrI",
    thumbnail: "https://img.youtube.com/vi/osu_J6VAhrI/hqdefault.jpg",
  },
  {
    id: "yt13",
    code: "8CcBWGNeP3M",
    title: "Sunrise Software Executive Platform Demo",
    url: "https://youtu.be/8CcBWGNeP3M",
    thumbnail: "https://img.youtube.com/vi/8CcBWGNeP3M/hqdefault.jpg",
  },
  {
    id: "yt14",
    code: "hL69QsfR79M",
    title: "Growth Ka Digital Partner Technical Overview",
    url: "https://youtu.be/hL69QsfR79M",
    thumbnail: "https://img.youtube.com/vi/hL69QsfR79M/hqdefault.jpg",
  },
];

export function Products() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    businessName: "",
    itNeeds: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isExpandedModalOpen, setIsExpandedModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"reels" | "videos">("reels");

  useEffect(() => {
    const handleGlobalOpen = () => {
      setIsExpandedModalOpen(true);
    };
    window.addEventListener("open-software-matrix", handleGlobalOpen);
    return () => {
      window.removeEventListener("open-software-matrix", handleGlobalOpen);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.number) return;

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'SoftwareExpert',
          customerName: formData.name,
          companyName: formData.businessName || '',
          mobileNumber: formData.number,
          roleSpecificData: {
            needs: formData.itNeeds || '',
            enquiryType: 'Software Development',
          },
          proposalJson: JSON.stringify({ source: 'Software Expert Modal', timestamp: new Date().toISOString() })
        }),
      });
    } catch (err) {
      console.error('API Error:', err);
    }

    // Construct detailed WhatsApp message for IT Solution inquiry
    const message = `💻 *NEW IT SOLUTION CONSULTATION INQUIRY*

👤 *Name:* ${formData.name}
📱 *WhatsApp Number:* ${formData.number}
🏢 *Business Name:* ${formData.businessName || "N/A"}
🛠️ *IT Needs / Software:* ${formData.itNeeds || "N/A"}

---
*Sunrise Software / Bhavesh Chudasama Portfolio*`;

    const targetPhone = "918200414301";
    const encodedMessage = encodeURIComponent(message);
    
    // Smart device detection: WhatsApp Web for Desktop, wa.me for Mobile
    const isMobile = typeof window !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/${targetPhone}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${targetPhone}&text=${encodedMessage}`;

    // Open WhatsApp directly
    window.open(whatsappUrl, "_blank");

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsFormOpen(false);
      setFormData({ name: "", number: "", businessName: "", itNeeds: "" });
    }, 2800);
  };

  return (
    <section
      id="products"
      aria-label="Software Expert & IT Solutions"
      className="relative overflow-hidden border-t border-white/10 bg-[#050816] py-16 sm:py-24"
    >
      {/* Ambient Lighting Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,107,53,0.12),_transparent_55%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,132,255,0.08),_transparent_55%)] pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl mx-auto space-y-12">
        
        {/* ================================================== */}
        {/* 1. HEADER CARD & JOURNEY 2009...2026 SLIDER        */}
        {/* ================================================== */}
        <div className="rounded-3xl border border-[#FF6B35]/30 bg-[#0c101c]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/10 px-3.5 py-1 text-xs font-black uppercase tracking-widest text-[#FF6B35]">
                <Sparkles size={14} />
                <span>THE SOFTWARE EXPERT</span>
              </div>
              <h2 className="mt-2 text-2xl sm:text-4xl font-black text-white tracking-tight">
                15+ Years IT Legacy
              </h2>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={() => setIsExpandedModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-xl border border-[#FF6B35]/50 bg-[#FF6B35]/15 px-4 py-2 text-xs font-black text-[#FF6B35] uppercase tracking-wider hover:bg-[#FF6B35] hover:text-white transition duration-300 shadow-lg"
              >
                <span>EXPLORE PRODUCT MATRIX →</span>
              </button>
              <span className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs font-black text-white font-mono shadow-md">
                2026
              </span>
            </div>
          </div>

          {/* 2009 -> 2026 JOURNEY TIMELINE */}
          <div className="mt-6">
            <Journey />
          </div>

          {/* ================================================== */}
          {/* 2. SOFTWARE LIST WITH REAL-TIME LIVE USER METRICS  */}
          {/* ================================================== */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {softwareList.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-4 sm:p-5 transition-all duration-300 hover:border-[#FF6B35] hover:bg-white/[0.07] hover:shadow-[0_20px_40px_rgba(255,107,53,0.25)]"
                  style={{ borderColor: item.borderColor }}
                >
                  <div>
                    {/* Header: Icon, Name, and Top Right Action Icon */}
                    <div className="flex items-center justify-between gap-3 mb-3.5">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 shadow-md group-hover:scale-110 transition-transform"
                          style={{ backgroundColor: item.bg }}
                        >
                          <Icon size={22} style={{ color: item.color }} />
                        </div>
                        <h3 className="text-base font-black text-white group-hover:text-[#FF6B35] transition-colors leading-tight">
                          {item.name}
                        </h3>
                      </div>

                      {/* Top Right Action Arrow Icon */}
                      <button
                        type="button"
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, itNeeds: item.name }));
                          setIsFormOpen(true);
                        }}
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35] group-hover:text-white transition-all duration-300 shadow-sm"
                        title={`Consult for ${item.name}`}
                      >
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                    {/* Real-World Industry Image Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-950 mb-4 shadow-md">
                      <img
                        src={item.image}
                        alt={`${item.name} Industry Showcase`}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                    </div>

                    <p className="text-xs text-white/80 leading-relaxed font-medium mb-3">
                      {item.description}
                    </p>

                    {/* Rich Feature Highlights List */}
                    <div className="space-y-1.5 border-t border-white/10 pt-2.5 mb-2">
                      {item.features?.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-white/70 font-medium leading-snug">
                          <CheckCircle2 size={12} className="text-[#FF6B35] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Footer: Pulsing Live Count Indicator & Matrix Trigger */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-white/70 text-xs font-semibold">Active Users:</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[#FF6B35] font-black text-sm tracking-wide">{item.users}</span>
                      <button
                        type="button"
                        onClick={() => {
                          const tabMap: Record<string, "tailoring" | "transport" | "payroll" | "crm"> = {
                            tailoring: "tailoring",
                            transport: "transport",
                            payroll: "payroll",
                            billing: "crm",
                            "business-management": "crm",
                          };
                          const targetTab = tabMap[item.id] || "tailoring";
                          window.dispatchEvent(new CustomEvent("open-software-matrix", { detail: { tab: targetTab } }));
                        }}
                        className="rounded-lg border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all shadow-sm"
                      >
                        EXPLORE →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================== */}
        {/* 3. CTA BUTTON BANNER (CLICK OPENS CONSULTATION FORM) */}
        {/* ================================================== */}
        <div className="rounded-3xl border border-[#FF6B35]/40 bg-gradient-to-r from-[#0c101c] via-[#12192c] to-[#0c101c] p-6 sm:p-9 text-center backdrop-blur-xl shadow-2xl">
          <div className="max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-3.5 py-1 text-xs font-bold text-[#FF6B35] uppercase tracking-wider mb-3">
              <MessageSquare size={14} />
              <span>EXECUTIVE IT CONSULTATION</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight uppercase">
              CONNECT FOR BEST IT SOLUTION
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">
              Direct consultation for Tailoring, Transport, Payroll, Billing &amp; Business Management systems.
            </p>

            <SoftwareEnquiry
              buttonText="👉 GET FREE SOFTWARE CONSULTATION"
              buttonClassName="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-[#FF6B35]/35 hover:bg-[#e05a2b] hover:shadow-[#FF6B35]/50 hover:scale-[1.03] active:scale-95 transition-all duration-300"
            />
          </div>
        </div>

        {/* MODAL OVERLAY: INTERACTIVE CONSULTATION FORM */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-xl rounded-3xl border border-[#FF6B35]/40 bg-[#0c101c] p-6 sm:p-8 shadow-2xl backdrop-blur-2xl"
              >
                {/* Close Modal Button */}
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition"
                >
                  <X size={18} />
                </button>

                <div className="mb-6">
                  <span className="rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/15 px-3 py-1 text-[11px] font-bold font-mono text-[#FF6B35] uppercase tracking-wider">
                    DIRECT IT SOLUTION INQUIRY
                  </span>
                  <h3 className="mt-3 text-xl sm:text-2xl font-black text-white tracking-tight uppercase">
                    CONNECT FOR BEST IT SOLUTION
                  </h3>
                  <p className="mt-1 text-xs text-white/70">
                    Direct consultation for Tailoring, Transport, Payroll, Billing &amp; Business Management.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {formSubmitted ? (
                    <div className="flex items-center justify-center gap-3 rounded-2xl border border-emerald-500/40 bg-emerald-500/20 p-5 text-emerald-300 font-extrabold text-sm text-center shadow-lg">
                      <CheckCircle2 size={24} />
                      <span>Opening WhatsApp... Sending details directly to +91 8200414301!</span>
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="block text-[11px] font-bold text-white/70 mb-1">Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-[#FF6B35] focus:bg-white/10 focus:outline-none transition font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-white/70 mb-1">Number (WhatsApp) *</label>
                          <input
                            type="tel"
                            required
                            placeholder="WhatsApp Number"
                            value={formData.number}
                            onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-[#FF6B35] focus:bg-white/10 focus:outline-none transition font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="block text-[11px] font-bold text-white/70 mb-1">Business Name</label>
                          <input
                            type="text"
                            placeholder="Company / Shop Name"
                            value={formData.businessName}
                            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-[#FF6B35] focus:bg-white/10 focus:outline-none transition font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-bold text-white/70 mb-1">IT Needs</label>
                          <input
                            type="text"
                            placeholder="Tailoring, Transport, Payroll, Billing, etc."
                            value={formData.itNeeds}
                            onChange={(e) => setFormData({ ...formData, itNeeds: e.target.value })}
                            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-xs text-white placeholder-white/40 focus:border-[#FF6B35] focus:bg-white/10 focus:outline-none transition font-medium"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-2 rounded-full bg-[#FF6B35] py-4 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-[#FF6B35]/35 hover:bg-[#e05a2b] transition duration-300"
                      >
                        👉 SUBMIT &amp; SEND TO WHATSAPP (+91 8200414301)
                      </button>
                    </>
                  )}
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ================================================== */}
        {/* 4. DUAL TAB SHOWCASE: REELS (6) | VIDEOS (14)      */}
        {/* ================================================== */}
        <div className="rounded-3xl border border-white/15 bg-[#0c101c]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
            <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider">
              MEDIA SHOWCASE
            </h3>

            {/* SEGMENTED TAB CONTROLS: REELS | VIDEOS */}
            <div className="inline-flex rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("reels")}
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-black tracking-wider transition-all duration-300 ${
                  activeTab === "reels"
                    ? "bg-gradient-to-r from-amber-500 via-[#FF6B35] to-pink-600 text-white shadow-lg shadow-[#FF6B35]/30"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <InstagramIcon size={14} />
                REELS (6)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("videos")}
                className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-xs font-black tracking-wider transition-all duration-300 ${
                  activeTab === "videos"
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <YoutubeIcon size={14} />
                VIDEOS ({youtubeSoftwareVideos.length})
              </button>
            </div>
          </div>

          {/* TAB 1: INSTAGRAM REELS (6 EMBEDDED REELS) */}
          {activeTab === "reels" && (
            <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/20">
              {demoReels.map((reel) => {
                const embedUrl = reel.isPost
                  ? `https://www.instagram.com/p/${reel.code}/embed`
                  : `https://www.instagram.com/reel/${reel.code}/embed`;
                return (
                  <div
                    key={reel.id}
                    className="shrink-0 w-[270px] sm:w-[290px] flex flex-col justify-between rounded-2xl border border-white/15 bg-slate-950 p-2 shadow-xl transition duration-300 hover:border-[#FF6B35]"
                  >
                    <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-black">
                      <iframe
                        src={embedUrl}
                        title={reel.title}
                        className="h-full w-full border-0"
                        allow="encrypted-media"
                      />
                    </div>
                    <div className="mt-2.5 px-2 flex items-center justify-between text-xs font-bold text-white">
                      <span className="line-clamp-1">{reel.title}</span>
                      <a
                        href={reel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#FF6B35] hover:text-white transition shrink-0 ml-2"
                        title="Open on Instagram"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* TAB 2: YOUTUBE SOFTWARE VIDEOS (14 UNIQUE VIDEOS) */}
          {activeTab === "videos" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-white/60 font-mono">
                  14 HIGH-CONVERSION TECHNICAL DEMOS
                </span>
                <a
                  href="https://www.youtube.com/@sunrisesoftware"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#FF6B35] hover:underline"
                >
                  Visit Channel →
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {youtubeSoftwareVideos.map((video) => (
                  <a
                    key={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-3 transition duration-300 hover:border-red-500 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(239,68,68,0.2)]"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-900">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={18} className="fill-white ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 rounded bg-black/80 px-2 py-0.5 text-[9px] font-mono font-black text-white">
                        16:9
                      </span>
                    </div>
                    <h4 className="mt-3 text-xs font-extrabold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-white/50">
                      <span>Watch on YouTube</span>
                      <ExternalLink size={11} className="text-white/40 group-hover:text-red-400" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      {/* EXPANDED DASHBOARD VIEW MODAL */}
      <SoftwareExpertExpandedModal
        isOpen={isExpandedModalOpen}
        onClose={() => setIsExpandedModalOpen(false)}
        defaultTab="tailoring"
      />
    </section>
  );
}
