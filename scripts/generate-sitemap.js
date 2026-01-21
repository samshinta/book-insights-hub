import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = "https://melhoresprecos.shop";

const booksPath = path.join(__dirname, "../src/data/books.sitemap.json");
const books = JSON.parse(fs.readFileSync(booksPath, "utf-8"));

function today() {
  return new Date().toISOString().split("T")[0];
}

const urls = books.map(
  (book) => `
  <url>
    <loc>${SITE_URL}/livro/${book.id}</loc>
    <lastmod>${today()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${urls.join("")}
</urlset>
`;

const outputPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outputPath, sitemap.trim());

console.log("✔ sitemap.xml gerado com sucesso");
