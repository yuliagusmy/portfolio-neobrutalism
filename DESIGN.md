# DESIGN.md — Direction for Yuliagus M. Yunus Portfolio

> Dokumen ini mendefinisikan identitas desain otentik, token visual, dan standar responsif untuk website portofolio ini. `antislop.md` bertindak sebagai filter; `DESIGN.md` memberikan jiwa, konsistensi, dan arah visual.

---

## 1. Identitas & Kepribadian (Brand Identity)

- **Owner**: Yuliagus M. Yunus (Agus / MieAyammm) — Front-End Web Developer & Visual Creator.
- **Brand Persona**: Otentik, energik, tajam, kreatif, ramah (*Happy Virus* ✨ & *1000% Social Battery* 🔋), dan profesional.
- **Filosofi Desain**: **Neobrutalism** — garis tepi hitam kontras tinggi, bayangan jatuh kaku tanpa blur (*unblurred hard drop shadows*), aksen warna-warni cerah/pastel yang vibran, tipografi tebal percaya diri, dan interaksi fisik taktil saat ditekan.

---

## 2. Dials (Antislop Liveliness Toolkit)

- **ENERGY: 4 / 5** — Warna-warna cerah saling melengkapi, garis tepi hitam pekat, stiker badge miring (*rotated tape badge*), running marquee ticker, dan aksen playful.
- **RHYTHM: 4 / 5** — Variasi ritme di setiap section: Hero dengan profil card berlapis dan badge melayang; About dengan tab timeline; Portfolio dengan kartu proyek & filter kategori; Certificates dengan kartu showcase; Contact dengan form interaktif berbingkai tebal.
- **MOTION: 3 / 5** — Mikro-interaksi taktil: tombol yang benar-benar amblas saat ditekan (`active:translate-x-1 active:translate-y-1 active:shadow-none`), hover terangkat renyah, dan efek confetti saat trigger tertentu. Dilarang menggunakan bola blob kabur generik (*blurred floating gradient orbs*).

---

## 3. Palet Warna (Color Palette)

### Background & Surface
- **Canvas Background**: `#e0d1ff` (Lavender pastel) / `#FEFCE8` (Warm canvas off-white).
- **Surface Cards**: Murni Putih `#FFFFFF` dan Kuning Krim `#FFFBEB` dengan border hitam pekat.
- **Ink & Line**: Hitam Pekat `#000000` (Digunakan untuk teks utama, border `border-2` atau `border-3`, dan hard shadows).

### Aksen Neobrutalis
- **Electric Sky / Blue**: `#88aaee` / `#3B82F6` (CTA sekunder, tab terpilih)
- **Energetic Yellow**: `#ffdb58` / `#FACC15` (Badge, highlights, bintang)
- **Punchy Lime**: `#a3e635` / `#84CC16` (Status aktif, teknologi modern)
- **Playful Purple**: `#a388ee` / `#8B5CF6` (Profile card frame, tag khusus)
- **Radiant Coral / Pink**: `#ff6b6b` / `#FF8FAB` (Aksen perhatian, dot Mac, tombol hati)

---

## 4. Tipografi (Typography)

- **Font Utama (Headings & Body)**: `Space Grotesk` (sans-serif geometris tebal dan berkarakter).
- **Font Aksen (Code, Badges, Metrics)**: `Space Mono` (monospace tajam untuk tanggal, tag, dan badge).
- **Standar Copywriting**:
  - Dilarang memakai kata-kata klise marketing AI ("Unlock the boundless potential of...", "Elevating digital experiences").
  - **Dilarang memakai tanda em dash (`—`)** dalam copy teks (Aturan R-02); gunakan tanda koma, titik, titik dua, atau kurung.
  - Nada bicara: Hangat, percaya diri, jujur, dan komunikatif dalam Bahasa Indonesia.

---

## 5. Token Neobrutalism & Kerajinan Visual (Craftsmanship)

- **Borders**: Selalu solid hitam `border-2 border-black` (mobile) hingga `border-3 border-black` / `border-3.5` (desktop).
- **Shadows**:
  - Mobile default: `shadow-[2.5px_2.5px_0px_#000]` atau `shadow-[3px_3px_0px_#000]`.
  - Desktop standard: `shadow-[4px_4px_0px_#000]` atau `shadow-[6px_6px_0px_#000]`.
- **Tombol Taktil**:
  - Efek tekan fisik: `transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none`.
  - Hover: `hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]`.
  - Keyboard Focus: `focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none`.

---

## 6. Standar Tampilan Mobile 390px (Mobile 390px Neobrutalist Standards)

Layar 360px–390px (iPhone dan smartphone Android modern) adalah viewport paling umum untuk pengunjung portofolio. Neobrutalism berisiko terlihat terlalu penuh (*cluttered*) jika border dan shadow tidak diskalakan dengan benar.

### A. Prinsip "Compact, Crisp & Scannable"
1. **Dilarang Card Raksasa (No Giant Cards)**: Kartu konten di mobile dilarang memakan tinggi layar vertikal lebih dari 280px tanpa scroll.
2. **Skalasi Border & Shadow**:
   - Di mobile gunakan `border-2` (bukan `border-4`) agar ruang dalam (*inner padding*) tidak sempit.
   - Di mobile gunakan `shadow-[2.5px_2.5px_0px_#000]` atau `shadow-[3px_3px_0px_#000]` agar elemen tidak terpotong tepi layar (*horizontal overflow*).
3. **Pola Grid 2-Kolom untuk Item Ringkas**: Untuk kartu sertifikat, skill tags, atau badge mini, utamakan grid 2 kolom di mobile (`grid-cols-2 gap-2.5`) daripada 1 kolom memanjang.
4. **Horizontal Scroll Snap (`overflow-x-auto snap-x`)**: Untuk kategori filter, tech tags, atau galeri pendukung, gunakan horizontal scrollbar tersembunyi dengan snap agar cepat di-swipe satu jempol.

### B. Standar Tipografi Mobile 390px
| Elemen | Ukuran di Layar 390px | Weight & Line-Height | Catatan |
|---|---|---|---|
| **H1 Hero Headline** | `clamp(2rem, 8.5vw, 2.5rem)` | `font-black`, `line-height: 1.1` | Ringkas dan bertenaga |
| **H2 Section Heading** | `clamp(1.35rem, 5vw, 1.65rem)` | `font-black`, `line-height: 1.2` | Konsisten di semua section |
| **Section Subtitle** | `0.85rem` – `0.9rem` | `font-medium`, `line-height: 1.4` | Maksimal 2–3 baris |
| **Card Title (Grid)** | `0.875rem` – `1rem` | `font-bold`, `line-height: 1.3` | Gunakan line-clamp bila panjang |
| **Body / Deskripsi** | `0.875rem (14px)` | `font-normal`, `line-height: 1.5` | Tidak bertele-tele |
| **Badges & Tags** | `0.65rem` – `0.75rem` | `font-mono`, `font-bold` | Compact padding `px-2 py-0.5` |

### C. Standar Padding & Safe Area Mobile
- **Container Padding**: `px-3 sm:px-6 py-6 sm:py-16` (Dilarang menggunakan padding raksasa `py-20` atau `px-8` di mobile).
- **Card Padding**: Maksimal `p-3.5` (14px) untuk kartu grid mobile; maksimal `p-4` (16px) untuk kartu utama.
- **Bottom Safe Area**: Karena portofolio dilengkapi [BottomNav.tsx](file:///d:/Project/web-portofolio-neobrutalism/portfolio-neo/src/components/BottomNav.tsx) (dock bawah mengambang), pastikan konten terbawah memiliki margin ekstra `pb-24` di mobile agar tidak tertutup dock navigasi.

### D. Touch Physics vs Hover States
Di layar ponsel (touchscreen), pseudo-class `:hover` sering kali "terkunci" (*sticky hover*) setelah disentuh jari.
- Gunakan `@media (hover: hover)` untuk efek hover terangkat.
- Selalu prioritaskan feedback `:active` (`active:translate-x-1 active:translate-y-1 active:shadow-none`) sehingga pengguna ponsel merasakan sensasi tombol fisik yang ditekan.

---

## 7. Integritas & Aksesibilitas

1. **Bukti Nyata (Evidence Over Claims)**:
   - Tautan portofolio dan repo GitHub harus mengarah ke URL asli yang aktif (Rule R-17, R-26).
   - Sertifikat harus mencantumkan link verifikasi atau gambar bukti nyata.
2. **Kontras Warna**:
   - Seluruh teks hitam di atas surface warna wajib lolos kontras rasio WCAG AAA (minimal 7:1).
3. **Keyboard & Screen Reader**:
   - Semua elemen interaktif (filter tab, lightbox modal, kartu proyek) wajib bisa dinavigasi via tombol Tab dan ditutup via tombol Escape (`Esc`).
