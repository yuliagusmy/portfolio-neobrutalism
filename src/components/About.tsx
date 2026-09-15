"use client";

import React, { useState } from "react";
import { personalInfo, education, organizations } from "@/lib/data";
import {
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Code2,
  Palette,
  Compass,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export default function About() {
  const [activeEduTab, setActiveEduTab] = useState(0);

  const skills = [
    { name: "HTML5 & CSS3", category: "frontend", color: "bg-[#ff90e8]" },
    { name: "TailwindCSS", category: "frontend", color: "bg-[#88aaee]" },
    { name: "JavaScript (ES6+)", category: "frontend", color: "bg-[#ffdb58]" },
    { name: "TypeScript", category: "frontend", color: "bg-[#bc95d4]" },
    { name: "React.js & Next.js", category: "frontend", color: "bg-[#a3e635]" },
    { name: "Python (AI/ML Basics)", category: "tools", color: "bg-[#ffdb58]" },
    { name: "Canva & Graphic Design", category: "design", color: "bg-[#ff90e8]" },
    { name: "Adobe Photoshop", category: "design", color: "bg-[#88aaee]" },
    { name: "Typography & Layout", category: "design", color: "bg-[#bc95d4]" },
    { name: "Git & GitHub", category: "tools", color: "bg-[#a3e635]" },
  ];

  return (
    <section id="about" className="py-20 relative bg-[#faf8ff] border-y-3.5 border-black">
      {/* Marquee Banner */}
      <div className="w-full bg-[#ffdb58] border-b-3 border-black py-3 overflow-hidden whitespace-nowrap mb-12 select-none shadow-[inset_0_-2px_0_rgba(0,0,0,1)]">
        <div className="inline-flex gap-8 items-center font-black text-sm md:text-base tracking-wider uppercase animate-marquee">
          <span>⚡ Front-End Development</span>
          <span>•</span>
          <span>🎨 Social Media Design</span>
          <span>•</span>
          <span>✍️ Typography Specialist</span>
          <span>•</span>
          <span>🌍 Traveler & Explorer</span>
          <span>•</span>
          <span>💡 Dicoding Certified</span>
          <span>•</span>
          <span>⚡ Front-End Development</span>
          <span>•</span>
          <span>🎨 Social Media Design</span>
          <span>•</span>
          <span>✍️ Typography Specialist</span>
          <span>•</span>
          <span>🌍 Traveler & Explorer</span>
          <span>•</span>
          <span>💡 Dicoding Certified</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 bg-[#88aaee] text-black border-2.5 border-black rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-[-1deg]">
            Kenali Saya Lebih Dekat
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Tentang <span className="bg-[#bc95d4] px-3 py-0.5 border-2.5 border-black rounded-xl inline-block rotate-1">Saya</span>
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-neutral-700">
            Perjalanan pendidikan, pengalaman organisasi, dan dedikasi saya dalam dunia teknologi & kreatif.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio & Skills */}
          <div className="lg:col-span-6 space-y-6">
            {/* Bio Card - Neobrutalism Sticky Note Style */}
            <div className="relative bg-white border-3 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              {/* Tape sticker on top */}
              <div className="absolute -top-3 right-8 px-4 py-0.5 tape-badge font-mono text-[10px] font-black uppercase text-black border border-black rotate-2">
                📌 PROFILE STORY
              </div>

              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2.5 border-black">
                <span className="p-2 bg-[#ffdb58] border-2 border-black rounded-lg font-black text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  👋
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-black">
                    Bio & Cerita Saya
                  </h3>
                  <p className="text-xs font-bold text-neutral-600">Front-End Developer & Desainer Visual</p>
                </div>
              </div>

              {/* Story Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#e0d1ff] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black text-xs uppercase text-black block mb-1">🎯 Fokus Utama</span>
                  <p className="text-xs font-semibold text-neutral-800">Antarmuka Pengguna (UI) yang responsif, taktil, dan estetis.</p>
                </div>
                <div className="p-3 bg-[#fef08a] border-2 border-black rounded-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-black text-xs uppercase text-black block mb-1">✍️ Minat Kreatif</span>
                  <p className="text-xs font-semibold text-neutral-800">Social Media Design, Typography, dan eksplorasi visual branding.</p>
                </div>
              </div>

              {/* Personality & Persona Badges (Authentic Instagram & LinkedIn Data) */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ffdb58] border-2 border-black rounded-lg font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  🧠 {personalInfo.mbti}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#a3e635] border-2 border-black rounded-lg font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {personalInfo.socialBattery}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#ff90e8] border-2 border-black rounded-lg font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {personalInfo.vibe}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#88aaee] border-2 border-black rounded-lg font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  🤝 Info Kegiatan Positif
                </span>
              </div>

              <p className="text-xs md:text-sm font-medium text-neutral-800 leading-relaxed mb-4">
                {personalInfo.bio}
              </p>

              {/* 4 Real Metric Cards (Authentic Data) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-4">
                <div className="p-3 bg-[#ffdb58] border-2.5 border-black rounded-xl text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-102 transition-transform">
                  <span className="font-black text-2xl sm:text-3xl text-black block leading-none">5+</span>
                  <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black block mt-1">Proyek Web</span>
                </div>
                <div className="p-3 bg-[#a3e635] border-2.5 border-black rounded-xl text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-102 transition-transform">
                  <span className="font-black text-2xl sm:text-3xl text-black block leading-none">20+</span>
                  <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black block mt-1">Karya Tipografi</span>
                </div>
                <div className="p-3 bg-[#ff90e8] border-2.5 border-black rounded-xl text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-102 transition-transform">
                  <span className="font-black text-2xl sm:text-3xl text-black block leading-none">{personalInfo.instagramFollowers}</span>
                  <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black block mt-1">IG Followers</span>
                </div>
                <div className="p-3 bg-[#88aaee] border-2.5 border-black rounded-xl text-center shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-102 transition-transform">
                  <span className="font-black text-xl sm:text-2xl text-black block leading-none pt-1">Smile Train</span>
                  <span className="font-extrabold text-[10px] sm:text-xs uppercase tracking-wider text-black block mt-1">Social Partner</span>
                </div>
              </div>

              <div className="p-4 bg-[#bbf7d0] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-xs md:text-sm font-extrabold text-black">
                  💬 {personalInfo.friendMessage}
                </p>
              </div>
            </div>

            {/* Skills & Expertise (Bento Grid Style) */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 bg-[#ffdb58] border-2 border-black rounded-lg font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    ⚡
                  </span>
                  <h3 className="text-lg md:text-xl font-black text-black">
                    Keahlian & Toolkit (Bento)
                  </h3>
                </div>
                <span className="font-mono text-xs font-black bg-white px-2.5 py-1 border-2 border-black rounded-lg shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                  {skills.length} Tools
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Frontend Core */}
                <div className="p-5 bg-[#88aaee] border-3 border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                      <span className="p-1.5 bg-white border-2 border-black rounded-lg font-mono text-xs font-black">
                        &lt;/&gt;
                      </span>
                      <h4 className="font-black text-sm uppercase tracking-wide text-black">
                        Frontend Core
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["React.js", "Next.js 15", "TypeScript", "TailwindCSS", "JavaScript (ES6+)", "HTML5 & CSS3"].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white text-black font-extrabold text-xs border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 2. Visual & Design */}
                <div className="p-5 bg-[#ffdb58] border-3 border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                      <span className="p-1.5 bg-white border-2 border-black rounded-lg font-mono text-xs font-black">
                        🎨
                      </span>
                      <h4 className="font-black text-sm uppercase tracking-wide text-black">
                        Visual & Design
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Canva", "Adobe Photoshop", "Typography & Layout", "Social Media Design"].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white text-black font-extrabold text-xs border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 3. Tools & Workflow */}
                <div className="p-5 bg-[#a3e635] border-3 border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                      <span className="p-1.5 bg-white border-2 border-black rounded-lg font-mono text-xs font-black">
                        🛠️
                      </span>
                      <h4 className="font-black text-sm uppercase tracking-wide text-black">
                        Tools & Workflow
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Git & GitHub", "VS Code", "Figma", "Vercel"].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white text-black font-extrabold text-xs border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 4. AI & Tech Exploration */}
                <div className="p-5 bg-[#ff90e8] border-3 border-black rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-black">
                      <span className="p-1.5 bg-white border-2 border-black rounded-lg font-mono text-xs font-black">
                        ⚡
                      </span>
                      <h4 className="font-black text-sm uppercase tracking-wide text-black">
                        Tech Exploration
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Python (AI/ML Basics)", "Responsive Layout", "Prompt Engineering"].map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 bg-white text-black font-extrabold text-xs border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education Tabs & Organizations */}
          <div className="lg:col-span-6 space-y-6">
            {/* Education Card */}
            <div className="bg-white border-3 border-black rounded-2xl p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2.5 border-black">
                <div className="flex items-center gap-2">
                  <span className="p-2 bg-[#88aaee] border-2 border-black rounded-lg font-black text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    🎓
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-black">
                    Pendidikan & MBKM
                  </h3>
                </div>
              </div>

              {/* Education Tab Buttons */}
              <div className="flex gap-2 mb-6">
                {education.map((category, idx) => (
                  <button
                    key={category.category}
                    onClick={() => setActiveEduTab(idx)}
                    className={`px-4 py-2 font-black text-xs md:text-sm rounded-xl border-2.5 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all ${
                      activeEduTab === idx
                        ? "bg-[#bc95d4] text-black -translate-y-0.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                        : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                    }`}
                  >
                    {category.category}
                  </button>
                ))}
              </div>

              {/* Education Items */}
              <div className="space-y-4">
                {education[activeEduTab].items.map((item, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#faf8ff] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#e0d1ff]/50 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="font-extrabold text-sm md:text-base text-black">
                        {item.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs font-black px-2.5 py-0.5 bg-[#ffdb58] border-2 border-black rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        <Calendar size={12} /> {item.period}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-neutral-700 leading-relaxed mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizations Card */}
            <div className="bg-white border-3 border-black rounded-2xl p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b-2.5 border-black">
                <span className="p-2 bg-[#ff90e8] border-2 border-black rounded-lg font-black text-base shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  🏛️
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-black">
                    Organisasi & Pengabdian Sosial
                  </h3>
                  <p className="text-xs font-bold text-neutral-600">Komunitas, Relawan & Seni Kreatif</p>
                </div>
              </div>

              <div className="space-y-3">
                {organizations.map((org, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#faf8ff] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff90e8]/20 transition-colors"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                      <div>
                        <h4 className="font-extrabold text-sm md:text-base text-black">
                          {org.title}
                        </h4>
                        <span className="text-xs font-bold text-[#6344d4] block">
                          {org.role}
                        </span>
                      </div>
                      <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#ffdb58] border-1.5 border-black rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {org.badge}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm font-medium text-neutral-700 leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
