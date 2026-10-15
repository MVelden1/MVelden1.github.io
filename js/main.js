// Entry point. Loaded as an ES module, so it runs after the DOM is parsed.
import { initI18n, onLangChange, t } from './i18n.js';
import { initTheme } from './theme.js';
import { initContact } from './contact.js';
import { initPrint } from './print.js';

function initMenu() {
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  if (!btn || !nav) return;

  const setOpen = open => {
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', t(open ? 'a11y.menu.close' : 'a11y.menu'));
    nav.classList.toggle('open', open);
  };

  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      btn.focus();
    }
  });
  onLangChange(() => setOpen(btn.getAttribute('aria-expanded') === 'true'));
}

// Desktop only: one pill behind the links that slides to the active item.
// Without it (mobile, or no JS) the .active background from CSS is used.
function createNavPill(container) {
  const desktop = window.matchMedia('(min-width: 960px)');
  const pill = document.createElement('span');
  pill.className = 'nav-pill';
  pill.setAttribute('aria-hidden', 'true');
  container.prepend(pill);
  let current = null;

  const place = (slide = true) => {
    container.classList.toggle('has-pill', desktop.matches);
    if (!desktop.matches || !current) {
      pill.classList.remove('is-visible');
      return;
    }
    // Appear in place the first time; only slide between items afterwards.
    const jump = !slide || !pill.classList.contains('is-visible');
    pill.classList.toggle('no-slide', jump);
    pill.style.width = `${current.offsetWidth}px`;
    pill.style.transform = `translateX(${current.offsetLeft}px)`;
    pill.classList.add('is-visible');
    if (jump) {
      pill.getBoundingClientRect();
      pill.classList.remove('no-slide');
    }
  };

  desktop.addEventListener('change', () => place(false));
  window.addEventListener('resize', () => place(false));
  document.fonts?.ready.then(() => place(false));
  onLangChange(() => place(false));

  return link => {
    current = link;
    place();
  };
}

function initActiveNav() {
  const container = document.querySelector('#nav .nav-links');
  const links = Array.from(container.querySelectorAll('a'));
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const movePill = createNavPill(container);
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => {
        const active = l.getAttribute('href') === '#' + e.target.id;
        l.classList.toggle('active', active);
        if (active) {
          l.setAttribute('aria-current', 'true');
          movePill(l);
        } else {
          l.removeAttribute('aria-current');
        }
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
}

// Fade images in once loaded. Images that are already complete (cache hits)
// are left alone so they never flash.
function initImageFade() {
  document.querySelectorAll('main img').forEach(img => {
    if (img.complete) return;
    img.classList.add('img-pending');
    const done = () => img.classList.remove('img-pending');
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });
}

function initReveal() {
  // Only hide .reveal content once we know this script can reveal it again.
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

initImageFade();
initI18n();
initTheme();
initMenu();
initActiveNav();
initReveal();
initContact();
initPrint();
