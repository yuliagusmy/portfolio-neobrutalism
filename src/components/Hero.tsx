"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { personalInfo, socialLinks } from "@/lib/data";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
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

function ProfileCardFrame({
  className = "",
  imgSize = "max-w-[240px] md:max-w-[300px]",
}: {
  className?: string;
  imgSize?: string;
}) {
  return (
    <div className={`relative group w-full mx-auto ${className}`}>
      {/* Floating Top Badge */}
      <div className="absolute -top-1.5 -right-1.5 sm:-top-3 sm:-right-3 bg-[#ffdb58] text-black border-1.5 sm:border-2 border-black rounded-md sm:rounded-xl px-1.5 sm:px-2 py-0.5 font-black text-[8px] sm:text-xs shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-3 z-20 hover:scale-105 transition-transform whitespace-nowrap">
        ⚡ Front-End Dev
      </div>

      {/* Floating Bottom Badge */}
      <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-3 sm:-left-3 bg-[#a3e635] text-black border-1.5 sm:border-2 border-black rounded-md sm:rounded-xl px-1.5 sm:px-2 py-0.5 font-black text-[8px] sm:text-xs shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3 z-20 hover:scale-105 transition-transform whitespace-nowrap">
        🚀 React & Next.js
      </div>

      {/* Decorative shadow layer */}
      <div className="absolute inset-0 bg-black rounded-xl sm:rounded-3xl translate-x-1.5 translate-y-1.5 sm:translate-x-2.5 sm:translate-y-2.5 -rotate-1 group-hover:rotate-0 transition-transform"></div>

      {/* Main Card Frame */}
      <div className="relative bg-[#a388ee] border-2 sm:border-3.5 border-black rounded-xl sm:rounded-3xl p-2.5 sm:p-4 md:p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        {/* Header Dots in Neobrutalism Mac Style */}
        <div className="flex items-center justify-between pb-1 sm:pb-2.5 mb-1.5 sm:mb-3 border-b-1.5 sm:border-b-3 border-black">
          <div className="flex items-center gap-1 sm:gap-1.5">
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56] border border-black inline-block"></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e] border border-black inline-block"></span>
            <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27c93f] border border-black inline-block"></span>
          </div>
          <span className="text-[8px] sm:text-[10px] font-mono font-bold bg-white px-1 sm:px-1.5 py-0.5 rounded border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
            profile.tsx
          </span>
        </div>

        {/* Profile Image Frame */}
        <div
          className={`relative w-full aspect-square ${imgSize} mx-auto bg-[#ffdb58] border-1.5 sm:border-3 border-black rounded-lg sm:rounded-2xl overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]`}
        >
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            sizes="(max-width: 640px) 160px, 320px"
            style={{ objectPosition: "center 32%" }}
            className="object-cover scale-110 hover:scale-115 transition-transform duration-300"
            priority
          />
        </div>

        {/* Badges Floating over Card */}
        <div className="mt-1.5 sm:mt-3.5 flex items-center justify-center">
          <div className="bg-white px-1.5 py-0.5 sm:px-3 sm:py-1 border border-black rounded sm:rounded-xl font-black text-[9px] sm:text-xs shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] sm:shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] text-center">
            🎓 Universitas Handayani Makassar
          </div>
        </div>
      </div>
    </div>
  );
}

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
      className="relative pt-12 pb-6 sm:pt-14 sm:pb-8 md:pt-4 md:pb-12 lg:pt-6 lg:pb-14 flex flex-col justify-center overflow-hidden bg-neo-dots"
    >
      {/* Background Decorative Floating Sticker */}
      <div className="absolute bottom-16 right-6 2xl:right-16 hidden xl:block rotate-6 pointer-events-none z-10">
        <span className="px-3.5 py-1.5 font-black text-xs uppercase bg-[#ff90e8] text-black border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] inline-block hover:scale-105 transition-transform">
          🎨 Creative Coder
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-5 md:px-6 w-full relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          {/* Main Text & Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-2.5 sm:gap-4 md:gap-5 text-left">
            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-3 w-full">
              {/* Kicker Greeting */}
              <p className="text-sm sm:text-xl md:text-2xl font-black text-neutral-800">
                Halo, saya
              </p>

              {/* Name Headline Box */}
              <div>
                <h1 className="inline-block max-w-full">
                  <span className="relative inline-block max-w-full bg-[#ffdb58] text-black text-xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black px-2.5 sm:px-5 py-1 sm:py-2 border-2 sm:border-3.5 border-black rounded-lg sm:rounded-2xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] -rotate-1 tracking-tight leading-tight break-words">
                    {personalInfo.name}
                  </span>
                </h1>
              </div>

              {/* Dynamic Typing Role */}
              <div className="pt-0.5 sm:pt-1">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-3">
                  <span className="text-xs sm:text-lg md:text-xl font-extrabold text-neutral-800">
                    Saya seorang
                  </span>
                  <span className="relative inline-block max-w-full bg-[#88aaee] text-black px-2.5 sm:px-4 py-0.5 sm:py-1.5 border-2 sm:border-3 border-black rounded-lg sm:rounded-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-1 text-xs sm:text-xl md:text-2xl lg:text-3xl font-black break-words">
                    {displayText || "\u00A0"}
                    <span className="inline-block w-1 sm:w-2 h-3 sm:h-6 md:h-7 bg-black ml-1 align-middle animate-pulse"></span>
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile-Only Avatar Card: Positioned ABOVE tagline and CTA buttons on mobile */}
            <div className="w-full flex justify-center py-1 my-0.5 lg:hidden">
              <ProfileCardFrame
                className="max-w-[160px] sm:max-w-[220px]"
                imgSize="max-w-[125px] sm:max-w-[170px]"
              />
            </div>

            {/* Tagline / Bio summary: Positioned BELOW photo on mobile */}
            <p className="text-[11px] sm:text-sm md:text-base font-medium text-neutral-800 max-w-xl leading-relaxed bg-white/95 p-2.5 sm:p-4 border-1.5 sm:border-2.5 border-black rounded-lg sm:rounded-xl shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              &ldquo;{personalInfo.tagline}&rdquo;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1 w-full sm:w-auto">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 min-h-[44px] sm:min-h-[48px] bg-[#ffdb58] hover:bg-[#ffc72c] text-black font-black text-xs sm:text-sm md:text-base uppercase tracking-wider border-2.5 sm:border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <span>Lihat Portofolio</span>
                <ArrowRight size={16} className="stroke-[3]" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3.5 min-h-[44px] sm:min-h-[48px] bg-white hover:bg-neutral-100 text-black font-black text-xs sm:text-sm md:text-base uppercase tracking-wider border-2.5 sm:border-3 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <Mail size={16} className="stroke-[2.5]" />
                <span>Hubungi Saya</span>
              </Link>
            </div>

            {/* Social Icons Quick Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
              <span className="w-full sm:w-auto font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-neutral-700">
                Sosial Media:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center bg-white hover:bg-[#88aaee] text-black border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    {iconMap[social.icon] || <Sparkles size={16} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop-Only Avatar Card (Right Column) */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center w-full">
            <ProfileCardFrame
              className="max-w-[320px] md:max-w-[350px]"
              imgSize="max-w-[260px] md:max-w-[290px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
