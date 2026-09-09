import dynamic from "next/dynamic";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Hero } from "@/components/sections/Hero";
import { RoleDashboard } from "@/components/ui/RoleDashboard";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { WhatsAppFloatingWidget } from "@/components/ui/WhatsAppFloatingWidget";
import { CardSkeleton } from "@/components/ui/CardSkeleton";
import { SectionSkeleton } from "@/components/ui/SectionSkeleton";

const Products = dynamic(() => import("@/components/sections/Products").then((mod) => mod.Products), {
  loading: () => <SectionSkeleton />,
});
const Podcaster = dynamic(() => import("@/components/sections/Podcaster").then((mod) => mod.Podcaster), {
  loading: () => <SectionSkeleton />,
});
const GrowthCoach = dynamic(() => import("@/components/sections/GrowthCoach").then((mod) => mod.GrowthCoach), {
  loading: () => <SectionSkeleton />,
});
const LifeMentor = dynamic(() => import("@/components/sections/LifeMentor").then((mod) => mod.LifeMentor), {
  loading: () => <SectionSkeleton />,
});
const PublicSpeaker = dynamic(() => import("@/components/sections/PublicSpeaker").then((mod) => mod.PublicSpeaker), {
  loading: () => <SectionSkeleton />,
});
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then((mod) => mod.Testimonials), {
  loading: () => <SectionSkeleton />,
});
const Contact = dynamic(() => import("@/components/sections/Contact").then((mod) => mod.Contact), {
  loading: () => <CardSkeleton />,
});

export default function Home() {
  return (
    <>
      <ProgressBar />
      <CursorGlow />
      <Navbar />
      <main id="top">
        <Hero />
        <RoleDashboard />
        <About />
        <Products />
        <Podcaster />
        <GrowthCoach />
        <LifeMentor />
        <PublicSpeaker />
        <Testimonials />
        <Contact />
      </main>
      <WhatsAppFloatingWidget />
      <ScrollToTop />
      <Footer />
    </>
  );
}
