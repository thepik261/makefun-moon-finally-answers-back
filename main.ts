// The Moon Finally Answers Back — make.fun bounty entry.
// Writes a single line, spoken as the Moon, to /output/entry.txt.
// Node stdlib only. Deterministic: the same line on every run.
// The line answers every wish, howl and 2 a.m. promise at once, in the
// Moon's own voice: wry, old, a little tired — with the comeback turn
// landing in the second half, before the line ends.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Four billion years of wishes, howls, and 2 a.m. promises \u2014 and not one of you has ever once wished me a good night back.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
try {
  chmodSync(outPath, 0o644);
} catch {
  // The grader reads outputs as another user; 0644 keeps entry.txt readable.
  // If chmod is unavailable in this environment, the default umask still applies.
}
console.log(`Wrote ${LINE.length} characters to ${outPath}`);
