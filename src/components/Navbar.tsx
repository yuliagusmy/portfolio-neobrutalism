"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { personalInfo, navLinks } from "@/lib/data";
import { FileDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-2.5 sm:p-3 md:p-5 transition-all pointer-events-none">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-end md:justify-between transition-all md:px-6 md:py-3.5 md:bg-white md:border-3 md:border-black md:rounded-2xl md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
          scrolled ? "md:bg-white/95 md:backdrop-blur-md md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" : ""
        }`}
      >
        {/* Brand Logo: Floating pill on mobile, inline brand on desktop */}
        <Link
          href="/"
          className="pointer-events-auto inline-flex items-center gap-2 group font-black text-base sm:text-lg md:text-2xl tracking-tight text-black bg-white border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] px-3 py-1.5 md:p-0 md:bg-transparent md:border-0 md:shadow-none hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
        >
          <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-[#bc95d4] border-2 border-black rounded-lg sm:rounded-xl font-black text-sm sm:text-base md:text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 group-hover:scale-105 transition-transform">
            ⚡
          </span>
          <span className="font-extrabold tracking-tight">
            {personalInfo.brand}
            <span className="text-[#a388ee]">.</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-black uppercase bg-[#88aaee] text-black border-2 border-black rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="pointer-events-auto hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 font-bold text-sm rounded-xl border-2 transition-all ${
                  isActive
                    ? "bg-[#bc95d4] text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]"
                    : "border-transparent text-neutral-800 hover:border-black hover:bg-[#ffdb58] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button on Desktop */}
        <div className="pointer-events-auto hidden md:flex items-center gap-2 sm:gap-2.5">
          <a
            href={personalInfo.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 font-black text-xs md:text-sm uppercase tracking-wider bg-[#a388ee] hover:bg-[#88aaee] text-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <FileDown size={16} className="stroke-[2.5]" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </header>
  );
}
