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
 * This is an UNOFFICIAL, internal practice assessment built from the iCSU
 * CI knowledge base. "CI-900" is a proposed, internal-only concept for an
 * internal audience at this time. It is not a real Microsoft exam or
 * certification and is not affiliated with or endorsed by Microsoft.
 */
(function () {
  "use strict";

  /* ---------------- i18n helpers ---------------- */
  function t(k) { return window.SmartCI ? window.SmartCI.t(k) : k; }
  function tf(k, params) {
    var s = t(k);
    if (params) Object.keys(params).forEach(function (p) { s = s.replace("{" + p + "}", params[p]); });
    return s;
  }
  function fmtNum(n) { return window.SmartCI ? window.SmartCI.fmtNumber(n) : String(n); }
  function fmtPct(frac) { return window.SmartCI ? window.SmartCI.fmtPercent(frac) : Math.round(frac * 100) + "%"; }
  function domainName(d) { return t("domain." + d.key); }

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
    var modules = (window.SmartCI ? window.SmartCI.getModules() : window.MODULES) || {};
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
          domainName: d ? domainName(d) : "General",
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

    ROOT.appendChild(el("p", { className: "internal-notice", html: t("internal.notice.exam") }));

    var head = el("section", { className: "exam-hero" }, [
      el("p", { className: "exam-hero__eyebrow" }, [t("exam.hero.eyebrow")]),
      el("h1", { className: "exam-hero__title" }, [EXAM.code + ": " + t("exam.name")]),
      el("p", { className: "exam-hero__lede" }, [t("exam.hero.lede")]),
      el("div", { className: "exam-hero__facts" }, [
        fact(fmtNum(totalQ), t("exam.fact.bank")),
        fact(fmtNum(EXAM.length) + " " + t("exam.q.short"), t("exam.fact.perAttempt")),
        fact(fmtNum(EXAM.minutes) + " " + t("exam.min"), t("exam.fact.timeLimit")),
        fact(fmtNum(EXAM.passScaled) + " / " + fmtNum(EXAM.maxScaled), t("exam.fact.scoreToPass"))
      ])
    ]);
    ROOT.appendChild(head);

    var modeGrid = el("div", { className: "exam-modes" });

    /* Practice card */
    var lenSel = el("select", { className: "exam-field__input", id: "practice-length" }, [
      optionEl("10", fmtNum(10) + " " + t("exam.len.questions")),
      optionEl("25", fmtNum(25) + " " + t("exam.len.questions"), true),
      optionEl("50", fmtNum(50) + " " + t("exam.len.questions")),
      optionEl("0", t("exam.len.all") + " " + fmtNum(totalQ) + " " + t("exam.len.allSuffix"))
    ]);
    var domSel = el("select", { className: "exam-field__input", id: "practice-domain" },
      [optionEl("all", t("exam.skill.all"), true)].concat(DOMAINS.map(function (d) {
        return optionEl(d.key, shortDomain(domainName(d)));
      }))
    );
    var startPractice = el("button", { className: "btn btn--primary exam-mode__start", type: "button" }, [t("exam.practice.start")]);
    startPractice.addEventListener("click", function () {
      var len = parseInt(lenSel.value, 10);
      if (!len) len = totalQ;
      var dom = domSel.value;
      // For a specific skill area, never request more than the area's bank.
      // Force the user to accept the maximum available before starting.
      if (dom !== "all") {
        var avail = POOL.filter(function (p) { return p.domainKey === dom; }).length;
        if (avail < len) {
          var d = domainByKey(dom);
          var msg = tf("exam.cap.msg", {
            skill: d ? shortDomain(domainName(d)) : dom,
            avail: fmtNum(avail),
            req: fmtNum(len)
          });
          if (!window.confirm(msg)) return;
          len = avail;
        }
      }
      var qs = samplePractice(dom, len);
      if (!qs.length) return;
      beginSession("practice", qs);
    });

    var practiceCard = el("div", { className: "exam-mode exam-mode--practice" }, [
      el("div", { className: "exam-mode__badge" }, [t("exam.practice.badge")]),
      el("h2", { className: "exam-mode__title" }, [t("exam.practice.title")]),
      el("p", { className: "exam-mode__desc" }, [t("exam.practice.desc")]),
      el("ul", { className: "exam-mode__list" }, [
        el("li", null, [t("exam.practice.li1")]),
        el("li", null, [t("exam.practice.li2")]),
        el("li", null, [t("exam.practice.li3")])
      ]),
      el("div", { className: "exam-fields" }, [
        field(t("exam.field.length"), lenSel),
        field(t("exam.field.skill"), domSel)
      ]),
      startPractice
    ]);

    /* Certification card */
    var startExam = el("button", { className: "btn btn--primary exam-mode__start", type: "button" }, [t("exam.cert.start")]);
    startExam.addEventListener("click", function () {
      var qs = sampleCertification(EXAM.length);
      if (!qs.length) return;
      beginSession("exam", qs);
    });

    var examCard = el("div", { className: "exam-mode exam-mode--cert" }, [
      el("div", { className: "exam-mode__badge exam-mode__badge--cert" }, [t("exam.cert.badge")]),
      el("h2", { className: "exam-mode__title" }, [t("exam.cert.title")]),
      el("p", { className: "exam-mode__desc" }, [
        tf("exam.cert.desc", { len: fmtNum(EXAM.length), min: fmtNum(EXAM.minutes) })
      ]),
      el("ul", { className: "exam-mode__list" }, [
        el("li", null, [tf("exam.cert.li1", { len: fmtNum(EXAM.length), min: fmtNum(EXAM.minutes) })]),
        el("li", null, [t("exam.cert.markLi")]),
        el("li", null, [tf("exam.cert.li3", { max: fmtNum(EXAM.maxScaled), pass: fmtNum(EXAM.passScaled) })]),
        el("li", null, [t("exam.cert.reportLi")])
      ]),
      startExam
    ]);

    modeGrid.appendChild(practiceCard);
    modeGrid.appendChild(examCard);
    ROOT.appendChild(modeGrid);

    /* Skills measured table */
    var skills = el("section", { className: "exam-skills" }, [
      el("h2", { className: "exam-skills__title" }, [t("exam.skills.title")]),
      el("p", { className: "exam-skills__note" }, [t("exam.skills.note")])
    ]);
    var table = el("table", { className: "exam-skills__table" });
    var thead = el("thead", null, [el("tr", null, [
      el("th", null, [t("exam.skills.col.area")]),
      el("th", null, [t("exam.skills.col.weight")]),
      el("th", null, [t("exam.skills.col.bank")])
    ])]);
    var tbody = el("tbody");
    DOMAINS.forEach(function (d) {
      var n = POOL.filter(function (p) { return p.domainKey === d.key; }).length;
      tbody.appendChild(el("tr", null, [
        el("td", null, [domainName(d)]),
        el("td", { className: "exam-skills__weight" }, [d.display]),
        el("td", { className: "exam-skills__bank" }, [fmtNum(n) + " " + t("exam.q.short")])
      ]));
    });
    table.appendChild(thead);
    table.appendChild(tbody);
    skills.appendChild(table);
    ROOT.appendChild(skills);

    ROOT.appendChild(el("p", { className: "exam-disclaimer" }, [t("exam.disclaimer")]));
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
    // pt-BR domain names are already concise; keep them verbatim.
    if (window.SmartCI && window.SmartCI.getLang() === "pt-BR") return name;
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
      el("span", { className: "exam-bar__mode" }, [isExam ? t("exam.mode.cert") : t("exam.mode.practice")])
    ]));
    var status = el("div", { className: "exam-bar__status" }, [
      el("span", { className: "exam-bar__counter" }, [t("exam.bar.question") + " " + fmtNum(S.index + 1) + " " + t("exam.bar.of") + " " + fmtNum(total)]),
      el("span", { className: "exam-bar__answered" }, [fmtNum(answeredCount()) + " " + t("exam.bar.answered")])
    ]);
    bar.appendChild(status);
    if (isExam) {
      bar.appendChild(el("div", { className: "exam-bar__timer", id: "exam-timer" }, [formatClock(S.remaining)]));
    } else {
      var endP = el("button", { className: "exam-bar__end", type: "button" }, [t("exam.endPractice")]);
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
      el("span", { className: "exam-question__index" }, [t("exam.question") + " " + fmtNum(S.index + 1)])
    ]);
    if (!isExam) {
      topline.appendChild(el("span", { className: "exam-question__domain" }, [shortDomain(q.domainName)]));
    }
    card.appendChild(topline);
    card.appendChild(el("p", { className: "exam-question__prompt", html: q.prompt }));
    card.appendChild(el("p", { className: "exam-question__hint" }, [t("exam.chooseBest")]));

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
          li.appendChild(el("span", { className: "option__marker option__marker--correct" }, [t("q.markerCorrect")]));
        } else if (i === q.chosen) {
          li.classList.add("option--incorrect");
          li.appendChild(el("span", { className: "option__marker option__marker--incorrect" }, [t("q.markerYour")]));
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
        if (ac) ac.textContent = fmtNum(answeredCount()) + " " + t("exam.bar.answered");
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
      feedback.appendChild(el("p", { className: "feedback__title" }, [ok ? t("q.fb.correct") : t("q.fb.notquite")]));
      feedback.appendChild(el("p", { className: "feedback__body", html: q.explanation }));
      feedback.style.display = "block";
    }
    card.appendChild(feedback);
    ROOT.appendChild(card);

    /* Bottom navigation */
    var nav = el("div", { className: "exam-nav" });

    var prevBtn = el("button", { className: "btn btn--secondary", type: "button" }, [t("exam.prev")]);
    prevBtn.disabled = S.index === 0;
    prevBtn.addEventListener("click", function () { if (S.index > 0) { S.index -= 1; renderQuestionScreen(); } });

    var markWrap = el("label", { className: "exam-mark" });
    var markBox = el("input", { type: "checkbox" });
    if (q.marked) markBox.checked = true;
    markBox.addEventListener("change", function () { q.marked = markBox.checked; });
    markWrap.appendChild(markBox);
    markWrap.appendChild(el("span", null, [t("exam.markReview")]));

    var navRight = el("div", { className: "exam-nav__right" });

    var checkBtn = null;
    if (!isExam) {
      checkBtn = el("button", { className: "btn btn--primary", type: "button" }, [t("q.check")]);
      checkBtn.disabled = q.chosen == null || q.revealed;
      checkBtn.addEventListener("click", function () {
        if (q.chosen == null) return;
        q.revealed = true;
        renderQuestionScreen();
      });
      navRight.appendChild(checkBtn);
    }

    if (isExam) {
      var reviewBtn = el("button", { className: "btn btn--secondary", type: "button" }, [t("exam.review.btn")]);
      reviewBtn.addEventListener("click", function () { renderReviewGrid(); });
      navRight.appendChild(reviewBtn);
    }

    if (S.index < total - 1) {
      var nextBtn = el("button", { className: "btn btn--primary", type: "button" }, [t("exam.next")]);
      nextBtn.addEventListener("click", function () { S.index += 1; renderQuestionScreen(); });
      navRight.appendChild(nextBtn);
    } else {
      var finishBtn = el("button", { className: "btn btn--primary", type: "button" }, [isExam ? t("exam.reviewSubmit") : t("exam.finish")]);
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
        el("span", { className: "exam-bar__mode" }, [t("exam.reviewScreen")])
      ]),
      el("div", { className: "exam-bar__status" }, [
        el("span", { className: "exam-bar__counter" }, [fmtNum(answeredCount()) + " " + t("exam.bar.of") + " " + fmtNum(total) + " " + t("exam.bar.answered")])
      ])
    ]);
    if (S.mode === "exam") {
      bar.appendChild(el("div", { className: "exam-bar__timer", id: "exam-timer" }, [formatClock(S.remaining)]));
    }
    ROOT.appendChild(bar);

    var panel = el("section", { className: "exam-review" });
    panel.appendChild(el("h2", { className: "exam-review__title" }, [t("exam.review.title")]));
    panel.appendChild(el("p", { className: "exam-review__note" }, [t("exam.review.note")]));

    var legend = el("div", { className: "exam-legend" }, [
      legendItem("exam-cell--answered", t("exam.legend.answered")),
      legendItem("exam-cell--unanswered", t("exam.legend.unanswered")),
      legendItem("exam-cell--marked", t("exam.legend.marked"))
    ]);
    panel.appendChild(legend);

    var grid = el("div", { className: "exam-grid" });
    S.questions.forEach(function (q, i) {
      var cls = "exam-cell " + (q.chosen != null ? "exam-cell--answered" : "exam-cell--unanswered");
      if (q.marked) cls += " exam-cell--marked";
      var cell = el("button", { className: cls, type: "button", title: q.marked ? t("exam.legend.marked") : "" }, [fmtNum(i + 1)]);
      cell.addEventListener("click", function () { S.index = i; renderQuestionScreen(); });
      grid.appendChild(cell);
    });
    panel.appendChild(grid);

    var unanswered = total - answeredCount();
    var markedCount = S.questions.filter(function (q) { return q.marked; }).length;
    panel.appendChild(el("p", { className: "exam-review__summary" }, [
      unanswered === 0 ? t("exam.allAnswered") : (fmtNum(unanswered) + " " + (unanswered === 1 ? t("exam.stillUnanswered1") : t("exam.stillUnanswered2"))),
      markedCount ? "  \u00b7  " + fmtNum(markedCount) + " " + t("exam.markedForReview") : ""
    ]));

    var actions = el("div", { className: "exam-review__actions" });
    var back = el("button", { className: "btn btn--secondary", type: "button" }, [t("exam.returnQuestions")]);
    back.addEventListener("click", function () { renderQuestionScreen(); });
    var submit = el("button", { className: "btn btn--primary", type: "button" }, [t("exam.submit")]);
    submit.addEventListener("click", function () {
      var msg = unanswered > 0
        ? (t("exam.confirm.unanswered1") + " " + fmtNum(unanswered) + " " + (unanswered === 1 ? t("exam.confirm.unanswered2") : t("exam.confirm.unanswered2p")) + t("exam.confirm.anyway"))
        : t("exam.confirm.submit");
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
    if (window.confirm(t("exam.confirm.endPractice"))) submitExam(false);
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
      EXAM.code + ": " + t("exam.name") + " \u00b7 " + (isExam ? t("exam.attempt") : t("exam.session"))
    ]));
    banner.appendChild(el("div", { className: "score-banner__result" }, [passed ? t("exam.pass") : t("exam.fail")]));
    if (isExam) {
      banner.appendChild(el("div", { className: "score-banner__score" }, [
        el("strong", null, [fmtNum(scaled)]),
        el("span", null, [" / " + fmtNum(EXAM.maxScaled)])
      ]));
      banner.appendChild(el("p", { className: "score-banner__bar-label" }, [t("exam.passingScore") + " " + fmtNum(EXAM.passScaled)]));
      // scaled score meter with pass line
      var meter = el("div", { className: "score-meter" }, [
        el("div", { className: "score-meter__fill", html: "" }),
        el("div", { className: "score-meter__passline" }, [el("span", null, [t("exam.passLine") + " " + fmtNum(EXAM.passScaled)])])
      ]);
      meter.querySelector(".score-meter__fill").style.width = Math.min(100, Math.round(scaled / EXAM.maxScaled * 100)) + "%";
      meter.querySelector(".score-meter__passline").style.left = Math.round(EXAM.passScaled / EXAM.maxScaled * 100) + "%";
      banner.appendChild(meter);
    } else {
      banner.appendChild(el("div", { className: "score-banner__score" }, [
        el("strong", null, [fmtNum(correct) + " / " + fmtNum(total)]),
        el("span", null, [" " + t("exam.correctSuffix") + " (" + fmtPct(pct) + ")"])
      ]));
    }
    var sub = fmtNum(correct) + " " + t("exam.bar.of") + " " + fmtNum(total) + " " + t("exam.ofCorrect") + " " + formatClock(elapsed);
    if (timedOut) sub = t("exam.timeExpired") + " " + sub;
    banner.appendChild(el("p", { className: "score-banner__sub" }, [sub]));
    if (window.SmartCI) {
      banner.appendChild(el("p", { className: "score-banner__date" }, [t("exam.attemptedOn") + " " + window.SmartCI.fmtDate(new Date())]));
    }
    ROOT.appendChild(banner);

    /* Skill-area breakdown */
    var breakdown = el("section", { className: "exam-breakdown" });
    breakdown.appendChild(el("h2", { className: "exam-breakdown__title" }, [t("exam.breakdown.title")]));
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
          el("span", { className: "skillbar__name" }, [domainName(d)]),
          el("span", { className: "skillbar__num" }, [fmtNum(s.correct) + " / " + fmtNum(s.total) + " (" + fmtPct(s.total ? s.correct / s.total : 0) + ")"])
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
    var toggle = el("button", { className: "btn btn--secondary exam-answers__toggle", type: "button" }, [t("exam.answers.review")]);
    var list = el("div", { className: "exam-answers__list", style: "display:none" });
    var built = false;
    toggle.addEventListener("click", function () {
      var open = list.style.display !== "none";
      if (!built && !open) { buildAnswerList(list); built = true; }
      list.style.display = open ? "none" : "block";
      toggle.textContent = open ? t("exam.answers.review") : t("exam.answers.hide");
    });
    reviewWrap.appendChild(toggle);
    reviewWrap.appendChild(list);
    ROOT.appendChild(reviewWrap);

    /* Actions */
    var actions = el("div", { className: "exam-report__actions" });
    var again = el("button", { className: "btn btn--primary", type: "button" }, [isExam ? t("exam.retakeCert") : t("exam.newPractice")]);
    again.addEventListener("click", function () { renderStart(); });
    var home = el("a", { className: "btn btn--secondary", href: "index.html" }, [t("exam.backModules")]);
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
        el("span", { className: "answer-item__num" }, [t("exam.q.short") + fmtNum(i + 1)]),
        el("span", { className: "answer-item__tag answer-item__tag--" + (ok ? "ok" : "no") }, [ok ? t("exam.answer.correct") : (unanswered ? t("exam.answer.unanswered") : t("exam.answer.incorrect"))]),
        el("span", { className: "answer-item__domain" }, [shortDomain(q.domainName)])
      ]));
      item.appendChild(el("p", { className: "answer-item__prompt", html: q.prompt }));
      var ul = el("ul", { className: "answer-item__options" });
      q.options.forEach(function (text, oi) {
        var cls = "answer-opt";
        var tag = "";
        if (oi === q.answerIndex) { cls += " answer-opt--correct"; tag = t("exam.answer.markCorrect"); }
        if (oi === q.chosen && oi !== q.answerIndex) { cls += " answer-opt--chosen"; tag = t("exam.answer.markYour"); }
        else if (oi === q.chosen && oi === q.answerIndex) { tag = t("exam.answer.markYourCorrect"); }
        ul.appendChild(el("li", { className: cls, html: text + (tag ? "<span class='answer-opt__tag'>" + tag + "</span>" : "") }));
      });
      item.appendChild(ul);
      item.appendChild(el("p", { className: "answer-item__exp", html: "<strong>" + t("exam.answer.explanation") + "</strong> " + q.explanation }));
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
      ROOT.appendChild(el("p", null, [t("exam.noQuestions")]));
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
