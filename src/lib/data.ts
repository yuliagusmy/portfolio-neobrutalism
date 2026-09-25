// ===========================
// Portfolio Data Constants
// ===========================

export const personalInfo = {
  name: "Yuliagus M. Yunus",
  nickname: "Agus",
  brand: "MieAyammm",
  title: "Front-End Web Developer & Creative Talent",
  email: "yuliagusmy@gmail.com",
  phone: "+6285341920479",
  canvaPresentationLink: "https://www.canva.com/design/DAHIbplC0jI/KJ6WYpasPdeFI3VYdEPUyg/view",
  cvLink:
    "https://drive.google.com/file/d/1yt0qtbtePNN2JuZSiOZoPnzeETVl6BSJ/view?usp=sharing",
  profileImage: "/images/profile-black.jpg",
  tagline: "Sebaik-baik manusia adalah yang bermanfaat bagi orang lain dan sekitarnya.",
  mbti: "ENFJ",
  socialBattery: "1000% Social Battery 🔋",
  vibe: "Happy Virus ✨",
  instagramHandle: "@yuliagusmyunus",
  instagramFollowers: "2.9K+",
  typingTexts: ["Web Developer", "Creative Talent", "Social Media Designer", "Videographer", "Filmmaker", "Content Creator", "Volunteer", "Yogis", "Traveler", "Runner"],
  bio: `Hai, saya Agus, seorang Front-End Web Developer dan Creative Worker dengan kepribadian ENFJ (1000% Social Battery & Happy Virus!) yang berfokus pada antarmuka web fungsional serta kreasi konten visual berdampak. Selain aktif dalam pemrograman web dan eksplorasi tipografi, saya juga berkarya sebagai freelance talent bersama YOTTA, menggerakkan literasi di Diskusi Buku Bareng (DBB), menjelajah kota bersama Jalan Bareng Makassar, serta berekspresi di panggung seni Teater Remaja Makassar.`,
  friendMessage: `Saya selalu bersemangat berkenalan dengan orang baru dan sangat terbuka untuk kolaborasi proyek web, konten video kreatif, aktivitas sosial, hingga diskusi teknologi dan desain.`,
  friendMessage2: `Mari terhubung dan bersama-sama menciptakan karya yang positif dan bermanfaat!`,
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
  {
    category: "Kreatif & Freelance",
    items: [
      {
        title: "Freelance Creative Talent - YOTTA Indonesia",
        period: "2024 - Sekarang",
        description:
          "Talent konten kreatif, pemeran video campaign komersial (Campaign End of Year Vacation Drama, Campaign Yotta x Hydro Coco), promosi pembukaan outlet baru, dan aktivasi media sosial Yotta.",
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
  {
    title: "Diskusi Buku Bareng (DBB)",
    role: "Pegiat Komunitas & Graphic Designer",
    description:
      "Menggerakkan perjamuan buku dan literasi publik di Makassar, serta merancang seluruh identitas visual, poster bedah buku, dan publikasi media sosial berkala DBB.",
    badge: "Literasi & Community",
  },
  {
    title: "Jalan Bareng Makassar",
    role: "Kontributor Komunitas & Creative Explorer",
    description:
      "Eksplorasi sudut-sudut kota Makassar, dokumentasi kreatif ruang publik, dan mengampanyekan gaya hidup sehat berjalan kaki bersama komunitas.",
    badge: "Urban Exploration",
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
    title: "Jalan Bareng Makassar",
    description:
      "Platform web komunitas eksplorasi jalan kaki dan aktivasi literasi di Makassar. Menyediakan katalog rute penjelajahan, aktivasi ruang kreatif, dan integrasi kegiatan kolaboratif warga.",
    image: "/images/portfolio/website/jalan-bareng.png",
    category: "website",
    tags: ["Nuxt.js", "Vue 3", "Pinia", "TailwindCSS", "Laravel"],
    link: "https://github.com/yuliagusmy/jalanbareng",
    github: "https://github.com/yuliagusmy/jalanbareng",
  },
  {
    title: "Brinarent: Platform Sewa Buku",
    description:
      "Platform sirkulasi peminjaman buku fisik modern dan aman dengan verifikasi identitas pengguna terintegrasi tanpa perlu menyetor uang deposit jaminan.",
    image: "/images/portfolio/website/brina-rent.jpg",
    category: "website",
    tags: ["Next.js 15", "React 19", "Supabase", "TailwindCSS", "shadcn/ui"],
    link: "https://github.com/yuliagusmy/",
    github: "https://github.com/yuliagusmy/",
  },
  {
    title: "Portal Kelurahan Mamajang Luar",
    description:
      "Sistem informasi pelayanan digital publik Kelurahan Mamajang Luar Kota Makassar. Menyediakan pengurusan surat online bebas pungli, pelacakan tiket aduan warga, berita terkini, dan etalase UMKM.",
    image: "/images/portfolio/website/kelurahan-mamajang-luar.png",
    category: "website",
    tags: ["React", "TypeScript", "Vite", "Supabase", "TailwindCSS"],
    link: "https://github.com/yuliagus123456789/web-kelurahan-mamajang-luar",
    github: "https://github.com/yuliagus123456789/web-kelurahan-mamajang-luar",
  },
  {
    title: "Who Are You by Music",
    description:
      "Aplikasi web analitik profil kepribadian musik berbasis AI. Mengintegrasikan Spotify Web API untuk menganalisis kebiasaan mendengarkan lagu dan Google Gemini API untuk menghasilkan deskripsi karakter pengguna.",
    image: "/images/portfolio/website/whoareyoubymusic-icon.png",
    category: "website",
    tags: ["React", "Gemini AI", "Spotify API", "Supabase", "TailwindCSS"],
    link: "https://github.com/yuliagusmy/whoareyoubymusic",
    github: "https://github.com/yuliagusmy/whoareyoubymusic",
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
    title: "Pemeriksaan Kelelahan Karyawan",
    description:
      "Website analisis tingkat kelelahan karyawan dengan fitur rekomendasi tindakan. Dibangun menggunakan HTML5, TailwindCSS, dan JavaScript.",
    image: "/images/portfolio/website/Screenshot (374).png",
    category: "website",
    tags: ["HTML5", "TailwindCSS", "JavaScript"],
    link: "https://vgshf.github.io/pemeriksaan-kelelahan-karyawan/",
  },
  {
    title: "Website Portofolio Tailwind",
    description:
      "Website portofolio pribadi dengan desain modern dan responsif. Menampilkan proyek-proyek unggulan dan informasi kontak.",
    image: "/images/portfolio/website/Screenshot (379).png",
    category: "website",
    tags: ["HTML5", "TailwindCSS", "JavaScript"],
    link: "https://yuliagusmy.github.io/portofolio-tailwindcss/",
    github: "https://github.com/yuliagusmy/portofolio-tailwindcss",
  },
  {
    title: "Simple POS System",
    description:
      "Sistem kasir dan Point of Sales modern dengan arsitektur end-to-end type-safe tRPC, autentikasi Clerk, basis data Supabase PostgreSQL via Prisma ORM, dan dynamic QR code.",
    image: "/images/portfolio/website/Screenshot (380).png",
    category: "website",
    tags: ["Next.js", "tRPC", "Prisma", "Supabase", "Clerk", "Zustand"],
    link: "https://github.com/yuliagusmy/simple-pos-trpc",
    github: "https://github.com/yuliagusmy/simple-pos-trpc",
  },
  {
    title: "Pomodoro Focus Timer",
    description:
      "Aplikasi web pengatur ritme produktivitas berbasis teknik Pomodoro dengan animasi responsif, mode offline, dan tracking interval fokus kerja.",
    image: "/images/portfolio/website/Screenshot (381).png",
    category: "website",
    tags: ["React", "Framer Motion", "Styled Components", "PWA"],
    link: "https://github.com/yuliagusmy/pomodoro-timer",
    github: "https://github.com/yuliagusmy/pomodoro-timer",
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
  {
    title: "Publikasi Diskusi Buku Bareng (DBB)",
    description:
      "Seri desain feed Instagram dan materi visual literasi publik Diskusi Buku Bareng di Makassar, berkolaborasi dengan Alliance Française dan Makassar Creative Hub.",
    image: "/images/portfolio/social-media-design/dbb-mie-ayam.png",
    category: "design",
    tags: ["Canva", "Social Media", "Literasi"],
    link: "https://www.instagram.com/diskusibukubareng/",
  },
  {
    title: "Campaign Yotta - End of Year Vacation Drama",
    description:
      "Konten video drama komedi liburan akhir tahun sebagai freelance talent bersama YOTTA. Berperan dalam produksi konten kreatif dan penyampaian pesan brand secara interaktif.",
    image: "/images/portfolio/creative-worker/yotta-barbar.jpeg",
    category: "creative",
    tags: ["Creative Talent", "Video Campaign", "YOTTA", "Acting"],
    link: "https://www.youtube.com/watch?v=sumoFFGhZRU",
  },
  {
    title: "Campaign Yotta x Hydro Coco & Outlet Launch",
    description:
      "Kampanye video komersial kolaborasi YOTTA x Hydro Coco serta peresmian outlet baru Yotta Express Villa Mutiara Makassar sebagai talent utama.",
    image: "/images/portfolio/creative-worker/yotta-outlet.jpeg",
    category: "creative",
    tags: ["Brand Collaboration", "YOTTA", "Hydro Coco", "Commercial"],
    link: "https://www.youtube.com/watch?v=-KTCfPPkRWw",
  },
];

export type SocialMediaFeed = {
  title: string;
  event: string;
  date: string;
  image: string;
  link: string;
};

export const socialMediaFeeds: SocialMediaFeed[] = [
  {
    title: "Bedah Buku: Seporsi Mie Ayam Sebelum Mati",
    event: "Diskusi Buku Bareng x Alliance Française",
    date: "15 Februari 2026",
    image: "/images/portfolio/social-media-design/dbb-mie-ayam.png",
    link: "https://www.instagram.com/diskusibukubareng/",
  },
  {
    title: "Di Balik Pergerakan Literasi Edisi 1",
    event: "Jalan Bareng x DBB x Makassar Creative Hub",
    date: "Panggung Diskusi",
    image: "/images/portfolio/social-media-design/dbb-pergerakan-literasi.png",
    link: "https://www.instagram.com/diskusibukubareng/",
  },
  {
    title: "Jadwal Program Rutin Komunitas DBB",
    event: "Lapak Baca Taman Macan & MIWF Benteng Rotterdam",
    date: "Agenda Bulanan",
    image: "/images/portfolio/social-media-design/dbb-jadwal-program.png",
    link: "https://www.instagram.com/diskusibukubareng/",
  },
  {
    title: "Perjamuan Buku & Lapak Buku Taman Macan",
    event: "Diskusi Buku Bareng x Jalan Bareng",
    date: "Minggu 12 April",
    image: "/images/portfolio/social-media-design/dbb-perjamuan-buku.png",
    link: "https://www.instagram.com/diskusibukubareng/",
  },
  {
    title: "Perayaan Buku di Makassar Creative Hub",
    event: "Pantai Losari Kota Makassar",
    date: "22 Februari 2026",
    image: "/images/portfolio/social-media-design/dbb-perayaan-buku.png",
    link: "https://www.instagram.com/diskusibukubareng/",
  },
  {
    title: "Perjamuan Buku Special Chapter Cap Go Meh",
    event: "Rumah Abu Marga Thoeng Makassar",
    date: "1 Maret",
    image: "/images/portfolio/social-media-design/dbb-cap-go-meh.png",
    link: "https://www.instagram.com/diskusibukubareng/",
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
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Portofolio", href: "/portfolio" },
  { name: "Sertifikat", href: "/certificates" },
  { name: "Kontak", href: "/contact" },
];
