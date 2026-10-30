// ═══════════════════════════════════════════════
//  Berliani Risqi — Portfolio JavaScript
//  i18n · Navbar · Filter · Modals · Sliders · Form
// ═══════════════════════════════════════════════

let currentLang = localStorage.getItem('portfolio_lang') || 'id';

const PROJECTS_DATA = {
  'foodplan': {
    title: 'FoodPlan Mobile App',
    badge: 'Capstone Smt 5',
    category: 'Mobile & AI',
    desc: {
      id: 'Aplikasi diet dengan deteksi bahan makanan via kamera menggunakan CNN & YOLOv8 serta rekomendasi resep bergizi.',
      en: 'Diet app with food ingredient detection via camera using CNN/YOLOv8 & personalized recipe recommendations.'
    },
    images: [
      { src: 'img/projects/foodplan.png', caption: 'FoodPlan — Mobile App Interface & Food Scanning' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'FoodPlan — Multi-Object Detection Architecture & Dataset' }
    ],
    contributions: {
      id: [
        'Membangun model AI untuk multi-object detection menggunakan YOLOv8 dan single-object detection menggunakan CNN.',
        'Mengannotasi ~6.000 gambar pada 13 kelas bahan makanan untuk persiapan dataset training.',
        'Mengembangkan frontend aplikasi mobile menggunakan framework Flutter.',
        'Mengimplementasikan mobile widgets dan unit testing.'
      ],
      en: [
        'I built an AI model for multi-object detection using YOLOv8 and single-object detection using CNN.',
        'Annotated ~6,000 images across 13 classes for training dataset preparation.',
        'Developed a mobile frontend using the Flutter framework.',
        'Implemented mobile widgets and unit testing.'
      ]
    },
    tech: ['Flutter', 'YOLOv8', 'CNN', 'Python', 'Laravel', 'MySQL'],
    links: [
      { text: 'Jurnal SINTA 4 ↗', url: 'https://doi.org/10.35316/.v9i2.6384' }
    ]
  },
  'bicaraku': {
    title: 'Bicaraku Mobile App',
    badge: 'Capstone Smt 6',
    category: 'Mobile & Assistive AI',
    desc: {
      id: 'Aplikasi komunikasi & terapi wicara dengan deteksi objek sekitar berbasis AI, text-to-speech, dan analisis sentimen.',
      en: 'Communication & speech therapy app with AI-powered surrounding object detection, text-to-speech, and sentiment analysis.'
    },
    images: [
      { src: 'img/projects/bicaraku.png', caption: 'Bicaraku — App Identity & Overview' },
      { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku — Fitur Lihat & Hitung (Object Detection Real-time)' },
      { src: 'img/projects/bicaraku-mockup-2.png', caption: 'Bicaraku — Beranda & Menu Navigasi Ramah Disabilitas' },
      { src: 'img/projects/bicaraku-mockup-3.png', caption: 'Bicaraku — Integrasi Suara & Text-to-Speech' }
    ],
    contributions: {
      id: [
        'Merancang antarmuka pengguna (UI/UX) aplikasi mobile "Bicaraku" menggunakan framework Flutter.',
        'Membangun model AI untuk deteksi objek sekitar menggunakan YOLOv8.',
        'Mengintegrasikan fitur text-to-speech dan speech-to-text ke dalam aplikasi mobile.',
        'Menghubungkan backend Flask dengan frontend Flutter untuk komunikasi sistem yang lancar.'
      ],
      en: [
        'Designing the user interface of the "Bicaraku" mobile application using the Flutter framework.',
        'Building an AI model for surrounding object detection using YOLOv8.',
        'Integrated text-to-speech and speech-to-text features in the mobile app.',
        'Connecting the Flask backend with the Flutter frontend for seamless system communication.'
      ]
    },
    tech: ['Flutter', 'YOLOv8', 'Flask', 'TTS / STT', 'Python', 'MongoDB'],
    links: []
  },
  'tuntun': {
    title: 'Tuntun — Visual Assistive Navigation',
    badge: 'Tugas Akhir / Skripsi 2026',
    category: 'Mobile & Computer Vision',
    desc: {
      id: 'Aplikasi panduan visual tunanetra berbasis kamera & AI untuk Skripsi — deteksi rintangan real-time dengan feedback suara.',
      en: 'AI visual guidance mobile app for visually impaired users — real-time obstacle detection with auditory & voice cues.'
    },
    images: [
      { src: 'img/projects/tuntun.png', caption: 'Tuntun — Konsep & Ilustrasi Navigasi Tunanetra' },
      { src: 'img/projects/tuntun-logo.png', caption: 'Tuntun — Brand Identity & Design System' }
    ],
    contributions: {
      id: [
        'Project Tugas Akhir (Skripsi) yang dikerjakan secara mandiri secara menyeluruh (End-to-End Individual Project).',
        'Merancang arsitektur sistem deteksi objek & estimasi jarak rintangan berbasis YOLO dan Triangle Similarity Algorithm.',
        'Mengembangkan frontend mobile multiplatform menggunakan Flutter dengan navigasi audio, panduan suara TTS, dan feedback getar.',
        'Membangun integrasi model AI edge computing (TFLite) agar dapat berjalan cepat dan offline pada smartphone.',
        'Melaksanakan pengujian kualitas perangkat lunak komprehensif berstandar ISO 25010.'
      ],
      en: [
        'Independently designed and developed the entire end-to-end assistive navigation application as a Final Year Project.',
        'Implemented object detection & obstacle avoidance AI models using YOLO and Triangle Similarity algorithms for distance estimation.',
        'Developed cross-platform mobile frontend with Flutter, custom audio cues, TTS voice assistance, and haptic feedback.',
        'Built on-device edge AI integration (TFLite) for fast offline inference directly on smartphones.',
        'Conducted rigorous software quality assurance testing based on ISO 25010 standards.'
      ]
    },
    tech: ['Flutter', 'TFLite', 'YOLO', 'Python', 'Triangle Similarity', 'TTS', 'ISO 25010'],
    links: [
      { text: '📱 Google Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.hn.tuntun&hl=en' },
      { text: 'GitHub Repo ↗', url: 'https://github.com/berliani/TunTunApp' }
    ]
  },
  'distance-estimator': {
    title: 'Distance Estimator App',
    badge: 'Riset Dosen',
    category: 'Mobile & Computer Vision Research',
    desc: {
      id: 'App mobile Flutter & AI YOLOv11 untuk estimasi jarak objek aktual secara real-time sebagai alat bantu aksesibilitas tunanetra.',
      en: 'Flutter mobile app powered by YOLOv11 & Monocular Depth to measure actual physical distance of objects in real-time.'
    },
    images: [
      { src: 'img/projects/distance-estimator.png', caption: 'Distance Estimator — Deteksi Objek & Estimasi Jarak Kamera Real-time' },
      { src: 'img/projects/distance-app-2.jpg', caption: 'Distance Estimator — Menu Navigasi & Kalibrasi Jarak' },
      { src: 'img/projects/distance-app-3.jpg', caption: 'Distance Estimator — Output Pengukuran Jarak Aktual Objek' }
    ],
    contributions: {
      id: [
        'Mengembangkan model AI multi-object detection berbasis YOLOv11 yang diintegrasikan ke dalam aplikasi mobile Flutter sebagai bagian dari riset untuk mengukur jarak aktual objek yang ditangkap kamera.',
        'Studi kasus berfokus pada pembangunan aplikasi asistif bagi penyandang tunanetra.'
      ],
      en: [
        'Developed a multi-object detection AI model using YOLOv11 integrated into a Flutter-based mobile application as part of research to measure the actual distance of objects captured by the camera.',
        'Case study focused on building an assistive application for visually impaired users.'
      ]
    },
    tech: ['Flutter', 'YOLOv11', 'Monocular Depth', 'OpenCV', 'Python', 'Computer Vision'],
    links: []
  },
  'foodplan-web': {
    title: 'FoodPlan Web Dashboard',
    badge: 'Capstone Smt 5',
    category: 'Web Application',
    desc: {
      id: 'Dashboard admin web untuk manajemen resep, user, dan statistik analitik penggunaan aplikasi FoodPlan.',
      en: 'Web admin dashboard for recipe catalog management, user accounts, and usage analytics for the FoodPlan platform.'
    },
    images: [
      { src: 'img/projects/foodplan-web.png', caption: 'FoodPlan Web — Dashboard Admin & Manajemen Resep Makanan' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'FoodPlan Web — Skema Integrasi Database & API Model' }
    ],
    contributions: {
      id: [
        'Membangun dashboard web responsif menggunakan HTML, CSS, JavaScript, dan Bootstrap untuk admin ahli gizi dan pengelola resep.',
        'Merancang fitur CRUD untuk perencanaan menu makanan, basis data kalori, dan visualisasi grafik analitik.',
        'Mengintegrasikan REST API yang menghubungkan dashboard web dengan basis data MySQL.'
      ],
      en: [
        'Built responsive web dashboard using HTML, CSS, JavaScript, and Bootstrap for admin nutritionists and recipe managers.',
        'Designed CRUD features for meal planning, calorie databases, and user analytics visualization.',
        'Integrated REST APIs connecting dashboard to PostgreSQL / MySQL database.'
      ]
    },
    tech: ['Laravel', 'AdminLTE', 'MySQL', 'REST API', 'Chart.js', 'Bootstrap'],
    links: []
  },
  'bicaraku-web': {
    title: 'Bicaraku Web Dashboard',
    badge: 'Capstone Smt 6',
    category: 'Web & Analytics',
    desc: {
      id: 'Dashboard analitik berbasis Streamlit untuk visualisasi data sentimen & aktivitas pemantauan pengguna Bicaraku.',
      en: 'Analytics dashboard built on Streamlit for visualizing sentiment insights and user therapy session activity.'
    },
    images: [
      { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku Dashboard — Monitoring Sesi Terapi Wicara & Visualisasi Data' },
      { src: 'img/projects/bicaraku.png', caption: 'Bicaraku — Identitas Aplikasi & Alur Analitik' }
    ],
    contributions: {
      id: [
        'Mengembangkan portal pemantauan dan administrasi berbasis web untuk tracking sesi terapi wicara.',
        'Mengimplementasikan visualisasi analitik audio, laporan progres pengguna, dan manajemen konten edukasi.',
        'Menghubungkan endpoint backend Flask dengan autentikasi hak akses berbasis peran.'
      ],
      en: [
        'Developed web-based admin & monitoring portal for speech therapy session tracking.',
        'Implemented audio analytics overview, user progress reports, and content management.',
        'Connected Flask backend endpoints and authenticated role-based access.'
      ]
    },
    tech: ['Python', 'Streamlit', 'Flask', 'Pandas', 'Plotly', 'MongoDB'],
    links: []
  },
  'lokantara-web': {
    title: 'Lokantara POS Web Application',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    desc: {
      id: 'Sistem Point-of-Sale (POS) untuk mitra wisata dalam ekosistem platform Atlantara — manajemen tiket, kasir, dan laporan.',
      en: 'Point-of-Sale (POS) cashier system for tourism partners on the Atlantara platform — ticketing, billing, and reporting.'
    },
    images: [
      { src: 'img/projects/lokantara.png', caption: 'Lokantara — POS Wisata Platform Atlantara' },
      { src: 'img/projects/lokantara-lockup.png', caption: 'Atlantara — Ekosistem Digital Pariwisata Terpadu' }
    ],
    contributions: {
      id: [
        'Mengembangkan aplikasi web frontend Point of Sales (POS) kasir menggunakan Next.js dan Tailwind CSS.',
        'Merancang alur transaksi kasir cepat, manajemen katalog produk/tiket, dan pelacakan inventaris real-time.',
        'Mengimplementasikan kemampuan offline-first dan integrasi cetak struk kasir thermal.'
      ],
      en: [
        'Developed Point of Sales (POS) frontend web application using Next.js & Tailwind CSS.',
        'Designed transaction cashier flow, product management, and real-time inventory tracking.',
        'Implemented offline-first capability and receipt printing integration.'
      ]
    },
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MySQL'],
    links: []
  },
  'lokantara-mobile': {
    title: 'Lokantara Mobile App',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    desc: {
      id: 'Aplikasi mobile kasir & informasi wisatawan untuk platform Atlantara — transaksi cepat, navigasi, dan katalog.',
      en: 'Mobile companion app for tourists and merchants on Atlantara — fast transactions, navigation, and destination directory.'
    },
    images: [
      { src: 'img/projects/lokantara.png', caption: 'Lokantara Mobile — Aplikasi Kasir & Wisatawan Mobile' },
      { src: 'img/projects/lokantara-lockup.png', caption: 'Atlantara — Brand Identity & Design Guidelines' }
    ],
    contributions: {
      id: [
        'Membangun aplikasi mobile multiplatform untuk kasir dan katalog wisata menggunakan Flutter.',
        'Mengintegrasikan koneksi printer thermal Bluetooth untuk pencetakan bukti transaksi secara instan.',
        'Menghubungkan klien mobile dengan arsitektur microservices backend terpusat.'
      ],
      en: [
        'Built cross-platform mobile cashier & catalog app using Flutter.',
        'Integrated Bluetooth thermal printer for immediate receipt generation.',
        'Connected mobile client to centralized backend microservices.'
      ]
    },
    tech: ['Flutter', 'Dart', 'Bluetooth Printing', 'REST API', 'GetX'],
    links: []
  },
  'lokantara-ai': {
    title: 'Lokantara AI Recommendation & Forecasting',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    desc: {
      id: 'Modul AI untuk rekomendasi destinasi wisata dan peramalan tren transaksi pengunjung pada platform Atlantara.',
      en: 'AI recommendation module and sales forecasting engine tailored for tourism merchant intelligence.'
    },
    images: [
      { src: 'img/projects/lokantara-lockup.png', caption: 'Lokantara AI — Engine Rekomendasi Wisata & Prediksi Penjualan' },
      { src: 'img/projects/lokantara.png', caption: 'Atlantara — Arsitektur Modul Machine Learning' }
    ],
    contributions: {
      id: [
        'Mengeksplorasi dan memformulasikan algoritma analitik prediktif & sistem rekomendasi produk berdasarkan histori transaksi.',
        'Menyiapkan pipeline preprocessing data tabular serta mengevaluasi akurasi model untuk peramalan stok mitra.',
        'Menghubungkan model machine learning melalui REST API untuk inferensi cerdas.'
      ],
      en: [
        'Researched and formulated predictive analytics & product recommendation models based on sales transaction patterns.',
        'Prepared data preprocessing pipelines and evaluated model accuracy for inventory restock forecasting.',
        'Exposed machine learning models via REST APIs for seamless platform inference.'
      ]
    },
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Time Series Forecasting', 'REST API'],
    links: []
  },
  'cnn-food': {
    title: 'CNN Food Detection & SINTA 4 Publication',
    badge: 'Publikasi SINTA 4 📄',
    category: 'AI & Machine Learning Research',
    desc: {
      id: 'Deteksi bahan makanan menggunakan CNN VGG16 dengan akurasi 96.28%. Dipublikasikan di Jurnal JIMI SINTA 4 Vol.9 No.2 2024.',
      en: 'Food classification using CNN VGG16 achieving 96.28% accuracy. Published in accredited SINTA 4 JIMI Journal.'
    },
    images: [
      { src: 'img/certificates/cert-sinta4.png', caption: 'Publikasi SINTA 4 — Jurnal Ilmiah Informatika (JIMI) Vol. 9 No. 2 (2024)' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'Arsitektur Model CNN & Confusion Matrix Akurasi 96.28%' }
    ],
    contributions: {
      id: [
        'Melakukan penelitian dan mengembangkan arsitektur Convolutional Neural Network (CNN) berakurasi tinggi untuk klasifikasi bahan makanan.',
        'Menulis naskah ilmiah dan berhasil terbit sebagai First Author di Jurnal Terakreditasi Nasional SINTA 4 (JIMI Vol. 9 No. 2, 2024).',
        'Memvalidasi performa model melalui matriks evaluasi presisi, recall, dan F1-score komprehensif.'
      ],
      en: [
        'Conducted research and developed Convolutional Neural Network (CNN) architecture achieving high accuracy for single-object food classification.',
        'Authored research paper published as first author in SINTA 4 Accredited Journal (JIMI Vol. 9 No. 2, 2024).',
        'Validated model performance with confusion matrix, precision, recall, and F1-score evaluation.'
      ]
    },
    tech: ['CNN', 'VGG16', 'TensorFlow', 'Keras', 'Python', 'Jupyter Notebook'],
    links: [
      { text: 'Baca Artikel di OJS JIMI ↗', url: 'https://journal.ibrahimy.ac.id/index.php/JIMI/article/view/6384' },
      { text: 'DOI Link ↗', url: 'https://doi.org/10.35316/.v9i2.6384' }
    ]
  },
  'rag-tegal': {
    title: 'RAG Wisata Tegal Chatbot',
    badge: 'Capstone Smt 5',
    category: 'Natural Language Processing / GenAI',
    desc: {
      id: 'Chatbot cerdas berbasis Retrieval-Augmented Generation (RAG) untuk rekomendasi destinasi wisata di wilayah Tegal.',
      en: 'Retrieval-Augmented Generation (RAG) conversational agent answering user inquiries regarding Tegal tourism spots.'
    },
    images: [
      { src: 'img/projects/foodplan-mockup.png', caption: 'RAG Wisata Tegal — Knowledge Retrieval & Vector Store Pipeline' }
    ],
    contributions: {
      id: [
        'Membangun sistem percakapan Retrieval-Augmented Generation (RAG) untuk rekomendasi pariwisata lokal Tegal.',
        'Mengimplementasikan vector embeddings dan chunking dokumen korpus data wisata.',
        'Mengintegrasikan rekayasa prompt LLM dengan LangChain dan penyimpanan vektor ChromaDB.'
      ],
      en: [
        'Built Retrieval-Augmented Generation (RAG) conversational system for Tegal tourism recommendations.',
        'Implemented vector embeddings and document chunking for local tourism datasets.',
        'Integrated LLM prompting with LangChain and vector store search.'
      ]
    },
    tech: ['LangChain', 'OpenAI / HuggingFace', 'ChromaDB', 'Python', 'Streamlit'],
    links: []
  },
  'home-credit': {
    title: 'Home Credit Default Risk Prediction',
    badge: 'PBI Home Credit',
    category: 'Financial Machine Learning',
    desc: {
      id: 'Analisis risiko gagal bayar kredit nasabah menggunakan machine learning dalam Project Based Internship.',
      en: 'Credit risk prediction modeling to forecast loan defaults using gradient boosted trees in an industry internship.'
    },
    images: [
      { src: 'img/certificates/cert-pbi.png', caption: 'Home Credit Indonesia — Project Based Internship Certificate' }
    ],
    contributions: {
      id: [
        'Mengembangkan model penilaian risiko kredit menggunakan algoritma LightGBM dan XGBoost selama Project Based Internship.',
        'Menangani data tidak seimbang (class imbalance) menggunakan teknik SMOTE dan rekayasa fitur pada 100+ indikator pinjaman.',
        'Mempresentasikan wawasan bisnis berbasis data dan rekomendasi kebijakan mitigasi risiko kredit.'
      ],
      en: [
        'Developed machine learning risk scoring model using LightGBM and XGBoost during Project Based Internship.',
        'Handled class imbalance with SMOTE and advanced feature engineering across 100+ loan indicators.',
        'Delivered business presentation and actionable credit policy insights.'
      ]
    },
    tech: ['Python', 'LightGBM', 'XGBoost', 'Scikit-Learn', 'Pandas', 'Seaborn'],
    links: []
  },
  'pose-detection': {
    title: 'MediaPipe Pose Detection for Workout',
    badge: 'Practice Project',
    category: 'Computer Vision',
    desc: {
      id: 'Model deteksi pose tubuh manusia secara real-time untuk penghitungan repetisi latihan dan panduan olahraga.',
      en: 'Real-time human pose tracking and posture estimation to validate exercise angles and count workout repetitions.'
    },
    images: [
      { src: 'img/projects/distance-app.jpg', caption: 'MediaPipe Pose — Keypoint Landmark Estimation Real-time' }
    ],
    contributions: {
      id: [
        'Mengimplementasikan estimasi pose tubuh manusia secara real-time menggunakan Google MediaPipe dan OpenCV.',
        'Mengembangkan algoritma penghitung repetisi otomatis dan validasi sudut postur untuk latihan kebugaran.'
      ],
      en: [
        'Implemented real-time human pose estimation using Google MediaPipe and OpenCV.',
        'Developed rep counter algorithm and posture angle validation for fitness workout guidance.'
      ]
    },
    tech: ['MediaPipe', 'OpenCV', 'Python', 'NumPy'],
    links: []
  },
  'looker-analytics': {
    title: 'Google Looker Studio Analytics',
    badge: 'Course & Cert',
    category: 'Business Intelligence',
    desc: {
      id: 'Visualisasi data interaktif dengan Google Looker Studio untuk pemantauan KPI bisnis dan pelaporan eksekutif.',
      en: 'Interactive business intelligence dashboards built on Google Looker Studio to track commercial operational KPIs.'
    },
    images: [
      { src: 'img/certificates/cert-myskill.png', caption: 'MySkill — Data Analysis & Visualization Certification' }
    ],
    contributions: {
      id: [
        'Merancang dashboard multi-halaman interaktif pada Google Looker Studio untuk pelacakan metrik operasional bisnis.',
        'Menghubungkan berbagai sumber data (Google Sheets, BigQuery, basis data SQL) dengan calculated fields dan filter kustom.'
      ],
      en: [
        'Designed interactive multi-page dashboards on Google Looker Studio for KPI tracking.',
        'Connected diverse data sources (Google Sheets, BigQuery, SQL) with customized calculated fields and filters.'
      ]
    },
    tech: ['Looker Studio', 'SQL', 'BigQuery', 'Google Sheets'],
    links: []
  },
  'web-scraping': {
    title: 'Automated Web Scraping Engine',
    badge: 'Data Pipeline',
    category: 'Data Engineering',
    desc: {
      id: 'Engine otomatisasi ekstraksi dan pembersihan data web untuk kebutuhan dataset penelitian dan analitik.',
      en: 'Automated data ingestion pipeline extracting, cleaning, and structuring public web data for analytical datasets.'
    },
    images: [
      { src: 'img/projects/foodplan-web.png', caption: 'Data Scraping Engine — Automated Pipeline & Export Management' }
    ],
    contributions: {
      id: [
        'Mengembangkan skrip ekstraksi data web otomatis menggunakan Python, BeautifulSoup, dan Selenium.',
        'Membersihkan, menormalisasi, dan mengekspor data semi-terstruktur ke dalam format tabular siap analisis.'
      ],
      en: [
        'Developed automated data extraction scripts using Python, BeautifulSoup, and Selenium.',
        'Cleaned, normalized, and exported semi-structured web data into tabular formats for analytical consumption.'
      ]
    },
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
    links: []
  },
  'qa-foodplan': {
    title: 'QA FoodPlan — ISO 25010',
    badge: 'Smt 5 Quality Assurance',
    category: 'Software Quality Assurance',
    desc: {
      id: 'Pengujian perangkat lunak FoodPlan mencakup fungsional, performa, dan usability berdasarkan standar ISO 25010.',
      en: 'End-to-end quality assurance for the FoodPlan system evaluating functional suitability, performance, and usability under ISO 25010.'
    },
    images: [
      { src: 'img/projects/foodplan.png', caption: 'FoodPlan App — Target Verifikasi Kualitas ISO 25010' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'Matriks Pengujian Fungsionalitas & Performance' }
    ],
    contributions: {
      id: [
        'Menyusun skenario dan test case komprehensif mencakup Functional Suitability, Usability, dan Performance Efficiency.',
        'Menjalankan black-box testing, validasi responsivitas antarmuka, dan pengujian penerimaan pengguna (UAT).',
        'Menyusun dokumen laporan resmi penjaminan mutu perangkat lunak berstandar ISO 25010.'
      ],
      en: [
        'Formulated comprehensive test cases covering Functional Suitability, Usability, and Performance Efficiency.',
        'Executed black-box testing, UI responsiveness validation, and user acceptance testing (UAT).',
        'Documented formal ISO 25010 quality assurance test reports.'
      ]
    },
    tech: ['ISO 25010', 'Selenium IDE', 'GTMetrix', 'Test Case Design', 'UAT'],
    links: []
  },
  'qa-bicaraku': {
    title: 'QA Bicaraku — ISO 25010',
    badge: 'Smt 6 Quality Assurance',
    category: 'Software Quality Assurance',
    desc: {
      id: 'Laporan pengujian kualitas perangkat lunak Bicaraku menggunakan Katalon Studio dan evaluasi System Usability Scale (SUS).',
      en: 'Comprehensive software testing for Bicaraku utilizing Katalon Studio automation and System Usability Scale (SUS) assessment.'
    },
    images: [
      { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku — Skenario Pengujian Deteksi Kamera & Suara' },
      { src: 'img/projects/bicaraku.png', caption: 'Laporan Evaluasi System Usability Scale (SUS)' }
    ],
    contributions: {
      id: [
        'Merencanakan dan mengeksekusi skenario pengujian otomatis dan manual untuk fitur deteksi objek kamera dan output audio.',
        'Mengevaluasi metrik kebergunaan antarmuka menggunakan kuesioner System Usability Scale (SUS) bersama pengguna target.',
        'Mendokumentasikan hasil temuan defek serta rekomendasi perbaikan kualitas sistem.'
      ],
      en: [
        'Planned and executed automated and manual testing scenarios for voice and camera detection features.',
        'Evaluated usability metrics with System Usability Scale (SUS) involving assistive target users.',
        'Documented defect reports and actionable software enhancement recommendations.'
      ]
    },
    tech: ['Katalon Studio', 'ISO 25010', 'SUS Testing', 'Accessibility QA'],
    links: []
  },
  'api-testing': {
    title: 'API Automated Testing (FoodPlan & Bicaraku)',
    badge: 'API Automation',
    category: 'Backend QA & Performance',
    desc: {
      id: 'Pengujian endpoint REST API secara otomatis meliputi validasi status code, payload JSON, latency, dan token auth.',
      en: 'Automated REST API regression suites validating HTTP status responses, payload schemas, latency budgets, and security tokens.'
    },
    images: [
      { src: 'img/projects/foodplan-web.png', caption: 'Postman & Katalon API Test Suites & Endpoint Validations' }
    ],
    contributions: {
      id: [
        'Membuat rangkaian uji regresi otomatis endpoint API menggunakan Postman, Newman, dan Katalon Studio.',
        'Memvalidasi status code, integritas schema respon JSON, threshold latensi, dan token keamanan bearer.',
        'Membuat koleksi dokumentasi API komprehensif untuk pengembang frontend.'
      ],
      en: [
        'Created automated API regression test suites using Postman and Katalon Studio.',
        'Validated status codes, response payloads, latency thresholds, and authentication tokens.',
        'Generated automated documentation collections for cross-team backend integration.'
      ]
    },
    tech: ['Postman', 'Newman', 'Katalon Studio', 'REST API Testing', 'JSON Schema'],
    links: []
  },
  'numbrarush': {
    title: 'Numbra Rush — Math Puzzle Game',
    badge: 'UAS Game Dev Smt 6',
    category: 'Game Development',
    desc: {
      id: 'Game edukasi puzzle matematika bergaya pixel art yang melatih kecepatan berhitung dengan mekanisme permainan adiktif.',
      en: 'Challenging pixel-art math puzzle game designed to sharpen mental arithmetic skills through fast-paced mechanics.'
    },
    images: [
      { src: 'img/projects/numbrarush-mockup-1.png', caption: 'Numbra Rush — Title Screen & Pixel Artwork' },
      { src: 'img/projects/numbrarush-mockup-2.jpg', caption: 'Numbra Rush — Gameplay Tantangan Berhitung Cepat' },
      { src: 'img/projects/numbrarush.png', caption: 'Numbra Rush — Logo & Sprite Karakter' }
    ],
    contributions: {
      id: [
        'Mengembangkan logika game, sistem skor progresif, dan mekanisme tantangan berhitung berbasis waktu.',
        'Merancang aset visual pixel art, animasi karakter, dan efek suara dinamis untuk pengalaman bermain yang menarik.',
        'Mengoptimalkan performa game agar berjalan ringan dan mulus di berbagai perangkat.'
      ],
      en: [
        'Developed game logic, score progression, and speed challenge mechanics.',
        'Designed pixel art assets, animations, and sound effects for engaging brain-training experience.',
        'Optimized build performance ensuring smooth frame rates across diverse hardware.'
      ]
    },
    tech: ['Unity / C#', 'Pixel Art', 'Audio Synthesis', 'Game Mechanics'],
    links: []
  }
};

const CERTS_DATA = {
  'sinta4': {
    title: 'Publikasi Jurnal Terakreditasi SINTA 4',
    issuer: 'Jurnal Ilmiah Inovasi Sains dan Teknologi (JIMI) · Vol. 9 No. 2 · 2024',
    image: 'img/certificates/cert-sinta4.png',
    badge: 'First Author · SINTA 4',
    link: 'https://journal.ibrahimy.ac.id/index.php/JIMI/article/view/6384'
  },
  'bnsp': {
    title: 'Sertifikasi Kompetensi BNSP — Associate Data Scientist',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP) Republik Indonesia',
    image: 'img/certificates/cert-bnsp.png',
    badge: 'Sertifikasi Nasional',
    link: 'img/cv-berliani.pdf'
  },
  'huawei': {
    title: 'Huawei Certified HCIA — Artificial Intelligence',
    issuer: 'Huawei ICT Academy',
    image: 'img/certificates/cert-huawei.jpg',
    badge: 'Internasional',
    link: 'img/cv-berliani.pdf'
  },
  'digitalent': {
    title: 'Fresh Graduate Academy (FGA) — AI Intermediate Track',
    issuer: 'Kementerian Komunikasi dan Informatika RI (Kominfo)',
    image: 'img/certificates/cert-digitalent.png',
    badge: 'Kominfo RI',
    link: 'img/cv-berliani.pdf'
  },
  'myskill': {
    title: 'Data Science & Business Analytics Certified',
    issuer: 'MySkill Indonesia',
    image: 'img/certificates/cert-myskill.png',
    badge: 'Professional Track',
    link: 'img/cv-berliani.pdf'
  },
  'coursera': {
    title: 'Machine Learning & Python Foundations',
    issuer: 'Coursera International',
    image: 'img/certificates/cert-coursera.png',
    badge: 'Global Credential',
    link: 'img/cv-berliani.pdf'
  },
  'pbi': {
    title: 'Project Based Internship — Data Analytics',
    issuer: 'Home Credit Indonesia × Rakamin Academy',
    image: 'img/certificates/cert-pbi.png',
    badge: 'Industry Project',
    link: 'img/cv-berliani.pdf'
  },
  'pomn': {
    title: 'Pendanaan Program Ormawa Membangun Negeri (POMN) 2024',
    issuer: 'Ditjen Pendidikan Vokasi Kemendikbudristek RI (Ketua Tim Pelaksana)',
    image: 'img/certificates/cert-pomn.jpg',
    badge: 'Hibah Nasional Dikti',
    link: 'img/cv-berliani.pdf'
  },
  'pkm': {
    title: 'Pendanaan Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) 2023',
    issuer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI',
    image: 'img/certificates/cert-pkm.jpg',
    badge: 'Hibah Nasional Dikti',
    link: 'img/cv-berliani.pdf'
  }
};

// ── LANGUAGE SWITCHER LOGIC ──────────────────
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // 1. Text content with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = TRANSLATIONS[lang][key];
    if (text) el.textContent = text;
  });

  // 2. Placeholders with data-i18n-ph
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    const ph = TRANSLATIONS[lang][key];
    if (ph) el.placeholder = ph;
  });

  // 3. Update project card descriptions on page
  document.querySelectorAll('.project-card[data-project-id]').forEach(card => {
    const pid = card.dataset.projectId;
    const pData = PROJECTS_DATA[pid];
    if (pData && pData.desc) {
      const descEl = card.querySelector('.project-desc');
      if (descEl) descEl.textContent = pData.desc[lang] || pData.desc.id;
    }
  });

  // 4. Update Toggle buttons state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.dataset.lang;
    const isActive = btnLang === lang;
    btn.classList.toggle('active', isActive);
  });

  // 5. If a project modal is currently open, refresh its content in the new language
  if (typeof activeProjectId !== 'undefined' && activeProjectId && typeof refreshActiveModal === 'function') {
    refreshActiveModal();
  }
}

let activeProjectId = null;
let refreshActiveModal = null;


document.addEventListener('DOMContentLoaded', () => {

  // Initialize Language Switch
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = btn.dataset.lang;
      if (targetLang) setLanguage(targetLang);
    });
  });

  // Apply default language
  setLanguage(currentLang);

  // ── 1. NAVBAR SCROLL SHADOW ──────────────────
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // ── 2. HAMBURGER MOBILE NAV ──────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  mobileNav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });

  // ── 3. ACTIVE NAV LINK (Intersection Observer) ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const observerNav = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[data-section="${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => observerNav.observe(s));

  // ── 4. SCROLL REVEAL ANIMATION ───────────────
  const reveals = document.querySelectorAll('.reveal');
  const observerReveal = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observerReveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('visible');
    } else {
      observerReveal.observe(el);
    }
  });


  // ── 5. PROJECT FILTER TABS ───────────────────
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;

      projectCards.forEach(card => {
        const cat = card.dataset.category;
        const match = filter === 'all' || cat === filter;
        card.style.display = match ? 'block' : 'none';
        if (match) {
          card.style.animation = 'none';
          card.offsetHeight; // trigger reflow
          card.style.animation = 'cardReveal 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards';
        }
      });
    });
  });

  // ── 6. ANIMATED COUNTER (About Me) ───────────
  function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);
    const suffix = el.dataset.suffix || '';
    const tick = () => {
      start += step;
      if (start >= target) {
        el.textContent = target + suffix;
      } else {
        el.textContent = Math.floor(start) + suffix;
        requestAnimationFrame(tick);
      }
    };
    tick();
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('[data-count]').forEach(el => {
          animateCounter(el, parseInt(el.dataset.count));
        });
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  const statsSection = document.getElementById('about');
  if (statsSection) statObserver.observe(statsSection);

  // ── 7. CONTACT FORM SUBMIT ───────────────────
  const contactForm = document.getElementById('contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name    = document.getElementById('contactName').value.trim();
    const email   = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('contactMessage').value.trim();
    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`[Portfolio] Pesan dari ${name}`);
    const body    = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);
    window.open(`mailto:berlianiirisqi@gmail.com?subject=${subject}&body=${body}`);

    contactForm.reset();
    const btn = document.getElementById('submitBtn');
    const sentText = TRANSLATIONS[currentLang]?.contact_btn_sent || '✓ Pesan Terkirim!';
    const defaultText = TRANSLATIONS[currentLang]?.contact_btn || 'Kirim Pesan ✉️';
    btn.textContent = sentText;
    setTimeout(() => { btn.textContent = defaultText; }, 3000);
  });

  // ── 8. SMOOTH ACTIVE TAB DEFAULT ─────────────
  const defaultTab = document.querySelector('.filter-tab[data-filter="all"]');
  defaultTab?.classList.add('active');

  // ── 9. PROJECT MODAL & SLIDER CONTROLLER ─────
  const projectModal      = document.getElementById('projectModal');
  const closeProjectModal = document.getElementById('closeProjectModal');
  const modalBadge        = document.getElementById('modalProjectBadge');
  const modalTitle        = document.getElementById('modalProjectTitle');
  const modalSliderImg    = document.getElementById('modalSliderImage');
  const modalSliderCap    = document.getElementById('modalSliderCaption');
  const sliderPrev        = document.getElementById('sliderPrev');
  const sliderNext        = document.getElementById('sliderNext');
  const sliderDots        = document.getElementById('sliderDots');
  const modalContribs     = document.getElementById('modalContributions');
  const modalTechStack    = document.getElementById('modalTechStack');
  const modalActionLinks  = document.getElementById('modalActionLinks');

  let currentProjectImages = [];
  let currentImageIdx = 0;

  function renderSliderImage(idx) {
    if (!currentProjectImages.length) return;
    currentImageIdx = (idx + currentProjectImages.length) % currentProjectImages.length;
    const item = currentProjectImages[currentImageIdx];
    modalSliderImg.style.opacity = '0';
    setTimeout(() => {
      modalSliderImg.src = item.src;
      modalSliderImg.alt = item.caption || 'Mockup';
      modalSliderCap.textContent = `${item.caption} (${currentImageIdx + 1} / ${currentProjectImages.length})`;
      modalSliderImg.style.opacity = '1';
    }, 150);

    // Update dots
    sliderDots.querySelectorAll('.slider-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentImageIdx);
    });

    // Hide navigation if only 1 image
    const hasMultiple = currentProjectImages.length > 1;
    sliderPrev.style.display = hasMultiple ? 'flex' : 'none';
    sliderNext.style.display = hasMultiple ? 'flex' : 'none';
    sliderDots.style.display = hasMultiple ? 'flex' : 'none';
  }

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    activeProjectId = projectId;
    modalTitle.textContent = data.title;
    modalBadge.textContent = `${data.badge} · ${data.category}`;

    // Images & Slider
    currentProjectImages = data.images || [];
    currentImageIdx = 0;
    sliderDots.innerHTML = '';
    currentProjectImages.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Slide ${i + 1}`);
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        renderSliderImage(i);
      });
      sliderDots.appendChild(dot);
    });
    renderSliderImage(0);

    // Contributions based on active language
    modalContribs.innerHTML = '';
    const contribList = (data.contributions && data.contributions[currentLang]) ? data.contributions[currentLang] : (data.contributions.id || []);
    contribList.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2.5';
      li.innerHTML = `<span class="text-pink-deep text-base mt-0.5 flex-shrink-0 font-bold">✓</span><span>${item}</span>`;
      modalContribs.appendChild(li);
    });

    // Tech Stack
    modalTechStack.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = t;
      modalTechStack.appendChild(span);
    });

    // Action Links
    modalActionLinks.innerHTML = '';
    (data.links || []).forEach(l => {
      const a = document.createElement('a');
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      const isPlayStore = l.url.includes('play.google.com');
      if (isPlayStore) {
        a.className = 'playstore-badge text-xs py-2 px-4 shadow-md inline-flex items-center gap-1.5 cursor-pointer';
        a.innerHTML = `<svg class="w-4 h-4 fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a2.296 2.296 0 0 1-.61-1.616V3.43c0-.62.23-1.196.609-1.616zm11.597 11.599L18.44 15.2l-3.234-1.787zm-1.414-1.413L4.997 3.205 16.89 9.878l-3.098 1.722zm0 0l3.098 1.722-11.893 6.673 8.795-8.395z"/></svg><span>${currentLang === 'id' ? 'Buka di Google Play Store ↗' : 'Get it on Google Play ↗'}</span>`;
      } else {
        a.className = 'btn-primary text-xs py-2 px-4 whitespace-nowrap inline-flex items-center gap-1.5 shadow-md cursor-pointer';
        a.textContent = l.text;
      }
      modalActionLinks.appendChild(a);
    });

    // Open Modal
    projectModal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }

  refreshActiveModal = () => {
    if (activeProjectId && projectModal.classList.contains('modal-active')) {
      openProjectModal(activeProjectId);
    }
  };

  function closeProjectModalFunc() {
    activeProjectId = null;
    projectModal.classList.remove('modal-active');
    document.body.style.overflow = '';
  }

  // Attach card click handlers
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.dataset.projectId;
      if (pid) openProjectModal(pid);
    });
  });

  sliderPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    renderSliderImage(currentImageIdx - 1);
  });
  sliderNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    renderSliderImage(currentImageIdx + 1);
  });

  closeProjectModal?.addEventListener('click', closeProjectModalFunc);
  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) closeProjectModalFunc();
  });

  // ── 10. CERTIFICATE PREVIEW MODAL ────────────
  const certModal      = document.getElementById('certModal');
  const closeCertModal = document.getElementById('closeCertModal');
  const certTitle      = document.getElementById('certModalTitle');
  const certIssuer     = document.getElementById('certModalIssuer');
  const certImage      = document.getElementById('certModalImage');
  const certBadge      = document.getElementById('certModalBadge');
  const certLink       = document.getElementById('certModalLink');

  function openCertModal(certId) {
    const data = CERTS_DATA[certId];
    if (!data) return;

    certTitle.textContent  = data.title;
    certIssuer.textContent = data.issuer;
    certImage.src          = data.image;
    certImage.alt          = data.title;
    certBadge.textContent  = TRANSLATIONS[currentLang]?.cert_verified || 'Tervalidasi Resmi';

    if (data.link) {
      certLink.href = data.link;
      certLink.style.display = 'inline-flex';
      const isExternal = data.link.startsWith('http');
      certLink.textContent = isExternal ? (TRANSLATIONS[currentLang]?.cert_view_link || 'Buka Verifikasi Asli ↗') : (TRANSLATIONS[currentLang]?.cert_download_cv || 'Unduh CV Lengkap ↓');
    } else {
      certLink.style.display = 'none';
    }

    certModal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }

  function closeCertModalFunc() {
    certModal.classList.remove('modal-active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.cert-card[data-cert-id]').forEach(card => {
    card.addEventListener('click', () => {
      const cid = card.dataset.certId;
      if (cid) openCertModal(cid);
    });
  });

  closeCertModal?.addEventListener('click', closeCertModalFunc);
  certModal?.addEventListener('click', (e) => {
    if (e.target === certModal) closeCertModalFunc();
  });

  // Global ESC key to close any open modal & Arrow keys for slider
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModalFunc();
      closeCertModalFunc();
    } else if (projectModal.classList.contains('modal-active')) {
      if (e.key === 'ArrowLeft') renderSliderImage(currentImageIdx - 1);
      if (e.key === 'ArrowRight') renderSliderImage(currentImageIdx + 1);
    }
  });

});

// CSS keyframe for card reveal (injected)
const style = document.createElement('style');
style.textContent = `
@keyframes cardReveal {
  from { opacity: 0; transform: scale(0.94) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}`;
document.head.appendChild(style);
