"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function TemporaryContactContent() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-24">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Interested in joining the collective or learning more about our
                work? We'd love to hear from you.
              </p>

              <div className="bg-card p-8 rounded-lg max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">Contact Form</h2>
                <p className="mb-8 text-gray-300">
                  Our contact form system is currently being integrated with our
                  backend. In the meantime, please use our Google Form to get in
                  touch with us.
                </p>

                <a
                  href="https://forms.gle/iS6VU6HwsTe52Ffq7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="default" className="px-8 py-6 text-lg">
                    <span className="flex items-center">
                      Open Contact Form
                      <ArrowUpRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </a>

                <p className="mt-8 text-gray-300">
                  Or simply email us at{" "}
                  <a
                    href="mailto:info@roboticscollective.org"
                    className="text-primary hover:underline"
                  >
                    info@roboticscollective.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
