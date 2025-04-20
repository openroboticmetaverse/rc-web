import Link from "next/link";
import Image from "next/image";
import { Twitter, Github, Linkedin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between h-25">
          {/* Logo - Left */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/logo.svg" 
                alt="Robotics Collective Logo" 
                width={48} 
                height={48} 
                className="h-12 w-auto"
              />
              <Image 
                src="/logotext.svg" 
                alt="Robotics Collective Text Logo" 
                width={150} 
                height={48} 
                className="h-12 w-auto ml-2"
              />
            </Link>
          </div>
          
          {/* Navigation - Right */}
          <div className="text-right">
            <ul className="space-y-2 mt-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
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
          {/* Social Media Icons - Bottom Left */}
          <div className="flex space-x-3 mb-4 md:mb-0">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-1.5 hover:bg-gray-800 rounded-full" aria-label="Discord">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
          
          <p className="text-sm text-center md:text-left">
            © {new Date().getFullYear()} Robotics Collective e.V. | All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/imprint" className="text-sm hover:text-white transition-colors">
              Imprint
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
