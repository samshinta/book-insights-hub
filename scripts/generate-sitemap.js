import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://melhoresprecos.shop";
const OUTPUT_PATH = path.resolve(__dirname, "../public/sitemap.xml");
const BOOKS_PATH = path.resolve(__dirname, "../src/data/books.sitemap.json");

function formatDate(date = new Date()) {
  return date.toISOString().split("T")[0];
}

function loadBooks() {
  if (!fs.existsSync(BOOKS_PATH)) {
    throw new Error("Arquivo books.sitemap.json não encontrado");
  }
  return JSON.parse(fs.readFileSync(BOOKS_PATH, "utf-8"));
}

function generateUrls(books) {
  const urls = [];

  urls.push(`
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${formatDate()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`);

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
  const books = loadBooks();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${generateUrls(books)}
</urlset>`;

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, xml);

  console.log(`✅ Sitemap gerado: ${OUTPUT_PATH}`);
  console.log(`📚 URLs: ${books.length + 1}`);
}

generateSitemap();
