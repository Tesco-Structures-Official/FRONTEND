// Renders the homepage to static HTML at build time and places it inside
// <div id="root"> in dist/index.html, so the H1/H2 headings and page text are
// in the raw page source (View Source / crawlers), not only after JavaScript runs.
// On load, React's createRoot replaces this markup with the live app.
// Runs after `vite build` (client) and `vite build --ssr src/entry-server.jsx`.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const { render } = await import(pathToFileURL(path.join(ROOT, 'dist-ssr', 'entry-server.js')).href);

let body = render('/');
// React 19 inlines <title>/<meta>/<link> from <Seo>; the head already has them.
body = body
  .replace(/<title[^>]*>[\s\S]*?<\/title>/g, '')
  .replace(/<meta\b[^>]*\/?>/g, '')
  .replace(/<link\b[^>]*rel="canonical"[^>]*\/?>/g, '');

const h1 = (body.match(/<h1\b/g) || []).length;
const h2 = (body.match(/<h2\b/g) || []).length;
if (h1 !== 1) throw new Error(`prerender-home: expected 1 <h1>, found ${h1}`);

const file = path.join(DIST, 'index.html');
const html = await fs.readFile(file, 'utf8');
const empty = '<div id="root"></div>';
if (!html.includes(empty)) throw new Error('prerender-home: empty #root not found in dist/index.html');
await fs.writeFile(file, html.replace(empty, `<div id="root">${body}</div>`));
console.log(`[prerender-home] homepage HTML written (${h1} h1, ${h2} h2, ${body.length} chars)`);
