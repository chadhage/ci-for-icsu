/* Smart CI privacy-conscious usage telemetry client. */
(function () {
  "use strict";

  var config = window.SmartCITelemetryConfig || {};
  var queueKey = "CISmartCiTelemetryQueue";
  var userKey = "CISmartCiAnonymousUser";
  var consentKey = "CISmartCiTelemetryConsent";
  var sessionKey = "CISmartCiSession";
  var allowedContext = ["personaId", "moduleId", "locale", "flow", "belt", "pageType"];
  var flushTimer = null;

  function randomId(prefix) {
    var value = "";
    if (window.crypto && window.crypto.getRandomValues) {
      var bytes = new Uint8Array(16);
      window.crypto.getRandomValues(bytes);
      value = Array.prototype.map.call(bytes, function (byte) { return byte.toString(16).padStart(2, "0"); }).join("");
    } else {
      value = Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
    return prefix + "_" + value;
  }

  function storageGet(storage, key) {
    try { return storage.getItem(key); } catch (e) { return null; }
  }

  function storageSet(storage, key, value) {
    try { storage.setItem(key, value); } catch (e) { /* storage may be unavailable */ }
  }

  function stableId(storage, key, prefix) {
    var value = storageGet(storage, key);
    if (!value) {
      value = randomId(prefix);
      storageSet(storage, key, value);
    }
    return value;
  }

  function consent() {
    var value = storageGet(window.localStorage, consentKey);
    return value === "granted" || value === "denied" ? value : "pending";
  }

  function readQueue() {
    try { return JSON.parse(storageGet(window.localStorage, queueKey)) || []; } catch (e) { return []; }
  }

  function writeQueue(events) {
    var max = config.maxQueuedEvents || 200;
    storageSet(window.localStorage, queueKey, JSON.stringify(events.slice(-max)));
  }

  function context() {
    var prefs = {};
    try { prefs = JSON.parse(storageGet(window.localStorage, "CISmartCiPrefs")) || {}; } catch (e) { /* ignore */ }
    var params;
    try { params = new URLSearchParams(window.location.search); } catch (e2) { params = { get: function () { return null; } }; }
    var pageType = document.getElementById("module-root") ? "module"
      : document.getElementById("exam-root") ? "exam" : "index";
    return {
      personaId: prefs.role || null,
      moduleId: pageType === "module" ? params.get("id") : null,
      locale: prefs.lang || "en",
      flow: prefs.flow || null,
      belt: prefs.belt || null,
      pageType: pageType
    };
  }

  function sanitizeProperties(properties) {
    var output = {};
    Object.keys(properties || {}).slice(0, 20).forEach(function (key) {
      var value = properties[key];
      if (typeof value === "string") output[key] = value.slice(0, 120);
      else if (typeof value === "number" || typeof value === "boolean" || value === null) output[key] = value;
    });
    return output;
  }

  function track(eventName, properties) {
    if (config.enabled === false || !eventName) return;
    if (config.consentRequired !== false && consent() !== "granted") return;
    var eventContext = context();
    var filteredContext = {};
    allowedContext.forEach(function (key) { filteredContext[key] = eventContext[key]; });
    var event = {
      schemaVersion: 1,
      eventId: randomId("evt"),
      eventName: String(eventName).slice(0, 80),
      occurredAt: new Date().toISOString(),
      anonymousUserId: stableId(window.localStorage, userKey, "usr"),
      sessionId: stableId(window.sessionStorage, sessionKey, "ses"),
      context: filteredContext,
      properties: sanitizeProperties(properties)
    };
    var events = readQueue();
    events.push(event);
    writeQueue(events);
    if (events.length >= (config.batchSize || 20)) flush();
  }

  function flush() {
    if (!config.endpoint || consent() !== "granted") return Promise.resolve(false);
    var events = readQueue();
    if (!events.length) return Promise.resolve(true);
    var payload = JSON.stringify({ schemaVersion: 1, events: events });
    if (navigator.sendBeacon) {
      var accepted = navigator.sendBeacon(config.endpoint, new Blob([payload], { type: "application/json" }));
      if (accepted) writeQueue([]);
      return Promise.resolve(accepted);
    }
    return window.fetch(config.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
      credentials: "omit"
    }).then(function (response) {
      if (!response.ok) throw new Error("Telemetry endpoint rejected the batch.");
      writeQueue([]);
      return true;
    }).catch(function () { return false; });
  }

  function setConsent(value) {
    if (value !== "granted" && value !== "denied") throw new Error("Invalid telemetry consent value.");
    storageSet(window.localStorage, consentKey, value);
    if (value === "denied") writeQueue([]);
    if (value === "granted") {
      track("telemetry_consent_granted");
      flush();
    }
  }

  function mountConsent() {
    if (config.enabled === false || config.consentRequired === false || consent() !== "pending") return;
    var banner = document.createElement("aside");
    banner.className = "telemetry-consent";
    banner.setAttribute("aria-label", "Usage data preference");
    banner.innerHTML = '<p>Allow anonymous usage data to help improve this learning experience. No names, answers, or feedback text are collected.</p>'
      + '<div><button type="button" class="btn btn--secondary" data-consent="denied">No thanks</button>'
      + '<button type="button" class="btn btn--primary" data-consent="granted">Allow</button></div>';
    banner.addEventListener("click", function (event) {
      var value = event.target && event.target.getAttribute("data-consent");
      if (!value) return;
      setConsent(value);
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    });
    document.body.appendChild(banner);
  }

  window.SmartCITelemetry = {
    track: track,
    flush: flush,
    setConsent: setConsent,
    getConsent: consent,
    queuedEventCount: function () { return readQueue().length; }
  };

  if (window.SmartCIPersonas) {
    window.SmartCIPersonas.subscribe(function (name, detail) { track(name, detail); });
  }
  window.addEventListener("error", function (event) {
    track("client_error", { message: event.message || "Unknown client error", source: event.filename ? event.filename.split("/").pop() : null });
  });
  window.addEventListener("unhandledrejection", function () { track("client_error", { message: "Unhandled promise rejection" }); });
  window.addEventListener("pagehide", flush);

  function boot() {
    mountConsent();
    track("page_viewed", { path: window.location.pathname });
    if (config.flushIntervalMs > 0) flushTimer = window.setInterval(flush, config.flushIntervalMs);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();