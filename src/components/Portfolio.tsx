"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioProjects, typographyImages, clients } from "@/lib/data";
import { ExternalLink, Eye, X, Layers, Sparkles, Code, Palette, Type } from "lucide-react";

// Distinct Neobrutalism Color Themes for Project Cards
const PROJECT_THEMES = [
  {
    headerBg: "bg-[#ffdb58]",
    footerBg: "bg-[#fffdf0]",
    btnBg: "bg-[#ffdb58] hover:bg-[#ffe680]",
    badgeBg: "bg-[#ff90e8]",
    badgeText: "#01 WEB",
  },
  {
    headerBg: "bg-[#88aaee]",
    footerBg: "bg-[#f0f5ff]",
    btnBg: "bg-[#88aaee] hover:bg-[#a5c2ff]",
    badgeBg: "bg-[#ffdb58]",
    badgeText: "#02 WEB",
  },
  {
    headerBg: "bg-[#a3e635]",
    footerBg: "bg-[#f4fde6]",
    btnBg: "bg-[#a3e635] hover:bg-[#bcf257]",
    badgeBg: "bg-[#bc95d4]",
    badgeText: "#03 AI APP",
  },
  {
    headerBg: "bg-[#ff90e8]",
    footerBg: "bg-[#fff0fa]",
    btnBg: "bg-[#ff90e8] hover:bg-[#ffa8ee]",
    badgeBg: "bg-[#88aaee]",
    badgeText: "#04 DESAIN",
  },
  {
    headerBg: "bg-[#bc95d4]",
    footerBg: "bg-[#f6effc]",
    btnBg: "bg-[#bc95d4] hover:bg-[#cca8e3]",
    badgeBg: "bg-[#ffdb58]",
    badgeText: "#05 DESAIN",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<"all" | "website" | "design" | "typography">("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 relative bg-[#fcfaf2] border-t-3.5 border-black bg-sketch-grid">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#ffdb58] text-black border-2.5 border-black rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-1">
            Karya & Kreasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Galeri <span className="bg-[#88aaee] px-3 py-0.5 border-2.5 border-black rounded-xl inline-block -rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">Portofolio</span>
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-neutral-700">
            Koleksi proyek website, desain media sosial, dan eksplorasi tipografi yang telah saya kembangkan.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 md:gap-3 mb-12">
          <button
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-2 px-4 py-2 font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
              filter === "all"
                ? "bg-[#ff90e8] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Layers size={16} className="stroke-[2.5]" />
            Semua Proyek
          </button>
          <button
            onClick={() => setFilter("website")}
            className={`inline-flex items-center gap-2 px-4 py-2 font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
              filter === "website"
                ? "bg-[#88aaee] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Code size={16} className="stroke-[2.5]" />
            Website Development
          </button>
          <button
            onClick={() => setFilter("design")}
            className={`inline-flex items-center gap-2 px-4 py-2 font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
              filter === "design"
                ? "bg-[#bc95d4] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Palette size={16} className="stroke-[2.5]" />
            Social Media Design
          </button>
          <button
            onClick={() => setFilter("typography")}
            className={`inline-flex items-center gap-2 px-4 py-2 font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all ${
              filter === "typography"
                ? "bg-[#a3e635] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Type size={16} className="stroke-[2.5]" />
            Eksplorasi Typography ({typographyImages.length})
          </button>
        </div>

        {/* Projects Grid (When not pure typography) */}
        {filter !== "typography" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {filteredProjects.map((project, idx) => {
              const theme = PROJECT_THEMES[idx % PROJECT_THEMES.length];
              const projectSlug = project.title.toLowerCase().replace(/[^a-z0-9]/g, "-");
              const isWeb = project.category === "website";

              return (
                <div
                  key={project.title + idx}
                  className="group bg-white border-3.5 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    {/* Retro Browser Window Bar Header */}
                    <div className={`flex items-center justify-between px-3.5 py-2.5 border-b-3 border-black ${theme.headerBg}`}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] border-1.5 border-black inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] border-1.5 border-black inline-block"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border-1.5 border-black inline-block"></span>
                      </div>
                      <div className="px-2.5 py-0.5 bg-white border-1.5 border-black rounded font-mono text-[11px] font-bold text-neutral-800 truncate max-w-[150px] shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        agus.dev/{projectSlug}
                      </div>
                      <span className={`text-[10px] font-black uppercase tracking-wider text-black ${theme.badgeBg} px-2 py-0.5 border-1.5 border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]`}>
                        {theme.badgeText}
                      </span>
                    </div>

                    {/* Card Thumbnail Frame */}
                    <div className="relative aspect-[16/10] w-full border-b-3 border-black bg-neutral-100 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 font-black text-xs uppercase bg-white text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 md:p-6">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs font-black bg-white text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-black tracking-tight mb-2 group-hover:text-[#432da8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs md:text-sm font-medium text-neutral-700 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Split Footer Action Bar */}
                  <div className={`px-5 py-4 border-t-3 border-black ${theme.footerBg} flex items-center justify-between gap-3`}>
                    <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black inline-block animate-pulse"></span>
                      <span>{isWeb ? "Live Web" : "Karya Desain"}</span>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 font-black text-xs md:text-sm uppercase tracking-wider ${theme.btnBg} text-black border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all`}
                    >
                      <span>Lihat Proyek</span>
                      <ExternalLink size={15} className="stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Typography Gallery (When all or typography selected) */}
        {(filter === "all" || filter === "typography") && (
          <div className="mt-8 pt-10 border-t-3 border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="p-2.5 bg-[#a3e635] border-2.5 border-black rounded-xl font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ✍️
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-black">
                    Eksplorasi Karya Tipografi
                  </h3>
                  <p className="text-xs md:text-sm font-medium text-neutral-600">
                    Klik kartu polaroid untuk memperbesar detail eksplorasi desain
                  </p>
                </div>
              </div>
              <span className="inline-block self-start sm:self-auto px-3.5 py-1.5 font-black text-xs uppercase bg-[#ffdb58] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                {typographyImages.length} Desain Koleksi
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {typographyImages.map((src, i) => (
                <div
                  key={src + i}
                  onClick={() => setSelectedImage(src)}
                  className="group bg-white p-2 border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative aspect-[9/16] w-full bg-[#faf8ff] border-1.5 border-black rounded-lg overflow-hidden">
                    <Image
                      src={src}
                      alt={`Typography design ${i + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="p-1.5 bg-[#ffdb58] border-2 border-black rounded-lg text-black font-black text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1">
                        <Eye size={12} /> Zoom
                      </span>
                    </div>
                  </div>
                  <div className="pt-2 pb-0.5 px-0.5 flex items-center justify-between text-[10px] font-mono font-black text-neutral-700">
                    <span>#TIPO-{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-[#6344d4] font-black group-hover:underline">Buka ↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Client Logos */}
        <div className="mt-16 pt-10 border-t-3 border-dashed border-black">
          <p className="text-center font-black text-xs uppercase tracking-widest text-neutral-600 mb-6">
            Platform & Komunitas Terhubung
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-2.5 px-4 py-2 bg-[#faf8ff] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffdb58] transition-colors"
              >
                <div className="relative w-6 h-6">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-extrabold text-sm text-black">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative bg-white border-3 border-black rounded-2xl p-3 sm:p-4 shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col items-center max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Tutup pratinjau gambar"
              className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 p-2 bg-[#ff5f56] text-white border-2 border-black rounded-full font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer z-10"
            >
              <X size={20} className="stroke-[3]" />
            </button>
            <div className="relative h-[72vh] max-h-[720px] aspect-[9/16] border-2 border-black rounded-xl overflow-hidden bg-neutral-900">
              <Image
                src={selectedImage}
                alt="Enlarged Typography Story"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center">
              <span className="font-black text-xs uppercase bg-[#bc95d4] px-3.5 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                Detail Tipografi (Story 9:16)
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
