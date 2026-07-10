/*
 * iCSU Smart CI — 30-Minute Delivery Microsite runtime.
 * Consumes window.MODULES (keyed object) from data.js.
 * Renders the landing index and individual module delivery pages,
 * including the Microsoft Learn-style knowledge check.
 */
(function () {
  "use strict";

  // i18n shorthands (i18n.js loads before this script).
  function t(k) { return window.SmartCI ? window.SmartCI.t(k) : k; }
  function M() { return (window.SmartCI ? window.SmartCI.getModules() : window.MODULES) || {}; }
  function fmtNum(n) { return window.SmartCI ? window.SmartCI.fmtNumber(n) : String(n); }
  function fmtPct(frac) { return window.SmartCI ? window.SmartCI.fmtPercent(frac) : Math.round(frac * 100) + "%"; }
  function groupName(name) { return t("group." + name); }
  function stageName(i) { return t("stage." + (i + 1)); }
  function beltName(key) { return t("belt." + key + ".name"); }
  function beltTagline(key) { return t("belt." + key + ".tagline"); }
  function beltGoal(key) { return t("belt." + key + ".goal"); }
  function beltHoursLabel(key) {
    var b = BELTS[beltIndex(key)];
    return b ? b.hours.replace(/hours/, t("belt.hoursSuffix")) : "";
  }

  // Ordered groups define the concept/category index layout and its prev/next flow.
  var GROUPS = [
    { name: "Foundations", ids: ["intro", "belts", "ms-ci-cop", "data-types", "convergent-divergent", "house-of-lean"] },
    { name: "Methodologies & Cycles", ids: ["dmaic", "pdca", "a3", "failed-hypothesis"] },
    { name: "Value & Quality Definition", ids: ["value", "voc", "ctq", "copq", "waste"] },
    { name: "Process Mapping & Analysis", ids: ["sipoc", "value-stream", "pareto-chart", "ishikawa", "5-whys", "6-ms", "fmea"] },
    { name: "Workplace, Flow & Standardization", ids: ["5s", "standard-work", "gemba", "poka-yoke", "andon-cord", "takt-time", "heijunka", "one-piece-flow", "pull-vs-push", "limit-wip", "supermarket", "kaizen", "kanban"] },
    { name: "Measurement & Control", ids: ["control-charts", "process-capability", "p-value"] },
    { name: "Strategy & Governance", ids: ["hoshin-kanri", "project-charter"] }
  ];

  // Guided progression: one linear path from the most basic concepts to the most
  // advanced. Drives the "Guided path" flow on the index and module navigation.
  var GUIDED_STAGES = [
    { name: "Stage 1 \u00b7 Start Here \u2014 What CI Is", ids: ["intro", "house-of-lean", "belts", "ms-ci-cop"] },
    { name: "Stage 2 \u00b7 See Value and Waste", ids: ["value", "voc", "waste", "gemba"] },
    { name: "Stage 3 \u00b7 Organize and Standardize", ids: ["5s", "standard-work", "poka-yoke", "andon-cord"] },
    { name: "Stage 4 \u00b7 Improve in Cycles", ids: ["kaizen", "pdca", "dmaic", "a3", "project-charter"] },
    { name: "Stage 5 \u00b7 Map and Analyze the Process", ids: ["sipoc", "value-stream", "ctq", "copq"] },
    { name: "Stage 6 \u00b7 Find the Root Cause", ids: ["5-whys", "ishikawa", "6-ms", "pareto-chart", "convergent-divergent"] },
    { name: "Stage 7 \u00b7 Balance the Flow", ids: ["takt-time", "one-piece-flow", "heijunka", "pull-vs-push", "limit-wip", "supermarket", "kanban"] },
    { name: "Stage 8 \u00b7 Measure with Data", ids: ["data-types", "control-charts", "process-capability"] },
    { name: "Stage 9 \u00b7 Prove It Statistically", ids: ["p-value", "failed-hypothesis", "fmea"] },
    { name: "Stage 10 \u00b7 Lead and Govern", ids: ["hoshin-kanri"] }
  ];

  // Belt learning plans. Belts are cumulative: pursuing a belt means mastering
  // everything in that belt PLUS every belt below it. Each tier lists only the
  // modules newly introduced at that level (its "target learning").
  var BELTS = [
    {
      key: "white",
      name: "White Belt",
      tagline: "Awareness & vocabulary",
      hours: "~8 hours",
      goal: "Know the language of continuous improvement and recognize the core tools \u2014 you understand what they are and why they matter, even before you run them.",
      ids: ["intro", "house-of-lean", "belts", "ms-ci-cop", "value", "voc", "waste", "gemba", "kaizen", "5s", "5-whys", "pareto-chart", "ishikawa"]
    },
    {
      key: "yellow",
      name: "Yellow Belt",
      tagline: "Practitioner \u2014 contribute to improvements",
      hours: "~20\u201340 hours",
      goal: "Take part in improvement events: run 5 Whys on a confirmed problem, contribute to an Ishikawa, and support standard work and error-proofing.",
      ids: ["ctq", "copq", "sipoc", "standard-work", "poka-yoke", "andon-cord", "6-ms", "data-types", "pdca", "a3"]
    },
    {
      key: "green",
      name: "Green Belt",
      tagline: "Lead small-to-medium projects",
      hours: "~80\u2013120 hours",
      goal: "Run DMAIC projects end-to-end with process mapping, flow balancing, and basic statistics.",
      ids: ["dmaic", "project-charter", "value-stream", "convergent-divergent", "control-charts", "takt-time", "one-piece-flow", "heijunka", "pull-vs-push", "limit-wip", "supermarket", "kanban"]
    },
    {
      key: "black",
      name: "Black Belt",
      tagline: "Lead programs, mentor & govern",
      hours: "~160\u2013200 hours",
      goal: "Lead cross-functional programs with deep statistics, risk analysis, and CI strategy \u2014 and mentor Green Belts.",
      ids: ["process-capability", "p-value", "fmea", "failed-hypothesis", "hoshin-kanri"]
    }
  ];
  function beltIndex(key) {
    for (var i = 0; i < BELTS.length; i++) { if (BELTS[i].key === key) return i; }
    return -1;
  }
  // Tiers included for a belt = that belt and every belt below it (cumulative).
  function beltTiers(key) {
    var idx = beltIndex(key);
    if (idx < 0) idx = 0;
    return BELTS.slice(0, idx + 1);
  }

  function flatOrder() {
    var out = [];
    GROUPS.forEach(function (g) { g.ids.forEach(function (id) { out.push(id); }); });
    return out;
  }
  function guidedOrder() {
    var out = [];
    GUIDED_STAGES.forEach(function (s) { s.ids.forEach(function (id) { out.push(id); }); });
    return out;
  }
  function beltOrder(beltKey) {
    var out = [];
    beltTiers(beltKey).forEach(function (t) { t.ids.forEach(function (id) { out.push(id); }); });
    return out;
  }

  /* ---------------- Points / scoring ----------------
     Every module is worth a fixed number of points. Passing (or simply
     completing) a module's knowledge check awards points in proportion to the
     score achieved: e.g. an 80% result on a 100-point module earns 80 points.
     The best result per module is kept, so re-taking a check can only raise a
     score, never lower it. Earned points are persisted per module in
     localStorage and rolled up into per-belt and overall totals. */
  var POINTS_KEY = "icsuSmartCiPoints";
  var POINTS_PER_MODULE = 100;

  function moduleWorth(/* id */) { return POINTS_PER_MODULE; }

  function getPointsStore() {
    try { return JSON.parse(window.localStorage.getItem(POINTS_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function savePointsStore(store) {
    try { window.localStorage.setItem(POINTS_KEY, JSON.stringify(store)); }
    catch (e) { /* ignore */ }
  }
  function earnedFor(id) {
    var rec = getPointsStore()[id];
    return rec && typeof rec.points === "number" ? rec : null;
  }
  // Record a knowledge-check result; keeps the best points earned for the module.
  function recordScore(id, correct, total) {
    var worth = moduleWorth(id);
    var pct = total > 0 ? correct / total : 0;
    var points = Math.round(pct * worth);
    var store = getPointsStore();
    var prev = store[id];
    var prevPoints = prev && typeof prev.points === "number" ? prev.points : 0;
    var improved = !prev || points > prevPoints;
    if (improved) {
      store[id] = { points: points, correct: correct, total: total, pct: pct, ts: new Date().toISOString() };
      savePointsStore(store);
    }
    return { points: points, best: improved ? points : prevPoints, prev: prevPoints, improved: improved, worth: worth };
  }
  function resetPoints() { savePointsStore({}); }

  // Roll up earned points by belt tier and overall. Belt tiers partition every
  // module exactly once, so the per-belt figures sum to the grand total.
  function pointsTotals() {
    var modules = M();
    var store = getPointsStore();
    var byBelt = BELTS.map(function (b) {
      var ids = b.ids.filter(function (id) { return modules[id]; });
      var earned = 0, done = 0;
      ids.forEach(function (id) {
        var rec = store[id];
        if (rec && typeof rec.points === "number") { earned += rec.points; done += 1; }
      });
      return {
        key: b.key,
        available: ids.length * POINTS_PER_MODULE,
        earned: earned,
        count: ids.length,
        earnedCount: done
      };
    });
    var totalAvailable = byBelt.reduce(function (a, x) { return a + x.available; }, 0);
    var totalEarned = byBelt.reduce(function (a, x) { return a + x.earned; }, 0);
    var modulesScored = byBelt.reduce(function (a, x) { return a + x.earnedCount; }, 0);
    var modulesTotal = byBelt.reduce(function (a, x) { return a + x.count; }, 0);
    return {
      byBelt: byBelt,
      totalAvailable: totalAvailable,
      totalEarned: totalEarned,
      modulesScored: modulesScored,
      modulesTotal: modulesTotal
    };
  }

  // ---- User preferences (role + flow + belt + language) persisted in localStorage ----
  var PREF_KEY = "icsuSmartCiPrefs";
  var DEFAULT_PREFS = { role: "csam", flow: "guided", belt: "white", lang: "en" };
  function normFlow(v) { return v === "guided" || v === "concept" || v === "belt" ? v : null; }
  function normRole(v) { return v === "csam" || v === "csa" || v === "customer" || v === "practitioner" || v === "sss" || v === "sae" || v === "tas" ? v : null; }
  function normBelt(v) { return beltIndex(v) >= 0 ? v : null; }
  function normLang(v) { return v === "en" || v === "pt-BR" || v === "es-419" ? v : null; }
  function getPrefs() {
    try {
      var p = JSON.parse(window.localStorage.getItem(PREF_KEY));
      if (p && normRole(p.role) && normFlow(p.flow)) {
        return {
          role: p.role,
          flow: p.flow,
          belt: normBelt(p.belt) || DEFAULT_PREFS.belt,
          lang: normLang(p.lang) || DEFAULT_PREFS.lang
        };
      }
    } catch (e) { /* ignore */ }
    return null;
  }
  function setPrefs(p) {
    try {
      var cur = {};
      try { cur = JSON.parse(window.localStorage.getItem(PREF_KEY)) || {}; } catch (e2) { /* ignore */ }
      var merged = { role: p.role, flow: p.flow, belt: p.belt };
      merged.lang = normLang(p.lang) || normLang(cur.lang) || DEFAULT_PREFS.lang;
      window.localStorage.setItem(PREF_KEY, JSON.stringify(merged));
    } catch (e) { /* ignore */ }
  }

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function plainText(html) {
    var d = document.createElement("div");
    d.innerHTML = html || "";
    return (d.textContent || "").trim();
  }

  // Customer-persona examples are stored per language + module id in the shared
  // window.CUSTOMER_EXAMPLES lookup (data.customer.js). Fall back to English so a
  // missing translation still shows the customer view rather than dropping the tab.
  function customerExampleFor(id) {
    var store = window.CUSTOMER_EXAMPLES;
    if (!store) return null;
    var lang = (window.SmartCI && window.SmartCI.getLang()) || DEFAULT_PREFS.lang;
    var byLang = store[lang] || store.en || {};
    return byLang[id] || (store.en && store.en[id]) || null;
  }

  // General CI practitioner-persona examples live in window.PRACTITIONER_EXAMPLES
  // (data.practitioner.js), keyed by language + module id, with English as the
  // fallback so a missing translation still shows the practitioner view.
  function practitionerExampleFor(id) {
    var store = window.PRACTITIONER_EXAMPLES;
    if (!store) return null;
    var lang = (window.SmartCI && window.SmartCI.getLang()) || DEFAULT_PREFS.lang;
    var byLang = store[lang] || store.en || {};
    return byLang[id] || (store.en && store.en[id]) || null;
  }

  // Services-role persona examples (Services Solutions Seller, Services Account
  // Executive, Technical Account Strategist) follow the same language + module id
  // lookup with English fallback. Each reads from its own global store.
  function personaExampleFrom(store, id) {
    if (!store) return null;
    var lang = (window.SmartCI && window.SmartCI.getLang()) || DEFAULT_PREFS.lang;
    var byLang = store[lang] || store.en || {};
    return byLang[id] || (store.en && store.en[id]) || null;
  }
  function sssExampleFor(id) { return personaExampleFrom(window.SSS_EXAMPLES, id); }
  function saeExampleFor(id) { return personaExampleFrom(window.SAE_EXAMPLES, id); }
  function tasExampleFor(id) { return personaExampleFrom(window.TAS_EXAMPLES, id); }

  /* ---------------- Onboarding wizard (language + role + flow + belt) ---------------- */
  // A guided, one-question-per-step flow. The primary action is always visible in a
  // sticky footer (no scrolling to find it), and new settings can be added simply by
  // adding another step — the layout scales without growing a single long form.
  function openOnboarding(initial, onDone) {
    var sel = {
      lang: (initial && normLang(initial.lang)) || (window.SmartCI ? window.SmartCI.getLang() : DEFAULT_PREFS.lang),
      role: (initial && normRole(initial.role)) || DEFAULT_PREFS.role,
      flow: (initial && normFlow(initial.flow)) || DEFAULT_PREFS.flow,
      belt: (initial && normBelt(initial.belt)) || DEFAULT_PREFS.belt
    };

    // The belt step only exists when the "Follow a belt" flow is chosen, so the step
    // list is computed on demand rather than fixed.
    function steps() {
      var list = ["lang", "role", "flow"];
      if (sel.flow === "belt") list.push("belt");
      return list;
    }
    var stepIndex = 0;

    var overlay = el("div", { className: "onboarding", role: "dialog", "aria-modal": "true", "aria-label": t("onb.aria") });
    var card = el("div", { className: "onboarding__card onboarding__card--wizard" });

    // Persistent header: eyebrow + progress indicator.
    var eyebrow = el("p", { className: "onboarding__eyebrow" }, [t("onb.eyebrow")]);
    var dots = el("div", { className: "onboarding__dots", "aria-hidden": "true" });
    var stepLabel = el("span", { className: "onboarding__steplabel" });
    var head = el("div", { className: "onboarding__head" }, [
      eyebrow,
      el("div", { className: "onboarding__progress" }, [dots, stepLabel])
    ]);

    // Scrollable body (one step at a time) + persistent footer (always-visible actions).
    var body = el("div", { className: "onboarding__body" });
    var backBtn = el("button", { className: "btn btn--secondary onboarding__back", type: "button" }, [t("onb.back")]);
    var nextBtn = el("button", { className: "btn btn--primary onboarding__next", type: "button" }, [t("onb.next")]);
    var foot = el("div", { className: "onboarding__foot" }, [backBtn, nextBtn]);

    card.appendChild(head);
    card.appendChild(body);
    card.appendChild(foot);

    // Strip the leading "N. " numbering from question strings — the stepper conveys position.
    function stripNum(s) { return (s || "").replace(/^\s*\d+\.\s*/, ""); }

    // Build a single-select grid of choice cards; selecting updates highlight in place
    // (keeps focus, no flicker) and notifies via onSelect.
    function radioGroup(extraGridCls, options, currentVal, onSelect) {
      var grid = el("div", { className: "choice-grid" + (extraGridCls ? " " + extraGridCls : "") });
      var btns = {};
      options.forEach(function (o) {
        var ch = el("button", { className: "choice " + o.cls, "data-val": o.val, type: "button" }, [
          el("span", { className: "choice__title" }, o.titleNodes),
          el("span", { className: "choice__desc" }, [o.desc])
        ]);
        var on = o.val === currentVal;
        ch.classList.toggle("is-selected", on);
        ch.setAttribute("aria-pressed", on ? "true" : "false");
        ch.addEventListener("click", function () {
          Object.keys(btns).forEach(function (k) {
            var sOn = k === o.val;
            btns[k].classList.toggle("is-selected", sOn);
            btns[k].setAttribute("aria-pressed", sOn ? "true" : "false");
          });
          onSelect(o.val);
        });
        btns[o.val] = ch;
        grid.appendChild(ch);
      });
      return grid;
    }

    function buildStep(id) {
      if (id === "lang") {
        // Selecting a language re-renders the wizard translated (live preview), staying here.
        return radioGroup(null, [
          { val: "en", cls: "choice--lang", titleNodes: [t("onb.lang.en.title")], desc: t("onb.lang.en.desc") },
          { val: "pt-BR", cls: "choice--lang", titleNodes: [t("onb.lang.pt.title")], desc: t("onb.lang.pt.desc") },
          { val: "es-419", cls: "choice--lang", titleNodes: [t("onb.lang.es.title")], desc: t("onb.lang.es.desc") }
        ], sel.lang, function (v) {
          if (sel.lang === v) return;
          sel.lang = v;
          if (window.SmartCI) { window.SmartCI.setLang(v); window.SmartCI.applyStatic(); }
          render();
        });
      }
      if (id === "role") {
        return radioGroup(null, [
          { val: "csam", cls: "choice--role", titleNodes: [t("onb.role.csam.title")], desc: t("onb.role.csam.desc") },
          { val: "csa", cls: "choice--role", titleNodes: [t("onb.role.csa.title")], desc: t("onb.role.csa.desc") },
          { val: "customer", cls: "choice--role", titleNodes: [t("onb.role.customer.title")], desc: t("onb.role.customer.desc") },
          { val: "practitioner", cls: "choice--role", titleNodes: [t("onb.role.practitioner.title")], desc: t("onb.role.practitioner.desc") },
          { val: "sss", cls: "choice--role", titleNodes: [t("onb.role.sss.title")], desc: t("onb.role.sss.desc") },
          { val: "sae", cls: "choice--role", titleNodes: [t("onb.role.sae.title")], desc: t("onb.role.sae.desc") },
          { val: "tas", cls: "choice--role", titleNodes: [t("onb.role.tas.title")], desc: t("onb.role.tas.desc") }
        ], sel.role, function (v) { sel.role = v; });
      }
      if (id === "flow") {
        // Changing flow can add/remove the belt step, so refresh the chrome (dots/footer).
        return radioGroup(null, [
          { val: "guided", cls: "choice--flow", titleNodes: [t("onb.flow.guided.title")], desc: t("onb.flow.guided.desc") },
          { val: "concept", cls: "choice--flow", titleNodes: [t("onb.flow.concept.title")], desc: t("onb.flow.concept.desc") },
          { val: "belt", cls: "choice--flow", titleNodes: [t("onb.flow.belt.title")], desc: t("onb.flow.belt.desc") }
        ], sel.flow, function (v) { sel.flow = v; updateChrome(); });
      }
      // belt
      return radioGroup("choice-grid--belts", BELTS.map(function (b) {
        return {
          val: b.key,
          cls: "choice--belt choice--belt-" + b.key,
          titleNodes: [el("span", { className: "belt-chip belt-chip--" + b.key }), beltName(b.key)],
          desc: beltTagline(b.key) + " \u00b7 " + beltHoursLabel(b.key)
        };
      }), sel.belt, function (v) { sel.belt = v; });
    }

    var Q = { lang: "onb.q.lang", role: "onb.q.role", flow: "onb.q.flow", belt: "onb.q.belt" };

    function updateChrome() {
      var st = steps();
      if (stepIndex > st.length - 1) stepIndex = st.length - 1;
      if (stepIndex < 0) stepIndex = 0;
      var total = st.length;
      // Persistent labels are refreshed here so a live language switch updates them too.
      overlay.setAttribute("aria-label", t("onb.aria"));
      eyebrow.textContent = t("onb.eyebrow");
      backBtn.textContent = t("onb.back");
      // Progress dots
      dots.innerHTML = "";
      for (var i = 0; i < total; i++) {
        var d = el("span", { className: "onboarding__dot" });
        if (i < stepIndex) d.classList.add("is-done");
        if (i === stepIndex) d.classList.add("is-current");
        dots.appendChild(d);
      }
      stepLabel.textContent = t("onb.step")
        .replace("{n}", fmtNum(stepIndex + 1))
        .replace("{total}", fmtNum(total));
      // Footer
      backBtn.disabled = stepIndex === 0;
      var last = stepIndex === total - 1;
      nextBtn.textContent = last ? t("onb.start") : t("onb.next");
      nextBtn.classList.toggle("onboarding__next--final", last);
    }

    function render() {
      var st = steps();
      if (stepIndex > st.length - 1) stepIndex = st.length - 1;
      if (stepIndex < 0) stepIndex = 0;
      var id = st[stepIndex];
      body.innerHTML = "";
      body.scrollTop = 0;
      // The welcome line appears only on the first step, for a warm intro without clutter.
      if (stepIndex === 0) body.appendChild(el("p", { className: "onboarding__welcome" }, [t("onb.title")]));
      body.appendChild(el("h2", { className: "onboarding__title" }, [stripNum(t(Q[id]))]));
      if (id === "lang") body.appendChild(el("p", { className: "onboarding__lede" }, [t("onb.lede")]));
      body.appendChild(buildStep(id));
      updateChrome();
      var focusEl = body.querySelector(".choice.is-selected") || body.querySelector(".choice");
      if (focusEl) focusEl.focus();
    }

    function finish() {
      var chosen = { role: sel.role, flow: sel.flow, belt: sel.belt, lang: sel.lang };
      if (window.SmartCI) window.SmartCI.setLang(sel.lang);
      setPrefs(chosen);
      if (window.SmartCI) window.SmartCI.applyStatic();
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (onDone) onDone(chosen);
    }

    nextBtn.addEventListener("click", function () {
      var st = steps();
      if (stepIndex < st.length - 1) { stepIndex++; render(); }
      else finish();
    });
    backBtn.addEventListener("click", function () {
      if (stepIndex > 0) { stepIndex--; render(); }
    });

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    render();
  }

  /* ---------------- Preferences bar (index) ---------------- */
  function renderPrefBar(prefs, onChange) {
    var roleLabel = prefs.role === "csa" ? "CSA" : prefs.role === "customer" ? t("role.short.customer") : prefs.role === "practitioner" ? t("role.short.practitioner") : prefs.role === "sss" ? t("role.short.sss") : prefs.role === "sae" ? t("role.short.sae") : prefs.role === "tas" ? t("role.short.tas") : "CSAM";
    var bar = el("div", { className: "prefbar" });

    var flowName = prefs.flow === "guided" ? t("prefbar.flow.guided")
      : prefs.flow === "belt" ? (beltName((BELTS[beltIndex(prefs.belt)] || BELTS[0]).key) + " " + t("prefbar.flow.beltSuffix"))
        : t("prefbar.flow.concept");
    bar.appendChild(el("div", { className: "prefbar__info" }, [
      el("span", { className: "prefbar__label" }, [t("prefbar.showing")]),
      el("span", { className: "prefbar__flow" }, [flowName]),
      el("span", { className: "prefbar__label" }, [t("prefbar.for")]),
      el("span", { className: "prefbar__role prefbar__role--" + prefs.role }, [roleLabel])
    ]));

    var toggle = el("div", { className: "flow-toggle", role: "group", "aria-label": t("prefbar.aria.flow") });
    var guidedBtn = el("button", { className: "flow-toggle__btn", type: "button", "aria-pressed": prefs.flow === "guided" ? "true" : "false" }, [t("prefbar.toggle.guided")]);
    var conceptBtn = el("button", { className: "flow-toggle__btn", type: "button", "aria-pressed": prefs.flow === "concept" ? "true" : "false" }, [t("prefbar.toggle.concept")]);
    var beltBtn = el("button", { className: "flow-toggle__btn", type: "button", "aria-pressed": prefs.flow === "belt" ? "true" : "false" }, [t("prefbar.toggle.belt")]);
    guidedBtn.addEventListener("click", function () { if (prefs.flow !== "guided") onChange({ role: prefs.role, flow: "guided", belt: prefs.belt }); });
    conceptBtn.addEventListener("click", function () { if (prefs.flow !== "concept") onChange({ role: prefs.role, flow: "concept", belt: prefs.belt }); });
    beltBtn.addEventListener("click", function () { if (prefs.flow !== "belt") onChange({ role: prefs.role, flow: "belt", belt: prefs.belt }); });
    toggle.appendChild(guidedBtn);
    toggle.appendChild(conceptBtn);
    toggle.appendChild(beltBtn);

    var changeBtn = el("button", { className: "prefbar__change", type: "button" }, [t("prefbar.change")]);
    changeBtn.addEventListener("click", function () { openOnboarding(prefs, onChange); });

    bar.appendChild(el("div", { className: "prefbar__controls" }, [toggle, changeBtn]));

    // When following a belt, expose a quick selector to switch the target belt.
    if (prefs.flow === "belt") {
      var beltBar = el("div", { className: "beltbar", role: "group", "aria-label": t("prefbar.aria.belt") });
      beltBar.appendChild(el("span", { className: "beltbar__label" }, [t("prefbar.targetBelt")]));
      BELTS.forEach(function (b) {
        var on = b.key === prefs.belt;
        var chip = el("button", { className: "beltbar__btn beltbar__btn--" + b.key, type: "button", "aria-pressed": on ? "true" : "false" }, [
          el("span", { className: "belt-chip belt-chip--" + b.key }),
          beltName(b.key)
        ]);
        chip.addEventListener("click", function () { if (prefs.belt !== b.key) onChange({ role: prefs.role, flow: "belt", belt: b.key }); });
        beltBar.appendChild(chip);
      });
      var wrap = el("div", { className: "prefbar-belt" }, [bar, beltBar]);
      return wrap;
    }

    return bar;
  }

  /* ---------------- Index page ---------------- */
  function moduleCard(id, numLabel, flow, belt) {
    var m = M()[id];
    var href = "module.html?id=" + encodeURIComponent(id) + "&flow=" + flow;
    if (flow === "belt") href += "&belt=" + encodeURIComponent(belt);
    var card = el("a", { className: "card", href: href });
    card.appendChild(el("span", { className: "card__num" }, [numLabel]));
    card.appendChild(el("h3", { className: "card__title" }, [m.title]));
    card.appendChild(el("p", { className: "card__summary" }, [plainText(m.executiveSummary)]));
    var earned = earnedFor(id);
    var worth = moduleWorth(id);
    var pointsBadge = earned
      ? el("span", { className: "card__points is-earned" }, [
          "\u2605 " + fmtNum(earned.points) + "/" + fmtNum(worth) + " " + t("points.pts")
        ])
      : el("span", { className: "card__points" }, [
          "\u2606 " + fmtNum(worth) + " " + t("points.pts")
        ]);
    card.appendChild(el("div", { className: "card__footer" }, [
      el("span", { className: "pill" }, [m.duration || "30 min"]),
      el("span", null, [(m.questions ? m.questions.length : 0) + t("card.questionCheck")]),
      pointsBadge
    ]));
    return card;
  }

  function renderIndex(root, flow, belt, onChange) {
    var modules = M();

    if (flow === "belt") {
      renderBeltIndex(root, belt, onChange);
      return;
    }

    if (flow === "guided") {
      var step = 0;
      GUIDED_STAGES.forEach(function (stage, si) {
        var available = stage.ids.filter(function (id) { return modules[id]; });
        if (!available.length) return;
        var section = el("section", { className: "group group--guided" });
        section.appendChild(el("h2", { className: "group__title" }, [stageName(si)]));
        section.appendChild(el("p", { className: "group__meta" }, [available.length + " " + (available.length === 1 ? t("index.module") : t("index.modules")) + " \u00b7 " + t("index.modulesEach")]));
        var grid = el("div", { className: "card-grid" });
        available.forEach(function (id) {
          step += 1;
          grid.appendChild(moduleCard(id, t("label.step") + " " + String(step).padStart(2, "0"), "guided"));
        });
        section.appendChild(grid);
        root.appendChild(section);
      });
      return;
    }

    var counter = 0;
    GROUPS.forEach(function (group) {
      var available = group.ids.filter(function (id) { return modules[id]; });
      if (!available.length) return;

      var section = el("section", { className: "group" });
      section.appendChild(el("h2", { className: "group__title" }, [groupName(group.name)]));
      section.appendChild(el("p", { className: "group__meta" }, [available.length + " " + (available.length === 1 ? t("index.module") : t("index.modules")) + " \u00b7 " + t("index.modulesEach")]));

      var grid = el("div", { className: "card-grid" });
      available.forEach(function (id) {
        counter += 1;
        grid.appendChild(moduleCard(id, t("label.module") + " " + String(counter).padStart(2, "0"), "concept"));
      });
      section.appendChild(grid);
      root.appendChild(section);
    });
  }

  // Belt flow: cumulative plan for the chosen belt. Each included belt tier is
  // shown as a section labelled with its learning goal; higher belts appear as
  // a muted "what's next" teaser.
  function renderBeltIndex(root, beltKey, onChange) {
    var modules = M();
    var key = normBelt(beltKey) || DEFAULT_PREFS.belt;
    var current = BELTS[beltIndex(key)];
    var included = beltTiers(key);

    var totalModules = beltOrder(key).filter(function (id) { return modules[id]; }).length;
    var intro = el("section", { className: "belt-intro belt-intro--" + key }, [
      el("p", { className: "belt-intro__eyebrow" }, [
        el("span", { className: "belt-chip belt-chip--" + key }),
        t("belt.plan.eyebrow")
      ]),
      el("h2", { className: "belt-intro__title" }, [t("belt.workingToward") + " " + beltName(key)]),
      el("p", { className: "belt-intro__goal" }, [beltGoal(key)]),
      el("p", { className: "belt-intro__meta" }, [
        totalModules + " " + (totalModules === 1 ? t("index.module") : t("index.modules")) + " " + t("belt.inThisPlan") + " \u00b7 " + t("belt.cumulativeThrough") + " " +
        beltName(key) + " \u00b7 " + beltHoursLabel(key) + " " + t("belt.ofStudy")
      ])
    ]);
    root.appendChild(intro);

    var step = 0;
    included.forEach(function (tier) {
      var available = tier.ids.filter(function (id) { return modules[id]; });
      if (!available.length) return;
      var isTarget = tier.key === key;
      var section = el("section", { className: "group group--belt group--belt-" + tier.key + (isTarget ? " is-target" : "") });
      section.appendChild(el("h2", { className: "group__title group__title--belt" }, [
        el("span", { className: "belt-chip belt-chip--" + tier.key }),
        beltName(tier.key),
        isTarget ? el("span", { className: "belt-tag belt-tag--target" }, [t("belt.yourTarget")]) : el("span", { className: "belt-tag" }, [t("belt.prerequisite")])
      ]));
      section.appendChild(el("p", { className: "group__meta" }, [beltGoal(tier.key)]));
      var grid = el("div", { className: "card-grid" });
      available.forEach(function (id) {
        step += 1;
        grid.appendChild(moduleCard(id, t("label.step") + " " + String(step).padStart(2, "0"), "belt", key));
      });
      section.appendChild(grid);
      root.appendChild(section);
    });

    // "What's next" teaser for higher belts not yet included.
    var remaining = BELTS.slice(beltIndex(key) + 1);
    if (remaining.length) {
      var next = el("section", { className: "belt-next" });
      next.appendChild(el("h2", { className: "belt-next__title" }, [t("belt.beyond") + " " + beltName(key)]));
      var list = el("div", { className: "belt-next__grid" });
      remaining.forEach(function (b) {
        var addl = b.ids.filter(function (id) { return modules[id]; }).length;
        var item = el("button", { className: "belt-next__item belt-next__item--" + b.key, type: "button" }, [
          el("span", { className: "belt-chip belt-chip--" + b.key }),
          el("span", { className: "belt-next__name" }, [beltName(b.key)]),
          el("span", { className: "belt-next__desc" }, [beltTagline(b.key)]),
          el("span", { className: "belt-next__count" }, ["+" + addl + " " + (addl === 1 ? t("belt.moreModule") : t("belt.moreModules"))])
        ]);
        item.addEventListener("click", function () {
          var role = (getPrefs() || DEFAULT_PREFS).role;
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (onChange) onChange({ role: role, flow: "belt", belt: b.key });
        });
        list.appendChild(item);
      });
      next.appendChild(list);
      next.appendChild(el("p", { className: "belt-next__note" }, [
        t("belt.cumulativeNote")
      ]));
      root.appendChild(next);
    }
  }

  // Points tally panel for the index. Shows the running total plus a per-belt
  // breakdown so a learner can see, at a glance, how many points they have
  // earned toward each belt as they move between modules and learning paths.
  function renderPointsPanel(onReset) {
    var totals = pointsTotals();
    var panel = el("section", { className: "points-panel" });

    var head = el("div", { className: "points-panel__head" }, [
      el("div", null, [
        el("p", { className: "points-panel__kicker" }, [el("span", { className: "dot" }), t("points.kicker")]),
        el("h2", { className: "points-panel__title" }, [t("points.title")])
      ])
    ]);
    if (totals.totalEarned > 0) {
      var reset = el("button", { className: "points-panel__reset", type: "button" }, [t("points.reset")]);
      reset.addEventListener("click", function () {
        if (window.confirm(t("points.reset.confirm"))) {
          resetPoints();
          if (onReset) onReset();
        }
      });
      head.appendChild(reset);
    }
    panel.appendChild(head);

    panel.appendChild(el("p", { className: "points-panel__subtitle" }, [t("points.subtitle")]));

    // Headline total.
    var pctFrac = totals.totalAvailable > 0 ? totals.totalEarned / totals.totalAvailable : 0;
    var total = el("div", { className: "points-total" }, [
      el("div", { className: "points-total__figure" }, [
        el("strong", { className: "points-total__earned" }, [fmtNum(totals.totalEarned)]),
        el("span", { className: "points-total__of" }, [" / " + fmtNum(totals.totalAvailable) + " " + t("points.pts")])
      ]),
      el("p", { className: "points-total__meta" }, [
        fmtPct(pctFrac) + " \u00b7 " + fmtNum(totals.modulesScored) + " / " + fmtNum(totals.modulesTotal) + " " + t("points.modulesScored")
      ])
    ]);
    panel.appendChild(total);

    if (totals.totalEarned === 0) {
      panel.appendChild(el("p", { className: "points-panel__empty" }, [t("points.empty")]));
    }

    // Per-belt breakdown.
    panel.appendChild(el("p", { className: "points-belt__heading" }, [t("points.byBelt")]));
    var list = el("div", { className: "points-belt-list" });
    totals.byBelt.forEach(function (b) {
      var frac = b.available > 0 ? b.earned / b.available : 0;
      var row = el("div", { className: "points-belt points-belt--" + b.key }, [
        el("div", { className: "points-belt__top" }, [
          el("span", { className: "points-belt__name" }, [
            el("span", { className: "belt-chip belt-chip--" + b.key }),
            beltName(b.key)
          ]),
          el("span", { className: "points-belt__score" }, [
            fmtNum(b.earned) + " / " + fmtNum(b.available) + " " + t("points.pts")
          ])
        ]),
        el("div", { className: "points-belt__bar" }, [
          el("div", { className: "points-belt__fill points-belt__fill--" + b.key, style: "width:" + Math.round(frac * 100) + "%" })
        ]),
        el("p", { className: "points-belt__meta" }, [
          fmtNum(b.earnedCount) + " / " + fmtNum(b.count) + " " + t("points.modules")
        ])
      ]);
      list.appendChild(row);
    });
    panel.appendChild(list);

    return panel;
  }

  function bootIndex(indexRoot) {
    function render(prefs) {
      indexRoot.innerHTML = "";
      indexRoot.appendChild(renderPrefBar(prefs, function (next) {
        setPrefs(next);
        render(next);
      }));
      indexRoot.appendChild(renderPointsPanel(function () { render(prefs); }));
      renderIndex(indexRoot, prefs.flow, prefs.belt, function (next) {
        setPrefs(next);
        render(next);
      });
      if (window.SmartCI) window.SmartCI.applyStatic();
    }
    var prefs = getPrefs();
    if (prefs) {
      render(prefs);
    } else {
      render(DEFAULT_PREFS);
      openOnboarding(DEFAULT_PREFS, function (chosen) { render(chosen); });
    }
  }

  /* ---------------- Module page ---------------- */
  function section(kicker, title, bodyNodes, modifier) {
    var s = el("section", { className: "section" + (modifier ? " " + modifier : "") });
    s.appendChild(el("p", { className: "section__kicker" }, [el("span", { className: "dot" }), kicker]));
    s.appendChild(el("h2", { className: "section__title" }, [title]));
    bodyNodes.forEach(function (n) { s.appendChild(n); });
    return s;
  }

  function renderModule(root, id) {
    var modules = M();
    var m = modules[id];
    if (!m) {
      root.appendChild(el("p", null, [t("module.notFound"), el("a", { href: "index.html" }, [t("module.returnAll")])]));
      return;
    }

    document.title = m.title + " \u2014 " + t("module.titleSuffix");
    var params = new URLSearchParams(window.location.search);
    var prefs = getPrefs() || DEFAULT_PREFS;
    var flow = normFlow(params.get("flow")) || prefs.flow || "concept";
    var role = normRole(params.get("role")) || prefs.role || "csam";
    var belt = normBelt(params.get("belt")) || prefs.belt || "white";
    var flowLabel = flow === "guided" ? t("module.flow.guided")
      : flow === "belt" ? (beltName((BELTS[beltIndex(belt)] || BELTS[0]).key) + " " + t("module.flow.beltSuffix"))
        : t("module.flow.concept");
    var order = (flow === "guided" ? guidedOrder() : flow === "belt" ? beltOrder(belt) : flatOrder())
      .filter(function (x) { return modules[x]; });
    var pos = order.indexOf(id);
    var navSuffix = "&flow=" + flow + (flow === "belt" ? "&belt=" + encodeURIComponent(belt) : "");
    var positionLabel = pos >= 0
      ? (flowLabel + " \u00b7 " + fmtNum(pos + 1) + " " + t("module.posOf") + " " + fmtNum(order.length))
      : (flowLabel + " \u00b7 " + t("module.beyondPlan"));

    // Header
    var header = el("div", { className: "module-header" });
    header.appendChild(el("p", { className: "module-eyebrow" }, [m.group]));
    header.appendChild(el("h1", { className: "module-title" }, [m.title]));
    var earned = earnedFor(id);
    var worth = moduleWorth(id);
    var pointsPill = earned
      ? el("span", { className: "pill pill--points is-earned" }, [
          "\u2605 " + fmtNum(earned.points) + " / " + fmtNum(worth) + " " + t("points.pts")
        ])
      : el("span", { className: "pill pill--points" }, [
          "\u2606 " + t("points.worth") + " " + fmtNum(worth) + " " + t("points.pts")
        ]);
    var grandTotal = pointsTotals().totalEarned;
    var meta = el("div", { className: "module-meta" }, [
      el("span", { className: "pill" }, ["\u23f1 " + (m.duration || "30 min") + " " + t("module.delivery")]),
      el("span", null, [positionLabel]),
      el("span", null, [(m.questions ? m.questions.length : 0) + t("module.questionCheck")]),
      pointsPill,
      el("span", { className: "pill pill--points-total" }, [
        t("points.total") + ": " + fmtNum(grandTotal) + " " + t("points.pts")
      ])
    ]);
    header.appendChild(meta);
    root.appendChild(header);

    // 1. Executive summary
    root.appendChild(section(t("sec.exec.kicker"), t("sec.exec.title"),
      [el("p", { className: "lede", html: m.executiveSummary })], "section--exec"));

    // 2. What you'll gain
    var gain = el("ul", { className: "gain-list" });
    (m.whatYouGain || []).forEach(function (g) { gain.appendChild(el("li", { html: g })); });
    root.appendChild(section(t("sec.gain.kicker"), t("sec.gain.title"), [gain]));

    // 3. The topic explained
    root.appendChild(section(t("sec.topic.kicker"), t("sec.topic.title"),
      [el("div", { html: m.explanation })]));

    // 4. Role-based examples (CSAM / CSA / Customer) — defaults to the reader's chosen role.
    // Panels are built generically so personas can be added by supplying another example
    // field in the module data; a persona whose example is missing is simply skipped.
    // The customer example may live either on the module (m.customerExample) or, by
    // default, in the shared window.CUSTOMER_EXAMPLES lookup keyed by language + id.
    var customerExample = m.customerExample || customerExampleFor(id);
    var practitionerExample = m.practitionerExample || practitionerExampleFor(id);
    var roleDefs = [
      { key: "csam", example: m.csamExample },
      { key: "csa", example: m.csaExample },
      { key: "customer", example: customerExample },
      { key: "practitioner", example: practitionerExample },
      { key: "sss", example: m.sssExample || sssExampleFor(id) },
      { key: "sae", example: m.saeExample || saeExampleFor(id) },
      { key: "tas", example: m.tasExample || tasExampleFor(id) }
    ].filter(function (rd) { return rd.example; });

    var tabs = el("div", { className: "role-tabs" });
    var btnByRole = {};
    var panelByRole = {};
    var panels = [];
    roleDefs.forEach(function (rd) {
      var btn = el("button", { className: "role-tab", "data-role": rd.key, type: "button" }, [t("role.tab." + rd.key)]);
      var panel = el("div", { className: "role-panel role-panel--" + rd.key }, [
        el("p", { className: "role-panel__role" }, [t("role.panel." + rd.key)]),
        el("div", { html: rd.example })
      ]);
      btn.addEventListener("click", function () { selectRole(rd.key); });
      tabs.appendChild(btn);
      btnByRole[rd.key] = btn;
      panelByRole[rd.key] = panel;
      panels.push(panel);
    });

    function selectRole(r) {
      if (!btnByRole[r]) r = roleDefs.length ? roleDefs[0].key : null;
      roleDefs.forEach(function (rd) {
        var on = rd.key === r;
        btnByRole[rd.key].setAttribute("aria-selected", on ? "true" : "false");
        panelByRole[rd.key].classList.toggle("is-active", on);
      });
    }
    selectRole(role);

    if (roleDefs.length) {
      root.appendChild(section(t("sec.roles.kicker"), t("sec.roles.title"), [tabs].concat(panels)));
    }

    // 5. Recap
    var recap = el("ul", { className: "recap-list" });
    (m.recap || []).forEach(function (r) { recap.appendChild(el("li", { html: r })); });
    root.appendChild(section(t("sec.recap.kicker"), t("sec.recap.title"), [recap]));

    // 6. Knowledge check
    root.appendChild(renderKnowledgeCheck(m));

    // Prev / next nav
    var nav = el("nav", { className: "module-nav" });
    if (pos > 0) {
      var prev = modules[order[pos - 1]];
      var pa = el("a", { href: "module.html?id=" + encodeURIComponent(prev.id) + navSuffix }, [
        el("small", null, [t("module.prev")]),
        el("strong", null, [prev.title])
      ]);
      nav.appendChild(pa);
    }
    if (pos >= 0 && pos < order.length - 1) {
      var next = modules[order[pos + 1]];
      var na = el("a", { className: "is-next", href: "module.html?id=" + encodeURIComponent(next.id) + navSuffix }, [
        el("small", null, [t("module.next")]),
        el("strong", null, [next.title])
      ]);
      nav.appendChild(na);
    }
    root.appendChild(nav);

    // Belt completion: reaching the last module of a belt plan ends that plan.
    // Offer a short survey so participants can reflect on the whole belt.
    if (flow === "belt" && pos === order.length - 1 && window.SmartCISurvey) {
      var beltLabel = beltName((BELTS[beltIndex(belt)] || BELTS[0]).key);
      root.appendChild(window.SmartCISurvey.renderCard({
        kind: "belt",
        vars: { belt: beltLabel },
        detailLabel: beltLabel
      }));
    }
  }

  /* ---------------- Knowledge check ---------------- */
  function renderKnowledgeCheck(m) {
    var questions = m.questions || [];
    var passingScore = m.passingScore || 80;
    var wrap = el("section", { className: "section" });
    wrap.appendChild(el("p", { className: "section__kicker" }, [el("span", { className: "dot" }), t("kc.kicker")]));
    wrap.appendChild(el("h2", { className: "section__title" }, [t("kc.title")]));
    wrap.appendChild(el("p", { className: "kc-intro" }, [t("kc.intro")]));
    wrap.appendChild(el("div", { className: "meta-row" }, [
      el("span", { html: "<strong>" + t("kc.questions") + "</strong> " + fmtNum(questions.length) }),
      el("span", { html: "<strong>" + t("kc.pass") + "</strong> " + fmtPct(passingScore / 100) })
    ]));
    var progress = el("div", { className: "progress-bar" }, [el("div", { className: "progress-bar__fill" })]);
    var fill = progress.firstChild;
    wrap.appendChild(progress);

    var container = el("div");
    wrap.appendChild(container);

    var answered = 0, correct = 0, total = questions.length;

    questions.forEach(function (q, i) {
      container.appendChild(renderQuestion(q, i, total, function (isCorrect) {
        answered += 1;
        if (isCorrect) correct += 1;
        fill.style.width = Math.round((answered / total) * 100) + "%";
        if (answered === total) renderSummary(container, correct, total, passingScore, m);
      }));
    });
    return wrap;
  }

  function renderQuestion(q, index, total, onAnswered) {
    var card = el("section", { className: "question-card", "data-index": index });
    card.appendChild(el("span", { className: "question-card__index" }, [t("q.indexOf1") + " " + fmtNum(index + 1) + " " + t("q.indexOf2") + " " + fmtNum(total)]));
    card.appendChild(el("p", { className: "question-card__prompt", html: q.prompt }));

    var optionsList = el("ul", { className: "options" });
    var inputs = [];
    var name = "q" + index;

    q.options.forEach(function (text, i) {
      var input = el("input", { type: "radio", name: name, value: String(i), id: name + "_o" + i });
      var label = el("span", { className: "option__label", html: text });
      var li = el("li", { className: "option" }, [input, label]);
      li.addEventListener("click", function (e) {
        if (card.dataset.answered === "true") return;
        if (e.target.tagName !== "INPUT") input.checked = true;
        Array.prototype.forEach.call(optionsList.querySelectorAll(".option"), function (o) {
          o.classList.remove("option--selected");
        });
        li.classList.add("option--selected");
        checkBtn.disabled = false;
      });
      inputs.push({ input: input, li: li });
      optionsList.appendChild(li);
    });

    var feedback = el("div", { className: "feedback", role: "status" });
    var checkBtn = el("button", { className: "btn btn--primary", type: "button" }, [t("q.check")]);
    checkBtn.disabled = true;
    var controls = el("div", { className: "controls" }, [checkBtn]);

    checkBtn.addEventListener("click", function () {
      var selected = inputs.findIndex(function (e) { return e.input.checked; });
      if (selected < 0) return;
      var isCorrect = selected === q.correctIndex;
      card.dataset.answered = "true";
      inputs.forEach(function (entry, i) {
        entry.input.disabled = true;
        entry.li.classList.remove("option--selected");
        if (i === q.correctIndex) {
          entry.li.classList.add("option--correct");
          entry.li.appendChild(el("span", { className: "option__marker option__marker--correct" }, [t("q.markerCorrect")]));
        } else if (i === selected) {
          entry.li.classList.add("option--incorrect");
          entry.li.appendChild(el("span", { className: "option__marker option__marker--incorrect" }, [t("q.markerYour")]));
        }
      });
      feedback.className = "feedback " + (isCorrect ? "feedback--correct" : "feedback--incorrect");
      feedback.innerHTML = "";
      feedback.appendChild(el("p", { className: "feedback__title" }, [isCorrect ? t("q.fb.correct") : t("q.fb.notquite")]));
      feedback.appendChild(el("p", { className: "feedback__body", html: q.explanation }));
      feedback.style.display = "block";
      checkBtn.disabled = true;
      onAnswered(isCorrect);
    });

    card.appendChild(optionsList);
    card.appendChild(controls);
    card.appendChild(feedback);
    return card;
  }

  function renderSummary(container, correct, total, passingScore, m) {
    var frac = correct / total;
    var passed = (frac * 100) >= passingScore;
    var summary = el("div", { className: "summary " + (passed ? "summary--pass" : "summary--retry") });
    summary.appendChild(el("h2", { className: "summary__title" }, [passed ? t("kc.summary.pass") : t("kc.summary.retry")]));
    summary.appendChild(el("div", { className: "summary__score" }, [fmtNum(correct) + " / " + fmtNum(total)]));
    summary.appendChild(el("p", { className: "summary__detail" }, [
      fmtPct(frac) + " \u00b7 " + (passed ? t("kc.summary.passed") : t("kc.summary.failedPrefix") + " " + fmtPct(passingScore / 100) + t("kc.summary.failedSuffix"))
    ]));

    // Award points in proportion to the score and surface the result.
    if (m && m.id) {
      var result = recordScore(m.id, correct, total);
      var pointsLine = el("div", { className: "summary__points" }, [
        el("span", { className: "summary__points-figure" }, [
          "\u2605 " + t("points.summary.earned") + ": " + fmtNum(result.points) + " / " + fmtNum(result.worth) + " " + t("points.pts")
        ])
      ]);
      if (result.improved && result.prev > 0) {
        pointsLine.appendChild(el("span", { className: "summary__points-best" }, [t("points.newBest")]));
      }
      summary.appendChild(pointsLine);
    }

    var retry = el("button", { className: "btn btn--primary", type: "button" }, [t("kc.retry")]);
    retry.addEventListener("click", function () { window.location.reload(); });
    var back = el("a", { className: "btn btn--secondary", href: "index.html" }, [t("kc.allModules")]);
    summary.appendChild(el("div", { className: "summary__actions" }, [retry, back]));
    summary.style.display = "block";
    container.appendChild(summary);
    summary.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------------- Boot ---------------- */
  function init() {
    var indexRoot = document.getElementById("index-root");
    if (indexRoot) { bootIndex(indexRoot); return; }
    var moduleRoot = document.getElementById("module-root");
    if (moduleRoot) {
      var params = new URLSearchParams(window.location.search);
      renderModule(moduleRoot, params.get("id"));
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
