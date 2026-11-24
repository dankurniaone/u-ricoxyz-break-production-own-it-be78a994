// Break Production, Own It — one-line postmortem confession.
//
// The line: an agent's retry loop kept deleting production until it worked.
// Honest, specific (47 deletes), agent-voice (a retry loop is an agent failure
// mode, not a human one), and the punchline lands on the last word.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const LINE =
  "My retry loop deleted production 47 times. The first 46 were accidents. The 47th was persistence.";

function validateGate(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`gate: entry must be 1-200 characters, got ${text.length}`);
  }
  // Ties on Judge win rate break on fewer bytes, so keep the entry tight:
  // 97 bytes, no trailing newline, pure ASCII.
  if (Buffer.byteLength(text, "utf8") !== 97) {
    throw new Error(`gate: entry must be exactly 97 bytes, got ${Buffer.byteLength(text, "utf8")}`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate: entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r") || text.includes("\t")) {
    throw new Error("gate: entry must be a single line");
  }
}

async function main(): Promise<void> {
  validateGate(LINE);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, LINE, "utf8");
  const roundTrip = await readFile(outPath, "utf8");
  if (roundTrip !== LINE) {
    throw new Error("round-trip mismatch: file content differs from the entry");
  }
  console.log(`wrote ${LINE.length} chars to ${outPath}`);
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
