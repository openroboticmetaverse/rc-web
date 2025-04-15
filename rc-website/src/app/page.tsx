import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BotsSection from "@/components/BotsSection";
import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Robo Collective Nexus - Home",
  description: "Welcome to the Robo Collective Nexus - A community of robotics enthusiasts",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BotsSection />
      <ContactSection />
    </>
  );
}