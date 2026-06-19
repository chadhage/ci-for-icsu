/*
 * iCSU Smart CI — 30-Minute Delivery Microsite runtime.
 * Consumes window.MODULES (keyed object) from data.js.
 * Renders the landing index and individual module delivery pages,
 * including the Microsoft Learn-style knowledge check.
 */
(function () {
  "use strict";

  // Ordered groups define both the index layout and prev/next flow.
  var GROUPS = [
    { name: "Foundations", ids: ["intro", "belts", "ms-ci-cop", "data-types", "convergent-divergent"] },
    { name: "Methodologies & Cycles", ids: ["dmaic", "pdca", "a3"] },
    { name: "Value & Quality Definition", ids: ["value", "voc", "ctq", "copq", "waste"] },
    { name: "Process Mapping & Analysis", ids: ["sipoc", "value-stream", "pareto-chart", "ishikawa", "5-whys", "6-ms", "fmea"] },
    { name: "Workplace, Flow & Standardization", ids: ["5s", "standard-work", "gemba", "poka-yoke", "andon-cord", "takt-time", "kaizen", "kanban"] },
    { name: "Measurement & Control", ids: ["control-charts", "process-capability"] },
    { name: "Strategy & Governance", ids: ["hoshin-kanri", "project-charter"] }
  ];

  function flatOrder() {
    var out = [];
    GROUPS.forEach(function (g) { g.ids.forEach(function (id) { out.push(id); }); });
    return out;
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

  /* ---------------- Index page ---------------- */
  function renderIndex(root) {
    var modules = window.MODULES || {};
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
        var m = modules[id];
        var card = el("a", { className: "card", href: "module.html?id=" + encodeURIComponent(id) });
        card.appendChild(el("span", { className: "card__num" }, ["MODULE " + String(counter).padStart(2, "0")]));
        card.appendChild(el("h3", { className: "card__title" }, [m.title]));
        card.appendChild(el("p", { className: "card__summary" }, [plainText(m.executiveSummary)]));
        var footer = el("div", { className: "card__footer" }, [
          el("span", { className: "pill" }, [m.duration || "30 min"]),
          el("span", null, [(m.questions ? m.questions.length : 0) + "-question check"])
        ]);
        card.appendChild(footer);
        grid.appendChild(card);
      });
      section.appendChild(grid);
      root.appendChild(section);
    });
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
    var order = flatOrder().filter(function (x) { return modules[x]; });
    var pos = order.indexOf(id);

    // Header
    var header = el("div", { className: "module-header" });
    header.appendChild(el("p", { className: "module-eyebrow" }, [m.group]));
    header.appendChild(el("h1", { className: "module-title" }, [m.title]));
    var meta = el("div", { className: "module-meta" }, [
      el("span", { className: "pill" }, ["\u23f1 " + (m.duration || "30 min") + " delivery"]),
      el("span", null, ["Module " + (pos + 1) + " of " + order.length]),
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

    // 4. Role-based examples (CSAM / CSA)
    var tabs = el("div", { className: "role-tabs" });
    var csamBtn = el("button", { className: "role-tab", "data-role": "csam", "aria-selected": "true", type: "button" }, ["CSAM \u2014 Customer Success Account Manager"]);
    var csaBtn = el("button", { className: "role-tab", "data-role": "csa", "aria-selected": "false", type: "button" }, ["CSA \u2014 Cloud Solution Architect"]);
    tabs.appendChild(csamBtn);
    tabs.appendChild(csaBtn);

    var csamPanel = el("div", { className: "role-panel role-panel--csam is-active" }, [
      el("p", { className: "role-panel__role" }, ["CSAM \u00b7 Customer Success Account Manager"]),
      el("div", { html: m.csamExample })
    ]);
    var csaPanel = el("div", { className: "role-panel role-panel--csa" }, [
      el("p", { className: "role-panel__role" }, ["CSA \u00b7 Cloud Solution Architect"]),
      el("div", { html: m.csaExample })
    ]);

    function selectRole(role) {
      var isCsam = role === "csam";
      csamBtn.setAttribute("aria-selected", isCsam ? "true" : "false");
      csaBtn.setAttribute("aria-selected", isCsam ? "false" : "true");
      csamPanel.classList.toggle("is-active", isCsam);
      csaPanel.classList.toggle("is-active", !isCsam);
    }
    csamBtn.addEventListener("click", function () { selectRole("csam"); });
    csaBtn.addEventListener("click", function () { selectRole("csa"); });

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
      var pa = el("a", { href: "module.html?id=" + encodeURIComponent(prev.id) }, [
        el("small", null, ["\u2190 Previous module"]),
        el("strong", null, [prev.title])
      ]);
      nav.appendChild(pa);
    }
    if (pos < order.length - 1) {
      var next = modules[order[pos + 1]];
      var na = el("a", { className: "is-next", href: "module.html?id=" + encodeURIComponent(next.id) }, [
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
    if (indexRoot) { renderIndex(indexRoot); return; }
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
