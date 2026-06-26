/*
 * iCSU Smart CI — end-of-activity survey.
 * Renders a short, structured survey card shown after completing a practice
 * test, a CI-900 certification exam attempt, or a belt learning plan. Responses
 * are submitted as a pre-filled GitHub issue (the same no-backend pattern used
 * by the Voice-of-Customer feedback widget) labelled "survey" so they can be
 * triaged separately from general feedback.
 *
 * Exposes: window.SmartCISurvey.renderCard(context) -> DOM node.
 *   context = {
 *     kind: "exam" | "practice" | "belt",
 *     vars: { belt: "White Belt" },   // optional, for title interpolation
 *     detailLabel: "Score 720/1000 — Pass" // optional, recorded in the issue
 *   }
 *
 * Loaded AFTER i18n.js on every page that can trigger a survey.
 */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------
   * CONFIG — repository that receives survey issues. Mirrors feedback.js so
   * survey responses land in the same project repo. LABELS is applied to each
   * issue; create the "survey" label once so submissions are easy to filter.
   * Set LABELS to "" to disable labelling.
   * -------------------------------------------------------------------- */
  var CONFIG = {
    OWNER: "chadhage",
    REPO: "ci-for-icsu",
    LABELS: "survey"
  };

  function t(k) { return window.SmartCI ? window.SmartCI.t(k) : k; }
  function tf(k, params) {
    var s = t(k);
    if (params) Object.keys(params).forEach(function (p) { s = s.replace("{" + p + "}", params[p]); });
    return s;
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

  // Per-kind survey definition. The `en` fields keep the issue body in English
  // for consistent triage regardless of the participant's UI language.
  function schema(kind) {
    if (kind === "belt") {
      return {
        kindEn: "Belt completion",
        qEn: "How confident do you feel applying these tools?",
        qKey: "survey.belt.q.label",
        choices: [
          { val: "low", key: "survey.belt.q.low", en: "Not yet confident" },
          { val: "mid", key: "survey.belt.q.mid", en: "Getting there" },
          { val: "high", key: "survey.belt.q.high", en: "Confident" }
        ]
      };
    }
    return {
      kindEn: kind === "exam" ? "Certification exam" : "Practice test",
      qEn: "How did the difficulty feel?",
      qKey: "survey.exam.q.label",
      choices: [
        { val: "easy", key: "survey.exam.q.easy", en: "Too easy" },
        { val: "right", key: "survey.exam.q.right", en: "About right" },
        { val: "hard", key: "survey.exam.q.hard", en: "Too hard" }
      ]
    };
  }

  function buildIssueUrl(context, def, answers) {
    var langName = window.SmartCI ? window.SmartCI.langName() : "English";
    var chosenEn = "(skipped)";
    if (answers.choice) {
      for (var i = 0; i < def.choices.length; i++) {
        if (def.choices[i].val === answers.choice) { chosenEn = def.choices[i].en; break; }
      }
    }

    var title = "[Survey] " + def.kindEn + (context.detailLabel ? ": " + context.detailLabel : "");
    var lines = [];
    lines.push("**Survey:** " + def.kindEn);
    if (context.detailLabel) lines.push("**Context:** " + context.detailLabel);
    lines.push("**Rating:** " + answers.rating + "/5");
    lines.push("**" + def.qEn + "** " + chosenEn);
    lines.push("**Page:** " + document.title);
    lines.push("**URL:** " + window.location.href);
    lines.push("**Language:** " + langName);
    lines.push("");
    lines.push("### Comments");
    lines.push(answers.comment ? answers.comment : "(none)");
    lines.push("");
    lines.push("---");
    lines.push("_Submitted via the iCSU Smart CI microsite survey._");
    var body = lines.join("\n");

    var url = "https://github.com/" + CONFIG.OWNER + "/" + CONFIG.REPO + "/issues/new"
      + "?title=" + encodeURIComponent(title)
      + "&body=" + encodeURIComponent(body);
    if (CONFIG.LABELS) url += "&labels=" + encodeURIComponent(CONFIG.LABELS);
    return url;
  }

  /* ---------------- Public: build an inline survey card ---------------- */
  function renderCard(context) {
    context = context || {};
    var kind = context.kind === "belt" ? "belt" : (context.kind === "exam" ? "exam" : "practice");
    var def = schema(kind);
    var isBelt = kind === "belt";

    var card = el("section", { className: "survey-card", role: "group", "aria-label": t("survey.exam.eyebrow") });

    card.appendChild(el("p", { className: "survey-card__eyebrow" }, [
      isBelt ? t("survey.belt.eyebrow") : t("survey.exam.eyebrow")
    ]));
    card.appendChild(el("h2", { className: "survey-card__title" }, [
      isBelt ? tf("survey.belt.title", context.vars) : t("survey.exam.title")
    ]));
    card.appendChild(el("p", { className: "survey-card__lede" }, [
      isBelt ? t("survey.belt.lede") : t("survey.exam.lede")
    ]));

    // Q1 — overall rating (required, 1–5 stars).
    var rating = 0;
    var starBtns = [];
    var starsWrap = el("div", { className: "survey-card__stars", role: "group", "aria-label": t("survey.rating.label") });
    function paintStars() {
      starBtns.forEach(function (b, i) {
        var on = i < rating;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
        b.textContent = on ? "\u2605" : "\u2606";
      });
    }
    for (var s = 0; s < 5; s++) {
      (function (n) {
        var b = el("button", { className: "survey-card__star", type: "button", "aria-label": n + "/5" }, ["\u2606"]);
        b.addEventListener("click", function () {
          rating = (rating === n) ? 0 : n;
          paintStars();
          refreshValid();
        });
        starBtns.push(b);
        starsWrap.appendChild(b);
      })(s + 1);
    }
    card.appendChild(el("div", { className: "survey-card__field" }, [
      el("label", { className: "survey-card__label" }, [t("survey.rating.label")]),
      starsWrap
    ]));

    // Q2 — single-select contextual question (optional).
    var choice = "";
    var choiceBtns = [];
    var choicesWrap = el("div", { className: "survey-card__choices", role: "group", "aria-label": t(def.qKey) });
    def.choices.forEach(function (c) {
      var b = el("button", { className: "survey-card__choice", type: "button", "aria-pressed": "false", "data-val": c.val }, [t(c.key)]);
      b.addEventListener("click", function () {
        choice = (choice === c.val) ? "" : c.val;
        choiceBtns.forEach(function (other) {
          var on = other.getAttribute("data-val") === choice;
          other.classList.toggle("is-on", on);
          other.setAttribute("aria-pressed", on ? "true" : "false");
        });
      });
      choiceBtns.push(b);
      choicesWrap.appendChild(b);
    });
    card.appendChild(el("div", { className: "survey-card__field" }, [
      el("label", { className: "survey-card__label" }, [t(def.qKey)]),
      choicesWrap
    ]));

    // Q3 — optional free-text comment.
    var commentInput = el("textarea", { className: "survey-card__textarea", id: "survey-comment", rows: "3", placeholder: t("survey.comment.ph") });
    card.appendChild(el("div", { className: "survey-card__field" }, [
      el("label", { className: "survey-card__label", "for": "survey-comment" }, [t("survey.comment.label")]),
      commentInput
    ]));

    card.appendChild(el("p", { className: "survey-card__note", html: t("survey.github.note") }));
    var errorMsg = el("p", { className: "survey-card__error", role: "alert", hidden: "hidden" }, [t("survey.required")]);
    card.appendChild(errorMsg);

    var dismissBtn = el("button", { className: "btn btn--secondary", type: "button" }, [t("survey.dismiss")]);
    var submitBtn = el("button", { className: "btn btn--primary", type: "button", disabled: "disabled" }, [t("survey.submit")]);
    var actions = el("div", { className: "survey-card__actions" }, [dismissBtn, submitBtn]);
    card.appendChild(actions);

    function refreshValid() {
      var ok = rating > 0;
      submitBtn.disabled = !ok;
      if (ok) errorMsg.setAttribute("hidden", "hidden");
    }

    function showThanks() {
      card.innerHTML = "";
      card.classList.add("survey-card--done");
      card.appendChild(el("p", { className: "survey-card__eyebrow" }, [
        isBelt ? t("survey.belt.eyebrow") : t("survey.exam.eyebrow")
      ]));
      card.appendChild(el("h2", { className: "survey-card__title" }, [t("survey.thanks.title")]));
      card.appendChild(el("p", { className: "survey-card__lede" }, [t("survey.thanks.body")]));
    }

    dismissBtn.addEventListener("click", function () {
      if (card.parentNode) card.parentNode.removeChild(card);
    });

    submitBtn.addEventListener("click", function () {
      if (rating <= 0) {
        errorMsg.removeAttribute("hidden");
        return;
      }
      var url = buildIssueUrl(context, def, {
        rating: rating,
        choice: choice,
        comment: commentInput.value.trim()
      });
      var win = window.open(url, "_blank", "noopener");
      if (win) {
        showThanks();
      } else {
        // Pop-up blocked — offer a manual link instead of failing silently.
        actions.innerHTML = "";
        var link = el("a", { className: "btn btn--primary", href: url, target: "_blank", rel: "noopener" }, [t("survey.submit")]);
        link.addEventListener("click", function () { setTimeout(showThanks, 0); });
        actions.appendChild(dismissBtn);
        actions.appendChild(link);
        link.focus();
      }
    });

    return card;
  }

  window.SmartCISurvey = { renderCard: renderCard };
})();
