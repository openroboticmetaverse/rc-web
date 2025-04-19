"use client";

import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay that fades from 70% to 100% opacity of the background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/hero.webm" type="video/webm" />
          {/* Fallback for browsers that don't support WebM */}
          <source src="https://videos.pexels.com/video-files/7688616/7688616-uhd_2732_1440_24fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow z-20"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow z-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-30">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block glow">Building the Future</span>
            <span className="block text-primary">One Bot at a Time</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We are a collective of engineers and AI enthusiasts pushing the boundaries of robotic intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button variant="default" className="bg-primary hover:bg-primary/80 text-white px-8 py-6 text-lg rounded-3xl">
                Explore Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-yellow-secondary bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary/20 px-8 py-6 text-lg rounded-3xl">
                Join the Collective <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
