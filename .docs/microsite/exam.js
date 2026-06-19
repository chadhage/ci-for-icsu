/*
 * iCSU Smart CI — CI-900 Practice Certification Exam runtime.
 * Consumes window.MODULES (keyed object) from data.js.
 *
 * Mimics the Microsoft Certification (Pearson VUE) exam experience:
 *   - Practice / Prep mode: one question at a time with immediate feedback.
 *   - Certification (Exam) mode: timed, no feedback, mark-for-review,
 *     end-of-exam review grid, then a scaled score report (1000-point
 *     scale, 700 to pass) with a per-skill-area breakdown.
 *
 * This is an UNOFFICIAL practice assessment built from the iCSU CI
 * knowledge base. It is not a real Microsoft exam.
 */
(function () {
  "use strict";

  /* ----------------------------------------------------------------
   * Exam definition
   * ---------------------------------------------------------------- */
  var EXAM = {
    code: "CI-900",
    name: "Continuous Improvement Fundamentals",
    length: 50,        // questions in a full certification attempt
    minutes: 60,       // time allowed (certification mode)
    passScaled: 700,   // passing scaled score (out of 1000)
    maxScaled: 1000
  };

  // Skill areas ("Skills measured") with display weightings, mirroring the
  // module groups. Weights sum to 100 and drive how a certification attempt
  // is sampled across domains.
  var DOMAINS = [
    { key: "foundations", name: "Describe continuous-improvement foundations and concepts", display: "10\u201315%", weight: 13, ids: ["intro", "belts", "ms-ci-cop", "data-types", "convergent-divergent", "house-of-lean"] },
    { key: "methods", name: "Apply improvement methodologies and cycles", display: "10\u201315%", weight: 12, ids: ["dmaic", "pdca", "a3", "failed-hypothesis"] },
    { key: "value", name: "Define customer value and quality", display: "10\u201315%", weight: 12, ids: ["value", "voc", "ctq", "copq", "waste"] },
    { key: "mapping", name: "Map and analyze processes and root causes", display: "15\u201325%", weight: 20, ids: ["sipoc", "value-stream", "pareto-chart", "ishikawa", "5-whys", "6-ms", "fmea"] },
    { key: "flow", name: "Optimize workplace, flow, and standardization", display: "20\u201325%", weight: 23, ids: ["5s", "standard-work", "gemba", "poka-yoke", "andon-cord", "takt-time", "heijunka", "one-piece-flow", "pull-vs-push", "limit-wip", "supermarket", "kaizen", "kanban"] },
    { key: "measure", name: "Measure and control processes statistically", display: "10\u201315%", weight: 12, ids: ["control-charts", "process-capability", "p-value"] },
    { key: "govern", name: "Lead CI strategy and governance", display: "5\u201310%", weight: 8, ids: ["hoshin-kanri", "project-charter"] }
  ];

  var MODULE_DOMAIN = {};
  DOMAINS.forEach(function (d) {
    d.ids.forEach(function (id) { MODULE_DOMAIN[id] = d; });
  });
  function domainByKey(key) {
    for (var i = 0; i < DOMAINS.length; i++) { if (DOMAINS[i].key === key) return DOMAINS[i]; }
    return null;
  }

  /* ----------------------------------------------------------------
   * DOM + utility helpers (mirrors app.js conventions)
   * ---------------------------------------------------------------- */
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

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function formatClock(totalSeconds) {
    if (totalSeconds < 0) totalSeconds = 0;
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    return (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
  }

  /* ----------------------------------------------------------------
   * Question pool
   * ---------------------------------------------------------------- */
  var POOL = [];
  function buildPool() {
    var modules = window.MODULES || {};
    POOL = [];
    Object.keys(modules).forEach(function (mid) {
      var m = modules[mid];
      var d = MODULE_DOMAIN[mid];
      (m.questions || []).forEach(function (q, qi) {
        if (!q || !q.options) return;
        POOL.push({
          uid: mid + "#" + qi,
          moduleId: mid,
          moduleTitle: m.title,
          domainKey: d ? d.key : "foundations",
          domainName: d ? d.name : "General",
          prompt: q.prompt,
          options: q.options.slice(),
          correctIndex: q.correctIndex,
          explanation: q.explanation
        });
      });
    });
  }

  // Turn a pool item into a live question: shuffle the options (like a real
  // exam) and remap the correct index so memorizing positions does not help.
  function prepare(item) {
    var order = shuffle(item.options.map(function (_, i) { return i; }));
    var opts = order.map(function (i) { return item.options[i]; });
    return {
      uid: item.uid,
      moduleId: item.moduleId,
      moduleTitle: item.moduleTitle,
      domainKey: item.domainKey,
      domainName: item.domainName,
      prompt: item.prompt,
      options: opts,
      answerIndex: order.indexOf(item.correctIndex),
      explanation: item.explanation,
      chosen: null,
      marked: false,
      revealed: false
    };
  }

  // Allocate `length` questions across domains proportional to weight.
  function allocate(length) {
    var raw = DOMAINS.map(function (d) { return (d.weight / 100) * length; });
    var counts = raw.map(function (x) { return Math.floor(x); });
    var used = counts.reduce(function (a, b) { return a + b; }, 0);
    var rema = raw
      .map(function (x, i) { return { i: i, r: x - Math.floor(x) }; })
      .sort(function (a, b) { return b.r - a.r; });
    var k = 0;
    while (used < length && rema.length) {
      counts[rema[k % rema.length].i] += 1;
      used += 1; k += 1;
    }
    return counts;
  }

  function sampleCertification(length) {
    var counts = allocate(length);
    var chosen = [];
    DOMAINS.forEach(function (d, di) {
      var dq = POOL.filter(function (p) { return p.domainKey === d.key; });
      shuffle(dq);
      chosen = chosen.concat(dq.slice(0, counts[di]));
    });
    shuffle(chosen);
    return chosen.map(prepare);
  }

  function samplePractice(domainKey, length) {
    var src = domainKey === "all"
      ? POOL.slice()
      : POOL.filter(function (p) { return p.domainKey === domainKey; });
    shuffle(src);
    return src.slice(0, Math.min(length, src.length)).map(prepare);
  }

  /* ----------------------------------------------------------------
   * State
   * ---------------------------------------------------------------- */
  var S = {
    mode: null,        // "practice" | "exam"
    questions: [],
    index: 0,
    startedAt: 0,
    remaining: 0,      // seconds (exam mode)
    timerId: null,
    submitted: false
  };
  var ROOT = null;

  function stopTimer() {
    if (S.timerId) { window.clearInterval(S.timerId); S.timerId = null; }
  }

  function answeredCount() {
    return S.questions.filter(function (q) { return q.chosen != null; }).length;
  }

  /* ----------------------------------------------------------------
   * Start screen
   * ---------------------------------------------------------------- */
  function renderStart() {
    stopTimer();
    ROOT.innerHTML = "";

    var totalQ = POOL.length;

    var head = el("section", { className: "exam-hero" }, [
      el("p", { className: "exam-hero__eyebrow" }, ["Microsoft certification\u2013style practice assessment"]),
      el("h1", { className: "exam-hero__title" }, [EXAM.code + ": " + EXAM.name]),
      el("p", { className: "exam-hero__lede" }, [
        "A realistic, exam-style assessment over the entire iCSU Smart CI library. Choose " +
        "Practice mode to learn with instant feedback, or Certification mode for a timed, " +
        "scored attempt that mirrors the real testing experience."
      ]),
      el("div", { className: "exam-hero__facts" }, [
        fact(String(totalQ), "questions in the bank"),
        fact(EXAM.length + " Q", "per certification attempt"),
        fact(EXAM.minutes + " min", "time limit (cert mode)"),
        fact(EXAM.passScaled + " / " + EXAM.maxScaled, "score to pass")
      ])
    ]);
    ROOT.appendChild(head);

    var modeGrid = el("div", { className: "exam-modes" });

    /* Practice card */
    var lenSel = el("select", { className: "exam-field__input", id: "practice-length" }, [
      optionEl("10", "10 questions"),
      optionEl("25", "25 questions", true),
      optionEl("50", "50 questions"),
      optionEl("0", "All " + totalQ + " questions")
    ]);
    var domSel = el("select", { className: "exam-field__input", id: "practice-domain" },
      [optionEl("all", "All skill areas", true)].concat(DOMAINS.map(function (d) {
        return optionEl(d.key, shortDomain(d.name));
      }))
    );
    var startPractice = el("button", { className: "btn btn--primary exam-mode__start", type: "button" }, ["Start practice"]);
    startPractice.addEventListener("click", function () {
      var len = parseInt(lenSel.value, 10);
      if (!len) len = totalQ;
      var dom = domSel.value;
      var qs = samplePractice(dom, len);
      if (!qs.length) return;
      beginSession("practice", qs);
    });

    var practiceCard = el("div", { className: "exam-mode exam-mode--practice" }, [
      el("div", { className: "exam-mode__badge" }, ["Practice / Prep mode"]),
      el("h2", { className: "exam-mode__title" }, ["Learn with instant feedback"]),
      el("p", { className: "exam-mode__desc" }, [
        "One question at a time. Commit to an answer and the correct choice and full " +
        "explanation appear immediately. Untimed \u2014 ideal for building knowledge before a timed run."
      ]),
      el("ul", { className: "exam-mode__list" }, [
        el("li", null, ["Immediate answer + rationale after each item"]),
        el("li", null, ["Focus on a single skill area or the whole bank"]),
        el("li", null, ["No timer, retake as often as you like"])
      ]),
      el("div", { className: "exam-fields" }, [
        field("Length", lenSel),
        field("Skill area", domSel)
      ]),
      startPractice
    ]);

    /* Certification card */
    var startExam = el("button", { className: "btn btn--primary exam-mode__start", type: "button" }, ["Start certification exam"]);
    startExam.addEventListener("click", function () {
      var qs = sampleCertification(EXAM.length);
      if (!qs.length) return;
      beginSession("exam", qs);
    });

    var examCard = el("div", { className: "exam-mode exam-mode--cert" }, [
      el("div", { className: "exam-mode__badge exam-mode__badge--cert" }, ["Certification mode"]),
      el("h2", { className: "exam-mode__title" }, ["Timed, scored, exam-realistic"]),
      el("p", { className: "exam-mode__desc" }, [
        EXAM.length + " questions in " + EXAM.minutes + " minutes. No feedback until you submit. " +
        "Mark items for review, revisit them from a review screen, then receive a scaled score and a " +
        "skill-area breakdown \u2014 exactly like a Microsoft certification exam."
      ]),
      el("ul", { className: "exam-mode__list" }, [
        el("li", null, [EXAM.length + " questions \u00b7 " + EXAM.minutes + "-minute countdown"]),
        el("li", null, ["Mark for review + end-of-exam review grid"]),
        el("li", null, ["Scaled score out of " + EXAM.maxScaled + " \u00b7 pass at " + EXAM.passScaled]),
        el("li", null, ["Per\u2013skill-area performance report"])
      ]),
      startExam
    ]);

    modeGrid.appendChild(practiceCard);
    modeGrid.appendChild(examCard);
    ROOT.appendChild(modeGrid);

    /* Skills measured table */
    var skills = el("section", { className: "exam-skills" }, [
      el("h2", { className: "exam-skills__title" }, ["Skills measured"]),
      el("p", { className: "exam-skills__note" }, [
        "A certification attempt samples questions across these skill areas using the listed weightings."
      ])
    ]);
    var table = el("table", { className: "exam-skills__table" });
    var thead = el("thead", null, [el("tr", null, [
      el("th", null, ["Skill area"]),
      el("th", null, ["Weighting"]),
      el("th", null, ["Bank"])
    ])]);
    var tbody = el("tbody");
    DOMAINS.forEach(function (d) {
      var n = POOL.filter(function (p) { return p.domainKey === d.key; }).length;
      tbody.appendChild(el("tr", null, [
        el("td", null, [d.name]),
        el("td", { className: "exam-skills__weight" }, [d.display]),
        el("td", { className: "exam-skills__bank" }, [String(n) + " Q"])
      ]));
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    skills.appendChild(table);
    ROOT.appendChild(skills);

    ROOT.appendChild(el("p", { className: "exam-disclaimer" }, [
      "This is an unofficial practice assessment built from the iCSU Smart CI knowledge base to " +
      "mimic the format of Microsoft certification exams. It is not affiliated with or endorsed by Microsoft, " +
      "and " + EXAM.code + " is not a real Microsoft exam."
    ]));
  }

  function fact(value, label) {
    return el("div", { className: "exam-hero__fact" }, [
      el("strong", null, [value]),
      el("span", null, [label])
    ]);
  }
  function field(label, input) {
    return el("label", { className: "exam-field" }, [
      el("span", { className: "exam-field__label" }, [label]),
      input
    ]);
  }
  function optionEl(value, label, selected) {
    var a = { value: value };
    if (selected) a.selected = "selected";
    return el("option", a, [label]);
  }
  function shortDomain(name) {
    // Trim the verb prefix for a tighter dropdown label.
    return name
      .replace(/^Describe /, "")
      .replace(/^Apply /, "")
      .replace(/^Define /, "")
      .replace(/^Map and analyze /, "Mapping: ")
      .replace(/^Optimize /, "")
      .replace(/^Measure and control /, "Measure & control ")
      .replace(/^Lead /, "");
  }

  /* ----------------------------------------------------------------
   * Session
   * ---------------------------------------------------------------- */
  function beginSession(mode, questions) {
    S.mode = mode;
    S.questions = questions;
    S.index = 0;
    S.submitted = false;
    S.startedAt = Date.now();
    stopTimer();
    if (mode === "exam") {
      S.remaining = EXAM.minutes * 60;
      S.timerId = window.setInterval(tick, 1000);
    }
    renderQuestionScreen();
  }

  function tick() {
    S.remaining -= 1;
    var t = document.getElementById("exam-timer");
    if (t) {
      t.textContent = formatClock(S.remaining);
      t.classList.toggle("is-warning", S.remaining <= 300 && S.remaining > 60);
      t.classList.toggle("is-critical", S.remaining <= 60);
    }
    if (S.remaining <= 0) {
      stopTimer();
      submitExam(true);
    }
  }

  /* ----------------------------------------------------------------
   * Question screen
   * ---------------------------------------------------------------- */
  function renderQuestionScreen() {
    ROOT.innerHTML = "";
    var q = S.questions[S.index];
    var total = S.questions.length;
    var isExam = S.mode === "exam";

    /* Exam command bar */
    var bar = el("div", { className: "exam-bar" });
    bar.appendChild(el("div", { className: "exam-bar__id" }, [
      el("span", { className: "exam-bar__code" }, [EXAM.code]),
      el("span", { className: "exam-bar__mode" }, [isExam ? "Certification mode" : "Practice mode"])
    ]));
    var status = el("div", { className: "exam-bar__status" }, [
      el("span", { className: "exam-bar__counter" }, ["Question " + (S.index + 1) + " of " + total]),
      el("span", { className: "exam-bar__answered" }, [answeredCount() + " answered"])
    ]);
    bar.appendChild(status);
    if (isExam) {
      bar.appendChild(el("div", { className: "exam-bar__timer", id: "exam-timer" }, [formatClock(S.remaining)]));
    } else {
      var endP = el("button", { className: "exam-bar__end", type: "button" }, ["End practice"]);
      endP.addEventListener("click", function () { confirmEnd(); });
      bar.appendChild(endP);
    }
    ROOT.appendChild(bar);

    /* Progress */
    var prog = el("div", { className: "progress-bar" }, [el("div", { className: "progress-bar__fill" })]);
    prog.firstChild.style.width = Math.round(((S.index + 1) / total) * 100) + "%";
    ROOT.appendChild(prog);

    /* Question card */
    var card = el("section", { className: "exam-question" });
    var topline = el("div", { className: "exam-question__top" }, [
      el("span", { className: "exam-question__index" }, ["Question " + (S.index + 1)])
    ]);
    if (!isExam) {
      topline.appendChild(el("span", { className: "exam-question__domain" }, [shortDomain(q.domainName)]));
    }
    card.appendChild(topline);
    card.appendChild(el("p", { className: "exam-question__prompt", html: q.prompt }));
    card.appendChild(el("p", { className: "exam-question__hint" }, ["Choose the best answer."]));

    var optionsList = el("ul", { className: "options" });
    var name = "q_" + S.index;
    var inputs = [];
    q.options.forEach(function (text, i) {
      var input = el("input", { type: "radio", name: name, value: String(i), id: name + "_o" + i });
      if (q.chosen === i) input.checked = true;
      if (q.revealed) input.disabled = true;
      var label = el("span", { className: "option__label", html: text });
      var li = el("li", { className: "option" }, [input, label]);

      if (q.revealed) {
        if (i === q.answerIndex) {
          li.classList.add("option--correct");
          li.appendChild(el("span", { className: "option__marker option__marker--correct" }, ["\u2713 Correct answer"]));
        } else if (i === q.chosen) {
          li.classList.add("option--incorrect");
          li.appendChild(el("span", { className: "option__marker option__marker--incorrect" }, ["\u2715 Your answer"]));
        }
      } else if (q.chosen === i) {
        li.classList.add("option--selected");
      }

      li.addEventListener("click", function (e) {
        if (q.revealed) return;
        if (e.target.tagName !== "INPUT") input.checked = true;
        q.chosen = i;
        Array.prototype.forEach.call(optionsList.querySelectorAll(".option"), function (o) {
          o.classList.remove("option--selected");
        });
        li.classList.add("option--selected");
        // update answered counter live
        var ac = bar.querySelector(".exam-bar__answered");
        if (ac) ac.textContent = answeredCount() + " answered";
        if (S.mode === "practice" && checkBtn) checkBtn.disabled = false;
      });
      inputs.push({ input: input, li: li });
      optionsList.appendChild(li);
    });
    card.appendChild(optionsList);

    /* Practice feedback area */
    var feedback = el("div", { className: "feedback", role: "status" });
    if (q.revealed) {
      var ok = q.chosen === q.answerIndex;
      feedback.className = "feedback " + (ok ? "feedback--correct" : "feedback--incorrect");
      feedback.appendChild(el("p", { className: "feedback__title" }, [ok ? "Correct" : "Not quite"]));
      feedback.appendChild(el("p", { className: "feedback__body", html: q.explanation }));
      feedback.style.display = "block";
    }
    card.appendChild(feedback);
    ROOT.appendChild(card);

    /* Bottom navigation */
    var nav = el("div", { className: "exam-nav" });

    var prevBtn = el("button", { className: "btn btn--secondary", type: "button" }, ["\u2190 Previous"]);
    prevBtn.disabled = S.index === 0;
    prevBtn.addEventListener("click", function () { if (S.index > 0) { S.index -= 1; renderQuestionScreen(); } });

    var markWrap = el("label", { className: "exam-mark" });
    var markBox = el("input", { type: "checkbox" });
    if (q.marked) markBox.checked = true;
    markBox.addEventListener("change", function () { q.marked = markBox.checked; });
    markWrap.appendChild(markBox);
    markWrap.appendChild(el("span", null, ["Mark for review"]));

    var navRight = el("div", { className: "exam-nav__right" });

    var checkBtn = null;
    if (!isExam) {
      checkBtn = el("button", { className: "btn btn--primary", type: "button" }, ["Check answer"]);
      checkBtn.disabled = q.chosen == null || q.revealed;
      checkBtn.addEventListener("click", function () {
        if (q.chosen == null) return;
        q.revealed = true;
        renderQuestionScreen();
      });
      navRight.appendChild(checkBtn);
    }

    if (isExam) {
      var reviewBtn = el("button", { className: "btn btn--secondary", type: "button" }, ["Review \u2630"]);
      reviewBtn.addEventListener("click", function () { renderReviewGrid(); });
      navRight.appendChild(reviewBtn);
    }

    if (S.index < total - 1) {
      var nextBtn = el("button", { className: "btn btn--primary", type: "button" }, ["Next \u2192"]);
      nextBtn.addEventListener("click", function () { S.index += 1; renderQuestionScreen(); });
      navRight.appendChild(nextBtn);
    } else {
      var finishBtn = el("button", { className: "btn btn--primary", type: "button" }, [isExam ? "Review & submit" : "Finish"]);
      finishBtn.addEventListener("click", function () {
        if (isExam) renderReviewGrid();
        else submitExam(false);
      });
      navRight.appendChild(finishBtn);
    }

    nav.appendChild(prevBtn);
    nav.appendChild(markWrap);
    nav.appendChild(navRight);
    ROOT.appendChild(nav);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  /* ----------------------------------------------------------------
   * Review grid (certification mode)
   * ---------------------------------------------------------------- */
  function renderReviewGrid() {
    ROOT.innerHTML = "";
    var total = S.questions.length;

    var bar = el("div", { className: "exam-bar" }, [
      el("div", { className: "exam-bar__id" }, [
        el("span", { className: "exam-bar__code" }, [EXAM.code]),
        el("span", { className: "exam-bar__mode" }, ["Review screen"])
      ]),
      el("div", { className: "exam-bar__status" }, [
        el("span", { className: "exam-bar__counter" }, [answeredCount() + " of " + total + " answered"])
      ])
    ]);
    if (S.mode === "exam") {
      bar.appendChild(el("div", { className: "exam-bar__timer", id: "exam-timer" }, [formatClock(S.remaining)]));
    }
    ROOT.appendChild(bar);

    var panel = el("section", { className: "exam-review" });
    panel.appendChild(el("h2", { className: "exam-review__title" }, ["Review your answers"]));
    panel.appendChild(el("p", { className: "exam-review__note" }, [
      "Select any question to return to it. Items you flagged are marked. " +
      "Unanswered questions are scored as incorrect."
    ]));

    var legend = el("div", { className: "exam-legend" }, [
      legendItem("exam-cell--answered", "Answered"),
      legendItem("exam-cell--unanswered", "Unanswered"),
      legendItem("exam-cell--marked", "Marked for review")
    ]);
    panel.appendChild(legend);

    var grid = el("div", { className: "exam-grid" });
    S.questions.forEach(function (q, i) {
      var cls = "exam-cell " + (q.chosen != null ? "exam-cell--answered" : "exam-cell--unanswered");
      if (q.marked) cls += " exam-cell--marked";
      var cell = el("button", { className: cls, type: "button", title: q.marked ? "Marked for review" : "" }, [String(i + 1)]);
      cell.addEventListener("click", function () { S.index = i; renderQuestionScreen(); });
      grid.appendChild(cell);
    });
    panel.appendChild(grid);

    var unanswered = total - answeredCount();
    var markedCount = S.questions.filter(function (q) { return q.marked; }).length;
    panel.appendChild(el("p", { className: "exam-review__summary" }, [
      unanswered === 0 ? "All questions answered." : (unanswered + " question" + (unanswered === 1 ? "" : "s") + " still unanswered."),
      markedCount ? "  \u00b7  " + markedCount + " marked for review." : ""
    ]));

    var actions = el("div", { className: "exam-review__actions" });
    var back = el("button", { className: "btn btn--secondary", type: "button" }, ["\u2190 Return to questions"]);
    back.addEventListener("click", function () { renderQuestionScreen(); });
    var submit = el("button", { className: "btn btn--primary", type: "button" }, ["Submit exam"]);
    submit.addEventListener("click", function () {
      var msg = unanswered > 0
        ? ("You have " + unanswered + " unanswered question" + (unanswered === 1 ? "" : "s") + ". Submit anyway? Unanswered items are scored as incorrect.")
        : "Submit your exam for scoring?";
      if (window.confirm(msg)) submitExam(false);
    });
    actions.appendChild(back);
    actions.appendChild(submit);
    panel.appendChild(actions);

    ROOT.appendChild(panel);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function legendItem(cls, label) {
    return el("span", { className: "exam-legend__item" }, [
      el("span", { className: "exam-cell exam-cell--legend " + cls }),
      label
    ]);
  }

  /* ----------------------------------------------------------------
   * Scoring + report
   * ---------------------------------------------------------------- */
  function confirmEnd() {
    if (window.confirm("End this practice session and see your results?")) submitExam(false);
  }

  function submitExam(timedOut) {
    if (S.submitted) return;
    S.submitted = true;
    stopTimer();
    renderReport(timedOut);
  }

  function renderReport(timedOut) {
    ROOT.innerHTML = "";
    var total = S.questions.length;
    var correct = S.questions.filter(function (q) { return q.chosen === q.answerIndex; }).length;
    var pct = total ? correct / total : 0;
    var scaled = Math.round(pct * EXAM.maxScaled);
    var passed = scaled >= EXAM.passScaled;
    var isExam = S.mode === "exam";
    var elapsed = Math.max(0, Math.round((Date.now() - S.startedAt) / 1000));

    /* Score banner */
    var banner = el("section", { className: "score-banner " + (passed ? "score-banner--pass" : "score-banner--fail") });
    banner.appendChild(el("p", { className: "score-banner__eyebrow" }, [
      EXAM.code + ": " + EXAM.name + (isExam ? " \u00b7 Certification attempt" : " \u00b7 Practice session")
    ]));
    banner.appendChild(el("div", { className: "score-banner__result" }, [passed ? "PASS" : "DID NOT PASS"]));
    if (isExam) {
      banner.appendChild(el("div", { className: "score-banner__score" }, [
        el("strong", null, [String(scaled)]),
        el("span", null, [" / " + EXAM.maxScaled])
      ]));
      banner.appendChild(el("p", { className: "score-banner__bar-label" }, ["Passing score: " + EXAM.passScaled]));
      // scaled score meter with pass line
      var meter = el("div", { className: "score-meter" }, [
        el("div", { className: "score-meter__fill", html: "" }),
        el("div", { className: "score-meter__passline" }, [el("span", null, ["pass " + EXAM.passScaled])])
      ]);
      meter.querySelector(".score-meter__fill").style.width = Math.min(100, Math.round(scaled / EXAM.maxScaled * 100)) + "%";
      meter.querySelector(".score-meter__passline").style.left = Math.round(EXAM.passScaled / EXAM.maxScaled * 100) + "%";
      banner.appendChild(meter);
    } else {
      banner.appendChild(el("div", { className: "score-banner__score" }, [
        el("strong", null, [correct + " / " + total]),
        el("span", null, [" correct (" + Math.round(pct * 100) + "%)"])
      ]));
    }
    var sub = correct + " of " + total + " correct \u00b7 time used " + formatClock(elapsed);
    if (timedOut) sub = "Time expired \u00b7 " + sub;
    banner.appendChild(el("p", { className: "score-banner__sub" }, [sub]));
    ROOT.appendChild(banner);

    /* Skill-area breakdown */
    var breakdown = el("section", { className: "exam-breakdown" });
    breakdown.appendChild(el("h2", { className: "exam-breakdown__title" }, ["Performance by skill area"]));
    var seen = {};
    S.questions.forEach(function (q) {
      if (!seen[q.domainKey]) seen[q.domainKey] = { total: 0, correct: 0 };
      seen[q.domainKey].total += 1;
      if (q.chosen === q.answerIndex) seen[q.domainKey].correct += 1;
    });
    DOMAINS.forEach(function (d) {
      var s = seen[d.key];
      if (!s) return;
      var dp = s.total ? Math.round(s.correct / s.total * 100) : 0;
      var row = el("div", { className: "skillbar" }, [
        el("div", { className: "skillbar__head" }, [
          el("span", { className: "skillbar__name" }, [d.name]),
          el("span", { className: "skillbar__num" }, [s.correct + " / " + s.total + " (" + dp + "%)"])
        ]),
        el("div", { className: "skillbar__track" }, [
          el("div", { className: "skillbar__fill " + (dp >= 70 ? "is-strong" : dp >= 50 ? "is-mid" : "is-weak") })
        ])
      ]);
      row.querySelector(".skillbar__fill").style.width = dp + "%";
      breakdown.appendChild(row);
    });
    ROOT.appendChild(breakdown);

    /* Answer review (collapsible) */
    var reviewWrap = el("section", { className: "exam-answers" });
    var toggle = el("button", { className: "btn btn--secondary exam-answers__toggle", type: "button" }, ["Review all questions & explanations"]);
    var list = el("div", { className: "exam-answers__list", style: "display:none" });
    var built = false;
    toggle.addEventListener("click", function () {
      var open = list.style.display !== "none";
      if (!built && !open) { buildAnswerList(list); built = true; }
      list.style.display = open ? "none" : "block";
      toggle.textContent = open ? "Review all questions & explanations" : "Hide question review";
    });
    reviewWrap.appendChild(toggle);
    reviewWrap.appendChild(list);
    ROOT.appendChild(reviewWrap);

    /* Actions */
    var actions = el("div", { className: "exam-report__actions" });
    var again = el("button", { className: "btn btn--primary", type: "button" }, [isExam ? "Retake certification exam" : "New practice session"]);
    again.addEventListener("click", function () { renderStart(); });
    var home = el("a", { className: "btn btn--secondary", href: "index.html" }, ["Back to modules"]);
    actions.appendChild(again);
    actions.appendChild(home);
    ROOT.appendChild(actions);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function buildAnswerList(container) {
    S.questions.forEach(function (q, i) {
      var ok = q.chosen === q.answerIndex;
      var unanswered = q.chosen == null;
      var item = el("div", { className: "answer-item " + (ok ? "answer-item--correct" : "answer-item--incorrect") });
      item.appendChild(el("div", { className: "answer-item__head" }, [
        el("span", { className: "answer-item__num" }, ["Q" + (i + 1)]),
        el("span", { className: "answer-item__tag answer-item__tag--" + (ok ? "ok" : "no") }, [ok ? "Correct" : (unanswered ? "Unanswered" : "Incorrect")]),
        el("span", { className: "answer-item__domain" }, [shortDomain(q.domainName)])
      ]));
      item.appendChild(el("p", { className: "answer-item__prompt", html: q.prompt }));
      var ul = el("ul", { className: "answer-item__options" });
      q.options.forEach(function (text, oi) {
        var cls = "answer-opt";
        var tag = "";
        if (oi === q.answerIndex) { cls += " answer-opt--correct"; tag = " \u2713 Correct answer"; }
        if (oi === q.chosen && oi !== q.answerIndex) { cls += " answer-opt--chosen"; tag = " \u2715 Your answer"; }
        else if (oi === q.chosen && oi === q.answerIndex) { tag = " \u2713 Your answer"; }
        ul.appendChild(el("li", { className: cls, html: text + (tag ? "<span class='answer-opt__tag'>" + tag + "</span>" : "") }));
      });
      item.appendChild(ul);
      item.appendChild(el("p", { className: "answer-item__exp", html: "<strong>Explanation:</strong> " + q.explanation }));
      container.appendChild(item);
    });
  }

  /* ----------------------------------------------------------------
   * Boot
   * ---------------------------------------------------------------- */
  function init() {
    ROOT = document.getElementById("exam-root");
    if (!ROOT) return;
    buildPool();
    if (!POOL.length) {
      ROOT.appendChild(el("p", null, ["No questions available."]));
      return;
    }
    renderStart();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
