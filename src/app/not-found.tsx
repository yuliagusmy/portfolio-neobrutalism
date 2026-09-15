import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFFDF0] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white border-4 border-black p-8 rounded-2xl shadow-[6px_6px_0px_#000] text-center space-y-5">
        <span className="inline-block bg-[#FF6B6B] text-white text-5xl font-black px-4 py-2 border-3 border-black rounded-xl shadow-[4px_4px_0px_#000]">
          404
        </span>
        <h1 className="text-2xl font-black text-black">Halaman Tidak Ditemukan</h1>
        <p className="text-neutral-700 font-medium leading-relaxed">
          Halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block bg-[#FACC15] text-black font-extrabold px-6 py-3 border-3 border-black rounded-xl shadow-[4px_4px_0px_#000] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
