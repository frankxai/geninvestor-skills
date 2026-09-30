---
name: thesis-tracker
description: Write, update and test an investment thesis so it can be proven wrong. Use when opening a thesis on a company or asset, when new information arrives, or when asked whether a thesis still holds.
---

# Thesis tracker

A thesis is a claim you can lose. This skill keeps one honest: written down with its evidence, the conditions that would end it, and a record of what has happened since.

## Workflow

### 1. Write the claim
One sentence, specific enough to be wrong. Name the asset, the mechanism and the horizon. "Company X earns more per share in two years because pricing outruns costs" is a thesis. "X is a great company" is not.

### 2. Give it pillars
Three to five supporting arguments. For each: the evidence, the source, the date it was true, and whether it is a fact, an inference or an opinion.

### 3. Write the kill criteria before anything else
Measurable conditions that would end the thesis: a metric, a threshold, a date. For example, "gross margin below 38% for two consecutive quarters". Write them while calm, before you have a position or a stake in being right. If you cannot state one, the thesis is not ready.

### 4. Write the case against
The strongest argument a careful skeptic would make, with evidence. Add the base rate for claims of this kind if you know it.

### 5. List what is coming
Dated events that could confirm or break the thesis: earnings, filings, regulatory decisions, token unlocks, debt maturities.

### 6. Set the status by rule
- **intact**: no kill criterion crossed, no pillar contradicted by a source.
- **watch**: a criterion is within about 5% of its line, a pillar is contradicted, or a criterion cannot be checked because its data is stale or missing.
- **broken**: a kill criterion has been crossed.

The status follows the criteria, not your mood. When a thesis is broken, say so and leave the decision to its owner. Do not argue it away.

### 7. Update with the disconfirming evidence first
When new information arrives, log the date, what changed, the source, which pillar or criterion it touches, and whether it strengthens, weakens or leaves the thesis alone. Give evidence against the thesis the same care as evidence for it.

## Output

```markdown
# Thesis: <asset>, <horizon>
**Claim:** <one sentence>
**Status:** intact | watch | broken   (as of <date>)

## Pillars
| # | Pillar | Evidence | Source | As of | Fact / inference / opinion |

## Kill criteria
| # | Metric | Threshold | Check by | Latest value | Status |

## Case against
<the skeptic's argument, with sources>

## Coming up
| Date | Event | Could confirm / could break |

## Log
| Date | What changed | Source | Touches | Effect |
```

## Rules

- Never recommend buying, selling, sizing or holding. Report the state of the thesis and let the owner decide.
- Every number carries a source and an as-of date. No source, no number.
- Label each statement as fact, inference or opinion.
- An unchecked criterion is "cannot be checked", never "fine".
- Rates move in percentage points. Never report a percent change of a percentage.
- Review every thesis at least quarterly, even when nothing dramatic has happened.
