"use client";
import React, { useEffect, useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

// Sample partner logos - you should replace these with your actual partners' logos
const partners = [
  { name: "Partner 1", logo: "/partner1.svg" },
  { name: "Partner 2", logo: "/partner2.svg" },
  { name: "Partner 3", logo: "/partner3.svg" },
  { name: "Partner 4", logo: "/partner4.svg" },
  { name: "Partner 5", logo: "/partner5.svg" },
  { name: "Partner 6", logo: "/partner6.svg" },
];

export default function PartnersSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!api) return;
    
    // Listen for slide changes to update the current index
    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    
    // Set up automatic sliding with a smoother, slower interval
    const autoplayInterval = setInterval(() => {
      api.scrollNext(); // Smooth scroll
    }, 4000); // Slide every 4 seconds
    
    return () => {
      api.off('select', onSelect);
      clearInterval(autoplayInterval);
    };
  }, [api]);

  return (
    <section id="partners" className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-primary glow">Partners</span>
        </h2>
        
        <div className="partners-spotlight-container relative mx-auto max-w-5xl" ref={containerRef}>
          {/* Spotlight effect overlay */}
          <div className="partners-spotlight absolute inset-0 z-10 pointer-events-none"></div>
          
          <Carousel 
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
              containScroll: false,
              duration: 1500, // Longer animation duration for smoother sliding
              watchDrag: false // Disable drag watching for smoother animation
            }}
            setApi={setApi}
            className="w-full overflow-hidden"
          >
            <CarouselContent className="partners-smooth-scroll">
              {/* Duplicate partners list to create a seamless loop effect */}
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/6"
                >
                  <div 
                    className={`
                      partner-logo flex flex-col items-center justify-center p-6 
                      bg-card/50 backdrop-blur-sm rounded-lg border border-border/30 h-32 
                      transition-all duration-500 
                      ${index % partners.length === currentIndex % partners.length ? 'animate-float' : ''}
                    `}
                    style={{
                      opacity: getOpacity(index % partners.length, currentIndex % partners.length, partners.length)
                    }}
                  >
                    {/* Replace with actual logo images when available */}
                    <div className="h-16 w-full flex items-center justify-center">
                      <div className="h-12 w-24 bg-primary/20 rounded flex items-center justify-center">
                        <span className="text-primary">{partner.name}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// Helper function to calculate opacity based on position
function getOpacity(itemIndex: number, currentIndex: number, totalItems: number): number {
  // Calculate the shortest distance between items in a circular array
  const distance = Math.min(
    Math.abs(itemIndex - currentIndex),
    totalItems - Math.abs(itemIndex - currentIndex)
  );
  
  // Center items are fully visible, items further away fade out
  if (distance === 0) return 1;
  if (distance === 1) return 0.7;
  if (distance === 2) return 0.4;
  return 0.1;
}