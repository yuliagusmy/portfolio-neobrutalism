"use client";

import React from "react";
import Link from "next/link";
import { personalInfo, navLinks, socialLinks } from "@/lib/data";
import { ArrowUp, Heart, Sparkles } from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
  TikTokIcon,
  FacebookIcon,
} from "./icons";

const iconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon size={18} />,
  linkedin: <LinkedInIcon size={18} />,
  whatsapp: <WhatsAppIcon size={18} />,
  x: <XIcon size={18} />,
  tiktok: <TikTokIcon size={18} />,
  facebook: <FacebookIcon size={18} />,
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t-3.5 border-black overflow-hidden">
      {/* Footer Marquee */}
      <div className="w-full bg-[#ff90e8] border-b-3 border-black py-2.5 overflow-hidden whitespace-nowrap select-none">
        <div className="inline-flex gap-8 items-center font-black text-xs md:text-sm tracking-wider uppercase animate-marquee">
          <span>✨ YULIAGUS M. YUNUS</span>
          <span>⚡ FRONT-END DEVELOPER</span>
          <span>🚀 OPEN FOR OPPORTUNITIES</span>
          <span>🌟 BASED IN MAKASSAR</span>
          <span>✨ YULIAGUS M. YUNUS</span>
          <span>⚡ FRONT-END DEVELOPER</span>
          <span>🚀 OPEN FOR OPPORTUNITIES</span>
          <span>🌟 BASED IN MAKASSAR</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <Link href="/" className="inline-flex items-center gap-2 font-black text-2xl text-black">
              <span className="inline-flex items-center justify-center w-9 h-9 bg-[#bc95d4] border-2 border-black rounded-xl font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ⚡
              </span>
              <span>
                {personalInfo.brand}
                <span className="text-[#a388ee]">.</span>
              </span>
            </Link>
            <p className="text-xs md:text-sm font-medium text-neutral-700 max-w-sm leading-relaxed">
              {personalInfo.name}, Web Developer & Visual Creator berdedikasi membangun karya digital yang berdampak nyata.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 min-h-[40px] flex items-center justify-center font-extrabold text-xs text-black bg-[#faf8ff] hover:bg-[#ffdb58] border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-2.5">
            {socialLinks.slice(0, 4).map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-11 h-11 flex items-center justify-center bg-[#faf8ff] hover:bg-[#88aaee] text-black border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                {iconMap[social.icon]}
              </a>
            ))}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="w-11 h-11 flex items-center justify-center bg-[#a3e635] hover:bg-[#86efac] text-black border-2 border-black rounded-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all cursor-pointer"
              title="Kembali ke Atas"
            >
              <ArrowUp size={18} className="stroke-[3]" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t-2 border-dashed border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-neutral-600">
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-[#ffdb58] text-black border-1.5 border-black rounded-md font-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              Neobrutalism Design
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
