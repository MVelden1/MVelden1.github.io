// Dutch is the source language and lives in the HTML. On load we snapshot the
// Dutch strings from the DOM, so only the English translations live here.

const EN = {
  'meta.title': 'Mick van der Velden, Software Developer',
  'meta.desc': 'Software developer working with Java and React, with a background in B2B integrations (JSON, XML, EDIFACT, X12).',

  'a11y.skip': 'Skip to content',
  'a11y.home': 'Mick van der Velden, back to top',
  'a11y.nav': 'Main menu',
  'a11y.pdf': 'Download CV as PDF',
  'a11y.theme': 'Toggle theme',
  'a11y.menu': 'Open menu',
  'a11y.menu.close': 'Close menu',

  'nav.profile': 'Profile',
  'nav.experience': 'Experience',
  'nav.skills': 'Skills',
  'nav.education': 'Education',
  'nav.contact': 'Contact',

  'hero.status': 'Open to new opportunities',
  'positioning': 'Software developer working with Java and React, with a background in B2B integrations (JSON, XML, EDIFACT, X12).',
  'hero.current': 'Currently: Software Developer (frontend) at Deutsche Telekom Healthcare Solutions',
  'hero.location': 'Zaandam, Amsterdam area',
  'hero.cta.email': 'Send me a message',
  'img.portrait': 'Portrait of Mick van der Velden',
  'img.running': 'Mick van der Velden running in a race',

  'about.body':
    'I&rsquo;m a software developer working with Java and React, with a background in B2B integrations (JSON, XML, EDIFACT, X12). ' +
    'At Copernicus Interchange Technology I built Java integrations between partner systems, including parsers and mappings for those formats. ' +
    'I now build React components for an application used by pathology labs at Deutsche Telekom Healthcare Solutions, with data from GraphQL. ' +
    'I&rsquo;m looking for a role where I can combine backend and integration work in Java with my frontend experience.',

  'xp.dt.date': 'Nov 2024 - present',
  'xp.dt.body': `
        <p>Frontend developer in a team building a healthcare application for pathology labs, with a focus on React and GraphQL integration.</p>
        <ul>
          <li>Building React components and pages with a focus on usability.</li>
          <li>Integrating backend data through GraphQL queries.</li>
          <li>Delivering features in sprints within a Scrum team.</li>
        </ul>`,
  'xp.cp.role': 'Integration Specialist · Java',
  'xp.cp.date': 'Mar 2022 - Jul 2024',
  'xp.cp.body': `
        <p>Designing, building and maintaining Java integrations between partner systems in B2B environments.</p>
        <ul>
          <li>Building API integrations between customer systems with Java.</li>
          <li>Implementing parsers and mappings for JSON, XML, X12 and EDIFACT.</li>
          <li>Resolving production data-flow issues in direct collaboration with customers.</li>
        </ul>`,
  'xp.cp.tag': 'API integration',

  'skills.data': 'Data and integration',

  'edu.now.year': '2021 - present',
  'edu.status.live': 'In progress',
  'edu.note': 'Final assignment Programming Fundamentals: <a href="https://github.com/MVelden1/SportStats-CLI" target="_blank" rel="noopener">SportStats CLI</a>, a command-line tool in Python using the Strava API',
  'edu.pe.title': 'Physical Education',
  'edu.status.prop': '(propaedeutic diploma)',
  'edu.ta.title': 'Teaching Assistant',
  'edu.status.done': '(completed)',

  'out.title': 'Outside work',
  'out.body':
    'Outside work I&rsquo;m a keen runner. I train five times a week and run races. ' +
    'The discipline and focus from that training carry over into my work.',

  'ct.note': 'I&rsquo;m open to new opportunities where I can contribute with Java, frontend or integration work. Feel free to get in touch.',
  'ct.copy': 'Copy',
  'ct.copied': 'Copied',

  'form.title': 'Prefer to send a message?',
  'form.name': 'Name',
  'form.name.ph': 'Your name',
  'form.email': 'Email',
  'form.email.ph': 'you@company.com',
  'form.msg': 'Message',
  'form.msg.ph': 'A short note about the role',
  'form.send': 'Send',
  'form.sending': 'Sending...',
  'form.success': 'Thanks, your message has been sent. I&rsquo;ll get back to you as soon as I can.',
  'form.error': 'Something went wrong. Please try again later or email mvelden6@gmail.com directly.',

  'print.languages': 'Languages',
  'print.lang.nl': 'Dutch',
  'print.lang.en': 'English',
};

// Dutch strings that only exist at runtime (not in the HTML).
const NL = {
  'a11y.menu.close': 'Menu sluiten',
  'form.sending': 'Versturen...',
};

// Element attribute bindings: data attribute -> attribute it controls.
const ATTRS = {
  'i18n-ph': 'placeholder',
  'i18n-label': 'aria-label',
  'i18n-alt': 'alt',
};

const STORAGE_KEY = 'cv_lang';
const listeners = [];
let lang = 'nl';

function snapshotDutch() {
  NL['meta.title'] = document.title;
  NL['meta.desc'] = document.querySelector('meta[name="description"]').getAttribute('content');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    NL[el.dataset.i18n] ??= el.innerHTML;
  });
  for (const [data, attr] of Object.entries(ATTRS)) {
    document.querySelectorAll(`[data-${data}]`).forEach(el => {
      NL[el.getAttribute(`data-${data}`)] ??= el.getAttribute(attr);
    });
  }
}

export function t(key) {
  const dict = lang === 'en' ? EN : NL;
  return dict[key] ?? NL[key] ?? key;
}

export function getLang() {
  return lang;
}

export function onLangChange(fn) {
  listeners.push(fn);
}

function applyLang() {
  const root = document.documentElement;
  root.setAttribute('lang', lang);
  document.title = t('meta.title');
  document.querySelector('meta[name="description"]').setAttribute('content', t('meta.desc'));

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.innerHTML = t(el.dataset.i18n);
  });
  for (const [data, attr] of Object.entries(ATTRS)) {
    document.querySelectorAll(`[data-${data}]`).forEach(el => {
      el.setAttribute(attr, t(el.getAttribute(`data-${data}`)));
    });
  }

  const btn = document.getElementById('langBtn');
  if (btn) {
    const target = lang === 'nl' ? 'en' : 'nl';
    btn.textContent = target.toUpperCase();
    btn.setAttribute('lang', target);
    btn.setAttribute('aria-label', target === 'en' ? 'Switch to English' : 'Schakel naar Nederlands');
  }

  listeners.forEach(fn => fn(lang));
}

export function initI18n() {
  snapshotDutch();
  try { lang = localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'nl'; } catch { lang = 'nl'; }
  if (lang !== 'nl') applyLang();

  document.getElementById('langBtn')?.addEventListener('click', () => {
    lang = lang === 'nl' ? 'en' : 'nl';
    try { localStorage.setItem(STORAGE_KEY, lang); } catch {}
    applyLang();
  });
}
