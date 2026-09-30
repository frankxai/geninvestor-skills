---
name: calibration-log
description: Record predictions before the outcome exists, then score them, so stated confidence can be checked against reality. Use when making a forecast about an asset, metric or event, or when reviewing past calls.
---

# Calibration log

Being confident and being right are different things. This skill records forecasts before the outcome is known and scores them afterwards, so you learn how far to trust your own confidence.

## Workflow

### 1. Register the call before the outcome exists
Record, at the time of the call:
- **Claim:** unambiguous and resolvable ("Company X reports revenue growth above 12% for Q3").
- **Probability:** how likely you think it is, from 1% to 99%.
- **Resolves on:** a date.
- **Resolution source:** exactly how you will know.
- **Baseline:** the base rate for events of this kind, if known.
- **Timestamp.**

The log is append-only. Never edit or delete an entry. To change your mind, add a new entry that supersedes the old one.

### 2. Prefer forecasts about metrics and states
"Thesis criterion 2 is crossed by 30 June" and "quarterly revenue growth exceeds 12%" resolve cleanly and test your understanding. Price calls mostly test luck and timing.

### 3. Resolve on the date
Use the stated source. Record the outcome as 1 (happened) or 0 (did not). Do not reinterpret the claim afterwards.

### 4. Score
- **Brier score:** the average of (probability minus outcome) squared. Lower is better. Compare it with the score you would get by always stating the base rate.
- **Reliability:** group calls by stated probability (for example 60 to 69%) and compare how often each group came true.

### 5. Read the results carefully
Below 30 resolved calls, report the count and nothing else. Below 10 calls in a probability band, do not read that band. Small samples flatter and punish at random.

### 6. Look for patterns
Overconfidence (high bands that come true less often than stated), weak categories, and calls that were right for the wrong reason. Write down what you would change.

## Output

```markdown
| ID | Registered | Claim | Prob. | Resolves on | Source | Outcome | Brier |
|---|---|---|---|---|---|---|---|

Resolved: <n>   Open: <n>
Brier (all): <x>   Baseline Brier: <y>      (shown only when resolved >= 30)
Reliability: | band | n | stated | observed |   (bands with n >= 10 only)
```

## Rules

- Never backdate an entry, and never delete a miss.
- A claim that cannot be resolved by a stated source does not go in the log.
- Report no accuracy figure below the sample floor, and never present the log as a track record of advice.
- Confidence is a number. "Pretty sure" is not an entry.
