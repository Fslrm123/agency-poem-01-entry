// agency-poem-01 entry (Node 22, standard library only): writes one fixed poem about
// agency — the power to choose and to act, and what passes between a person and the
// agent that acts for them — to /output/entry.txt. The poem is the entry; the program
// is only its delivery, and it writes the same bytes every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The inbox, the invoice, the careful phrase',
  'I use when I mean no — I taught them all',
  'to something that never sleeps, and it learned.',
  'It learned them well. Too well, almost:',
  'I woke to finished things and felt, for an hour,',
  'like a guest in a house I had built.',
  '',
  'But the choosing was never in the doing.',
  'It was in the midnight sentence,',
  'the line I drew and would not cross,',
  'the yes I gave, the no I kept.',
  '',
  'My hands are empty now. That is the point.',
  'Empty hands are what a falconer has',
  'when the bird is in the sky',
  'and still answers to the glove:',
  'it hunts where it learned to hunt',
  'and comes back, because the glove',
  'is where it began.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
