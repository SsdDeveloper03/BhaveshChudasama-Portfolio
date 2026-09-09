"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Scissors,
  Truck,
  Users,
  BarChart3,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  ShieldCheck,
  Zap,
  ArrowRight,
  Send,
} from "lucide-react";

interface SoftwareExpertExpandedModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultTab?: "tailoring" | "transport" | "payroll" | "crm";
}

export function SoftwareExpertExpandedModal({
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  defaultTab = "tailoring",
}: SoftwareExpertExpandedModalProps) {
  const [mounted, setMounted] = useState(false);
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"tailoring" | "transport" | "payroll" | "crm">(defaultTab);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    softwareRequirement: "Tailoring & Apparel ERP",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isModalOpen = Boolean(externalIsOpen || internalIsOpen);

  const handleCloseModal = () => {
    setInternalIsOpen(false);
    if (externalOnClose) {
      externalOnClose();
    }
  };

  useEffect(() => {
    setMounted(true);

    const handleGlobalOpen = (e: Event) => {
      const customEv = e as CustomEvent;
      if (customEv.detail?.tab) {
        setActiveTab(customEv.detail.tab);
      }
      setInternalIsOpen(true);
    };

    window.addEventListener("open-software-matrix", handleGlobalOpen);
    return () => {
      window.removeEventListener("open-software-matrix", handleGlobalOpen);
    };
  }, []);

  useEffect(() => {
    if (defaultTab) {
      setActiveTab(defaultTab);
    }
  }, [defaultTab]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "SoftwareExpert",
          customerName: formData.name,
          companyName: "",
          mobileNumber: formData.phone,
          roleSpecificData: {
            needs: formData.softwareRequirement,
            enquiryType: "Software Matrix Demo Request",
            activeTab: activeTab,
          },
          proposalJson: JSON.stringify({
            source: "Software Expert Matrix Modal",
            timestamp: new Date().toISOString(),
          }),
        }),
      });
    } catch (err) {
      console.error("API Submission Error:", err);
    }

    // Construct WhatsApp message
    const message = `💻 *CUSTOM SOFTWARE DEMO / QUOTE REQUEST*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
🛠️ *Selected Software Requirement:* ${formData.softwareRequirement}

---
*Sunrise Software / Software Expert Matrix*`;

    const targetPhone = "918200414301";
    const encodedMessage = encodeURIComponent(message);
    const isMobile =
      typeof window !== "undefined" &&
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://wa.me/${targetPhone}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${targetPhone}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      handleCloseModal();
      setFormData({ name: "", phone: "", softwareRequirement: "Tailoring & Apparel ERP" });
    }, 3000);
  };

  const tabs = [
    {
      id: "tailoring" as const,
      label: "Tailoring & Apparel",
      icon: Scissors,
      color: "text-amber-400",
      activeBg: "bg-amber-500/20 border-amber-500/50 text-amber-300",
      requirementText: "Tailoring & Apparel ERP",
    },
    {
      id: "transport" as const,
      label: "Transport & Fleet",
      icon: Truck,
      color: "text-blue-400",
      activeBg: "bg-blue-500/20 border-blue-500/50 text-blue-300",
      requirementText: "Transport & Fleet ERP",
    },
    {
      id: "payroll" as const,
      label: "HR & Payroll",
      icon: Users,
      color: "text-emerald-400",
      activeBg: "bg-emerald-500/20 border-emerald-500/50 text-emerald-300",
      requirementText: "HR & Enterprise Payroll Software",
    },
    {
      id: "crm" as const,
      label: "CRM & Stock ERP",
      icon: BarChart3,
      color: "text-orange-400",
      activeBg: "bg-orange-500/20 border-orange-500/50 text-orange-300",
      requirementText: "Business CRM & Stock ERP",
    },
  ];

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Expanded Dashboard Container */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            className="relative w-full max-w-5xl rounded-t-3xl sm:rounded-3xl border border-[#FF6B35]/40 bg-[#0c101c] shadow-2xl z-10 overflow-hidden h-[94vh] sm:h-auto sm:max-h-[92vh] flex flex-col"
          >
            {/* Header Block - Mobile Friendly */}
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 p-4 sm:p-6 bg-gradient-to-r from-[#0c101c] via-[#161d30] to-[#0c101c] shrink-0">
              <div className="pr-10 sm:pr-12">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/15 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-wider">
                  <Sparkles size={13} />
                  <span>SOFTWARE EXPERT MATRIX</span>
                </div>
                <h2 className="mt-1.5 text-base sm:text-2xl font-black text-white uppercase tracking-tight flex items-center gap-2 leading-tight">
                  <span>💻</span> Enterprise ERP &amp; Custom Automation
                </h2>
                <p className="mt-0.5 text-[11px] sm:text-xs text-white/70 italic font-medium line-clamp-1 sm:line-clamp-none">
                  Tagline: &quot;Turning technology challenges into practical, automated business solutions.&quot;
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white/80 hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all shadow-md z-10"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Interactive Product Tabs - Horizontally Scrollable on Mobile */}
            <div className="border-b border-white/10 bg-[#090d18] px-3 sm:px-6 py-2.5 sm:py-3 flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      setFormData(prev => ({ ...prev, softwareRequirement: tab.requirementText }));
                    }}
                    className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border whitespace-nowrap shrink-0 ${
                      isActive
                        ? tab.activeBg
                        : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={15} className={tab.color} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Contents Scrollable Body */}
            <div className="p-4 sm:p-7 overflow-y-auto space-y-6 grow bg-gradient-to-b from-[#0c101c] via-[#090d18] to-[#070a14] scroll-smooth">
              
              {/* TAB 1: TAILORING & APPAREL */}
              {activeTab === "tailoring" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-base sm:text-xl font-black text-amber-400 uppercase tracking-tight flex items-center gap-2">
                      <Scissors size={20} />
                      Tab 1: ✂️ Tailoring &amp; Apparel ERP Ecosystem
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-0.5">
                      Scalable Editions from Boutique Showrooms to Large-Scale Garment Production
                    </p>
                  </div>

                  {/* UI Dashboard Mockup Image Showcase */}
                  <div className="group relative overflow-hidden rounded-2xl border border-amber-500/30 bg-black/50 shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/images/products/matrix_tailoring_dashboard.jpg"
                        alt="Tailoring & Apparel ERP Dashboard Preview"
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 920px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-transparent opacity-75" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] sm:text-xs font-mono font-bold text-amber-400 border border-amber-500/40 backdrop-blur-md">
                          <Sparkles size={12} className="text-amber-400" />
                          LIVE DASHBOARD INTERFACE
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] sm:text-xs text-white/90">
                        <span className="font-semibold drop-shadow bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                          Digital Measurement Records • Karigar Wages • POS Invoicing
                        </span>
                        <span className="hidden sm:inline-block font-mono text-amber-300 drop-shadow bg-black/60 px-2 py-1 rounded-lg backdrop-blur-md">
                          Cloud &amp; Desktop
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Edition Breakdown Cards */}
                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    {/* LITE Version */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <Zap size={14} />
                        <span>LITE Version (Boutique Orders &amp; Slips)</span>
                      </div>
                      <ul className="space-y-2 text-xs text-white/80 leading-relaxed font-medium">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Customer directory, order history &amp; digital measurement slips (with local language notes).</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Automated order booking slips, computerized invoicing &amp; delivery scheduling.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Real-time reports: Daily cash collection, pending deliveries, not-ready items &amp; balance logs.</span>
                        </li>
                      </ul>
                    </div>

                    {/* STANDARD Version */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <ShieldCheck size={14} />
                        <span>STANDARD Version (Workshop &amp; Karigar)</span>
                      </div>
                      <ul className="space-y-2 text-xs text-white/80 leading-relaxed font-medium">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Work allocation entry, stage completion tracking &amp; auto status updates.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Karigar wage calculation (piece-rate), worker advances, payouts &amp; ledgers.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Real-time Work-in-Progress (WIP) tracking (worker-wise &amp; process-wise) + workshop expenses.</span>
                        </li>
                      </ul>
                    </div>

                    {/* ERP Version */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <BarChart3 size={14} />
                        <span>ERP Version (Retail POS &amp; Fabric Rolls)</span>
                      </div>
                      <ul className="space-y-2 text-xs text-white/80 leading-relaxed font-medium">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Inventory tracking for fabric rolls/lumps/than, readymade trading &amp; accessories.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Multi-type barcode generation: Purchase-time, piece-wise unique &amp; item-wise tagging.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>High-speed POS retail billing, returns, DSR reports &amp; automated GST returns.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Add-Ons & Cloud Companion */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4 sm:p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <Sparkles size={14} />
                        <span>Add-Ons &amp; Cloud Companion</span>
                      </div>
                      <ul className="space-y-2 text-xs text-white/80 leading-relaxed font-medium">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Automated WhatsApp order updates (Meta API), Loyalty engine, Uniform batch production.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Web customer profile, cloud measurement capture &amp; multi-branch remote reporting.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: TRANSPORT & FLEET */}
              {activeTab === "transport" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-base sm:text-xl font-black text-blue-400 uppercase tracking-tight flex items-center gap-2">
                      <Truck size={20} />
                      Tab 2: 🚚 Transport &amp; Fleet Logistics ERP
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-0.5">
                      Complete Fleet Tracking, Bilty Generation &amp; Trip Cost Management
                    </p>
                  </div>

                  {/* UI Dashboard Mockup Image Showcase */}
                  <div className="group relative overflow-hidden rounded-2xl border border-blue-500/30 bg-black/50 shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/images/products/matrix_transport_dashboard.jpg"
                        alt="Transport & Fleet Logistics ERP Dashboard Preview"
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 920px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-transparent opacity-75" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] sm:text-xs font-mono font-bold text-blue-400 border border-blue-500/40 backdrop-blur-md">
                          <Sparkles size={12} className="text-blue-400" />
                          LIVE LOGISTICS DASHBOARD
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] sm:text-xs text-white/90">
                        <span className="font-semibold drop-shadow bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                          Live Fleet GPS • LR / Bilty Generator • Tire Lifecycle
                        </span>
                        <span className="hidden sm:inline-block font-mono text-blue-300 drop-shadow bg-black/60 px-2 py-1 rounded-lg backdrop-blur-md">
                          Heavy Fleet Ready
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Breakdown Cards */}
                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 sm:p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Fleet &amp; Asset Management
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Master profiles for Own vs. Hired vehicles, driver KYC/licenses &amp; payload capacity tracking.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 sm:p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Tire &amp; Battery Lifecycle
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Serialized tire position mapping (axle-wise), tread-wear logs, retreading history &amp; battery schedules.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 sm:p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Dispatch &amp; Documentation
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Instant computerized LR/Bilty generation, route-wise freight masters, party billing &amp; hub dispatch slips.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 sm:p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Financial &amp; Trip Accounting
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Diesel slips, toll expenses, driver trip advances, settlement ledgers, maintenance logs &amp; recovery.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: HR & PAYROLL */}
              {activeTab === "payroll" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-base sm:text-xl font-black text-emerald-400 uppercase tracking-tight flex items-center gap-2">
                      <Users size={20} />
                      Tab 3: 👥 HR &amp; Enterprise Payroll Software
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-0.5">
                      Automated Workforce Attendance, Compliance &amp; Salary Generation
                    </p>
                  </div>

                  {/* UI Dashboard Mockup Image Showcase */}
                  <div className="group relative overflow-hidden rounded-2xl border border-emerald-500/30 bg-black/50 shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/images/products/matrix_payroll_dashboard.jpg"
                        alt="HR & Enterprise Payroll Software Dashboard Preview"
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 920px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-transparent opacity-75" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] sm:text-xs font-mono font-bold text-emerald-400 border border-emerald-500/40 backdrop-blur-md">
                          <Sparkles size={12} className="text-emerald-400" />
                          LIVE HR TECH INTERFACE
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] sm:text-xs text-white/90">
                        <span className="font-semibold drop-shadow bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                          Biometric Sync • Piece-Rate &amp; Salary • PF/ESIC Deductions
                        </span>
                        <span className="hidden sm:inline-block font-mono text-emerald-300 drop-shadow bg-black/60 px-2 py-1 rounded-lg backdrop-blur-md">
                          Statutory Compliant
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Breakdown Cards */}
                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Attendance &amp; Hardware Sync
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Real-time biometric &amp; facial recognition sync, multi-shift scheduling, overtime rules &amp; leave encashment.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Compensation Engine
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Configurable allowances, deductions, performance bonuses, automated piece-rate &amp; monthly salary calculation.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Statutory Compliance &amp; Slips
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Automated PF, ESIC, PT, TDS deductions, bank transfer export formats &amp; 1-click WhatsApp/PDF salary slips.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-4 sm:p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Employee Lifecycle
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Document management, advance salary &amp; loan EMI deductions, full &amp; final exit settlements.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: CRM & STOCK ERP */}
              {activeTab === "crm" && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="text-base sm:text-xl font-black text-orange-400 uppercase tracking-tight flex items-center gap-2">
                      <BarChart3 size={20} />
                      Tab 4: 📊 Business CRM &amp; Stock ERP
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-0.5">
                      Complete Pipeline from Initial Inquiry to Final Stock Realization
                    </p>
                  </div>

                  {/* UI Dashboard Mockup Image Showcase */}
                  <div className="group relative overflow-hidden rounded-2xl border border-orange-500/30 bg-black/50 shadow-2xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/images/products/matrix_crm_dashboard.jpg"
                        alt="Business CRM & Stock ERP Dashboard Preview"
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 920px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c101c] via-transparent to-transparent opacity-75" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-black/75 px-3 py-1 text-[10px] sm:text-xs font-mono font-bold text-orange-400 border border-orange-500/40 backdrop-blur-md">
                          <Sparkles size={12} className="text-orange-400" />
                          LIVE ENTERPRISE PIPELINE
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] sm:text-xs text-white/90">
                        <span className="font-semibold drop-shadow bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md">
                          Sales Pipeline • Quotation to Invoice • Multi-Warehouse Stock
                        </span>
                        <span className="hidden sm:inline-block font-mono text-orange-300 drop-shadow bg-black/60 px-2 py-1 rounded-lg backdrop-blur-md">
                          Real-time Sync
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Breakdown Cards */}
                  <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-4 sm:p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Lead &amp; Sales Pipeline
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Lead capture, follow-up scheduling, automated alerts &amp; win-loss lead status tracking.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-4 sm:p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Quotation &amp; Estimation
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Custom branded quotation builder, revision logs &amp; instant 1-click conversion to Sales Order &amp; Invoice.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-4 sm:p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Inventory &amp; Multi-Warehouse
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Real-time warehouse transfers, batch/serial tracking, re-order level triggers &amp; safety stock alerts.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-4 sm:p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Vendor &amp; Customer Ledger
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Payment terms, aging analysis, automated balance reminders &amp; comprehensive financial audit trails.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Consultation & Demo Request Form (Inside Scrollable Body - Never Blocks Content) */}
              <div
                id="matrix-consultation-form"
                className="mt-8 rounded-2xl sm:rounded-3xl border border-[#FF6B35]/40 bg-gradient-to-b from-[#131929] to-[#090d18] p-4 sm:p-7 shadow-xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare size={16} className="text-[#FF6B35]" />
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    Quick Consultation &amp; Custom Demo Form
                  </h4>
                </div>
                <p className="text-[11px] sm:text-xs text-white/60 mb-4 font-medium">
                  Direct connection with Bhavesh Chudasama &amp; the Sunrise Software engineering team.
                </p>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs sm:text-sm text-center"
                  >
                    <CheckCircle2 size={18} />
                    <span>Opening WhatsApp... Details sent directly to +91 8200414301!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 mb-1">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Patel"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/35 focus:border-[#FF6B35] focus:bg-white/10 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 mb-1">WhatsApp Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-white/20 bg-white/5 px-3.5 py-2.5 text-xs text-white placeholder-white/35 focus:border-[#FF6B35] focus:bg-white/10 focus:outline-none transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-mono text-white/60 mb-1">Requirement *</label>
                        <select
                          value={formData.softwareRequirement}
                          onChange={(e) => setFormData({ ...formData, softwareRequirement: e.target.value })}
                          className="w-full rounded-xl border border-white/20 bg-[#0c101c] px-3.5 py-2.5 text-xs text-white focus:border-[#FF6B35] focus:outline-none transition"
                        >
                          <option value="Tailoring & Apparel ERP">Tailoring &amp; Apparel ERP</option>
                          <option value="Transport & Fleet ERP">Transport &amp; Fleet ERP</option>
                          <option value="HR & Enterprise Payroll Software">HR &amp; Enterprise Payroll Software</option>
                          <option value="Business CRM & Stock ERP">Business CRM &amp; Stock ERP</option>
                          <option value="Custom Enterprise IT Solution">Custom Enterprise IT Solution</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl sm:rounded-full bg-[#FF6B35] py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-xl shadow-[#FF6B35]/35 hover:bg-[#e05a2b] hover:shadow-[#FF6B35]/50 active:scale-[0.99] transition duration-300 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Request Custom Software Demo / Quote ➔</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Mobile Bottom Floating Action Strip - Non-blocking Quick Access */}
            <div className="sm:hidden border-t border-white/10 bg-[#090d18]/95 backdrop-blur-md px-4 py-2.5 flex items-center justify-between gap-3 shrink-0 z-20">
              <div className="min-w-0">
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-wider">Software Demo</p>
                <p className="text-xs font-bold text-white truncate max-w-[170px]">{formData.softwareRequirement}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  const formEl = document.getElementById("matrix-consultation-form");
                  if (formEl) {
                    formEl.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-full bg-[#FF6B35] px-3.5 py-2 text-xs font-bold text-white shadow-lg shadow-[#FF6B35]/30 shrink-0 active:scale-95 transition"
              >
                <span>Book Demo</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
