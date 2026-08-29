"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  const isModalOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleCloseModal = () => {
    if (externalOnClose) {
      externalOnClose();
    }
    setInternalIsOpen(false);
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
    },
    {
      id: "transport" as const,
      label: "Transport & Fleet",
      icon: Truck,
      color: "text-blue-400",
      activeBg: "bg-blue-500/20 border-blue-500/50 text-blue-300",
    },
    {
      id: "payroll" as const,
      label: "HR & Payroll",
      icon: Users,
      color: "text-emerald-400",
      activeBg: "bg-emerald-500/20 border-emerald-500/50 text-emerald-300",
    },
    {
      id: "crm" as const,
      label: "CRM & Stock ERP",
      icon: BarChart3,
      color: "text-orange-400",
      activeBg: "bg-orange-500/20 border-orange-500/50 text-orange-300",
    },
  ];

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
            initial={{ scale: 0.92, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 25 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-5xl rounded-3xl border border-[#FF6B35]/40 bg-[#0c101c] shadow-2xl z-10 overflow-hidden my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header Block */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 p-5 sm:p-7 bg-gradient-to-r from-[#0c101c] via-[#161d30] to-[#0c101c] shrink-0">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/40 bg-[#FF6B35]/15 px-3 py-1 text-xs font-mono font-bold text-[#FF6B35] uppercase tracking-wider">
                  <Sparkles size={14} />
                  <span>SOFTWARE EXPERT MATRIX</span>
                </div>
                <h2 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-black text-white uppercase tracking-tight flex items-center gap-2">
                  <span>💻</span> SOFTWARE EXPERT | Enterprise ERP &amp; Custom Automation Solutions
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-white/70 italic font-medium">
                  Tagline: &quot;Turning technology challenges into practical, automated business solutions.&quot;
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 hover:border-[#FF6B35] hover:bg-[#FF6B35] hover:text-white transition-all shadow-md"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Interactive Product Tabs */}
            <div className="border-b border-white/10 bg-[#090d18] px-4 sm:px-6 py-3 flex gap-2 overflow-x-auto shrink-0 scrollbar-none">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab.id);
                      if (tab.id === "tailoring") setFormData(prev => ({ ...prev, softwareRequirement: "Tailoring & Apparel ERP" }));
                      if (tab.id === "transport") setFormData(prev => ({ ...prev, softwareRequirement: "Transport & Fleet ERP" }));
                      if (tab.id === "payroll") setFormData(prev => ({ ...prev, softwareRequirement: "HR & Enterprise Payroll Software" }));
                      if (tab.id === "crm") setFormData(prev => ({ ...prev, softwareRequirement: "Business CRM & Stock ERP" }));
                    }}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 border whitespace-nowrap shrink-0 ${
                      isActive
                        ? tab.activeBg
                        : "border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon size={16} className={tab.color} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab Contents Scrollable Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-6 grow bg-gradient-to-b from-[#0c101c] to-[#070a14]">
              {/* TAB 1: TAILORING & APPAREL */}
              {activeTab === "tailoring" && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-lg sm:text-xl font-black text-amber-400 uppercase tracking-tight flex items-center gap-2">
                      <Scissors size={20} />
                      Tab 1: ✂️ Tailoring &amp; Apparel ERP Ecosystem
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                      Scalable Editions from Boutique Showrooms to Large-Scale Garment Production
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* LITE Version */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <Zap size={14} />
                        <span>LITE Version (Boutique Front-Desk &amp; Orders)</span>
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
                          <span>Real-time reports: Daily cash collection, pending deliveries, not-ready items &amp; pending balance logs.</span>
                        </li>
                      </ul>
                    </div>

                    {/* STANDARD Version */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <ShieldCheck size={14} />
                        <span>STANDARD Version (Workshop, Karigar &amp; Job-Work)</span>
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
                          <span>Real-time Work-in-Progress (WIP) tracking (worker-wise &amp; process-wise) + workshop expense ledgers.</span>
                        </li>
                      </ul>
                    </div>

                    {/* ERP Version */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <BarChart3 size={14} />
                        <span>ERP Version (Retail POS, Fabric Rolls &amp; Barcoding)</span>
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
                          <span>High-speed POS retail billing, sales/purchase returns, DSR reports &amp; automated GST returns.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Add-Ons & Cloud Companion */}
                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5 hover:border-amber-500/50 transition-colors">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider mb-2">
                        <Sparkles size={14} />
                        <span>Add-Ons &amp; Cloud Companion</span>
                      </div>
                      <ul className="space-y-2 text-xs text-white/80 leading-relaxed font-medium">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                          <span>Automated WhatsApp updates (Meta API), Loyalty/Referral engine, Uniform batch production.</span>
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
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-lg sm:text-xl font-black text-blue-400 uppercase tracking-tight flex items-center gap-2">
                      <Truck size={20} />
                      Tab 2: 🚚 Transport &amp; Fleet Logistics ERP
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                      Complete Fleet Tracking, Bilty Generation &amp; Trip Cost Management
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Fleet &amp; Asset Management
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Master profiles for Own vs. Hired vehicles, driver KYC/licenses &amp; capacity tracking.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Tire &amp; Battery Lifecycle
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Serialized tire position mapping (axle-wise), tread-wear logs, retreading history &amp; battery replacement schedules.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Dispatch &amp; Documentation
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Instant computerized LR/Bilty generation, route-wise freight masters, party billing &amp; hub dispatch slips.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-5 hover:border-blue-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider mb-2">
                        Financial &amp; Trip Accounting
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Diesel slips, toll expenses, driver trip advances, settlement ledgers, vehicle maintenance logs &amp; party outstanding recovery.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: HR & PAYROLL */}
              {activeTab === "payroll" && (
                <motion.div
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-lg sm:text-xl font-black text-emerald-400 uppercase tracking-tight flex items-center gap-2">
                      <Users size={20} />
                      Tab 3: 👥 HR &amp; Enterprise Payroll Software
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                      Automated Workforce Attendance, Compliance &amp; Salary Generation
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Attendance &amp; Hardware Sync
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Real-time biometric &amp; facial recognition sync, multi-shift scheduling, overtime rules &amp; leave encashment.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Compensation Engine
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Configurable allowances, deductions, performance bonuses, automated piece-rate &amp; monthly salary calculation.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 hover:border-emerald-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                        Statutory Compliance &amp; Slips
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Automated PF, ESIC, PT, TDS deductions, bank transfer export formats &amp; 1-click WhatsApp/PDF salary slips.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5 hover:border-emerald-500/50 transition-colors">
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
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-lg sm:text-xl font-black text-orange-400 uppercase tracking-tight flex items-center gap-2">
                      <BarChart3 size={20} />
                      Tab 4: 📊 Business CRM &amp; Stock ERP
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                      Complete Pipeline from Initial Inquiry to Final Stock Realization
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Lead &amp; Sales Pipeline
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Lead capture, follow-up scheduling, automated alerts &amp; win-loss lead status tracking.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Quotation &amp; Estimation
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Custom branded quotation builder, revision logs &amp; instant 1-click conversion from Quotation ➔ Sales Order ➔ Invoice.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 hover:border-orange-500/50 transition-colors">
                      <div className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        Inventory &amp; Multi-Warehouse
                      </div>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        Real-time warehouse transfers, batch/serial tracking, re-order level triggers &amp; safety stock alerts.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-5 hover:border-orange-500/50 transition-colors">
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
            </div>

            {/* Bottom Action Block (Inside the Drawer) */}
            <div className="border-t border-white/10 bg-[#090d18] p-5 sm:p-7 shrink-0">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare size={16} className="text-[#FF6B35]" />
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">
                    Quick Consultation Form
                  </h4>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs sm:text-sm text-center"
                  >
                    <CheckCircle2 size={20} />
                    <span>Opening WhatsApp... Details sent directly to +91 8200414301!</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div className="grid gap-3 sm:grid-cols-3">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#FF6B35] focus:outline-none transition"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="WhatsApp Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:border-[#FF6B35] focus:outline-none transition"
                      />
                      <select
                        value={formData.softwareRequirement}
                        onChange={(e) => setFormData({ ...formData, softwareRequirement: e.target.value })}
                        className="w-full rounded-xl border border-white/20 bg-[#0c101c] px-4 py-2.5 text-xs text-white focus:border-[#FF6B35] focus:outline-none transition"
                      >
                        <option value="Tailoring & Apparel ERP">Tailoring &amp; Apparel ERP</option>
                        <option value="Transport & Fleet ERP">Transport &amp; Fleet ERP</option>
                        <option value="HR & Enterprise Payroll Software">HR &amp; Enterprise Payroll Software</option>
                        <option value="Business CRM & Stock ERP">Business CRM &amp; Stock ERP</option>
                        <option value="Custom Enterprise IT Solution">Custom Enterprise IT Solution</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-[#FF6B35] py-3.5 px-6 text-xs sm:text-sm font-black uppercase tracking-widest text-white shadow-xl shadow-[#FF6B35]/35 hover:bg-[#e05a2b] hover:shadow-[#FF6B35]/50 transition duration-300 flex items-center justify-center gap-2"
                    >
                      <span>👉 Request Custom Software Demo / Quote ➔</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
