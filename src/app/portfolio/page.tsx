import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Portofolio Karya & Desain | Yuliagus M. Yunus",
  description:
    "Eksplorasi karya Front-End Web Development, galeri Tipografi Instagram Story responsif, dan Desain Media Sosial oleh Yuliagus M. Yunus.",
};

export default function PortfolioPage() {
  return <Portfolio />;
}
