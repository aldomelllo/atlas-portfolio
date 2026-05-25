/* ============================================================
   ATLAS PORTFOLIO — main.js
   Conectcorp · Rondônia · 2025
   ============================================================ */

'use strict';

// ── SCROLL REVEAL ────────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in'), i * 70);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ── NAVBAR SCROLL STATE ──────────────────────────────────────
const navbar = document.getElementById('navbar');

const onScroll = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
};

window.addEventListener('scroll', onScroll, { passive: true });

// ── ACTIVE NAV LINK ──────────────────────────────────────────
const sections   = document.querySelectorAll('section[id], div[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navAnchors.forEach((a) => {
          a.classList.toggle(
            'active',
            a.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((s) => activeObserver.observe(s));

// ── MOBILE MENU ──────────────────────────────────────────────
const burger   = document.querySelector('.nav-burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('mobile-open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    navLinks.classList.remove('mobile-open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// ── SMOOTH SCROLL (fallback for older browsers) ──────────────
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navHeight = navbar.offsetHeight;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── SOLUTION CARD TILT (subtle on desktop) ──────────────────
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('.sol').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect  = card.getBoundingClientRect();
      const x     = ((e.clientX - rect.left) / rect.width  - 0.5) * 4;
      const y     = ((e.clientY - rect.top)  / rect.height - 0.5) * 4;
      card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── COUNTER ANIMATION (metrics) ─────────────────────────────
const counters = document.querySelectorAll('.metric-n');

const animateCounter = (el) => {
  const rawText = el.textContent.trim();
  const numMatch = rawText.match(/[\d.]+/);
  if (!numMatch) return;

  const target   = parseFloat(numMatch[0]);
  const isFloat  = rawText.includes('.');
  const prefix   = rawText.slice(0, rawText.indexOf(numMatch[0]));
  const suffix   = el.querySelector('sub') ? el.querySelector('sub').outerHTML : '';
  const duration = 1200;
  const start    = performance.now();

  const step = (now) => {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    const current  = isFloat
      ? (target * ease).toFixed(1)
      : Math.round(target * ease);

    el.innerHTML = `${prefix}${current}${suffix}`;

    if (progress < 1) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((c) => counterObserver.observe(c));

// ── CURSOR GLOW (desktop only) ───────────────────────────────
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  Object.assign(glow.style, {
    position:     'fixed',
    width:        '320px',
    height:       '320px',
    borderRadius: '50%',
    background:   'radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%)',
    pointerEvents:'none',
    zIndex:       '998',
    transform:    'translate(-50%, -50%)',
    transition:   'opacity 0.4s',
    opacity:      '0',
  });
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX  = 0, glowY  = 0;
  let rafId;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    glow.style.opacity = '1';
  });

  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });

  const lerp = (a, b, t) => a + (b - a) * t;

  const tick = () => {
    glowX = lerp(glowX, mouseX, 0.08);
    glowY = lerp(glowY, mouseY, 0.08);
    glow.style.left = `${glowX}px`;
    glow.style.top  = `${glowY}px`;
    rafId = requestAnimationFrame(tick);
  };

  tick();
}
