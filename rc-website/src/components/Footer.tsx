import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-start justify-between h-25">
          {/* Logo and Description - Left */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/logo.svg" 
                alt="Robotics Collective Logo" 
                width={48} 
                height={48} 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-sm max-w-xs">
              A community of robotics enthusiasts building the future together.
            </p>
          </div>
          
          {/* Connect Section - Middle */}
          <div className="text-center">
            <div className="flex space-x-4 mt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full" aria-label="Discord">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Navigation - Right */}
          <div>
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/meetup" className="hover:text-white transition-colors">
                  Meetup
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Robotics Collective e.V. | All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
