// Contact: copy-email button and the Web3Forms contact form.
import { t } from './i18n.js';

function initCopyButton() {
  const btn = document.getElementById('copyEmail');
  if (!btn || !navigator.clipboard) {
    btn?.setAttribute('hidden', '');
    return;
  }
  // The visible label cross-fades via CSS (.is-copied); the status element
  // announces the change to screen readers.
  const status = document.getElementById('copyStatus');
  let timer;
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
    } catch {
      return;
    }
    btn.classList.add('is-copied');
    if (status) status.textContent = t('ct.copied');
    clearTimeout(timer);
    timer = setTimeout(() => {
      btn.classList.remove('is-copied');
      if (status) status.textContent = '';
    }, 1500);
  });
}

function initForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  const successEl = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');
  const submitBtn = document.getElementById('formSubmit');
  const submitLabel = submitBtn.querySelector('span');

  const show = el => {
    successEl.hidden = true;
    errorEl.hidden = true;
    if (el) el.hidden = false;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    show(null);
    submitBtn.disabled = true;
    submitLabel.textContent = t('form.sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success) {
        show(successEl);
        form.reset();
      } else {
        show(errorEl);
      }
    } catch {
      show(errorEl);
    } finally {
      submitBtn.disabled = false;
      submitLabel.textContent = t('form.send');
    }
  });
}

export function initContact() {
  initCopyButton();
  initForm();
}
