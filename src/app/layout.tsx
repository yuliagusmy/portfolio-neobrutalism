import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import BottomNav from "@/components/BottomNav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yuliagus M. Yunus | Portfolio",
  description:
    "Portfolio Yuliagus M. Yunus - Front-End Web Developer, Social Media Designer, dan Typography Enthusiast dari Makassar.",
  keywords: [
    "Yuliagus",
    "Portfolio",
    "Web Developer",
    "Front-End",
    "Designer",
    "Makassar",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased bg-[#e0d1ff] text-black selection:bg-[#ffdb58] selection:text-black flex flex-col pb-20 md:pb-0">
        <Navbar />
        <main className="flex-1 pt-1 sm:pt-4 md:pt-24">{children}</main>
        <Footer />
        <BackToTop />
        <BottomNav />
      </body>
    </html>
  );
}
