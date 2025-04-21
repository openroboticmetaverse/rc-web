"use client";

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CTASection = () => {
  return (
    <section id="cta" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Ready</span> to Join Forces?
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We're always looking for passionate individuals and organizations to collaborate with on cutting-edge robotics projects.
          </p>
          
          <Link href="/contact">
            <Button 
              variant="default" 
              className="px-8 py-6 text-lg rounded-3xl"
              size="lg"
            >
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
