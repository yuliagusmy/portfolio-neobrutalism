"use client";

import React, { useState } from "react";
import Image from "next/image";
import { certificates, CertificateItem } from "@/lib/data";
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, X } from "lucide-react";

const THEMES = [
  { cardBg: "bg-[#a3e635]" }, // Lime
  { cardBg: "bg-[#88aaee]" }, // Blue
  { cardBg: "bg-[#ffdb58]" }, // Yellow
  { cardBg: "bg-[#ff90e8]" }, // Pink
  { cardBg: "bg-[#bc95d4]" }, // Purple
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<"all" | "dicoding" | "coursera" | "myskill" | "other">("all");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  const filteredCerts = certificates.filter((cert) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "dicoding") return cert.platform === "dicoding";
    if (activeFilter === "coursera") return cert.platform === "coursera";
    if (activeFilter === "myskill") return cert.platform === "myskill";
    if (activeFilter === "other") return cert.platform === "canva" || cert.platform === "opswat" || cert.platform === "linkedin";
    return true;
  });

  return (
    <section id="certificates" className="py-20 relative bg-white border-t-3.5 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-block px-4 py-1 bg-[#a3e635] text-black border-2.5 border-black rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-1">
            Lisensi & Sertifikasi
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Sertifikat <span className="bg-[#bc95d4] px-3 py-0.5 border-2.5 border-black rounded-xl inline-block -rotate-1">Kompetensi</span>
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-neutral-700">
            Koleksi 10 sertifikasi resmi terverifikasi dari Dicoding, Coursera, OPSWAT Academy, LinkedIn Learning, dan MySkill.
          </p>
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 min-h-[44px] flex items-center justify-center text-xs md:text-sm font-black rounded-xl border-2.5 border-black cursor-pointer transition-all ${
              activeFilter === "all"
                ? "bg-[#ffdb58] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            Semua ({certificates.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("dicoding")}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 min-h-[44px] flex items-center justify-center text-xs md:text-sm font-black rounded-xl border-2.5 border-black cursor-pointer transition-all ${
              activeFilter === "dicoding"
                ? "bg-[#88aaee] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            Dicoding ({certificates.filter((c) => c.platform === "dicoding").length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("coursera")}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 min-h-[44px] flex items-center justify-center text-xs md:text-sm font-black rounded-xl border-2.5 border-black cursor-pointer transition-all ${
              activeFilter === "coursera"
                ? "bg-[#ff90e8] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            Coursera ({certificates.filter((c) => c.platform === "coursera").length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("myskill")}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 min-h-[44px] flex items-center justify-center text-xs md:text-sm font-black rounded-xl border-2.5 border-black cursor-pointer transition-all ${
              activeFilter === "myskill"
                ? "bg-[#a3e635] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            MySkill ({certificates.filter((c) => c.platform === "myskill").length})
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("other")}
            className={`px-3.5 py-2 sm:px-4 sm:py-2 min-h-[44px] flex items-center justify-center text-xs md:text-sm font-black rounded-xl border-2.5 border-black cursor-pointer transition-all ${
              activeFilter === "other"
                ? "bg-[#bc95d4] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]"
                : "bg-white text-neutral-800 hover:bg-neutral-100 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            OPSWAT & LI ({certificates.filter((c) => c.platform === "opswat" || c.platform === "linkedin").length})
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredCerts.map((cert, index) => {
            const theme = THEMES[index % THEMES.length];
            return (
              <div
                key={cert.title}
                className={`group flex flex-col ${theme.cardBg} border-3.5 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200`}
              >
                {/* Card Window Header */}
                <div className={`px-4 py-2.5 ${theme.cardBg} border-b-3 border-black flex items-center justify-between`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] border-1.5 border-black inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border-1.5 border-black inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] border-1.5 border-black inline-block"></span>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-black truncate max-w-[180px]">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono font-bold bg-white px-2 py-0.5 rounded border-1.5 border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Main Body */}
                <div className="flex-1 flex flex-col">
                  {/* Certificate Image Preview */}
                  <div
                    onClick={() => setSelectedCert(cert)}
                    className="relative aspect-[16/10] w-full bg-white border-b-3 border-black overflow-hidden cursor-pointer group/img"
                  >
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      unoptimized={cert.image.endsWith(".svg")}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1 bg-black text-white text-xs font-black rounded-lg border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]">
                        Klik untuk Perbesar
                      </span>
                    </div>
                    <div className="absolute top-2.5 right-2.5">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 font-black text-[11px] uppercase bg-white text-black border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        <ShieldCheck size={13} className="stroke-[3]" /> Terverifikasi
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 md:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2.5">
                        <span className="px-2.5 py-0.5 text-[11px] font-black bg-white text-black border-1.5 border-black rounded shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                          {cert.level}
                        </span>
                        {cert.credentialId && (
                          <span className="px-2.5 py-0.5 text-[10px] font-mono font-black bg-black text-white border-1.5 border-black rounded shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base md:text-lg font-black text-black tracking-tight leading-snug mb-3 line-clamp-2">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="space-y-1 text-xs font-bold text-black/85 pt-3 border-t-2 border-dashed border-black/20">
                      <p className="flex items-center gap-1.5">
                        <Calendar size={13} className="text-black stroke-[2.5]" />
                        Diterbitkan: <span className="text-black font-black">{cert.date}</span>
                      </p>
                      {cert.expiry !== "Tanpa Kedaluwarsa" && (
                        <p className="flex items-center gap-1.5">
                          <Calendar size={13} className="text-black stroke-[2.5]" />
                          Kedaluwarsa: <span className="text-black font-black">{cert.expiry}</span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Split Action Footer */}
                <div className={`px-4 py-3 border-t-3 border-black ${theme.cardBg} flex items-center justify-between gap-2`}>
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="min-h-[44px] text-xs font-black uppercase text-black hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>🔍 Perbesar</span>
                  </button>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[44px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white hover:bg-black hover:text-white text-black font-black text-xs uppercase tracking-wider border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <span>Verifikasi</span>
                    <ExternalLink size={13} className="stroke-[2.5]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Zoom */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white border-3.5 border-black rounded-2xl p-4 sm:p-7 shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col gap-3.5 sm:gap-4 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 border-b-2.5 border-black pb-3">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 text-xs font-black bg-[#ffdb58] text-black border-1.5 border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {selectedCert.issuer}
                  </span>
                  <span className="px-2.5 py-0.5 text-xs font-black bg-[#a3e635] text-black border-1.5 border-black rounded shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                    {selectedCert.level}
                  </span>
                  {selectedCert.credentialId && (
                    <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-[#faf8ff] text-neutral-800 border-1.5 border-black rounded">
                      ID: {selectedCert.credentialId}
                    </span>
                  )}
                </div>
                <h3 className="text-base sm:text-xl font-black text-black tracking-tight leading-snug">
                  {selectedCert.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                aria-label="Tutup pratinjau sertifikat"
                className="w-11 h-11 flex items-center justify-center bg-[#ff5f56] text-white border-2.5 border-black rounded-full font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer shrink-0"
              >
                <X size={20} className="stroke-[3]" />
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="relative aspect-[16/11] w-full border-2.5 border-black rounded-xl overflow-hidden bg-neutral-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                unoptimized={selectedCert.image.endsWith(".svg")}
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t-2 border-dashed border-neutral-300 text-xs font-bold text-neutral-700">
              <div className="space-y-0.5">
                <p>Diterbitkan: <strong className="text-black">{selectedCert.date}</strong></p>
                {selectedCert.expiry !== "Tanpa Kedaluwarsa" && (
                  <p>Kedaluwarsa: <strong className="text-black">{selectedCert.expiry}</strong></p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 bg-neutral-200 text-black font-black text-xs uppercase tracking-wider border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-300 cursor-pointer"
                >
                  Tutup
                </button>
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#88aaee] text-black font-black text-xs uppercase tracking-wider border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                >
                  <span>Buka Sertifikat Asli</span>
                  <ExternalLink size={14} className="stroke-[2.5]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
