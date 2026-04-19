/* ============================================================
   Mick van der Velden — Interactive CV
   ============================================================ */

(function () {

  // ========================================================
  // I18N — Dutch default, English toggle
  // ========================================================
  const I18N = {
    nl: {
      'nav.profile': 'Profiel',
      'nav.skills': 'Skills',
      'nav.experience': 'Ervaring',
      'nav.playground': 'Playground',
      'nav.education': 'Opleiding',
      'nav.beyond': 'Buiten',
      'nav.contact': 'Contact',

      'hero.status': 'Beschikbaar voor nieuwe kansen',
      'hero.role': 'Software Developer',
      'hero.apis': 'API-integraties',
      'hero.location': '📍 Nederland',
      'hero.cta.email': 'Stuur mij een bericht',

      'about.eyebrow': '01 — Persoonlijk profiel',
      'about.title': 'Wie ik ben, in <em>één adem</em>.',
      'about.body':
        'Software developer met focus op <strong>backend-integraties</strong> en ' +
        '<strong>React</strong>-frontends. Bouw en onderhoud API-koppelingen (REST, GraphQL) en verwerk ' +
        '<span class="mark">datastromen</span> als JSON, XML, EDIFACT en X12. Pragmatisch, leergierig ' +
        'en gericht op <em>betrouwbare, onderhoudbare oplossingen</em>.',
      'about.stat.years': 'jaar ervaring',
      'about.stat.companies': 'bedrijven',
      'about.stat.tech': 'technologieën',
      'about.stat.train': 'training per week',

      'skills.eyebrow': '02 — Technische vaardigheden',
      'skills.title': 'Waar ik <em>sterk</em> in ben.',

      'xp.eyebrow': '03 — Werkervaring',
      'xp.title': 'Waar ik tot nu toe heb <em>gebouwd</em>.',

      'pg.eyebrow': '04 — Live demo',
      'pg.title': 'Een kijkje in de <em>code</em>.',
      'pg.intro':
        'Een kleine integratie-simulator. Links staat code die een inkomende order-payload (JSON of EDIFACT) ' +
        'omzet naar een genormaliseerd intern formaat — precies het soort werk dat ik dagelijks deed bij Copernicus. ' +
        '<strong>Druk op <em>Run</em></strong> om het te proberen, of wissel van input.',
      'pg.ready': '> klaar om te runnen...',
      'pg.compile': '▸ compiling OrderMapper.java ...',
      'pg.parse': '▸ parsing <strong>{FORMAT}</strong> payload...',
      'pg.mapped': '✓ mapped to internal Order model',
      'pg.result': 'Result:',
      'pg.done': '✓ klaar · {MS} ms',

      'edu.eyebrow': '05 — Opleiding',
      'edu.title': 'Waar ik het <em>geleerd</em> heb.',
      'edu.now.year': '2021 — heden',
      'edu.now.title': 'Software Development',
      'edu.pe.title': 'Lichamelijke opvoeding',
      'edu.ta.title': 'Onderwijsassistent',
      'edu.status.live': 'Bezig',
      'edu.status.prop': 'Propedeuse',
      'edu.status.done': 'Afgerond',

      'out.eyebrow': '06 — Buiten de code',
      'out.title': 'De mens achter de <em>developer</em>.',
      'out.body':
        'Naast het schrijven van code ben ik een <strong>fanatiek hardloper</strong>. ' +
        'De <span class="mark">discipline</span>, het doorzettingsvermogen en de focus die ik in ' +
        'mijn trainingen opbouw, neem ik mee naar mijn werk. Of het nu gaat om een zware ' +
        'intervalsessie of een complex technisch probleem — <em>ik ga er altijd voor</em>.',
      'out.sticker': 'Op de baan',
      'out.k1': 'Sport',
      'out.k2': 'Mindset',
      'out.k3': 'Transfer',
      'out.v1': 'Hardlopen',
      'out.v2': 'Stap voor stap',
      'out.v3': 'Focus &amp; uithouding',

      'ct.eyebrow': '07 — Laten we praten',
      'ct.title': 'Een <em>vacature</em>, koffie, of iets tussenin?',
      'ct.note':
        'Ik sta open voor <em>nieuwe kansen</em> waar ik met Java, frontend of ' +
        'integratiewerk kan bijdragen. Stuur een berichtje — ik reageer meestal ' +
        '<em>binnen een dag</em>.',
      'ct.copy': 'klik om te kopiëren',
      'ct.copied': 'gekopieerd! ✓',
      'ct.newtab': 'open in nieuw tabblad',

      'form.title': 'Liever een bericht?',
      'form.name': 'Naam',
      'form.name.ph': 'Hoe heet je?',
      'form.email': 'E-mail',
      'form.email.ph': 'jij@bedrijf.nl',
      'form.msg': 'Bericht',
      'form.msg.ph': 'Vertel kort iets over de rol…',
      'form.send': 'Verzenden',
      'form.success': '✓ Bedankt! Je bericht is verstuurd. Ik reageer zo snel mogelijk.',
      'form.error': '⚠ Er ging iets mis. Probeer het later opnieuw of mail direct naar mvelden6@gmail.com',

      'footer.copy': '© 2026 Mick van der Velden. Gebouwd met veel koffie ☕ en een beetje cadence.',
      'footer.city': 'Amsterdam',

      'term.whoami': '$ <span class="cmd">whoami</span>',
      'term.whoami.res': '→ Software Developer · Java &amp; Frontend · integraties',
      'term.ls':     '$ <span class="cmd">ls skills/</span>',
      'term.cat':    '$ <span class="cmd">cat status.txt</span>',
      'term.status': '"Beschikbaar voor nieuwe kansen — laten we praten."',

      'marquee.apis': 'API-integraties',
      'marquee.running': 'Hardlopen',
      'marquee.curious': 'Leergierig',

      'print.role': 'Software Developer · Java & Frontend · API-integraties',
      'print.profile': 'Profiel',
      'print.skills': 'Vaardigheden',
      'print.experience': 'Werkervaring',
      'print.education': 'Opleiding',
      'print.contact': 'Contact',
      'print.languages': 'Talen',
      'print.lang.nl': 'Nederlands',
      'print.lang.en': 'Engels',
      'print.summary':
        'Software developer met ervaring in Java-backends, React-frontends en ' +
        'API-integraties. Bouwt koppelingen tussen systemen met REST, GraphQL en data-formaten ' +
        'als JSON, XML, EDIFACT en X12. Pragmatisch, gedreven en gericht op betrouwbare oplossingen.',
      'form.sending': 'Versturen…',
    },

    en: {
      'nav.profile': 'Profile',
      'nav.skills': 'Skills',
      'nav.experience': 'Experience',
      'nav.playground': 'Playground',
      'nav.education': 'Education',
      'nav.beyond': 'Off-keyboard',
      'nav.contact': 'Contact',

      'hero.status': 'Open to new opportunities',
      'hero.role': 'Software Developer',
      'hero.apis': 'API integrations',
      'hero.location': '📍 Netherlands',
      'hero.cta.email': 'Send me a message',

      'about.eyebrow': '01 — Personal profile',
      'about.title': 'Who I am, in <em>one breath</em>.',
      'about.body':
        'Software developer focused on <strong>backend integrations</strong> and ' +
        '<strong>React</strong> frontends. Build and maintain API couplings (REST, GraphQL) and process ' +
        '<span class="mark">data flows</span> like JSON, XML, EDIFACT and X12. Pragmatic, curious ' +
        'and focused on <em>reliable, maintainable solutions</em>.',
      'about.stat.years': 'years of experience',
      'about.stat.companies': 'companies',
      'about.stat.tech': 'technologies',
      'about.stat.train': 'workouts per week',

      'skills.eyebrow': '02 — Technical skills',
      'skills.title': 'What I <em>reach for</em>.',

      'xp.eyebrow': '03 — Work experience',
      'xp.title': "Where I've <em>shipped things</em>.",

      'pg.eyebrow': '04 — Live demo',
      'pg.title': 'A peek at the <em>code</em>.',
      'pg.intro':
        'A tiny integration simulator. On the left, code that takes an incoming order payload (JSON or EDIFACT) ' +
        'and normalises it into an internal model — exactly the kind of work I did daily at Copernicus. ' +
        '<strong>Hit <em>Run</em></strong> to try it, or switch inputs.',
      'pg.ready': '> ready to run...',
      'pg.compile': '▸ compiling OrderMapper.java ...',
      'pg.parse': '▸ parsing <strong>{FORMAT}</strong> payload...',
      'pg.mapped': '✓ mapped to internal Order model',
      'pg.result': 'Result:',
      'pg.done': '✓ done · {MS} ms',

      'edu.eyebrow': '05 — Education',
      'edu.title': 'How I <em>got here</em>.',
      'edu.now.year': '2021 — present',
      'edu.now.title': 'Software Development',
      'edu.pe.title': 'Physical Education',
      'edu.ta.title': 'Teaching Assistant',
      'edu.status.live': 'In progress',
      'edu.status.prop': 'Propaedeutic',
      'edu.status.done': 'Completed',

      'out.eyebrow': '06 — Off the keyboard',
      'out.title': 'The human behind the <em>developer</em>.',
      'out.body':
        "When I&rsquo;m not writing code I&rsquo;m a <strong>fanatical runner</strong>. " +
        'The <span class="mark">discipline</span>, grit and focus I build on the track ' +
        "come with me to work. Whether it&rsquo;s a brutal interval session or a gnarly technical " +
        'problem — <em>I keep going</em>.',
      'out.sticker': 'On the track',
      'out.k1': 'Sport',
      'out.k2': 'Mindset',
      'out.k3': 'Transfer',
      'out.v1': 'Running',
      'out.v2': 'Step by step',
      'out.v3': 'Focus &amp; endurance',

      'ct.eyebrow': '07 — Let&rsquo;s talk',
      'ct.title': 'A <em>role</em>, a coffee, or something in between?',
      'ct.note':
        "I&rsquo;m open to <em>new opportunities</em> where I can contribute with Java, frontend or " +
        'integration work. Drop me a line — I usually reply ' +
        '<em>within a day</em>.',
      'ct.copy': 'click to copy',
      'ct.copied': 'copied! ✓',
      'ct.newtab': 'opens in a new tab',

      'form.title': 'Prefer a message?',
      'form.name': 'Name',
      'form.name.ph': 'What should I call you?',
      'form.email': 'Email',
      'form.email.ph': 'you@company.com',
      'form.msg': 'Message',
      'form.msg.ph': 'A quick note about the role…',
      'form.send': 'Send',
      'form.success': '✓ Thanks! Your message is on its way. I&rsquo;ll reply as soon as I can.',
      'form.error': '⚠ Something went wrong. Please try again later or email mvelden6@gmail.com directly.',

      'footer.copy': '© 2026 Mick van der Velden. Built with too much coffee ☕ and a bit of cadence.',
      'footer.city': 'Amsterdam',

      'term.whoami': '$ <span class="cmd">whoami</span>',
      'term.whoami.res': '→ Software Developer · Java &amp; Frontend · integrations',
      'term.ls':     '$ <span class="cmd">ls skills/</span>',
      'term.cat':    '$ <span class="cmd">cat status.txt</span>',
      'term.status': '"Open to new opportunities — let&rsquo;s talk."',

      'marquee.apis': 'API integrations',
      'marquee.running': 'Running',
      'marquee.curious': 'Curious',

      'print.role': 'Software Developer · Java & Frontend · API integrations',
      'print.profile': 'Profile',
      'print.skills': 'Skills',
      'print.experience': 'Experience',
      'print.education': 'Education',
      'print.contact': 'Contact',
      'print.languages': 'Languages',
      'print.lang.nl': 'Dutch',
      'print.lang.en': 'English',
      'print.summary':
        'Software developer with experience in Java backends, React frontends and ' +
        'API integrations. Builds couplings between systems using REST, GraphQL and data formats ' +
        'like JSON, XML, EDIFACT and X12. Pragmatic, driven and focused on reliable solutions.',
      'form.sending': 'Sending…',
    },
  };

  const root = document.documentElement;
  let lang = (() => {
    try { return localStorage.getItem('cv_lang') || 'nl'; } catch { return 'nl'; }
  })();
  function t(key) { return (I18N[lang] && I18N[lang][key]) || key; }

  // Data that differs per language
  const DATA = {
    nl: {
      skills: [
        { name: 'Backend',            tags: ['Java', 'REST', 'SQL'] },
        { name: 'Frontend',           tags: ['React', 'TypeScript', 'HTML', 'CSS'] },
        { name: 'Data & Integratie',  tags: ['GraphQL', 'JSON', 'XML', 'EDIFACT', 'X12'] },
        { name: 'Tools',              tags: ['Git', 'Postman', 'Jira', 'Agile / Scrum'] },
      ],
      xp: [
        {
          role: 'Software Developer',
          company: 'Deutsche Telekom Healthcare Solutions',
          date: 'Nov 2024 — heden',
          body: `
            <p>Frontend developer in een cross-functioneel team dat een healthcare-kritieke applicatie
            bouwt voor pathologielabs.</p>
            <ul>
              <li>Ontwikkel <strong>React-componenten</strong> en pagina&rsquo;s met focus op bruikbaarheid.</li>
              <li>Integreer backenddata via <strong>GraphQL</strong>-queries en schema-werk.</li>
              <li>Lever features op in korte iteraties binnen een Agile/Scrum-team.</li>
            </ul>`,
          tags: ['React', 'GraphQL', 'Frontend', 'Healthcare'],
        },
        {
          role: 'Integratie Specialist',
          company: 'Copernicus Interchange Technology',
          date: 'Mrt 2022 — Jul 2024',
          body: `
            <p>Ontwierp, bouwde en onderhield Java-integraties tussen partnersystemen in een
            B2B-omgeving.</p>
            <ul>
              <li>Bouwde API-koppelingen tussen klantsystemen met Java.</li>
              <li>Implementeerde parsers en mappings voor <strong>JSON, XML, X12 en EDIFACT</strong>.</li>
              <li>Loste productiestoringen op in datastromen, in directe samenwerking met klanten.</li>
            </ul>`,
          tags: ['Java', 'JSON', 'XML', 'EDIFACT', 'API-integratie'],
        },
      ],
      code: {
        json: `<span class="cm">// Normaliseer een inkomende JSON-order.</span>
<span class="kw">public</span> <span class="tp">Order</span> <span class="fn">fromJson</span>(<span class="tp">String</span> payload) {
  <span class="tp">JsonNode</span> root = mapper.<span class="fn">readTree</span>(payload);

  <span class="kw">return</span> <span class="tp">Order</span>.<span class="fn">builder</span>()
    .<span class="fn">id</span>(root.<span class="fn">path</span>(<span class="str">"order_id"</span>).<span class="fn">asText</span>())
    .<span class="fn">customer</span>(root.<span class="fn">path</span>(<span class="str">"customer"</span>).<span class="fn">asText</span>())
    .<span class="fn">total</span>(root.<span class="fn">path</span>(<span class="str">"total"</span>).<span class="fn">asDouble</span>())
    .<span class="fn">currency</span>(<span class="str">"EUR"</span>)
    .<span class="fn">build</span>();
}

<span class="cm">// Input:</span>
<span class="cm">// { "order_id": "A-1042", "customer": "Acme BV",</span>
<span class="cm">//   "total": 249.50, "items": 3 }</span>`,
        edifact: `<span class="cm">// Parse een EDIFACT ORDERS-bericht.</span>
<span class="kw">public</span> <span class="tp">Order</span> <span class="fn">fromEdifact</span>(<span class="tp">String</span> msg) {
  <span class="tp">Edifact</span> e = <span class="tp">Edifact</span>.<span class="fn">parse</span>(msg);

  <span class="kw">return</span> <span class="tp">Order</span>.<span class="fn">builder</span>()
    .<span class="fn">id</span>(e.<span class="fn">segment</span>(<span class="str">"BGM"</span>).<span class="fn">element</span>(<span class="num">1</span>))
    .<span class="fn">customer</span>(e.<span class="fn">nad</span>(<span class="str">"BY"</span>).<span class="fn">name</span>())
    .<span class="fn">total</span>(e.<span class="fn">moa</span>(<span class="num">86</span>).<span class="fn">amount</span>())
    .<span class="fn">currency</span>(e.<span class="fn">cux</span>().<span class="fn">iso</span>())
    .<span class="fn">build</span>();
}

<span class="cm">// Input:</span>
<span class="cm">// UNH+1+ORDERS:D:96A:UN'</span>
<span class="cm">// BGM+220+A-1042+9'</span>
<span class="cm">// NAD+BY+::9+Acme BV'</span>
<span class="cm">// MOA+86:249.50'</span>`,
        xml: `<span class="cm">// Parse een XML-order met een XPath-mapper.</span>
<span class="kw">public</span> <span class="tp">Order</span> <span class="fn">fromXml</span>(<span class="tp">String</span> xml) {
  <span class="tp">Document</span> doc = <span class="tp">XmlParser</span>.<span class="fn">parse</span>(xml);

  <span class="kw">return</span> <span class="tp">Order</span>.<span class="fn">builder</span>()
    .<span class="fn">id</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/@id"</span>))
    .<span class="fn">customer</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/customer/name"</span>))
    .<span class="fn">total</span>(<span class="tp">Double</span>.<span class="fn">parseDouble</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/total"</span>)))
    .<span class="fn">currency</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/total/@ccy"</span>))
    .<span class="fn">build</span>();
}

<span class="cm">// Input:</span>
<span class="cm">// &lt;order id="A-1042"&gt;</span>
<span class="cm">//   &lt;customer&gt;&lt;name&gt;Acme BV&lt;/name&gt;&lt;/customer&gt;</span>
<span class="cm">//   &lt;total ccy="EUR"&gt;249.50&lt;/total&gt;</span>
<span class="cm">// &lt;/order&gt;</span>`,
      },
    },
    en: {
      skills: [
        { name: 'Backend',             tags: ['Java', 'REST', 'SQL'] },
        { name: 'Frontend',            tags: ['React', 'TypeScript', 'HTML', 'CSS'] },
        { name: 'Data & Integration',  tags: ['GraphQL', 'JSON', 'XML', 'EDIFACT', 'X12'] },
        { name: 'Tools',               tags: ['Git', 'Postman', 'Jira', 'Agile / Scrum'] },
      ],
      xp: [
        {
          role: 'Software Developer',
          company: 'Deutsche Telekom Healthcare Solutions',
          date: 'Nov 2024 — present',
          body: `
            <p>Frontend developer in a cross-functional team building a healthcare-critical
            application for pathology labs.</p>
            <ul>
              <li>Build <strong>React components</strong> and pages with a focus on usability.</li>
              <li>Integrate backend data through <strong>GraphQL</strong> queries and schema work.</li>
              <li>Ship features in short iterations within an Agile/Scrum team.</li>
            </ul>`,
          tags: ['React', 'GraphQL', 'Frontend', 'Healthcare'],
        },
        {
          role: 'Integration Specialist',
          company: 'Copernicus Interchange Technology',
          date: 'Mar 2022 — Jul 2024',
          body: `
            <p>Designed, built and maintained Java integrations between partner systems in a
            B2B environment.</p>
            <ul>
              <li>Built API couplings between customer systems using Java.</li>
              <li>Implemented parsers and mappings for <strong>JSON, XML, X12 and EDIFACT</strong>.</li>
              <li>Resolved production data-flow issues in direct collaboration with customers.</li>
            </ul>`,
          tags: ['Java', 'JSON', 'XML', 'EDIFACT', 'API integration'],
        },
      ],
      code: {
        json: `<span class="cm">// Normalise an incoming JSON order.</span>
<span class="kw">public</span> <span class="tp">Order</span> <span class="fn">fromJson</span>(<span class="tp">String</span> payload) {
  <span class="tp">JsonNode</span> root = mapper.<span class="fn">readTree</span>(payload);

  <span class="kw">return</span> <span class="tp">Order</span>.<span class="fn">builder</span>()
    .<span class="fn">id</span>(root.<span class="fn">path</span>(<span class="str">"order_id"</span>).<span class="fn">asText</span>())
    .<span class="fn">customer</span>(root.<span class="fn">path</span>(<span class="str">"customer"</span>).<span class="fn">asText</span>())
    .<span class="fn">total</span>(root.<span class="fn">path</span>(<span class="str">"total"</span>).<span class="fn">asDouble</span>())
    .<span class="fn">currency</span>(<span class="str">"EUR"</span>)
    .<span class="fn">build</span>();
}

<span class="cm">// Input:</span>
<span class="cm">// { "order_id": "A-1042", "customer": "Acme BV",</span>
<span class="cm">//   "total": 249.50, "items": 3 }</span>`,
        edifact: `<span class="cm">// Parse an EDIFACT ORDERS message.</span>
<span class="kw">public</span> <span class="tp">Order</span> <span class="fn">fromEdifact</span>(<span class="tp">String</span> msg) {
  <span class="tp">Edifact</span> e = <span class="tp">Edifact</span>.<span class="fn">parse</span>(msg);

  <span class="kw">return</span> <span class="tp">Order</span>.<span class="fn">builder</span>()
    .<span class="fn">id</span>(e.<span class="fn">segment</span>(<span class="str">"BGM"</span>).<span class="fn">element</span>(<span class="num">1</span>))
    .<span class="fn">customer</span>(e.<span class="fn">nad</span>(<span class="str">"BY"</span>).<span class="fn">name</span>())
    .<span class="fn">total</span>(e.<span class="fn">moa</span>(<span class="num">86</span>).<span class="fn">amount</span>())
    .<span class="fn">currency</span>(e.<span class="fn">cux</span>().<span class="fn">iso</span>())
    .<span class="fn">build</span>();
}

<span class="cm">// Input:</span>
<span class="cm">// UNH+1+ORDERS:D:96A:UN'</span>
<span class="cm">// BGM+220+A-1042+9'</span>
<span class="cm">// NAD+BY+::9+Acme BV'</span>
<span class="cm">// MOA+86:249.50'</span>`,
        xml: `<span class="cm">// Parse an XML order with an XPath mapper.</span>
<span class="kw">public</span> <span class="tp">Order</span> <span class="fn">fromXml</span>(<span class="tp">String</span> xml) {
  <span class="tp">Document</span> doc = <span class="tp">XmlParser</span>.<span class="fn">parse</span>(xml);

  <span class="kw">return</span> <span class="tp">Order</span>.<span class="fn">builder</span>()
    .<span class="fn">id</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/@id"</span>))
    .<span class="fn">customer</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/customer/name"</span>))
    .<span class="fn">total</span>(<span class="tp">Double</span>.<span class="fn">parseDouble</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/total"</span>)))
    .<span class="fn">currency</span>(<span class="fn">xpath</span>(doc, <span class="str">"/order/total/@ccy"</span>))
    .<span class="fn">build</span>();
}

<span class="cm">// Input:</span>
<span class="cm">// &lt;order id="A-1042"&gt;</span>
<span class="cm">//   &lt;customer&gt;&lt;name&gt;Acme BV&lt;/name&gt;&lt;/customer&gt;</span>
<span class="cm">//   &lt;total ccy="EUR"&gt;249.50&lt;/total&gt;</span>
<span class="cm">// &lt;/order&gt;</span>`,
      },
    },
  };

  // ========================================================
  // THEME + AESTHETIC
  // ========================================================
  const persistedState = (() => {
    try { return JSON.parse(localStorage.getItem('cv_state') || '{}'); }
    catch { return {}; }
  })();
  const hasStoredTheme = persistedState.theme === 'light' || persistedState.theme === 'dark';
  let userHasChosenTheme = hasStoredTheme;
  const prefersDarkScheme = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  const state = Object.assign({}, TWEAK_DEFAULTS, persistedState);
  if (!hasStoredTheme && prefersDarkScheme) {
    state.theme = prefersDarkScheme.matches ? 'dark' : 'light';
  }

  function applyState() {
    root.setAttribute('data-theme', state.theme);
    root.setAttribute('data-aesthetic', state.aesthetic);
    root.style.setProperty('--accent', state.accent);
    root.style.setProperty('--gutter', state.density === 'compact' ? 'clamp(14px,3vw,36px)' : 'clamp(20px,4vw,56px)');
    document.body.style.fontSize = state.density === 'compact' ? '15px' : '17px';

    const icon = document.getElementById('themeIcon');
    if (icon) {
      if (state.theme === 'dark') {
        icon.innerHTML = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
      } else {
        icon.innerHTML = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>';
      }
    }
    syncSegs();
  }

  function saveState() {
    try { localStorage.setItem('cv_state', JSON.stringify(state)); } catch {}
  }

  function syncSegs() {
    document.querySelectorAll('#segAesthetic button').forEach(b => b.classList.toggle('on', b.dataset.v === state.aesthetic));
    document.querySelectorAll('#segTheme button').forEach(b => b.classList.toggle('on', b.dataset.v === state.theme));
    document.querySelectorAll('#segDensity button').forEach(b => b.classList.toggle('on', b.dataset.v === state.density));
    document.querySelectorAll('#segAccent button').forEach(b => b.classList.toggle('on', b.dataset.c === state.accent));
  }

  applyState();

  if (prefersDarkScheme) {
    const onSystemThemeChange = (e) => {
      if (userHasChosenTheme) return;
      state.theme = e.matches ? 'dark' : 'light';
      applyState();
    };
    if (typeof prefersDarkScheme.addEventListener === 'function') {
      prefersDarkScheme.addEventListener('change', onSystemThemeChange);
    } else if (typeof prefersDarkScheme.addListener === 'function') {
      prefersDarkScheme.addListener(onSystemThemeChange);
    }
  }

  document.getElementById('themeBtn').addEventListener('click', () => {
    userHasChosenTheme = true;
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyState(); saveState();
  });

  // ========================================================
  // APPLY LANGUAGE — updates all labelled DOM + re-renders dynamic content
  // ========================================================
  function applyLang() {
    root.setAttribute('lang', lang);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.textContent = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph')));
    });
    const label = document.getElementById('langLabel');
    if (label) label.textContent = lang === 'nl' ? 'EN' : 'NL';
    const footCopy = document.querySelector('.foot > span:first-child');
    if (footCopy) footCopy.textContent = t('footer.copy');
    updateTime();
    renderTerminal();
    renderSkills();
    renderExperience();
    renderCode();
    resetPlaygroundOutput();
  }

  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      lang = lang === 'nl' ? 'en' : 'nl';
      try { localStorage.setItem('cv_lang', lang); } catch {}
      applyLang();
    });
  }

  // ========================================================
  // TYPEWRITER HERO NAME
  // ========================================================
  const heroEl = document.getElementById('heroText');
  const fullName = 'Mick van der Velden';
  let i = 0;
  (function typeNext() {
    if (i <= fullName.length) {
      heroEl.textContent = fullName.slice(0, i);
      i++;
      setTimeout(typeNext, 65 + Math.random() * 40);
    }
  })();

  // ========================================================
  // TERMINAL INTRO
  // ========================================================
  const term = document.getElementById('terminal');
  let termTimer = null;
  function renderTerminal() {
    if (!term) return;
    if (termTimer) { clearTimeout(termTimer); termTimer = null; }
    term.innerHTML = '';
    const pre = '<span class="prompt">mick@dev</span> <span class="res">~</span> ';
    const lines = [
      pre + t('term.whoami'),
      '<span class="res">' + t('term.whoami.res') + '</span>',
      pre + t('term.ls'),
      '<span class="res"><span class="kw">Java</span>  <span class="kw">React</span>  <span class="kw">GraphQL</span>  <span class="kw">JSON/XML</span>  <span class="kw">EDIFACT</span></span>',
      pre + t('term.cat'),
      '<span class="str">' + t('term.status') + '</span>',
      pre + '<span class="cmd">_</span>',
    ];
    let ti = 0;
    function nextLine() {
      if (ti >= lines.length) { termTimer = null; return; }
      const d = document.createElement('div');
      d.innerHTML = lines[ti];
      d.style.opacity = '0';
      d.style.transition = 'opacity .3s';
      term.appendChild(d);
      requestAnimationFrame(() => { d.style.opacity = '1'; });
      ti++;
      termTimer = setTimeout(nextLine, 700 + Math.random() * 200);
    }
    termTimer = setTimeout(nextLine, 400);
  }

  // ========================================================
  // SCROLL REVEAL
  // ========================================================
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ========================================================
  // STAT COUNTERS
  // ========================================================
  const statIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const target = parseInt(el.dataset.count, 10);
        const dur = 1200;
        const start = performance.now();
        (function tick(now) {
          now = now || performance.now();
          const tm = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - tm, 3);
          const val = Math.round(target * eased);
          el.textContent = val >= 1000 ? val.toLocaleString(lang === 'nl' ? 'nl-NL' : 'en-GB') : val;
          if (tm < 1) requestAnimationFrame(tick);
        })();
        statIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => statIO.observe(el));

  // ========================================================
  // SKILLS
  // ========================================================
  const skillsList = document.getElementById('skillsList');
  function renderSkills() {
    if (!skillsList) return;
    skillsList.innerHTML = '';
    DATA[lang].skills.forEach(s => {
      const row = document.createElement('div');
      row.className = 'skill';
      row.innerHTML = `
        <div class="skill-head">
          <span class="skill-name">${s.name}</span>
        </div>
        <div class="skill-tags">${s.tags.map(tg => `<span class="skill-tag">${tg}</span>`).join('')}</div>
      `;
      skillsList.appendChild(row);
    });
  }

  // ========================================================
  // EXPERIENCE (expandable)
  // ========================================================
  const tl = document.getElementById('timeline');
  function renderExperience() {
    if (!tl) return;
    tl.innerHTML = '';
    DATA[lang].xp.forEach((x, idx) => {
      const el = document.createElement('article');
      el.className = 'xp' + (idx === 0 ? ' open' : '');
      el.innerHTML = `
        <div class="xp-head">
          <div>
            <h3 class="xp-role">${x.role}</h3>
            <div class="xp-company">${x.company}</div>
          </div>
          <div class="xp-meta">
            <div class="xp-date">${x.date}</div>
            <span class="xp-toggle">+</span>
          </div>
        </div>
        <div class="xp-body">
          <div class="xp-body-inner">
            ${x.body}
            <div class="xp-tags">${x.tags.map(tg => `<span class="chip">${tg}</span>`).join('')}</div>
          </div>
        </div>
      `;
      el.addEventListener('click', () => el.classList.toggle('open'));
      tl.appendChild(el);
    });
  }

  // ========================================================
  // PLAYGROUND — code + run
  // ========================================================
  const codeBlock = document.getElementById('codeBlock');
  const output = document.getElementById('output');
  let currentInput = 'json';

  function renderCode() {
    if (!codeBlock) return;
    codeBlock.innerHTML = DATA[lang].code[currentInput];
  }

  function resetPlaygroundOutput() {
    if (!output) return;
    output.innerHTML = `<div class="line res" style="color: var(--ink-muted);">${t('pg.ready')}</div>`;
  }

  document.querySelectorAll('.pg-head .tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pg-head .tab').forEach(tb => tb.classList.remove('active'));
      tab.classList.add('active');
      currentInput = tab.dataset.input;
      renderCode();
    });
  });

  const MOCK_RESULT = {
    id: 'A-1042',
    customer: 'Acme BV',
    total: 249.50,
    currency: 'EUR',
    items: 3,
  };

  const runBtn = document.getElementById('runBtn');
  if (runBtn) {
    runBtn.addEventListener('click', () => {
      output.innerHTML = '';
      const ms = (Math.random() * 18 + 12).toFixed(1);
      const steps = [
        { html: '<span style="color: var(--ink-muted);">' + t('pg.compile') + '</span>' },
        { html: '<span style="color: var(--ink-muted);">' + t('pg.parse').replace('{FORMAT}', currentInput.toUpperCase()) + '</span>' },
        { html: '<span style="color: var(--accent-2);">' + t('pg.mapped') + '</span>' },
        { html: '<br/><span style="color: var(--ink-muted);">' + t('pg.result') + '</span>' },
        { json: true },
        { html: '<br/><span style="color: var(--accent);">' + t('pg.done').replace('{MS}', ms) + '</span>' },
      ];
      let di = 0;
      (function tick() {
        if (di >= steps.length) return;
        const s = steps[di];
        const line = document.createElement('div');
        line.className = 'line';
        if (s.json) {
          line.innerHTML = '<pre>' + JSON.stringify(MOCK_RESULT, null, 2)
            .replace(/"([^"]+)":/g, '<span class="k">"$1"</span>:')
            .replace(/: "([^"]+)"/g, ': <span class="s">"$1"</span>')
            .replace(/: (\d+\.?\d*)/g, ': <span class="v">$1</span>') + '</pre>';
        } else {
          line.innerHTML = s.html;
        }
        output.appendChild(line);
        di++;
        setTimeout(tick, 300);
      })();
    });
  }

  // ========================================================
  // CONTACT — copy email + form
  // ========================================================
  const emailLink = document.getElementById('emailCopy');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      const hint = emailLink.querySelector('.copied-hint');
      navigator.clipboard.writeText('mvelden6@gmail.com').then(() => {
        emailLink.classList.add('copied');
        if (hint) hint.textContent = t('ct.copied');
        setTimeout(() => {
          emailLink.classList.remove('copied');
          if (hint) hint.textContent = t('ct.copy');
        }, 1800);
      }).catch(() => {
        window.location.href = 'mailto:mvelden6@gmail.com';
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const successEl = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');
    const submitBtn = document.getElementById('formSubmit');
    const submitLabel = submitBtn ? submitBtn.querySelector('span') : null;
    const originalLabelKey = 'form.send';

    function hideBanners() {
      if (successEl) successEl.classList.remove('show');
      if (errorEl) errorEl.classList.remove('show');
    }
    function showBanner(el, ms = 6000) {
      hideBanners();
      if (!el) return;
      el.classList.add('show');
      setTimeout(() => el.classList.remove('show'), ms);
    }

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      hideBanners();

      const data = new FormData(contactForm);
      const accessKey = (data.get('access_key') || '').toString();
      const hasRealKey = accessKey && !/YOUR-WEB3FORMS-ACCESS-KEY/i.test(accessKey);

      const name = (data.get('name') || '').toString().trim();
      const email = (data.get('email') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      if (!hasRealKey) {
        const subjectText = lang === 'en'
          ? `Message via cv site — ${name || 'unknown'}`
          : `Bericht via cv-site — ${name || 'onbekend'}`;
        const subject = encodeURIComponent(subjectText);
        const body = encodeURIComponent(
          `${message}\n\n— ${name}${email ? ' <' + email + '>' : ''}`
        );
        window.location.href = `mailto:mvelden6@gmail.com?subject=${subject}&body=${body}`;
        showBanner(successEl);
        contactForm.reset();
        return;
      }

      if (submitBtn) submitBtn.disabled = true;
      if (submitLabel) submitLabel.textContent = t('form.sending');

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Accept': 'application/json' },
          body: data,
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success) {
          showBanner(successEl);
          contactForm.reset();
        } else {
          showBanner(errorEl);
        }
      } catch {
        showBanner(errorEl);
      } finally {
        if (submitBtn) submitBtn.disabled = false;
        if (submitLabel) submitLabel.textContent = t(originalLabelKey);
      }
    });
  }

  // ========================================================
  // PRINT SHEET — single-page professional PDF
  // ========================================================
  const printSheet = document.getElementById('printSheet');
  function renderPrintSheet() {
    if (!printSheet) return;
    const xps = DATA[lang].xp;
    const skills = DATA[lang].skills;
    const eduNow = lang === 'nl' ? 'heden' : 'present';

    const ic = {
      pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
      mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><polyline points="3 7 12 13 21 7"/></svg>',
      link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 14a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 10a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>',
      gh: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.9.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>',
      web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/></svg>',
      tel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2z"/></svg>',
    };

    const eduItems = [
      { year: '2021 — ' + eduNow, title: t('edu.now.title'), school: 'Novi Hogeschool, Utrecht', status: t('edu.status.live') },
      { year: '2017 — 2019', title: t('edu.pe.title'), school: 'Hogeschool van Amsterdam', status: t('edu.status.prop') },
      { year: '2013 — 2017', title: t('edu.ta.title'), school: 'Horizon College, Alkmaar', status: t('edu.status.done') },
    ];

    printSheet.innerHTML = `
      <header class="ps-head">
        <div class="ps-photo">
          <img src="assets/mick.png" alt="Portret van Mick van der Velden" />
        </div>
        <div class="ps-id">
          <div class="ps-eyebrow">Curriculum Vitae</div>
          <h1 class="ps-name">Mick van der Velden</h1>
          <p class="ps-role">${t('print.role')}</p>
          <div class="ps-rule"></div>
        </div>
      </header>

      <aside class="ps-side">
        <section class="ps-block">
          <h2 class="ps-h">${t('print.contact')}</h2>
          <ul class="ps-contact-list">
            <li>${ic.pin}<span>Houtveldweg 800, 1507 ES Zaandam, NL</span></li>
            <li>${ic.tel}<span>+31 6 1627 0753</span></li>
            <li>${ic.mail}<span>mvelden6@gmail.com</span></li>
            <li>${ic.link}<span>linkedin.com/in/mick-van-der-velden</span></li>
            <li>${ic.gh}<span>github.com/MVelden1</span></li>
            <li>${ic.web}<span>mvelden1.github.io</span></li>
          </ul>
        </section>

        <section class="ps-block">
          <h2 class="ps-h">${t('print.skills')}</h2>
          <ul class="ps-skills">
            ${skills.map(s => `<li><strong>${s.name}</strong><span>${s.tags.join(' · ')}</span></li>`).join('')}
          </ul>
        </section>

        <section class="ps-block">
          <h2 class="ps-h">${t('print.languages')}</h2>
          <ul class="ps-plain">
            <li>${t('print.lang.nl')}</li>
            <li>${t('print.lang.en')}</li>
          </ul>
        </section>
      </aside>

      <main class="ps-main">
        <section class="ps-block">
          <h2 class="ps-h ps-h-main"><span class="ps-num">01</span>${t('print.profile')}</h2>
          <p class="ps-p">${t('print.summary')}</p>
        </section>

        <section class="ps-block">
          <h2 class="ps-h ps-h-main"><span class="ps-num">02</span>${t('print.experience')}</h2>
          ${xps.map(x => `
            <article class="ps-xp">
              <header>
                <div>
                  <h3 class="ps-xp-role">${x.role}</h3>
                  <div class="ps-xp-co">${x.company}</div>
                </div>
                <div class="ps-xp-date">${x.date}</div>
              </header>
              <div class="ps-xp-body">${x.body}</div>
              <div class="ps-xp-tags">${x.tags.map(tg => `<span>${tg}</span>`).join('')}</div>
            </article>
          `).join('')}
        </section>

        <section class="ps-block">
          <h2 class="ps-h ps-h-main"><span class="ps-num">03</span>${t('print.education')}</h2>
          <div class="ps-edu-grid">
            ${eduItems.map(e => `
              <div class="ps-edu">
                <div class="ps-edu-year">${e.year}</div>
                <div class="ps-edu-title">${e.title}</div>
                <div class="ps-edu-school">${e.school}</div>
                <div class="ps-edu-status">${e.status}</div>
              </div>
            `).join('')}
          </div>
        </section>
      </main>

      <footer class="ps-foot">
        <span>Mick van der Velden · ${t('print.role')}</span>
        <span>mvelden6@gmail.com</span>
      </footer>
    `;
  }

  const dlBtn = document.getElementById('downloadBtn');
  if (dlBtn) dlBtn.addEventListener('click', () => {
    renderPrintSheet();
    const prevTitle = document.title;
    document.title = 'Mick van der Velden — CV';
    window.print();
    setTimeout(() => { document.title = prevTitle; }, 500);
  });

  // ========================================================
  // ACTIVE NAV
  // ========================================================
  const navLinks = document.querySelectorAll('#nav a');
  const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const navIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => navIO.observe(s));

  // ========================================================
  // FOOTER TIME
  // ========================================================
  function updateTime() {
    const locale = lang === 'nl' ? 'nl-NL' : 'en-GB';
    const time = new Date().toLocaleTimeString(locale, { timeZone: 'Europe/Amsterdam', hour: '2-digit', minute: '2-digit' });
    const el = document.getElementById('timeNow');
    if (el) el.textContent = `${t('footer.city')} · ${time}`;
  }
  setInterval(updateTime, 30000);

  // ========================================================
  // TWEAKS PANEL + host protocol
  // ========================================================
  function bindSeg(id, key) {
    document.querySelectorAll(`#${id} button`).forEach(b => {
      b.addEventListener('click', () => {
        if (key === 'theme') userHasChosenTheme = true;
        state[key] = b.dataset.v;
        applyState(); saveState();
        try {
          window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: b.dataset.v } }, '*');
        } catch {}
      });
    });
  }
  bindSeg('segAesthetic', 'aesthetic');
  bindSeg('segTheme', 'theme');
  bindSeg('segDensity', 'density');

  document.querySelectorAll('#segAccent button').forEach(b => {
    b.addEventListener('click', () => {
      state.accent = b.dataset.c;
      applyState(); saveState();
      try {
        window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { accent: b.dataset.c } }, '*');
      } catch {}
    });
  });

  window.addEventListener('message', (e) => {
    if (!e.data) return;
    if (e.data.type === '__activate_edit_mode') document.getElementById('tweaksPanel').classList.add('open');
    if (e.data.type === '__deactivate_edit_mode') document.getElementById('tweaksPanel').classList.remove('open');
  });
  try {
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
  } catch {}

  // ========================================================
  // INITIAL LANGUAGE APPLICATION
  // ========================================================
  applyLang();

})();
