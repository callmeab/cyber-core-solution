// Post-build SEO step: emits a real index.html (HTTP 200) for every route with
// route-specific <title>/meta/canonical, plus 404.html and a fresh sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://codebyte.tech';
const dist = 'dist/cyber-core-solution/browser';
const indexPath = path.join(dist, 'index.html');
if (!fs.existsSync(indexPath)) process.exit(0);

const base = fs.readFileSync(indexPath, 'utf8');
const src = fs.readFileSync('src/app/core/services/projects.ts', 'utf8');
const esc = (t) => t.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const projects = [...src.matchAll(/\bid:\s*'([^']+)',\s*name:\s*'([^']+)'/g)].map((m) => ({ id: m[1], name: m[2] }));
for (const p of projects) {
  const block = src.slice(src.indexOf(`id: '${p.id}'`));
  p.tagline = /tagline:\s*'([^']*)'/.exec(block)?.[1] ?? '';
  p.image = /images:\s*\['([^']+)'/.exec(block)?.[1] ?? 'og-image.png';
}

function render(route, title, desc, image) {
  const url = `${SITE}${route}`;
  const set = (re, value) => (html) => html.replace(re, (_, pre) => pre + value);
  return [
    (h) => h.replace(/<title>.*?<\/title>/s, `<title>${esc(title)}</title>`),
    set(/(<meta name="description" content=")[^"]*/, esc(desc)),
    set(/(<link rel="canonical" href=")[^"]*/, url),
    set(/(<meta property="og:url" content=")[^"]*/, url),
    set(/(<meta property="og:title" content=")[^"]*/, esc(title)),
    set(/(<meta property="og:description" content=")[^"]*/, esc(desc)),
    set(/(<meta property="og:image" content=")[^"]*/, `${SITE}/${image}`),
    set(/(<meta name="twitter:url" content=")[^"]*/, url),
    set(/(<meta name="twitter:title" content=")[^"]*/, esc(title)),
    set(/(<meta name="twitter:description" content=")[^"]*/, esc(desc)),
    set(/(<meta name="twitter:image" content=")[^"]*/, `${SITE}/${image}`),
  ].reduce((h, fn) => fn(h), base);
}

for (const p of projects) {
  const dir = path.join(dist, 'portfolio', p.id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'index.html'),
    render(`/portfolio/${p.id}`, `${p.name} Case Study | CodeByte`, `${p.tagline}. Built by CodeByte.`, p.image),
  );
}
const legal = [
  { id: 'privacy', title: 'Privacy Policy | CodeByte', desc: 'How CodeByte collects and uses information submitted through codebyte.tech.' },
  { id: 'terms', title: 'Terms of Service | CodeByte', desc: 'Terms governing the use of the CodeByte website and enquiries.' },
];
for (const l of legal) {
  fs.mkdirSync(path.join(dist, l.id), { recursive: true });
  fs.writeFileSync(path.join(dist, l.id, 'index.html'), render(`/${l.id}`, l.title, l.desc, 'og-image.png'));
}
fs.copyFileSync(indexPath, path.join(dist, '404.html'));

const today = new Date().toISOString().slice(0, 10);
const urls = [{ loc: '/', pr: '1.0' }, ...projects.map((p) => ({ loc: `/portfolio/${p.id}`, pr: '0.8' })), ...legal.map((l) => ({ loc: `/${l.id}`, pr: '0.3' }))];
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map((u) => `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.pr}</priority>\n  </url>`)
      .join('\n') +
    `\n</urlset>\n`,
);
console.log(`SEO: generated ${projects.length} route pages, 404.html, sitemap.xml`);
