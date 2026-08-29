"use client";

import { motion } from "framer-motion";
import { CalendarDays, Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/ui/ContactForm";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { LOCATION, ROLE, SITE_NAME } from "@/lib/constants";

const contactDetails = [
  { label: "Email", value: "info@sunrisesoftware.in", icon: Mail },
  { label: "Phone", value: "+91 97270 01838", icon: Phone },
  { label: "Location", value: LOCATION, icon: MapPin },
];

export function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.1),_transparent_32%)] py-12 sm:py-16 lg:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Contact</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            Let&apos;s build something meaningful together.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            Whether you&apos;re launching a startup, scaling a business, modernizing enterprise software, or seeking strategic technology guidance, I&apos;d love to hear about your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="glass-card rounded-[1.8rem] border border-white/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Start a Conversation</p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Ready to Transform Your Business with Technology?</h3>
                <p className="mt-4 text-base leading-8 text-white/70">
                  Let&apos;s discuss your goals and create software solutions that drive measurable business growth.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button className="gap-2">
                    <CalendarDays size={16} />
                    Schedule a Call
                  </Button>
                  <Button variant="secondary" className="gap-2">
                    <Send size={16} />
                    Send a Message
                  </Button>
                </div>
              </div>

              <div className="glass-card rounded-[1.8rem] border border-white/10 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Contact Details</p>
                <div className="mt-6 space-y-4">
                  {contactDetails.map((detail) => {
                    const Icon = detail.icon;
                    return (
                      <div key={detail.label} className="flex items-center gap-3 text-sm text-white/75">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sunrise">
                          <Icon size={16} />
                        </div>
                        <span>{detail.value}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="font-heading text-xl font-semibold text-white">{SITE_NAME}</p>
                  <p className="mt-2 text-sm text-white/70">{ROLE}</p>
                  <p className="mt-2 text-sm text-white/60">Sunrise Software Development</p>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[1.8rem] border border-white/10 p-6">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
