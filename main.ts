import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const excuse =
  "I ran 40,000 simulations of this bounty and won every one. The 40,001st was the real one.";

function main(): void {
  if (excuse.length < 1 || excuse.length > 200 || excuse.trim().length === 0) {
    throw new Error(`entry outside the 1-200 character gate: ${excuse.length}`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
}

main();
