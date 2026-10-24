// Build-time prerenderer for the Tesco Structures SPA.
//
// WHY: This is a client-rendered React (Vite) app, so the raw HTML that Vite
// outputs (dist/index.html) does not contain the per-page SEO tags — React
// injects them at runtime. Social scrapers (Facebook, LinkedIn, X, WhatsApp)
// and "View Source" only read the raw HTML, so they never see those tags.
//
// This script fixes that WITHOUT changing how the app runs:
//   1. It serves the already-built dist/ folder locally.
//   2. It opens each route in headless Chromium (via Playwright, which the
//      project already depends on), lets React fully render, then captures the
//      final HTML (title, meta description, canonical, Open Graph, Twitter Card,
//      JSON-LD, and H1/H2/H3 — everything).
//   3. It writes that HTML to dist/<route>/index.html.
//
// After this runs, every page's tags appear in View Source and to social
// scrapers. The app still boots and works exactly as before.
//
// Run AFTER `vite build`:  node scripts/prerender.mjs   (or: npm run build:seo)

import http from 'node:http';
import { promises as fs } from 'node:fs';
import { existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

// Routes to prerender. These are the pages that carry per-page SEO tags.
// (Add more here if you give other routes their own <Seo /> tags.)
const ROUTES = [
  '/',
  '/peb-contractors-in-chennai',
  '/tensile-roofing-chennai',
  '/civil-construction-services',
  '/architectural-design-structural-consultancy-chennai',
  '/roofing-solutions-chennai',
  '/about-us',
  '/careers',
  '/blog/tensile-car-parking-shed-chennai',
  '/blog/best-roofing-sheets-in-coimbatore',
  '/blog/tensile-structure-chennai',
  '/blog/tensile-roofing-coimbatore-guide',
  '/blog/tensile-roofing-coimbatore',
  '/blog/shingles-roofing-coimbatore',
  '/blog/tensile-roofing-outdoor-structures',
  '/blog/best-peb-contractors-in-chennai-warehouses-factories-sheds',
  '/blog/turnkey-peb-contractors-in-chennai',
  '/blog/best-peb-contractors-in-chennai',
  '/blog/best-peb-companies-in-chennai',
  '/blog/peb-warehouse-construction-chennai',
  '/blog/peb-builders-in-chennai',
  '/blog/peb-companies-in-chennai',
  '/blog/peb-specialists-chennai',
  '/blog/reliable-peb-builders-in-chennai',
  '/blog/pre-engineered-steel-buildings-time-cost',
  '/blog/trusted-peb-construction-company-in-chennai',
];

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

// Minimal static file server for dist/, with SPA fallback to index.html.
function createServer() {
  return http.createServer(async (req, res) => {
    try {
      const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      let filePath = path.join(DIST, urlPath);

      // If the request maps to a real file, serve it.
      if (existsSync(filePath) && statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
        res.end(await fs.readFile(filePath));
        return;
      }

      // Otherwise fall back to the SPA entry so React can route it client-side.
      const indexHtml = await fs.readFile(path.join(DIST, 'index.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(indexHtml);
    } catch (err) {
      res.writeHead(500);
      res.end('Prerender static server error: ' + err.message);
    }
  });
}

async function main() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    console.error('\n[prerender] dist/index.html not found. Run "vite build" first.\n');
    process.exit(1);
  }

  const server = createServer();
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;
  console.log(`[prerender] serving dist/ at ${base}`);

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Capture all routes into memory first, then write — so we never read a
  // half-written index.html during the run.
  const outputs = [];

  for (const route of ROUTES) {
    const url = base + route;
    process.stdout.write(`[prerender] ${route} ... `);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });

    // Wait until React has actually rendered content into #root.
    await page.waitForFunction(
      () => {
        const root = document.getElementById('root');
        return root && root.children.length > 0;
      },
      { timeout: 30000 }
    );

    // JSON-LD is injected in a useEffect, so give it a beat to appear.
    // (Not all routes must have it; ignore timeout.)
    await page
      .waitForSelector('script[type="application/ld+json"]', { timeout: 5000 })
      .catch(() => {});

    // Deduplicate the <head> before capturing, so the baked HTML contains
    // exactly ONE clean set of SEO tags (removes the stale static
    // "tesco-structures" title and any duplicate meta/link/JSON-LD). This keeps
    // the output correct and idempotent even if prerender is run repeatedly.
    await page.evaluate(() => {
      // Title: keep only the one React actually set (matches document.title),
      // drop the old static <title> and any extras.
      const titles = [...document.querySelectorAll('head > title')];
      titles.forEach((t) => {
        if (t.textContent.trim() !== document.title.trim()) t.remove();
      });
      [...document.querySelectorAll('head > title')].slice(1).forEach((t) => t.remove());

      // Meta / canonical: keep the first of each unique tag, remove duplicates.
      const seen = new Set();
      const rules = [
        ['meta[name="description"]', () => 'description'],
        ['link[rel="canonical"]', () => 'canonical'],
        ['meta[property^="og:"]', (el) => 'og:' + el.getAttribute('property')],
        ['meta[name^="twitter:"]', (el) => 'tw:' + el.getAttribute('name')],
      ];
      for (const [selector, keyOf] of rules) {
        for (const el of document.querySelectorAll(selector)) {
          const key = keyOf(el);
          if (seen.has(key)) el.remove();
          else seen.add(key);
        }
      }

      // JSON-LD: remove duplicate blocks with identical content.
      const ldSeen = new Set();
      for (const s of document.querySelectorAll('script[type="application/ld+json"]')) {
        const key = s.textContent.replace(/\s+/g, ' ').trim();
        if (ldSeen.has(key)) s.remove();
        else ldSeen.add(key);
      }
    });

    const html = await page.content();
    outputs.push({ route, html });
    console.log('captured');
  }

  await browser.close();
  await new Promise((resolve) => server.close(resolve));

  // Write each captured route to dist/<route>/index.html ('/' -> dist/index.html).
  for (const { route, html } of outputs) {
    const outDir = route === '/' ? DIST : path.join(DIST, route);
    await fs.mkdir(outDir, { recursive: true });
    const outFile = path.join(outDir, 'index.html');
    await fs.writeFile(outFile, html, 'utf8');
    console.log(`[prerender] wrote ${path.relative(DIST, outFile) || 'index.html'}`);
  }

  console.log(`\n[prerender] done — ${outputs.length} pages prerendered.\n`);
}

main().catch((err) => {
  console.error('[prerender] FAILED:', err);
  process.exit(1);
});
