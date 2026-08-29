"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Auto redirect to homepage if a 404 URL is accessed directly
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-center">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sunrise">404 • REDIRECTING</p>
        <h1 className="mt-4 font-heading text-3xl font-semibold text-white">The page you are looking for is unavailable.</h1>
        <p className="mt-4 text-sm leading-7 text-white/70">
          The requested resource could not be found. Redirecting you home...
        </p>
        <div className="mt-6 flex justify-center">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-sunrise px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 shadow-lg shadow-sunrise/20">
            Return Home Now
          </Link>
        </div>
      </div>
    </div>
  );
}
