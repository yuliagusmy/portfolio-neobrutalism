import Image from "next/image";

export interface ClientItem {
  name: string;
  logo: string;
}

export interface ClientLogosProps {
  clients: ClientItem[];
}

export default function ClientLogos({ clients }: ClientLogosProps) {
  return (
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
  );
}
