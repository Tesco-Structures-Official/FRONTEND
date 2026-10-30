// Writes dist/app.html: a copy of dist/index.html WITHOUT the static homepage
// SEO tags (marked data-static-seo). Hosting rewrites every non-file URL to
// app.html, so only the real homepage (/) carries the homepage title,
// description and canonical in its raw HTML. Other pages get theirs from <Seo>.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const html = await fs.readFile(path.join(DIST, 'index.html'), 'utf8');

let out = html
  .replace(/[ \t]*<!-- Homepage SEO[\s\S]*?-->\r?\n/, '')
  .replace(/[ \t]*<title[^>]*data-static-seo[^>]*>[\s\S]*?<\/title>\r?\n?/g, '')
  .replace(/[ \t]*<(meta|link)\b[^>]*data-static-seo[^>]*>\r?\n?/g, '');
if (/data-static-seo/.test(out)) throw new Error('make-spa-fallback: static SEO tags left in app.html');
// Neutral title until React sets the page's own one; marked so <Seo> removes it.
out = out.replace('</head>', '    <title data-static-seo>Tesco Structures</title>\n  </head>');
await fs.writeFile(path.join(DIST, 'app.html'), out);
console.log('[spa-fallback] wrote dist/app.html');
