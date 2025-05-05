"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActivePath = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Projects",
      href: "/projects",
    },
    {
      name: "Events",
      href: "/events",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobile 
          ? "backdrop-blur-md" 
          : isScrolled
            ? "backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Robotics Collective Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <Image
                src="/logotext.svg"
                alt="Robotics Collective"
                width={150}
                height={30}
                className={`h-8 w-auto transition-opacity duration-300ms ${
                  isScrolled || mobileMenuOpen
                    ? "opacity-0 max-w-[150-px]"
                    : "opacity-100 max-w-[150px]"
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActivePath("/")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  isActivePath(item.href)
                    ? "text-white font-medium glow"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact">
              <Button
                variant="default"
              >
                Join Us
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md">
          <div className="container mx-auto px-4 pt-2 pb-4 space-y-4">
            <Link
              href="/"
              className={`block py-2 transition-colors ${
                isActivePath("/")
                  ? "text-white font-medium glow"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 transition-colors ${
                  isActivePath(item.href)
                    ? "text-white font-medium glow"
                    : "text-gray-300 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
