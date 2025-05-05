// src/app/events/[slug]/page.tsx

import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { getEventBySlug, getAllEventSlugs } from "@/data/events";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define Promise-based types for props
type PageParams = Promise<{ slug: string }>;
type PageSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export async function generateStaticParams() {
  const slugs = getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Update generateMetadata signature and usage
export async function generateMetadata({
  params: paramsPromise,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const params = await paramsPromise; // Await the promise
  const { slug } = params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} - Robotics Collective`,
    description: event.description,
    keywords: [...event.tags, "event", "robotics", "community"],
  };
}

// Update Page component signature and usage
export default async function EventPage({
  params: paramsPromise,
}: {
  params: PageParams;
}) {
  const params = await paramsPromise; // Await the promise
  const { slug } = params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background backdrop-blur-[1px] z-10"></div>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover opacity-80 z-0"
            />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {event.title.split(" ").map((word, index, array) => (
                  <span key={index}>
                    {index === array.length - 1 ? (
                      <span className="text-primary">{word}</span>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                {event.description}
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

              {event.registrationLink && (
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button
                    variant="default"
                    className="px-8 py-6 text-lg rounded-3xl mt-3"
                    size="lg"
                  >
                    Register Now
                  </Button>
                </a>
              )}
            </div>
          </div>
        </section>

        {/* About the Event */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                About the <span className="text-primary">Event</span>
              </h2>
              
              {event.content && (
                <div className="text-lg text-gray-300 mb-12">
                  {event.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-6">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Display tags in a grid */}
              {event.tags && event.tags.length > 0 && (
                <div className="mt-12 bg-card/50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-center">
                    Event <span className="text-primary">Topics</span>
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {event.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-sm bg-secondary px-3 py-1 rounded-full text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Gallery */}
        {event.galleryImages && event.galleryImages.length > 0 && (
          <section className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Event <span className="text-primary">Gallery</span>
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-4">
                {event.galleryImages.map((image, index) => (
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
        )}

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                Join Us at This Event
              </h2>
              <p className="text-gray-300 mb-6">
                Don't miss this opportunity to connect with experts, gain valuable insights,
                and grow your professional network in robotics.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {event.registrationLink && (
                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      variant="default" 
                      className="px-8 py-6 text-lg rounded-3xl"
                      size="lg"
                    >
                      Register Now
                    </Button>
                  </a>
                )}
                <Link href="/events">
                  <Button 
                    variant="outline" 
                    className="px-8 py-6 text-lg rounded-3xl"
                    size="lg"
                  >
                    View All Events
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </div>
    </div>
  );
}