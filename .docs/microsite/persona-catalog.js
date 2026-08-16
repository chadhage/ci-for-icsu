/* Smart CI persona catalog. Persona identity and content bindings live outside the shell. */
(function () {
  "use strict";

  var registry = window.SmartCIPersonas;
  if (!registry) throw new Error("persona-registry.js must load before persona-catalog.js");

  function modulesFor(locale) {
    if (locale === "pt-BR" && window.MODULES_PT) return window.MODULES_PT;
    if (locale === "es-419" && window.MODULES_ES) return window.MODULES_ES;
    return window.MODULES || {};
  }

  function registerEmbeddedPackage(id, field) {
    registry.registerContentPackage({
      schemaVersion: 1,
      id: id,
      version: "1.0.0",
      locales: ["en", "pt-BR", "es-419"],
      fallbackLocale: "en",
      listModuleIds: function (locale) {
        var modules = modulesFor(locale);
        return Object.keys(modules).filter(function (moduleId) { return !!modules[moduleId][field]; });
      },
      getContent: function (locale, moduleId) {
        var module = modulesFor(locale)[moduleId];
        return module ? module[field] : null;
      }
    });
  }

  function registerStorePackage(id, store, locales) {
    registry.registerContentPackage({
      schemaVersion: 1,
      id: id,
      version: "1.0.0",
      locales: locales,
      fallbackLocale: "en",
      listModuleIds: function (locale) { return Object.keys(store[locale] || store.en || {}); },
      getContent: function (locale, moduleId) {
        var localized = store[locale] || store.en || {};
        return localized[moduleId] || (store.en && store.en[moduleId]) || null;
      }
    });
  }

  registerEmbeddedPackage("csam-content-v1", "csamExample");
  registerEmbeddedPackage("csa-content-v1", "csaExample");
  registerStorePackage("customer-content-v1", window.CUSTOMER_EXAMPLES || {}, ["en", "pt-BR", "es-419"]);
  registerStorePackage("practitioner-content-v1", window.PRACTITIONER_EXAMPLES || {}, ["en"]);
  registerStorePackage("sss-content-v1", window.SSS_EXAMPLES || {}, ["en"]);
  registerStorePackage("sae-content-v1", window.SAE_EXAMPLES || {}, ["en"]);
  registerStorePackage("tas-content-v1", window.TAS_EXAMPLES || {}, ["en"]);

  var definitions = [
    {
      id: "practitioner", packageId: "practitioner-content-v1", order: 10, isDefault: true,
      en: ["CI Practitioner", "Continuous improvement in practice", "A general continuous-improvement practitioner. Examples focus on applying Lean Six Sigma in your own team, independent of role."],
      "pt-BR": ["Praticante de MC", "Melhoria contínua na prática", "Um praticante geral de melhoria contínua. O conteúdo em inglês é usado quando uma tradução ainda não está disponível."],
      "es-419": ["Profesional de MC", "Mejora continua en la práctica", "Un profesional general de mejora continua. Se usa contenido en inglés cuando aún no hay traducción disponible."]
    },
    { id: "customer", packageId: "customer-content-v1", order: 20, en: ["Customer", "Your team's point of view", "See how continuous improvement lands for your team."], "pt-BR": ["Cliente", "O ponto de vista da sua equipe", "Veja como a melhoria contínua chega à sua equipe."], "es-419": ["Cliente", "El punto de vista de tu equipo", "Mira cómo llega la mejora continua a tu equipo."] },
    { id: "csam", packageId: "csam-content-v1", order: 30, en: ["CSAM", "Customer Success Account Manager", "Examples and scenarios default to the CSAM view."], "pt-BR": ["CSAM", "Customer Success Account Manager", "Exemplos e cenários assumem a visão do CSAM."], "es-419": ["CSAM", "Customer Success Account Manager", "Los ejemplos y escenarios adoptan la perspectiva del CSAM."] },
    { id: "csa", packageId: "csa-content-v1", order: 40, en: ["CSA", "Cloud Solution Architect", "Examples and scenarios default to the CSA view."], "pt-BR": ["CSA", "Cloud Solution Architect", "Exemplos e cenários assumem a visão do CSA."], "es-419": ["CSA", "Cloud Solution Architect", "Los ejemplos y escenarios adoptan la perspectiva del CSA."] },
    { id: "sss", packageId: "sss-content-v1", order: 50, en: ["Services Solutions Seller", "Selling improvement outcomes", "Qualify, position, and close engagements tied to measurable value."] },
    { id: "sae", packageId: "sae-content-v1", order: 60, en: ["Services Account Executive", "Owning the account", "Focus on account planning, executive stakeholders, scope, margin, and renewals."] },
    { id: "tas", packageId: "tas-content-v1", order: 70, en: ["Technical Account Strategist", "The technical roadmap", "Focus on technical health, proactive risk, and the customer's improvement roadmap."] }
  ];

  function display(definition) {
    var result = {};
    ["en", "pt-BR", "es-419"].forEach(function (locale) {
      var values = definition[locale] || definition.en;
      result[locale] = { name: values[0], tagline: values[1], description: values[2] };
    });
    return result;
  }

  definitions.forEach(function (definition) {
    registry.registerPersona({
      schemaVersion: 1,
      id: definition.id,
      status: "active",
      selectable: true,
      isDefault: definition.isDefault === true,
      order: definition.order,
      activePackageId: definition.packageId,
      display: display(definition)
    });
  });

  registry.addLock({
    id: "default-persona-content-protection",
    targetType: "content-package",
    targetId: "practitioner-content-v1",
    operations: ["delete", "retire"],
    reason: "Protect the content currently bound to the default persona.",
    transferable: true
  });
})();