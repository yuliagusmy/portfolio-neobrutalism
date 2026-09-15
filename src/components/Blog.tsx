"use client";

import React from "react";
import Image from "next/image";
import { blogPosts } from "@/lib/data";
import { BookOpen, ArrowUpRight, Sparkles } from "lucide-react";

const BLOG_THEMES = [
  {
    headerBg: "bg-[#ffdb58]",
    footerBg: "bg-[#fffdf0]",
    badge: "#01 ARTIKEL",
    badgeBg: "bg-[#ff90e8]",
    btnBg: "bg-[#ffdb58] hover:bg-[#ffe680]",
  },
  {
    headerBg: "bg-[#88aaee]",
    footerBg: "bg-[#f0f5ff]",
    badge: "#02 ARTIKEL",
    badgeBg: "bg-[#ffdb58]",
    btnBg: "bg-[#88aaee] hover:bg-[#a5c2ff]",
  },
  {
    headerBg: "bg-[#a3e635]",
    footerBg: "bg-[#f4fde6]",
    badge: "#03 ARTIKEL",
    badgeBg: "bg-[#bc95d4]",
    btnBg: "bg-[#a3e635] hover:bg-[#bcf257]",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 relative bg-[#fffdfa] border-t-3.5 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-4 py-1.5 bg-[#ff90e8] text-black border-2.5 border-black rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-[-1deg]">
            Tulisan & Opini
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Artikel & <span className="bg-[#ffdb58] px-3 py-0.5 border-2.5 border-black rounded-xl inline-block rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Blog</span>
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-neutral-700">
            Berbagi insight seputar pemrograman, desain web modern, dan pengalaman seputar teknologi serta traveling.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.map((post, index) => {
            const theme = BLOG_THEMES[index % BLOG_THEMES.length];
            return (
              <article
                key={post.title}
                className="group bg-white border-3.5 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Window Bar Header */}
                  <div className={`flex items-center justify-between px-3.5 py-2.5 border-b-3 border-black ${theme.headerBg}`}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border-1.5 border-black inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border-1.5 border-black inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border-1.5 border-black inline-block"></span>
                    </div>
                    <span className="font-mono text-xs font-black uppercase tracking-wider text-black">
                      {post.category}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-wider text-black ${theme.badgeBg} px-2 py-0.5 border-1.5 border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}>
                      {theme.badge}
                    </span>
                  </div>

                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full bg-[#e0d1ff] border-b-3 border-black overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Article Info */}
                  <div className="p-5 md:p-6">
                    <h3 className="text-xl md:text-2xl font-black text-black tracking-tight mb-2.5 group-hover:text-[#6344d4] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-neutral-700 leading-relaxed">
                      {post.description}
                    </p>
                  </div>
                </div>

                {/* Action Footer Bar */}
                <div className={`px-5 py-4 border-t-3 border-black ${theme.footerBg} flex items-center justify-between gap-3`}>
                  <span className="text-xs font-black uppercase text-neutral-700 tracking-wider">
                    Bacaan ~ 3 Menit
                  </span>
                  <button
                    type="button"
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 font-black text-xs md:text-sm uppercase tracking-wider ${theme.btnBg} text-black border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer`}
                  >
                    <span>Baca Artikel</span>
                    <ArrowUpRight size={16} className="stroke-[2.5]" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
