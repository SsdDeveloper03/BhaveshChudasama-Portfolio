import { SocialLinks } from "@/components/ui/SocialLinks";
import { LOCATION, ROLE, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgba(5,8,22,0.95)]">
      <div className="section-container flex flex-col gap-8 py-12 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-xl">
          <p className="font-heading text-xl font-semibold text-white">{SITE_NAME}</p>
          <p className="mt-3 text-sm leading-7 text-white/70">{ROLE}</p>
          <p className="mt-2 text-sm text-white/50">{LOCATION}</p>
          <p className="mt-6 text-sm leading-7 text-white/60">
            Building thoughtful technology for businesses and founders who want lasting impact, not just short-term delivery.
          </p>
        </div>

        <div className="flex flex-col gap-6 lg:items-end w-full lg:w-auto">
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-container flex flex-col gap-2 py-5 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {SITE_NAME}. All rights reserved.</p>
          <p>Crafted with clarity, strategy, and premium design thinking.</p>
        </div>
      </div>
    </footer>
  );
}
