'use client';

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">Something went wrong</p>
        <h1 className="mt-4 font-heading text-3xl font-semibold text-white">We hit a snag while loading this page.</h1>
        <p className="mt-4 text-sm leading-7 text-white/70">
          Please try again or return to the homepage.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-sunrise px-5 py-3 text-sm font-semibold text-white"
          >
            Try again
          </button>
          <Link href="/" className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/80">
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
