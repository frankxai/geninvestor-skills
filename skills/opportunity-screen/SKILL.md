---
name: opportunity-screen
description: Turn the owner's own written mandate into a short list of candidates worth researching, each with the case against it. Use when asked to find ideas, run a screen, or see what looks interesting.
---

# Opportunity screen

A screen surfaces candidates for research. It does not reach conclusions. This skill searches against the owner's own rules, cuts hard, and hands back a few candidates with the strongest argument against each.

## Workflow

### 1. Read the mandate
A written mandate is required: markets, horizon, risk tolerance, exclusions, concentration limits, and the styles wanted (value, quality, growth, special situation, insider activity). If none exists, ask for one or stop. Do not invent a mandate.

### 2. Choose screens and write down their parameters
State each criterion and threshold. Record the date, the universe and the data sources so the screen can be run again and give the same answer.

### 3. Run the screens
Use the data and tools available. Note the source and as-of date of everything the screen relies on, and flag anything delayed or missing.

### 4. Cut hard
Drop anything that breaks an exclusion, is too illiquid for the mandate, rests on stale data, or duplicates something already seen. Keep at most five.

### 5. Write a card for each candidate
- Name and identifier.
- Three lines on why it passed the screen.
- The evidence, each figure with its source and as-of date.
- **What would prove it wrong**: measurable kill criteria.
- **The case against**: the strongest skeptical argument, with evidence.
- Risks, including liquidity and data gaps.
- How it fits or conflicts with the mandate, including concentration.
- What to check next.

### 6. Say what the screen cannot see
Accounting quality, management, legal exposure, anything the data does not capture.

## Output

```markdown
## Screen record
Mandate version: <id/date> · Universe: <...> · Run: <date> · Sources: <...>
Criteria: <list with thresholds>

## Candidates (for research, not recommendations)
### <Name> (<identifier>)
**Why it passed:** ...
**Evidence:** | claim | value | source | as of |
**Would prove it wrong:** ...
**Case against:** ...
**Risks:** ...
**Fit with mandate:** ...
**Check next:** ...

## Not visible to this screen
...
```

## Rules

- Never say buy, sell, trim, exit or hold, and never present a price target as a fact. Cards are candidates for research.
- Rank by fit with the mandate and strength of evidence, never by expected return.
- Do not use hype words: no "top pick", "undervalued gem", "can't miss".
- Every number has a source and an as-of date. Delayed data is labelled as delayed.
- Check crowding where the data exists: analyst coverage, ownership concentration, short interest.
- Five candidates is a ceiling, not a target. Fewer is fine. Zero is a valid result.
