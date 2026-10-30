import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App.jsx';
import { homeSchemas, pebSchemas } from './seo/schemas';

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
};
