import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
