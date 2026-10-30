// ═══════════════════════════════════════════════
//  Berliani Risqi — Portfolio JavaScript
//  Navbar · Filter · Scroll Animations · Form
// ═══════════════════════════════════════════════

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
  // Close on link click
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
      // update active tab
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      projectCards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        if (match) {
          card.classList.remove('hidden');
          // micro-animation
          card.style.animation = 'none';
          card.offsetHeight; // reflow
          card.style.animation = 'cardReveal 0.35s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // ── 6. STATS COUNTER ANIMATION ───────────────
  function animateCounter(el, target, duration = 1200) {
    let start = 0;
    const step = target / (duration / 16);
    const tick = () => {
      start = Math.min(start + step, target);
      el.textContent = Math.floor(start) + (el.dataset.suffix || '');
      if (start < target) requestAnimationFrame(tick);
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
  }, { threshold: 0.5 });

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

    // Reset form
    contactForm.reset();
    const btn = document.getElementById('submitBtn');
    btn.textContent = '✓ Pesan Terkirim!';
    setTimeout(() => { btn.textContent = 'Kirim Pesan ✉️'; }, 3000);
  });

  // ── 8. SMOOTH ACTIVE TAB DEFAULT ─────────────
  const defaultTab = document.querySelector('.filter-tab[data-filter="all"]');
  defaultTab?.classList.add('active');

});

// CSS keyframe for card reveal (injected)
const style = document.createElement('style');
style.textContent = `
@keyframes cardReveal {
  from { opacity: 0; transform: scale(0.94) translateY(12px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}`;
document.head.appendChild(style);
