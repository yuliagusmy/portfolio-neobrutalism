"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

export interface ImageLightboxModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

export default function ImageLightboxModal({ selectedImage, onClose }: ImageLightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, onClose]);

  if (!selectedImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white border-3 border-black rounded-2xl p-3 sm:p-4 shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] sm:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] flex flex-col items-center max-w-[94vw] sm:max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup pratinjau gambar"
          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-11 h-11 flex items-center justify-center bg-[#ff5f56] text-white border-2.5 border-black rounded-full font-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer z-20"
        >
          <X size={20} className="stroke-[3]" />
        </button>
        <div className="relative max-h-[72vh] border-2 border-black rounded-xl overflow-hidden bg-neutral-900 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
          {/* Tag img standar digunakan agar rasio dinamis (9:16 vs 4:5) ter-render proporsional */}
          <img
            src={selectedImage}
            alt="Pratinjau Karya"
            className="max-h-[68vh] max-w-[85vw] sm:max-w-md w-auto h-auto object-contain"
          />
        </div>
        <div className="mt-3 text-center">
          <span className="font-black text-xs uppercase bg-[#bc95d4] px-3.5 py-1 border-2 border-black rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Pratinjau Desain
          </span>
        </div>
      </div>
    </div>
  );
}
