"use client";

import { motion } from "framer-motion";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" aria-label="Services" className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(255,122,0,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(37,99,235,0.1),_transparent_32%)] py-12 sm:py-16 lg:py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Services</p>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-white sm:text-4xl">
            A technology partner helping organizations build, automate, and scale through software.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            From custom software development to digital transformation strategy, the focus is on solutions that balance technical excellence with business impact.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
