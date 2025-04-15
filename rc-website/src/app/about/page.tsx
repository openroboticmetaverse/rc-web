import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Robo Collective Nexus",
  description: "Learn about the Robo Collective Nexus team, mission, and values",
  keywords: ["about us", "robotics team", "mission", "values", "history"],
};

const teamMembers = [
    {
      id: 1,
      name: "Dr. Elena Kowalski",
      role: "Lead Engineer & Founder",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "AI System Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Robotics Hardware Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      name: "Alexander Novak",
      role: "Computer Vision Engineer",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

export default function AboutPage()  {
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
                At the Robotics Collective, our mission is to accelerate the development of intelligent robotic systems that harmoniously interact with humans and their environment. We believe in the power of collaborative innovation and open-source technologies to democratize robotics and create a future where advanced automation enhances human potential rather than replaces it.
              </p>
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Our <span className="text-primary">Vision</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We envision a world where robots are not just tools, but collaborative partners that augment human capabilities across all facets of life. By 2030, we aim to create a foundation for self-improving robotic systems that can adapt to their surroundings, learn from human interactions, and contribute meaningfully to solving some of humanity's most pressing challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-card p-6 rounded-lg">
                  <div className="text-yellow-secondary text-3xl font-bold mb-2">2024</div>
                  <div className="text-gray-200 font-medium">Founded in Aachen</div>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <div className="text-primary text-3xl font-bold mb-2">12+</div>
                  <div className="text-gray-200 font-medium">Research Partnerships</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Our <span className="text-primary">Team</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-card rounded-lg overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg hover:shadow-primary/20">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      
    </div>
  );
};