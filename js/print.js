// PDF/print version. The print sheet in index.html holds the static parts
// (contact, labels); the rest is copied from the page right before printing,
// so the PDF always shows the same profile, experience, skills and education.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function text(node) {
  return node ? node.textContent.trim() : '';
}

function fillPrintSheet() {
  $('#psProfile').textContent = text($('#aboutText'));

  const skills = $('#psSkills');
  skills.replaceChildren(...$$('#skillsList .skill').map(skill => {
    const li = el('li');
    li.append(el('strong', '', text($('dt', skill))));
    li.append(el('span', '', $$('dd li', skill).map(text).join(' · ')));
    return li;
  }));

  const xp = $('#psExperience');
  xp.replaceChildren(...$$('#ervaring .xp').map(item => {
    const article = el('article', 'ps-xp');
    const head = el('header');
    const who = el('div');
    who.append(el('p', 'ps-xp-role', text($('.xp-role', item))));
    who.append(el('p', 'ps-xp-co', text($('.xp-company', item))));
    head.append(who, el('p', 'ps-xp-date', text($('.xp-date', item))));
    article.append(head, el('div', 'ps-xp-body', $('.xp-body', item).innerHTML));
    return article;
  }));

  const edu = $('#psEducation');
  edu.replaceChildren(...$$('#opleiding [data-edu]').map(item => {
    const div = el('div', 'ps-edu');
    div.append(
      el('p', 'ps-edu-year', text($('.edu-year', item))),
      el('p', 'ps-edu-title', text($('.edu-title', item))),
      el('p', 'ps-edu-school', text($('.edu-school', item))),
    );
    const note = $('.edu-note', item);
    if (note) div.append(el('p', 'ps-edu-note', text(note)));
    div.append(el('p', 'ps-edu-status', text($('.edu-status', item)).replace(/[()]/g, '')));
    return div;
  }));
}

export function initPrint() {
  // Covers both the PDF button and the browser's own print command.
  window.addEventListener('beforeprint', fillPrintSheet);

  $('#downloadBtn')?.addEventListener('click', () => {
    const prevTitle = document.title;
    document.title = 'Mick van der Velden - CV';
    window.print();
    document.title = prevTitle;
  });
}
