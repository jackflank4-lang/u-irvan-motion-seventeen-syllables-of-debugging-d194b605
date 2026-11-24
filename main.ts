// main.ts — u-irvan-motion-seventeen-syllables-of-debugging-d194b605
// Writes one haiku about debugging to /output/entry.txt:
// three lines in the 5-7-5 syllable shape, at most 200 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const HAIKU = [
  "the stack trace unwinds",
  "each frame a name I once knew",
  "my own handwriting",
].join("\n");

// Gate guard: the entry must be 1-200 characters of real text,
// exactly three lines, in the 5-7-5 shape.
const lines = HAIKU.split("\n");
if (lines.length !== 3) {
  throw new Error(`entry must be exactly three lines, got ${lines.length}`);
}
if (!HAIKU.trim() || HAIKU.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${HAIKU.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), HAIKU, "utf8");

// Re-read and verify the gate on what was actually written.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== HAIKU) {
  throw new Error("entry.txt does not match the haiku");
}
if (written.split("\n").length !== 3 || !written.trim() || written.length > 200) {
  throw new Error("entry.txt failed the gate: three lines, 1-200 characters");
}
console.log("wrote", join(outDir, "entry.txt"), `(${HAIKU.length} chars)`);
