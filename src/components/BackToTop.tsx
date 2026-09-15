"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Kembali ke atas halaman"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-4 py-2.5 bg-[#ffdb58] hover:bg-[#facc15] text-black font-black text-xs md:text-sm uppercase tracking-wider border-2.5 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <ArrowUp size={16} className="stroke-[3]" />
      <span className="hidden sm:inline">Ke Atas</span>
    </button>
  );
}
