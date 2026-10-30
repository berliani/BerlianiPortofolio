// ═══════════════════════════════════════════════
//  Berliani Risqi — Multi-language Dictionary
//  Indonesian (ID) & English (EN)
// ═══════════════════════════════════════════════

const TRANSLATIONS = {
  id: {
    // Navbar
    nav_home: 'Beranda',
    nav_about: 'Tentang',
    nav_skills: 'Keahlian',
    nav_projects: 'Proyek',
    nav_experience: 'Pengalaman',
    nav_certs: 'Sertifikasi',
    nav_activities: 'Aktivitas',
    nav_contact: 'Kontak',
    nav_cv: '↓ Unduh CV',

    // Hero
    hero_badge: "👋 Halo, Saya Berliani",
    hero_name: "Berliani Risqi Dwi Saputri",
    hero_subtitle: "D4 Teknik Informatika · Universitas Harkat Negeri · Angkatan 2026",
    hero_desc: "Mengubah ide menjadi pengalaman digital — Mobile, Web, Data & AI, dan Quality Assurance.",
    hero_btn_projects: "Lihat Proyek 🚀",
    hero_btn_contact: "Hubungi Saya ✉️",

    // About Me
    about_title: "Tentang Saya",
    about_subtitle: "Mahasiswa D4 Teknik Informatika yang passionate di bidang pengembangan aplikasi mobile, data science, dan kecerdasan buatan (AI).",
    about_bio_1: "Saya adalah Berliani Risqi Dwi Saputri, lulusan D4 Teknik Informatika dari Politeknik Harapan Bersama / Universitas Harkat Negeri, Angkatan 2026. Selama kuliah, saya aktif mengembangkan berbagai proyek mulai dari aplikasi mobile berbasis AI menggunakan Flutter & TensorFlow, hingga sistem analitik data dan pengujian perangkat lunak berstandar ISO.",
    about_bio_2: "Karya saya mencakup penelitian yang telah dipublikasikan di jurnal terakreditasi SINTA 4, proyek penelitian dosen aktif, serta pendanaan PKM-KC dan POMN dari Kemendikbudristek RI.",
    about_bio_3: "Saya percaya teknologi terbaik adalah yang benar-benar membantu manusia — dan itulah yang selalu saya wujudkan lewat setiap proyek. 🌸",
    about_loc: "📍 Tegal, Jawa Tengah",
    about_campus: "🎓 Politeknik Harapan Bersama / UHN",
    about_class: "📅 Angkatan 2026",
    stat_mobile: "Aplikasi Mobile",
    stat_web: "Proyek Web",
    stat_ai: "Proyek AI & Data",
    stat_pub: "Publikasi SINTA 4",

    // Skills
    skills_title: "Keahlian & Teknologi",
    skills_subtitle: "Teknologi, bahasa pemrograman, dan tools yang saya gunakan dalam pengembangan perangkat lunak",
    skill_mobile: "Aplikasi Mobile",
    skill_web: "Pengembangan Web",
    skill_ai: "AI & Data Science",
    skill_qa: "Pengujian QA",
    skill_db: "Basis Data",
    skill_tools: "Alat & Desain",

    // Projects
    projects_title: "Portofolio Proyek",
    projects_subtitle: "Koleksi proyek dari perkuliahan, penelitian dosen, tugas akhir, dan magang industri",
    tab_all: "✨ Semua",
    tab_mobile: "📱 Mobile",
    tab_web: "🌐 Web",
    tab_ai: "🤖 AI & Data",
    tab_qa: "🧪 QA",
    tab_gamedev: "🎮 Game Dev",
    tab_riset: "🔬 Penelitian Dosen",
    card_hint: "Lihat Mockup & Kontribusi ↗",

    // Experience
    exp_title: "Pengalaman & Prestasi",
    exp_subtitle: "Perjalanan akademik, kepemimpinan organisasi, dan pencapaian selama masa studi",
    exp_1_title: 'Tugas Akhir / Skripsi — App "Tuntun"',
    exp_1_desc: "Pengembangan aplikasi panduan visual berbasis Flutter & AI untuk pengguna difabel — penyelesaian studi D4 Teknik Informatika.",
    exp_2_title: "Publikasi Jurnal SINTA 4",
    exp_2_desc: '"Deteksi Bahan Makanan untuk Rekomendasi Resep Masakan pada Program Diet Menggunakan Algoritma CNN" · DOI: 10.35316/.v9i2.6384',
    exp_3_title: "Penelitian Dosen — Atlantara & Lokantara",
    exp_3_desc: "Berperan dalam development & QA sistem wisata terintegrasi Atlantara — meliputi POS Web, Mobile Flutter, dan modul AI.",
    exp_4_title: "Project Manager & Fullstack Dev — SaaS Desa (PT ISG)",
    exp_4_desc: "Memimpin manajemen sprint task serta merancang platform SaaS sistem informasi manajemen desa multi-tenant yang terintegrasi Point of Sale (POS) BUMDes di PT ISG.",
    exp_5_title: "Project Based Internship — Home Credit",
    exp_5_desc: "Analisis risiko kredit dan pemodelan machine learning pada dataset Home Credit Default Risk.",
    exp_6_title: "Ketua Himpunan Mahasiswa HMPTI",
    exp_6_desc: "Memimpin organisasi himpunan mahasiswa program studi, mengkoordinir kegiatan akademik dan non-akademik anggota.",
    exp_7_title: "Pendanaan POMN — Program Ormawa Membangun Negeri",
    exp_7_desc: "Lolos pendanaan Program Ormawa Membangun Negeri (POMN) dari Kemendikbudristek RI.",
    exp_8_title: "Research Staff — FoRTI (Forum Riset Teknologi Informasi)",
    exp_8_desc: "Anggota staf riset di Forum Riset Teknologi Informasi (FoRTI), berkontribusi dalam penelitian di bidang teknologi informasi.",
    exp_9_title: "Pendanaan PKM-KC — Program Kreativitas Mahasiswa",
    exp_9_desc: "Lolos seleksi dan mendapatkan pendanaan PKM-KC dari Kemendikbudristek RI untuk pengembangan inovasi teknologi.",
    exp_10_title: "Sekretaris Himpunan Mahasiswa HMPTI",
    exp_10_desc: "Bertanggung jawab dalam pengelolaan administrasi, dokumentasi, dan korespondensi organisasi himpunan mahasiswa.",

    // Certifications
    certs_title: "Sertifikasi & Publikasi",
    certs_subtitle: "Sertifikasi profesional nasional & internasional serta publikasi ilmiah bereputasi",
    cert_sinta4_title: "Publikasi SINTA 4",
    cert_sinta4_link: "Lihat Artikel Ilmiah SINTA 4 ↗",
    cert_hint: "Lihat Sertifikat Asli ↗",
    cert_verified: "Tervalidasi Resmi",
    cert_view_link: "Buka Verifikasi Asli ↗",
    cert_download_cv: "Unduh CV Lengkap ↓",

    // Activities & Leadership
    activities_title: "Organisasi & Aktivitas",
    activities_subtitle: "Dokumentasi kepemimpinan Himpunan Mahasiswa HMPTI, pengabdian masyarakat hibah POMN & PKM Kemendikbudristek, serta kegiatan akademik",
    activity_badge: "Kategori",
    activity_view: "Perbesar Foto ↗",

    // Contact
    contact_title: "Mari Terhubung",
    contact_subtitle: "Ada proyek, peluang kolaborasi, atau sekadar ingin menyapa? Silakan kirimkan pesan! 🌸",
    contact_name_label: "Nama",
    contact_name_ph: "Nama Anda...",
    contact_email_label: "Email",
    contact_email_ph: "email@contoh.com",
    contact_msg_label: "Pesan",
    contact_msg_ph: "Tulis pesan Anda di sini...",
    contact_btn: "Kirim Pesan ✉️",
    contact_btn_sent: "✓ Pesan Terkirim!",
    contact_email_header: "Email",
    contact_loc_header: "Lokasi",
    contact_loc_val: "Tegal, Jawa Tengah, Indonesia",
    contact_dl_btn: "↓ Unduh CV / Portofolio",

    // Footer
    footer_tagline: "Mengubah ide menjadi pengalaman digital · Mobile, AI & Data, Web, QA 🌸",
    footer_back_to_top: "↑ Kembali ke atas",
    footer_rights: "© 2026 Berliani Risqi Dwi Saputri. Hak cipta dilindungi undang-undang.",

    // Modals
    modal_contrib_title: "Peran & Kontribusi Utama dalam Proyek:",
    modal_tech_title: "TEKNOLOGI"
  },

  en: {
    // Navbar
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_certs: 'Certifications',
    nav_activities: 'Activities',
    nav_contact: 'Contact',
    nav_cv: '↓ Download CV',

    // Hero
    hero_badge: "👋 Hi, I'm Berliani",
    hero_name: "Berliani Risqi Dwi Saputri",
    hero_subtitle: "D4 Informatics Engineering · Universitas Harkat Negeri · Class of 2026",
    hero_desc: "Turning ideas into digital experiences — Mobile, Web, Data & AI, and Quality Assurance.",
    hero_btn_projects: "View Projects 🚀",
    hero_btn_contact: "Contact Me ✉️",

    // About Me
    about_title: "About Me",
    about_subtitle: "Informatics Engineering student passionate about mobile app development, data science, and artificial intelligence (AI).",
    about_bio_1: "I am Berliani Risqi Dwi Saputri, an Informatics Engineering graduate from Politeknik Harapan Bersama / Universitas Harkat Negeri, Class of 2026. Throughout college, I actively developed diverse projects ranging from AI-based mobile apps using Flutter & TensorFlow to data analytics systems and ISO-standard software quality assurance.",
    about_bio_2: "My work includes research published in SINTA 4 accredited journal, active lecturer research projects, as well as PKM-KC and POMN funding grants from the Ministry of Education and Culture RI.",
    about_bio_3: "I believe the best technology is one that truly empowers people — and that is what I strive to deliver in every project. 🌸",
    about_loc: "📍 Tegal, Central Java, Indonesia",
    about_campus: "🎓 Politeknik Harapan Bersama / UHN",
    about_class: "📅 Class of 2026",
    stat_mobile: "Mobile Apps",
    stat_web: "Web Projects",
    stat_ai: "AI & Data Projects",
    stat_pub: "SINTA 4 Publication",

    // Skills
    skills_title: "Skills & Tech Stack",
    skills_subtitle: "Technologies, programming languages, and tools I use in software development",
    skill_mobile: "Mobile Development",
    skill_web: "Web Development",
    skill_ai: "AI & Data Science",
    skill_qa: "QA & Testing",
    skill_db: "Databases",
    skill_tools: "Tools & Design",

    // Projects
    projects_title: "Featured Projects",
    projects_subtitle: "Curated collection of projects from coursework, lecturer research, final year project, and internships",
    tab_all: "✨ All",
    tab_mobile: "📱 Mobile",
    tab_web: "🌐 Web",
    tab_ai: "🤖 AI & Data",
    tab_qa: "🧪 QA",
    tab_gamedev: "🎮 Game Dev",
    tab_riset: "🔬 Lecturer Research",
    card_hint: "View Mockup & Contributions ↗",

    // Experience
    exp_title: "Experience & Achievement",
    exp_subtitle: "Academic journey, organizational leadership, and accomplishments throughout college",
    exp_1_title: 'Final Year Project — Assistive App "Tuntun"',
    exp_1_desc: "Development of an AI-powered visual assistive navigation mobile app using Flutter — D4 Informatics Engineering graduation project.",
    exp_2_title: "SINTA 4 Accredited Journal Publication",
    exp_2_desc: '"Food Ingredient Detection for Recipe Recommendations in Diet Programs Using CNN Algorithm" · DOI: 10.35316/.v9i2.6384',
    exp_3_title: "Lecturer Research Project — Atlantara & Lokantara",
    exp_3_desc: "Contributed to software engineering & QA for the Atlantara tourism management ecosystem — including Web POS, Flutter Mobile, and AI modules.",
    exp_4_title: "Project Manager & Fullstack Dev — Village SaaS (PT ISG)",
    exp_4_desc: "Led agile sprint task management and engineered multi-tenant SaaS village governance platform integrated with BUMDes Point of Sale (POS) at PT ISG.",
    exp_5_title: "Project Based Internship — Home Credit Indonesia",
    exp_5_desc: "Credit risk analysis and machine learning predictive modeling on Home Credit Default Risk dataset.",
    exp_6_title: "President / Chairperson — HMPTI Student Association",
    exp_6_desc: "Led department student organization, coordinating academic workgroups and member tech development initiatives.",
    exp_7_title: "POMN National Funding Grant — Kemendikbudristek RI",
    exp_7_desc: "Awarded competitive national community-building grant from Ministry of Education, Culture, Research, and Technology RI.",
    exp_8_title: "Research Staff — FoRTI (IT Research Forum)",
    exp_8_desc: "Research staff member at FoRTI, actively conducting applied research and literature studies in computer science.",
    exp_9_title: "PKM-KC National Innovation Funding — Kemendikbudristek RI",
    exp_9_desc: "Secured competitive Student Creativity Program grant from Kemendikbudristek RI for technological innovation.",
    exp_10_title: "Secretary General — HMPTI Student Association",
    exp_10_desc: "Managed organizational correspondence, official records, meeting documentation, and administrative affairs.",

    // Certifications
    certs_title: "Certifications & Publications",
    certs_subtitle: "National and international professional certifications and published scientific research",
    cert_sinta4_title: "SINTA 4 Publication",
    cert_sinta4_link: "View SINTA 4 Research Paper ↗",
    cert_hint: "View Certificate ↗",
    cert_verified: "Officially Verified",
    cert_view_link: "Open Verification ↗",
    cert_download_cv: "Download Full CV ↓",

    // Activities & Leadership
    activities_title: "Leadership & Activities",
    activities_subtitle: "Documentation of student association leadership (HMPTI), competitive national grants (POMN & PKM Kemendikbudristek), and academic initiatives",
    activity_badge: "Category",
    activity_view: "View Full Photo ↗",

    // Contact
    contact_title: "Let's Connect",
    contact_subtitle: "Have a project, collaboration opportunity, or just want to say hi? Feel free to reach out! 🌸",
    contact_name_label: "Name",
    contact_name_ph: "Your Name...",
    contact_email_label: "Email",
    contact_email_ph: "email@example.com",
    contact_msg_label: "Message",
    contact_msg_ph: "Write your message here...",
    contact_btn: "Send Message ✉️",
    contact_btn_sent: "✓ Message Sent!",
    contact_email_header: "Email",
    contact_loc_header: "Location",
    contact_loc_val: "Tegal, Central Java, Indonesia",
    contact_dl_btn: "↓ Download CV / Portfolio",

    // Footer
    footer_tagline: "Turning ideas into digital experiences · Mobile, AI & Data, Web, QA 🌸",
    footer_back_to_top: "↑ Back to top",
    footer_rights: "© 2026 Berliani Risqi Dwi Saputri. All rights reserved.",

    // Modals
    modal_contrib_title: "Key Role & Contributions in this Project:",
    modal_tech_title: "TECH STACK"
  }
};
