export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "orm",
    slug: "open-robotic-metaverse",
    title: "Open Robotic Metaverse",
    description: "A shared virtual environment where robotic entities and humans can interact, learn, and collaborate through immersive simulations and digital twins.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Virtual Reality", "Digital Twins", "Cloud Computing"],
    content: "The Open Robotic Metaverse project aims to create a collaborative digital environment where robots, AI systems, and humans can interact in real-time. This platform leverages cutting-edge virtual reality technology to enable seamless control, testing, and training of robotic systems in a safe, simulated environment before deployment in the physical world.\n\nKey features include digital twin implementation, real-time collaboration tools, and cross-platform compatibility to ensure accessibility across different devices and systems.",
    featured: true
  },
  {
    id: "rtp",
    slug: "robotic-torso-pipe-structure",
    title: "Robotic Torso using Pipe Structure",
    description: "A lightweight, cost-effective robotic torso framework built from modular pipe components, enabling flexible configuration and rapid prototyping for research applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Hardware", "Modular Design", "Prototyping"],
    content: "Our Robotic Torso project utilizes standard pipe components to create an affordable yet robust framework for robotic upper-body systems. The design emphasizes modularity, allowing researchers and hobbyists to quickly adapt and reconfigure the system for various applications.\n\nThe framework supports multiple degrees of freedom and can be integrated with various end effectors. Assembly requires minimal specialized tools, making it accessible for educational institutions and individual makers with limited resources."
  },
  {
    id: "3darms",
    slug: "3d-printed-robot-arms",
    title: "3D Printed Arms using LeRobot Library",
    description: "Custom-designed robotic arms fabricated through advanced 3D printing techniques, integrated with our open-source LeRobot software library for intuitive control and programming.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["3D Printing", "Open Source", "Control Systems"],
    content: "The 3D Printed Arms project combines affordable manufacturing techniques with sophisticated control systems. By leveraging modern 3D printing capabilities, we've created customizable robotic arms that can be produced at a fraction of the cost of commercial alternatives.\n\nThese arms are powered by our LeRobot library, an open-source software package that simplifies the programming and control of robotic limbs. The library features inverse kinematics solvers, trajectory planning, and a user-friendly API that makes advanced robotics accessible to programmers of various skill levels."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}