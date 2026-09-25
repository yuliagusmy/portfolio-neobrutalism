import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { portfolioProjects } from "@/lib/data";
import {
  User,
  Briefcase,
  Award,
  Send,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const featuredProjects = portfolioProjects.slice(0, 2);

  const navigationHub = [
    {
      title: "Tentang Saya",
      description:
        "Bio, latar belakang pendidikan MBKM & formal, aktivitas organisasi sosial, dan keahlian teknis.",
      href: "/about",
      badge: "PROFIL LENGKAP",
      color: "bg-[#bc95d4]",
      icon: User,
    },
    {
      title: "Portofolio Karya",
      description:
        "Galeri desain tipografi Instagram Story 9:16 dengan modal lightbox dan showcase proyek web interaktif.",
      href: "/portfolio",
      badge: "KARYA & DESAIN",
      color: "bg-[#ffdb58]",
      icon: Briefcase,
    },
    {
      title: "Sertifikat Terverifikasi",
      description:
        "10 Kredensial terverifikasi dari Dicoding Indonesia, MySkill, dan institusi pendidikan kredibel.",
      href: "/certificates",
      badge: "KOMPETENSI",
      color: "bg-[#a3e635]",
      icon: Award,
    },
    {
      title: "Kontak & Diskusi",
      description:
        "Kirim pesan email langsung via mailto client, hubungi via WhatsApp, atau diskusi proyek kolaboratif.",
      href: "/contact",
      badge: "HUBUNGI SAYA",
      color: "bg-[#88aaee]",
      icon: Send,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Navigation Hub Section */}
      <section className="py-10 sm:py-16 md:py-20 relative bg-[#faf8ff] border-y-3 sm:border-y-3.5 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <div className="inline-block px-3 py-0.5 sm:px-3.5 sm:py-1 bg-[#88aaee] text-black border-2 sm:border-2.5 border-black rounded-xl font-black text-[11px] sm:text-xs md:text-sm uppercase tracking-widest shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] mb-2.5 sm:mb-3 rotate-[-1deg]">
              Jelajahi Portofolio
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-black tracking-tight mb-2 sm:mb-4">
              Pilih Halaman Yang Ingin{" "}
              <span className="relative inline-block bg-[#ffdb58] px-2.5 sm:px-3 py-0.5 border-2 sm:border-2.5 border-black rounded-lg sm:rounded-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-1">
                Anda Kunjungi
              </span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-medium text-neutral-700">
              Setiap topik kini memiliki halaman tersendiri yang terfokus agar Anda dapat menelusuri karya, pengalaman, dan latar belakang saya dengan nyaman.
            </p>
          </div>

          {/* Hub Grid - 4 Focused Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {navigationHub.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`group relative p-4 sm:p-5 md:p-6 ${item.color} border-2.5 sm:border-3 border-black rounded-xl sm:rounded-2xl shadow-[3.5px_3.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex flex-col justify-between`}
                >
                  <div>
                    {/* Top Row: Icon in white badge & Sticker Tag */}
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border-2 sm:border-2.5 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform">
                        <Icon size={20} className="stroke-[2.5] text-black sm:hidden" />
                        <Icon size={22} className="stroke-[2.5] text-black hidden sm:block" />
                      </div>
                      <span className="px-2 py-0.5 sm:px-2.5 sm:py-0.5 bg-white text-black border-1.5 sm:border-2 border-black rounded-md font-mono text-[9px] sm:text-[10px] font-black uppercase shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-black text-black mb-1 sm:mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug sm:leading-relaxed mb-3 sm:mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Action: Crisp White Pill Action */}
                  <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t-2 border-black/30 group-hover:border-black transition-colors">
                    <span className="font-black text-xs sm:text-sm uppercase tracking-wider text-black">
                      Buka Halaman
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border-2 border-black flex items-center justify-center text-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 transition-transform">
                      <ArrowRight size={14} className="stroke-[3] sm:hidden" />
                      <ArrowRight size={16} className="stroke-[3] hidden sm:block" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-10 sm:py-16 md:py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-12 gap-3 sm:gap-4">
            <div>
              <div className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-[#ffdb58] text-black border-2 border-black rounded-lg font-black text-[11px] sm:text-xs uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-2">
                Sorotan Karya
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
                Proyek Unggulan Terbaru
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#a388ee] hover:bg-[#88aaee] text-black font-black text-xs sm:text-sm uppercase tracking-wider border-2 sm:border-2.5 border-black rounded-xl shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-0.5 active:translate-y-0.5 transition-all w-fit"
            >
              <span>Lihat Semua Karya</span>
              <ArrowRight size={14} className="stroke-[3]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-[#faf8ff] border-2.5 sm:border-3 border-black rounded-xl sm:rounded-2xl overflow-hidden shadow-[3.5px_3.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full border-b-2.5 sm:border-b-3 border-black bg-neutral-200 overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#ff90e8] text-black border-2 border-black rounded-lg px-2 sm:px-2.5 py-0.5 font-black text-[10px] sm:text-xs shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {project.category.toUpperCase()}
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-black mb-1.5 sm:mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed mb-3 sm:mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-1.5 sm:px-2 py-0.5 bg-white text-black border-1.5 border-black rounded text-[10px] sm:text-[11px] font-mono font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t-2 border-dashed border-neutral-300">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-[#ffdb58] hover:bg-[#ffc72c] text-black font-black text-[11px] sm:text-xs uppercase tracking-wider border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 transition-all"
                    >
                      <ExternalLink size={13} className="stroke-[2.5]" />
                      <span>Live Preview</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Discussion CTA Strip */}
      <section className="py-8 sm:py-12 bg-[#ffdb58] border-t-3 sm:border-t-3.5 border-black">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-black tracking-tight">
              Punya ide proyek atau ingin kolaborasi?
            </h2>
            <p className="text-xs sm:text-sm font-bold text-neutral-800 mt-1">
              Saya selalu terbuka untuk berdiskusi seputar web, desain, atau kegiatan kerelawanan.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3.5 bg-black hover:bg-neutral-800 text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all whitespace-nowrap w-full sm:w-auto justify-center"
          >
            <span>Hubungi Sekarang</span>
            <ArrowRight size={16} className="stroke-[3]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
