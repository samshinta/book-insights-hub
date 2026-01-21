import fs from "fs";
import { XMLParser } from "fast-xml-parser";

const sitemapPath = "public/sitemap.xml";

if (!fs.existsSync(sitemapPath)) {
  console.error("❌ sitemap.xml não encontrado");
  process.exit(1);
}

const xml = fs.readFileSync(sitemapPath, "utf-8");

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
});

let data;
try {
  data = parser.parse(xml);
} catch {
  console.error("❌ XML malformado");
  process.exit(1);
}

if (!data.urlset || !data.urlset.url) {
  console.error("❌ Estrutura inválida (esperado <urlset><url>)");
  process.exit(1);
}

const urls = Array.isArray(data.urlset.url)
  ? data.urlset.url
  : [data.urlset.url];

for (const u of urls) {
  if (!u.loc) {
    console.error("❌ URL sem <loc>");
    process.exit(1);
  }
}

console.log(`✅ Sitemap válido (${urls.length} URLs)`);
