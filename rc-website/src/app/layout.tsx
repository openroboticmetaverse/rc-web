import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Providers } from "./providers";
import { TooltipProvider } from "./tooltip-provider";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Robo Collective Nexus",
  description: "A community of robotics enthusiasts and professionals",
  keywords: ["robotics", "community", "tech", "projects", "meetups"],
  authors: [{ name: "Robo Collective Nexus Team" }],
  metadataBase: new URL("https://roboticscollective.org"),
  openGraph: {
    title: "Robo Collective Nexus",
    description: "A community of robotics enthusiasts and professionals",
    url: "https://robocollectivenexus.org",
    siteName: "Robo Collective Nexus",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="font-spaceGrotesk">
        <Providers>
          <TooltipProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}