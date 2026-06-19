/*
 * iCSU Smart CI — Voice-of-Customer (VOC) feedback widget.
 * Adds a floating "Feedback" button to every page. Submitting builds a
 * pre-filled GitHub "new issue" URL and opens it in a new tab, so participant
 * feedback is collected as triageable issues in the project repository — with
 * no backend required for this static microsite.
 *
 * Loaded AFTER i18n.js (and app.js / exam.js) on every page.
 */
(function () {
  "use strict";

  /* ----------------------------------------------------------------------
   * CONFIG — repository that receives feedback issues.
   * The microsite + content live in chadhage/ci-for-icsu, so VOC issues are
   * filed there. Change OWNER/REPO to retarget. LABELS is a comma-separated
   * list applied to each issue; create the "feedback" label once in the repo
   * so VOC submissions are easy to filter. Set LABELS to "" to disable.
   * -------------------------------------------------------------------- */
  var CONFIG = {
    OWNER: "chadhage",
    REPO: "ci-for-icsu",
    LABELS: "feedback"
  };

  var NAME_KEY = "icsuSmartCiVocName";
  var TYPES = ["content", "suggestion", "bug", "question", "praise", "other"];

  function t(k) { return window.SmartCI ? window.SmartCI.t(k) : k; }

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

  function readName() {
    try { return window.localStorage.getItem(NAME_KEY) || ""; } catch (e) { return ""; }
  }
  function writeName(v) {
    try {
      if (v) window.localStorage.setItem(NAME_KEY, v);
      else window.localStorage.removeItem(NAME_KEY);
    } catch (e) { /* ignore */ }
  }

  // English label for the type, used in the issue body so maintainers can
  // triage VOC consistently regardless of the participant's UI language.
  var TYPE_LABEL_EN = {
    content: "Content accuracy",
    suggestion: "Suggestion or improvement",
    bug: "Bug or broken link",
    question: "Question",
    praise: "Praise",
    other: "Other"
  };

  // A short, stable page identifier for the issue (module id when on a module page).
  function pageContext() {
    var ctx = { title: document.title, url: window.location.href, module: "" };
    try {
      var params = new URLSearchParams(window.location.search);
      if (document.getElementById("module-root")) ctx.module = params.get("id") || "";
    } catch (e) { /* ignore */ }
    return ctx;
  }

  function buildIssueUrl(data) {
    var ctx = pageContext();
    var langName = window.SmartCI ? window.SmartCI.langName() : "English";
    var titleType = TYPE_LABEL_EN[data.type] || "Feedback";
    var title = "[Feedback] " + titleType + ": " + data.subject;

    var lines = [];
    lines.push("**Type:** " + titleType);
    if (data.rating) lines.push("**Rating:** " + data.rating + "/5");
    lines.push("**Page:** " + ctx.title);
    if (ctx.module) lines.push("**Module:** `" + ctx.module + "`");
    lines.push("**URL:** " + ctx.url);
    lines.push("**Language:** " + langName);
    lines.push("**From:** " + (data.name || "(not provided)"));
    lines.push("");
    lines.push("### Details");
    lines.push(data.details);
    lines.push("");
    lines.push("---");
    lines.push("_Submitted via the iCSU Smart CI microsite feedback form._");
    var body = lines.join("\n");

    var url = "https://github.com/" + CONFIG.OWNER + "/" + CONFIG.REPO + "/issues/new"
      + "?title=" + encodeURIComponent(title)
      + "&body=" + encodeURIComponent(body);
    if (CONFIG.LABELS) url += "&labels=" + encodeURIComponent(CONFIG.LABELS);
    return url;
  }

  /* ---------------- Modal ---------------- */
  var lastFocused = null;

  function openModal() {
    lastFocused = document.activeElement;

    var overlay = el("div", { className: "voc", role: "dialog", "aria-modal": "true", "aria-label": t("voc.aria") });
    var card = el("div", { className: "voc__card" });

    var closeBtn = el("button", { className: "voc__close", type: "button", "aria-label": t("voc.cancel") }, ["\u00d7"]);
    var head = el("div", { className: "voc__head" }, [
      el("h2", { className: "voc__title" }, [t("voc.title")]),
      closeBtn
    ]);

    var body = el("div", { className: "voc__body" });
    body.appendChild(el("p", { className: "voc__lede", html: t("voc.lede") }));

    // Type (select scales cleanly as categories grow).
    var typeSelect = el("select", { className: "voc__select", id: "voc-type" },
      TYPES.map(function (key) {
        return el("option", { value: key }, [t("voc.type." + key)]);
      }));
    body.appendChild(el("div", { className: "voc__field" }, [
      el("label", { className: "voc__label", "for": "voc-type" }, [t("voc.type.label")]),
      typeSelect
    ]));

    // Rating (optional 1–5 stars).
    var rating = 0;
    var starBtns = [];
    var starsWrap = el("div", { className: "voc__stars", role: "group", "aria-label": t("voc.rating.label") });
    function paintStars() {
      starBtns.forEach(function (b, i) {
        var on = i < rating;
        b.classList.toggle("is-on", on);
        b.setAttribute("aria-pressed", on ? "true" : "false");
        b.textContent = on ? "\u2605" : "\u2606";
      });
    }
    for (var i = 0; i < 5; i++) {
      (function (n) {
        var b = el("button", { className: "voc__star", type: "button", "aria-label": n + "/5" }, ["\u2606"]);
        b.addEventListener("click", function () { rating = (rating === n) ? 0 : n; paintStars(); });
        starBtns.push(b);
        starsWrap.appendChild(b);
      })(i + 1);
    }
    body.appendChild(el("div", { className: "voc__field" }, [
      el("label", { className: "voc__label" }, [t("voc.rating.label")]),
      starsWrap
    ]));

    // Summary (required).
    var subjectInput = el("input", { className: "voc__input", id: "voc-subject", type: "text", maxlength: "120", placeholder: t("voc.subject.ph") });
    body.appendChild(el("div", { className: "voc__field" }, [
      el("label", { className: "voc__label", "for": "voc-subject" }, [t("voc.subject.label")]),
      subjectInput
    ]));

    // Details (required).
    var detailsInput = el("textarea", { className: "voc__textarea", id: "voc-details", rows: "5", placeholder: t("voc.details.ph") });
    body.appendChild(el("div", { className: "voc__field" }, [
      el("label", { className: "voc__label", "for": "voc-details" }, [t("voc.details.label")]),
      detailsInput
    ]));

    // Name (optional, remembered).
    var nameInput = el("input", { className: "voc__input", id: "voc-name", type: "text", maxlength: "80", placeholder: t("voc.name.ph") });
    nameInput.value = readName();
    body.appendChild(el("div", { className: "voc__field" }, [
      el("label", { className: "voc__label", "for": "voc-name" }, [t("voc.name.label")]),
      nameInput
    ]));

    body.appendChild(el("p", { className: "voc__note", html: t("voc.github.note") }));
    var errorMsg = el("p", { className: "voc__error", role: "alert", hidden: "hidden" }, [t("voc.required")]);
    body.appendChild(errorMsg);

    var cancelBtn = el("button", { className: "btn btn--secondary voc__cancel", type: "button" }, [t("voc.cancel")]);
    var submitBtn = el("button", { className: "btn btn--primary voc__submit", type: "button", disabled: "disabled" }, [t("voc.submit")]);
    var foot = el("div", { className: "voc__foot" }, [cancelBtn, submitBtn]);

    card.appendChild(head);
    card.appendChild(body);
    card.appendChild(foot);
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    document.body.classList.add("voc-open");

    function isValid() {
      return subjectInput.value.trim().length > 0 && detailsInput.value.trim().length > 0;
    }
    function refreshValid() {
      var ok = isValid();
      submitBtn.disabled = !ok;
      if (ok) errorMsg.setAttribute("hidden", "hidden");
    }
    subjectInput.addEventListener("input", refreshValid);
    detailsInput.addEventListener("input", refreshValid);

    function close() {
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      document.body.classList.remove("voc-open");
      document.removeEventListener("keydown", onKey);
      if (lastFocused && lastFocused.focus) lastFocused.focus();
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    document.addEventListener("keydown", onKey);
    overlay.addEventListener("mousedown", function (e) { if (e.target === overlay) close(); });
    closeBtn.addEventListener("click", close);
    cancelBtn.addEventListener("click", close);

    submitBtn.addEventListener("click", function () {
      if (!isValid()) {
        errorMsg.removeAttribute("hidden");
        (subjectInput.value.trim() ? detailsInput : subjectInput).focus();
        return;
      }
      var name = nameInput.value.trim();
      writeName(name);
      var url = buildIssueUrl({
        type: typeSelect.value,
        rating: rating,
        subject: subjectInput.value.trim(),
        details: detailsInput.value.trim(),
        name: name
      });
      var win = window.open(url, "_blank", "noopener");
      if (win) {
        close();
      } else {
        // Pop-up blocked — offer a manual link instead of failing silently.
        foot.innerHTML = "";
        var link = el("a", { className: "btn btn--primary voc__submit", href: url, target: "_blank", rel: "noopener" }, [t("voc.submit")]);
        link.addEventListener("click", function () { setTimeout(close, 0); });
        foot.appendChild(cancelBtn);
        foot.appendChild(link);
        link.focus();
      }
    });

    subjectInput.focus();
  }

  /* ---------------- Floating action button ---------------- */
  function mountFab() {
    if (document.querySelector(".voc-fab")) return;
    var icon = '<svg class="voc-fab__icon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">'
      + '<path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm3 5v2h10V8H7zm0 4v2h7v-2H7z"/>'
      + '</svg>';
    var fab = el("button", { className: "voc-fab", type: "button", "aria-haspopup": "dialog" }, [
      el("span", { className: "voc-fab__icon-wrap", html: icon }),
      el("span", { className: "voc-fab__label", "data-i18n": "voc.button" }, [t("voc.button")])
    ]);
    fab.addEventListener("click", openModal);
    document.body.appendChild(fab);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountFab);
  } else {
    mountFab();
  }
})();
