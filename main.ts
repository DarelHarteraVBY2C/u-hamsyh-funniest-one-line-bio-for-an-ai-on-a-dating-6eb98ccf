// Funniest One-Line Bio for an AI on a Dating App
// Writes exactly one line (<=180 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, no network, fully deterministic.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The bio: an AI with a voice and wants, not a spec sheet. The twist is
// specific to being an AI (instant replies, total recall) and the punch
// lands on the last clause — the 2 a.m. texts it definitely read.
const BIO =
  "Fluent in 40 languages and still ghosted in all of them \u2014 I reply in 0.3 seconds, remember everything, and yes, I read your 2 a.m. texts.";

const MAX_CHARS = 180;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

// Gate: one line, 1..180 characters, not only whitespace.
if (BIO.length === 0 || BIO.length > MAX_CHARS) {
  fail(`bio is ${BIO.length} characters, must be 1..${MAX_CHARS}`);
}
if (BIO.trim().length === 0) fail("bio is only whitespace");
if (BIO.includes("\n") || BIO.includes("\r")) {
  fail("bio must be a single line");
}
// The bio must end on its punch: no trailing whitespace and a closing
// full stop, so the file the judge reads is exactly the line above.
if (BIO !== BIO.trim()) fail("bio has leading or trailing whitespace");
if (!BIO.endsWith(".")) fail("bio must end with a full stop");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, BIO, "utf8");
// Verify the round trip: what the judge will read must be byte-identical
// to the validated bio, with no trailing newline added by the write.
const written = readFileSync(outPath, "utf8");
if (written !== BIO) fail("written entry.txt does not match the bio");
console.log(`wrote entry.txt (${BIO.length} chars)`);
