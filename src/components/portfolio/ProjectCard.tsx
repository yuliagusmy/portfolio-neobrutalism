import Image from "next/image";
import { PortfolioProject } from "@/lib/data";
import { ExternalLink, Eye } from "lucide-react";

export interface ProjectCardProps {
  project: PortfolioProject;
  index: number;
  onPreviewImage: (src: string) => void;
}

const PROJECT_THEMES = [
  {
    headerBg: "bg-[#ffdb58]",
    footerBg: "bg-[#fffdf0]",
    btnBg: "bg-[#ffdb58] hover:bg-[#ffe680]",
    badgeBg: "bg-[#ff90e8]",
  },
  {
    headerBg: "bg-[#88aaee]",
    footerBg: "bg-[#f0f5ff]",
    btnBg: "bg-[#88aaee] hover:bg-[#a5c2ff]",
    badgeBg: "bg-[#ffdb58]",
  },
  {
    headerBg: "bg-[#a3e635]",
    footerBg: "bg-[#f4fde6]",
    btnBg: "bg-[#a3e635] hover:bg-[#bcf257]",
    badgeBg: "bg-[#bc95d4]",
  },
  {
    headerBg: "bg-[#ff90e8]",
    footerBg: "bg-[#fff0fa]",
    btnBg: "bg-[#ff90e8] hover:bg-[#ffa8ee]",
    badgeBg: "bg-[#88aaee]",
  },
  {
    headerBg: "bg-[#bc95d4]",
    footerBg: "bg-[#f6effc]",
    btnBg: "bg-[#bc95d4] hover:bg-[#cca8e3]",
    badgeBg: "bg-[#ffdb58]",
  },
  {
    headerBg: "bg-[#ffdb58]",
    footerBg: "bg-[#fffdf0]",
    btnBg: "bg-[#ffdb58] hover:bg-[#ffe680]",
    badgeBg: "bg-[#a3e635]",
  },
  {
    headerBg: "bg-[#88aaee]",
    footerBg: "bg-[#f0f5ff]",
    btnBg: "bg-[#88aaee] hover:bg-[#a5c2ff]",
    badgeBg: "bg-[#ff90e8]",
  },
  {
    headerBg: "bg-[#a3e635]",
    footerBg: "bg-[#f4fde6]",
    btnBg: "bg-[#a3e635] hover:bg-[#bcf257]",
    badgeBg: "bg-[#ffdb58]",
  },
];

export default function ProjectCard({ project, index, onPreviewImage }: ProjectCardProps) {
  const theme = PROJECT_THEMES[index % PROJECT_THEMES.length];
  const isWeb = project.category === "website";
  const isCreative = project.category === "creative";

  return (
    <div className="group bg-white border-3.5 border-black rounded-2xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className={`flex items-center justify-between px-3.5 py-2.5 border-b-3 border-black ${theme.headerBg}`}>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56] border-1.5 border-black inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border-1.5 border-black inline-block" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f] border-1.5 border-black inline-block" />
          </div>
          <span className={`px-2 py-0.5 ${theme.badgeBg} text-black font-mono text-[10px] font-black uppercase border border-black rounded shadow-sm`}>
            {isWeb ? "Web Dev" : isCreative ? "Creative Talent" : "Social Design"}
          </span>
        </div>

        <div className="relative aspect-[16/10] w-full bg-neutral-100 overflow-hidden border-b-3 border-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => onPreviewImage(project.image)}
              className="p-2.5 bg-white text-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ffdb58] transition-colors cursor-pointer"
              title="Perbesar Gambar"
            >
              <Eye size={18} className="stroke-[2.5]" />
            </button>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#a3e635] text-black border-2 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#86efac] transition-colors"
              title={isCreative ? "Tonton di YouTube" : "Kunjungi Tautan"}
            >
              <ExternalLink size={18} className="stroke-[2.5]" />
            </a>
          </div>
        </div>

        <div className="p-5 md:p-6">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-[#faf8ff] text-black font-mono text-[11px] font-bold border-1.5 border-black rounded-md shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
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

      <div className={`px-5 py-4 border-t-3 border-black ${theme.footerBg} flex items-center justify-between gap-3`}>
        <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase text-black">
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] border border-black inline-block animate-pulse" />
          <span>{isWeb ? "Live Web" : isCreative ? "Video Campaign" : "Karya Desain"}</span>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 font-black text-xs md:text-sm uppercase tracking-wider ${theme.btnBg} text-black border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all`}
        >
          <span>{isCreative ? "Tonton Video" : isWeb ? "Buka Web" : "Lihat Karya"}</span>
          <ExternalLink size={15} className="stroke-[2.5]" />
        </a>
      </div>
    </div>
  );
}
