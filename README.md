# geninvestor-skills

**Agent skills for careful investing research.** Four installable skills that make an AI assistant keep its receipts: write theses that can be proven wrong, check every number against its source, screen against your own rules, and resolve research criteria against primary evidence.

Information, not advice. None of these skills tells anyone what to buy or sell, and a validator in this repository fails the build if one ever does.

## Install

Works with Claude Code, Cursor, GitHub Copilot, Gemini CLI, Cline and other agents that read `SKILL.md` files:

```bash
git clone --branch agent/codex/review-fixes --depth 1 https://github.com/frankxai/geninvestor-skills.git
npx skills add ./geninvestor-skills/skills
```

These commands target the draft trial explicitly. To inspect the four skills before installing, append `--list` to the second command. The clone avoids ambiguity in installers that split slash-containing branch names in GitHub tree URLs. The default-branch install is available after merge.

Or copy a folder from `skills/` into your agent's skills directory.

## The skills

| Skill | Use it when | What you get |
|---|---|---|
| [thesis-tracker](skills/thesis-tracker/SKILL.md) | You open a thesis, new information arrives, or you ask "does it still hold?" | A claim you can lose, its evidence, kill criteria written in advance, the case against, and a status set by rule (intact, watch, broken) |
| [source-check](skills/source-check/SKILL.md) | You review a memo, an AI summary or a screen result with figures in it | Every number traced to a primary source, with units, as-of date and recomputed derivations, and a pass or fail verdict |
| [opportunity-screen](skills/opportunity-screen/SKILL.md) | You want ideas | Up to five candidates found against your written mandate, each with what would prove it wrong and the case against. Candidates for research, never recommendations |
| [calibration-log](skills/calibration-log/SKILL.md) | You resolve a dated research criterion | Append-only research criteria and source-linked resolutions; no generated forecasts |

## Principles

1. **Every number has a source and an as-of date.** No source, no number.
2. **Label what you know.** Fact, inference or opinion.
3. **Write down how you would be wrong** before you have a stake in being right.
4. **Score yourself in public or private, but score yourself.** Research criteria are dated before resolution and never edited.
5. **Say when data is stale or missing.** An unchecked criterion is "cannot be checked", not "fine".
6. **No action language.** Nothing here says buy, sell, size or hold.

## Part of GenInvestor

These skills work on their own, and they are the same disciplines that [GenInvestor](https://github.com/frankxai/GenInvestor) enforces in code: an audit that blocks unbacked numbers, an autonomy gate capped at simulation, and a ledger of calls. Use the skills with any assistant; use GenInvestor when you want the discipline enforced rather than requested.

To follow what else is happening in this space, see [awesome-investor-agent-skills](https://github.com/frankxai/awesome-investor-agent-skills), a catalogue with a weekly research loop.

## Contributing

Add a folder under `skills/<name>/SKILL.md`. `node scripts/validate-skills.mjs` checks the structure (frontmatter, "Use when" description, Workflow, Output and Rules sections) and rejects action and hype language, with prohibitions scoped to their own clause. Run the tests with `node --test "scripts/*.test.mjs"`.

Good skills are specific, name their failure modes, and end with rules that say what the skill must never do.

## Disclaimer

These skills structure research. They do not know your circumstances and do not perform any suitability check. Outputs can be wrong, including confidently wrong when an AI system writes them. You are responsible for your own decisions.

## Licence

Apache-2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
