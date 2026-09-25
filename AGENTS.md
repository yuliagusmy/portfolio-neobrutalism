# Portfolio Neobrutalism — Agent Rules & Constraints

> Dokumen ini adalah **kontrak kerja agent**. Baca dan patuhi aturan ini sebelum mengedit atau membuat kode baru.
> Diperbarui: September 2026

---

## 1. Stack yang Digunakan (JANGAN GANTI)

| Layer | Teknologi | Catatan / Versi |
|---|---|---|
| **Framework** | Next.js 15 (App Router) | React 19, TypeScript (`strict: true`) |
| **Styling** | Tailwind CSS v4 | `@import "tailwindcss";` di `globals.css` |
| **Icons** | Lucide React + Custom Icons | `lucide-react`, custom SVG di `icons.tsx` |
| **Micro-interaksi** | `canvas-confetti` | Efek selebrasi interaktif |
| **Font Family** | Space Grotesk & Space Mono | Di-load via Next.js Google Fonts di `layout.tsx` |
| **Dev Port** | `http://localhost:3001` | Dijalankan via `next dev -p 3001` |

---

## 2. Konvensi Coding

### Komponen & Halaman Next.js
- Selalu gunakan `"use client";` jika komponen membutuhkan state, event listener, efek scroll, atau interaksi DOM.
- Nama komponen: **PascalCase** (`ProfileCardFrame`, `WeeklyRegistrationHub.tsx`).
- Nama folder route: **kebab-case** (`app/about/page.tsx`, `app/certificates/page.tsx`).
- **Batas ukuran komponen: 350–400 baris**. Jika komponen mulai terlalu panjang, pecah menjadi sub-komponen terpisah di folder komponen terkait.
- Semua props harus didefinisikan dengan TypeScript `interface` atau `type`.
- **DILARANG melakukan hardcode data profil/proyek langsung di dalam komponen**. Semua konten statis wajib diimpor dari [`src/lib/data.ts`](file:///d:/Project/web-portofolio-neobrutalism/portfolio-neo/src/lib/data.ts).

### Komentar Kode & Gaya Bahasa
- Komentar kode: hanya jelaskan *kenapa* suatu keputusan teknis diambil, bukan mengulangi *apa* yang dilakukan kode.
- Dilarang menambahkan komentar AI generik (misal: `// Helper function to render items`).
- Jangan hapus penanda komentar `<!-- antislop:start -->` dan `<!-- antislop:end -->`.
- Hindari tanda em dash (`—`) pada teks copy web; gunakan koma, titik, tanda kurung, atau titik dua sesuai aturan antislop R-02.

---

## 3. File & Folder yang DILARANG Diubah Agent (Protected)

```
AGENTS.md                              👉 Dokumen kontrak kerja ini
GEMINI.md                              👉 Hub agent
DESIGN.md                              👉 Design system, ubah hanya jika diminta eksplisit
ARCHITECTURE.md                        👉 Blueprint arsitektur
portfolio-neo/next.config.ts           👉 Config Next.js
portfolio-neo/postcss.config.mjs       👉 Config PostCSS
portfolio-neo/tsconfig.json           👉 Config TypeScript
portfolio-neo/package.json             👉 Jangan install library baru tanpa persetujuan
portfolio-neo/node_modules/            👉 JANGAN PERNAH disentuh
```

---

## 4. File yang Boleh Diubah Agent

```
portfolio-neo/src/components/**/*.tsx  👉 Komponen antarmuka Neobrutalism
portfolio-neo/src/app/**/*.tsx         👉 Halaman & template App Router
portfolio-neo/src/lib/data.ts          👉 Data proyek, sertifikat, blog, profil
portfolio-neo/src/lib/utils.ts         👉 Utility helper
portfolio-neo/src/app/globals.css      👉 Token & style CSS Neobrutalism
```

---

## 5. Ringkasan Design System (Detail di `DESIGN.md`)

- **Filosofi**: **Neobrutalism** — garis tepi hitam tebal, bayangan jatuh kaku tanpa blur (*hard shadow*), warna aksen cerah/pastel yang kontras, dan interaksi fisik taktil.
- **Borders**: Selalu solid hitam `border-2 border-black` (mobile) hingga `border-3 border-black` (desktop).
- **Shadows**: Hard drop shadow hitam:
  - Mobile: `shadow-[2.5px_2.5px_0px_#000]` atau `shadow-[3px_3px_0px_#000]`
  - Desktop: `shadow-[4px_4px_0px_#000]` atau `shadow-[6px_6px_0px_#000]`
- **Tombol & Taktil**:
  - Wajib ada efek fisik tekan: `active:translate-x-1 active:translate-y-1 active:shadow-none`.
  - Hover state harus dibungkus atau disesuaikan agar tidak *stuck* di layar sentuh HP.
- **Layar Mobile 390px**: Wajib patuh pada panduan mobile di [`DESIGN.md`](file:///d:/Project/web-portofolio-neobrutalism/DESIGN.md) (tidak ada card raksasa, padding proporsional, dock bottom nav responsif).

---

<!-- antislop:start -->
## antislop
Untuk pekerjaan UI, copy, orang/aksesibilitas, layout mobile, atau komentar kode:
- Baca `antislop.md` (core filter) dulu
- Lalu baca skill yang relevan di `.agents/skills/`:
  - UI / visual: `.agents/skills/antislop-ui/SKILL.md`
  - Copy & text: `.agents/skills/antislop-copywriting/SKILL.md`
  - People / accessibility: `.agents/skills/antislop-human/SKILL.md`
  - Mobile / responsive: `.agents/skills/antislop-layoutmobile/SKILL.md`
  - Code comments: `.agents/skills/antislop-code/SKILL.md`
  - Inspirasi desain: `.agents/skills/awwwards-inspiration/SKILL.md`
  - Gerakan & animasi: `.agents/skills/awwwards-motion-study/SKILL.md`
Sebelum memulai tugas desain baru, tanyakan ke pengguna apakah antislop diterapkan *selama pengerjaan* atau *setelah selesai*.
<!-- antislop:end -->
