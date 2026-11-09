# mvelden1.github.io

My personal portfolio and online CV.

**Live:** https://mvelden1.github.io

## Features

- **Dutch and English:** language toggle, with Dutch as the source in the HTML and English translations in `js/i18n.js`
- **Light and dark theme:** follows the system setting by default and remembers a manual choice
- **CV as PDF:** a dedicated print layout, so the page can be downloaded as a clean one-page CV
- **Contact form:** messages are sent through Web3Forms, with a honeypot field against spam
- **Responsive and accessible:** mobile menu, skip link and ARIA labels

## Tech stack

- Vanilla HTML, CSS and JavaScript (ES modules), no framework and no build step
- Hosted on GitHub Pages

## Running locally

The site uses ES modules, which browsers don't load over `file://`. Serve it with a local server instead:

```sh
npx serve .
# or
python -m http.server
```

## Project structure

```
├── index.html      # Page content (Dutch)
├── style.css       # Styles, including theme and print layout
├── js/
│   ├── main.js     # Entry point, navigation and menu
│   ├── i18n.js     # English translations and language toggle
│   ├── theme.js    # Light/dark theme
│   ├── print.js    # PDF/print version of the CV
│   └── contact.js  # Contact form
└── assets/         # Images and icons
```
