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
        'Mengimplementasikan mobile widgets dan unit testing.',
        'Mengumpulkan dataset resep masakan dari internet'
      ],
      en: [
        'I built an AI model for multi-object detection using YOLOv8 and single-object detection using CNN.',
        'Annotated ~6,000 images across 13 classes for training dataset preparation.',
        'Developed a mobile frontend using the Flutter framework.',
        'Implemented mobile widgets and unit testing.',
        'Collected recipe datasets from the internet'
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
      { src: 'img/projects/tuntun mockup.png', caption: 'Tuntun — Interface & Mockup Aplikasi Android' }
    ],
    contributions: {
      id: [
        'Project Tugas Akhir (Skripsi) yang dikerjakan secara mandiri secara menyeluruh (End-to-End Individual Project).',
        'Merancang arsitektur sistem deteksi objek & estimasi jarak rintangan berbasis YOLO dan Triangle Similarity Algorithm.',
        'Mengembangkan frontend mobile menggunakan Flutter dengan navigasi audio, panduan suara TTS, dan feedback getar.',
        'Membangun integrasi model AI edge computing (TFLite) agar dapat berjalan cepat dan offline pada smartphone.',
        'Melaksanakan pengujian kualitas perangkat lunak komprehensif menggunakan Black Box Testing dan Usability Testing .'
      ],
      en: [
        'Independently designed and developed the entire end-to-end assistive navigation application as a Final Year Project.',
        'Implemented object detection & obstacle avoidance AI models using YOLO and Triangle Similarity algorithms for distance estimation.',
        'Developed mobile frontend with Flutter, custom audio cues, TTS voice assistance, and haptic feedback.',
        'Built on-device edge AI integration (TFLite) for fast offline inference directly on smartphones.',
        'Conducted rigorous software quality assurance testing using Black Box Testing and Usability Testing.'
      ]
    },
    tech: ['Flutter', 'TFLite', 'YOLO', 'Python', 'Triangle Similarity', 'TTS', 'Usability Testing', 'SUS', 'Black Box Testing'],
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
  // 'foodplan-web': {
  //   title: 'FoodPlan Web Dashboard',
  //   badge: 'Capstone Smt 5',
  //   category: 'Web Application',
  //   desc: {
  //     id: 'Dashboard admin web untuk manajemen resep, user, dan statistik analitik penggunaan aplikasi FoodPlan.',
  //     en: 'Web admin dashboard for recipe catalog management, user accounts, and usage analytics for the FoodPlan platform.'
  //   },
  //   images: [
  //     { src: 'img/projects/foodplan-web.png', caption: 'FoodPlan Web — Dashboard Admin & Manajemen Resep Makanan' },
  //     { src: 'img/projects/foodplan-mockup.png', caption: 'FoodPlan Web — Skema Integrasi Database & API Model' }
  //   ],
  //   contributions: {
  //     id: [
  //       'Membangun dashboard web responsif menggunakan HTML, CSS, JavaScript, dan Bootstrap untuk admin ahli gizi dan pengelola resep.',
  //       'Merancang fitur CRUD untuk perencanaan menu makanan, basis data kalori, dan visualisasi grafik analitik.',
  //       'Mengintegrasikan REST API yang menghubungkan dashboard web dengan basis data MySQL.'
  //     ],
  //     en: [
  //       'Built responsive web dashboard using HTML, CSS, JavaScript, and Bootstrap for admin nutritionists and recipe managers.',
  //       'Designed CRUD features for meal planning, calorie databases, and user analytics visualization.',
  //       'Integrated REST APIs connecting dashboard to PostgreSQL / MySQL database.'
  //     ]
  //   },
  //   tech: ['Laravel', 'AdminLTE', 'MySQL', 'REST API', 'Chart.js', 'Bootstrap'],
  //   links: []
  // },
  // 'bicaraku-web': {
  //   title: 'Bicaraku Web Dashboard',
  //   badge: 'Capstone Smt 6',
  //   category: 'Web & Analytics',
  //   desc: {
  //     id: 'Dashboard analitik berbasis Streamlit untuk visualisasi data sentimen & aktivitas pemantauan pengguna Bicaraku.',
  //     en: 'Analytics dashboard built on Streamlit for visualizing sentiment insights and user therapy session activity.'
  //   },
  //   images: [
  //     { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku Dashboard — Monitoring Sesi Terapi Wicara & Visualisasi Data' },
  //     { src: 'img/projects/bicaraku.png', caption: 'Bicaraku — Identitas Aplikasi & Alur Analitik' }
  //   ],
  //   contributions: {
  //     id: [
  //       'Mengembangkan portal pemantauan dan administrasi berbasis web untuk tracking sesi terapi wicara.',
  //       'Mengimplementasikan visualisasi analitik audio, laporan progres pengguna, dan manajemen konten edukasi.',
  //       'Menghubungkan endpoint backend Flask dengan autentikasi hak akses berbasis peran.'
  //     ],
  //     en: [
  //       'Developed web-based admin & monitoring portal for speech therapy session tracking.',
  //       'Implemented audio analytics overview, user progress reports, and content management.',
  //       'Connected Flask backend endpoints and authenticated role-based access.'
  //     ]
  //   },
  //   tech: ['Python', 'Streamlit', 'Flask', 'Pandas', 'Plotly', 'MongoDB'],
  //   links: []
  // },
  'lokantara-web': {
    title: 'Lokantara POS Web Application',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    desc: {
      id: 'Sistem Point-of-Sale (POS) untuk mitra wisata dalam ekosistem platform Atlantara — manajemen tiket, kasir, dan laporan.',
      en: 'Point-of-Sale (POS) cashier system for tourism partners on the Atlantara platform — ticketing, billing, and reporting.'
    },
    images: [
      { src: 'img/projects/lokantara.png', caption: 'Atlantara' },
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
    title: 'Lokantara Mobile — Manual Testing & QA (Mitra & User)',
    badge: 'Penelitian Dosen · QA Testing',
    category: 'Manual Black-box Testing',
    desc: {
      id: 'Pengujian manual black-box menyeluruh pada aplikasi mobile Atlantara Lokantara untuk modul Mitra (pengelola wisata) dan modul User (wisatawan).',
      en: 'Comprehensive manual black-box testing for the Atlantara Lokantara mobile platform covering both Merchant (Mitra) and Tourist (User) modules.'
    },
    images: [
      { src: 'img/projects/lokantara.png', caption: 'Lokantara Mobile' },
    ],
    contributions: {
      id: [
        'Menyusun test plan dan matriks test cases pengujian manual black-box untuk aplikasi Lokantara Mitra dan Lokantara User.',
        'Menguji modul Lokantara Mitra: pendaftaran mitra, autentikasi login, pengelolaan profil tempat wisata, upload foto destinasi, konfigurasi harga & kuota tiket, dan integrasi kasir/POS.',
        'Menguji modul Lokantara User: pencarian destinasi wisata, filter kategori, alur pemesanan tiket, simulasi checkout, validasi barcode/QRIS, serta pengecekan e-tiket.',
        'Mendokumentasikan bug reporting, langkah-langkah reproduksi masalah (steps to reproduce), serta re-testing pasca bug fixing bersama tim developer.'
      ],
      en: [
        'Designed test plans and black-box manual test matrices for both Lokantara Mitra (Merchant) and Lokantara User (Tourist) mobile apps.',
        'Tested Lokantara Mitra module: merchant registration, authentication, attraction profile CRUD, photo uploads, ticket quota/pricing management, and POS transactions.',
        'Tested Lokantara User module: destination search, category filtering, ticket booking workflows, checkout simulation, QRIS payment verification, and e-ticket history.',
        'Documented defect tracking, detailed steps to reproduce, and regression verification post-bug fixes with software developers.'
      ]
    },
    tech: ['Manual Testing', 'Black-box Testing', 'Test Case Design', 'Flutter Mobile QA'],
     links: [
      { text: '📂 Test case documentation ↗', url: 'https://docs.google.com/spreadsheets/d/11Qf0t6dymKTgECZGnNaZYPRXJhStSzEK/edit?usp=sharing&ouid=116579920058476973709&rtpof=true&sd=true' }
    ]
  },
  'lokantara-ai': {
    title: 'Lokantara AI — Itinerary Recommendation & Voice STT',
    badge: 'Penelitian Dosen · AI System',
    category: 'Recommendation Engine & Voice STT',
    desc: {
      id: 'Engine rekomendasi rencana perjalanan (itinerary) wisata personal dan pemrosesan perintah suara Speech-to-Text (STT) untuk kemudahan wisatawan.',
      en: 'Personalized travel itinerary recommendation engine and natural voice trip planning powered by Speech-to-Text (STT) in the Atlantara ecosystem.'
    },
    images: [
      { src: 'img/projects/lokantara-lockup.png', caption: 'Lokantara AI — Engine Rekomendasi Rute Wisata & Speech-to-Text Itinerary Planner' },
      { src: 'img/projects/lokantara.png', caption: 'Atlantara — Integrasi Machine Learning dalam Ekosistem Wisata' }
    ],
    contributions: {
      id: [
        'Merancang dan mengembangkan algoritma sistem rekomendasi itinerary wisata yang mempersonalisasi urutan destinasi berdasarkan preferensi kategori, durasi kunjungan, dan budget.',
        'Mengintegrasikan teknologi Speech-to-Text (STT) untuk memungkinkan wisatawan merencanakan atau mencari rute perjalanan melalui perintah suara alami.',
        'Mengimplementasikan pengelompokan geografis (clustering) destinasi wisata terdekat untuk mengoptimalkan efisiensi rute perjalanan.',
        'Menghubungkan modul AI dan voice processing ke backend REST API untuk integrasi langsung dengan aplikasi mobile dan web Atlantara.'
      ],
      en: [
        'Engineered personalized travel itinerary recommendation algorithms tailoring destination sequences based on category preferences, stay durations, and budget constraints.',
        'Integrated Speech-to-Text (STT) speech recognition enabling travelers to generate or query itineraries via natural voice commands.',
        'Implemented geospatial clustering of tourist spots to minimize travel transit overhead and maximize route efficiency.',
        'Exposed AI and speech processing endpoints via REST APIs for direct consumption by Atlantara mobile and web applications.'
      ]
    },
    tech: ['Python', 'Speech-to-Text (STT)', 'Recommendation System', 'NLP', 'Geospatial Clustering', 'REST API'],
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
    badge: 'PBI Home Credit · Risk Modeling',
    category: 'Financial Machine Learning & Risk Analytics',
    desc: {
      id: 'Analisis risiko gagal bayar kredit nasabah menggunakan machine learning (LightGBM, XGBoost, Random Forest) pada Project Based Internship Home Credit Indonesia.',
      en: 'Credit default risk assessment and predictive machine learning modeling (LightGBM, XGBoost, Random Forest) during Home Credit Indonesia Project Based Internship.'
    },
    images: [
      { src: 'img/projects/homecredit-slide-1.png', caption: 'Home Credit Indonesia — Final Assessment Executive Presentation' },
      { src: 'img/projects/homecredit-slide-2.png', caption: 'Business Understanding — Credit Default Risk & Problem Formulation' },
      { src: 'img/projects/homecredit-slide-3.png', caption: 'Exploratory Data Analysis — Feature Distributions & Handling Imbalanced Data' },
      { src: 'img/projects/homecredit-slide-4.png', caption: 'Model Evaluation — Benchmark & ROC-AUC Comparison Across Classifiers' },
      { src: 'img/projects/homecredit-slide-5.png', caption: 'Business Recommendations — Actionable Strategies for Credit Decisioning' },
      { src: 'img/certificates/cert-pbi.png', caption: 'Home Credit Indonesia — Project Based Internship Certificate' }
    ],
    contributions: {
      id: [
        'Menganalisis dataset pinjaman Home Credit Indonesia yang mencakup data aplikasi, riwayat biro kredit, dan pembayaran sebelumnya.',
        'Melakukan Exploratory Data Analysis (EDA) mendalam serta menangani data tidak seimbang (class imbalance) menggunakan SMOTE dan teknik penyeimbangan data.',
        'Membangun dan membandingkan model machine learning klasifikasi (Logistic Regression, Random Forest, XGBoost, dan LightGBM) untuk memprediksi probabilitas default kredit nasabah.',
        'Mengevaluasi performa model dengan metrik ROC-AUC, precision, recall, dan confusion matrix untuk meminimalkan risiko non-performing loan (NPL).',
        'Mempresentasikan temuan analitis serta rekomendasi strategi mitigasi risiko kredit pada sesi evaluasi akhir (Final Assessment).'
      ],
      en: [
        'Analyzed Home Credit Indonesia loan datasets encompassing applicant demographics, credit bureau records, and previous payment histories.',
        'Conducted comprehensive Exploratory Data Analysis (EDA) and resolved extreme class imbalance utilizing SMOTE and data balancing techniques.',
        'Engineered and benchmarked predictive classification models (Logistic Regression, Random Forest, XGBoost, and LightGBM) to forecast loan default probability.',
        'Evaluated model efficacy using ROC-AUC scores, precision-recall trade-offs, and confusion matrices to minimize non-performing loans (NPL).',
        'Delivered final presentation outlining data-driven risk management strategies and credit decisioning recommendations.'
      ]
    },
    tech: ['Python', 'LightGBM', 'XGBoost', 'Scikit-Learn', 'Pandas', 'SMOTE', 'ROC-AUC'],
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
  'looker-analytics-cc': {
    title: 'Google Looker Studio Analytics Dashboards',
    badge: 'Business Intelligence & Analytics',
    category: 'Data Visualization & Reporting',
    desc: {
      id: 'Dashboard Business Intelligence interaktif Google Looker Studio: Analisis Nasabah Kartu Kredit (MySkill Final Project)',
      en: 'Interactive Business Intelligence dashboards built with Google Looker Studio: Credit Card Customer Intelligence (MySkill Final Project)'
    },
    images: [
      { src: 'img/projects/looker-dashboard-cc.png', caption: 'Google Looker Studio — Credit Card Customer Intelligence & Delinquency Dashboard' },
      { src: 'img/projects/looker-dashboard-cc2.png', caption: 'Page 2'},
      { src: 'img/projects/looker-dashboard-cc3.png', caption: 'Page 3'},
    ],
    contributions: {
      id: [
        'Merancang dashboard Business Intelligence interaktif pada Google Looker Studio untuk analisis portofolio kartu kredit nasabah (MySkill Final Project).',
        'Membangun visualisasi metrik utama: total revolving balance, segmentasi tingkat penghasilan, kategori kartu, status pernikahan, dan tingkat delinquency.',
        'Menerapkan calculated fields kustom, custom blending data dari spreadsheet / basis data SQL, serta filter kontrol interaktif dinamis.'
      ],
      en: [
        'Engineered interactive Business Intelligence dashboards in Google Looker Studio for credit card customer portfolio intelligence (MySkill Final Project).',
        'Visualized key operational metrics: total revolving balance, income tier breakdown, card tier adoption, marital distributions, and delinquency ratios.',
        'Implemented custom calculated fields, data blending from tabular sources and SQL, and dynamic cross-filter controls.'
      ]
    },
    tech: ['Google Looker Studio', 'Business Intelligence', 'Data Blending', 'Calculated Fields', 'SQL', 'Google Sheets'],
    links: [
      { text: '📊 Dashboard ↗', url: 'https://datastudio.google.com/s/v7sE6qKLLSE' }
    ]
  },
  'looker-analytics-retail': {
    title: 'Google Looker Studio Analytics Dashboards',
    badge: 'Business Intelligence & Analytics',
    category: 'Data Visualization & Reporting',
    desc: {
      id: 'Dashboard Business Intelligence interaktif Google Looker Studio: Laporan Transaksi Retail.',
      en: 'Interactive Business Intelligence dashboards built with Google Looker Studio: Retail Sales Report.'
    },
    images: [
      { src: 'img/projects/looker-dashboard-retail.png', caption: 'Google Looker Studio — Retail E-Commerce $8.69M Sales & Regional Performance Analytics' },
      { src: 'img/projects/looker-dashboard-retail2.png', caption:'Page 2'},
      { src: 'img/projects/looker-dashboard-retail3.png', caption: 'Page 3'},
    ],
    contributions: {
      id: [
        'Mengembangkan dashboard analitik transaksi penjualan ritel senilai $8.69M dengan 82.000+ pesanan, breakdown performa per kategori produk dan regional.',
        'Menerapkan calculated fields kustom, custom blending data dari spreadsheet / basis data SQL, serta filter kontrol interaktif dinamis.',
        'Menghasilkan insight analitis untuk mengidentifikasi peluang optimasi omzet ritel.'
      ],
      en: [
        'Developed retail transaction reporting dashboards analyzing $8.69M in revenue across 82K+ purchase orders and multi-regional distributions.',
        'Implemented custom calculated fields, data blending from tabular sources and SQL, and dynamic cross-filter controls.',
        'Extracted analytical insights to pinpoint revenue growth opportunities.'
      ]
    },
    tech: ['Google Looker Studio', 'Business Intelligence', 'Data Blending', 'Calculated Fields', 'SQL', 'Google Sheets'],
    links: [
      { text: '📊 Dashboard ↗', url: 'https://datastudio.google.com/s/uSUINXJGclg'}
    ]
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
    title: 'FoodPlan Testing — Unit, Widget & Usability SUS',
    badge: 'Unit, Widget & SUS Testing',
    category: 'Mobile Testing & Usability Evaluation',
    desc: {
      id: 'Pengujian aplikasi mobile FoodPlan mencakup Flutter Unit Testing, Widget Testing, serta evaluasi kebergunaan kuantitatif System Usability Scale (SUS) dengan 20 responden (skor 77.63).',
      en: 'Comprehensive mobile software testing for FoodPlan including Flutter Unit Testing, Widget Testing, and quantitative System Usability Scale (SUS) evaluation with 20 respondents (score 77.63).'
    },
    images: [
      { src: 'img/projects/foodplan-sus-results.png', caption: 'Hasil Pengujian Usability SUS — 20 Responden, Skor Rata-Rata 77.63 (Grade B: Good/Acceptable) & Flutter Unit/Widget Test' },
    ],
    contributions: {
      id: [
        'Melakukan Unit Testing pada fungsi logika bisnis inti aplikasi FoodPlan (kalkulasi kalori harian, filter resep, parsing deteksi objek).',
        'Mengimplementasikan Widget Testing menggunakan Flutter Test framework untuk memvalidasi interaksi UI, transisi layar, dan rendering komponen dinamis.',
        'Melaksanakan pengujian kebergunaan (usability testing) menggunakan instrumen kuesioner System Usability Scale (SUS) terstandarisasi dengan 20 responden pengguna nyata.',
        'Mengolah data skor kuesioner menggunakan alat hitung SUS, menghasilkan skor rata-rata 77.63 yang tergolong dalam Kategori "Good" / Akseptabel (Grade Scale B).',
        'Merumuskan rekomendasi perbaikan UI/UX dan alur navigasi berdasarkan feedback responden untuk meningkatkan kepuasan dan adopsi pengguna.'
      ],
      en: [
        'Executed Unit Testing on core business logic functions of FoodPlan (calorie calculation, recipe filtering, detection output parsing).',
        'Implemented Widget Testing via Flutter Test framework to validate responsive UI rendering, state transitions, and user interactions.',
        'Conducted usability testing utilizing the standardized System Usability Scale (SUS) methodology with 20 real end-user respondents.',
        'Calculated quantitative survey data using SUS calculation tool, achieving an average score of 77.63, classified as "Good" / Acceptable (Grade Scale B).',
        'Derived actionable UI/UX and interaction design recommendations based on empirical user feedback to improve mobile usability.'
      ]
    },
    tech: ['Flutter Test', 'Unit Testing', 'Widget Testing', 'System Usability Scale (SUS)', 'GT Metrix', 'API Testing', 'Dart', 'UX Research'],
     links: [
      { text: '📄 FoodPlan Testing Report ↗', url: 'https://drive.google.com/file/d/1-pGZaIa1sOLx9PU4YTqz1rBH32c7Ia6j/view?usp=sharing' }
    ]
  },
  'qa-bicaraku': {
    title: 'Pengujian Kualitas ISO/IEC 25010 Bicaraku',
    badge: 'ISO 25010 & Katalon QA',
    category: 'Automated & Manual Software QA',
    desc: {
      id: 'Pengujian penjaminan mutu menyeluruh aplikasi Bicaraku berstandar ISO/IEC 25010, mencakup PRD, Test Plan, Test Design, Test Case, dan otomatisasi Katalon Studio.',
      en: 'Comprehensive software quality assurance for the Bicaraku app under ISO/IEC 25010 standards, including PRD, Test Plan, Test Design, Test Cases, and Katalon Studio automation.'
    },
    images: [
      { src: 'img/projects/qa-bicaraku-slide-2.png', caption: 'Katalon Studio — Otomasi Pengujian, Test Suite & Test Design Matrix' },
      { src: 'img/projects/qa-bicaraku-slide-3.png', caption: 'Katalon Studio — Detail Step Execution & Verifikasi Log Uji Regresi' },
    ],
    contributions: {
      id: [
        'Menyusun dokumen Product Requirement Document (PRD), Test Plan, dan Test Design menyeluruh untuk aplikasi Bicaraku.',
        'Merancang matriks test cases detail mencakup fungsionalitas deteksi objek kamera, stimulasi interaktif anak, text-to-speech, dan speech-to-text.',
        'Mengembangkan skrip otomasi pengujian menggunakan Katalon Studio untuk pengujian alur pengguna dan regresi otomatis.',
        'Melaksanakan evaluasi penjaminan mutu perangkat lunak berstandar ISO/IEC 25010 pada karakteristik Functional Suitability, Usability, Performance Efficiency, dan Reliability.',
        'Mengelola dan mendokumentasikan seluruh laporan pengujian, hasil eksekusi Katalon, dan artefak QA pada Google Drive.'
      ],
      en: [
        'Authored comprehensive Product Requirement Document (PRD), Test Plan, and Test Design specifications for the Bicaraku application.',
        'Formulated detailed test case matrices covering camera-based object detection, interactive speech exercises, text-to-speech, and speech-to-text features.',
        'Developed automated test scripts using Katalon Studio for automated functional regression and end-to-end user journeys.',
        'Evaluated software quality compliance against ISO/IEC 25010 across Functional Suitability, Usability, Performance Efficiency, and Reliability.',
        'Managed and documented all formal QA test reports, Katalon execution logs, and testing deliverables on Google Drive.'
      ]
    },
    tech: ['ISO/IEC 25010', 'Katalon Studio', 'Test Plan & Test Design', 'PRD', 'Automated Testing', 'Test Case Design'],
    links: [
      { text: '📂 Repositori Dokumen QA di Google Drive ↗', url: 'https://drive.google.com/drive/folders/1vIjkKnzvKz_VgFtCGdF8_wJD1GH3mlkg' }
    ]
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
    tech: ['Postman',  'Katalon Studio', 'REST API Testing', 'JSON Schema'],
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
  },
  'magang-saas': {
    title: 'Multi-Tenant SaaS Website Desa & POS (PT ISG)',
    badge: 'Magang PT ISG · Enterprise SaaS',
    category: 'Project Management & Fullstack Web',
    desc: {
      id: 'Sistem Informasi Manajemen Desa berbasis SaaS arsitektur Multi-Tenant dengan integrasi Point of Sales (POS) BUMDes yang dikembangkan selama magang di PT ISG.',
      en: 'Multi-Tenant SaaS Village Management Information System integrated with BUMDes Point of Sales (POS) developed during industrial internship at PT ISG.'
    },
    images: [
      { src: 'img/projects/magang-saas-slide-1.png', caption: 'SaaS Website Desa & POS — Laporan Magang Industri PT ISG' },
      { src: 'img/projects/magang-saas-slide-2.png', caption: 'Project Manager - Membuat rencana kerja, timeline, dan pengujian aplikasi' },
      { src: 'img/projects/magang-saas-slide-3.png', caption: 'Pengelolaan database multi-tenant menggunakan MySQL' },
      { src: 'img/projects/magang-saas-slide-4.png', caption: 'Dashboard POS untuk role warga' },
      { src: 'img/projects/magang-saas-slide-5.png', caption: 'Kasir POS BUMDes' }
    ],
    contributions: {
      id: [
        'Bertindak sebagai Project Manager: menyusun Work Breakdown Structure (WBS), merancang dan mengelola task backlog, membagi tanggung jawab tim pengembang, serta memonitor timeline sprint magang.',
        'Melakukan Blackbox Testing terhadap fitur-fitur yang telah dikembangkan',
        'Melakukan pengujian terhadap sistem untuk memastikan sistem berjalan sesuai dengan spesifikasi dan kebutuhan pengguna.',
        'Bertindak sebagai Fullstack Web Developer: membangun arsitektur multi-tenant SaaS yang memungkinkan satu platform melayani banyak instansi desa secara independen dan aman.',
        'Mengembangkan modul Point of Sales (POS) kasir terintegrasi untuk unit usaha masyarakat desa (transaksi kasir, manajemen inventaris barang, cetak struk, dan pelaporan keuangan).',
        'Merancang modul administrasi persuratan desa mandiri bagi warga serta konfigurasi routing sub-domain dinamis untuk setiap tenant desa.',
        'Menyusun dokumentasi teknis sistem, materi presentasi laporan magang, serta mempresentasikan hasil proyek di hadapan manajemen PT ISG.'
      ],
      en: [
        'Served as Project Manager: defined Work Breakdown Structures (WBS), organized agile task backlogs, allocated responsibilities across developers, and monitored delivery milestones.',
        'Performed rigorous black-box testing across all developed features.',
        'Tested system functionality to ensure alignment with specifications and user requirements.',
        'Served as Fullstack Web Developer: built scalable multi-tenant SaaS architecture allowing a unified platform to serve multiple village administrations independently and securely.',
        'Developed integrated Point of Sales (POS) cashier modules for village-owned enterprises (BUMDes) and local MSMEs (sales checkout, stock management, receipt generation, financial reports).',
        'Designed citizen self-service administrative letter request workflows and dynamic sub-domain routing for individual village tenants.',
        'Authored technical system documentation, final internship presentation decks, and defended deliverables before PT ISG industrial mentors.'
      ]
    },
    tech: ['Project Management', 'Fullstack Web', 'Multi-Tenant SaaS', 'Point of Sale (POS)', 'Laravel/Node.js', 'MySQL', 'Agile/Scrum'],
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
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'huawei': {
    title: 'Huawei Certified HCIA — Artificial Intelligence',
    issuer: 'Huawei ICT Academy',
    image: 'img/certificates/cert-huawei.jpg',
    badge: 'Internasional',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'myskilltest': {
    title: 'MySkill - QA Test Activity',
    issuer: 'MySkill Indonesia',
    image: 'img/certificates/qa test activity.jpg',
    badge: 'Skill Specialization',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'myskillauto': {
    title: 'MySkill - QA Automation',
    issuer: 'MySkill Indonesia',
    image: 'img/certificates/qa automation.jpg',
    badge: 'Skill Specialization',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'digitalent': {
    title: 'Fresh Graduate Academy (FGA) — AI Intermediate Track',
    issuer: 'Kementerian Komunikasi dan Informatika RI (Kominfo)',
    image: 'img/certificates/cert-digitalent.png',
    badge: 'Kominfo RI',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'myskill': {
    title: 'Data Science & Business Analytics Certified',
    issuer: 'MySkill Indonesia',
    image: 'img/certificates/cert-myskill.png',
    badge: 'Professional Track',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'coursera': {
    title: 'Machine Learning & Python Foundations',
    issuer: 'Coursera International',
    image: 'img/certificates/cert-coursera.png',
    badge: 'Global Credential',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'pbi': {
    title: 'Project Based Internship — Data Analytics',
    issuer: 'Home Credit Indonesia × Rakamin Academy',
    image: 'img/certificates/cert-pbi.png',
    badge: 'Industry Project',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'pomn': {
    title: 'Pendanaan Program Ormawa Membangun Negeri (POMN) 2024',
    issuer: 'Ditjen Pendidikan Vokasi Kemendikbudristek RI (Ketua Tim Pelaksana)',
    image: 'img/certificates/cert-pomn.jpg',
    badge: 'Hibah Nasional Dikti',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  },
  'pkm': {
    title: 'Pendanaan Program Kreativitas Mahasiswa Karsa Cipta (PKM-KC) 2023',
    issuer: 'Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI',
    image: 'img/certificates/cert-pkm.jpg',
    badge: 'Hibah Nasional Dikti',
    link: 'img/CurriculumVitaeQA-BerlianiRisqi.pdf'
  }
};

const ACTIVITIES_DATA = [
  {
    img: 'img/kegiatan/optimized/AZR06624.jpg',
    full: 'img/kegiatan/optimized/AZR06624.jpg',
    category: { id: 'Organisasi Mahasiswa', en: 'Student Organization' }
  },
  {
    img: 'img/kegiatan/optimized/AZR08051.jpg',
    full: 'img/kegiatan/optimized/AZR08051.jpg',
    category: { id: 'Kepemimpinan', en: 'Leadership' }
  },
  {
    img: 'img/kegiatan/optimized/DSC08118.jpg',
    full: 'img/kegiatan/optimized/DSC08118.jpg',
    category: { id: 'Organisasi Mahasiswa', en: 'Student Organization' }
  },
  {
    img: 'img/kegiatan/optimized/HMS04592.jpg',
    full: 'img/kegiatan/optimized/HMS04592.jpg',
    category: { id: 'Organisasi Mahasiswa', en: 'Student Organization' }
  },
  {
    img: 'img/kegiatan/optimized/IMG-20240811-WA0039.jpg',
    full: 'img/kegiatan/optimized/IMG-20240811-WA0039.jpg',
    category: { id: 'Hibah Nasional', en: 'National Grant' }
  },
  {
    img: 'img/kegiatan/optimized/IMG-20241021-WA0038.jpg',
    full: 'img/kegiatan/optimized/IMG-20241021-WA0038.jpg',
    category: { id: 'Riset Akademik', en: 'Academic Research' }
  },
  {
    img: 'img/kegiatan/optimized/IMG-20241024-WA0061.jpg',
    full: 'img/kegiatan/optimized/IMG-20241024-WA0061.jpg',
    category: { id: 'Organisasi Mahasiswa', en: 'Student Organization' }
  },
  {
    img: 'img/kegiatan/optimized/IMG-20241117-WA0080.jpg',
    full: 'img/kegiatan/optimized/IMG-20241117-WA0080.jpg',
    category: { id: 'Akuntabilitas Hibah', en: 'Grant Governance' }
  },
  {
    img: 'img/kegiatan/optimized/IMG-20250206-WA0044.jpg',
    full: 'img/kegiatan/optimized/IMG-20250206-WA0044.jpg',
    category: { id: 'Delegasi', en: 'Delegation' }
  },
  {
    img: 'img/kegiatan/optimized/IMG_5879.jpg',
    full: 'img/kegiatan/optimized/IMG_5879.jpg',
    category: { id: 'Organisasi Mahasiswa', en: 'Student Organization' }
  },
  {
    img: 'img/kegiatan/optimized/P1030241.jpg',
    full: 'img/kegiatan/optimized/P1030241.jpg',
    category: { id: 'Pengabdian Masyarakat', en: 'Community Service' }
  }
];

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

  // 5. Update activities grid in active language
  if (typeof renderActivities === 'function') {
    renderActivities();
  }

  // 6. If a project modal is currently open, refresh its content in the new language
  if (typeof activeProjectId !== 'undefined' && activeProjectId && typeof refreshActiveModal === 'function') {
    refreshActiveModal();
  }

  // 7. If an activity modal is currently open, refresh its caption in the new language
  if (typeof activeActivityIdx !== 'undefined' && activeActivityIdx !== null && typeof refreshActiveActivityModal === 'function') {
    refreshActiveActivityModal();
  }
}

let activeProjectId = null;
let refreshActiveModal = null;
let activeActivityIdx = null;
let refreshActiveActivityModal = null;
let renderActivities = null;


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
        const categories = (card.dataset.category || '').split(/[\s,]+/);
        const match = filter === 'all' || categories.includes(filter);
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
    window.open(`mailto:berlianiirsq@gmail.com?subject=${subject}&body=${body}`);

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

  // ── 11. ACTIVITIES CAROUSEL SLIDER & LIGHTBOX MODAL ──
  const activitiesTrack      = document.getElementById('activitiesTrack');
  const activitiesViewport   = document.getElementById('activitiesSliderViewport');
  const actSliderPrev        = document.getElementById('actSliderPrev');
  const actSliderNext        = document.getElementById('actSliderNext');
  const actSliderDots        = document.getElementById('actSliderDots');
  const actSliderCounter     = document.getElementById('actSliderCounter');
  const activityModal        = document.getElementById('activityModal');
  const closeActivityModal   = document.getElementById('closeActivityModal');
  const modalActivityImg     = document.getElementById('modalActivityImg');
  const modalActivityBadge   = document.getElementById('modalActivityBadge');
  const modalActivityCounter = document.getElementById('modalActivityCounter');
  const activityPrev         = document.getElementById('activityPrev');
  const activityNext         = document.getElementById('activityNext');

  let currentActSlide = 0;
  let actAutoplayTimer = null;

  function getCardsPerView() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getMaxSlideIdx() {
    return Math.max(0, ACTIVITIES_DATA.length - getCardsPerView());
  }

  function updateSliderPosition(animate = true) {
    if (!activitiesTrack) return;
    const cardsPerView = getCardsPerView();
    const maxIdx = getMaxSlideIdx();
    if (currentActSlide > maxIdx) currentActSlide = maxIdx;
    if (currentActSlide < 0) currentActSlide = 0;

    const stepPercent = 100 / cardsPerView;
    activitiesTrack.style.transition = animate ? 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)' : 'none';
    activitiesTrack.style.transform = `translateX(-${currentActSlide * stepPercent}%)`;

    // Update dots
    if (actSliderDots) {
      const dots = actSliderDots.querySelectorAll('.slider-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentActSlide);
      });
    }

    // Update counter
    if (actSliderCounter) {
      actSliderCounter.textContent = `${currentActSlide + 1} / ${maxIdx + 1}`;
    }
  }

  function goToActSlide(idx) {
    const maxIdx = getMaxSlideIdx();
    if (idx < 0) {
      currentActSlide = maxIdx;
    } else if (idx > maxIdx) {
      currentActSlide = 0;
    } else {
      currentActSlide = idx;
    }
    updateSliderPosition(true);
  }

  function startAutoplay() {
    stopAutoplay();
    actAutoplayTimer = setInterval(() => {
      goToActSlide(currentActSlide + 1);
    }, 4000);
  }

  function stopAutoplay() {
    if (actAutoplayTimer) {
      clearInterval(actAutoplayTimer);
      actAutoplayTimer = null;
    }
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  renderActivities = function() {
    if (!activitiesTrack) return;
    activitiesTrack.innerHTML = '';
    
    ACTIVITIES_DATA.forEach((item, idx) => {
      const category = item.category[currentLang] || item.category.id;
      const viewText = TRANSLATIONS[currentLang]?.activity_view || 'Perbesar Foto ↗';

      const slide = document.createElement('div');
      slide.className = 'w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2 sm:p-2.5 box-border';
      slide.innerHTML = `
        <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-soft/30 bg-white cursor-pointer h-72 sm:h-80 select-none flex flex-col" data-activity-idx="${idx}">
          <div class="relative w-full h-full overflow-hidden bg-cream-dark">
            <img src="${item.img}" alt="${category}" loading="lazy" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <!-- Hover overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 pointer-events-none">
              <span class="text-white text-xs font-semibold flex items-center gap-1.5">${viewText}</span>
              <span class="text-white/90 text-sm">🔍</span>
            </div>
            <!-- Category Badge only (No descriptions) -->
            <div class="absolute top-3.5 left-3.5 pointer-events-none">
              <span class="text-xs font-mono font-semibold bg-white/95 backdrop-blur-md text-pink-deep px-3.5 py-1.5 rounded-full shadow-md border border-pink-soft/30 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-pink-deep"></span>
                ${category}
              </span>
            </div>
          </div>
        </div>
      `;
      slide.querySelector('.group').addEventListener('click', () => openActivityModal(idx));
      activitiesTrack.appendChild(slide);
    });

    // Render Dots
    if (actSliderDots) {
      actSliderDots.innerHTML = '';
      const maxIdx = getMaxSlideIdx();
      for (let i = 0; i <= maxIdx; i++) {
        const dot = document.createElement('button');
        dot.className = `slider-dot ${i === currentActSlide ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => {
          goToActSlide(i);
          resetAutoplay();
        });
        actSliderDots.appendChild(dot);
      }
    }

    updateSliderPosition(false);
  };

  // Slider navigation listeners
  actSliderPrev?.addEventListener('click', () => {
    goToActSlide(currentActSlide - 1);
    resetAutoplay();
  });
  actSliderNext?.addEventListener('click', () => {
    goToActSlide(currentActSlide + 1);
    resetAutoplay();
  });

  // Autoplay pause on hover
  activitiesViewport?.addEventListener('mouseenter', stopAutoplay);
  activitiesViewport?.addEventListener('mouseleave', startAutoplay);

  // Touch Swipe for Mobile
  let touchStartX = 0;
  activitiesViewport?.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoplay();
  }, { passive: true });

  activitiesViewport?.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToActSlide(currentActSlide + 1);
      } else {
        goToActSlide(currentActSlide - 1);
      }
    }
    startAutoplay();
  }, { passive: true });

  // Handle window resize
  let actResizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(actResizeTimer);
    actResizeTimer = setTimeout(() => {
      renderActivities();
    }, 150);
  });

  function showActivitySlide(idx) {
    if (!ACTIVITIES_DATA.length || !modalActivityImg) return;
    activeActivityIdx = (idx + ACTIVITIES_DATA.length) % ACTIVITIES_DATA.length;
    const item = ACTIVITIES_DATA[activeActivityIdx];
    const category = item.category[currentLang] || item.category.id;

    modalActivityImg.style.opacity = '0';
    setTimeout(() => {
      modalActivityImg.src = item.full || item.img;
      modalActivityImg.alt = category;
      if (modalActivityBadge) modalActivityBadge.textContent = category;
      if (modalActivityCounter) modalActivityCounter.textContent = `${activeActivityIdx + 1} / ${ACTIVITIES_DATA.length}`;
      modalActivityImg.style.opacity = '1';
    }, 120);
  }

  function openActivityModal(idx) {
    if (!activityModal) return;
    stopAutoplay();
    showActivitySlide(idx);
    activityModal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }

  function closeActivityModalFunc() {
    activeActivityIdx = null;
    activityModal?.classList.remove('modal-active');
    document.body.style.overflow = '';
    startAutoplay();
  }

  refreshActiveActivityModal = () => {
    if (activeActivityIdx !== null && activityModal?.classList.contains('modal-active')) {
      showActivitySlide(activeActivityIdx);
    }
  };

  activityPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    showActivitySlide(activeActivityIdx - 1);
  });
  activityNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    showActivitySlide(activeActivityIdx + 1);
  });
  closeActivityModal?.addEventListener('click', closeActivityModalFunc);
  activityModal?.addEventListener('click', (e) => {
    if (e.target === activityModal) closeActivityModalFunc();
  });

  // Render initial activities & start autoplay
  renderActivities();
  startAutoplay();

  // Global ESC key to close any open modal & Arrow keys for sliders
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModalFunc();
      closeCertModalFunc();
      closeActivityModalFunc();
    } else if (projectModal && projectModal.classList.contains('modal-active')) {
      if (e.key === 'ArrowLeft') renderSliderImage(currentImageIdx - 1);
      if (e.key === 'ArrowRight') renderSliderImage(currentImageIdx + 1);
    } else if (activityModal && activityModal.classList.contains('modal-active')) {
      if (e.key === 'ArrowLeft') showActivitySlide(activeActivityIdx - 1);
      if (e.key === 'ArrowRight') showActivitySlide(activeActivityIdx + 1);
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
