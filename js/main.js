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

function initActiveNav() {
  const links = Array.from(document.querySelectorAll('#nav a'));
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(l => {
        const active = l.getAttribute('href') === '#' + e.target.id;
        l.classList.toggle('active', active);
        if (active) l.setAttribute('aria-current', 'true');
        else l.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => io.observe(s));
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

initI18n();
initTheme();
initMenu();
initActiveNav();
initReveal();
initContact();
initPrint();
