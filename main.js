// ── HERO CANVAS ──────────────────────────────────
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
let mouse = { x: -9999, y: -9999 };
const SPACING = 42;
const BASE_ALPHA = 0.1;
const HOVER_RADIUS = 160;

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.getElementById('hero').addEventListener('mousemove', e => {
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left;
  mouse.y = e.clientY - r.top;
});

document.getElementById('hero').addEventListener('mouseleave', () => {
  mouse.x = -9999; mouse.y = -9999;
});

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cols = Math.ceil(canvas.width / SPACING) + 1;
  const rows = Math.ceil(canvas.height / SPACING) + 1;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * SPACING;
      const y = j * SPACING;
      const dist = Math.hypot(x - mouse.x, y - mouse.y);
      const influence = Math.max(0, 1 - dist / HOVER_RADIUS);
      const r = 1.2 + influence * 2.8;
      const alpha = BASE_ALPHA + influence * 0.55;

      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 255, 179, ${alpha})`;
      ctx.fill();
    }
  }
  requestAnimationFrame(drawCanvas);
}

drawCanvas();

// ── NAV SCROLL SHADOW ────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar ul a');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);

  // Active nav link
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    const isActive = a.getAttribute('href') === '#' + current;
    a.classList.toggle('active', isActive);
  });
}, { passive: true });

// ── SCROLL REVEAL ────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── SKILL BARS ───────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
        setTimeout(() => bar.classList.add('filled'), 900);
      });
      skillObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });

document.querySelectorAll('#vaardigheden').forEach(el => skillObserver.observe(el));
