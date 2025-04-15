"use client";

import { useState } from 'react';
import { Bot, Database, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const bots = [
  {
    id: 1,
    name: "Nexus-9",
    role: "Neural Network Specialist",
    description: "Advanced neural processing unit with adaptive learning capabilities and real-time environment mapping.",
    icon: Bot
  },
  {
    id: 2,
    name: "Quantum",
    role: "Quantum Computing Bot",
    description: "Specialized in quantum algorithms and molecular simulations for complex problem-solving.",
    icon: Database
  },
  {
    id: 3,
    name: "ATLAS",
    role: "Autonomous Transport",
    description: "Self-navigating transport unit optimized for hazardous environment exploration and resource gathering.",
    icon: Bot
  },
  {
    id: 4,
    name: "EVE",
    role: "Environmental Analysis",
    description: "Environmental monitoring and analysis system with predictive modeling capabilities.",
    icon: Database
  }
];

const BotsSection = () => {
  const [activeBot, setActiveBot] = useState(bots[0]);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const handleNext = () => {
    setDirection('next');
    const currentIndex = bots.findIndex(bot => bot.id === activeBot.id);
    const nextIndex = (currentIndex + 1) % bots.length;
    setActiveBot(bots[nextIndex]);
  };

  const handlePrev = () => {
    setDirection('prev');
    const currentIndex = bots.findIndex(bot => bot.id === activeBot.id);
    const prevIndex = currentIndex === 0 ? bots.length - 1 : currentIndex - 1;
    setActiveBot(bots[prevIndex]);
  };

  return (
    <section id="bots" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Meet</span> the Bots
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Our specialized robotic systems, each designed with unique capabilities and functions.
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-block bg-background p-3 rounded-lg mb-4">
                    <activeBot.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{activeBot.name}</h3>
                  <p className="text-primary font-medium">{activeBot.role}</p>
                </div>
                
                <p className="text-gray-300 mb-8">
                  {activeBot.description}
                </p>
                
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-fit">
                  Technical Specifications
                </Button>
              </div>
              
              <div className="bg-secondary relative flex items-center justify-center">
                <div className="h-64 w-64 bg-gradient-to-br from-primary/30 to-accent/10 rounded-full flex items-center justify-center">
                  <Bot className="h-24 w-24 text-primary" />
                </div>
                
                {/* Navigation controls */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button 
                    onClick={handlePrev}
                    className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="bg-background/20 backdrop-blur-sm p-2 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {bots.map((bot, index) => (
              <button
                key={bot.id}
                className={`h-2 rounded-full transition-all ${
                  activeBot.id === bot.id ? 'w-8 bg-primary' : 'w-2 bg-gray-600'
                }`}
                onClick={() => setActiveBot(bot)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotsSection;
