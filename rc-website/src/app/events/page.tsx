"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";
import { useState, useEffect } from "react";

type EventStatus = "all" | "upcoming" | "past" | "recurring";

const StatusBadge = ({ status }: { status: string }) => {
  const getBadgeClasses = () => {
    switch (status) {
      case "upcoming":
        return "bg-green-500/20 text-green-500 border-green-500";
      case "past":
        return "bg-blue-500/20 text-blue-500 border-blue-500";
      case "recurring":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500";
      default:
        return "bg-gray-500/20 text-gray-500 border-gray-500";
    }
  };

  return (
    <span
      className={`text-xs px-3 py-1 rounded-full border ${getBadgeClasses()} font-semibold uppercase tracking-wider`}
    >
      {status}
    </span>
  );
};

const EventCard = ({ event }: { event: (typeof events)[0] }) => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg flex flex-col h-full">
      <Link href={`/events/${event.slug}`}>
        <div className="h-48 overflow-hidden relative">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <StatusBadge status={event.status} />
          </div>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/events/${event.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-primary hover:text-primary/80">
            {event.title}
          </h3>
        </Link>
        <p className="text-gray-300 mb-4 flex-grow">{event.description}</p>
        
        <div className="flex items-center mb-3">
          <Calendar className="text-primary h-5 w-5 mr-2" />
          <span className="text-sm text-gray-300">
            {event.date} | {event.time}
          </span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {event.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-secondary px-2 py-1 rounded-full text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between mt-auto">
          <Link href={`/events/${event.slug}`}>
            <Button
              variant="ghost"
              className="text-primary p-0 group hover:bg-transparent hover:no-underline"
            >
              Learn More{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<EventStatus>("all");
  const [filteredEvents, setFilteredEvents] = useState(events);

  // Update filtered events whenever the active filter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) => event.status === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Events</span>
              </h1>
              <p className="text-lg text-gray-300">
                Join us at our events to connect with the robotics community, share knowledge,
                and stay at the forefront of robotics innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button
                  variant={activeFilter === "all" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "all"
                      ? "border-primary text-primary"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                  onClick={() => setActiveFilter("all")}
                >
                  All Events
                </Button>
                <Button
                  variant={activeFilter === "upcoming" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "upcoming"
                      ? "border-green-500 text-green-500"
                      : "hover:bg-green-500/10 hover:text-green-500"
                  }`}
                  onClick={() => setActiveFilter("upcoming")}
                >
                  Upcoming
                </Button>
                <Button
                  variant={activeFilter === "past" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "past"
                      ? "border-blue-500 text-blue-500"
                      : "hover:bg-blue-500/10 hover:text-blue-500"
                  }`}
                  onClick={() => setActiveFilter("past")}
                >
                  Past
                </Button>
                <Button
                  variant={activeFilter === "recurring" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "recurring"
                      ? "border-yellow-500 text-yellow-500"
                      : "hover:bg-yellow-500/10 hover:text-yellow-500"
                  }`}
                  onClick={() => setActiveFilter("recurring")}
                >
                  Recurring
                </Button>
              </div>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-400">
                  No events found with the selected filter
                </h3>
                <p className="mt-2 text-gray-500">
                  Try another filter or view all events
                </p>
              </div>
            )}

            <div className="mt-24 bg-card rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Want to Host an Event with Us?
              </h2>
              <p className="text-gray-300 mb-6">
                We're always looking for collaborations and opportunities to expand our 
                community events. Reach out to discuss how we can work together.
              </p>
              <Link href="/contact">
                <Button 
                  variant="default" 
                  className="px-8 py-6 text-lg rounded-3xl"
                  size="lg"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}