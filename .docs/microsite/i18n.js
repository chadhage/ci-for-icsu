/*
 * iCSU Smart CI — internationalization (i18n) layer.
 * Provides language selection (English / Brazilian Portuguese), a UI string
 * dictionary, locale-aware number/date formatting, and module-content
 * selection. Loaded BEFORE app.js / exam.js on every page.
 *
 * Language preference is persisted inside the existing prefs object
 * (localStorage key "icsuSmartCiPrefs") under the "lang" field so it travels
 * with the role/flow/belt choices set in onboarding.
 */
(function () {
  "use strict";

  var PREF_KEY = "icsuSmartCiPrefs";
  var SUPPORTED = ["en", "pt-BR"];

  function readPrefs() {
    try { return JSON.parse(window.localStorage.getItem(PREF_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function writePrefs(p) {
    try { window.localStorage.setItem(PREF_KEY, JSON.stringify(p)); } catch (e) { /* ignore */ }
  }
  function normLang(v) { return SUPPORTED.indexOf(v) >= 0 ? v : null; }

  function getLang() { return normLang(readPrefs().lang) || "en"; }
  function setLang(l) {
    var p = readPrefs();
    p.lang = normLang(l) || "en";
    writePrefs(p);
  }
  function locale() { return getLang() === "pt-BR" ? "pt-BR" : "en-US"; }
  function langName(l) {
    var key = normLang(l) || getLang();
    return key === "pt-BR" ? "Portugu\u00eas (Brasil)" : "English";
  }

  /* ---------------- Locale-aware formatting ---------------- */
  function fmtNumber(n, opts) {
    try { return new Intl.NumberFormat(locale(), opts).format(n); }
    catch (e) { return String(n); }
  }
  function fmtPercent(fraction, fractionDigits) {
    try {
      return new Intl.NumberFormat(locale(), {
        style: "percent",
        maximumFractionDigits: fractionDigits == null ? 0 : fractionDigits
      }).format(fraction);
    } catch (e) { return Math.round(fraction * 100) + "%"; }
  }
  function fmtDate(d, opts) {
    var date = d instanceof Date ? d : new Date(d);
    try { return new Intl.DateTimeFormat(locale(), opts || { dateStyle: "long" }).format(date); }
    catch (e) { return date.toLocaleDateString(); }
  }

  /* ---------------- Module content selection ---------------- */
  function getModules() {
    if (getLang() === "pt-BR" && window.MODULES_PT) return window.MODULES_PT;
    return window.MODULES || {};
  }

  /* ---------------- UI string dictionary ----------------
     Keys are dot-namespaced. Values may contain HTML when used with
     data-i18n-html or the {html:true} option. Missing pt-BR keys fall
     back to English so the site never renders a blank string. */
  var DICT = {
    en: {
      /* shared chrome */
      "internal.notice": "<strong>Internal &amp; proposed &mdash; not an official Microsoft offering.</strong> &ldquo;CI-900&rdquo; and this delivery series are an internal proposal at this time, intended for an internal audience only. They are not a Microsoft product, certification, or exam, and are not affiliated with, endorsed by, or sponsored by Microsoft. Do not share externally.",
      "internal.notice.exam": "<strong>Internal &amp; proposed &mdash; not an official Microsoft offering.</strong> &ldquo;CI-900&rdquo; is an internal proposal at this time, intended for an internal audience only. It is not a Microsoft certification or exam and is not affiliated with, endorsed by, or sponsored by Microsoft. Do not share externally.",
      "breadcrumb.series": "iCSU Smart CI \u2014 30-Minute Delivery Series",
      "breadcrumb.module": "Module",
      "breadcrumb.exam": "CI-900 Practice Exam",
      "footer.index": "iCSU Smart CI Tools \u00b7 30-Minute Delivery Series \u00b7 Internal &amp; proposed \u2014 not an official Microsoft offering \u00b7 Built from the CI for iCSU knowledge base",
      "footer.module": "iCSU Smart CI Tools \u00b7 30-Minute Delivery Series",
      "footer.exam": "iCSU Smart CI Tools \u00b7 CI-900 Practice Exam \u00b7 Proposed, internal-only concept \u2014 not an official Microsoft offering \u00b7 Unofficial practice assessment built from the CI for iCSU knowledge base",

      /* index hero */
      "index.title": "iCSU Smart CI \u2014 30-Minute Delivery Series",
      "hero.eyebrow": "iCSU \u00b7 Customer Success Unit",
      "hero.title": "Continuous Improvement \u2014 30-Minute Delivery Series",
      "hero.lede": "Every Lean Six Sigma topic in the iCSU Smart CI library, repackaged into bite-sized 30-minute sessions. Choose your role and pick a path &mdash; a <strong>guided progression</strong> from the most basic concepts to the most advanced, <strong>browse by concept</strong> and category, or <strong>follow a belt</strong> to filter the library to the learning plan for the Lean Six Sigma belt you&rsquo;re pursuing. Each module opens with an executive summary, states what you&rsquo;ll gain in plain language, explains the concept, shows role-based examples for CSAMs and CSAs, recaps the key takeaways, and closes with a Microsoft certification&ndash;style knowledge check.",
      "hero.stat.modules": "30-min modules",
      "hero.stat.roles": "roles: CSAM &amp; CSA",
      "hero.stat.parts": "parts per module",
      "hero.stat.questions": "knowledge-check questions",

      /* format section */
      "format.heading": "How each 30-minute module is structured",
      "format.part1.label": "Executive Summary", "format.part1.desc": "Why the session matters, for leaders.",
      "format.part2.label": "What You\u2019ll Gain", "format.part2.desc": "Plain-language outcomes.",
      "format.part3.label": "The Topic", "format.part3.desc": "The concept, explained.",
      "format.part4.label": "Role Examples", "format.part4.desc": "CSAM &amp; CSA scenarios.",
      "format.part5.label": "Recap", "format.part5.desc": "Key concepts &amp; takeaways.",
      "format.part6.label": "Knowledge Check", "format.part6.desc": "MS cert\u2013style quiz.",
      "format.part": "PART",

      /* exam CTA on index */
      "examcta.eyebrow": "Test your readiness",
      "examcta.title": "CI-900: Continuous Improvement Fundamentals",
      "examcta.desc": "A practice exam in the <em>style</em> of a Microsoft certification, over the whole library. Use <strong>Practice mode</strong> to learn with instant feedback, or <strong>Certification mode</strong> for a timed, scaled-scored attempt with a mark-for-review screen and skill-area report. <strong>CI-900 is a proposed, internal-only concept &mdash; not a real Microsoft certification or exam.</strong>",
      "examcta.btn": "Take the practice exam \u2192",

      /* onboarding */
      "onb.eyebrow": "iCSU Smart CI \u00b7 Set up your path",
      "onb.title": "Welcome \u2014 let\u2019s tailor this to you",
      "onb.lede": "Choose your language, your role, and how you\u2019d like to move through the material. You can change all three at any time.",
      "onb.q.lang": "1. Which language would you like?",
      "onb.lang.en.title": "English",
      "onb.lang.en.desc": "Content and interface in English (US formatting).",
      "onb.lang.pt.title": "Portugu\u00eas (Brasil)",
      "onb.lang.pt.desc": "Conte\u00fado e interface em portugu\u00eas, com formata\u00e7\u00e3o do Brasil.",
      "onb.q.role": "2. What is your role?",
      "onb.role.csam.title": "CSAM",
      "onb.role.csam.desc": "Customer Success Account Manager. Examples and scenarios default to the CSAM view.",
      "onb.role.csa.title": "CSA",
      "onb.role.csa.desc": "Cloud Solution Architect. Examples and scenarios default to the CSA view.",
      "onb.q.flow": "3. How would you like to explore?",
      "onb.flow.guided.title": "Guided path",
      "onb.flow.guided.desc": "A single progression from the most basic ideas to the most advanced. Best if you are newer to Lean Six Sigma.",
      "onb.flow.concept.title": "Browse by concept",
      "onb.flow.concept.desc": "Modules grouped into categories so you can jump to whatever topic you need.",
      "onb.flow.belt.title": "Follow a belt",
      "onb.flow.belt.desc": "Pursue a Lean Six Sigma belt. Pick your target belt and we filter the library to that belt\u2019s learning plan.",
      "onb.q.belt": "4. Which belt are you pursuing?",
      "onb.start": "Start learning",
      "onb.aria": "Set up your path",

      /* prefbar */
      "prefbar.showing": "Showing the",
      "prefbar.for": "view for",
      "prefbar.flow.guided": "Guided path",
      "prefbar.flow.concept": "Browse by concept",
      "prefbar.flow.beltSuffix": "plan",
      "prefbar.toggle.guided": "Guided path",
      "prefbar.toggle.concept": "By concept",
      "prefbar.toggle.belt": "By belt",
      "prefbar.change": "Change language / role / path",
      "prefbar.targetBelt": "Target belt",
      "prefbar.aria.flow": "Choose flow",
      "prefbar.aria.belt": "Choose target belt",

      /* index listings */
      "index.modulesEach": "30 min each",
      "index.module": "module", "index.modules": "modules",
      "card.questionCheck": "-question check",
      "label.step": "STEP", "label.module": "MODULE",

      /* belt index */
      "belt.plan.eyebrow": "Belt learning plan",
      "belt.workingToward": "Working toward your",
      "belt.inThisPlan": "in this plan",
      "belt.cumulativeThrough": "cumulative through",
      "belt.ofStudy": "of study",
      "belt.yourTarget": "Your target",
      "belt.prerequisite": "Prerequisite",
      "belt.beyond": "Beyond",
      "belt.moreModule": "more module", "belt.moreModules": "more modules",
      "belt.cumulativeNote": "Belts are cumulative \u2014 selecting a higher belt keeps everything here and adds the deeper material.",

      /* module page */
      "module.titleSuffix": "iCSU Smart CI Delivery",
      "module.delivery": "delivery",
      "module.questionCheck": "-question knowledge check",
      "module.flow.guided": "Guided path",
      "module.flow.concept": "By concept",
      "module.flow.beltSuffix": "plan",
      "module.posOf": "of",
      "module.beyondPlan": "beyond this plan",
      "module.notFound": "Module not found. ",
      "module.returnAll": "Return to all modules.",
      "sec.exec.kicker": "Executive Summary", "sec.exec.title": "Why this 30 minutes matters",
      "sec.gain.kicker": "What You'll Gain", "sec.gain.title": "What you'll walk away able to do",
      "sec.topic.kicker": "The Topic", "sec.topic.title": "The concept, explained",
      "sec.roles.kicker": "Role-Based Examples", "sec.roles.title": "How it looks in the field",
      "sec.recap.kicker": "Recap", "sec.recap.title": "Key concepts & takeaways",
      "role.tab.csam": "CSAM \u2014 Customer Success Account Manager",
      "role.tab.csa": "CSA \u2014 Cloud Solution Architect",
      "role.panel.csam": "CSAM \u00b7 Customer Success Account Manager",
      "role.panel.csa": "CSA \u00b7 Cloud Solution Architect",
      "module.prev": "\u2190 Previous module",
      "module.next": "Next module \u2192",

      /* knowledge check */
      "kc.kicker": "Knowledge Check",
      "kc.title": "Test your understanding",
      "kc.intro": "Microsoft certification\u2013style questions. Commit to an answer to reveal the explanation.",
      "kc.questions": "Questions:", "kc.pass": "Pass:",
      "q.indexOf1": "Question", "q.indexOf2": "of",
      "q.check": "Check answer",
      "q.markerCorrect": "\u2713 Correct answer",
      "q.markerYour": "\u2715 Your answer",
      "q.fb.correct": "Correct", "q.fb.notquite": "Not quite",
      "kc.summary.pass": "Knowledge check complete",
      "kc.summary.retry": "Almost there",
      "kc.summary.passed": "You passed. Review any items you missed.",
      "kc.summary.failedPrefix": "Passing score is",
      "kc.summary.failedSuffix": ". Review the module and try again.",
      "kc.retry": "Retry knowledge check",
      "kc.allModules": "All modules",

      /* exam start */
      "exam.hero.eyebrow": "Microsoft certification\u2013style practice assessment",
      "exam.hero.lede": "A realistic, exam-style assessment over the entire iCSU Smart CI library. Choose Practice mode to learn with instant feedback, or Certification mode for a timed, scored attempt that mirrors the real testing experience.",
      "exam.fact.bank": "questions in the bank",
      "exam.fact.perAttempt": "per certification attempt",
      "exam.fact.timeLimit": "time limit (cert mode)",
      "exam.fact.scoreToPass": "score to pass",
      "exam.q.short": "Q", "exam.min": "min",
      "exam.practice.badge": "Practice / Prep mode",
      "exam.practice.title": "Learn with instant feedback",
      "exam.practice.desc": "One question at a time. Commit to an answer and the correct choice and full explanation appear immediately. Untimed \u2014 ideal for building knowledge before a timed run.",
      "exam.practice.li1": "Immediate answer + rationale after each item",
      "exam.practice.li2": "Focus on a single skill area or the whole bank",
      "exam.practice.li3": "No timer, retake as often as you like",
      "exam.practice.start": "Start practice",
      "exam.field.length": "Length", "exam.field.skill": "Skill area",
      "exam.len.questions": "questions",
      "exam.len.all": "All", "exam.len.allSuffix": "questions",
      "exam.skill.all": "All skill areas",
      "exam.cert.badge": "Certification mode",
      "exam.cert.title": "Timed, scored, exam-realistic",
      "exam.cert.start": "Start certification exam",
      "exam.name": "Continuous Improvement Fundamentals",
      "exam.cert.desc": "{len} questions in {min} minutes. No feedback until you submit. Mark items for review, revisit them from a review screen, then receive a scaled score and a skill-area breakdown \u2014 exactly like a Microsoft certification exam.",
      "exam.cert.li1": "{len} questions \u00b7 {min}-minute countdown",
      "exam.cert.li3": "Scaled score out of {max} \u00b7 pass at {pass}",
      "exam.cert.markLi": "Mark for review + end-of-exam review grid",
      "exam.cert.reportLi": "Per\u2013skill-area performance report",
      "exam.skills.title": "Skills measured",
      "exam.skills.note": "A certification attempt samples questions across these skill areas using the listed weightings.",
      "exam.skills.col.area": "Skill area", "exam.skills.col.weight": "Weighting", "exam.skills.col.bank": "Bank",
      "exam.disclaimer": "This is an unofficial, internal practice assessment built from the iCSU Smart CI knowledge base to mimic the format of Microsoft certification exams. CI-900 is a proposed, internal-only concept at this time, for an internal audience only. It is not affiliated with or endorsed by Microsoft, and is not a real Microsoft exam or certification.",

      /* exam session */
      "exam.mode.cert": "Certification mode", "exam.mode.practice": "Practice mode",
      "exam.bar.question": "Question", "exam.bar.of": "of", "exam.bar.answered": "answered",
      "exam.endPractice": "End practice",
      "exam.question": "Question",
      "exam.chooseBest": "Choose the best answer.",
      "exam.prev": "\u2190 Previous", "exam.next": "Next \u2192",
      "exam.markReview": "Mark for review",
      "exam.review.btn": "Review \u2630",
      "exam.reviewSubmit": "Review & submit", "exam.finish": "Finish",
      "exam.reviewScreen": "Review screen",
      "exam.review.title": "Review your answers",
      "exam.review.note": "Select any question to return to it. Items you flagged are marked. Unanswered questions are scored as incorrect.",
      "exam.legend.answered": "Answered", "exam.legend.unanswered": "Unanswered", "exam.legend.marked": "Marked for review",
      "exam.allAnswered": "All questions answered.",
      "exam.stillUnanswered1": "question still unanswered.", "exam.stillUnanswered2": "questions still unanswered.",
      "exam.markedForReview": "marked for review.",
      "exam.returnQuestions": "\u2190 Return to questions",
      "exam.submit": "Submit exam",
      "exam.confirm.unanswered1": "You have", "exam.confirm.unanswered2": "unanswered question",
      "exam.confirm.unanswered2p": "unanswered questions",
      "exam.confirm.anyway": ". Submit anyway? Unanswered items are scored as incorrect.",
      "exam.confirm.submit": "Submit your exam for scoring?",
      "exam.confirm.endPractice": "End this practice session and see your results?",

      /* exam report */
      "exam.attempt": "Certification attempt", "exam.session": "Practice session",
      "exam.pass": "PASS", "exam.fail": "DID NOT PASS",
      "exam.passingScore": "Passing score:",
      "exam.passLine": "pass",
      "exam.correctSuffix": "correct",
      "exam.ofCorrect": "correct \u00b7 time used",
      "exam.timeExpired": "Time expired \u00b7",
      "exam.attemptedOn": "Attempted on",
      "exam.breakdown.title": "Performance by skill area",
      "exam.answers.review": "Review all questions & explanations",
      "exam.answers.hide": "Hide question review",
      "exam.retakeCert": "Retake certification exam", "exam.newPractice": "New practice session",
      "exam.backModules": "Back to modules",
      "exam.answer.correct": "Correct", "exam.answer.incorrect": "Incorrect", "exam.answer.unanswered": "Unanswered",
      "exam.answer.markCorrect": " \u2713 Correct answer", "exam.answer.markYour": " \u2715 Your answer", "exam.answer.markYourCorrect": " \u2713 Your answer",
      "exam.answer.explanation": "Explanation:",
      "exam.noQuestions": "No questions available.",

      /* group / stage / belt display names */
      "group.Foundations": "Foundations",
      "group.Methodologies & Cycles": "Methodologies & Cycles",
      "group.Value & Quality Definition": "Value & Quality Definition",
      "group.Process Mapping & Analysis": "Process Mapping & Analysis",
      "group.Workplace, Flow & Standardization": "Workplace, Flow & Standardization",
      "group.Measurement & Control": "Measurement & Control",
      "group.Strategy & Governance": "Strategy & Governance",

      "stage.1": "Stage 1 \u00b7 Start Here \u2014 What CI Is",
      "stage.2": "Stage 2 \u00b7 See Value and Waste",
      "stage.3": "Stage 3 \u00b7 Organize and Standardize",
      "stage.4": "Stage 4 \u00b7 Improve in Cycles",
      "stage.5": "Stage 5 \u00b7 Map and Analyze the Process",
      "stage.6": "Stage 6 \u00b7 Find the Root Cause",
      "stage.7": "Stage 7 \u00b7 Balance the Flow",
      "stage.8": "Stage 8 \u00b7 Measure with Data",
      "stage.9": "Stage 9 \u00b7 Prove It Statistically",
      "stage.10": "Stage 10 \u00b7 Lead and Govern",

      "belt.white.name": "White Belt", "belt.white.tagline": "Awareness & vocabulary",
      "belt.white.goal": "Know the language of continuous improvement and recognize the core tools \u2014 you understand what they are and why they matter, even before you run them.",
      "belt.yellow.name": "Yellow Belt", "belt.yellow.tagline": "Practitioner \u2014 contribute to improvements",
      "belt.yellow.goal": "Take part in improvement events: run 5 Whys on a confirmed problem, contribute to an Ishikawa, and support standard work and error-proofing.",
      "belt.green.name": "Green Belt", "belt.green.tagline": "Lead small-to-medium projects",
      "belt.green.goal": "Run DMAIC projects end-to-end with process mapping, flow balancing, and basic statistics.",
      "belt.black.name": "Black Belt", "belt.black.tagline": "Lead programs, mentor & govern",
      "belt.black.goal": "Lead cross-functional programs with deep statistics, risk analysis, and CI strategy \u2014 and mentor Green Belts.",
      "belt.hoursSuffix": "hours",

      "domain.foundations": "Describe continuous-improvement foundations and concepts",
      "domain.methods": "Apply improvement methodologies and cycles",
      "domain.value": "Define customer value and quality",
      "domain.mapping": "Map and analyze processes and root causes",
      "domain.flow": "Optimize workplace, flow, and standardization",
      "domain.measure": "Measure and control processes statistically",
      "domain.govern": "Lead CI strategy and governance"
    },

    "pt-BR": {
      /* shared chrome */
      "internal.notice": "<strong>Interno e proposto &mdash; n\u00e3o \u00e9 uma oferta oficial da Microsoft.</strong> &ldquo;CI-900&rdquo; e esta s\u00e9rie de entrega s\u00e3o, neste momento, uma proposta interna destinada apenas a um p\u00fablico interno. N\u00e3o s\u00e3o um produto, certifica\u00e7\u00e3o ou exame da Microsoft e n\u00e3o s\u00e3o afiliados, endossados ou patrocinados pela Microsoft. N\u00e3o compartilhe externamente.",
      "internal.notice.exam": "<strong>Interno e proposto &mdash; n\u00e3o \u00e9 uma oferta oficial da Microsoft.</strong> &ldquo;CI-900&rdquo; \u00e9, neste momento, uma proposta interna destinada apenas a um p\u00fablico interno. N\u00e3o \u00e9 uma certifica\u00e7\u00e3o ou exame da Microsoft e n\u00e3o \u00e9 afiliada, endossada ou patrocinada pela Microsoft. N\u00e3o compartilhe externamente.",
      "breadcrumb.series": "iCSU Smart CI \u2014 S\u00e9rie de Entregas de 30 Minutos",
      "breadcrumb.module": "M\u00f3dulo",
      "breadcrumb.exam": "Exame Pr\u00e1tico CI-900",
      "footer.index": "iCSU Smart CI Tools \u00b7 S\u00e9rie de Entregas de 30 Minutos \u00b7 Interno e proposto \u2014 n\u00e3o \u00e9 uma oferta oficial da Microsoft \u00b7 Constru\u00eddo a partir da base de conhecimento CI for iCSU",
      "footer.module": "iCSU Smart CI Tools \u00b7 S\u00e9rie de Entregas de 30 Minutos",
      "footer.exam": "iCSU Smart CI Tools \u00b7 Exame Pr\u00e1tico CI-900 \u00b7 Conceito proposto e somente interno \u2014 n\u00e3o \u00e9 uma oferta oficial da Microsoft \u00b7 Avalia\u00e7\u00e3o pr\u00e1tica n\u00e3o oficial constru\u00edda a partir da base de conhecimento CI for iCSU",

      /* index hero */
      "index.title": "iCSU Smart CI \u2014 S\u00e9rie de Entregas de 30 Minutos",
      "hero.eyebrow": "iCSU \u00b7 Customer Success Unit",
      "hero.title": "Melhoria Cont\u00ednua \u2014 S\u00e9rie de Entregas de 30 Minutos",
      "hero.lede": "Todos os t\u00f3picos de Lean Six Sigma da biblioteca iCSU Smart CI, reempacotados em sess\u00f5es objetivas de 30 minutos. Escolha sua fun\u00e7\u00e3o e um caminho &mdash; uma <strong>progress\u00e3o guiada</strong> dos conceitos mais b\u00e1sicos aos mais avan\u00e7ados, <strong>navegue por conceito</strong> e categoria, ou <strong>siga uma faixa</strong> para filtrar a biblioteca pelo plano de aprendizado da faixa de Lean Six Sigma que voc\u00ea busca. Cada m\u00f3dulo abre com um resumo executivo, descreve o que voc\u00ea vai ganhar em linguagem simples, explica o conceito, mostra exemplos por fun\u00e7\u00e3o para CSAMs e CSAs, recapitula os pontos-chave e encerra com uma verifica\u00e7\u00e3o de conhecimento no estilo das certifica\u00e7\u00f5es da Microsoft.",
      "hero.stat.modules": "m\u00f3dulos de 30 min",
      "hero.stat.roles": "fun\u00e7\u00f5es: CSAM &amp; CSA",
      "hero.stat.parts": "partes por m\u00f3dulo",
      "hero.stat.questions": "quest\u00f5es de verifica\u00e7\u00e3o",

      /* format section */
      "format.heading": "Como cada m\u00f3dulo de 30 minutos \u00e9 estruturado",
      "format.part1.label": "Resumo Executivo", "format.part1.desc": "Por que a sess\u00e3o importa, para l\u00edderes.",
      "format.part2.label": "O Que Voc\u00ea Vai Ganhar", "format.part2.desc": "Resultados em linguagem simples.",
      "format.part3.label": "O Tema", "format.part3.desc": "O conceito, explicado.",
      "format.part4.label": "Exemplos por Fun\u00e7\u00e3o", "format.part4.desc": "Cen\u00e1rios de CSAM &amp; CSA.",
      "format.part5.label": "Recapitula\u00e7\u00e3o", "format.part5.desc": "Conceitos-chave &amp; li\u00e7\u00f5es.",
      "format.part6.label": "Verifica\u00e7\u00e3o de Conhecimento", "format.part6.desc": "Quiz no estilo de certifica\u00e7\u00e3o MS.",
      "format.part": "PARTE",

      /* exam CTA on index */
      "examcta.eyebrow": "Teste sua prepara\u00e7\u00e3o",
      "examcta.title": "CI-900: Fundamentos da Melhoria Cont\u00ednua",
      "examcta.desc": "Um exame pr\u00e1tico no <em>estilo</em> de uma certifica\u00e7\u00e3o da Microsoft, cobrindo toda a biblioteca. Use o <strong>modo Pr\u00e1tica</strong> para aprender com feedback imediato, ou o <strong>modo Certifica\u00e7\u00e3o</strong> para uma tentativa cronometrada com pontua\u00e7\u00e3o em escala, tela de marca\u00e7\u00e3o para revis\u00e3o e relat\u00f3rio por \u00e1rea de compet\u00eancia. <strong>O CI-900 \u00e9 um conceito proposto e somente interno &mdash; n\u00e3o \u00e9 uma certifica\u00e7\u00e3o ou exame real da Microsoft.</strong>",
      "examcta.btn": "Fazer o exame pr\u00e1tico \u2192",

      /* onboarding */
      "onb.eyebrow": "iCSU Smart CI \u00b7 Configure seu caminho",
      "onb.title": "Bem-vindo(a) \u2014 vamos personalizar isto para voc\u00ea",
      "onb.lede": "Escolha seu idioma, sua fun\u00e7\u00e3o e como prefere percorrer o material. Voc\u00ea pode alterar os tr\u00eas a qualquer momento.",
      "onb.q.lang": "1. Qual idioma voc\u00ea prefere?",
      "onb.lang.en.title": "English",
      "onb.lang.en.desc": "Content and interface in English (US formatting).",
      "onb.lang.pt.title": "Portugu\u00eas (Brasil)",
      "onb.lang.pt.desc": "Conte\u00fado e interface em portugu\u00eas, com formata\u00e7\u00e3o do Brasil.",
      "onb.q.role": "2. Qual \u00e9 a sua fun\u00e7\u00e3o?",
      "onb.role.csam.title": "CSAM",
      "onb.role.csam.desc": "Customer Success Account Manager. Exemplos e cen\u00e1rios assumem a vis\u00e3o do CSAM por padr\u00e3o.",
      "onb.role.csa.title": "CSA",
      "onb.role.csa.desc": "Cloud Solution Architect. Exemplos e cen\u00e1rios assumem a vis\u00e3o do CSA por padr\u00e3o.",
      "onb.q.flow": "3. Como voc\u00ea gostaria de explorar?",
      "onb.flow.guided.title": "Caminho guiado",
      "onb.flow.guided.desc": "Uma \u00fanica progress\u00e3o, das ideias mais b\u00e1sicas \u00e0s mais avan\u00e7adas. Ideal se voc\u00ea \u00e9 novo em Lean Six Sigma.",
      "onb.flow.concept.title": "Navegar por conceito",
      "onb.flow.concept.desc": "M\u00f3dulos agrupados em categorias para voc\u00ea ir direto ao tema que precisar.",
      "onb.flow.belt.title": "Seguir uma faixa",
      "onb.flow.belt.desc": "Busque uma faixa de Lean Six Sigma. Escolha sua faixa-alvo e filtramos a biblioteca para o plano de aprendizado dela.",
      "onb.q.belt": "4. Qual faixa voc\u00ea est\u00e1 buscando?",
      "onb.start": "Come\u00e7ar a aprender",
      "onb.aria": "Configure seu caminho",

      /* prefbar */
      "prefbar.showing": "Exibindo a vis\u00e3o",
      "prefbar.for": "para",
      "prefbar.flow.guided": "Caminho guiado",
      "prefbar.flow.concept": "Navegar por conceito",
      "prefbar.flow.beltSuffix": "plano",
      "prefbar.toggle.guided": "Caminho guiado",
      "prefbar.toggle.concept": "Por conceito",
      "prefbar.toggle.belt": "Por faixa",
      "prefbar.change": "Alterar idioma / fun\u00e7\u00e3o / caminho",
      "prefbar.targetBelt": "Faixa-alvo",
      "prefbar.aria.flow": "Escolher fluxo",
      "prefbar.aria.belt": "Escolher faixa-alvo",

      /* index listings */
      "index.modulesEach": "30 min cada",
      "index.module": "m\u00f3dulo", "index.modules": "m\u00f3dulos",
      "card.questionCheck": " quest\u00f5es de verifica\u00e7\u00e3o",
      "label.step": "PASSO", "label.module": "M\u00d3DULO",

      /* belt index */
      "belt.plan.eyebrow": "Plano de aprendizado da faixa",
      "belt.workingToward": "Avan\u00e7ando rumo \u00e0 sua",
      "belt.inThisPlan": "neste plano",
      "belt.cumulativeThrough": "cumulativo at\u00e9",
      "belt.ofStudy": "de estudo",
      "belt.yourTarget": "Sua meta",
      "belt.prerequisite": "Pr\u00e9-requisito",
      "belt.beyond": "Al\u00e9m da",
      "belt.moreModule": "m\u00f3dulo a mais", "belt.moreModules": "m\u00f3dulos a mais",
      "belt.cumulativeNote": "As faixas s\u00e3o cumulativas \u2014 escolher uma faixa superior mant\u00e9m tudo aqui e acrescenta o material mais aprofundado.",

      /* module page */
      "module.titleSuffix": "iCSU Smart CI Delivery",
      "module.delivery": "de entrega",
      "module.questionCheck": " quest\u00f5es de verifica\u00e7\u00e3o de conhecimento",
      "module.flow.guided": "Caminho guiado",
      "module.flow.concept": "Por conceito",
      "module.flow.beltSuffix": "plano",
      "module.posOf": "de",
      "module.beyondPlan": "al\u00e9m deste plano",
      "module.notFound": "M\u00f3dulo n\u00e3o encontrado. ",
      "module.returnAll": "Voltar a todos os m\u00f3dulos.",
      "sec.exec.kicker": "Resumo Executivo", "sec.exec.title": "Por que estes 30 minutos importam",
      "sec.gain.kicker": "O Que Voc\u00ea Vai Ganhar", "sec.gain.title": "O que voc\u00ea sair\u00e1 sabendo fazer",
      "sec.topic.kicker": "O Tema", "sec.topic.title": "O conceito, explicado",
      "sec.roles.kicker": "Exemplos por Fun\u00e7\u00e3o", "sec.roles.title": "Como isso aparece no campo",
      "sec.recap.kicker": "Recapitula\u00e7\u00e3o", "sec.recap.title": "Conceitos-chave & li\u00e7\u00f5es",
      "role.tab.csam": "CSAM \u2014 Customer Success Account Manager",
      "role.tab.csa": "CSA \u2014 Cloud Solution Architect",
      "role.panel.csam": "CSAM \u00b7 Customer Success Account Manager",
      "role.panel.csa": "CSA \u00b7 Cloud Solution Architect",
      "module.prev": "\u2190 M\u00f3dulo anterior",
      "module.next": "Pr\u00f3ximo m\u00f3dulo \u2192",

      /* knowledge check */
      "kc.kicker": "Verifica\u00e7\u00e3o de Conhecimento",
      "kc.title": "Teste seu entendimento",
      "kc.intro": "Quest\u00f5es no estilo das certifica\u00e7\u00f5es da Microsoft. Confirme uma resposta para revelar a explica\u00e7\u00e3o.",
      "kc.questions": "Quest\u00f5es:", "kc.pass": "Aprova\u00e7\u00e3o:",
      "q.indexOf1": "Quest\u00e3o", "q.indexOf2": "de",
      "q.check": "Verificar resposta",
      "q.markerCorrect": "\u2713 Resposta correta",
      "q.markerYour": "\u2715 Sua resposta",
      "q.fb.correct": "Correto", "q.fb.notquite": "Quase l\u00e1",
      "kc.summary.pass": "Verifica\u00e7\u00e3o de conhecimento conclu\u00edda",
      "kc.summary.retry": "Quase l\u00e1",
      "kc.summary.passed": "Voc\u00ea foi aprovado. Revise os itens que errou.",
      "kc.summary.failedPrefix": "A nota de aprova\u00e7\u00e3o \u00e9",
      "kc.summary.failedSuffix": ". Revise o m\u00f3dulo e tente novamente.",
      "kc.retry": "Refazer verifica\u00e7\u00e3o",
      "kc.allModules": "Todos os m\u00f3dulos",

      /* exam start */
      "exam.hero.eyebrow": "Avalia\u00e7\u00e3o pr\u00e1tica no estilo das certifica\u00e7\u00f5es da Microsoft",
      "exam.hero.lede": "Uma avalia\u00e7\u00e3o realista, no estilo de exame, sobre toda a biblioteca iCSU Smart CI. Escolha o modo Pr\u00e1tica para aprender com feedback imediato, ou o modo Certifica\u00e7\u00e3o para uma tentativa cronometrada e pontuada que espelha a experi\u00eancia real de exame.",
      "exam.fact.bank": "quest\u00f5es no banco",
      "exam.fact.perAttempt": "por tentativa de certifica\u00e7\u00e3o",
      "exam.fact.timeLimit": "limite de tempo (modo cert.)",
      "exam.fact.scoreToPass": "pontua\u00e7\u00e3o para aprova\u00e7\u00e3o",
      "exam.q.short": "Q", "exam.min": "min",
      "exam.practice.badge": "Modo Pr\u00e1tica / Prepara\u00e7\u00e3o",
      "exam.practice.title": "Aprenda com feedback imediato",
      "exam.practice.desc": "Uma quest\u00e3o por vez. Confirme uma resposta e a alternativa correta e a explica\u00e7\u00e3o completa aparecem imediatamente. Sem cron\u00f4metro \u2014 ideal para construir conhecimento antes de uma tentativa cronometrada.",
      "exam.practice.li1": "Resposta + justificativa imediatas a cada item",
      "exam.practice.li2": "Foque em uma \u00fanica \u00e1rea de compet\u00eancia ou em todo o banco",
      "exam.practice.li3": "Sem cron\u00f4metro, refa\u00e7a quantas vezes quiser",
      "exam.practice.start": "Iniciar pr\u00e1tica",
      "exam.field.length": "Tamanho", "exam.field.skill": "\u00c1rea de compet\u00eancia",
      "exam.len.questions": "quest\u00f5es",
      "exam.len.all": "Todas as", "exam.len.allSuffix": "quest\u00f5es",
      "exam.skill.all": "Todas as \u00e1reas",
      "exam.cert.badge": "Modo Certifica\u00e7\u00e3o",
      "exam.cert.title": "Cronometrado, pontuado, realista",
      "exam.cert.start": "Iniciar exame de certifica\u00e7\u00e3o",      "exam.name": "Fundamentos de Melhoria Cont\u00ednua",
      "exam.cert.desc": "{len} quest\u00f5es em {min} minutos. Sem feedback at\u00e9 que voc\u00ea envie. Marque itens para revis\u00e3o, revisite-os a partir de uma tela de revis\u00e3o e receba uma pontua\u00e7\u00e3o em escala e um detalhamento por \u00e1rea de compet\u00eancia \u2014 exatamente como um exame de certifica\u00e7\u00e3o da Microsoft.",
      "exam.cert.li1": "{len} quest\u00f5es \u00b7 contagem regressiva de {min} minutos",
      "exam.cert.li3": "Pontua\u00e7\u00e3o em escala de at\u00e9 {max} \u00b7 aprova\u00e7\u00e3o em {pass}",      "exam.cert.markLi": "Marcar para revis\u00e3o + grade de revis\u00e3o ao final",
      "exam.cert.reportLi": "Relat\u00f3rio de desempenho por \u00e1rea de compet\u00eancia",
      "exam.skills.title": "Compet\u00eancias avaliadas",
      "exam.skills.note": "Uma tentativa de certifica\u00e7\u00e3o seleciona quest\u00f5es entre estas \u00e1reas de compet\u00eancia usando os pesos indicados.",
      "exam.skills.col.area": "\u00c1rea de compet\u00eancia", "exam.skills.col.weight": "Peso", "exam.skills.col.bank": "Banco",
      "exam.disclaimer": "Esta \u00e9 uma avalia\u00e7\u00e3o pr\u00e1tica n\u00e3o oficial e interna, constru\u00edda a partir da base de conhecimento iCSU Smart CI para imitar o formato dos exames de certifica\u00e7\u00e3o da Microsoft. O CI-900 \u00e9, neste momento, um conceito proposto e somente interno, para p\u00fablico interno apenas. N\u00e3o \u00e9 afiliado nem endossado pela Microsoft e n\u00e3o \u00e9 um exame ou certifica\u00e7\u00e3o real da Microsoft.",

      /* exam session */
      "exam.mode.cert": "Modo Certifica\u00e7\u00e3o", "exam.mode.practice": "Modo Pr\u00e1tica",
      "exam.bar.question": "Quest\u00e3o", "exam.bar.of": "de", "exam.bar.answered": "respondidas",
      "exam.endPractice": "Encerrar pr\u00e1tica",
      "exam.question": "Quest\u00e3o",
      "exam.chooseBest": "Escolha a melhor resposta.",
      "exam.prev": "\u2190 Anterior", "exam.next": "Pr\u00f3xima \u2192",
      "exam.markReview": "Marcar para revis\u00e3o",
      "exam.review.btn": "Revis\u00e3o \u2630",
      "exam.reviewSubmit": "Revisar & enviar", "exam.finish": "Concluir",
      "exam.reviewScreen": "Tela de revis\u00e3o",
      "exam.review.title": "Revise suas respostas",
      "exam.review.note": "Selecione qualquer quest\u00e3o para retornar a ela. Os itens sinalizados ficam marcados. Quest\u00f5es n\u00e3o respondidas s\u00e3o pontuadas como incorretas.",
      "exam.legend.answered": "Respondida", "exam.legend.unanswered": "N\u00e3o respondida", "exam.legend.marked": "Marcada para revis\u00e3o",
      "exam.allAnswered": "Todas as quest\u00f5es respondidas.",
      "exam.stillUnanswered1": "quest\u00e3o ainda sem resposta.", "exam.stillUnanswered2": "quest\u00f5es ainda sem resposta.",
      "exam.markedForReview": "marcadas para revis\u00e3o.",
      "exam.returnQuestions": "\u2190 Voltar \u00e0s quest\u00f5es",
      "exam.submit": "Enviar exame",
      "exam.confirm.unanswered1": "Voc\u00ea tem", "exam.confirm.unanswered2": "quest\u00e3o sem resposta",
      "exam.confirm.unanswered2p": "quest\u00f5es sem resposta",
      "exam.confirm.anyway": ". Enviar mesmo assim? Itens sem resposta s\u00e3o pontuados como incorretos.",
      "exam.confirm.submit": "Enviar seu exame para pontua\u00e7\u00e3o?",
      "exam.confirm.endPractice": "Encerrar esta sess\u00e3o de pr\u00e1tica e ver seus resultados?",

      /* exam report */
      "exam.attempt": "Tentativa de certifica\u00e7\u00e3o", "exam.session": "Sess\u00e3o de pr\u00e1tica",
      "exam.pass": "APROVADO", "exam.fail": "N\u00c3O APROVADO",
      "exam.passingScore": "Nota de aprova\u00e7\u00e3o:",
      "exam.passLine": "aprova\u00e7\u00e3o",
      "exam.correctSuffix": "corretas",
      "exam.ofCorrect": "corretas \u00b7 tempo usado",
      "exam.timeExpired": "Tempo esgotado \u00b7",
      "exam.attemptedOn": "Realizado em",
      "exam.breakdown.title": "Desempenho por \u00e1rea de compet\u00eancia",
      "exam.answers.review": "Revisar todas as quest\u00f5es & explica\u00e7\u00f5es",
      "exam.answers.hide": "Ocultar revis\u00e3o das quest\u00f5es",
      "exam.retakeCert": "Refazer exame de certifica\u00e7\u00e3o", "exam.newPractice": "Nova sess\u00e3o de pr\u00e1tica",
      "exam.backModules": "Voltar aos m\u00f3dulos",
      "exam.answer.correct": "Correta", "exam.answer.incorrect": "Incorreta", "exam.answer.unanswered": "Sem resposta",
      "exam.answer.markCorrect": " \u2713 Resposta correta", "exam.answer.markYour": " \u2715 Sua resposta", "exam.answer.markYourCorrect": " \u2713 Sua resposta",
      "exam.answer.explanation": "Explica\u00e7\u00e3o:",
      "exam.noQuestions": "Nenhuma quest\u00e3o dispon\u00edvel.",

      /* group / stage / belt display names */
      "group.Foundations": "Fundamentos",
      "group.Methodologies & Cycles": "Metodologias & Ciclos",
      "group.Value & Quality Definition": "Defini\u00e7\u00e3o de Valor & Qualidade",
      "group.Process Mapping & Analysis": "Mapeamento & An\u00e1lise de Processos",
      "group.Workplace, Flow & Standardization": "Ambiente, Fluxo & Padroniza\u00e7\u00e3o",
      "group.Measurement & Control": "Medi\u00e7\u00e3o & Controle",
      "group.Strategy & Governance": "Estrat\u00e9gia & Governan\u00e7a",

      "stage.1": "Etapa 1 \u00b7 Comece Aqui \u2014 O Que \u00e9 MC",
      "stage.2": "Etapa 2 \u00b7 Enxergar Valor e Desperd\u00edcio",
      "stage.3": "Etapa 3 \u00b7 Organizar e Padronizar",
      "stage.4": "Etapa 4 \u00b7 Melhorar em Ciclos",
      "stage.5": "Etapa 5 \u00b7 Mapear e Analisar o Processo",
      "stage.6": "Etapa 6 \u00b7 Encontrar a Causa Raiz",
      "stage.7": "Etapa 7 \u00b7 Equilibrar o Fluxo",
      "stage.8": "Etapa 8 \u00b7 Medir com Dados",
      "stage.9": "Etapa 9 \u00b7 Comprovar Estatisticamente",
      "stage.10": "Etapa 10 \u00b7 Liderar e Governar",

      "belt.white.name": "Faixa Branca", "belt.white.tagline": "Consci\u00eancia & vocabul\u00e1rio",
      "belt.white.goal": "Conhe\u00e7a a linguagem da melhoria cont\u00ednua e reconhe\u00e7a as ferramentas centrais \u2014 voc\u00ea entende o que s\u00e3o e por que importam, mesmo antes de aplic\u00e1-las.",
      "belt.yellow.name": "Faixa Amarela", "belt.yellow.tagline": "Praticante \u2014 contribui com melhorias",
      "belt.yellow.goal": "Participe de eventos de melhoria: conduza os 5 Porqu\u00eas em um problema confirmado, contribua com um Ishikawa e apoie o trabalho padronizado e a prova de erros.",
      "belt.green.name": "Faixa Verde", "belt.green.tagline": "Lidera projetos de pequeno a m\u00e9dio porte",
      "belt.green.goal": "Conduza projetos DMAIC de ponta a ponta com mapeamento de processos, balanceamento de fluxo e estat\u00edstica b\u00e1sica.",
      "belt.black.name": "Faixa Preta", "belt.black.tagline": "Lidera programas, mentora & governa",
      "belt.black.goal": "Lidere programas multifuncionais com estat\u00edstica avan\u00e7ada, an\u00e1lise de risco e estrat\u00e9gia de MC \u2014 e mentore Faixas Verdes.",
      "belt.hoursSuffix": "horas",

      "domain.foundations": "Descrever fundamentos e conceitos da melhoria cont\u00ednua",
      "domain.methods": "Aplicar metodologias e ciclos de melhoria",
      "domain.value": "Definir valor e qualidade para o cliente",
      "domain.mapping": "Mapear e analisar processos e causas raiz",
      "domain.flow": "Otimizar ambiente, fluxo e padroniza\u00e7\u00e3o",
      "domain.measure": "Medir e controlar processos estatisticamente",
      "domain.govern": "Liderar estrat\u00e9gia e governan\u00e7a de MC"
    }
  };

  function t(key) {
    var lang = getLang();
    var table = DICT[lang] || DICT.en;
    if (Object.prototype.hasOwnProperty.call(table, key)) return table[key];
    if (Object.prototype.hasOwnProperty.call(DICT.en, key)) return DICT.en[key];
    return key;
  }

  /* ---------------- Static HTML population ---------------- */
  function applyStatic(scope) {
    var root = scope || document;
    document.documentElement.lang = getLang() === "pt-BR" ? "pt-BR" : "en";
    Array.prototype.forEach.call(root.querySelectorAll("[data-i18n]"), function (node) {
      var v = t(node.getAttribute("data-i18n"));
      if (v != null) node.textContent = v;
    });
    Array.prototype.forEach.call(root.querySelectorAll("[data-i18n-html]"), function (node) {
      var v = t(node.getAttribute("data-i18n-html"));
      if (v != null) node.innerHTML = v;
    });
    var titleKey = document.documentElement.getAttribute("data-i18n-title");
    if (titleKey) { var tv = t(titleKey); if (tv != null) document.title = tv; }
  }

  window.SmartCI = {
    getLang: getLang,
    setLang: setLang,
    locale: locale,
    langName: langName,
    t: t,
    fmtNumber: fmtNumber,
    fmtPercent: fmtPercent,
    fmtDate: fmtDate,
    getModules: getModules,
    applyStatic: applyStatic
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () { applyStatic(); });
  } else {
    applyStatic();
  }
})();
