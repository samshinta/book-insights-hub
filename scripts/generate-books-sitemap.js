import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⚠️ AJUSTE SE NECESSÁRIO
const BOOKS_TS_PATH = path.resolve(__dirname, "../src/data/books.ts");
const OUTPUT_PATH = path.resolve(__dirname, "../src/data/books.sitemap.json");

// Leitura simples do arquivo TS
const content = fs.readFileSync(BOOKS_TS_PATH, "utf-8");

// Extrai ids via regex (robusto para objetos grandes)
const idRegex = /id:\s*["'`](.*?)["'`]/g;

const ids = [];
let match;

while ((match = idRegex.exec(content)) !== null) {
  ids.push({ id: match[1] });
}

if (ids.length === 0) {
  console.error("❌ Nenhum id encontrado em books.ts");
  process.exit(1);
}

fs.writeFileSync(OUTPUT_PATH, JSON.stringify(ids, null, 2));

console.log(`✅ books.sitemap.json gerado (${ids.length} livros)`);
