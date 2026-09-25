import Image from "next/image";
import { SocialMediaFeed } from "@/lib/data";
import { ExternalLink, Eye } from "lucide-react";

export interface SocialFeedGridProps {
  feeds: SocialMediaFeed[];
  onPreviewImage: (src: string) => void;
}

export default function SocialFeedGrid({ feeds, onPreviewImage }: SocialFeedGridProps) {
  return (
    <div className="mt-8 pt-10 border-t-3 border-black mb-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <span className="p-2.5 bg-[#ff90e8] border-2.5 border-black rounded-xl font-black text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            📚
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-black text-black">
              Publikasi Media Sosial Diskusi Buku Bareng (DBB)
            </h3>
            <p className="text-xs md:text-sm font-medium text-neutral-600">
              Desain feed Instagram untuk perjamuan literasi, bedah buku, dan agenda komunitas di Makassar
            </p>
          </div>
        </div>
        <span className="inline-block self-start sm:self-auto px-3.5 py-1.5 font-black text-xs uppercase bg-[#bc95d4] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {feeds.length} Feed Komunitas
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {feeds.map((feed, idx) => (
          <div
            key={feed.title + idx}
            className="group bg-white border-3 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between"
          >
            <div>
              <div className="p-3 bg-[#faf8ff] border-b-2.5 border-black flex items-center justify-between text-xs font-black">
                <span className="font-mono text-[10px] text-neutral-600 uppercase">
                  {feed.date}
                </span>
                <span className="px-2 py-0.5 bg-[#ffdb58] text-black border border-black rounded text-[10px] uppercase">
                  Instagram Feed
                </span>
              </div>

              <div
                onClick={() => onPreviewImage(feed.image)}
                className="relative aspect-[4/5] w-full bg-neutral-100 overflow-hidden cursor-pointer"
              >
                <Image
                  src={feed.image}
                  alt={feed.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="p-2 bg-[#ffdb58] border-2 border-black rounded-xl text-black font-black text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5">
                    <Eye size={14} /> Perbesar Detail
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="font-black text-base text-black mb-1 leading-snug">
                  {feed.title}
                </h4>
                <p className="text-xs font-medium text-neutral-600">
                  {feed.event}
                </p>
              </div>
            </div>

            <div className="p-3 border-t-2 border-black bg-[#fffdf0] flex items-center justify-between">
              <span className="text-[11px] font-mono font-bold text-neutral-700">
                @diskusibukubareng
              </span>
              <a
                href={feed.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-black text-black hover:underline"
              >
                <span>Lihat IG</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
