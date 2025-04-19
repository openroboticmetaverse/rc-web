"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const [sectionBounds, setSectionBounds] = useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
  });

  // Update bounds when component mounts or window resizes
  useEffect(() => {
    const updateBounds = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionBounds({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    return () => {
      window.removeEventListener("resize", updateBounds);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate normalized mouse position relative to the section (0-1 range)
  const normalizedX =
    (mousePosition.x - sectionBounds.left) / sectionBounds.width;
  const normalizedY =
    (mousePosition.y - sectionBounds.top) / sectionBounds.height;

  // Calculate the movement of each glow based on cursor position
  // Limit the movement to keep glows in their general area
  const topLeftGlowPosition = {
    x: `calc(25% + ${normalizedX * 40 - 20}px)`,
    y: `calc(25% + ${normalizedY * 40 - 20}px)`,
    scale:
      1 +
      (normalizedX > 0.1 &&
      normalizedX < 0.4 &&
      normalizedY > 0.1 &&
      normalizedY < 0.4
        ? 0.15
        : 0),
  };

  const bottomRightGlowPosition = {
    x: `calc(75% + ${normalizedX * 40 - 20}px)`,
    y: `calc(75% + ${normalizedY * 40 - 20}px)`,
    scale:
      1 +
      (normalizedX > 0.6 &&
      normalizedX < 0.9 &&
      normalizedY > 0.6 &&
      normalizedY < 0.9
        ? 0.15
        : 0),
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        {/* Top left glow */}
        <div
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl transition-all duration-700 ease-out"
          style={{
            transform: `translate(calc(${normalizedX * 40 - 20}px), calc(${
              normalizedY * 40 - 20
            }px)) scale(${topLeftGlowPosition.scale})`,
          }}
        ></div>

        {/* Bottom right glow */}
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl transition-all duration-700 ease-out"
          style={{
            transform: `translate(calc(${normalizedX * 40 - 20}px), calc(${
              normalizedY * 40 - 20
            }px)) scale(${bottomRightGlowPosition.scale})`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block glow">The future of Embodied AI</span>
            <span className="block text-primary">One Project at a Time</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are a collective of robotics and AI enthusiasts pushing the
            boundaries through innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button
                variant="default"
                className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-3xl"
              >
                Explore Our Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-yellow-secondary bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary/20 px-8 py-6 text-lg rounded-3xl"
              >
                Join the Collective <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
