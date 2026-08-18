/* Smart CI persona registry and content-package contract runtime. */
(function () {
  "use strict";

  var personas = {};
  var packages = {};
  var locks = {};
  var listeners = [];
  var supportedSchemaVersion = 1;

  function clone(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function nonEmpty(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function emit(name, detail) {
    listeners.forEach(function (listener) {
      try { listener(name, clone(detail || {})); } catch (e) { /* observer failures are isolated */ }
    });
  }

  function registerContentPackage(definition) {
    if (!definition || !nonEmpty(definition.id)) throw new Error("Content package id is required.");
    if (definition.schemaVersion !== supportedSchemaVersion) throw new Error("Unsupported content package schema version.");
    if (typeof definition.getContent !== "function" || typeof definition.listModuleIds !== "function") {
      throw new Error("Content package must implement getContent and listModuleIds.");
    }
    if (packages[definition.id]) throw new Error("Duplicate content package id: " + definition.id);
    packages[definition.id] = definition;
  }

  function registerPersona(definition) {
    if (!definition || !nonEmpty(definition.id)) throw new Error("Persona id is required.");
    if (definition.schemaVersion !== supportedSchemaVersion) throw new Error("Unsupported persona schema version.");
    if (!definition.display || !definition.display.en || !nonEmpty(definition.display.en.name)) {
      throw new Error("Persona requires an English display name.");
    }
    if (!nonEmpty(definition.activePackageId)) throw new Error("Persona requires an active content package binding.");
    if (personas[definition.id]) throw new Error("Duplicate persona id: " + definition.id);
    personas[definition.id] = clone(definition);
  }

  function addLock(definition) {
    if (!definition || !nonEmpty(definition.id)) throw new Error("Lock id is required.");
    if (["persona", "content-package"].indexOf(definition.targetType) < 0) throw new Error("Invalid lock target type.");
    if (!nonEmpty(definition.targetId)) throw new Error("Lock target id is required.");
    if (!Array.isArray(definition.operations) || !definition.operations.length) throw new Error("Lock operations are required.");
    if (locks[definition.id]) throw new Error("Duplicate lock id: " + definition.id);
    locks[definition.id] = clone(definition);
  }

  function removeLock(lockId) {
    if (!locks[lockId]) return false;
    delete locks[lockId];
    return true;
  }

  function locksFor(targetType, targetId, operation) {
    return Object.keys(locks).map(function (id) { return locks[id]; }).filter(function (lock) {
      return lock.targetType === targetType && lock.targetId === targetId
        && (!operation || lock.operations.indexOf(operation) >= 0);
    });
  }

  function displayFor(personaId, locale) {
    var persona = personas[personaId];
    if (!persona) return null;
    return clone(persona.display[locale] || persona.display.en);
  }

  function activePersonas() {
    return Object.keys(personas).map(function (id) { return personas[id]; })
      .filter(function (persona) { return persona.status === "active" && persona.selectable !== false; })
      .sort(function (left, right) { return (left.order || 0) - (right.order || 0); })
      .map(function (persona) { return clone(persona); });
  }

  function defaultPersona() {
    var defaults = activePersonas().filter(function (persona) { return persona.isDefault === true; });
    return defaults.length === 1 ? defaults[0] : null;
  }

  function packageLocale(contentPackage, locale) {
    var locales = contentPackage.locales || [];
    if (locales.indexOf(locale) >= 0) return locale;
    return contentPackage.fallbackLocale || "en";
  }

  function validatePackage(packageId, moduleIds, locale) {
    var contentPackage = packages[packageId];
    var errors = [];
    if (!contentPackage) return { valid: false, errors: ["Unknown content package: " + packageId] };
    var resolvedLocale = packageLocale(contentPackage, locale || "en");
    if ((contentPackage.locales || []).indexOf(resolvedLocale) < 0) errors.push("Fallback locale is unavailable.");
    var availableIds = contentPackage.listModuleIds(resolvedLocale) || [];
    (moduleIds || []).forEach(function (moduleId) {
      if (availableIds.indexOf(moduleId) < 0) {
        errors.push("Missing module: " + moduleId);
        return;
      }
      if (!nonEmpty(contentPackage.getContent(resolvedLocale, moduleId))) errors.push("Empty module: " + moduleId);
    });
    return { valid: errors.length === 0, errors: errors, locale: resolvedLocale, packageId: packageId };
  }

  function validatePersona(personaId, moduleIds, locale) {
    var persona = personas[personaId];
    if (!persona) return { valid: false, errors: ["Unknown persona: " + personaId], personaId: personaId };
    var errors = [];
    if (persona.status !== "active") errors.push("Persona is not active.");
    if (persona.selectable === false) errors.push("Persona is not selectable.");
    var packageResult = validatePackage(persona.activePackageId, moduleIds, locale);
    errors = errors.concat(packageResult.errors);
    var result = {
      valid: errors.length === 0,
      errors: errors,
      personaId: personaId,
      packageId: persona.activePackageId,
      locale: packageResult.locale
    };
    emit(result.valid ? "persona_validation_succeeded" : "persona_validation_failed", result);
    return result;
  }

  function contentFor(personaId, locale, moduleId) {
    var persona = personas[personaId];
    var contentPackage = persona && packages[persona.activePackageId];
    if (!contentPackage) return null;
    return contentPackage.getContent(packageLocale(contentPackage, locale || "en"), moduleId) || null;
  }

  function validateRegistry(moduleIds) {
    var errors = [];
    var defaults = activePersonas().filter(function (persona) { return persona.isDefault === true; });
    if (defaults.length !== 1) errors.push("Exactly one active persona must be the default.");
    activePersonas().forEach(function (persona) {
      var result = validatePersona(persona.id, moduleIds, "en");
      if (!result.valid) errors.push(persona.id + ": " + result.errors.join("; "));
    });
    if (defaults.length === 1 && !locksFor("content-package", defaults[0].activePackageId, "delete").length) {
      errors.push("The default persona content package must have a delete lock.");
    }
    return { valid: errors.length === 0, errors: errors };
  }

  function reassignContent(personaId, newPackageId, options) {
    options = options || {};
    var persona = personas[personaId];
    if (!persona) throw new Error("Unknown persona: " + personaId);
    var moduleIds = options.moduleIds || [];
    var validation = validatePackage(newPackageId, moduleIds, options.locale || "en");
    if (!validation.valid) throw new Error("Replacement package is invalid: " + validation.errors.join("; "));

    var previousPackageId = persona.activePackageId;
    var transferred = [];
    try {
      (options.transferLockIds || []).forEach(function (lockId) {
        var lock = locks[lockId];
        if (!lock || lock.targetType !== "content-package" || lock.targetId !== previousPackageId || lock.transferable !== true) {
          throw new Error("Lock cannot be transferred: " + lockId);
        }
        lock.targetId = newPackageId;
        transferred.push(lockId);
      });
      persona.activePackageId = newPackageId;
      var personaValidation = validatePersona(personaId, moduleIds, options.locale || "en");
      if (!personaValidation.valid) throw new Error("Reassigned persona is invalid.");
      emit("persona_content_reassigned", { personaId: personaId, fromPackageId: previousPackageId, toPackageId: newPackageId });
      return clone(persona);
    } catch (error) {
      persona.activePackageId = previousPackageId;
      transferred.forEach(function (lockId) { locks[lockId].targetId = previousPackageId; });
      throw error;
    }
  }

  function dissolveContentPackage(packageId) {
    var blockers = locksFor("content-package", packageId, "delete");
    Object.keys(personas).forEach(function (id) {
      if (personas[id].activePackageId === packageId) blockers.push({ id: "binding:" + id });
    });
    if (blockers.length) throw new Error("Content package is protected: " + blockers.map(function (item) { return item.id; }).join(", "));
    if (!packages[packageId]) return false;
    delete packages[packageId];
    emit("content_package_dissolved", { packageId: packageId });
    return true;
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function () { listeners = listeners.filter(function (item) { return item !== listener; }); };
  }

  window.SmartCIPersonas = {
    registerContentPackage: registerContentPackage,
    registerPersona: registerPersona,
    addLock: addLock,
    removeLock: removeLock,
    locksFor: locksFor,
    activePersonas: activePersonas,
    defaultPersona: defaultPersona,
    displayFor: displayFor,
    validatePackage: validatePackage,
    validatePersona: validatePersona,
    validateRegistry: validateRegistry,
    contentFor: contentFor,
    reassignContent: reassignContent,
    dissolveContentPackage: dissolveContentPackage,
    subscribe: subscribe
  };
})();