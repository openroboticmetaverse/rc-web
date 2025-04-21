export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio?: string;
  description?: string; // For more detailed descriptions
  contact?: {
    email?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  isBoard?: boolean;
  tags?: string[]; // For skills, expertise areas, etc.
}

// Core team members
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Amine Kharrat",
    role: "Lead",
    description:
      "Specializes in robot perception systems with 15+ years of industry experience across major robotics labs.",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/t_reduced-size/v1702467097/openroboverse/team/amine_ea0ijk.jpg",
    contact: {
      linkedin: "https://linkedin.com/in/aminekharrat",
      github: "https://github.com/AmineKharrat",
      email: "amine@roboticscollective.org",
    },
    isBoard: true,
    tags: ["Perception", "Robotics", "Leadership"],
  },
  {
    id: 2,
    name: "Karim Siala",
    role: "Dev Lead",
    description:
      "Former Google AI researcher who leads our machine learning infrastructure and decision-making systems.",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/karim_kddxb5.jpg",
    contact: {
      linkedin: "https://linkedin.com/in/karim-siala",
      github: "https://github.com/karimsiala",
      email: "karim@roboticscollective.org",
    },
    isBoard: true,
    tags: ["AI", "Machine Learning", "Web Development"],
  },
  {
    id: 3,
    name: "Jan Strehl",
    role: "Secretary",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/jan_v4l9n0.jpg",
    contact: {
      linkedin: "https://linkedin.com/in/janstrehl",
      github: "https://github.com/strehljd",
    },
    isBoard: false,
    tags: ["Organization", "Project Management"],
  },
  {
    id: 4,
    name: "Edilbert Christhuraj",
    role: "Developper",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/edi_jovhhj.jpg",
    contact: {
      linkedin: "https://linkedin.com/in/echristhuraj",
      github: "https://github.com/19ec94",
    },
    isBoard: false,
    tags: ["Development", "Software Engineering"],
  },
  {
    id: 5,
    name: "Siddarth S. Pillai",
    role: "Robotics Developper",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/kikbby0numfyxnzghmfe",
    contact: {
      linkedin: "https://linkedin.com/in/siddarthspillai",
      github: "https://github.com/siddarth-s-pillai",
    },
    isBoard: false,
    tags: ["Development", "Robotics"],
  },
  {
    id: 6,
    name: "Youssef Aloulou",
    role: "Logistics",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/youssef_myif9n.jpg",
    contact: {
      linkedin: "https://linkedin.com/in/youssef-aloulou-7b1443162/",
      github: "https://github.com/TheRealAloulou",
    },
    isBoard: false,
    tags: ["Development", "VR/AR"],
  },
  {
    id: 7,
    name: "Ahnmed Hadrich",
    role: "Web Developper",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/t_reduced-size/v1745172120/1718785071137_af0nhh.jpg",
    contact: {
      linkedin: "https://www.linkedin.com/in/ahmed-hadrich/",
      github: "https://github.com/ahmedhadrich",
    },
    isBoard: false,
    tags: ["Development", "VR/AR"],
  },
];

// Community members
export const communityMembers: TeamMember[] = [
  {
    id: 1001,
    name: "Mia Zhang",
    role: "Community Member",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    tags: ["Community"],
  },
];

// Partner organizations
export interface PartnerOrganization {
  id: number;
  name: string;
  logo: string;
  website: string;
}

export const partnerOrganizations: PartnerOrganization[] = [
  {
    id: 201,
    name: "RWTH Aachen University",
    logo: "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/partners/rwth-logo.png",
    website: "https://www.rwth-aachen.de/",
  },
  {
    id: 202,
    name: "Technical University of Munich",
    logo: "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/partners/tum-logo.png",
    website: "https://www.tum.de/",
  },
  {
    id: 203,
    name: "German Research Center for Artificial Intelligence",
    logo: "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/partners/dfki-logo.png",
    website: "https://www.dfki.de/",
  },
  {
    id: 204,
    name: "Fraunhofer Institute",
    logo: "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/partners/fraunhofer-logo.png",
    website: "https://www.fraunhofer.de/",
  },
];

// Helper functions
export function getTeamMemberById(id: number): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
}

export function getAllTeamMemberIds(): number[] {
  return teamMembers.map((member) => member.id);
}

export function getCoreTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getCommunityMembers(): TeamMember[] {
  return communityMembers;
}

export function getPartnerOrganizations(): PartnerOrganization[] {
  return partnerOrganizations;
}
