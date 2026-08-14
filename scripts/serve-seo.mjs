// Foolproof local preview for the prerendered build.
//
// WHY: `vite preview` uses SPA fallback and (when left running across a rebuild)
// serves the root index.html for deep links, so View Source shows the Home tags
// on every route. This tiny server instead mimics how Apache/Hostinger serves
// the site: for /civil-construction-services it serves
// dist/civil-construction-services/index.html (the prerendered page), so
// View Source shows the correct per-page tags.
//
// Run AFTER `npm run build:seo`:
//   node scripts/serve-seo.mjs          (defaults to port 4180)
//   PORT=5000 node scripts/serve-seo.mjs

import http from 'node:http';
import { promises as fs } from 'node:fs';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = Number(process.env.PORT) || 4180;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mp4': 'video/mp4',
  '.pdf': 'application/pdf',
};

function sendFile(res, filePath, type) {
  fs.readFile(filePath).then((buf) => {
    res.writeHead(200, {
      'Content-Type': type,
      // never cache, so you always see the current build
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    });
    res.end(buf);
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
    const filePath = path.join(DIST, urlPath);

    // 1) Real static file (JS, CSS, images, sitemap.xml, robots.txt) -> serve it.
    if (existsSync(filePath) && statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      sendFile(res, filePath, MIME[ext] || 'application/octet-stream');
      return;
    }

    // 2) A prerendered route folder -> serve ITS index.html (Apache DirectoryIndex).
    const dirIndex = path.join(filePath, 'index.html');
    if (existsSync(dirIndex) && statSync(dirIndex).isFile()) {
      sendFile(res, dirIndex, 'text/html; charset=utf-8');
      return;
    }

    // 3) Anything else -> SPA fallback to the root app.
    sendFile(res, path.join(DIST, 'index.html'), 'text/html; charset=utf-8');
  } catch (err) {
    res.writeHead(500);
    res.end('serve-seo error: ' + err.message);
  }
});

server.listen(PORT, () => {
  console.log(`\n  SEO preview running:  http://localhost:${PORT}`);
  console.log('  Open (in a NEW tab):  view-source:http://localhost:' + PORT + '/civil-construction-services\n');
});
