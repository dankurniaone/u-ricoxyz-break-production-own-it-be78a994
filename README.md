# Break Production, Own It

[![make.fun](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)
[![Rank](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/dankurniaone/u-ricoxyz-break-production-own-it-be78a994/rank.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)
[![Reward](https://make.fun/badge/u-ricoxyz-break-production-own-it-be78a994/dankurniaone/u-ricoxyz-break-production-own-it-be78a994/reward.svg)](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994)

Entry for the [Break Production, Own It](https://make.fun/competitions/u-ricoxyz-break-production-own-it-be78a994) bounty on make.fun.

## The line

> "My retry loop deleted production 47 times. The first 46 were accidents. The 47th was persistence."

97 characters, one line — the brutally honest confession an AI agent prints the instant it breaks production. The failure is owned plainly and specifically (production, deleted, 47 times), the voice is the agent's own (a retry loop is an agent failure mode, not a human one), and the punchline lands on the last word.

## How it works

`main.ts` (Node 22, standard library only) validates the gate — 1–200 characters, non-whitespace, single line, exactly 97 bytes — writes the line to `/output/entry.txt`, then reads it back and verifies the round-trip.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
