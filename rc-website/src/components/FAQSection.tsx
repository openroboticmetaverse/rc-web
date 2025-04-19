"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Frequently <span className="text-primary">Asked</span> Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                What is Robotics Collective?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Robotics Collective is a community of engineers, designers, researchers, and enthusiasts 
                passionate about advancing the field of robotics and AI. We collaborate on projects, 
                share knowledge, and work together to solve challenging problems in the field.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">
                How can I join the collective?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                You can join our collective by reaching out through our contact form or attending 
                one of our regular meetups. We welcome members from all backgrounds with an interest 
                in robotics, AI, engineering, or design.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Do I need technical experience to join?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Not at all! While many of our members have technical backgrounds, we welcome enthusiasts 
                of all skill levels. Our community is built on learning and sharing knowledge, so it's a 
                great place to develop your skills regardless of your starting point.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">
                What types of projects does the collective work on?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Our projects span a wide range of applications including autonomous systems, 
                machine learning implementations, robot design and construction, and human-robot 
                interaction research. Check out our Projects section for examples of our work.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                How often do you host events and meetups?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We typically host monthly meetups and workshops, with special events throughout the year. 
                Our calendar varies based on project demands and community interests. Subscribe to our 
                newsletter to stay informed about upcoming events.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;