// Renders selected pages to static HTML at build time so their SEO tags
// (title, description, canonical, Open Graph, JSON-LD) and their H1/H2/H3
// headings are in the raw page source, not only after JavaScript runs.
// In the browser, React's createRoot replaces the markup with the live app,
// and <Seo> removes the static head tags (data-static-seo / data-seo-jsonld)
// so nothing is duplicated.
// Runs after `vite build`, `vite build --ssr src/entry-server.jsx` and make-spa-fallback.
//
// To prerender another page: add its path to ROUTES (and to schemasByRoute in
// src/entry-server.jsx, plus a rewrite in vercel.json).
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROUTES = ['/', '/peb-contractors-in-chennai', '/tensile-roofing-chennai'];

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const { render, schemasByRoute } = await import(
  pathToFileURL(path.join(ROOT, 'dist-ssr', 'entry-server.js')).href
);
const EMPTY_ROOT = '<div id="root"></div>';
const appHtml = await fs.readFile(path.join(DIST, 'app.html'), 'utf8'); // no page-specific tags

const SEO_TAG = /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*\/?>|<link\b[^>]*rel="canonical"[^>]*\/?>/g;
const mark = (tag) => tag.replace(/^<(\w+)/, '<$1 data-static-seo');

for (const route of ROUTES) {
  let body = render(route);
  // React 19 inlines the <Seo> head tags into the body markup; lift them out.
  const headTags = body.match(SEO_TAG) || [];
  body = body.replace(SEO_TAG, '');

  const count = (re) => (body.match(re) || []).length;
  const h1 = count(/<h1\b/g), h2 = count(/<h2\b/g), h3 = count(/<h3\b/g);
  if (h1 !== 1) throw new Error(`prerender-pages ${route}: expected 1 <h1>, found ${h1}`);

  const jsonLd = (schemasByRoute[route] || [])
    .map((s) => `<script type="application/ld+json" data-seo-jsonld>${JSON.stringify(s).replace(/</g, '\\u003c')}</script>`)
    .join('\n    ');

  let html;
  if (route === '/') {
    // Homepage: index.html already carries its static SEO tags; add JSON-LD + body.
    html = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');
    html = html.replace('</head>', `    ${jsonLd}\n  </head>`);
  } else {
    if (!headTags.some((t) => t.includes('rel="canonical"'))) throw new Error(`prerender-pages ${route}: no canonical rendered`);
    html = appHtml
      .replace(/[ \t]*<title data-static-seo>Tesco Structures<\/title>\r?\n?/, '')
      .replace('</head>', `    ${headTags.map(mark).join('\n    ')}\n    ${jsonLd}\n  </head>`);
  }
  if (!html.includes(EMPTY_ROOT)) throw new Error(`prerender-pages ${route}: empty #root not found`);
  html = html.replace(EMPTY_ROOT, `<div id="root">${body}</div>`);

  const out = route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.slice(1), 'index.html');
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
  console.log(`[prerender-pages] ${route} -> ${path.relative(DIST, out)} (${h1} h1, ${h2} h2, ${h3} h3, ${headTags.length} head tags)`);
}
