# MVelden1.github.io

Persoonlijke portfolio-site van Mick van der Velden.

Live: https://mvelden1.github.io

## Lokaal openen

De site gebruikt ES-modules (`js/main.js` met `<script type="module">`). Browsers laden die niet via `file://`, dus bekijk de site via een lokale server:

```sh
npx serve .
# of
python -m http.server
```

Open je `index.html` toch direct via `file://`, dan zie je alleen de content: de taalwissel, het menu, de themaknop en de PDF-knop werken dan niet.

## Stack

- Vanilla HTML, CSS en JavaScript (ES-modules), geen build-stap
- Gehost via GitHub Pages
