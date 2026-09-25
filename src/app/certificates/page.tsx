import type { Metadata } from "next";
import Certificates from "@/components/Certificates";

export const metadata: Metadata = {
  title: "Sertifikat & Lisensi Kompetensi | Yuliagus M. Yunus",
  description:
    "Daftar 10 sertifikat dan lisensi kompetensi terverifikasi dari Dicoding Indonesia, MySkill, dan lembaga kredibel lainnya oleh Yuliagus M. Yunus.",
};

export default function CertificatesPage() {
  return <Certificates />;
}
