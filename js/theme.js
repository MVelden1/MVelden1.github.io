// Light/dark theme. The initial theme is set by the inline script in <head>
// (stored choice, otherwise system preference) to avoid a flash on load.

const STORAGE_KEY = 'cv_state';

function storedTheme() {
  try {
    const theme = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}').theme;
    return theme === 'light' || theme === 'dark' ? theme : null;
  } catch {
    return null;
  }
}

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
}

export function initTheme() {
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  let userHasChosen = storedTheme() !== null;

  if (!root.hasAttribute('data-theme')) {
    setTheme(storedTheme() ?? (media.matches ? 'dark' : 'light'));
  }

  media.addEventListener('change', e => {
    if (!userHasChosen) setTheme(e.matches ? 'dark' : 'light');
  });

  document.getElementById('themeBtn')?.addEventListener('click', () => {
    userHasChosen = true;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme: next })); } catch {}
  });
}
