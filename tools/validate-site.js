"use strict";

const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const site = path.join(root, ".docs", "microsite");
const practitionerIntroAudio = path.join(root, "media", "ci-practitioner", "The_six_week_PDCA_improvement_cadence.m4a");
const runtimeFiles = [
  "content/curriculum/v1/modules.js",
  "content/curriculum/v1/locales/pt-BR.js",
  "content/curriculum/v1/locales/es-419.js",
  "content/personas/customer/v1/package.js",
  "content/personas/practitioner/v1/package.js",
  "content/personas/sss/v1/package.js",
  "content/personas/sae/v1/package.js",
  "content/personas/tas/v1/package.js",
  "platform/persona-registry.js",
  "catalog/persona-catalog.js"
];

function fail(message) {
  console.error("VALIDATION ERROR: " + message);
  process.exitCode = 1;
}

const context = { window: {} };
vm.createContext(context);
runtimeFiles.forEach((file) => {
  const filePath = path.join(site, file);
  if (!fs.existsSync(filePath)) return fail("Missing runtime file: " + file);
  try { vm.runInContext(fs.readFileSync(filePath, "utf8"), context, { filename: file }); }
  catch (error) { fail(file + " could not load: " + error.message); }
});

if (context.window.SmartCIPersonas && context.window.MODULES) {
  const moduleIds = Object.keys(context.window.MODULES);
  const result = context.window.SmartCIPersonas.validateRegistry(moduleIds);
  if (!result.valid) result.errors.forEach(fail);
  if (moduleIds.length !== 40) fail("Expected 40 canonical modules, found " + moduleIds.length + ".");
}

if (!fs.existsSync(practitionerIntroAudio)) fail("Missing CI Practitioner intro audio asset.");

for (const page of fs.readdirSync(site).filter((file) => file.endsWith(".html"))) {
  const html = fs.readFileSync(path.join(site, page), "utf8");
  for (const match of html.matchAll(/<script\s+src="\.\/([^"]+)"/g)) {
    if (!fs.existsSync(path.join(site, match[1]))) fail(page + " references missing script " + match[1] + ".");
  }
}

for (const schema of fs.readdirSync(path.join(root, "contracts")).filter((file) => file.endsWith(".json"))) {
  try { JSON.parse(fs.readFileSync(path.join(root, "contracts", schema), "utf8")); }
  catch (error) { fail(schema + " is invalid JSON: " + error.message); }
}

if (!process.exitCode) console.log("Site validation passed: registry, 40 modules, contracts, and page dependencies.");