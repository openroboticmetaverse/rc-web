"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: "Neural Interface",
    description: "A brain-computer interface that allows direct communication between humans and machines using advanced neural networks.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Autonomous Swarm",
    description: "A collective of micro-robots that work together to solve complex tasks through distributed intelligence and coordination.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Adaptive Learning",
    description: "AI systems that continuously learn and adapt to new environments without human intervention or reprogramming.",
    image: "https://images.pexels.com/photos/8439084/pexels-photo-8439084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Quantum Computing",
    description: "Exploring quantum algorithms for solving complex optimization problems in robotics and machine learning.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden group transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <Button variant="ghost" className="text-primary p-0 group hover:bg-transparent hover:no-underline">
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Core</span> Projects
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Our flagship initiatives pushing the boundaries of what's possible in robotics and artificial intelligence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
