"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { clientTestimonials, type ClientTestimonial } from "@/data/testimonials";
import { ClientLogos } from "@/components/ui/ClientLogos";

function ReviewCard({ review }: { review: ClientTestimonial }) {
  const [expanded, setExpanded] = useState(false);
  const longReview = review.body.length > 170;
  const visibleBody = longReview && !expanded ? `${review.body.slice(0, 170).trimEnd()}…` : review.body;
  return (
    <article className="flex min-h-[21rem] flex-col rounded-[2rem] border border-white/10 bg-[#0b1220]/80 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8">
      <div className="flex gap-1 text-sunrise" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.22em] text-sunrise/80">{review.category}</p>
      <blockquote className="mt-4 whitespace-pre-line text-base leading-8 text-white/80 sm:text-lg">&ldquo;{visibleBody}&rdquo;</blockquote>
      {longReview && (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="mt-3 w-fit text-xs font-semibold text-sunrise underline decoration-sunrise/50 underline-offset-4 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunrise"
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      <footer className="mt-auto flex items-center gap-3 pt-6 border-t border-white/10">
        <div className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-xs font-semibold text-white/70" aria-hidden="true">
          {review.authorName.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{review.authorName}</p>
          <p className="mt-0.5 text-xs text-white/50">{review.role} · Sunrise client</p>
        </div>
      </footer>
    </article>
  );
}

function Reviews() {
  const reducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reducedMotion || paused) return;
    const interval = window.setInterval(() => {
      setActive((value) => (value + 1) % clientTestimonials.length);
    }, 6500);
    return () => window.clearInterval(interval);
  }, [paused, reducedMotion]);

  const move = (direction: number) => {
    setActive((value) => (value + direction + clientTestimonials.length) % clientTestimonials.length);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={clientTestimonials[active].authorName}
            initial={reducedMotion ? false : { opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, x: -28 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <ReviewCard review={clientTestimonials[active]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <nav aria-label="Client testimonial slides" className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => move(-1)}
          aria-label="Previous review page"
          className="rounded-full border border-white/15 p-3 text-white transition hover:border-sunrise/60 hover:text-sunrise focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunrise"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {clientTestimonials.map((review, item) => (
            <button
              key={item}
              type="button"
              onClick={() => setActive(item)}
              aria-label={`Show review page ${item + 1}`}
              aria-current={item === active ? "true" : undefined}
              className={`h-1.5 rounded-full transition-all ${item === active ? "w-8 bg-sunrise" : "w-1.5 bg-white/25 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => move(1)}
          aria-label="Next review page"
          className="rounded-full border border-white/15 p-3 text-white transition hover:border-sunrise/60 hover:text-sunrise focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sunrise"
        >
          <ChevronRight size={18} />
        </button>
      </nav>
    </div>
  );
}

export function Testimonials() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_10%_15%,rgba(255,122,0,0.16),transparent_22%),radial-gradient(circle_at_88%_64%,rgba(38,64,108,0.16),transparent_30%)] py-16 sm:py-24">
      <div className="section-container relative">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sunrise/30 bg-sunrise/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sunrise backdrop-blur-md">
            <Star className="w-3.5 h-3.5 text-sunrise fill-sunrise" />
            <span>CLIENT REVIEWS &amp; TESTIMONIALS</span>
          </div>
          <h2 id="testimonials-title" className="mt-4 font-heading text-3xl font-semibold text-white sm:text-5xl">
            Real Experiences &amp; Feedback From Growing Businesses
          </h2>
          <p className="mt-3 text-base text-white/70">
            Hear directly from SME business owners and leaders using our software solutions across India.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-10 sm:mt-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-16">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="lg:pr-4"
          >
            <h3 className="font-heading text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              Hear from <span className="text-sunrise">happy customers.</span>
            </h3>
            <p className="mt-5 max-w-lg text-base leading-8 text-white/65">
              Real feedback from teams who use thoughtful software, reliable support, and practical systems to run their businesses better.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <Star className="size-5 fill-emerald-400 text-emerald-400" />
              <span className="text-sm font-bold text-white">100% customer satisfaction</span>
            </div>
          </motion.div>

          <div>
            <div className="mb-5 flex items-center justify-between">
              <p className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.28em] text-sunrise">
                <Star className="size-4 fill-sunrise" />
                CLIENT TESTIMONIALS
              </p>
              <span className="hidden text-xs font-mono text-white/50 sm:inline">5.0 ★ average rating</span>
            </div>
            <Reviews />
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-10 sm:mt-24">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-sunrise">OUR CLIENTS</p>
              <h3 className="mt-3 max-w-md font-heading text-3xl font-bold leading-tight text-white sm:text-4xl">
                Trusted by top companies and organizations.
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
                From ambitious startups to established teams, our clients trust Sunrise to turn complex work into clear digital systems.
              </p>
            </div>
            <ClientLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
