"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { getTeamMemberById } from "@/data/team";
import Image from "next/image";
import { useState, useEffect } from "react";

// Metadata is now exported from metadata.ts file

type ProjectStatus = "all" | "ongoing" | "finished" | "planned";

const StatusBadge = ({ status }: { status: string }) => {
  const getBadgeClasses = () => {
    switch (status) {
      case "ongoing":
        return "bg-green-500/20 text-green-500 border-green-500";
      case "finished":
        return "bg-blue-500/20 text-blue-500 border-blue-500";
      case "planned":
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

const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => {
  const pointOfContact = getTeamMemberById(project.pointOfContactId);

  return (
    <div className="bg-card rounded-3xl overflow-hidden group transition-all duration-300 hover:translate-y-[-4px] hover:shadow-lg flex flex-col h-full">
      <Link href={`/projects/${project.slug}`}>
        <div className="h-48 overflow-hidden relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <StatusBadge status={project.status} />
          </div>
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold mb-2 text-primary hover:text-primary/80">
            {project.title}
          </h3>
        </Link>
        <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-secondary px-2 py-1 rounded-full text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {pointOfContact && (
          <div className="flex items-center mb-4">
            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
              <img
                src={pointOfContact.image}
                alt={pointOfContact.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xs text-gray-300">
              Lead: {pointOfContact.name}
            </span>
          </div>
        )}

        <div className="flex justify-between mt-auto">
          <Link href={`/projects/${project.slug}`}>
            <Button
              variant="ghost"
              className="text-primary p-0 group hover:bg-transparent hover:no-underline"
            >
              Learn More{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>

          <div className="flex space-x-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full"
                >
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {project.links?.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 rounded-full"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Update filtered projects whenever the active filter changes
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.status === activeFilter)
      );
    }
  }, [activeFilter]);

  // Helper function to determine button style
  const getButtonStyle = (status: ProjectStatus) => {
    return activeFilter === status
      ? "variant-outline bg-primary/20 text-primary border-primary"
      : "";
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-primary">Projects</span>
              </h1>
              <p className="text-lg text-gray-300">
                Discover our flagship initiatives pushing the boundaries of
                what's possible in robotics and artificial intelligence.
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
                  All Projects
                </Button>
                <Button
                  variant={activeFilter === "ongoing" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "ongoing"
                      ? "border-green-500 text-green-500"
                      : "hover:bg-green-500/10 hover:text-green-500"
                  }`}
                  onClick={() => setActiveFilter("ongoing")}
                >
                  Ongoing
                </Button>
                <Button
                  variant={activeFilter === "finished" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "finished"
                      ? "border-blue-500 text-blue-500"
                      : "hover:bg-blue-500/10 hover:text-blue-500"
                  }`}
                  onClick={() => setActiveFilter("finished")}
                >
                  Finished
                </Button>
                <Button
                  variant={activeFilter === "planned" ? "outline" : "ghost"}
                  className={`rounded-full ${
                    activeFilter === "planned"
                      ? "border-yellow-500 text-yellow-500"
                      : "hover:bg-yellow-500/10 hover:text-yellow-500"
                  }`}
                  onClick={() => setActiveFilter("planned")}
                >
                  Planned
                </Button>
              </div>
            </div>

            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-400">
                  No projects found with the selected filter
                </h3>
                <p className="mt-2 text-gray-500">
                  Try another status or view all projects
                </p>
              </div>
            )}

            <div className="mt-24 bg-card rounded-lg p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Have an Idea for a Project?
              </h2>
              <p className="text-gray-300 mb-6">
                We're always looking for new collaborations and innovative ideas
                to push the boundaries of robotics.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-yellow-secondary bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary/20 px-8 py-6 text-lg rounded-3xl"
                >
                  Propose a Project
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
