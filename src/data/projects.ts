import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "foodie",
    slug: "foodie",
    name: "FOODIE — Smart Culinary & Food Discovery",
    category: "Mobile Development",
    year: "2026",
    role: "Mobile Developer & System Analyst",
    shortDescription:
      "Aplikasi mobile berbasis Flutter untuk pencarian kuliner cerdas dengan LBS, sensor shake, dan integrasi Supabase.",
    overview:
      "FOODIE adalah aplikasi mobile pencarian dan eksplorasi kuliner berbasis lokasi (Location-Based Service) yang dibangun menggunakan Flutter dan Dart. Aplikasi ini mengintegrasikan peta interaktif (flutter_map & latlong2), sensor getar (sensors_plus) untuk fitur 'shake to discover', kamera, pendeteksi wajah (Google ML Kit), serta basis data lokal Hive dan cloud database Supabase.",
    problem:
      "Pengguna sering kali bingung menentukan tempat makan yang sesuai dengan batasan anggaran dan jarak lokasi saat berada di suatu wilayah. Menggunakan aplikasi terpisah untuk mencari rute, menu, ulasan, dan kalkulasi pengeluaran makanan sering kali tidak praktis dan memakan waktu.",
    objectives: [
      "Mengimplementasikan pencarian kuliner berbasis lokasi (LBS) dan penentuan radius jarak terdekat.",
      "Membangun fitur interaktif 'Shake to Discover' menggunakan sensor gerak perangkat untuk rekomendasi makanan acak.",
      "Menyusun arsitektur sistem komprehensif dengan 33 lembar diagram UML (Use Case, Activity, Class, Sequence).",
      "Mengintegrasikan otentikasi dan penyimpanan data cloud melalui Supabase serta caching lokal menggunakan Hive.",
    ],
    contributions: [
      "Mengembangkan antarmuka dan alur navigasi mobile menggunakan Flutter dan Material Design.",
      "Mengintegrasikan modul sensor perangkat (sensors_plus) untuk interaksi rekomendasi kuliner berbasis gestur.",
      "Mengonfigurasi client database cloud Supabase serta caching lokal offline-ready menggunakan Hive.",
      "Menyusun dokumentasi pemodelan sistem UML lengkap (Use Case, Activity, Class, Sequence Diagrams).",
    ],
    process: [
      {
        title: "1. Konsep & Analisis Kebutuhan",
        description:
          "Menyusun dokumen konsep proyek PAM (Pemrograman Aplikasi Mobile) untuk mengidentifikasi kebutuhan fitur LBS, filter budget, dan interaksi sensor cerdas.",
      },
      {
        title: "2. Pemodelan Sistem (33 Diagram UML)",
        description:
          "Merancang arsitektur sistem secara detail: use case registrasi 3-tahap, activity diagram pencarian & filter, arsitektur kelas data, serta sequence diagram sinkronisasi cloud.",
      },
      {
        title: "3. Pengembangan Aplikasi Flutter",
        description:
          "Mengimplementasikan antarmuka mobile, routing halaman, peta interaktif, integrasi camera picker, dan parsing JSON data kuliner.",
      },
      {
        title: "4. Integrasi Sensor & Database",
        description:
          "Menghubungkan gestur shake perangkat, integrasi Google ML Kit, serta penyimpanan data ulasan kuliner ke Supabase dan Hive.",
      },
    ],
    technology: [
      "Flutter",
      "Dart",
      "Supabase",
      "Hive",
      "Location Service (LBS)",
      "UML Modeling",
    ],
    gallery: [
      {
        url: "/images/projects/foodie/foodie-logo.png",
        caption: "Brand Identity & Logo Resmi FOODIE",
        type: "branding",
      },
      {
        url: "/images/projects/foodie/foodie-app-icon.png",
        caption: "Ikon Aplikasi Mobile FOODIE",
        type: "branding",
      },
      {
        url: "/images/projects/foodie/ucm_04_home_pencarian_detail.png",
        caption: "Use Case Diagram: Home, Pencarian & Detail Kuliner",
        type: "diagram",
      },
      {
        url: "/images/projects/foodie/act_03_pencarian.png",
        caption: "Activity Diagram: Alur Pencarian Cerdas & Filter Kategori",
        type: "diagram",
      },
      {
        url: "/images/projects/foodie/cls_02_arsitektur.png",
        caption: "Class Diagram: Arsitektur Model Data & Kontroler Aplikasi",
        type: "diagram",
      },
    ],
    results:
      "Aplikasi mobile Flutter fungsional yang menggabungkan Location-Based Service, interaksi sensor gerak, dan penyimpanan hybrid online-offline yang terdokumentasi lengkap.",
    reflection:
      "Proyek ini memberikan pengalaman berharga dalam mengelola dependensi sensor hardware perangkat mobile, penanganan state multi-halaman di Flutter, serta sinkronisasi data cloud Supabase.",
    coverImage: "/images/projects/project-01.svg",
    repositoryUrl: "https://github.com/ZenFirdaus/backup_mobagus",
    featured: true,
  },
  {
    id: "pixeliq",
    slug: "pixeliq",
    name: "PIXELIQ — AI-Powered Design Analysis",
    category: "Web Development",
    year: "2026",
    role: "Backend & AI Developer, UI Designer",
    shortDescription:
      "Platform analisis desain berbasis FastAPI, OpenCV, dan Google Gemini AI untuk ekstraksi palet warna dan tipografi.",
    overview:
      "PIXELIQ adalah platform backend & API berbasis Python dan FastAPI yang memanfaatkan Computer Vision (OpenCV, Pillow) serta Google Gemini AI (google-genai) untuk melakukan audit desain antarmuka. Sistem ini mampu menganalisis harmoni palet warna, mendeteksi elemen tipografi, menjalankan OCR, dan memberikan rekomendasi perbaikan desain UI secara terotomatisasi.",
    problem:
      "Desainer dan pengembang sering kali kesulitan melakukan audit konsistensi visual secara objektif, mulai dari ekstraksi kode warna dominan, rasio kontras teks, hingga identifikasi font pada aset desain tanpa alat bantu otomatis.",
    objectives: [
      "Membangun API performa tinggi menggunakan FastAPI untuk pemrosesan gambar dan analisis desain.",
      "Mengembangkan modul ekstraksi warna dan kalkulasi harmoni palet menggunakan OpenCV dan Pillow.",
      "Mengintegrasikan Google Gemini AI untuk menghasilkan rekomendasi evaluasi desain UI berbasis visi komputer.",
      "Menyusun arsitektur endpoint RESTful API terstruktur dan terdokumentasi rapi.",
    ],
    contributions: [
      "Merancang arsitektur backend modular dengan struktur router FastAPI v1, schemas Pydantic, dan services terisolasi.",
      "Mengimplementasikan modul analisis warna (`app/ai/colors`), font (`app/ai/fonts`), dan visi komputer (`app/ai/vision`).",
      "Mengonfigurasi integrasi Google GenAI API untuk inferensi perbaikan tata letak dan ergonomi antarmuka.",
      "Menyiapkan konfigurasi CORS terstandarisasi untuk integrasi dengan antarmuka frontend.",
    ],
    process: [
      {
        title: "1. Arsitektur Backend & API Design",
        description:
          "Menyusun struktur proyek FastAPI dengan pemisahan lapisan core config, schemas Pydantic, repositories, dan AI worker.",
      },
      {
        title: "2. Image Processing & Palette Extraction",
        description:
          "Memanfaatkan OpenCV dan Pillow untuk memproses gambar aset desain, melakukan deteksi kontras dan kalkulasi warna dominan.",
      },
      {
        title: "3. Integrasi AI Recommendation Engine",
        description:
          "Menghubungkan Google Gemini AI untuk memberikan saran kontekstual terhadap hierarki visual dan aksesibilitas desain antarmuka.",
      },
      {
        title: "4. API Testing & Endpoint Optimization",
        description:
          "Menguji performa respon endpoint asinkron (asyncio) untuk memastikan proses inspeksi gambar berjalan efisien.",
      },
    ],
    technology: [
      "Python",
      "FastAPI",
      "OpenCV",
      "Google Gemini AI",
      "Pillow",
      "Pydantic",
    ],
    gallery: [
      {
        url: "/images/projects/project-02.svg",
        caption: "Arsitektur & Konsep Panel Kerja AI PIXELIQ",
        type: "screenshot",
      },
    ],
    results:
      "Backend sistem analisis desain berbasis FastAPI yang berhasil mengintegrasikan pemrosesan computer vision OpenCV dan kecerdasan buatan Google Gemini untuk evaluasi antarmuka digital.",
    reflection:
      "Membangun arsitektur API berbasis AI dan computer vision memperkuat pemahaman mengenai alur pemrosesan biner gambar secara efisien dan penataan prompt terstruktur untuk evaluasi visual.",
    coverImage: "/images/projects/project-02.svg",
    repositoryUrl: "https://github.com/ZenFirdaus/PIXELIQ",
    featured: true,
  },
  {
    id: "skpp-simudah",
    slug: "skpp-simudah",
    name: "SKPP / SIMUDAH — Sistem Kepegawaian Laravel",
    category: "Web Development",
    year: "2026",
    role: "Full-Stack Laravel Developer, System Analyst",
    shortDescription:
      "Sistem informasi pengelolaan pengajuan dan persetujuan administrasi kepegawaian SKPP berbasis Laravel 11.",
    overview:
      "SKPP (Sistem Pengajuan dan Pengelolaan Kepegawaian) / SIMUDAH adalah aplikasi web komprehensif yang dibangun menggunakan framework Laravel 11 dan PHP. Sistem ini mengelola alur digitalisasi pengajuan Surat Keterangan Pemberhentian Pembayaran dengan 3 peran pengguna (Mitra, Staff, Kepala), mencakup validasi berkas, alur persetujuan berjenjang, pelacakan status transparan, dan pengarsipan digital.",
    problem:
      "Proses pengajuan dan pengelolaan berkas kepegawaian yang sebelumnya manual menimbulkan keterlambatan verifikasi, risiko berkas fisik hilang atau terselip, kurangnya transparansi tahapan bagi pemohon, serta ketiadaan audit log riwayat pengajuan.",
    objectives: [
      "Mendigitalisasi alur permohonan kepegawaian dengan otorisasi berbasis multi-role (Mitra, Staff, Kepala).",
      "Menyediakan dashboard pelacakan status berkas real-time dengan notifikasi tahapan verifikasi.",
      "Menyusun dokumentasi kebutuhan fungsional dan Product Backlog terstruktur menggunakan Scrum Framework.",
      "Membangun manajemen unggah dokumen yang aman dan terorganisasi dalam penyimpanan digital.",
    ],
    contributions: [
      "Menyusun dokumen Product Requirements Document (PRD), Functional Requirements, dan Product Backlog Scrum.",
      "Mengembangkan backend sistem menggunakan Laravel 11 dengan arsitektur MVC, Middleware autentikasi, dan Eloquent ORM.",
      "Merancang skema relasi basis data SQLite/MySQL untuk entitas permohonan, riwayat verifikasi, dan dokumen lampiran.",
      "Membangun antarmuka dashboard responsif menggunakan Tailwind CSS dan Laravel Blade templating.",
    ],
    process: [
      {
        title: "1. Analisis Kebutuhan & Backlog Scrum",
        description:
          "Membedah alur birokrasi manual dan menyusun Product Backlog Items (PBI) untuk peran Mitra, Staff verifikator, dan Kepala pengesah.",
      },
      {
        title: "2. Perancangan Relasi Basis Data",
        description:
          "Merancang skema database relasional untuk menyimpan data identitas pemohon, tipe pengajuan, berkas lampiran, dan status alur persetujuan.",
      },
      {
        title: "3. Pengembangan Modul Inti Laravel",
        description:
          "Membangun sistem autentikasi multi-guard, upload berkas terenkripsi, manajemen alur kerja persetujuan, dan pencatatan audit log.",
      },
      {
        title: "4. Pengujian Alur & Antarmuka",
        description:
          "Menguji simulasi alur lengkap dari pengajuan berkas oleh Mitra hingga pengesahan akhir oleh Kepala dan pengarsipan digital.",
      },
    ],
    technology: [
      "Laravel 11",
      "PHP 8.2+",
      "Tailwind CSS",
      "Blade",
      "SQLite / SQL",
      "Scrum",
    ],
    gallery: [
      {
        url: "/images/projects/project-03.svg",
        caption: "Dashboard Alur Pengajuan & Verifikasi SKPP",
        type: "screenshot",
      },
    ],
    results:
      "Aplikasi web kepegawaian berbasis Laravel 11 yang solid dengan alur persetujuan bertingkat, dokumentasi backlog Scrum lengkap, dan siap memangkas birokrasi dokumen fisik.",
    reflection:
      "Pengembangan sistem dengan kewenangan multi-role memperdalam wawasan tentang pentingnya validasi request di level backend, manajemen hak akses, dan integritas data riwayat persetujuan.",
    coverImage: "/images/projects/project-03.svg",
    repositoryUrl: "https://github.com/ZenFirdaus/SKPP-Website-Laravel",
    featured: true,
  },
  {
    id: "cinematch",
    slug: "cinematch",
    name: "CineMatch — Movie Recommendation Engine",
    category: "Web Development",
    year: "2026",
    role: "Full-Stack Python Developer & ML Engineer",
    shortDescription:
      "Sistem rekomendasi film berbasis Python Flask dan Scikit-Learn menggunakan dataset MovieLens dan Content-Based Filtering.",
    overview:
      "CineMatch adalah aplikasi web sistem rekomendasi film yang ditenagai backend Python Flask dan Scikit-Learn. Menggunakan dataset MovieLens yang mencakup puluhan ribu data film, sistem menerapkan algoritma Content-Based Filtering, pemetaan mood, filter durasi heuristik, dan pembobotan tag-genome untuk menyajikan rekomendasi tontonan film yang relevan.",
    problem:
      "Banyaknya pilihan judul film yang beredar sering kali menimbulkan decision fatigue bagi penonton. Pengguna membutuhkan sistem rekomendasi yang tidak hanya mengandalkan genre umum, melainkan mampu memetakan suasana hati (mood), durasi waktu yang tersedia, dan relevansi rating penonton.",
    objectives: [
      "Membangun mesin rekomendasi berbasis Content-Based Filtering menggunakan Scikit-Learn dan Pandas.",
      "Mengembangkan backend Flask yang efisien dengan pemuatan cache data MovieLens saat inisialisasi aplikasi.",
      "Menerapkan pemetaan heuristik mood ke genre film (Comedy, Emotional, Dark, Action, Thriller, Relaxing).",
      "Merancang antarmuka pencarian dan filter film yang bersih dan responsif.",
    ],
    contributions: [
      "Membangun modul `recommender.py` menggunakan MultiLabelBinarizer, cosine similarity, dan normalisasi rating.",
      "Mengembangkan API endpoint Flask (`app.py`) untuk pertukaran metadata filter dan penarikan daftar rekomendasi.",
      "Merancang antarmuka katalog film berbasis HTML5, CSS3, dan JavaScript interaktif di sisi klien.",
      "Mengoptimalkan kecepatan query dataset besar melalui agregasi cache data rating.",
    ],
    process: [
      {
        title: "1. Analisis Dataset & Preprocessing",
        description:
          "Mengolah dataset MovieLens (movies.csv, ratings.csv, links.csv, genome-tags.csv) dan membersihkan data film untuk siap di-index.",
      },
      {
        title: "2. Pengembangan Algoritma Rekomendasi",
        description:
          "Menulis logika Content-Based Filtering pada `recommender.py` dengan penyesuaian bobot genre, rating count, dan filter mood pengguna.",
      },
      {
        title: "3. Pembuatan REST API Flask",
        description:
          "Membangun server Flask untuk melayani endpoint metadata (genre, rentang tahun, opsi mood) dan endpoint query pencarian rekomendasi.",
      },
      {
        title: "4. Desain Antarmuka & Integrasi Frontend",
        description:
          "Merancang tampilan web responsif untuk menampilkan kartu film, detail rating, genre tags, serta filter dinamis tanpa reload halaman.",
      },
    ],
    technology: [
      "Python",
      "Flask",
      "Scikit-Learn",
      "Pandas",
      "NumPy",
      "MovieLens Dataset",
    ],
    gallery: [
      {
        url: "/images/projects/project-05.svg",
        caption: "Katalog & Grid Rekomendasi Film CineMatch",
        type: "screenshot",
      },
    ],
    results:
      "Mesin rekomendasi film berbasis Python Flask yang mampu mengolah puluhan ribu data MovieLens secara cepat dan menyajikan hasil rekomendasi personal berdasarkan preferensi pengguna.",
    reflection:
      "Menerapkan algoritma machine learning ke dalam aplikasi web nyata mengajarkan pentingnya teknik caching data di memori agar kalkulasi matriks similarity tidak membebani latency respons pengguna.",
    coverImage: "/images/projects/project-05.svg",
    repositoryUrl: "https://github.com/ZenFirdaus/CineMatch",
    featured: false,
  },
  {
    id: "wedding-planner",
    slug: "wedding-planner",
    name: "Wedding Planner — Flutter Mobile App",
    category: "Mobile Development",
    year: "2026",
    role: "Mobile Developer & Database Architect",
    shortDescription:
      "Aplikasi mobile perencanaan pernikahan berbasis Flutter dan Dart dengan integrasi PostgreSQL dan RESTful API PHP.",
    overview:
      "Wedding Planner adalah aplikasi mobile cross-platform yang dikembangkan menggunakan Flutter dan Dart untuk menyederhanakan perencanaan pesta pernikahan. Fitur unggulan meliputi katalog paket pernikahan terstruktur, kalkulator simulasi biaya dinamis, formulir pemesanan layanan terverifikasi, dan integrasi basis data PostgreSQL melalui API PHP.",
    problem:
      "Menghitung total estimasi biaya pernikahan yang melibatkan banyak vendor (gedung, katering, rias busana, dokumentasi, dekorasi) sering membingungkan dan rawan salah estimasi jika dihitung manual tanpa perincian paket yang jelas.",
    objectives: [
      "Menyediakan kalkulator otomatis untuk simulasi estimasi biaya paket pernikahan berdasarkan kustomisasi pilihan layanan.",
      "Mengembangkan aplikasi mobile yang responsif dan mulus untuk platform Android menggunakan Flutter.",
      "Membangun RESTful API menggunakan PHP untuk menghubungkan aplikasi mobile dengan database PostgreSQL.",
      "Menyediakan form pemesanan paket pernikahan yang terhubung langsung ke basis data terpusat.",
    ],
    contributions: [
      "Merancang skema tabel relasional PostgreSQL (`wedding_planner.sql`) untuk paket, pemesanan, dan rincian transaksi.",
      "Mengembangkan antarmuka mobile Flutter: halaman katalog, pemesanan (`pemesanan_wedding_page.dart`), dan kalkulator (`kalkulator_wedding_page.dart`).",
      "Membangun endpoint API PHP (`paket_wedding_list.php`) untuk menyajikan data paket dan menerima payload pemesanan JSON.",
      "Mengimplementasikan service HTTP di Flutter (`wedding_service.dart`, `paket_wedding_service.dart`) dengan model Dart terstruktur.",
    ],
    process: [
      {
        title: "1. Perancangan Basis Data PostgreSQL",
        description:
          "Menyusun skema database terelasi untuk menyimpan paket pernikahan, daftar item vendor, harga satuan, dan data pemesan.",
      },
      {
        title: "2. Pembangunan Endpoint API PHP",
        description:
          "Membuat skrip backend PHP untuk memproses query SQL, merender JSON response, dan memvalidasi input pemesanan paket.",
      },
      {
        title: "3. Pengembangan Antarmuka Flutter",
        description:
          "Merancang UI mobile yang bersih, interaktif, dengan validasi form pemesanan dan kalkulasi harga real-time saat opsi paket dipilih.",
      },
      {
        title: "4. Integrasi Jaringan & Pengujian",
        description:
          "Menghubungkan aplikasi Flutter dengan server lokal/cloud melalui protokol HTTP dan memastikan data pesanan tersimpan akurat di PostgreSQL.",
      },
    ],
    technology: [
      "Flutter",
      "Dart",
      "PostgreSQL",
      "PHP API",
      "RESTful API",
      "SQL",
    ],
    gallery: [
      {
        url: "/images/projects/project-04.svg",
        caption: "Antarmuka Mobile & Kalkulator Wedding Planner",
        type: "mockup",
      },
    ],
    results:
      "Aplikasi mobile perencanaan pernikahan berbasis Flutter yang sukses menghubungkan kalkulasi biaya dan formulir pemesanan ke basis data PostgreSQL melalui arsitektur REST API PHP.",
    reflection:
      "Proyek ini melatih sinkronisasi alur data antara aplikasi mobile Flutter dan database relasional melalui backend API, memperdalam pemahaman tentang pemodelan data relasional dan state management form.",
    coverImage: "/images/projects/project-04.svg",
    repositoryUrl: "https://github.com/rahzaame/tugas_3_mobile",
    featured: false,
  },
  {
    id: "petadopt",
    slug: "petadopt",
    name: "PetAdopt — Animal Adoption Web Platform",
    category: "Web Development",
    year: "2026",
    role: "Full-Stack Web Developer",
    shortDescription:
      "Platform web adopsi hewan peliharaan berbasis arsitektur MVC PHP Native dan basis data MySQL.",
    overview:
      "PetAdopt adalah platform website interaktif yang dirancang untuk memfasilitasi proses adopsi hewan terlantar kepada pemilik yang bertanggung jawab. Dibangun dengan arsitektur Model-View-Controller (MVC) menggunakan PHP Native dan MySQL, sistem ini menyediakan katalog hewan siap adopsi, form pengajuan adopsi online, sistem wishlist/favorit, artikel edukasi, serta dashboard admin komprehensif.",
    problem:
      "Banyaknya hewan peliharaan yang membutuhkan tempat tinggal baru sering kali tidak terpublikasikan dengan baik. Calon pengadopsi kesulitan menemukan informasi terverifikasi mengenai kondisi kesehatan, riwayat vaksin, serta alur pengajuan adopsi yang terstruktur.",
    objectives: [
      "Menyediakan katalog hewan siap adopsi dengan filter jenis, usia, dan status ketersediaan secara real-time.",
      "Membangun modul pengajuan adopsi online yang terstruktur agar proses kurasi calon pengadopsi berjalan transparan.",
      "Menyediakan dashboard admin untuk manajemen data hewan, verifikasi pengajuan, dan publikasi artikel panduan.",
      "Menerapkan arsitektur kode MVC yang bersih dan terstruktur pada pemrograman PHP Native.",
    ],
    contributions: [
      "Merancang arsitektur MVC (Controllers, Models, Views) murni dengan routing dan session management mandiri.",
      "Merancang skema basis data MySQL (petadopt.sql) untuk tabel entitas hewan, kategori, pengajuan adopsi, favorit, dan artikel.",
      "Mengembangkan controller untuk alur adopsi (AdoptionController), katalog hewan (AnimalController), dan admin panel (AdminController).",
      "Membangun antarmuka web responsif dengan tema ramah keluarga dan navigasi ramah pengguna.",
    ],
    process: [
      {
        title: "1. Pemodelan Skema Basis Data",
        description:
          "Menyusun tabel database MySQL untuk entitas hewan, foto galeri, kategori jenis hewan, formulir adopsi, dan tabel FAQ/artikel.",
      },
      {
        title: "2. Struktur Arsitektur MVC",
        description:
          "Membangun fondasi kode MVC dari nol: router index.php, model query PDO terisolasi, helper otentikasi sesi, dan pemisahan layout views.",
      },
      {
        title: "3. Pengembangan Fitur Utama & Autentikasi",
        description:
          "Mengimplementasikan autentikasi user dan admin, katalog filter hewan, fitur favorit (bookmark), dan form submit permohonan adopsi.",
      },
      {
        title: "4. Dashboard Admin & Pengujian Alur",
        description:
          "Membangun panel manajemen bagi admin untuk menyetujui atau menolak permohonan adopsi serta memperbarui status hewan secara berkala.",
      },
    ],
    technology: [
      "PHP (MVC Native)",
      "MySQL",
      "HTML5",
      "CSS3 / Bootstrap",
      "JavaScript",
      "Session Auth",
    ],
    gallery: [
      {
        url: "/images/projects/petadopt/petadopt-logo.jpg",
        caption: "Logo & Identitas Visual PetAdopt",
        type: "branding",
      },
      {
        url: "/images/projects/petadopt/animal-milo.jpg",
        caption: "Katalog Profil Hewan Siap Adopsi (Milo)",
        type: "screenshot",
      },
      {
        url: "/images/projects/petadopt/animal-luna.jpg",
        caption: "Katalog Profil Hewan Siap Adopsi (Luna)",
        type: "screenshot",
      },
      {
        url: "/images/projects/project-petadopt.svg",
        caption: "Antarmuka Katalog & Kartu Adopsi PetAdopt",
        type: "screenshot",
      },
    ],
    results:
      "Website adopsi hewan berbasis arsitektur MVC PHP Native yang lengkap dengan katalog terfilter, alur verifikasi adopsi, dan dashboard admin terpusat.",
    reflection:
      "Membangun sistem MVC dari nol tanpa framework memperkuat pemahaman mendalam tentang siklus request-response, keamanan form, pencegahan SQL Injection dengan PDO prepared statements, dan manajemen session.",
    coverImage: "/images/projects/project-petadopt.svg",
    repositoryUrl: "https://github.com/ZenFirdaus/PetAdobt_Website",
    featured: false,
  },
  {
    id: "healthcheck",
    slug: "healthcheck",
    name: "HealthCheck — Digital Health Screening Platform",
    category: "Web Development",
    year: "2025",
    role: "Full-Stack Web Developer & UI Designer",
    shortDescription:
      "Platform pemeriksaan kesehatan mandiri digital dengan kalkulator BMI, BMR, skrining jantung, dan kesehatan mental.",
    overview:
      "HealthCheck adalah website alat pemeriksaan mandiri digital yang dirancang untuk memberikan informasi awal mengenai kondisi kesehatan pengguna. Dibangun menggunakan PHP dan basis data MySQL, platform ini menyediakan serangkaian kalkulator kesehatan mandiri: kalkulator Body Mass Index (BMI), estimasi Basal Metabolic Rate (BMR), evaluasi risiko kardiovaskular / jantung, serta kuesioner skrining kesehatan mental awal.",
    problem:
      "Banyak orang yang belum memahami parameter dasar kesehatan tubuhnya atau kesulitan mencari alat kalkulasi kesehatan yang terpadu dalam satu wadah. Informasi kesehatan di internet sering kali tersebar dan tidak menyajikan rekomendasi awal yang mudah dipahami oleh masyarakat umum.",
    objectives: [
      "Menyediakan kalkulator kesehatan mandiri (BMI, BMR, Jantung, Mental) dalam satu platform yang mudah digunakan.",
      "Menyajikan hasil evaluasi kesehatan secara informatif dengan penjelasan sederhana dan kategori indikator yang jelas.",
      "Membangun portal autentikasi untuk menyimpan riwayat pengecekan pengguna dan panel admin untuk manajemen data.",
      "Mendesain antarmuka web yang bersih, nyaman, dan responsif pada berbagai ukuran layar.",
    ],
    contributions: [
      "Menyusun arsitektur alur kalkulasi kesehatan dan formula medis untuk BMI, BMR, dan skor risiko.",
      "Mengembangkan backend pemrosesan form PHP untuk kalkulasi BMI, BMR, skrining jantung, dan kesehatan mental.",
      "Merancang skema database MySQL (database/) untuk menyimpan riwayat hasil pemeriksaan dan manajemen pengguna.",
      "Mendesain antarmuka yang bersih dan menenangkan menggunakan Bootstrap Icons, palet warna teal medis, dan layout responsif.",
    ],
    process: [
      {
        title: "1. Riset Formula & Kebutuhan Medis Awal",
        description:
          "Mengumpulkan acuan formula perhitungan indeks massa tubuh (BMI), kebutuhan kalori basal (BMR Mifflin-St Jeor), dan parameter skrining kesehatan mandiri.",
      },
      {
        title: "2. Perancangan Skema Database & User Flow",
        description:
          "Merancang tabel database MySQL untuk menyimpan riwayat input tinggi, berat, usia, tingkat aktivitas, dan skor hasil tes.",
      },
      {
        title: "3. Pengembangan Modul Kalkulator & Backend",
        description:
          "Mengembangkan skrip PHP modular untuk memvalidasi input angka, memproses algoritma kalkulasi, dan menampilkan halaman hasil yang dilengkapi saran preventif.",
      },
      {
        title: "4. Pembuatan Panel Admin & Autentikasi",
        description:
          "Membangun sistem login pengguna dan halaman admin (admin.php, bmi_admin.php) untuk rekapitulasi data pemeriksaan.",
      },
    ],
    technology: [
      "PHP",
      "MySQL",
      "Bootstrap Icons",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    gallery: [
      {
        url: "/images/projects/project-healthcheck.svg",
        caption: "Antarmuka Dashboard & Indikator Kesehatan HealthCheck",
        type: "screenshot",
      },
    ],
    results:
      "Website alat pemeriksaan mandiri digital yang sukses menyatukan berbagai kalkulator kesehatan (BMI, BMR, kardiovaskular, mental) dalam satu antarmuka yang ramah pengguna.",
    reflection:
      "Proyek ini menuntut kehati-hatian tinggi dalam memvalidasi input numerik pengguna dan memastikan pesan hasil kalkulasi disajikan secara edukatif sebagai informasi awal yang tidak menggantikan konsultasi medis profesional.",
    disclaimer:
      "Peringatan Medis: HealthCheck dirancang semata-mata sebagai sarana edukasi dan alat bantu skrining mandiri awal. Seluruh hasil perhitungan (BMI, BMR, risiko kardiovaskular, dan kuesioner kesehatan mental) bukan merupakan diagnosis medis dan tidak menggantikan konsultasi, diagnosis, maupun perawatan medis dari dokter atau tenaga kesehatan profesional.",
    coverImage: "/images/projects/project-healthcheck.svg",
    repositoryUrl: "https://github.com/ZenFirdaus/HealthCheck-Website",
    featured: false,
  },
];
