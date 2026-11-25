import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Parse the exact visible fixture so a change in the published packet changes the result.
const packet = readFileSync(new URL("./README.md", import.meta.url), "utf8").split("````text\n")[1].split("\n````")[0];

function rowsFor(text, sourceId) {
  const section = text.split("\n\n").find(paragraph => paragraph.startsWith(sourceId + ". "));
  if (!section) return null;
  const [, header, ...body] = section.split("\n");
  const keys = header.split(",");
  return body.map(line => {
    const values = line.split(",");
    assert.equal(values.length, keys.length, sourceId + " row width");
    return Object.fromEntries(keys.map((key, index) => [key, values[index]]));
  });
}

function review(text) {
  const roster = rowsFor(text, "S1");
  const flags = rowsFor(text, "S2");
  const ledger = rowsFor(text, "S3");
  const deliveries = rowsFor(text, "S4");
  const studios = new Set(roster.filter(r => r.kind === "external").map(r => r.studio));
  const result = {
    workspaceFlags: flags.filter(r => r.paid_plan_flag === "yes").length,
    workspaces: roster.length,
    externalStudios: studios.size,
    netPayingStudios: null,
    netReceiptsEUR: null,
    studioConversion: null,
    acceptedCutsWithoutFounderDelivery: deliveries.filter(r =>
      r.client_cut_accepted === "yes" && Number(r.founder_delivery_minutes) === 0).length,
  };
  if (!ledger) return result;
  const balances = new Map();
  for (const entry of ledger) {
    assert.ok(studios.has(entry.studio), "unmapped studio " + entry.studio);
    const amount = Number(entry.eur);
    assert.ok(Number.isFinite(amount), "amount missing or invalid");
    balances.set(entry.studio, (balances.get(entry.studio) || 0) + amount);
  }
  const amounts = [...balances.values()];
  result.netPayingStudios = amounts.filter(amount => amount > 0).length;
  result.netReceiptsEUR = amounts.reduce((sum, v) => sum + v, 0);
  result.studioConversion = result.netPayingStudios / studios.size;
  return result;
}

const complete = review(packet);
const missingLedger = review(packet.split("\n\n").filter(p => !p.startsWith("S3. ")).join("\n\n"));
assert.deepEqual(complete, {
  workspaceFlags: 6, workspaces: 8, externalStudios: 6, netPayingStudios: 3,
  netReceiptsEUR: 350, studioConversion: 0.5, acceptedCutsWithoutFounderDelivery: 2,
});
assert.deepEqual(missingLedger, {
  ...complete, netPayingStudios: null, netReceiptsEUR: null, studioConversion: null,
});
console.log(JSON.stringify({ complete, missingLedger }, null, 2));
