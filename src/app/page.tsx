import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Blog from "@/components/Blog";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0d1ff] text-black selection:bg-[#ffdb58] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Blog />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
