import assert from "node:assert/strict";
import { test } from "node:test";
import { validate, validateSkill } from "./validate-skills.mjs";

const good = `---
name: demo-skill
description: Check a thing carefully and report what was found. Use when reviewing a claim that contains figures.
---

# Demo

## Workflow
1. Do the work.

## Output
A table.

## Rules
- Never guess a number.
`;

test("a well-formed skill passes", () => {
  assert.deepEqual(validateSkill("demo-skill", good), []);
});

test("frontmatter mistakes are reported", () => {
  assert.match(validateSkill("x", "# no frontmatter")[0], /missing frontmatter/);
  assert.ok(validateSkill("other", good).some((e) => /must equal the folder name/.test(e)));
  assert.ok(validateSkill("Demo_Skill", good.replace("demo-skill", "Demo_Skill")).some((e) => /kebab-case/.test(e)));
  assert.ok(validateSkill("demo-skill", good.replace(/description: .*/, "description: short")).some((e) => /40 to 400/.test(e)));
  assert.ok(validateSkill("demo-skill", good.replace("Use when reviewing", "Handy for reviewing")).some((e) => /Use when/.test(e)));
});

test("missing sections and a Rules section without a prohibition are reported", () => {
  assert.ok(validateSkill("demo-skill", good.replace("## Output\nA table.\n\n", "")).some((e) => /missing section "## Output"/.test(e)));
  assert.ok(validateSkill("demo-skill", good.replace("- Never guess a number.", "- Be careful.")).some((e) => /prohibition/.test(e)));
});

test("action and hype language is caught, in each form", () => {
  for (const bad of [
    "You should buy this before earnings.", "Then sell it now.", "Go long on the dip.", "Increase your position slowly.",
    "A price target of 120 seems fair.", "This is a top pick.", "It is risk-free.", "The stock will double.",
  ]) {
    const errors = validateSkill("demo-skill", good.replace("1. Do the work.", `1. ${bad}`));
    assert.ok(errors.some((e) => /action or hype language/.test(e)), bad);
  }
});

test("the same words are allowed on a line that forbids them", () => {
  for (const ok of ["Never say you should buy anything.", "Do not use hype words such as top pick.", "Avoid saying go long.", 'No "guaranteed" claims.']) {
    assert.deepEqual(validateSkill("demo-skill", good.replace("1. Do the work.", `1. ${ok}`)), [], ok);
  }
});

test("every skill in this repository validates", () => {
  assert.deepEqual(validate(), []);
});

test("a prohibition cannot exempt advice in a different clause", () => {
  for (const bad of ["Never guess; you should buy this today.", "Do not guess. You should sell it now.", "This is not a recommendation: go long.", "Avoid guessing but increase your position.", "Never guess, then sell it now."]) {
    assert.ok(validateSkill("demo-skill", good.replace("1. Do the work.", bad)).some((e) => /action or hype/.test(e)), bad);
  }
});
