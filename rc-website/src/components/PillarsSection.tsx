import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Zap, Users, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const pillars = [
  {
    icon: <GraduationCap className="h-10 w-10" />,
    title: "Learn",
    description:
      "A hands-on, community-driven approach where members of all experience levels learn from and support each other.",
    color: "primary",
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "Connect",
    description:
      "A vibrant community where robotics enthusiasts meet and collaborate, fostering partnerships and knowledge exchange.",
    color: "accent",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Innovate",
    description:
      "Contributing to the rapidly evolving field of robotics by leveraging AI and simulation to accelerate development.",
    color: "yellow-secondary",
  },
];

export function PillarsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our <span className="text-primary">Core</span> Pillars
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Driving growth and collaboration within the tech community.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-3 lg:gap-12">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className={cn(
                "h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg",
                "min-h-[280px] border-t-4",
                pillar.color === "primary"
                  ? "border-t-primary"
                  : pillar.color === "accent"
                  ? "border-t-accent"
                  : "border-t-[#e6af2e]" // yellow-secondary
              )}
            >
              <CardHeader className="flex flex-col items-center gap-4 pb-4">
                <div
                  className={cn(
                    "p-4 rounded-full",
                    pillar.color === "primary"
                      ? "bg-primary/10 text-primary"
                      : pillar.color === "accent"
                      ? "bg-accent/10 text-accent"
                      : "bg-[#e6af2e]/10 text-[#e6af2e]" // yellow-secondary
                  )}
                >
                  {pillar.icon}
                </div>
                <CardTitle className="text-2xl font-bold">
                  {pillar.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex-grow flex items-center justify-center text-center px-6">
                <p className="text-base text-muted-foreground">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PillarsSection;
