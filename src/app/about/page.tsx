import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "Tentang Saya | Yuliagus M. Yunus",
  description:
    "Profil lengkap, perjalanan pendidikan, pengalaman organisasi, dan dedikasi Yuliagus M. Yunus dalam dunia teknologi dan kreatif.",
};

export default function AboutPage() {
  return <About />;
}
