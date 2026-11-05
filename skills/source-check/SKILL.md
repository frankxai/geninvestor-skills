---
name: source-check
description: Trace every number in a piece of research back to a primary source and check it. Use when reviewing a memo, an AI-written summary, a screen result, or any claim that contains figures, dates or quotes.
---

# Source check

Research goes wrong at the number level: a stale figure, a wrong unit, a restated value, a quote that was paraphrased. This skill checks each one against where it came from.

## Workflow

### 1. List every claim that can be checked
Pull out each number, date, ratio and quotation, with the sentence it sits in.

### 2. Find the primary source
Prefer the original: a filing (annual and quarterly reports, ESEF or XBRL data), a central bank or statistics office, an exchange, the company's own investor pages. An article about a figure is a pointer to the source, not the source.

### 3. Record the evidence
For each claim: the value, the unit, the period the value describes (as of), when you retrieved it, and exactly where it sits (URL, page, table, field).

### 4. Compare
Mark each claim **match**, **mismatch**, **cannot find** or **derived**. Look for the usual traps:
- percent versus percentage points;
- thousands versus millions, and the currency;
- fiscal year versus calendar year;
- restated figures: for a historical question, use the value that was known at that time;
- adjusted versus unadjusted prices;
- delayed data presented as current.

### 5. Recompute what was derived
Growth rates, margins, ratios, per-share figures: recompute them from the inputs and compare.

### 6. Check quotations
A quote must match the source word for word. A paraphrase is not a quote and must not sit inside quotation marks.

### 7. Give a verdict
The research **passes** only if every number is matched or correctly derived. Otherwise list what failed and what was not found.

## Output

```markdown
| # | Claim | Value in text | Value in source | Unit | As of | Source location | Result |
|---|---|---|---|---|---|---|---|

**Verdict:** pass | fail
**Not found:** <claims with no primary source>
**Data age:** <oldest as-of date and what it feeds>
```

## Rules

- Never fill a gap from memory. If you cannot find the source, write "cannot find".
- Never round or adjust to make a number match.
- Secondary sources may point you to the primary one but never settle a claim.
- Say how old the data is. Stale data that feeds a conclusion is a finding, not a footnote.
- One unsourced number is enough to fail the check.
