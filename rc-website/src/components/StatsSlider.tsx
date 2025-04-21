"use client";

import React, { useRef, useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface StatCardProps {
  percentage: string;
  description: string;
  source: string;
  backgroundColor: string;
  textColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  percentage,
  description,
  source,
  backgroundColor,
  textColor = "text-white",
}) => {
  return (
    <div
      className={`w-full h-full ${backgroundColor} p-8 md:p-12 lg:p-16 rounded-lg flex flex-col justify-center`}
    >
      <div className="flex flex-col items-center text-center">
        <h3 className={`text-6xl md:text-8xl font-bold mb-6 ${textColor}`}>
          {percentage}
        </h3>
        <div className="max-w-md">
          <p className={`text-lg md:text-xl font-medium mb-4 ${textColor}`}>
            {description}
          </p>
          <p className={`text-sm md:text-base opacity-80 ${textColor}`}>
            {source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function StatsSlider() {
  const stats = [
    {
      percentage: "5x Growth",
      description:
        "The industrial robotics market is projected to grow by over 430%, jumping from $55.1B in 2025 to $291.1B by 2035 as automation reshapes manufacturing.",
      source: "Global Industry Analysts, 2025",
      backgroundColor: "bg-primary",
      textColor: "text-white",
    },
    {
      percentage: "4x Larger",
      description:
        "Robotics as a whole is on track to grow by more than 340%, jumping from $47.8B in 2024 to $211.1B by 2034, driven by demand in e-commerce, logistics, and smart factories.",
      source: "NextMove Strategy Consulting, 2025",
      backgroundColor: "bg-yellow-secondary",
      textColor: "text-black",
    },
    {
      percentage: "18%/Year",
      description:
        "Humanoid robots are growing fast, with the market expanding by 18% every year. Driven by breakthroughs in mobility, AI, and healthcare applications.",
      source: "GlobeNewswire, 2025",
      backgroundColor: "bg-[#C03221]",
      textColor: "text-white",
    },
  ];

  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = stats.length;

  useEffect(() => {
    // Function to determine which slide should be active based on scroll position
    const handleScroll = () => {
      if (!wrapperRef.current) return;

      // Get the position of the wrapper element
      const wrapperTop = wrapperRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Once the wrapper is at the top of the viewport (or above)
      if (wrapperTop <= 0) {
        // Calculate how far we've scrolled into the wrapper
        // The scrollProgress value will be between 0 and totalSlides
        const wrapperHeight = wrapperRef.current.offsetHeight - windowHeight;
        const scrolledPixels = Math.abs(wrapperTop);
        const scrollProgress = (scrolledPixels / wrapperHeight) * totalSlides;

        // Determine which slide to show (clamp between 0 and totalSlides-1)
        const slideIndex = Math.min(
          Math.floor(scrollProgress),
          totalSlides - 1
        );

        setActiveSlide(slideIndex);
      } else {
        // If the wrapper is below the viewport top, ensure we're on the first slide
        setActiveSlide(0);
      }
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [totalSlides]);

  // Height of the wrapper should be the viewport height times the number of slides
  // This creates the scrollable area needed for the effect
  const wrapperHeight = `${totalSlides * 100}vh`;

  return (
    <div
      ref={wrapperRef}
      style={{ height: wrapperHeight }}
      className="relative"
    >
      <div
        ref={sectionRef}
        className="sticky top-0 left-0 w-full h-screen flex items-center justify-center bg-black z-10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-primary">Robotics</span> Worldwide
          </h2>
          <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
            Explore key insights into the global robotics market and get a
            snapshot of the dynamic changes that are shaping the future of
            robotics.
          </p>

          <div className="relative overflow-hidden">
            {/* Indicators */}
            <div className="flex justify-center gap-2 mb-8">
              {stats.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeSlide === index ? "bg-primary w-8" : "bg-gray-600"
                  }`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Slider content */}
            <div className="relative h-[500px] transition-all">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                    index === activeSlide
                      ? "opacity-100 translate-x-0"
                      : index < activeSlide
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <StatCard {...stat} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
