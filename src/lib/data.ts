// ===========================
// Portfolio Data Constants
// ===========================

export const personalInfo = {
  name: "Yuliagus M. Yunus",
  nickname: "Agus",
  brand: "MieAyammm",
  title: "Front-End Web Developer",
  email: "yuliagusmy@gmail.com",
  phone: "+6285341920479",
  cvLink:
    "https://drive.google.com/file/d/1yt0qtbtePNN2JuZSiOZoPnzeETVl6BSJ/view?usp=sharing",
  profileImage: "/images/profile-pic.png",
  tagline: "Sebaik-baik manusia adalah yang bermanfaat bagi orang lain dan sekitarnya.",
  mbti: "ENFJ",
  socialBattery: "1000% Social Battery 🔋",
  vibe: "Happy Virus ✨",
  instagramHandle: "@yuliagusmyunus",
  instagramFollowers: "2.9K+",
  typingTexts: ["Web Developer", "Designer", "Traveler", "Yogis", "Climber", "Hiker", "Photographer", "Runner", "Cyclist", "Volunteer", "Videographer", "Filmmaker", "Editor", "Content Creator", "Digital Marketer"],
  bio: `Hai, saya Agus, seorang Front-End Web Developer dengan kepribadian ENFJ (1000% Social Battery & Happy Virus!) yang berfokus pada antarmuka pengguna fungsional dan estetis. Selain aktif di dunia web dan desain tipografi, saya juga aktif di kegiatan sosial kemanusiaan (Yayasan Celebes Cleft Center & Smile Train) serta seni panggung Teater Remaja Makassar. Visi saya adalah memanfaatkan teknologi dan kreativitas untuk menciptakan dampak positif bagi orang lain.`,
  friendMessage: `Saya selalu bersemangat berkenalan dengan orang baru dan sangat terbuka untuk kolaborasi proyek, kegiatan sosial (volunteer), berbagi info kegiatan positif, hingga diskusi teknologi dan desain.`,
  friendMessage2: `Mari terhubung dan bersama-sama menciptakan sesuatu yang positif dan bermanfaat!`,
};

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/yuliagusmyunus",
    icon: "instagram",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yuliagus",
    icon: "linkedin",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/6285341920479",
    icon: "whatsapp",
  },
];

export const education = [
  {
    category: "MBKM",
    items: [
      {
        title: "Studi Independen - Coding Camp by Dicoding",
        period: "Februari 2025 - Juni 2025",
        description:
          "Program Studi Independen dengan konsentrasi Front End and Back End (Fullstack Developer). Mengembangkan keterampilan dalam pengembangan web secara menyeluruh.",
      },
      {
        title: "Pertukaran Mahasiswa Merdeka - Telkom University",
        period: "Februari 2024 - Juni 2024",
        description:
          "Awardee PMM Batch 4 di Telkom University Bandung. Mengembangkan wawasan akademik lintas budaya, rekayasa perangkat lunak, dan jejaring nasional.",
      },
    ],
  },
  {
    category: "Pendidikan Formal",
    items: [
      {
        title: "Universitas Handayani Makassar",
        period: "2022 - 2026",
        description: "S1 Teknik Informatika. Mengembangkan keterampilan di bidang pemrograman web, rekayasa sistem, dan jaringan komputer.",
      },
      {
        title: "SMKN 4 Makassar",
        period: "2017 - 2020",
        description: "Teknik Komputer dan Jaringan. Mendalami dasar-dasar infrastruktur jaringan, hardware, dan sistem informasi.",
      },
    ],
  },
];

export type OrganizationItem = {
  title: string;
  role: string;
  description: string;
  badge: string;
};

export const organizations: OrganizationItem[] = [
  {
    title: "Yayasan Celebes Cleft Center (Makassar)",
    role: "Staf & Narahubung Program Sosial",
    description:
      "Bertindak sebagai staf dan narahubung utama program operasi bibir & langit-langit sumbing gratis bermitra dengan Smile Train Indonesia untuk membantu masyarakat pra-sejahtera di Indonesia Timur.",
    badge: "Social Impact & Volunteer",
  },
  {
    title: "Handayani English Community Circle (HECTIC)",
    role: "Anggota Aktif",
    description:
      "Mengembangkan kemampuan komunikasi bahasa Inggris, public speaking, dan soft skills melalui English Camp serta kegiatan kolaboratif antar mahasiswa.",
    badge: "Language & Soft Skills",
  },
  {
    title: "Google Developer Group on Campus Universitas Hasanuddin (GDGoC Unhas)",
    role: "Anggota Komunitas",
    description:
      "Meningkatkan wawasan dalam ekosistem teknologi modern, workshop pengembangan web, seminar teknologi, serta proyek kolaboratif.",
    badge: "Tech Community",
  },
  {
    title: "Teater Remaja Makassar",
    role: "Anggota & Pelaku Seni Peran",
    description:
      "Aktif dalam seni pertunjukan teater, mengasah olah ekspresi, rasa percaya diri, dan komunikasi panggung interaktif.",
    badge: "Creative & Performing Arts",
  },
];

export type PortfolioProject = {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
  github?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "Pemeriksaan Kelelahan Karyawan",
    description:
      "Website analisis tingkat kelelahan karyawan dengan fitur rekomendasi tindakan. Dibangun menggunakan HTML5, TailwindCSS, dan JavaScript.",
    image: "/images/portfolio/website/Screenshot (374).png",
    category: "website",
    tags: ["HTML5", "TailwindCSS", "JavaScript"],
    link: "https://vgshf.github.io/pemeriksaan-kelelahan-karyawan/",
  },
  {
    title: "Website Portofolio",
    description:
      "Website portofolio pribadi dengan desain modern dan responsif. Menampilkan proyek-proyek unggulan dan informasi kontak.",
    image: "/images/portfolio/website/Screenshot (379).png",
    category: "website",
    tags: ["HTML5", "TailwindCSS", "JavaScript"],
    link: "https://yuliagusmy.github.io/portofolio-tailwindcss/",
  },
  {
    title: "TomaTech",
    description:
      "Platform deteksi penyakit daun tomat berbasis AI untuk membantu petani Indonesia. Deteksi penyakit otomatis dengan upload foto, rekomendasi penanganan, statistik, forum diskusi, dan chatbot AI.",
    image: "/images/portfolio/website/toma-techs.png",
    category: "website",
    tags: ["AI/ML", "Python", "TailwindCSS", "JavaScript"],
    link: "https://toma-techs.vercel.app/",
  },
  {
    title: "HECTIC - English Camp",
    description:
      "Desain feed Instagram untuk acara English Camp HECTIC. Menggunakan elemen visual menarik dengan kombinasi warna cerah dan tipografi modern.",
    image: "/images/portfolio/social-media-design/english camp (6).png",
    category: "design",
    tags: ["Canva", "Photoshop", "Illustrator"],
    link: "https://www.instagram.com/hectic_uhm/?hl=en",
  },
  {
    title: "PMM 4 Telkom University",
    description:
      "Feed Instagram untuk Pertukaran Mahasiswa Merdeka Batch 4. Desain menggunakan latar merah dengan elemen budaya Indonesia.",
    image: "/images/portfolio/social-media-design/TELKOM UNIVERSITY FIXX.png",
    category: "design",
    tags: ["Canva", "Photoshop", "Illustrator"],
    link: "https://www.instagram.com/pmm4_telkomuniversity/?hl=en",
  },
];

export const typographyImages = [
  "/images/portfolio/typography/typography1.png",
  "/images/portfolio/typography/typography2.png",
  "/images/portfolio/typography/typography3.png",
  "/images/portfolio/typography/typography4.png",
  "/images/portfolio/typography/typography5.png",
  "/images/portfolio/typography/typography6.png",
  "/images/portfolio/typography/typography7.jpg",
  "/images/portfolio/typography/typography8.jpg",
  "/images/portfolio/typography/typography9.jpg",
  "/images/portfolio/typography/typography10.jpg",
  "/images/portfolio/typography/typography11.jpg",
  "/images/portfolio/typography/typography12.webp",
  "/images/portfolio/typography/typography13.webp",
  "/images/portfolio/typography/typography14.webp",
  "/images/portfolio/typography/typography15.webp",
  "/images/portfolio/typography/typography16.webp",
  "/images/portfolio/typography/typography17.webp",
  "/images/portfolio/typography/typography18.jpg",
  "/images/portfolio/typography/typography19.webp",
  "/images/portfolio/typography/typography20.webp",
];

export const clients = [
  { name: "Google", logo: "/images/clients/googlesvg.svg" },
  { name: "LinkedIn", logo: "/images/clients/linkedin.svg" },
  { name: "Pinterest", logo: "/images/clients/pinterest.svg" },
  { name: "YouTube", logo: "/images/clients/youtube.svg" },
];

export const blogPosts = [
  {
    title: "Tips Belajar Programming",
    category: "Programming",
    description:
      "Pelajari cara memulai perjalanan programming Anda dengan langkah-langkah mudah dan efektif.",
    image: "/images/blog/5.png",
  },
  {
    title: "Membangun Website dengan TailwindCSS",
    category: "Web Development",
    description:
      "Panduan lengkap membangun website modern menggunakan TailwindCSS dengan mudah.",
    image: "/images/blog/1.png",
  },
  {
    title: "Tips Keluar Kota dengan Hemat",
    category: "Travel",
    description:
      "Simak tips dan trik sederhana agar perjalanan keluar kota Anda lebih hemat dan nyaman.",
    image: "/images/blog/6.png",
  },
];

export type CertificateItem = {
  title: string;
  issuer: string;
  level: string;
  date: string;
  expiry: string;
  credentialId?: string;
  image: string;
  link: string;
  platform: "dicoding" | "coursera" | "canva" | "opswat" | "myskill" | "linkedin";
  category: "frontend" | "backend" | "cloud" | "data" | "design" | "other";
};

export const certificates: CertificateItem[] = [
  {
    title: "Belajar Fundamental Front-End Web Development",
    issuer: "Dicoding Indonesia",
    level: "Menengah",
    date: "28 Mei 2025",
    expiry: "28 Mei 2028",
    credentialId: "6RPNRQWK9X2M",
    image: "/images/certificates/certificate1.png",
    link: "https://www.dicoding.com/certificates/6RPNRQWK9X2M",
    platform: "dicoding",
    category: "frontend",
  },
  {
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    level: "Pemula",
    date: "26 Mei 2025",
    expiry: "26 Mei 2028",
    credentialId: "KEXL7O04WXG2",
    image: "/images/certificates/certificate2.png",
    link: "https://www.dicoding.com/certificates/KEXL7O04WXG2",
    platform: "dicoding",
    category: "backend",
  },
  {
    title: "Belajar Membuat Front-End Web untuk Pemula",
    issuer: "Dicoding Indonesia",
    level: "Pemula",
    date: "Mei 2025",
    expiry: "Mei 2028",
    credentialId: "L4PQENGM2PO1",
    image: "/images/certificates/certificate3.svg",
    link: "https://www.dicoding.com/certificates/L4PQENGM2PO1",
    platform: "dicoding",
    category: "frontend",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    level: "Dasar",
    date: "Mei 2025",
    expiry: "Mei 2028",
    credentialId: "JMZVE69M3PN9",
    image: "/images/certificates/certificate4.svg",
    link: "https://www.dicoding.com/certificates/JMZVE69M3PN9",
    platform: "dicoding",
    category: "frontend",
  },
  {
    title: "Belajar Penggunaan Generative AI",
    issuer: "Dicoding Indonesia",
    level: "Dasar",
    date: "Juni 2025",
    expiry: "Juni 2028",
    credentialId: "N9ZO9WNVRXG5",
    image: "/images/certificates/certificate5.svg",
    link: "https://www.dicoding.com/certificates/N9ZO9WNVRXG5",
    platform: "dicoding",
    category: "other",
  },
  {
    title: "Financial Literacy 101",
    issuer: "Dicoding Indonesia",
    level: "Dasar",
    date: "Mei 2025",
    expiry: "Mei 2028",
    credentialId: "72ZD5182LZYW",
    image: "/images/certificates/certificate6.svg",
    link: "https://www.dicoding.com/certificates/72ZD5182LZYW",
    platform: "dicoding",
    category: "other",
  },
  {
    title: "Create and Design Digital Products using Canva",
    issuer: "Coursera Project Network",
    level: "Proyek Terpandu",
    date: "Juni 2025",
    expiry: "Tanpa Kedaluwarsa",
    credentialId: "GLYHH8JWIWY3",
    image: "/images/certificates/certificate7.svg",
    link: "https://www.coursera.org/account/accomplishments/verify/GLYHH8JWIWY3",
    platform: "coursera",
    category: "design",
  },
  {
    title: "Introduction to Prompt Engineering for Generative AI",
    issuer: "LinkedIn Learning",
    level: "Profesional",
    date: "Juni 2025",
    expiry: "Tanpa Kedaluwarsa",
    credentialId: "07b6141c5a9b",
    image: "/images/certificates/certificate8.svg",
    link: "https://www.linkedin.com/learning/certificates/07b6141c5a9b29c6657465964b72e2ed4aa2ffe0d96089bbc975441c88662dbe/",
    platform: "linkedin",
    category: "other",
  },
  {
    title: "Introduction to Critical Infrastructure Protection (ICIP)",
    issuer: "OPSWAT Academy",
    level: "Keamanan Siber",
    date: "Juni 2025",
    expiry: "Juni 2026",
    credentialId: "WR2kdbZgIQ",
    image: "/images/certificates/certificate9.svg",
    link: "https://learn.opswatacademy.com/certificate/WR2kdbZgIQ",
    platform: "opswat",
    category: "other",
  },
  {
    title: "Short Class - Index Match, Vlookup and Hlookup in Ms. Excel",
    issuer: "MySkill",
    level: "Spreadsheet Data",
    date: "April 2025",
    expiry: "Tanpa Kedaluwarsa",
    credentialId: "248185/EXL/LM/04/2025",
    image: "/images/certificates/certificate10.svg",
    link: "https://myskill.id/",
    platform: "myskill",
    category: "data",
  },
];

export const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Sertifikat", href: "#certificates" },
  { name: "Kontak", href: "#contact" },
];
