# PROJECT INITIALIZATION & DEVELOPMENT BRIEF
## PERSONAL PORTFOLIO — ZEN®

### PHASE 1 — PROJECT OVERVIEW

Buat sebuah personal portfolio website dengan identitas **Creative Technologist — Design × Technology**.

Website ini berfungsi sebagai personal portfolio untuk menampilkan:
- Profil dan informasi pribadi.
- Portfolio UI/UX Design dan Graphic Design.
- Project Software Development.
- Pengalaman organisasi dan kepanitiaan.
- Prestasi dan pencapaian.
- Skills dan teknologi yang dikuasai.
- Informasi kontak serta social media.

Website harus merepresentasikan seseorang yang memiliki ketertarikan dan kemampuan di bidang desain digital sekaligus software development.

**Konsep utama:**
- Creative Tech Portfolio.
- Experimental Balanced.
- Modern, bold, expressive, clean, dan professional.
- Memiliki karakter visual yang kuat dan tidak terlihat seperti template portfolio developer biasa.

Nama identitas website: **ZEN®**

Tagline konsep: **DESIGN × TECHNOLOGY**

### PHASE 2 — FRAMEWORK & TECHNOLOGY

Gunakan teknologi berikut:

| Teknologi | Fungsi |
|---|---|
| Next.js | React framework dan routing |
| TypeScript | Bahasa pemrograman utama |
| Tailwind CSS | Styling dan responsive layout |
| Framer Motion | Animasi dan interaksi |
| Lucide React | Icon library |
| Three.js / React Three Fiber | Elemen 3D interaktif pada hero |
| Vercel | Deployment |

Ketentuan:
1. Gunakan Next.js dengan App Router.
2. Gunakan TypeScript untuk seluruh komponen dan logic.
3. Gunakan Tailwind CSS untuk sistem styling.
4. Gunakan Framer Motion untuk animasi yang diperlukan.
5. Gunakan komponen reusable dan modular.
6. Pisahkan data project dari komponen UI menggunakan file TypeScript.
7. Untuk tahap awal, gunakan data statis. Jangan membuat backend, database, atau admin dashboard yang belum diperlukan.
8. Pastikan semua dependency kompatibel dengan versi framework yang digunakan.

### PHASE 3 — PROJECT FOLDER STRUCTURE

Gunakan struktur folder yang terorganisasi dan scalable seperti berikut:

```text
zen-portfolio/
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   ├── projects/
│   │   ├── backgrounds/
│   │   └── icons/
│   │
│   ├── fonts/
│   └── models/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   │
│   │   ├── about/
│   │   ├── works/
│   │   ├── experience/
│   │   └── contact/
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── FeaturedWorks.tsx
│   │   │   ├── WhatIDo.tsx
│   │   │   ├── ExperiencePreview.tsx
│   │   │   └── ContactCTA.tsx
│   │   │
│   │   ├── ui/
│   │   └── three/
│   │
│   ├── data/
│   │   ├── projects.ts
│   │   ├── experience.ts
│   │   ├── achievements.ts
│   │   └── skills.ts
│   │
│   ├── hooks/
│   ├── lib/
│   ├── types/
│   └── utils/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

Struktur boleh disesuaikan apabila ada kebutuhan teknis, tetapi pertahankan prinsip modular, reusable, dan mudah dikembangkan.

### PHASE 4 — VISUAL DESIGN SYSTEM

Gunakan identitas visual **Electric Blue & Acid Yellow** dengan gaya Experimental Balanced.

#### 4.1 Color Palette

**Dark Theme — Default**

| Elemen | Warna | Hex |
|---|---|---|
| Background | Deep Navy | `#101820` |
| Surface | Dark Blue Gray | `#1C2732` |
| Elevated Surface | Slate Dark | `#263541` |
| Primary | Electric Blue | `#2457FF` |
| Accent | Acid Yellow | `#B9F227` |
| Primary Text | Soft White | `#E8EDF2` |
| Secondary Text | Muted Gray | `#9AA8B5` |
| Border | Dark Slate | `#344451` |

**Light Theme — Alternative**

| Elemen | Warna | Hex |
|---|---|---|
| Background | Soft Off White | `#F4F6F2` |
| Surface | White | `#FFFFFF` |
| Elevated Surface | Light Gray Green | `#E9EEE8` |
| Primary | Electric Blue | `#2457FF` |
| Accent | Acid Lime | `#A8DF16` |
| Primary Text | Dark Charcoal | `#17212B` |
| Secondary Text | Gray | `#5D6872` |
| Border | Soft Gray | `#D5DDD6` |

Gunakan pembagian warna secara proporsional:
- 60% background.
- 20% surface.
- 12% primary color.
- 8% accent color.

Jangan menggunakan seluruh warna secara bersamaan dalam satu section. Electric Blue dan Acid Yellow harus menjadi aksen visual, bukan warna dominan di setiap elemen.

#### 4.2 Typography

Gunakan kombinasi tiga font:

**1. Space Grotesk**
- Untuk heading utama.
- Judul section.
- Headline berukuran besar.
- Memberikan kesan modern dan eksperimental.

**2. Inter**
- Untuk body text.
- Navigasi.
- Deskripsi project.
- Informasi umum.

**3. IBM Plex Mono**
- Untuk label kecil.
- Nomor project.
- Metadata.
- Tahun, kategori, dan elemen teknis.

Gunakan ukuran typography yang memiliki hierarki jelas. Headline harus menonjol, tetapi tetap mudah dibaca.

#### 4.3 Visual Identity

Gunakan karakter visual berikut:
- Editorial grid layout.
- Oversized typography.
- Asymmetric composition.
- Geometric shapes.
- Numbering dan technical labels.
- Thin borders.
- Subtle texture atau noise.
- Kontras warna yang kuat.
- Whitespace yang cukup.

Gunakan bentuk geometris sebagai identitas visual, bukan sekadar dekorasi.

Hindari:
- Desain template portfolio yang terlalu umum.
- Penggunaan gradient berlebihan.
- Glassmorphism di setiap section.
- Terlalu banyak rounded cards.
- Pastel color palette.
- Animasi yang mengganggu pembacaan.
- Terlalu banyak elemen dekoratif yang tidak memiliki fungsi.

#### 4.4 Component Styling

Terapkan standar berikut:
- Maximum content width: 1200–1280px.
- Desktop horizontal padding: 64–80px.
- Tablet padding: 32px.
- Mobile padding: 20–24px.
- Section spacing: 112–144px.
- Border radius: 4–12px.
- Border: 1px solid.
- Button height: 44–48px.
- Grid gap: 24px.
- Transition: 200–400ms.

### PHASE 5 — THEME SYSTEM

Website harus menyediakan dua mode tampilan:

1. Dark Mode sebagai tampilan default.
2. Light Mode sebagai alternatif.

Ketentuan:
- Sediakan theme toggle pada navbar.
- Gunakan CSS variables atau pendekatan theme system yang konsisten.
- Seluruh komponen harus mengikuti tema aktif.
- Perubahan tema harus memiliki transisi yang halus.
- Simpan preferensi tema pengguna agar tidak kembali ke default ketika halaman dibuka ulang.
- Pastikan kontras teks dan background tetap nyaman dibaca.

### PHASE 6 — INITIALIZATION TASKS

Sebelum membuat halaman Home, lakukan tahapan berikut:

1. Inisialisasi project Next.js dengan TypeScript.
2. Konfigurasikan Tailwind CSS.
3. Instal dan konfigurasikan seluruh dependency yang diperlukan.
4. Buat struktur folder sesuai arsitektur project.
5. Konfigurasikan font.
6. Buat global CSS dan design tokens.
7. Buat sistem Dark Mode dan Light Mode.
8. Siapkan reusable UI components.
9. Siapkan konfigurasi responsive breakpoint.
10. Pastikan project dapat dijalankan tanpa error.

### PHASE 7 — HOMEPAGE DEVELOPMENT

Setelah seluruh inisialisasi berhasil, lanjutkan pembangunan halaman Home dengan urutan:

1. Navigation Bar.
2. Interactive Hero Section.
3. About Preview.
4. Selected Works.
5. What I Do.
6. Experience & Achievements Preview.
7. Contact CTA.
8. Footer.

**Hero Section menjadi prioritas visual utama.**

Gunakan headline besar, komposisi editorial, dan objek geometris 3D interaktif dengan warna Electric Blue dan Acid Yellow.

Detail layout dan interaksi setiap section akan mengikuti visual reference yang diberikan secara terpisah.

### PHASE 8 — RESPONSIVENESS & QUALITY

Pastikan:
- Desktop, tablet, dan mobile memiliki layout yang optimal.
- Tidak ada horizontal overflow.
- Semua tombol dan navigasi berfungsi.
- Theme switcher bekerja.
- Animasi berjalan dengan performa baik.
- Mendukung prefers-reduced-motion.
- Komponen dapat digunakan kembali.
- Tidak ada error TypeScript atau build.
- Optimalkan ukuran gambar dan performa halaman.

### FINAL INSTRUCTION

Kerjakan project secara bertahap dan jangan melewati proses inisialisasi.

**Prioritas pertama:** fondasi project, struktur folder, dependency, konfigurasi, dan design system.

**Prioritas kedua:** pembangunan halaman Home berdasarkan konsep visual yang telah ditentukan.

Jangan membuat informasi pribadi, project, pengalaman, atau pencapaian fiktif. Jika data belum tersedia, gunakan placeholder yang mudah diganti.

Utamakan kualitas visual, konsistensi desain, clean code, usability, accessibility, dan performa.

Hasil akhir harus terasa seperti portfolio seorang **Creative Technologist**, bukan website portfolio developer dari template generik.