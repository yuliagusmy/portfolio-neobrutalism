import Image from "next/image";
import { Eye } from "lucide-react";

export interface TypographyGalleryProps {
  images: string[];
  onPreviewImage: (src: string) => void;
}

export default function TypographyGallery({ images, onPreviewImage }: TypographyGalleryProps) {
  return (
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
          {images.length} Desain Koleksi
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, i) => (
          <div
            key={src + i}
            onClick={() => onPreviewImage(src)}
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
  );
}
