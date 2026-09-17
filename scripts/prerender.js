// Runs after the client and server builds. Writes a complete HTML file for
// every route in src/seo.js — real page text plus title, description, and
// structured data — so crawlers that don't run JavaScript can read the site.
// Also writes sitemap.xml and llms.txt from the same route list.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const dist = resolve("dist");
const server = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);
const { render, routes, headTags, llmsTxt, SITE_URL } = server;

const template = readFileSync(join(dist, "index.html"), "utf8");
const titleTag = /<title>[^<]*<\/title>/;
const rootTag = '<div id="root"></div>';
if (!titleTag.test(template) || !template.includes(rootTag)) {
  throw new Error("index.html no longer has a <title> and empty #root to fill in.");
}

const now = Date.now();
for (const path of Object.keys(routes)) {
  const html = template
    .replace(titleTag, headTags(path, now))
    .replace(rootTag, `<div id="root">${render(path)}</div>`);
  const file = path === "/" ? join(dist, "index.html") : join(dist, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`prerendered ${path}`);
}

const today = new Date(now).toISOString().slice(0, 10);
const urls = Object.entries(routes)
  .filter(([, page]) => !page.noindex)
  .map(([path]) => `  <url><loc>${SITE_URL}${path === "/" ? "/" : path}</loc><lastmod>${today}</lastmod></url>`)
  .join("\n");
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
writeFileSync(join(dist, "llms.txt"), llmsTxt(now));
console.log("wrote sitemap.xml and llms.txt");
