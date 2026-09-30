#!/usr/bin/env node
// Validates every skill in skills/*/SKILL.md. The rules that matter most are mechanical on purpose:
// a skill may not tell anyone to buy, sell or size a position, and may not use hype language,
// except on a line that forbids it.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SECTIONS = ["## Workflow", "## Output", "## Rules"];

// Action and hype language. A line is exempt only if it also says never / do not / must not / avoid / no ".
const DENY = [
  /\byou should (buy|sell|hold|trim|exit|add)\b/i,
  /\b(buy|sell) (this|it|now|today)\b/i,
  /\bgo (long|short)\b/i,
  /\b(increase|reduce|trim|exit|add to|size) (the |your |a )?position\b/i,
  /\bprice target of\b/i,
  /\b(top pick|can'?t miss|guaranteed|risk-free|sure thing|undervalued gem)\b/i,
  /\b(will|is going to) (rise|fall|double|crash|soar)\b/i,
];
const EXEMPT = /\b(never|do not|don't|must not|avoid|no ")|\bnot a recommendation/i;

export function parseSkill(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(text);
  if (!m) return null;
  const front = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = /^([a-z-]+):\s*(.*)$/.exec(line);
    if (kv) front[kv[1]] = kv[2].trim();
  }
  return { front, body: m[2] };
}

export function validateSkill(dirName, text) {
  const errors = [];
  const parsed = parseSkill(text);
  if (!parsed) return [`${dirName}: missing frontmatter (--- name / description ---)`];
  const { front, body } = parsed;
  if (!front.name) errors.push(`${dirName}: frontmatter needs a name`);
  else {
    if (front.name !== dirName) errors.push(`${dirName}: name "${front.name}" must equal the folder name`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(front.name)) errors.push(`${dirName}: name must be kebab-case`);
  }
  if (!front.description) errors.push(`${dirName}: frontmatter needs a description`);
  else {
    if (front.description.length < 40 || front.description.length > 400) errors.push(`${dirName}: description must be 40 to 400 characters (is ${front.description.length})`);
    if (!/\buse when\b/i.test(front.description)) errors.push(`${dirName}: description must say when to use the skill ("Use when ...")`);
  }
  for (const s of SECTIONS) if (!body.includes(`\n${s}`) && !body.startsWith(s)) errors.push(`${dirName}: missing section "${s}"`);
  const rules = body.split("## Rules")[1] ?? "";
  if (!/\b(never|do not)\b/i.test(rules)) errors.push(`${dirName}: the Rules section must contain at least one prohibition`);

  body.split(/\r?\n/).forEach((line, i) => {
    if (EXEMPT.test(line)) return;
    for (const rx of DENY) if (rx.test(line)) errors.push(`${dirName}: line ${i + 1} has action or hype language ${rx}: "${line.trim().slice(0, 80)}"`);
  });
  return errors;
}

export function validate({ root = ROOT } = {}) {
  const dir = join(root, "skills");
  if (!existsSync(dir)) return ["missing skills/ directory"];
  const errors = [];
  const names = readdirSync(dir).filter((n) => statSync(join(dir, n)).isDirectory());
  if (names.length === 0) errors.push("no skills found");
  for (const name of names) {
    const file = join(dir, name, "SKILL.md");
    if (!existsSync(file)) errors.push(`${name}: missing SKILL.md`);
    else errors.push(...validateSkill(name, readFileSync(file, "utf8")));
  }
  return errors;
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const errors = validate();
  if (errors.length) {
    for (const e of errors) console.error(`  ${e}`);
    console.error(`\nSkill validation FAILED (${errors.length}).`);
    process.exit(1);
  }
  console.log(`Skill validation passed for ${readdirSync(join(ROOT, "skills")).length} skills.`);
}
