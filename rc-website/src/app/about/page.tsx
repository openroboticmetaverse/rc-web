import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Robotics Collective",
  description: "Learn about the Robotics Collective team, mission, and vision",
  keywords: ["about us", "robotics team", "mission", "values", "history"],
};

const coreTeamMembers = [
  {
    id: 1,
    name: "Amine Kharrat",
    role: "Lead",
    description:
      "Specializes in robot perception systems with 15+ years of industry experience across major robotics labs.",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/t_reduced-size/v1702467097/openroboverse/team/amine_ea0ijk.jpg",
    linkedin: "https://linkedin.com/in/aminekharrat",
    github: "https://github.com/AmineKharrat",
    email: "amine@roboticscollective.org",
    isBoard: true,
  },
  {
    id: 2,
    name: "Karim Siala",
    role: "Dev Lead",
    description:
      "Former Google AI researcher who leads our machine learning infrastructure and decision-making systems.",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/karim_kddxb5.jpg",
    linkedin: "https://linkedin.com/in/karimsiala",
    github: "https://github.com/karimsiala",
    email: "karim@roboticscollective.org",
    isBoard: true,
  },
  {
    id: 3,
    name: "Jan Strehl",
    role: "Orga",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/jan_v4l9n0.jpg",
    linkedin: "https://linkedin.com/in/janstrehl",
    github: "https://github.com/strehljd",
    isBoard: false,
  },
  {
    id: 4,
    name: "Edilbert Christhuraj",
    role: "Dev",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/edi_jovhhj.jpg",
    linkedin: "https://linkedin.com/in/echristhuraj",
    github: "https://github.com/19ec94",
    isBoard: false,
  },
  {
    id: 5,
    name: "Siddarth S. Pillai",
    role: "Dev",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/kikbby0numfyxnzghmfe",
    linkedin: "https://linkedin.com/in/siddarthspillai",
    github: "https://github.com/siddarth-s-pillai",
    isBoard: false,
  },
  {
    id: 6,
    name: "Youssef",
    role: "Dev",
    image:
      "https://res.cloudinary.com/dilan3qfq/image/upload/v1702467105/openroboverse/team/youssef_myif9n.jpg",
    linkedin: "https://linkedin.com/in/youssef-aloulou-7b1443162/",
    github: "https://github.com/openroboticmetaverse",
    isBoard: false,
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

const partnerOrganizations = [
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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
              <span className="text-primary">About</span>
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

        <div className="max-w-3xl mx-auto my-20 border-t border-primary/20"></div>
        {/* Leadership Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Leadership</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {coreTeamMembers.slice(0, 2).map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div className="w-40 h-40 mb-6 overflow-hidden rounded-full border-3 border-yellow-secondary group-hover:border-primary transition-colors duration-300 relative shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary text-lg mb-4">{member.role}</p>
                  <p className="text-gray-300 text-center max-w-sm mb-4">
                    {member.description}
                  </p>
                  <div className="flex mt-3 space-x-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-6 h-6" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* Join Leadership Team CTA */}
              <div className="flex items-center justify-center">
                <div className="bg-card/70 p-8 rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/5 h-full flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-3">
                      Are you a{" "}
                      <span className="text-primary">visionary leader</span>?
                    </h3>
                    <p className="text-gray-300 mb-6">
                      We're growing the Robotics Collective leadership team. If
                      you thrive on shaping strategy, mentoring talent, and
                      building open‑source robotics, we'd love to meet you.
                    </p>
                    <a
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-primary hover:bg-primary/90 transition-colors duration-300"
                    >
                      Join Our Team
                    </a>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTeamMembers.slice(2).map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center group transition-all duration-300 hover:translate-y-[-4px]"
                >
                  <div
                    className={`w-32 h-32 mb-4 overflow-hidden rounded-full border-2 ${
                      member.isBoard
                        ? "border-yellow-secondary"
                        : "border-primary/30"
                    } group-hover:border-primary transition-colors duration-300 relative`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {member.isBoard && (
                      <div
                        className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-secondary rounded-full flex items-center justify-center shadow-md"
                        title="Board Member"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-black"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary">{member.role}</p>
                  <div className="flex mt-3 space-x-4">
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors"
                        aria-label={`${member.name}'s GitHub profile`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Visual separator between core team and community members */}
            <div className="max-w-3xl mx-auto my-20 border-t border-primary/20"></div>

            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
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

        <div className="max-w-3xl mx-auto my-20 border-t border-primary/20"></div>

        {/* Partner Organizations Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="text-primary">Partner</span> Organizations
            </h2>

            {/* Display partner organizations logos */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              {partnerOrganizations.map((org) => (
                <a
                  key={org.id}
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-6 bg-card/30 rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
                  aria-label={org.name}
                >
                  <img
                    src={org.logo}
                    alt={org.name}
                    className="max-h-16 max-w-full"
                  />
                </a>
              ))}
            </div> */}

            {/* Join as Organization CTA */}
            <div className="mt-16 max-w-3xl mx-auto bg-card/70 p-8 rounded-lg border border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-3">
                  Become a Partner Organization
                </h3>
                <p className="text-gray-300 mb-6">
                  Interested in collaborating with Robotics Collective? We're
                  always looking to partner with forward-thinking organizations
                  in academia, research, and industry to advance robotics
                  innovation.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-primary hover:bg-primary/90 transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
