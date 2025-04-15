import { Calendar, MapPin, Users } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Meetups - Robo Collective Nexus",
  description: "Join our robotics meetups and events in your area",
  keywords: ["robotics meetups", "events", "workshops", "networking", "community"],
};

const galleryImages = [
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  ];

export default function MeetupPage() {
    
    return (
      <div className="min-h-screen bg-background">
        
        <div className="">
          {/* Hero Section */}
          <section className="relative py-16 md:py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-0">
              <div className="absolute inset-0 bg-card/30 backdrop-blur-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
                alt="Robotics Meetup"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Robotics Community <span className="text-primary">Meetup</span>
                </h1>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  Connect with the robotic community in Aachen at our biannual event for innovation, collaboration, and inspiration.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                  <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                    <Calendar className="text-primary h-8 w-8 mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Next Event</h3>
                    <p className="text-gray-300">October 15-16, 2025</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                    <MapPin className="text-primary h-8 w-8 mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-300">TechHub Aachen</p>
                  </div>
                  <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                    <Users className="text-primary h-8 w-8 mb-3" />
                    <h3 className="text-lg font-semibold mb-1">Participants</h3>
                    <p className="text-gray-300">200+ Expected</p>
                  </div>
                </div>
                
                <Button className="mt-12 bg-yellow-secondary hover:bg-yellow-secondary/90 text-black font-medium px-8 py-6 text-lg">
                  Register for the Event
                </Button>
              </div>
            </div>
          </section>
          
          {/* About the Meetup */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8">
                  About the <span className="text-primary">Meetup</span>
                </h2>
                <div className="text-lg text-gray-300 space-y-6">
                  <p>
                    The Robotics Collective Meetup is a biannual gathering that brings together enthusiasts, researchers, engineers, and industry professionals passionate about advancing the field of robotics.
                  </p>
                  <p>
                    Our event features keynote presentations from leading experts, hands-on workshops, project showcases, and ample networking opportunities to foster collaboration and innovation within the robotics community in Aachen and beyond.
                  </p>
                  <p>
                    Whether you're a seasoned professional or just starting your journey in robotics, our meetup provides a platform to learn, share, and connect with like-minded individuals who are shaping the future of intelligent machines.
                  </p>
                </div>
                
                <h3 className="text-2xl font-semibold mt-12 mb-6">What to Expect</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="bg-card p-4 rounded-md">
                    <span className="text-primary font-medium">Expert Talks</span> on cutting-edge research and industry trends
                  </li>
                  <li className="bg-card p-4 rounded-md">
                    <span className="text-primary font-medium">Interactive Workshops</span> for hands-on learning
                  </li>
                  <li className="bg-card p-4 rounded-md">
                    <span className="text-primary font-medium">Project Showcases</span> from academic and industry teams
                  </li>
                  <li className="bg-card p-4 rounded-md">
                    <span className="text-primary font-medium">Networking Sessions</span> to connect with peers and potential collaborators
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Gallery */}
          <section className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Past <span className="text-primary">Events</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg aspect-square">
                    <img 
                      src={image} 
                      alt={`Past event ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        
      </div>
    );
  };