export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  content?: string;
  featured?: boolean;
  status: "ongoing" | "finished" | "planned";
  pointOfContactId: number; // References a team member ID (numeric)
  galleryImages?: string[];
  links?: {
    github?: string;
    website?: string;
    documentation?: string;
  };
}

export const projects: Project[] = [
  {
    id: "orom",
    slug: "open-robotic-metaverse",
    title: "Open Robotic Metaverse",
    description:
      "A browser-based collaborative platform enabling interactive exploration, visualization, and real-time simulation of robotics projects.",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Browser-based Simulation", "Collaborative Robotics", "Open-source"],
    content:
      "The Open Robotic Metaverse (orom) creates an accessible digital environment for collaboratively visualizing and interacting with robotic simulations in real-time. By leveraging web-based technologies such as React Three Fiber, Three.js, and WebGPU, orom enables seamless exploration and modification of virtual robotic scenarios directly in-browser.\n\nKey features include interactive real-time simulations, support for multiple robotic simulation tools (MuJoCo, ROS, Drake), community-driven contributions, and advanced visual fidelity essential for sim-to-real robotics applications.",
    featured: true,
    status: "ongoing",
    pointOfContactId: 2, // Karim Siala
    galleryImages: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    links: {
      github: "https://github.com/openroboticmetaverse/mvp-webapp",
      website: "https://openroboticmetaverse.org",
    },
  },
  {
    id: "aoh",
    slug: "aachen-open-source-humanoid",
    title: "Aachen Open‑Source Humanoid",
    description:
      "A city‑wide moonshot to build Aachen’s first fully open humanoid robot—where academia, industry, and makers craft the future together.",
    image:
      "https://images.unsplash.com/photo-1654009603731-20b6d7536002?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Humanoid Robotics", "Open Source", "Cross‑Disciplinary"],
    content:
      "What if an entire ecosystem joined forces to create a human‑scale robot anyone could study, remix, and improve?  The Aachen Open Source Humanoid initiative merges mechanical ingenuity, high‑density power systems, advanced sensing, and cutting‑edge AI control into a single, open hardware & software stack.  Companies contribute real‑world expertise, research institutes supply breakthrough science, and students inject fearless creativity—each discipline weaving its module into a shared blueprint ready for the global community.\n\nFrom carbon‑fiber limbs and torque‑controlled joints to vision‑enabled perception and battery‑smart powertrains, every component is transparent, modular, and hackable.  Join us as we turn sketches into silicon and put Aachen on the map as a cradle of open humanoid innovation.",
    featured: false,
    status: "planned",
    pointOfContactId: 1,
    galleryImages: [
      "https://images.unsplash.com/photo-1654009603731-20b6d7536002?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    links: {
      github:
        "https://github.com/robotics-collective/aachen-open-source-humanoid",
      website:
        "https://robotics-collective.de/projects/aachen-open-source-humanoid",
    },
  },
  {
    id: "3darms",
    slug: "3d-printed-robot-arms",
    title: "3D Printed Arms using LeRobot Library",
    description:
      "Custom-designed robotic arms fabricated through advanced 3D printing techniques, integrated with our open-source LeRobot software library for intuitive control and programming.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["3D Printing", "Open Source", "Control Systems"],
    content:
      "The 3D Printed Arms project combines affordable manufacturing techniques with sophisticated control systems. By leveraging modern 3D printing capabilities, we've created customizable robotic arms that can be produced at a fraction of the cost of commercial alternatives.\n\nThese arms are powered by our LeRobot library, an open-source software package that simplifies the programming and control of robotic limbs. The library features inverse kinematics solvers, trajectory planning, and a user-friendly API that makes advanced robotics accessible to programmers of various skill levels.",
    status: "ongoing",
    pointOfContactId: 5,
    galleryImages: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    ],
    links: {
      github: "https://github.com/robotics-collective/lerobot-library",
      website: "https://lerobot.roboticscollective.org",
      documentation: "https://docs.roboticscollective.org/lerobot",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
