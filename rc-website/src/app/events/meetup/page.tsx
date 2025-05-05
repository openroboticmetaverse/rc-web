import { Calendar, MapPin, Users, Clock } from "lucide-react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { getEventBySlug } from "@/data/events";

export const metadata: Metadata = {
  title: "Robotics Community Meetup | Robotics Collective",
  description: "Join our robotics meetups and events in your area",
  keywords: [
    "robotics meetups",
    "events",
    "workshops",
    "networking",
    "community",
  ],
};

/* Gallery images for the meetup */
const galleryImages = [
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg",
    span: "col-span-2 row-span-2",
    alt: "orom logo picture meetup #1",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684646-3_h250bh.jpg",
    span: "col-span-2 row-span-2",
    alt: "orom logo picture meetup #2",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137781/openroboverse/Meetup/meetup_back_cjvymg.jpg",
    span: "col-span-2 row-span-1",
    alt: "Orom stand",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727137776/openroboverse/Meetup/meetup_pre_up1_fohztd.jpg",
    span: "col-span-2 row-span-1",
    alt: "Adience Elysee",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684504-2_c3oalr.jpg",
    span: "col-span-1 row-span-1",
    alt: "WZL Pitch",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1727138102/openroboverse/Meetup/meetup_pre_up3_ojmush.jpg",
    span: "col-span-1 row-span-1",
    alt: "Vectioneer stand",
  },
  {
    src: "https://res.cloudinary.com/dilan3qfq/image/upload/v1745223313/1730150684425_qqtque.jpg",
    span: "col-span-2 row-span-1",
    alt: "Siemens Pitch",
  },
];

export default function MeetupPage() {
  // Get the meetup event data from our events database
  const event = getEventBySlug("meetup");

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
            <img
              src="https://res.cloudinary.com/dilan3qfq/image/upload/v1727137785/openroboverse/Meetup/meetup_logo_xt2pev.jpg"
              alt="Robotics Meetup"
              className="w-full h-full object-cover opacity-80 z-0"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Robotics Community{" "}
                <span className="text-primary">Meetup</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Our Robotics Community Meetups are designed to foster
                collaboration, knowledge exchange, and networking within the
                local robotics community. Join us to connect with like-minded
                enthusiasts, share ideas, and stay at the forefront of robotics
                innovation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                  <Calendar className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Date</h3>
                  <p className="text-gray-300">{event.date}</p>
                </div>
                <div className="bg-card p-6 rounded-lg flex items-center justify-center flex-col">
                  <Clock className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Time</h3>
                  <p className="text-gray-300">{event.time}</p>
                </div>
                <a
                  href={event.location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card p-6 rounded-lg flex items-center justify-center flex-col hover:bg-card/80 transition-colors"
                >
                  <MapPin className="text-primary h-8 w-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">{event.location.name}</p>
                  <p className="text-gray-300">{event.location.city}</p>
                </a>
              </div>

              <div className="mt-8 inline-flex items-center justify-center">
                <span className="bg-red-500/20 text-red-500 border border-red-500 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                  Past Event
                </span>
              </div>
              
              <div className="mt-8">
                <Link href="/events">
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-lg rounded-3xl"
                    size="lg"
                  >
                    Browse Upcoming Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About the Meetup */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                About the <span className="text-primary">Event</span>
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="bg-card p-6 rounded-md">
                  <span className="text-primary font-medium">Networking</span>{" "}
                  opportunities with students and professionals
                </li>
                <li className="bg-card p-6 rounded-md">
                  <span className="text-primary font-medium">
                    Short Pitches
                  </span>{" "}
                  and interactive sessions showcasing latest robotic projects
                </li>
                <li className="bg-card p-6 rounded-md">
                  <span className="text-primary font-medium">
                    Engaging Discussions
                  </span>{" "}
                  on cutting-edge robotics topics
                </li>
                <li className="bg-card p-6 rounded-md">
                  <span className="text-primary font-medium">
                    Collaborative Workshops
                  </span>{" "}
                  for problem-solving and innovation
                </li>
                <li className="bg-card p-6 rounded-md col-span-1 md:col-span-2">
                  Free{" "}
                  <span className="text-primary font-medium">
                    Food & Drinks
                  </span>{" "}
                  in a lively atmosphere
                </li>
              </ul>

              <div className="mt-12 bg-card/50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-center">
                  Interested in <span className="text-primary">Future Events</span>?
                </h3>
                <p className="text-lg text-gray-300 mb-6">
                  Check out our upcoming Info Session and Hackaton events. Don't miss these opportunities to connect 
                  with experts, gain insights into the latest advancements, and grow your professional network.
                </p>
                <div className="flex justify-center">
                  <Link href="/events">
                    <Button variant="default">View Upcoming Events</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 md:py-24 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Event <span className="text-primary">Gallery</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`overflow-hidden rounded-lg ${image.span}`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}