'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaWhatsapp, FaTimes } from 'react-icons/fa';

export default function SoftwareEnquiry({ buttonText = "Connect for Best IT Solutions", buttonClassName = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    companyName: '',
    needs: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
      setError('');
      setFormData({ customerName: '', mobileNumber: '', companyName: '', needs: '' });
    }, 300);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate
    if (!formData.customerName || !formData.mobileNumber) {
      setError('Name and Phone Number are required');
      setIsSubmitting(false);
      return;
    }

    try {
      const enquiryData = {
        source: 'SoftwareExpert',
        customerName: formData.customerName,
        companyName: formData.companyName || '',
        mobileNumber: formData.mobileNumber,
        email: '',
        address: '',
        city: '',
        state: '',
        country: 'India',
        preferredLanguage: 'English',
        clientSessionId: `SESSION-${Date.now()}`,
        roleSpecificData: {
          needs: formData.needs || '',
          enquiryType: 'Software Development',
        },
        recommendationJson: JSON.stringify({}),
        proposalJson: JSON.stringify({
          source: 'Software Expert Section',
          timestamp: new Date().toISOString(),
        }),
      };

      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enquiryData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ customerName: '', mobileNumber: '', companyName: '', needs: '' });
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#0c101c] p-6 sm:p-8 shadow-2xl z-10 overflow-hidden my-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-20"
              aria-label="Close"
            >
              <FaTimes className="text-lg" />
            </button>

            {submitted ? (
              /* Success Animated Popup */
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="py-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 400, damping: 15 }}
                  className="w-20 h-20 bg-gradient-to-tr from-emerald-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30"
                >
                  <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                  Enquiry Submitted Successfully!
                </h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8 max-w-md mx-auto">
                  Thank you for reaching out. Our team will review your requirements and get back to you within 24 hours.
                </p>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://wa.me/919727001838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#1da851] transition-all shadow-lg shadow-[#25D366]/25 text-sm sm:text-base mb-3"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp for Instant Response
                </motion.a>

                <div className="mt-4">
                  <button
                    onClick={handleClose}
                    className="text-xs text-gray-500 hover:text-gray-300 underline"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Form Content inside Popup */
              <div>
                <h2 className="text-2xl font-bold text-center mb-1 pr-6">
                  <span className="bg-gradient-to-r from-orange-400 via-[#FF6B35] to-amber-300 bg-clip-text text-transparent">Connect for Best IT Solutions</span>
                </h2>
                <p className="text-center text-gray-400 text-xs sm:text-sm mb-6">
                  Get custom software solutions tailored to your business needs.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="customerName"
                      required
                      value={formData.customerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors text-sm"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Business Name</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors text-sm"
                      placeholder="Enter your business name"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-1">Your Software Needs</label>
                    <textarea
                      name="needs"
                      rows={3}
                      value={formData.needs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors text-sm resize-none"
                      placeholder="Tell us about your software requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-[#FF6B35] py-3.5 px-6 font-bold text-white shadow-lg shadow-[#FF6B35]/30 hover:bg-[#e05a2b] transition-all flex items-center justify-center gap-3 group text-sm"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        Submit Enquiry
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <div className="pt-2 text-center">
                    <p className="text-xs text-gray-500 mb-2">Or connect instantly via WhatsApp</p>
                    <a
                      href="https://wa.me/919727001838"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:text-[#1DA851] transition-colors"
                    >
                      <FaWhatsapp className="text-lg" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Trigger Button */}
      <motion.div className="text-center" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <button
          onClick={() => setIsOpen(true)}
          className={buttonClassName || "inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 via-[#FF6B35] to-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-[#FF6B35]/30 hover:shadow-[#FF6B35]/50 transition-all duration-300 group"}
        >
          <span>{buttonText}</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Render Modal via React Portal on document.body */}
      {mounted ? createPortal(modalContent, document.body) : null}
    </>
  );
}
