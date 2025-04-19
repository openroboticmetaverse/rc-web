import type { Metadata } from "next";
import { Github, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Robo Collective Nexus",
  description:
    "Learn about the Robo Collective Nexus team, mission, and values",
  keywords: ["about us", "robotics team", "mission", "values", "history"],
};

const coreTeamMembers = [
  {
    id: 1,
    name: "Dr. Elena Kowalski",
    role: "Lead Engineer & Founder",
    description:
      "Specializes in robot perception systems with 15+ years of industry experience across major robotics labs.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    linkedin: "https://linkedin.com/in/elena-kowalski",
    github: "https://github.com/elenakowalski",
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "AI System Architect",
    description:
      "Former Google AI researcher who leads our machine learning infrastructure and decision-making systems.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    linkedin: "https://linkedin.com/in/marcus-chen",
    github: "https://github.com/marcuschen",
  },
  {
    id: 3,
    name: "Sophia Rodriguez",
    role: "Robotics Hardware Specialist",
    description:
      "Mechanical engineering genius who transforms advanced concepts into reliable robotic platforms.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    linkedin: "https://linkedin.com/in/sophia-rodriguez",
    github: "https://github.com/sophiarodriguez",
  },
  {
    id: 4,
    name: "Alexander Novak",
    role: "Computer Vision Engineer",
    description:
      "Pioneered several breakthrough algorithms in real-time object recognition for autonomous systems.",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    linkedin: "https://linkedin.com/in/alexander-novak",
    github: "https://github.com/alexandernovak",
  },
];

const communityMembers = [
  {
    id: 101,
    name: "Mia Zhang",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 102,
    name: "Jamal Washington",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 103,
    name: "Lena Müller",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 104,
    name: "Raj Patel",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 105,
    name: "Lucia Fernandez",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 106,
    name: "Hiroshi Tanaka",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-primary">About</span> Us
            </h1>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Our <span className="text-primary">Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-12">
                At the Robotics Collective, our mission is to accelerate the
                development of intelligent robotic systems that harmoniously
                interact with humans and their environment. We believe in the
                power of collaborative innovation and open-source technologies
                to democratize robotics and create a future where advanced
                automation enhances human potential rather than replaces it.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We envision a world where robots are not just tools, but
                collaborative partners that augment human capabilities across
                all facets of life. By 2030, we aim to create a foundation for
                self-improving robotic systems that can adapt to their
                surroundings, learn from human interactions, and contribute
                meaningfully to solving some of humanity's most pressing
                challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card p-6 rounded-lg">
                  <div className="text-yellow-secondary text-3xl font-bold mb-2">
                    2024
                  </div>
                  <div className="text-gray-200 font-medium">
                    Founded in Aachen
                  </div>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <div className="text-primary text-3xl font-bold mb-2">
                    12+
                  </div>
                  <div className="text-gray-200 font-medium">
                    Research Partnerships
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Core</span> Team
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreTeamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary">{member.role}</p>
                  <div className="flex mt-3 space-x-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-12 text-center">
              <span className="text-primary">Community</span> Members
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {communityMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-24 h-24 mb-3 overflow-hidden rounded-full border-2 border-primary/30 group-hover:border-primary transition-colors duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-sm font-medium text-center text-white">
                    {member.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
