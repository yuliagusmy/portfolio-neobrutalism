# DESIGN.md — Direction for Yuliagus M. Yunus Portfolio

> This file provides the authentic design identity for this website. `antislop.md` acts as the filter; `DESIGN.md` provides the soul and direction.

## 1. Identity & Personality
- **Owner**: Yuliagus M. Yunus (Agus) — Front-End Web Developer & Visual Creator.
- **Brand / Persona**: Authentic, energetic, sharp, creative, confident, and professional.
- **Design Philosophy**: **Neobrutalism** — high-contrast borders, solid unblurred drop shadows, vibrant color accents, candid typographic hierarchy, and bold tactile physical interactions.

## 2. Dials (Antislop Liveliness Toolkit)
- **ENERGY: 4 / 5** — Bold contrasting colors, black outlines, noticeable badges, marquee tickers, and vibrant stickers/cards.
- **RHYTHM: 4 / 5** — Distinct layouts per section (Hero with profile card and dynamic badge; About with tabbed timeline and grid badges; Portfolio with categorized gallery and interactive lightbox; Blog with distinct editorial cards; Contact with tactile physical form).
- **MOTION: 3 / 5** — Crisp, tactile micro-interactions: physical press feedback (`active:translate-x-0 active:translate-y-0 active:shadow-none`), snappy hover transitions (`hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_#000]`), and smooth marquee motion. No generic floating orbs.

## 3. Color Palette
- **Base Background**: `#FEFCE8` / `#FFFDF0` / Warm Canvas Off-white (`bg-[#FEFCE8]`).
- **Surface**: Pure White `#FFFFFF` and Warm Cream `#FFFBEB` with solid black borders.
- **Ink / Line**: Deep Black `#000000` (Used for text, borders `border-2` or `border-3`, and hard drop shadows).
- **Accents**:
  - Primary Electric Blue: `#3B82F6` / `#2563EB`
  - Energetic Yellow: `#FACC15` / `#FDE047`
  - Radiant Coral / Red: `#FF6B6B` / `#EF4444`
  - Punchy Lime / Emerald: `#10B981` / `#84CC16`
  - Playful Purple / Violet: `#A855F7`

## 4. Typography
- **Primary Headings & Body**: Plus Jakarta Sans / Outfit (sans-serif), geometric, legible, heavy font weights (`font-black`, `font-bold`, `font-extrabold`) for headers.
- **Monospace Accents**: Clean mono accents for meta badges, tags, code snippets, and dates.
- **Copywriting Standard**:
  - No generic AI marketing buzzwords ("Unlock the power of...", "Revolutionary AI-powered...").
  - Strictly no em dashes (`—`) in copy (Rule R-02); use commas, periods, colons, or parentheses.
  - Honest, warm, and professional tone in Indonesian.

## 5. Craftsmanship & Neobrutalist Tokens
- **Borders**: Always explicit solid black: `border-2 border-black` or `border-4 border-black`.
- **Shadows**: Pure hard shadows without blur: `shadow-[4px_4px_0px_#000]`, `shadow-[6px_6px_0px_#000]`, or `shadow-[8px_8px_0px_#000]`.
- **Buttons**:
  - Tactile physical press state: `transition-all hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_#000] active:translate-x-1 active:translate-y-1 active:shadow-none`.
  - Accessible keyboard focus: `focus-visible:ring-2 focus-visible:ring-black focus-visible:outline-none`.
- **Integrity**:
  - No dead links or non-functional placeholder buttons (Rule R-26).
  - Testimonial and portfolio evidence must be real (Rule R-17, R-18, R-38).
  - Every theme and modal must support Escape key and accessible tab ordering.
