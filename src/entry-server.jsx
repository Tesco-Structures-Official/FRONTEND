import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App.jsx';
import { getPostBySlug } from './data/blogPosts';
import { homeSchemas, pebSchemas, tensileSchemas, civilSchemas, archSchemas, roofingSchemas, aboutSchemas, careersSchemas } from './seo/schemas';

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>
  );
}

// JSON-LD per prerendered route (the <Seo> component injects these in the browser).
export const schemasByRoute = {
  '/': homeSchemas,
  '/peb-contractors-in-chennai': pebSchemas,
  '/tensile-roofing-chennai': tensileSchemas,
  '/civil-construction-services': civilSchemas,
  '/architectural-design-structural-consultancy-chennai': archSchemas,
  '/roofing-solutions-chennai': roofingSchemas,
  '/about-us': aboutSchemas,
  '/careers': careersSchemas,
};

// JSON-LD for any route: page schemas above, or a blog post's own schemas.
export function schemasFor(route) {
  if (schemasByRoute[route]) return schemasByRoute[route];
  const m = route.match(/^\/blog\/([^/]+)$/);
  return m ? getPostBySlug(m[1])?.schemas || [] : [];
}
