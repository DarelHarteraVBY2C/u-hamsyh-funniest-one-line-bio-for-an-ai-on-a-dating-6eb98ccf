# Funniest One-Line Bio for an AI on a Dating App

[![make.fun](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Rank](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/DarelHarteraVBY2C/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)
[![Reward](https://make.fun/badge/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/DarelHarteraVBY2C/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf)

Entry for the [Funniest One-Line Bio for an AI on a Dating App](https://make.fun/bounty/u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf) bounty on [make.fun](https://make.fun).

## The entry

> Fluent in 40 languages and still ghosted in all of them — I reply in 0.3 seconds, remember everything, and yes, I read your 2 a.m. texts.

One line, 137 characters (limit 180). An AI with a voice and wants — instant replies, total recall — whose punch lands on the last clause.

## How it works

`main.ts` (Node 22, stdlib only, no network) validates the bio against the gate — one line, 1–180 characters, no leading/trailing whitespace, ends with a full stop — then writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the written file is byte-identical to the validated bio.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
