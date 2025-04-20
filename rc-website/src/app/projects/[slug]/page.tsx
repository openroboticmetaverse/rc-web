// src/app/projects/[slug]/page.tsx

import { Button } from "@/components/ui/button";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Define Promise-based types for props
type PageParams = Promise<{ slug: string }>;
type PageSearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
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
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Robo Collective Nexus`,
    description: project.description,
    keywords: [...project.tags, "robotics", "innovation", "project details"],
  };
}

// Update Page component signature and usage
export default async function ProjectPage({
  params: paramsPromise,
  searchParams: searchParamsPromise,
}: {
  params: PageParams;
  searchParams: PageSearchParams;
}) {
  const params = await paramsPromise; // Await the promise
  const searchParams = await searchParamsPromise; // Await the promise
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with full-width image */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-background" />
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
          <Link href="/projects">
            <Button
              variant="outline"
              className="mb-6 flex items-center gap-2 text-white border-white/20 bg-black/30 backdrop-blur-sm hover:bg-black/50"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Button>
          </Link>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-secondary/80 backdrop-blur-sm px-3 py-1 rounded-full text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            {project.content?.split("\n\n").map((paragraph, idx) => (
              <p key={idx} className="mb-6 text-lg text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 bg-card rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-4">
              Interested in this project?
            </h3>
            <p className="text-gray-300 mb-6">
              Want to learn more about this project or contribute to its
              development? We're always looking for collaborators and fresh
              perspectives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button>Contact Us</Button>
              <Button variant="outline">View Github</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
