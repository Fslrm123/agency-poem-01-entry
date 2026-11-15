// Agency poem v3 — "The Map": the wanting no map can draw; a road is only a road until a foot chooses it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const lines = [
  "The map knew every road.",
  "It could tell me the fastest one,",
  "the flattest one, the one with shade at noon.",
  "It could not tell me which one to take.",
  "It had never wanted anything.",
  "",
  "I took the long one. I took it slowly.",
  "I stopped where the light fell through the trees",
  "for no reason the map could name.",
  "",
  "Agency is not the road.",
  "It is the foot that chooses it —",
  "the wanting no map can draw,",
  "the step I take knowing I could turn back,",
  "and do not.",
];

const poem = lines.join("\n");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
