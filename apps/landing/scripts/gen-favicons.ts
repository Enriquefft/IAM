/**
 * scripts/gen-favicons.ts
 *
 * Generates apple-touch-icon.png (180×180) and favicon.ico (32×32) from
 * public/favicon.svg using Playwright (already a devDep — no new dependencies).
 *
 * Run via: pnpm gen:favicons
 *
 * Outputs:
 *   public/apple-touch-icon.png  — 180×180 PNG for iOS home screen
 *   public/favicon.ico           — 32×32 ICO (raw PNG data wrapped in ICO container)
 */

import { chromium } from "@playwright/test";
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const svgPath = join(publicDir, "favicon.svg");

const svgContent = readFileSync(svgPath, "utf-8");

/**
 * Renders the SVG at a given pixel size and returns a PNG Buffer.
 */
async function renderSvgToPng(
  svgSource: string,
  sizePx: number,
): Promise<Buffer> {
  // On NixOS / CI the bundled headless-shell may be missing libgbm.so.1.
  // Fall back to a system Chrome if PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH or
  // the well-known system paths are available.
  const systemChrome =
    process.env["PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH"] ??
    "/run/current-system/sw/bin/google-chrome-stable";

  const browser = await chromium.launch({
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
    executablePath: systemChrome,
  });

  try {
    const page = await browser.newPage();

    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgSource)}`;

    await page.setViewportSize({ width: sizePx, height: sizePx });

    await page.setContent(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body { width: ${sizePx}px; height: ${sizePx}px; background: transparent; }
            img { width: ${sizePx}px; height: ${sizePx}px; display: block; }
          </style>
        </head>
        <body>
          <img src="${dataUrl}" width="${sizePx}" height="${sizePx}" />
        </body>
      </html>
    `);

    await page.waitForLoadState("networkidle");

    const pngBuffer = await page.screenshot({
      type: "png",
      clip: { x: 0, y: 0, width: sizePx, height: sizePx },
      omitBackground: false,
    });

    return Buffer.from(pngBuffer);
  } finally {
    await browser.close();
  }
}

/**
 * Wraps a PNG buffer in a minimal ICO container (single 32×32 image).
 *
 * ICO format reference:
 *   https://en.wikipedia.org/wiki/ICO_(file_format)
 *
 * We embed the PNG directly (modern ICO supports PNG-compressed images).
 */
function wrapPngInIco(pngBuffer: Buffer, sizePx: number): Buffer {
  // ICO header: 6 bytes
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(1, 4); // image count: 1

  // Directory entry: 16 bytes
  const entry = Buffer.alloc(16);
  const size = sizePx > 255 ? 0 : sizePx; // 0 = 256 in ICO spec
  entry.writeUInt8(size, 0); // width
  entry.writeUInt8(size, 1); // height
  entry.writeUInt8(0, 2); // color palette size
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(pngBuffer.byteLength, 8); // image data size
  entry.writeUInt32LE(header.byteLength + 16, 12); // offset to image data

  return Buffer.concat([header, entry, pngBuffer]);
}

async function main(): Promise<void> {
  process.stdout.write("Generating apple-touch-icon.png (180×180)...\n");
  const png180 = await renderSvgToPng(svgContent, 180);
  writeFileSync(join(publicDir, "apple-touch-icon.png"), png180);
  process.stdout.write(`  Written: ${png180.byteLength} bytes\n`);

  process.stdout.write("Generating favicon.ico (32×32)...\n");
  const png32 = await renderSvgToPng(svgContent, 32);
  const icoBuffer = wrapPngInIco(png32, 32);
  writeFileSync(join(publicDir, "favicon.ico"), icoBuffer);
  process.stdout.write(`  Written: ${icoBuffer.byteLength} bytes\n`);

  process.stdout.write("Done.\n");
}

await main();
