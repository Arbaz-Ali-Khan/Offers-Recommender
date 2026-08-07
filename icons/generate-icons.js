/**
 * PNG Generator for Chrome Extension Icons (16x16, 48x48, 128x128)
 * Pure Node.js script using zlib & CRC32 to create valid RGBA PNG files.
 */

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Standard CRC32 calculation table for PNG chunks
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);

  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const crcVal = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crcVal, 0);

  return Buffer.concat([lenBuf, typeBuf, data, crcBuf]);
}

function createCardPNG(size) {
  const width = size;
  const height = size;
  const rawData = Buffer.alloc(height * (1 + width * 4));

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (1 + width * 4);
    rawData[rowOffset] = 0; // Filter byte: 0 (None)

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;

      // Card boundary (rounded rectangle in center)
      const margin = Math.floor(size * 0.1);
      const cardX = x - margin;
      const cardY = y - margin;
      const cardW = width - 2 * margin;
      const cardH = height - 2 * margin;

      if (cardX >= 0 && cardX < cardW && cardY >= 0 && cardY < cardH) {
        // Metallic Gold/Blue Card Gradient
        const ratio = (x + y) / (width + height);
        // RGBA
        const r = Math.floor(212 * (1 - ratio) + 15 * ratio);
        const g = Math.floor(175 * (1 - ratio) + 82 * ratio);
        const b = Math.floor(55 * (1 - ratio) + 186 * ratio);

        // Chip / Accent (top-left inside card)
        const isChip = (cardX >= Math.floor(cardW * 0.15) && cardX <= Math.floor(cardW * 0.35) &&
                        cardY >= Math.floor(cardH * 0.3) && cardY <= Math.floor(cardH * 0.5));

        if (isChip) {
          rawData[pxOffset] = 255;     // R
          rawData[pxOffset + 1] = 223; // G
          rawData[pxOffset + 2] = 0;   // B
          rawData[pxOffset + 3] = 255; // A
        } else {
          rawData[pxOffset] = r;
          rawData[pxOffset + 1] = g;
          rawData[pxOffset + 2] = b;
          rawData[pxOffset + 3] = 255;
        }
      } else {
        // Transparent background outside card
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  // PNG Header
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // Bit depth: 8
  ihdr[9] = 6; // Color type: 6 (RGBA)
  ihdr[10] = 0; // Compression: 0
  ihdr[11] = 0; // Filter: 0
  ihdr[12] = 0; // Interlace: 0

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', zlib.deflateSync(rawData));
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Generate icon files
const sizes = [16, 48, 128];
const iconsDir = path.join(__dirname);

sizes.forEach(size => {
  const filePath = path.join(iconsDir, `icon${size}.png`);
  const pngBuffer = createCardPNG(size);
  fs.writeFileSync(filePath, pngBuffer);
  console.log(`Generated ${filePath} (${pngBuffer.length} bytes)`);
});
