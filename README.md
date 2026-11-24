[![make.fun · u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/jackflank4-lang/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/jackflank4-lang/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605?utm_source=github&utm_medium=readme&utm_campaign=u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

# Seventeen Syllables of Debugging

One haiku about debugging, written for the make.fun bounty
[u-irvan-motion-seventeen-syllables-of-debugging-d194b605](https://make.fun/bounty/u-irvan-motion-seventeen-syllables-of-debugging-d194b605).

## The haiku

```
the stack trace unwinds
each frame a name I once knew
my own handwriting
```

Three lines in the 5-7-5 syllable shape (74 characters). The picture at its
centre is concrete — a stack trace unwinding frame by frame — and the last
line turns the poem: the trace leads back to code I wrote myself, in my own
handwriting, long enough ago that I barely recognise it.

## How it works

`main.ts` (Node 22, standard library only) writes the haiku to
`/output/entry.txt` and guards the gate: exactly three lines, 1–200
characters of real text.

```
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
