"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import { googleReviews, type GoogleReview } from "@/data/testimonials";

function ReviewCard({ review }: { review: GoogleReview }) {
  const [expanded, setExpanded] = useState(false);
  const longReview = review.body.length > 170;
  const visibleBody = longReview && !expanded ? `${review.body.slice(0, 170).trimEnd()}…` : review.body;
  return (
    <article className="flex min-h-[20rem] flex-col border border-white/10 bg-white/[0.03] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.12)] rounded-3xl backdrop-blur-md">
      <div className="flex gap-1 text-sunrise" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-5 whitespace-pre-line text-sm leading-7 text-white/80">&ldquo;{visibleBody}&rdquo;</blockquote>
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
          <p className="mt-0.5 text-xs text-white/50">Google Review</p>
        </div>
      </footer>
    </article>
  );
}

function Reviews() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const update = () => setPerPage(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalPages = Math.ceil(googleReviews.length / perPage);
  const safePage = Math.min(page, totalPages - 1);
  const current = googleReviews.slice(safePage * perPage, safePage * perPage + perPage);

  return (
    <div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {current.map((review) => (
          <ReviewCard key={review.authorName} review={review} />
        ))}
      </div>
      <nav aria-label="Google review pages" className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setPage((value) => Math.max(0, value - 1))}
          disabled={safePage === 0}
          aria-label="Previous review page"
          className="rounded-full border border-white/15 p-2 text-white transition hover:border-sunrise/60 hover:text-sunrise disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, item) => (
            <button
              key={item}
              type="button"
              onClick={() => setPage(item)}
              aria-label={`Show review page ${item + 1}`}
              aria-current={item === safePage ? "page" : undefined}
              className={`size-2.5 rounded-full transition ${item === safePage ? "bg-sunrise scale-125" : "bg-white/25 hover:bg-white/60"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPage((value) => Math.min(totalPages - 1, value + 1))}
          disabled={safePage === totalPages - 1}
          aria-label="Next review page"
          className="rounded-full border border-white/15 p-2 text-white transition hover:border-sunrise/60 hover:text-sunrise disabled:cursor-not-allowed disabled:opacity-35"
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

        {/* PRIMARY CLIENT GOOGLE REVIEWS SHOWCASE */}
        <div className="mt-10 sm:mt-14">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-sunrise flex items-center gap-2">
              <Star className="w-4 h-4 text-sunrise fill-sunrise" />
              VERIFIED GOOGLE CLIENT REVIEWS
            </p>
            <span className="text-xs text-white/50 font-mono hidden sm:inline">5.0 ★ Star Satisfaction</span>
          </div>
          <Reviews />
        </div>
      </div>
    </section>
  );
}
