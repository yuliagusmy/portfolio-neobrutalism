"use client";

import React, { useState } from "react";
import {
  portfolioProjects,
  typographyImages,
  socialMediaFeeds,
  clients,
  personalInfo,
} from "@/lib/data";
import {
  ExternalLink,
  Layers,
  Code,
  Palette,
  Type,
  Video,
  Presentation,
} from "lucide-react";
import ProjectCard from "./portfolio/ProjectCard";
import SocialFeedGrid from "./portfolio/SocialFeedGrid";
import TypographyGallery from "./portfolio/TypographyGallery";
import ImageLightboxModal from "./portfolio/ImageLightboxModal";
import ClientLogos from "./portfolio/ClientLogos";

export default function Portfolio() {
  const [filter, setFilter] = useState<
    "all" | "website" | "design" | "creative" | "typography"
  >("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects =
    filter === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      className="py-20 relative bg-[#fcfaf2] border-t-3.5 border-black bg-sketch-grid"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-1.5 bg-[#ffdb58] text-black border-2.5 border-black rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-1">
            Karya & Kreasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Galeri{" "}
            <span className="bg-[#88aaee] px-3 py-0.5 border-2.5 border-black rounded-xl inline-block -rotate-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              Portofolio
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-neutral-700">
            Koleksi proyek website, konten video campaign, desain publikasi media sosial, dan eksplorasi tipografi.
          </p>

          {personalInfo.canvaPresentationLink && (
            <div className="mt-5 inline-block">
              <a
                href={personalInfo.canvaPresentationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#ffdb58] hover:bg-[#ffc72c] text-black font-extrabold text-xs sm:text-sm border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
              >
                <Presentation size={16} className="stroke-[2.5]" />
                <span>Buka Versi Slide Presentasi (Canva)</span>
                <ExternalLink size={14} className="stroke-[2.5]" />
              </a>
            </div>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5 md:gap-3 mb-8 sm:mb-12">
          <button
            type="button"
            onClick={() => setFilter("all")}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 min-h-[44px] font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
              filter === "all"
                ? "bg-[#ff90e8] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Layers size={16} className="stroke-[2.5]" />
            Semua ({portfolioProjects.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter("website")}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 min-h-[44px] font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
              filter === "website"
                ? "bg-[#88aaee] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Code size={16} className="stroke-[2.5]" />
            Web Development
          </button>
          <button
            type="button"
            onClick={() => setFilter("creative")}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 min-h-[44px] font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
              filter === "creative"
                ? "bg-[#ffdb58] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Video size={16} className="stroke-[2.5]" />
            Creative Talent & Video
          </button>
          <button
            type="button"
            onClick={() => setFilter("design")}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 min-h-[44px] font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
              filter === "design"
                ? "bg-[#bc95d4] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Palette size={16} className="stroke-[2.5]" />
            Social Media Design
          </button>
          <button
            type="button"
            onClick={() => setFilter("typography")}
            className={`inline-flex items-center gap-2 px-3.5 py-2.5 sm:px-4 sm:py-2 min-h-[44px] font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer ${
              filter === "typography"
                ? "bg-[#a3e635] text-black translate-x-[-1px] translate-y-[-1px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-white text-neutral-800 hover:bg-[#ffdb58]"
            }`}
          >
            <Type size={16} className="stroke-[2.5]" />
            Typography ({typographyImages.length})
          </button>
        </div>

        {/* Project Cards Grid */}
        {filter !== "typography" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.title + idx}
                project={project}
                index={idx}
                onPreviewImage={setSelectedImage}
              />
            ))}
          </div>
        )}

        {/* Social Media Feed Instagram Showcase (DBB Series) */}
        {(filter === "all" || filter === "design") && (
          <SocialFeedGrid
            feeds={socialMediaFeeds}
            onPreviewImage={setSelectedImage}
          />
        )}

        {/* Typography Gallery */}
        {(filter === "all" || filter === "typography") && (
          <TypographyGallery
            images={typographyImages}
            onPreviewImage={setSelectedImage}
          />
        )}

        {/* Client & Community Logos */}
        <ClientLogos clients={clients} />
      </div>

      {/* Lightbox Modal */}
      <ImageLightboxModal
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}
