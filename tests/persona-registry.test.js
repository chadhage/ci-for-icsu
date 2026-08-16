"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const site = path.resolve(__dirname, "..", ".docs", "microsite");
const files = [
  "data.js", "data.pt-BR.js", "data.es-419.js", "data.customer.js",
  "data.practitioner.js", "data.sss.js", "data.sae.js", "data.tas.js",
  "persona-registry.js", "persona-catalog.js"
];

function load() {
  const context = { window: {} };
  vm.createContext(context);
  files.forEach((file) => vm.runInContext(fs.readFileSync(path.join(site, file), "utf8"), context, { filename: file }));
  return context.window;
}

test("all active personas satisfy the package contract", () => {
  const app = load();
  const result = app.SmartCIPersonas.validateRegistry(Object.keys(app.MODULES));
  assert.equal(result.valid, true, result.errors.join("\n"));
  assert.equal(app.SmartCIPersonas.activePersonas().length, 7);
});

test("the default is discovered from metadata and its package is locked", () => {
  const app = load();
  const persona = app.SmartCIPersonas.defaultPersona();
  assert.equal(persona.id, "practitioner");
  assert.ok(app.SmartCIPersonas.locksFor("content-package", persona.activePackageId, "delete").length > 0);
});

test("content reassignment transfers protection before old content can dissolve", () => {
  const app = load();
  const registry = app.SmartCIPersonas;
  const moduleIds = Object.keys(app.MODULES);
  assert.throws(() => registry.dissolveContentPackage("practitioner-content-v1"), /protected/);

  registry.registerContentPackage({
    schemaVersion: 1,
    id: "replacement-content-v2",
    version: "2.0.0",
    locales: ["en"],
    fallbackLocale: "en",
    listModuleIds: () => moduleIds,
    getContent: (_locale, moduleId) => "<p>Replacement content for " + moduleId + "</p>"
  });
  registry.reassignContent("practitioner", "replacement-content-v2", {
    moduleIds,
    transferLockIds: ["default-persona-content-protection"]
  });

  assert.equal(registry.defaultPersona().activePackageId, "replacement-content-v2");
  assert.equal(registry.locksFor("content-package", "replacement-content-v2", "delete").length, 1);
  assert.equal(registry.dissolveContentPackage("practitioner-content-v1"), true);
});

test("any package can receive an independent lock", () => {
  const app = load();
  const registry = app.SmartCIPersonas;
  registry.registerContentPackage({
    schemaVersion: 1,
    id: "held-content-v1",
    version: "1.0.0",
    locales: ["en"],
    fallbackLocale: "en",
    listModuleIds: () => [],
    getContent: () => null
  });
  registry.addLock({
    id: "independent-retention-lock",
    targetType: "content-package",
    targetId: "held-content-v1",
    operations: ["delete"],
    reason: "Retention test",
    transferable: false
  });
  assert.throws(() => registry.dissolveContentPackage("held-content-v1"), /independent-retention-lock/);
  registry.removeLock("independent-retention-lock");
  assert.equal(registry.dissolveContentPackage("held-content-v1"), true);
});

test("an incomplete selected package fails runtime validation", () => {
  const app = load();
  const registry = app.SmartCIPersonas;
  registry.registerContentPackage({
    schemaVersion: 1,
    id: "incomplete-content-v1",
    version: "1.0.0",
    locales: ["en"],
    fallbackLocale: "en",
    listModuleIds: () => ["intro"],
    getContent: () => "<p>Only one module</p>"
  });
  registry.registerPersona({
    schemaVersion: 1,
    id: "incomplete-persona",
    status: "active",
    selectable: true,
    isDefault: false,
    activePackageId: "incomplete-content-v1",
    display: { en: { name: "Incomplete", tagline: "Test", description: "Test persona" } }
  });
  const result = registry.validatePersona("incomplete-persona", Object.keys(app.MODULES), "en");
  assert.equal(result.valid, false);
  assert.ok(result.errors.some((error) => error.includes("Missing module")));
});