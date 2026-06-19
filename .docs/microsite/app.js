/*
 * iCSU Smart CI — 30-Minute Delivery Microsite runtime.
 * Consumes window.MODULES (keyed object) from data.js.
 * Renders the landing index and individual module delivery pages,
 * including the Microsoft Learn-style knowledge check.
 */
(function () {
  "use strict";

  // Ordered groups define the concept/category index layout and its prev/next flow.
  var GROUPS = [
    { name: "Foundations", ids: ["intro", "belts", "ms-ci-cop", "data-types", "convergent-divergent", "house-of-lean"] },
    { name: "Methodologies & Cycles", ids: ["dmaic", "pdca", "a3", "failed-hypothesis"] },
    { name: "Value & Quality Definition", ids: ["value", "voc", "ctq", "copq", "waste"] },
    { name: "Process Mapping & Analysis", ids: ["sipoc", "value-stream", "pareto-chart", "ishikawa", "5-whys", "6-ms", "fmea"] },
    { name: "Workplace, Flow & Standardization", ids: ["5s", "standard-work", "gemba", "poka-yoke", "andon-cord", "takt-time", "heijunka", "one-piece-flow", "pull-vs-push", "supermarket", "kaizen", "kanban"] },
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
    { name: "Stage 7 \u00b7 Balance the Flow", ids: ["takt-time", "one-piece-flow", "heijunka", "pull-vs-push", "supermarket", "kanban"] },
    { name: "Stage 8 \u00b7 Measure with Data", ids: ["data-types", "control-charts", "process-capability"] },
    { name: "Stage 9 \u00b7 Prove It Statistically", ids: ["p-value", "failed-hypothesis", "fmea"] },
    { name: "Stage 10 \u00b7 Lead and Govern", ids: ["hoshin-kanri"] }
  ];

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

  // ---- User preferences (role + flow) persisted in localStorage ----
  var PREF_KEY = "icsuSmartCiPrefs";
  var DEFAULT_PREFS = { role: "csam", flow: "guided" };
  function normFlow(v) { return v === "guided" || v === "concept" ? v : null; }
  function normRole(v) { return v === "csam" || v === "csa" ? v : null; }
  function getPrefs() {
    try {
      var p = JSON.parse(window.localStorage.getItem(PREF_KEY));
      if (p && normRole(p.role) && normFlow(p.flow)) return { role: p.role, flow: p.flow };
    } catch (e) { /* ignore */ }
    return null;
  }
  function setPrefs(p) {
    try { window.localStorage.setItem(PREF_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
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

  /* ---------------- Onboarding (role + flow) ---------------- */
  function openOnboarding(initial, onDone) {
    var sel = {
      role: (initial && normRole(initial.role)) || DEFAULT_PREFS.role,
      flow: (initial && normFlow(initial.flow)) || DEFAULT_PREFS.flow
    };

    var overlay = el("div", { className: "onboarding", role: "dialog", "aria-modal": "true", "aria-label": "Set up your path" });
    var card = el("div", { className: "onboarding__card" });

    card.appendChild(el("p", { className: "onboarding__eyebrow" }, ["iCSU Smart CI \u00b7 Set up your path"]));
    card.appendChild(el("h2", { className: "onboarding__title" }, ["Welcome \u2014 let\u2019s tailor this to you"]));
    card.appendChild(el("p", { className: "onboarding__lede" }, ["Choose your role and how you\u2019d like to move through the material. You can change both at any time."]));

    var roleCards = {};
    card.appendChild(el("p", { className: "onboarding__q" }, ["1. What is your role?"]));
    var roleGrid = el("div", { className: "choice-grid" });
    [
      { val: "csam", title: "CSAM", desc: "Customer Success Account Manager. Examples and scenarios default to the CSAM view." },
      { val: "csa", title: "CSA", desc: "Cloud Solution Architect. Examples and scenarios default to the CSA view." }
    ].forEach(function (c) {
      var ch = el("button", { className: "choice choice--role", "data-val": c.val, type: "button" }, [
        el("span", { className: "choice__title" }, [c.title]),
        el("span", { className: "choice__desc" }, [c.desc])
      ]);
      ch.addEventListener("click", function () { sel.role = c.val; sync(); });
      roleCards[c.val] = ch;
      roleGrid.appendChild(ch);
    });
    card.appendChild(roleGrid);

    var flowCards = {};
    card.appendChild(el("p", { className: "onboarding__q" }, ["2. How would you like to explore?"]));
    var flowGrid = el("div", { className: "choice-grid" });
    [
      { val: "guided", title: "Guided path", desc: "A single progression from the most basic ideas to the most advanced. Best if you are newer to Lean Six Sigma." },
      { val: "concept", title: "Browse by concept", desc: "Modules grouped into categories so you can jump to whatever topic you need." }
    ].forEach(function (c) {
      var ch = el("button", { className: "choice choice--flow", "data-val": c.val, type: "button" }, [
        el("span", { className: "choice__title" }, [c.title]),
        el("span", { className: "choice__desc" }, [c.desc])
      ]);
      ch.addEventListener("click", function () { sel.flow = c.val; sync(); });
      flowCards[c.val] = ch;
      flowGrid.appendChild(ch);
    });
    card.appendChild(flowGrid);

    var startBtn = el("button", { className: "btn btn--primary onboarding__start", type: "button" }, ["Start learning"]);
    startBtn.addEventListener("click", function () {
      var chosen = { role: sel.role, flow: sel.flow };
      setPrefs(chosen);
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      if (onDone) onDone(chosen);
    });
    card.appendChild(el("div", { className: "onboarding__actions" }, [startBtn]));

    function sync() {
      Object.keys(roleCards).forEach(function (k) {
        var on = k === sel.role;
        roleCards[k].classList.toggle("is-selected", on);
        roleCards[k].setAttribute("aria-pressed", on ? "true" : "false");
      });
      Object.keys(flowCards).forEach(function (k) {
        var on = k === sel.flow;
        flowCards[k].classList.toggle("is-selected", on);
        flowCards[k].setAttribute("aria-pressed", on ? "true" : "false");
      });
    }
    sync();

    overlay.appendChild(card);
    document.body.appendChild(overlay);
    startBtn.focus();
  }

  /* ---------------- Preferences bar (index) ---------------- */
  function renderPrefBar(prefs, onChange) {
    var roleLabel = prefs.role === "csa" ? "CSA" : "CSAM";
    var bar = el("div", { className: "prefbar" });

    bar.appendChild(el("div", { className: "prefbar__info" }, [
      el("span", { className: "prefbar__label" }, ["Showing the"]),
      el("span", { className: "prefbar__flow" }, [prefs.flow === "guided" ? "Guided path" : "Browse by concept"]),
      el("span", { className: "prefbar__label" }, ["view for"]),
      el("span", { className: "prefbar__role prefbar__role--" + prefs.role }, [roleLabel])
    ]));

    var toggle = el("div", { className: "flow-toggle", role: "group", "aria-label": "Choose flow" });
    var guidedBtn = el("button", { className: "flow-toggle__btn", type: "button", "aria-pressed": prefs.flow === "guided" ? "true" : "false" }, ["Guided path"]);
    var conceptBtn = el("button", { className: "flow-toggle__btn", type: "button", "aria-pressed": prefs.flow === "concept" ? "true" : "false" }, ["By concept"]);
    guidedBtn.addEventListener("click", function () { if (prefs.flow !== "guided") onChange({ role: prefs.role, flow: "guided" }); });
    conceptBtn.addEventListener("click", function () { if (prefs.flow !== "concept") onChange({ role: prefs.role, flow: "concept" }); });
    toggle.appendChild(guidedBtn);
    toggle.appendChild(conceptBtn);

    var changeBtn = el("button", { className: "prefbar__change", type: "button" }, ["Change role / path"]);
    changeBtn.addEventListener("click", function () { openOnboarding(prefs, onChange); });

    bar.appendChild(el("div", { className: "prefbar__controls" }, [toggle, changeBtn]));
    return bar;
  }

  /* ---------------- Index page ---------------- */
  function moduleCard(id, numLabel, flow) {
    var m = window.MODULES[id];
    var card = el("a", { className: "card", href: "module.html?id=" + encodeURIComponent(id) + "&flow=" + flow });
    card.appendChild(el("span", { className: "card__num" }, [numLabel]));
    card.appendChild(el("h3", { className: "card__title" }, [m.title]));
    card.appendChild(el("p", { className: "card__summary" }, [plainText(m.executiveSummary)]));
    card.appendChild(el("div", { className: "card__footer" }, [
      el("span", { className: "pill" }, [m.duration || "30 min"]),
      el("span", null, [(m.questions ? m.questions.length : 0) + "-question check"])
    ]));
    return card;
  }

  function renderIndex(root, flow) {
    var modules = window.MODULES || {};

    if (flow === "guided") {
      var step = 0;
      GUIDED_STAGES.forEach(function (stage) {
        var available = stage.ids.filter(function (id) { return modules[id]; });
        if (!available.length) return;
        var section = el("section", { className: "group group--guided" });
        section.appendChild(el("h2", { className: "group__title" }, [stage.name]));
        section.appendChild(el("p", { className: "group__meta" }, [available.length + " module" + (available.length === 1 ? "" : "s") + " \u00b7 30 min each"]));
        var grid = el("div", { className: "card-grid" });
        available.forEach(function (id) {
          step += 1;
          grid.appendChild(moduleCard(id, "STEP " + String(step).padStart(2, "0"), "guided"));
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
      section.appendChild(el("h2", { className: "group__title" }, [group.name]));
      section.appendChild(el("p", { className: "group__meta" }, [available.length + " module" + (available.length === 1 ? "" : "s") + " \u00b7 30 min each"]));

      var grid = el("div", { className: "card-grid" });
      available.forEach(function (id) {
        counter += 1;
        grid.appendChild(moduleCard(id, "MODULE " + String(counter).padStart(2, "0"), "concept"));
      });
      section.appendChild(grid);
      root.appendChild(section);
    });
  }

  function bootIndex(indexRoot) {
    function render(prefs) {
      indexRoot.innerHTML = "";
      indexRoot.appendChild(renderPrefBar(prefs, function (next) {
        setPrefs(next);
        render(next);
      }));
      renderIndex(indexRoot, prefs.flow);
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
    var modules = window.MODULES || {};
    var m = modules[id];
    if (!m) {
      root.appendChild(el("p", null, ["Module not found. ", el("a", { href: "index.html" }, ["Return to all modules."])]));
      return;
    }

    document.title = m.title + " \u2014 iCSU Smart CI Delivery";
    var params = new URLSearchParams(window.location.search);
    var prefs = getPrefs() || DEFAULT_PREFS;
    var flow = normFlow(params.get("flow")) || prefs.flow || "concept";
    var role = normRole(params.get("role")) || prefs.role || "csam";
    var flowLabel = flow === "guided" ? "Guided path" : "By concept";
    var order = (flow === "guided" ? guidedOrder() : flatOrder()).filter(function (x) { return modules[x]; });
    var pos = order.indexOf(id);

    // Header
    var header = el("div", { className: "module-header" });
    header.appendChild(el("p", { className: "module-eyebrow" }, [m.group]));
    header.appendChild(el("h1", { className: "module-title" }, [m.title]));
    var meta = el("div", { className: "module-meta" }, [
      el("span", { className: "pill" }, ["\u23f1 " + (m.duration || "30 min") + " delivery"]),
      el("span", null, [flowLabel + " \u00b7 " + (pos + 1) + " of " + order.length]),
      el("span", null, [(m.questions ? m.questions.length : 0) + "-question knowledge check"])
    ]);
    header.appendChild(meta);
    root.appendChild(header);

    // 1. Executive summary
    root.appendChild(section("Executive Summary", "Why this 30 minutes matters",
      [el("p", { className: "lede", html: m.executiveSummary })], "section--exec"));

    // 2. What you'll gain
    var gain = el("ul", { className: "gain-list" });
    (m.whatYouGain || []).forEach(function (g) { gain.appendChild(el("li", { html: g })); });
    root.appendChild(section("What You'll Gain", "What you'll walk away able to do", [gain]));

    // 3. The topic explained
    root.appendChild(section("The Topic", "The concept, explained",
      [el("div", { html: m.explanation })]));

    // 4. Role-based examples (CSAM / CSA) — defaults to the reader's chosen role
    var tabs = el("div", { className: "role-tabs" });
    var csamBtn = el("button", { className: "role-tab", "data-role": "csam", type: "button" }, ["CSAM \u2014 Customer Success Account Manager"]);
    var csaBtn = el("button", { className: "role-tab", "data-role": "csa", type: "button" }, ["CSA \u2014 Cloud Solution Architect"]);
    tabs.appendChild(csamBtn);
    tabs.appendChild(csaBtn);

    var csamPanel = el("div", { className: "role-panel role-panel--csam" }, [
      el("p", { className: "role-panel__role" }, ["CSAM \u00b7 Customer Success Account Manager"]),
      el("div", { html: m.csamExample })
    ]);
    var csaPanel = el("div", { className: "role-panel role-panel--csa" }, [
      el("p", { className: "role-panel__role" }, ["CSA \u00b7 Cloud Solution Architect"]),
      el("div", { html: m.csaExample })
    ]);

    function selectRole(r) {
      var isCsam = r === "csam";
      csamBtn.setAttribute("aria-selected", isCsam ? "true" : "false");
      csaBtn.setAttribute("aria-selected", isCsam ? "false" : "true");
      csamPanel.classList.toggle("is-active", isCsam);
      csaPanel.classList.toggle("is-active", !isCsam);
    }
    csamBtn.addEventListener("click", function () { selectRole("csam"); });
    csaBtn.addEventListener("click", function () { selectRole("csa"); });
    selectRole(role);

    root.appendChild(section("Role-Based Examples", "How it looks in the field", [tabs, csamPanel, csaPanel]));

    // 5. Recap
    var recap = el("ul", { className: "recap-list" });
    (m.recap || []).forEach(function (r) { recap.appendChild(el("li", { html: r })); });
    root.appendChild(section("Recap", "Key concepts & takeaways", [recap]));

    // 6. Knowledge check
    root.appendChild(renderKnowledgeCheck(m));

    // Prev / next nav
    var nav = el("nav", { className: "module-nav" });
    if (pos > 0) {
      var prev = modules[order[pos - 1]];
      var pa = el("a", { href: "module.html?id=" + encodeURIComponent(prev.id) + "&flow=" + flow }, [
        el("small", null, ["\u2190 Previous module"]),
        el("strong", null, [prev.title])
      ]);
      nav.appendChild(pa);
    }
    if (pos < order.length - 1) {
      var next = modules[order[pos + 1]];
      var na = el("a", { className: "is-next", href: "module.html?id=" + encodeURIComponent(next.id) + "&flow=" + flow }, [
        el("small", null, ["Next module \u2192"]),
        el("strong", null, [next.title])
      ]);
      nav.appendChild(na);
    }
    root.appendChild(nav);
  }

  /* ---------------- Knowledge check ---------------- */
  function renderKnowledgeCheck(m) {
    var questions = m.questions || [];
    var passingScore = m.passingScore || 80;
    var wrap = el("section", { className: "section" });
    wrap.appendChild(el("p", { className: "section__kicker" }, [el("span", { className: "dot" }), "Knowledge Check"]));
    wrap.appendChild(el("h2", { className: "section__title" }, ["Test your understanding"]));
    wrap.appendChild(el("p", { className: "kc-intro" }, ["Microsoft certification\u2013style questions. Commit to an answer to reveal the explanation."]));
    wrap.appendChild(el("div", { className: "meta-row" }, [
      el("span", { html: "<strong>Questions:</strong> " + questions.length }),
      el("span", { html: "<strong>Pass:</strong> " + passingScore + "%" })
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
        if (answered === total) renderSummary(container, correct, total, passingScore);
      }));
    });
    return wrap;
  }

  function renderQuestion(q, index, total, onAnswered) {
    var card = el("section", { className: "question-card", "data-index": index });
    card.appendChild(el("span", { className: "question-card__index" }, ["Question " + (index + 1) + " of " + total]));
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
    var checkBtn = el("button", { className: "btn btn--primary", type: "button" }, ["Check answer"]);
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
          entry.li.appendChild(el("span", { className: "option__marker option__marker--correct" }, ["\u2713 Correct answer"]));
        } else if (i === selected) {
          entry.li.classList.add("option--incorrect");
          entry.li.appendChild(el("span", { className: "option__marker option__marker--incorrect" }, ["\u2715 Your answer"]));
        }
      });
      feedback.className = "feedback " + (isCorrect ? "feedback--correct" : "feedback--incorrect");
      feedback.innerHTML = "";
      feedback.appendChild(el("p", { className: "feedback__title" }, [isCorrect ? "Correct" : "Not quite"]));
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

  function renderSummary(container, correct, total, passingScore) {
    var pct = Math.round((correct / total) * 100);
    var passed = pct >= passingScore;
    var summary = el("div", { className: "summary " + (passed ? "summary--pass" : "summary--retry") });
    summary.appendChild(el("h2", { className: "summary__title" }, [passed ? "Knowledge check complete" : "Almost there"]));
    summary.appendChild(el("div", { className: "summary__score" }, [correct + " / " + total]));
    summary.appendChild(el("p", { className: "summary__detail" }, [
      pct + "% \u00b7 " + (passed ? "You passed. Review any items you missed." : "Passing score is " + passingScore + "%. Review the module and try again.")
    ]));
    var retry = el("button", { className: "btn btn--primary", type: "button" }, ["Retry knowledge check"]);
    retry.addEventListener("click", function () { window.location.reload(); });
    var back = el("a", { className: "btn btn--secondary", href: "index.html" }, ["All modules"]);
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
