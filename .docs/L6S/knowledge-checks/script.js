/*
 * Knowledge-check runtime.
 * Each page provides window.KC_DATA = { title, sourceFile, sourceLabel, passingScore, questions: [...] }
 * Each question: { prompt: string, options: [string], correctIndex: number, explanation: string }
 */
(function () {
  "use strict";

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

  function renderQuestion(q, index, total, onAnswered) {
    var card = el("section", { className: "question-card", "data-index": index });
    var header = el("div", { className: "question-card__header" }, [
      el("span", { className: "question-card__index" }, ["Question " + (index + 1) + " of " + total]),
    ]);
    var prompt = el("p", { className: "question-card__prompt" }, [q.prompt]);

    var optionsList = el("ul", { className: "options" });
    var inputs = [];
    var name = "q" + index;

    q.options.forEach(function (text, i) {
      var input = el("input", { type: "radio", name: name, value: String(i), id: name + "_o" + i });
      var label = el("span", { className: "option__label" }, [text]);
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

    card.appendChild(header);
    card.appendChild(prompt);
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
      pct + "% \u00b7 " + (passed ? "You passed the knowledge check. Review any items you missed." : "Passing score is " + passingScore + "%. Review the source page and try again."),
    ]));
    var retry = el("button", { className: "btn btn--primary", type: "button" }, ["Retry knowledge check"]);
    retry.addEventListener("click", function () { window.location.reload(); });
    var back = el("a", { className: "btn btn--secondary", href: window.KC_DATA.sourceFile || "https://github.com/chadhage/ci-for-icsu/blob/main/.docs/L6S/index.md" }, ["Back to topic"]);
    var actions = el("div", { className: "summary__actions" }, [retry, back]);
    summary.appendChild(actions);
    summary.style.display = "block";
    container.appendChild(summary);
    summary.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function init() {
    var data = window.KC_DATA;
    if (!data || !Array.isArray(data.questions)) return;

    var titleEl = document.getElementById("kc-title");
    var subtitleEl = document.getElementById("kc-subtitle");
    var sourceEl = document.getElementById("kc-source");
    var countEl = document.getElementById("kc-count");
    var passingEl = document.getElementById("kc-passing");
    var container = document.getElementById("kc-questions");
    var progressFill = document.getElementById("kc-progress-fill");

    if (titleEl) titleEl.textContent = data.title;
    if (subtitleEl && data.subtitle) subtitleEl.textContent = data.subtitle;
    if (sourceEl && data.sourceFile) {
      sourceEl.innerHTML = "";
      var a = el("a", { href: data.sourceFile }, [data.sourceLabel || data.sourceFile]);
      sourceEl.appendChild(el("strong", null, ["Source: "]));
      sourceEl.appendChild(a);
    }
    if (countEl) countEl.innerHTML = "<strong>Questions:</strong> " + data.questions.length;
    if (passingEl) passingEl.innerHTML = "<strong>Pass:</strong> " + (data.passingScore || 80) + "%";

    var answered = 0;
    var correct = 0;
    var total = data.questions.length;
    var passingScore = data.passingScore || 80;

    data.questions.forEach(function (q, i) {
      var card = renderQuestion(q, i, total, function (isCorrect) {
        answered += 1;
        if (isCorrect) correct += 1;
        if (progressFill) progressFill.style.width = Math.round((answered / total) * 100) + "%";
        if (answered === total) renderSummary(container, correct, total, passingScore);
      });
      container.appendChild(card);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
