import { HeroSection } from "@/components/HeroSection";
import { VisionSection } from "@/components/VisionSection";
import { AboutSection } from "@/components/AboutSection";
import { PillarsSection } from "@/components/PillarsSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsSlider from "@/components/StatsSlider";
import { FAQSection } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import type { Metadata } from "next";
import PartnersSection from "@/components/PartnersSection";
import BotsSection from "@/components/BotsSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Robotics Collective | Home",
  description:
    "A collective of engineers and AI enthusiasts pushing the boundaries of robotic intelligence.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <VisionSection />
      <PillarsSection />
      <AboutSection />
      <StatsSlider />
      <ProjectsSection />
      <ContactSection />
      <FAQSection />
      <PartnersSection />
      <CTASection />
    </main>
  );
}
