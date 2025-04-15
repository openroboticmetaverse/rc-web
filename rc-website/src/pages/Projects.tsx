
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    title: "Open Robotic Metaverse",
    description: "A shared virtual environment where robotic entities and humans can interact, learn, and collaborate through immersive simulations and digital twins.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Virtual Reality", "Digital Twins", "Cloud Computing"]
  },
  {
    id: 2,
    title: "Robotic Torso using Pipe Structure",
    description: "A lightweight, cost-effective robotic torso framework built from modular pipe components, enabling flexible configuration and rapid prototyping for research applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Hardware", "Modular Design", "Prototyping"]
  },
  {
    id: 3,
    title: "3D Printed Arms using LeRobot Library",
    description: "Custom-designed robotic arms fabricated through advanced 3D printing techniques, integrated with our open-source LeRobot software library for intuitive control and programming.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["3D Printing", "Open Source", "Control Systems"]
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-primary/20">
      <div className="h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="text-xs bg-secondary px-2 py-1 rounded-full text-primary">
              {tag}
            </span>
          ))}
        </div>
        <Button variant="link" className="text-yellow-secondary p-0 group">
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-lg text-gray-300">
                Discover our flagship initiatives pushing the boundaries of what's possible in robotics and artificial intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <div className="mt-24 bg-card rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Have an Idea for a Project?</h2>
              <p className="text-gray-300 mb-6">
                We're always looking for new collaborations and innovative ideas to push the boundaries of robotics.
              </p>
              <Button className="bg-yellow-secondary hover:bg-yellow-secondary/90 text-black font-medium">
                Propose a Project
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Projects;
