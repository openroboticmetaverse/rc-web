import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Home, Users, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found - Robo Collective Nexus",
  description: "The page you're looking for couldn't be found",
};

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 overflow-hidden">
      <div className="z-10 animate-fade-in">
        <h1 className="text-8xl font-bold mb-2 text-primary">404</h1>
        <h2 className="text-3xl font-semibold mb-6">System Malfunction</h2>

        <div className="max-w-lg mx-auto mb-10 space-y-4">
          <p className="text-xl text-gray-300">
            Oops! Our robots seem to have misplaced this page.
          </p>
          <p className="text-lg text-gray-400 italic mb-2">
            "I searched my entire memory bank, but this URL doesn't compute."
          </p>
          <p className="text-lg text-yellow-secondary">
            Join and help us improve the website!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/80 text-white px-6 py-5 text-lg rounded-3xl"
            >
              <Home className="mr-2 h-5 w-5" /> Return to Base
            </Button>
          </Link>
          <Link href="/contact?source=404&action=join">
            <Button
              variant="outline"
              className="border-yellow-secondary bg-yellow-secondary/10 text-yellow-secondary hover:bg-yellow-secondary/20 px-6 py-5 text-lg rounded-3xl"
            >
              <Users className="mr-2 h-5 w-5" /> Join Now!
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
