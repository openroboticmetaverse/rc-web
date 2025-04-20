"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-32 relative">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/80 z-10 backdrop-blur-[3px]"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/ctavideo.webm" type="video/webm" />
        </video>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Ready</span> to Join Forces?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We're always looking for passionate individuals and organizations to collaborate with on cutting-edge robotics projects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="outline"
                className="border-yellow-secondary bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary/20 px-8 py-6 text-lg rounded-3xl"
                size="lg"
              >
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/donate">
              <Button 
                variant="default"
                className="bg-[#C03221] text-white hover:bg-[#C03221]/80 px-8 py-6 text-lg rounded-3xl"
                size="lg"
              >
                Support us<ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;