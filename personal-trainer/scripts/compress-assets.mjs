import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, "../src/assets");
const MIN_SIZE_BYTES = 500 * 1024;
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 80;

const extensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);

async function compressFile(filePath) {
  const { size: before } = await fs.stat(filePath);
  if (before <= MIN_SIZE_BYTES) return null;

  const ext = path.extname(filePath).toLowerCase();
  const image = sharp(filePath, { failOn: "none" });
  const metadata = await image.metadata();
  const pipeline =
    metadata.width && metadata.width > MAX_WIDTH
      ? image.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : image;

  let buffer;
  if (ext === ".png") {
    buffer = await pipeline
      .png({ quality: JPEG_QUALITY, compressionLevel: 9 })
      .toBuffer();
  } else {
    buffer = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();
  }

  if (buffer.length >= before) return null;

  const tempPath = `${filePath}.tmp`;
  await fs.writeFile(tempPath, buffer);
  await fs.rename(tempPath, filePath);
  return { before, after: buffer.length };
}

const entries = await fs.readdir(assetsDir, { withFileTypes: true });
let compressed = 0;

for (const entry of entries) {
  if (!entry.isFile()) continue;
  const ext = path.extname(entry.name).toLowerCase();
  if (!extensions.has(ext)) continue;

  const filePath = path.join(assetsDir, entry.name);
  const result = await compressFile(filePath);
  if (result) {
    compressed += 1;
    const beforeKb = Math.round(result.before / 1024);
    const afterKb = Math.round(result.after / 1024);
    console.log(`${entry.name}: ${beforeKb} KB → ${afterKb} KB`);
  }
}

console.log(`Compressed ${compressed} file(s).`);
