// Agency poem v2 — revised falconer poem (511 chars), resubmission replacing v1.
// Writes the poem to $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const poem = `The glove is empty. That is the point.
The falconer does not lose the bird
by opening her hand — she lends the sky,
and the sky lends it back.

It hunts where it learned to hunt,
it chooses the wind, the stoop, the kill.
My work was never the flight.
My work was the line I drew and would not cross,
the yes I gave, the no I kept,
the midnight sentence that said: go.

Agency is not the doing.
It is the hand that opens
and the bird that comes back —
not because it must, but because it can leave,
and does not.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), poem, "utf8");
