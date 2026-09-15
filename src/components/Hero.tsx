"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from "lucide-react";
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

export default function Hero() {
  const [currentTextIdx, setCurrentTextIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = personalInfo.typingTexts[currentTextIdx];
    const speed = isDeleting ? 60 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIdx((prev) => (prev + 1) % personalInfo.typingTexts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-12 md:pt-36 md:pb-16 flex flex-col justify-center overflow-hidden bg-neo-dots"
    >
      {/* Background Decorative Badges & Floating Stickers */}
      <div className="absolute top-24 left-6 md:left-14 hidden sm:block -rotate-12 pointer-events-none z-10">
        <span className="px-3.5 py-1.5 font-black text-xs uppercase bg-[#ffdb58] text-black border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block hover:scale-105 transition-transform">
          👋 Hello World!
        </span>
      </div>
      <div className="absolute top-36 right-8 md:right-16 hidden lg:block rotate-6 pointer-events-none z-10">
        <span className="px-3.5 py-1.5 font-black text-xs uppercase bg-[#ff90e8] text-black border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block">
          ✦ Crafting Web Experiences
        </span>
      </div>
      <div className="absolute bottom-28 left-10 hidden lg:block rotate-3 pointer-events-none z-10">
      </div>
      <div className="absolute bottom-24 right-8 md:right-20 hidden sm:block -rotate-6 pointer-events-none z-10">
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#ffffff] border-2.5 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] font-bold text-xs md:text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-extrabold text-black">Available for Projects & Collaboration</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-800">
                  Halo, saya
                </span>
                <span className="relative inline-block bg-[#ffdb58] text-black text-4xl sm:text-5xl md:text-6xl font-black px-3.5 sm:px-4 py-1 md:py-1.5 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
                  {personalInfo.name}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight leading-[1.2]">
                <span className="block text-xl sm:text-2xl md:text-3xl font-black text-neutral-800">
                  Saya seorang
                </span>
                <span className="block mt-2.5 sm:mt-3">
                  <span className="relative inline-block bg-[#88aaee] text-black px-4 py-1 md:py-1.5 border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1">
                    {displayText || "\u00A0"}
                    <span className="inline-block w-1.5 h-8 md:h-11 bg-black ml-1.5 align-middle animate-pulse"></span>
                  </span>
                </span>
              </h1>
            </div>

            {/* Tagline / Bio summary */}
            <p className="text-base md:text-lg font-medium text-neutral-800 max-w-xl leading-relaxed bg-white/80 p-4 border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>



            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#ffdb58] hover:bg-[#ffc72c] text-black font-black text-sm md:text-base uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight size={18} className="stroke-[3]" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-neutral-100 text-black font-black text-sm md:text-base uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <Mail size={18} className="stroke-[2.5]" />
                <span>Hubungi Saya</span>
              </a>
            </div>

            {/* Social Icons Quick Bar */}
            <div className="flex items-center gap-2.5 pt-3">
              <span className="font-extrabold text-xs uppercase tracking-wider text-neutral-700 mr-1">
                Sosial Media:
              </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 bg-white hover:bg-[#88aaee] text-black border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  {iconMap[social.icon] || <Sparkles size={18} />}
                </a>
              ))}
            </div>
          </div>

          {/* Right Avatar Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Tape sticker at top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 tape-badge font-mono text-[11px] font-black uppercase text-black z-30 border border-black rotate-[-2deg] rounded-sm">
                ★ AGUS.DEV ★
              </div>

              {/* Floating Top Badge */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-[#ffdb58] text-black border-2.5 border-black rounded-xl px-3 py-1 font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-6 z-20 hover:scale-110 transition-transform">
                ⚡ Front-End Dev
              </div>

              {/* Floating Bottom Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-[#a3e635] text-black border-2.5 border-black rounded-xl px-3 py-1 font-black text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-6 z-20 hover:scale-110 transition-transform">
                🚀 React & Next.js
              </div>

              {/* Decorative shadow layer */}
              <div className="absolute inset-0 bg-black rounded-3xl translate-x-3 translate-y-3 -rotate-2 group-hover:rotate-0 transition-transform"></div>

              {/* Main Card Frame */}
              <div className="relative bg-[#a388ee] border-3.5 border-black rounded-3xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                {/* Header Dots in Neobrutalism Mac Style */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b-3 border-black">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ff5f56] border-2 border-black inline-block"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e] border-2 border-black inline-block"></span>
                    <span className="w-3.5 h-3.5 rounded-full bg-[#27c93f] border-2 border-black inline-block"></span>
                  </div>
                </div>

                {/* Profile Image Frame */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto bg-[#ffdb58] border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Image
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Badges Floating over Card */}
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="bg-white px-3 py-1.5 border-2 border-black rounded-xl font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    🎓 Universitas Handayani Makassar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Tech Marquee Ribbon */}

    </section>
  );
}
