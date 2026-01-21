import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { books } from "../dist/data/books.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://melhoresprecos.shop";
const OUTPUT_PATH = path.resolve(__dirname, "../public/sitemap.xml");

function formatDate(date = new Date()) {
  return date.toISOString().split("T")[0];
}

function generateUrls() {
  const urls = [];

  // Home
  urls.push(`
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${formatDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);

  // Páginas de livros
  for (const book of books) {
    if (!book?.id) continue;

    urls.push(`
  <url>
    <loc>${SITE_URL}/livro/${book.id}</loc>
    <lastmod>${formatDate()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  return urls.join("");
}

function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateUrls()}
</urlset>
`;

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, xml.trim());

  console.log(`✅ Sitemap gerado em: ${OUTPUT_PATH}`);
  console.log(`📚 Total de URLs: ${books.length + 1}`);
}

generateSitemap();
