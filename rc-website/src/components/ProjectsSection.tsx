"use client";

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';
import Link from 'next/link';

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden group transition-all duration-300 hover:translate-y-[-1px] hover:shadow-lg flex flex-col h-full">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="mt-auto">
          <Link href={`/projects/${project.slug}`}>
            <Button variant="ghost" className="text-primary p-0 group hover:bg-transparent hover:no-underline">
              Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const displayProjects = projects
    .filter(project => project.featured)
    .length >= 4
    ? projects.filter(project => project.featured).slice(0, 4)
    : projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Core</span> Projects
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Our flagship initiatives pushing the boundaries of what's possible in robotics and artificial intelligence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/projects">
              <Button 
                variant="default" 
                className="px-8 py-6 text-lg rounded-3xl"
                size="lg"
              >
                View All Projects<ArrowRight className="ml-2 h-4 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
