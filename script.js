// ═══════════════════════════════════════════════
//  Berliani Risqi — Portfolio JavaScript
//  Navbar · Filter · Modals · Sliders · Form
// ═══════════════════════════════════════════════

const PROJECTS_DATA = {
  'foodplan': {
    title: 'FoodPlan Mobile App',
    badge: 'Capstone Smt 5',
    category: 'Mobile & AI',
    images: [
      { src: 'img/projects/foodplan.png', caption: 'FoodPlan — Mobile App Interface & Food Scanning' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'FoodPlan — Multi-Object Detection Architecture & Dataset' }
    ],
    contributions: [
      'I built an AI model for multi-object detection using YOLOv8 and single-object detection using CNN.',
      'Annotated ~6,000 images across 13 classes for training dataset preparation.',
      'Developed a mobile frontend using the Flutter framework.',
      'Implemented mobile widgets and unit testing.'
    ],
    tech: ['Flutter', 'YOLOv8', 'CNN', 'Python', 'Laravel', 'MySQL'],
    links: [
      { text: 'Jurnal SINTA 4 ↗', url: 'https://doi.org/10.35316/.v9i2.6384' }
    ]
  },
  'bicaraku': {
    title: 'Bicaraku Mobile App',
    badge: 'Capstone Smt 6',
    category: 'Mobile & Assistive AI',
    images: [
      { src: 'img/projects/bicaraku.png', caption: 'Bicaraku — App Identity & Overview' },
      { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku — Fitur Lihat & Hitung (Object Detection Real-time)' },
      { src: 'img/projects/bicaraku-mockup-2.png', caption: 'Bicaraku — Beranda & Menu Navigasi Ramah Disabilitas' },
      { src: 'img/projects/bicaraku-mockup-3.png', caption: 'Bicaraku — Integrasi Suara & Text-to-Speech' }
    ],
    contributions: [
      'Designing the user interface of the "Bicaraku" mobile application using the Flutter framework.',
      'Building an AI model for surrounding object detection using YOLOv8.',
      'Integrated text-to-speech and speech-to-text features in the mobile app.',
      'Connecting the Flask backend with the Flutter frontend for seamless system communication.'
    ],
    tech: ['Flutter', 'YOLOv8', 'Flask', 'TTS / STT', 'Python', 'MongoDB'],
    links: []
  },
  'tuntun': {
    title: 'Tuntun — Visual Assistive Navigation',
    badge: 'Tugas Akhir / Skripsi 2026',
    category: 'Mobile & Computer Vision',
    images: [
      { src: 'img/projects/tuntun.png', caption: 'Tuntun — Konsep & Ilustrasi Navigasi Tunanetra' },
      { src: 'img/projects/tuntun-logo.png', caption: 'Tuntun — Brand Identity & Design System' }
    ],
    contributions: [
      'Project Tugas Akhir (Skripsi) yang dikerjakan secara mandiri secara menyeluruh (End-to-End Individual Project).',
      'Merancang arsitektur sistem deteksi objek & estimasi jarak rintangan berbasis YOLO dan Triangle Similarity Algorithm.',
      'Mengembangkan frontend mobile multiplatform menggunakan Flutter dengan navigasi audio, panduan suara TTS, dan feedback getar.',
      'Membangun integrasi model AI edge computing (TFLite) agar dapat berjalan cepat dan offline pada smartphone.',
      'Melaksanakan pengujian kualitas perangkat lunak komprehensif berstandar ISO 25010.'
    ],
    tech: ['Flutter', 'TFLite', 'YOLO', 'Python', 'Triangle Similarity', 'TTS', 'ISO 25010'],
    links: [
      { text: 'GitHub Repo ↗', url: 'https://github.com/berliani/TunTunApp' }
    ]
  },
  'distance-estimator': {
    title: 'Distance Estimator App',
    badge: 'Riset Dosen',
    category: 'Mobile & Computer Vision Research',
    images: [
      { src: 'img/projects/distance-estimator.png', caption: 'Distance Estimator — Deteksi Objek & Estimasi Jarak Kamera Real-time' },
      { src: 'img/projects/distance-app-2.jpg', caption: 'Distance Estimator — Menu Navigasi & Kalibrasi Jarak' },
      { src: 'img/projects/distance-app-3.jpg', caption: 'Distance Estimator — Output Pengukuran Jarak Aktual Objek' }
    ],
    contributions: [
      'Developed a multi-object detection AI model using YOLOv11 integrated into a Flutter-based mobile application as part of research to measure the actual distance of objects captured by the camera.',
      'Case study focused on building an assistive application for visually impaired users.'
    ],
    tech: ['Flutter', 'YOLOv11', 'Monocular Depth', 'OpenCV', 'Python', 'Computer Vision'],
    links: []
  },
  'foodplan-web': {
    title: 'FoodPlan Web Dashboard',
    badge: 'Capstone Smt 5',
    category: 'Web Application',
    images: [
      { src: 'img/projects/foodplan-web.png', caption: 'FoodPlan Web — Dashboard Admin & Manajemen Resep Makanan' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'FoodPlan Web — Skema Integrasi Database & API Model' }
    ],
    contributions: [
      'Built responsive web dashboard using HTML, CSS, JavaScript, and Bootstrap for admin nutritionists and recipe managers.',
      'Designed CRUD features for meal planning, calorie databases, and user analytics visualization.',
      'Integrated REST APIs connecting dashboard to PostgreSQL / MySQL database.'
    ],
    tech: ['Laravel', 'AdminLTE', 'MySQL', 'REST API', 'Chart.js', 'Bootstrap'],
    links: []
  },
  'bicaraku-web': {
    title: 'Bicaraku Web Dashboard',
    badge: 'Capstone Smt 6',
    category: 'Web & Analytics',
    images: [
      { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku Dashboard — Monitoring Sesi Terapi Wicara & Visualisasi Data' },
      { src: 'img/projects/bicaraku.png', caption: 'Bicaraku — Identitas Aplikasi & Alur Analitik' }
    ],
    contributions: [
      'Developed web-based admin & monitoring portal for speech therapy session tracking.',
      'Implemented audio analytics overview, user progress reports, and content management.',
      'Connected Flask backend endpoints and authenticated role-based access.'
    ],
    tech: ['Python', 'Streamlit', 'Flask', 'Pandas', 'Plotly', 'MongoDB'],
    links: []
  },
  'lokantara-web': {
    title: 'Lokantara POS Web Application',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    images: [
      { src: 'img/projects/lokantara.png', caption: 'Lokantara — POS Wisata Platform Atlantara' },
      { src: 'img/projects/lokantara-lockup.png', caption: 'Atlantara — Ekosistem Digital Pariwisata Terpadu' }
    ],
    contributions: [
      'Developed Point of Sales (POS) frontend web application using Next.js & Tailwind CSS.',
      'Designed transaction cashier flow, product management, and real-time inventory tracking.',
      'Implemented offline-first capability and receipt printing integration.'
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'MySQL'],
    links: []
  },
  'lokantara-mobile': {
    title: 'Lokantara Mobile App',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    images: [
      { src: 'img/projects/lokantara.png', caption: 'Lokantara Mobile — Aplikasi Kasir & Wisatawan Mobile' },
      { src: 'img/projects/lokantara-lockup.png', caption: 'Atlantara — Brand Identity & Design Guidelines' }
    ],
    contributions: [
      'Built cross-platform mobile cashier & catalog app using Flutter.',
      'Integrated Bluetooth thermal printer for immediate receipt generation.',
      'Connected mobile client to centralized backend microservices.'
    ],
    tech: ['Flutter', 'Dart', 'Bluetooth Printing', 'REST API', 'GetX'],
    links: []
  },
  'lokantara-ai': {
    title: 'Lokantara AI Recommendation & Forecasting',
    badge: 'Penelitian Dosen',
    category: 'Penelitian Dosen Atlantara',
    images: [
      { src: 'img/projects/lokantara-lockup.png', caption: 'Lokantara AI — Engine Rekomendasi Wisata & Prediksi Penjualan' },
      { src: 'img/projects/lokantara.png', caption: 'Atlantara — Arsitektur Modul Machine Learning' }
    ],
    contributions: [
      'Researched and formulated predictive analytics & product recommendation models based on sales transaction patterns.',
      'Prepared data preprocessing pipelines and evaluated model accuracy for inventory restock forecasting.'
    ],
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Time Series Forecasting', 'REST API'],
    links: []
  },
  'cnn-food': {
    title: 'CNN Food Detection & SINTA 4 Publication',
    badge: 'Publikasi SINTA 4 📄',
    category: 'AI & Machine Learning Research',
    images: [
      { src: 'img/certificates/cert-sinta4.png', caption: 'Publikasi SINTA 4 — Jurnal Ilmiah Informatika (JIMI) Vol. 9 No. 2 (2024)' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'Arsitektur Model CNN & Confusion Matrix Akurasi 96.28%' }
    ],
    contributions: [
      'Conducted research and developed Convolutional Neural Network (CNN) architecture achieving high accuracy for single-object food classification.',
      'Authored research paper published as first author in SINTA 4 Accredited Journal (JIMI Vol. 9 No. 2, 2024).',
      'Validated model performance with confusion matrix, precision, recall, and F1-score evaluation.'
    ],
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
    images: [
      { src: 'img/projects/foodplan-mockup.png', caption: 'RAG Wisata Tegal — Knowledge Retrieval & Vector Store Pipeline' }
    ],
    contributions: [
      'Built Retrieval-Augmented Generation (RAG) conversational system for Tegal tourism recommendations.',
      'Implemented vector embeddings and document chunking for local tourism datasets.',
      'Integrated LLM prompting with LangChain and vector store search.'
    ],
    tech: ['LangChain', 'OpenAI / HuggingFace', 'ChromaDB', 'Python', 'Streamlit'],
    links: []
  },
  'home-credit': {
    title: 'Home Credit Default Risk Prediction',
    badge: 'PBI Home Credit',
    category: 'Financial Machine Learning',
    images: [
      { src: 'img/certificates/cert-pbi.png', caption: 'Home Credit Indonesia — Project Based Internship Certificate' }
    ],
    contributions: [
      'Developed machine learning risk scoring model using LightGBM and XGBoost during Project Based Internship.',
      'Handled class imbalance with SMOTE and advanced feature engineering across 100+ loan indicators.',
      'Delivered business presentation and actionable credit policy insights.'
    ],
    tech: ['Python', 'LightGBM', 'XGBoost', 'Scikit-Learn', 'Pandas', 'Seaborn'],
    links: []
  },
  'pose-detection': {
    title: 'MediaPipe Pose Detection for Workout',
    badge: 'Practice Project',
    category: 'Computer Vision',
    images: [
      { src: 'img/projects/distance-app.jpg', caption: 'MediaPipe Pose — Keypoint Landmark Estimation Real-time' }
    ],
    contributions: [
      'Implemented real-time human pose estimation using Google MediaPipe and OpenCV.',
      'Developed rep counter algorithm and posture angle validation for fitness workout guidance.'
    ],
    tech: ['MediaPipe', 'OpenCV', 'Python', 'NumPy'],
    links: []
  },
  'looker-analytics': {
    title: 'Google Looker Studio Analytics',
    badge: 'Course & Cert',
    category: 'Business Intelligence',
    images: [
      { src: 'img/certificates/cert-myskill.png', caption: 'MySkill — Data Analysis & Visualization Certification' }
    ],
    contributions: [
      'Designed interactive multi-page dashboards on Google Looker Studio for KPI tracking.',
      'Connected diverse data sources (Google Sheets, BigQuery, SQL) with customized calculated fields and filters.'
    ],
    tech: ['Looker Studio', 'SQL', 'BigQuery', 'Google Sheets'],
    links: []
  },
  'web-scraping': {
    title: 'Automated Web Scraping Engine',
    badge: 'Data Pipeline',
    category: 'Data Engineering',
    images: [
      { src: 'img/projects/foodplan-web.png', caption: 'Data Scraping Engine — Automated Pipeline & Export Management' }
    ],
    contributions: [
      'Developed automated data extraction scripts using Python, BeautifulSoup, and Selenium.',
      'Cleaned, normalized, and exported semi-structured web data into tabular formats for analytical consumption.'
    ],
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'Pandas'],
    links: []
  },
  'qa-foodplan': {
    title: 'QA FoodPlan — ISO 25010',
    badge: 'Smt 5 Quality Assurance',
    category: 'Software Quality Assurance',
    images: [
      { src: 'img/projects/foodplan.png', caption: 'FoodPlan App — Target Verifikasi Kualitas ISO 25010' },
      { src: 'img/projects/foodplan-mockup.png', caption: 'Matriks Pengujian Fungsionalitas & Performance' }
    ],
    contributions: [
      'Formulated comprehensive test cases covering Functional Suitability, Usability, and Performance Efficiency.',
      'Executed black-box testing, UI responsiveness validation, and user acceptance testing (UAT).',
      'Documented formal ISO 25010 quality assurance test reports.'
    ],
    tech: ['ISO 25010', 'Selenium IDE', 'GTMetrix', 'Test Case Design', 'UAT'],
    links: []
  },
  'qa-bicaraku': {
    title: 'QA Bicaraku — ISO 25010',
    badge: 'Smt 6 Quality Assurance',
    category: 'Software Quality Assurance',
    images: [
      { src: 'img/projects/bicaraku-mockup-1.png', caption: 'Bicaraku — Skenario Pengujian Deteksi Kamera & Suara' },
      { src: 'img/projects/bicaraku.png', caption: 'Laporan Evaluasi System Usability Scale (SUS)' }
    ],
    contributions: [
      'Planned and executed automated and manual testing scenarios for voice and camera detection features.',
      'Evaluated usability metrics with System Usability Scale (SUS) involving assistive target users.'
    ],
    tech: ['Katalon Studio', 'ISO 25010', 'SUS Testing', 'Accessibility QA'],
    links: []
  },
  'api-testing': {
    title: 'API Automated Testing (FoodPlan & Bicaraku)',
    badge: 'API Automation',
    category: 'Backend QA & Performance',
    images: [
      { src: 'img/projects/foodplan-web.png', caption: 'Postman & Katalon API Test Suites & Endpoint Validations' }
    ],
    contributions: [
      'Created automated API regression test suites using Postman and Katalon Studio.',
      'Validated status codes, response payloads, latency thresholds, and authentication tokens.'
    ],
    tech: ['Postman', 'Newman', 'Katalon Studio', 'REST API Testing', 'JSON Schema'],
    links: []
  },
  'numbrarush': {
    title: 'Numbra Rush — Math Puzzle Game',
    badge: 'UAS Game Dev Smt 6',
    category: 'Game Development',
    images: [
      { src: 'img/projects/numbrarush-mockup-1.png', caption: 'Numbra Rush — Title Screen & Pixel Artwork' },
      { src: 'img/projects/numbrarush-mockup-2.jpg', caption: 'Numbra Rush — Gameplay Tantangan Berhitung Cepat' },
      { src: 'img/projects/numbrarush.png', caption: 'Numbra Rush — Logo & Sprite Karakter' }
    ],
    contributions: [
      'Developed game logic, score progression, and speed challenge mechanics.',
      'Designed pixel art assets, animations, and sound effects for engaging brain-training experience.'
    ],
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

document.addEventListener('DOMContentLoaded', () => {

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
  }, { threshold: 0.12 });
  reveals.forEach(el => observerReveal.observe(el));

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
    btn.textContent = '✓ Pesan Terkirim!';
    setTimeout(() => { btn.textContent = 'Kirim Pesan ✉️'; }, 3000);
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

    // Hide arrows if only 1 image
    const hasMultiple = currentProjectImages.length > 1;
    sliderPrev.style.display = hasMultiple ? 'flex' : 'none';
    sliderNext.style.display = hasMultiple ? 'flex' : 'none';
    sliderDots.style.display = hasMultiple ? 'flex' : 'none';
  }

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

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

    // Contributions
    modalContribs.innerHTML = '';
    data.contributions.forEach(item => {
      const li = document.createElement('li');
      li.className = 'flex items-start gap-2.5';
      li.innerHTML = `<span class="text-pink-deep text-base mt-0.5 flex-shrink-0">✓</span><span>${item}</span>`;
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
      a.className = 'btn-primary text-xs py-2 px-4 whitespace-nowrap';
      a.textContent = l.text;
      modalActionLinks.appendChild(a);
    });

    // Open Modal
    projectModal.classList.add('modal-active');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModalFunc() {
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
    certBadge.textContent  = data.badge || 'Tervalidasi Resmi';

    if (data.link) {
      certLink.href = data.link;
      certLink.style.display = 'inline-flex';
      certLink.textContent = data.link.startsWith('http') ? 'Buka Verifikasi Asli ↗' : 'Download CV Lengkap ↓';
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
