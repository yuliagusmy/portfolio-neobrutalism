import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Kontak & Kolaborasi | Yuliagus M. Yunus",
  description:
    "Mari terhubung dan berkolaborasi. Hubungi Yuliagus M. Yunus via email langsung, WhatsApp, atau media sosial untuk proyek web, desain, atau kegiatan kerelawanan.",
};

export default function ContactPage() {
  return <Contact />;
}
