"use client";

import React, { useState } from "react";
import { personalInfo, socialLinks } from "@/lib/data";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  Send,
  MessageSquare,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import {
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
  TikTokIcon,
  FacebookIcon,
} from "./icons";

const iconMap: Record<string, React.ReactNode> = {
  instagram: <InstagramIcon size={20} />,
  linkedin: <LinkedInIcon size={20} />,
  whatsapp: <WhatsAppIcon size={20} />,
  x: <XIcon size={20} />,
  tiktok: <TikTokIcon size={20} />,
  facebook: <FacebookIcon size={20} />,
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#a388ee", "#88aaee", "#ffdb58", "#ff90e8", "#a3e635"],
      });
    } catch (err) {
      console.log(err);
    }

    // Format mailto link to open user's default email client
    const subject = encodeURIComponent(
      formData.subject || `Pesan Portofolio dari ${formData.name}`
    );
    const body = encodeURIComponent(
      `Halo Yuliagus,\n\nNama Pengirim: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}\n\n---\nDikirim melalui Formulir Kontak Portofolio`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    // Trigger email client
    window.location.href = mailtoUrl;

    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Halo Agus, saya ${formData.name || "rekan Anda"} ingin berdiskusi terkait kolaborasi / proyek: ${formData.message || "Mari terhubung!"}`
    );
    window.open(`https://wa.me/6285341920479?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 relative bg-[#faf8ff] border-t-3.5 border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block px-4 py-1 bg-[#ffdb58] text-black border-2.5 border-black rounded-xl font-black text-xs md:text-sm uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-3 rotate-[-1deg]">
            Mari Terhubung
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
            Hubungi <span className="bg-[#ff90e8] px-3 py-0.5 border-2.5 border-black rounded-xl inline-block rotate-1">Saya</span>
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-neutral-700">
            Punya ide proyek, tawaran pekerjaan, atau sekadar ingin berdiskusi? Jangan ragu mengirimkan pesan!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border-3.5 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <h3 className="text-2xl font-black text-black tracking-tight mb-4 flex items-center gap-2">
                <span>Informasi Kontak</span>
                <span className="text-xl">📫</span>
              </h3>
              <p className="text-sm font-medium text-neutral-700 leading-relaxed mb-6">
                {personalInfo.friendMessage2}
              </p>

              <div className="space-y-4">
                {/* Email with Copy Action */}
                <div className="p-4 bg-[#e0d1ff] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 bg-white border-2 border-black rounded-lg">
                      <Mail size={18} />
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-black uppercase text-neutral-600">Email</p>
                      <p className="text-xs sm:text-sm font-black text-black truncate">{personalInfo.email}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="shrink-0 p-2 bg-white hover:bg-[#ffdb58] text-black border-2 border-black rounded-lg font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1"
                    title="Salin Email"
                  >
                    {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                    <span className="hidden sm:inline">{copied ? "Disalin!" : "Salin"}</span>
                  </button>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/6285341920479`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#a3e635] border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 hover:translate-x-[-1px] hover:translate-y-[-1px] transition-transform"
                >
                  <div className="p-2 bg-white border-2 border-black rounded-lg">
                    <WhatsAppIcon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase text-neutral-700">WhatsApp</p>
                    <p className="text-xs sm:text-sm font-black text-black">{personalInfo.phone}</p>
                  </div>
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t-2.5 border-black">
                <p className="text-xs font-black uppercase tracking-wider text-neutral-700 mb-3">
                  Jejaring Sosial:
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#faf8ff] hover:bg-[#ff90e8] text-black border-2 border-black rounded-xl font-black text-xs shadow-[2.5px_2.5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                    >
                      {iconMap[social.icon]}
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border-3.5 border-black rounded-2xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b-2.5 border-black">
                <div>
                  <h3 className="text-2xl font-black text-black tracking-tight">
                    Kirim Pesan Langsung
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-neutral-600">
                    Otomatis membuka aplikasi email Anda
                  </p>
                </div>
                <span className="p-2 bg-[#ffdb58] border-2 border-black rounded-xl font-black text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  ✉️
                </span>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-[#a3e635] border-3.5 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center space-y-4">
                  <span className="inline-block p-3 bg-white border-2.5 border-black rounded-2xl text-3xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    📬
                  </span>
                  <h4 className="text-2xl font-black text-black">Aplikasi Email Anda Dibuka!</h4>
                  <p className="text-sm font-bold text-neutral-900 max-w-md mx-auto leading-relaxed">
                    Draf pesan telah disiapkan dan dialihkan ke aplikasi email (Gmail / Outlook / Mail) Anda menuju ke <strong className="underline">{personalInfo.email}</strong>.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || `Pesan dari ${formData.name}`)}&body=${encodeURIComponent(`Halo Yuliagus,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-neutral-100 text-black font-black text-sm uppercase tracking-wider border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                    >
                      <Mail size={18} />
                      <span>Buka Ulang Email</span>
                    </a>
                    <button
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#ffdb58] hover:bg-[#ffe680] text-black font-black text-sm uppercase tracking-wider border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Atau Chat WhatsApp</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="px-5 py-2.5 bg-[#bc95d4] text-black font-black text-sm uppercase tracking-wider border-2.5 border-black rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#cca8e3]"
                    >
                      Tulis Pesan Baru
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs md:text-sm font-black uppercase text-neutral-800 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#faf8ff] border-2.5 border-black rounded-xl text-sm font-bold text-black focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-black uppercase text-neutral-800 mb-1.5">
                        Alamat Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#faf8ff] border-2.5 border-black rounded-xl text-sm font-bold text-black focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-black uppercase text-neutral-800 mb-1.5">
                      Subjek Pesan
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Diskusi Proyek Website / Kolaborasi"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8ff] border-2.5 border-black rounded-xl text-sm font-bold text-black focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs md:text-sm font-black uppercase text-neutral-800 mb-1.5">
                      Isi Pesan *
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tuliskan pesan, penawaran, atau pertanyaan Anda di sini..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#faf8ff] border-2.5 border-black rounded-xl text-sm font-bold text-black focus:outline-none focus:bg-white focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all placeholder:text-neutral-400 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#88aaee] hover:bg-[#a388ee] text-black font-black text-sm uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                    >
                      <Send size={18} className="stroke-[2.5]" />
                      <span>Kirim Pesan Sekarang</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#a3e635] hover:bg-[#86efac] text-black font-black text-sm uppercase tracking-wider border-3 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Chat WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
