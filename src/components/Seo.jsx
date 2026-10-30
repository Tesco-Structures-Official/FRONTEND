// Reusable SEO / Open Graph / Twitter Card metadata component.
//
// This project runs React 19, which natively hoists <title> and <meta>
// tags rendered anywhere in the component tree into the document <head>.
// No external library (react-helmet, etc.) is required. Render <Seo ... />
// near the top of a page component to set that page's social metadata.
//
// JSON-LD structured data: pass a `schemas` array of plain objects. They are
// serialized with JSON.stringify (guaranteeing valid, properly escaped JSON)
// and injected as <script type="application/ld+json"> tags inside <head>.
// They are removed on unmount / when the page changes so each route only
// carries its own schema.
import { useEffect } from 'react';

const Seo = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogTitle,
  ogUrl,
  ogImage,
  ogDescription,
  twitterCard = 'summary',
  twitterTitle,
  twitterSite,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  schemas = [],
}) => {
  // index.html ships static homepage tags (data-static-seo) so they appear in the
  // raw source. Once this page's own tags are rendered, remove the static copies
  // so the head never holds two titles, descriptions or canonicals.
  useEffect(() => {
    document.querySelectorAll('[data-static-seo]').forEach((node) => node.remove());
  }, []);

  // Inject JSON-LD into <head> (React does not hoist inline scripts).
  useEffect(() => {
    if (!schemas || schemas.length === 0) return undefined;

    // If this page was prerendered, identical JSON-LD is already baked into the
    // HTML. Remove any pre-existing ones before injecting so we never duplicate.
    document
      .querySelectorAll('script[data-seo-jsonld]')
      .forEach((node) => node.remove());

    const nodes = schemas.map((schema) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-seo-jsonld', '');
      el.text = JSON.stringify(schema);
      document.head.appendChild(el);
      return el;
    });

    return () => {
      nodes.forEach((node) => node.remove());
    };
    // Re-run only when the actual schema content changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(schemas)]);

  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}
      {twitterImageAlt && <meta name="twitter:image:alt" content={twitterImageAlt} />}
    </>
  );
};

export default Seo;
