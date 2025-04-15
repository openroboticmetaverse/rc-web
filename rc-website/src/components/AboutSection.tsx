"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="text-primary">About</span> the Collective
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-lg">
            <div className="aspect-square bg-card rounded-lg overflow-hidden">
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Robotics Collective"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-card/80 backdrop-blur-sm rounded-lg">
              <p className="text-sm md:text-base text-primary font-medium">
                Founded in 2024, our collective brings together the brightest minds in robotics.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300">
              The Robotics Collective is a pioneering group of engineers, designers, and AI specialists united by our vision to create advanced robotic systems that seamlessly integrate with human society.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300">
              We believe in open collaboration, shared knowledge, and pushing the boundaries of what's possible in the field of robotics and artificial intelligence.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-card p-6 rounded-lg">
                <div className="text-primary text-3xl font-bold mb-2">15+</div>
                <div className="text-gray-400">Core Members</div>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <div className="text-primary text-3xl font-bold mb-2">23</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
