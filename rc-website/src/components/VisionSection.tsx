"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { Lightbulb, Globe, Rocket, Brain } from "lucide-react";

const visionPillars = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Collaborative Innovation",
    description:
      "Diverse talents solving robotic challenges through shared knowledge.",
  },
  {
    icon: <Brain className="h-5 w-5" />,
    title: "Research & Development",
    description:
      "Advancing robotics through experimentation and continuous improvement.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Real-world Impact",
    description:
      "Creating intelligent systems that enhance human capabilities.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Community Building",
    description:
      "Fostering an ecosystem where robotics enthusiasts can thrive together.",
  },
];

export const VisionSection = () => {
  return (
    <section className="w-full py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content container */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4">
            Our <span className="text-primary">Vision</span>
          </h2>

          <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Uniting robotics enthusiasts, researchers, and professionals to
            build intelligent robotic systems with real-world impact.
          </p>
        </div>

        {/* Vision points in a two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl mx-auto">
          {visionPillars.map((pillar, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 p-1 rounded-full bg-primary/10 text-primary flex-shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-gray-300">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vision statement callout */}
        <div className="mt-16 bg-card/60 backdrop-blur-sm border border-yellow-secondary/20 rounded-xl p-8 max-w-4xl mx-auto">
          <blockquote className="border-l-4 border-yellow-secondary pl-6 italic text-lg">
            <p>
              "Uniting robotics professionals, researchers, enthusiast and end-users 
              to build intelligent robotic systems with real-world impact."
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
