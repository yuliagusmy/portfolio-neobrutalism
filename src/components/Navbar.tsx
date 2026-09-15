"use client";

import React, { useState, useEffect } from "react";
import { personalInfo, navLinks } from "@/lib/data";
import { Menu, X, Sparkles, FileDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "portfolio", "blog", "certificates", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-3 md:p-5 transition-all">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-3.5 bg-white border-3 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" : ""
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 group font-black text-xl md:text-2xl tracking-tight text-black"
        >
          <span className="inline-flex items-center justify-center w-9 h-9 bg-[#bc95d4] border-2 border-black rounded-xl font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 group-hover:scale-105 transition-transform">
            ⚡
          </span>
          <span className="font-extrabold tracking-tight">
            {personalInfo.brand}
            <span className="text-[#a388ee]">.</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-xs font-black uppercase bg-[#88aaee] text-black border-2 border-black rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] -rotate-3">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 font-bold text-sm rounded-xl border-2 transition-all ${
                  isActive
                    ? "bg-[#bc95d4] text-black border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]"
                    : "border-transparent text-neutral-800 hover:border-black hover:bg-[#ffdb58] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href={personalInfo.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 font-black text-xs md:text-sm uppercase tracking-wider bg-[#a388ee] hover:bg-[#88aaee] text-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <FileDown size={16} className="stroke-[2.5]" />
            <span>Download CV</span>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl bg-[#ff90e8] border-2 border-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} className="stroke-[2.5]" /> : <Menu size={22} className="stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 max-w-7xl mx-auto p-4 bg-white border-3 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-2.5 font-bold text-base text-black bg-[#fafafa] hover:bg-[#bc95d4] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            >
              {link.name}
            </a>
          ))}
          <a
            href={personalInfo.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 px-4 py-2.5 font-black text-sm uppercase tracking-wider bg-[#a388ee] text-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            <FileDown size={18} className="stroke-[2.5]" />
            <span>Download CV</span>
          </a>
        </div>
      )}
    </header>
  );
}
