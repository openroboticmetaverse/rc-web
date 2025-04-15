"use client";

import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Home, Users, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const metadata: Metadata = {
  title: "Page Not Found - Robo Collective Nexus",
  description: "The page you're looking for couldn't be found",
};

export default function NotFound() {
  const router = useRouter();
  // Interactive background effect similar to the hero section
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionBounds, setSectionBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });
  
  // Update bounds when component mounts or window resizes
  useEffect(() => {
    const updateBounds = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setSectionBounds({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height
        });
      }
    };
    
    updateBounds();
    window.addEventListener('resize', updateBounds);
    
    return () => {
      window.removeEventListener('resize', updateBounds);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate normalized mouse position relative to the section
  const normalizedX = (mousePosition.x - sectionBounds.left) / sectionBounds.width;
  const normalizedY = (mousePosition.y - sectionBounds.top) / sectionBounds.height;

  // Function to navigate to contact page with query param
  const handleJoinClick = () => {
    router.push('/contact?source=404&action=join');
  };

  return (
    <div 
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 overflow-hidden"
    >
      {/* Interactive background elements */}
      <div className="absolute inset-0 z-0">
        {/* Top glow */}
        <div 
          className="absolute top-1/3 left-1/2 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl transition-all duration-700 ease-out"
          style={{ 
            transform: `translate(calc(${normalizedX * 30 - 15}px), calc(${normalizedY * 30 - 15}px))`
          }}
        ></div>
        
        {/* Bottom glow */}
        <div 
          className="absolute bottom-1/3 right-1/2 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl transition-all duration-700 ease-out"
          style={{ 
            transform: `translate(calc(${normalizedX * 30 - 15}px), calc(${normalizedY * 30 - 15}px))`
          }}
        ></div>
      </div>
      
      <div className="z-10 animate-fade-in">
        <h1 className="text-8xl font-bold mb-2 text-primary">404</h1>
        <h2 className="text-3xl font-semibold mb-6">System Malfunction</h2>
        
        <div className="max-w-lg mx-auto mb-10 space-y-4">
          <p className="text-xl text-gray-300">
            Oops! Our robots seem to have misplaced this page.
          </p>
          <p className="text-lg text-gray-400 italic mb-2">
            "I searched my entire memory bank, but this URL doesn't compute."
          </p>
          <p className="text-lg text-yellow-secondary">
            Join and help us improve the website!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button variant="default" className="bg-primary hover:bg-primary/80 text-white px-6 py-5 text-lg rounded-3xl">
              <Home className="mr-2 h-5 w-5" /> Return to Base
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="border-yellow-secondary bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary/20 px-6 py-5 text-lg rounded-3xl"
            onClick={handleJoinClick}
          >
            <Users className="mr-2 h-5 w-5" /> Join Now!<ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}