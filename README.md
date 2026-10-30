# 🌸 Portfolio — Berliani Risqi Dwi Saputri

Personal portfolio website — D4 Teknik Informatika, Class of 2026.

**🔗 Live:** [berliani-risqi.github.io](https://berliani-risqi.github.io) *(setelah deploy)*

## Tech Stack
- HTML5 + Tailwind CSS (CDN Play)
- Vanilla JavaScript
- Google Fonts (Playfair Display · Inter · DM Mono)

## Sections
- 🌟 Hero — Foto profil + floating tech badges
- 👩‍💻 About — Bio + Quick Stats
- 🛠️ Skills — Grid per kategori
- 💼 Projects — Filter: Mobile · Web · AI · QA · Game Dev · Penelitian Dosen
- 🏆 Experience — Timeline (SKripsi, Internship, Organisasi, Lomba)
- 📜 Certifications — BNSP, Huawei, Digitalent, MySkill + Publikasi SINTA 4
- 📬 Contact — Form + Social Links
- 🦶 Footer

## Cara Deploy ke GitHub Pages (GRATIS)

### 1. Buat Repository GitHub
```bash
# Di GitHub, buat repo baru: berliani-risqi (atau nama lain)
# Centang "Public", jangan tambah README
```

### 2. Init Git & Push
```bash
cd D:\kulyah\BerlianiPortfolio
git init
git add .
git commit -m "feat: initial portfolio website"
git branch -M main
git remote add origin https://github.com/USERNAME/berliani-risqi.git
git push -u origin main
```

### 3. Aktifkan GitHub Pages
```
GitHub Repo → Settings → Pages
→ Source: Deploy from branch
→ Branch: main / root
→ Save
```

**Hasilnya:** `https://USERNAME.github.io/berliani-risqi/`

---

## Cara Deploy ke Netlify (Alternatif — lebih cepat)

1. Buka [netlify.com](https://netlify.com) → Login
2. Drag & drop folder `BerlianiPortfolio` ke Netlify dashboard
3. Selesai! URL langsung tersedia dalam 30 detik.

Atau via GitHub:
1. Hubungkan repo GitHub ke Netlify
2. Build command: *(kosong, karena static)*
3. Publish directory: `.`

---

## Struktur File
```
BerlianiPortfolio/
├── index.html        ← Main page
├── style.css         ← Custom CSS + animasi
├── script.js         ← Navbar, filter, scroll, form
├── README.md         ← Ini
└── img/
    ├── profile.jpg   ← Foto profil
    ├── cv-berliani.pdf  ← CV (copy manual)
    └── projects/     ← Screenshot projects (opsional)
```
