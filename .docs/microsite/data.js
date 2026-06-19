/* iCSU Smart CI - 30-Minute Delivery module content.
   Generated from the CI for iCSU (.docs/L6S) knowledge base. */
window.MODULES = {
"intro": {
  id: "intro",
  title: "Intro to Continuous Improvement",
  group: "Foundations",
  duration: "30 min",
  executiveSummary: "Continuous Improvement (CI) is the disciplined practice of making small, evidence-based changes to a system on a repeatable cadence so that capability, quality, and speed compound over time. For CSAs it is the operating model that turns reactive ticket-chasing into proactive engagement planning: observe a customer's Azure estate, identify the highest-impact gap, run a small experiment (PDCA), measure the result, and standardize what worked. CI is not a one-off project—it is the habit that keeps WAF reviews, cost optimizations, reliability uplifts, and skilling investments compounding quarter over quarter.",
  whatYouGain: [
    "Understand the PDCA cycle and when to apply it to customer engagements",
    "Learn to identify the highest-impact improvement opportunity using Pareto analysis and Ishikawa",
    "Measure change and make data-driven decisions about what to standardize",
    "Recognize when training is the right intervention instead of running a CI cycle",
    "Structure an ongoing engagement model around a 6-week CI cadence instead of one-off projects"
  ],
  explanation: "<p><strong>Continuous Improvement</strong> is a system of small, deliberate, measured changes rooted in the Toyota Production System and formalized by Deming. The canonical engine is PDCA: <strong>Plan</strong> a change targeted at a specific gap, <strong>Do</strong> it at small scale, <strong>Check</strong> the data, <strong>Act</strong> by standardizing or discarding the change. CI succeeds because each cycle's baseline becomes the next cycle's starting point, compounding gains.</p><p>The key components that make CI work are <strong>Kaizen</strong> (bias toward many small improvements over rare large ones), <strong>standard work</strong> (once validated, a change becomes the new baseline), <strong>Gemba</strong> (decisions made where the work happens, with real data), and <strong>respect for people</strong> (improvements come from the team operating the system). A CSA running CI is running a repeating cadence, not delivering a project.</p><p>When is CI the right intervention? Use it when the engagement is ongoing, the customer has measurable data, leadership will fund small repeated investments, and the system is complex enough that big-bang change is risky. <strong>Do not use CI</strong> for true emergency incidents (run incident command first), hard compliance deadlines (run a project, then maintain with CI), or one-off workshops with no follow-up.</p><p>A critical distinction: CI assumes baseline competence. When data shows operators cannot execute the standard work, <strong>training is the prerequisite</strong>, not a PDCA cycle. If the control chart shows a process sitting entirely outside the control limits with a stable shape, that is a capability defect, not a process defect. Skill the team first, then apply CI on top of a stable baseline.</p>",
  csamExample: "<p>A CSAM inherits a strategic account where the previous engagement model was firefighting—show up when incidents spike, deliver a slide deck, move on. After six months of unstructured effort, incident volume is unchanged and the account is at churn risk. The CSAM resets the engagement around a 6-week CI cadence. Together with the customer's platform lead, they baseline incident volume (312 Sev B/C per month), run a Pareto to identify the top 3 signatures, and design a small hypothesis for the first cycle (e.g., 'Adding a private endpoint to ACR will drop ImagePullBackOff incidents'). After measuring and standardizing that change, they pick the next hypothesis. Three cycles later, incidents are down 54% and the customer sees measurable business value. The CSAM's engagement model now compounds because every cycle's outcome is the next cycle's baseline.</p>",
  csaExample: "<p>A CSA is assigned to a Tier-1 account running 40 microservices on AKS. Rather than proposing a comprehensive reliability overhaul, the CSA frames it as a CI cadence: every 2 weeks, baseline the incident Pareto, pick the top signature, run a 1-week experiment (e.g., add zone redundancy to a single workload, enable pod memory limits, configure CoreDNS autoscale), measure the outcome, and standardize in IaC. After 6 months, 14 targeted changes are in place, incident volume is down 68%, and the customer's SRE team owns the cadence. The CSA still reviews PRs and helps design hypotheses, but the customer is running the loop independently. Standard work is versioned in the customer's GitHub org; new engineers onboard against it, not against the CSA's coaching.</p>",
  recap: [
    "PDCA is the core loop: Plan a small change, Do it at small scale, Check the data, Act by standardizing or discarding",
    "Compounding gains come from repeating the cycle on a consistent cadence—each outcome becomes the next baseline",
    "Use Pareto, Ishikawa, and 5 Whys to identify the highest-impact gap before planning the change",
    "Baseline measurement is non-negotiable—without it, Check is opinion and standardization is guesswork",
    "CI is not a project; it is an operating model. Success is the customer running the loop without the CSA",
    "When the data shows people cannot execute the standard work, training is the intervention, not a PDCA cycle"
  ],
  questions: [
    {
      prompt: "What does PDCA stand for?",
      options: ["Process Design, Capability Assessment.", "Plan, Do, Check, Act.", "Prioritize, Develop, Confirm, Approve.", "Problem, Data, Cause, Action."],
      correctIndex: 1,
      explanation: "<strong>PDCA</strong> is Deming's loop: <strong>Plan</strong> a change at a specific gap, <strong>Do</strong> it at small scale, <strong>Check</strong> the data, <strong>Act</strong> by standardizing or discarding. It is the core engine of CI."
    },
    {
      prompt: "What is the primary goal of Continuous Improvement?",
      options: ["To complete one large transformation project per year.", "To make small, evidence-based changes on a repeatable cadence so gains compound.", "To eliminate all problems immediately upon discovery.", "To maximize utilization of engineering resources."],
      correctIndex: 1,
      explanation: "CI achieves <strong>compounding gains</strong> through many small, deliberate, measured changes — not rare large ones. Each cycle's baseline is the previous cycle's outcome."
    },
    {
      prompt: "Before you can run Check in PDCA, what must already exist?",
      options: ["Executive approval and budget allocation.", "A measurable baseline from the Plan phase.", "A list of all possible causes of the problem.", "Agreement on which metric to optimize."],
      correctIndex: 1,
      explanation: "Without a <strong>baseline measurement</strong>, the Check phase is opinion. You must know today's state with data the team trusts before applying a change and measuring the delta."
    },
    {
      prompt: "What is the CSA's exit criterion for a successful CI engagement?",
      options: ["The customer has completed three PDCA cycles.", "All recommendations from the initial assessment have been implemented.", "The customer is running the loop without the CSA.", "The customer has achieved the largest possible improvement."],
      correctIndex: 2,
      explanation: "Success in CI means <strong>the customer is running the cadence independently</strong>. The CSA coaches the loop; success is when the customer owns it and the CSA can exit without regression."
    },
    {
      prompt: "Which of these is NOT a component of Continuous Improvement?",
      options: ["Standard work that captures validated changes.", "A one-time transformation or tool purchase.", "Gemba walks to observe real work.", "Respect for the people operating the system."],
      correctIndex: 1,
      explanation: "CI is <strong>not</strong> a one-time transformation, a tool purchase, a certification, or a slide template. It is a repeating cadence that produces durable gains through small, systematic changes."
    }
  ]
}, "belts": {
  id: "belts",
  title: "Learning, Belts, and Certification",
  group: "Foundations",
  duration: "30 min",
  executiveSummary: "Lean and Six Sigma certifications use a martial-arts belt metaphor—White, Yellow, Green, Black, Master Black—to signal the depth of continuous-improvement capability from knowing the vocabulary to designing org-wide CI strategy. For CSAs the belt ladder is useful as a personal skilling roadmap, a credential customers recognize (especially in regulated industries), and a coaching framework for customer teams. The key principle: treat each belt as the formalization of capability you should already be demonstrating in real engagements—credentials trail the work, not the other way around.",
  whatYouGain: [
    "Understand the belt ladder from White Belt (vocabulary) to Master Black Belt (designs CI strategy)",
    "Know which belt to pursue next based on the gap you should demonstrate, not the highest available",
    "Learn how to choose the right certifying body (ASQ, IASSC, consultancy programs) for your customer base",
    "See how to treat the required improvement project as the credential itself, not a hurdle to the real work",
    "Use belt awareness to frame conversations with customers and adjust your language to match their expertise level"
  ],
  explanation: "<p>The belt metaphor originates in Six Sigma but applies across Lean, TPS, and CI practice. While global standards vary, the level concepts are consistent. <strong>White Belt</strong> (~8 hours) is awareness—understand vocabulary, recognize tools (Pareto, Ishikawa, 5 Whys, Kaizen), but don't run them. <strong>Yellow Belt</strong> (~20–40 hours) is practitioner-level: participate in a Kaizen event, run 5 Whys on a confirmed problem, contribute to an Ishikawa. <strong>Green Belt</strong> (~80–120 hours plus a real project) leads small-to-medium improvement projects end-to-end, comfortable with DMAIC, basic statistics, and process mapping.</p><p><strong>Black Belt</strong> (~160–200 hours plus multiple projects) leads cross-functional improvement programs with deep statistics, advanced lean thinking, change management, and mentoring of Green Belts. <strong>Master Black Belt</strong> trains and certifies Black Belts, designs an organization's CI strategy. The credential choices matter: <strong>Lean</strong> belts emphasize waste and flow; <strong>Six Sigma</strong> emphasizes variation; <strong>Lean Six Sigma</strong> is the merged curriculum most enterprises use. <strong>DMAIC</strong> improves existing processes; <strong>DMADV / DFSS</strong> designs new ones.</p><p>Accredited credentials (ASQ, IASSC) carry more weight in regulated industries; consultancy belts are often fine in tech. The critical decision point: <strong>do not chase belts for their own sake</strong>. A CSA with 5 belts and no validated engagement outcomes is less effective than one with a Green Belt and a track record of measured customer wins. Choose the belt that codifies the next capability you need—not the highest available.</p>",
  csamExample: "<p>A CSAM works in the financial services vertical where Lean Six Sigma is table stakes. The CSAM has run many small improvements with customers but lacks formal credentials. During an intake conversation with a Fortune 500 bank's program office, they ask, 'What belt do you hold?' The CSAM responds honestly: 'I have not pursued formal certification, but I have led seven measured improvement cycles with outcomes like these [shows Pareto and cost delta]. I am planning to pursue Green Belt in Q2 to formalize that capability.' The bank appreciates the transparency and the demonstrated work more than the badge; they invite the CSAM to design the engagement. The Green Belt, when earned, becomes corroborating evidence of what the CSAM has already proven in the field.</p>",
  csaExample: "<p>A CSA supporting a healthcare customer has been using Pareto and 5 Whys ad hoc for 18 months. Their manager suggests pursuing a Green Belt to formalize the next level—DMAIC, control charts, value-stream mapping. The CSA scopes a real customer project as their Green Belt capstone: a 90-day Cosmos DB optimization cycle that reduced RU/s consumption by 38% and saved $14K per month. They choose ASQ as the certifying body (recognized in healthcare), complete the 100-hour curriculum over 12 weeks, and present the measured customer engagement as their project requirement. The CSA passes; the customer receives validated improvements; the organization gains another credentialed facilitator for enterprise CI programs. By treating the customer's real need as the project requirement, the CSA creates two outputs from one engagement.</p>",
  recap: [
    "The belt ladder signals depth of CI capability: White (vocabulary) to Master Black (designs strategy)",
    "Pick the belt that formalizes the next capability gap you should demonstrate—not the highest available",
    "Green and Black Belt credentials require a real, measured improvement project; that project is the credential",
    "Choose accredited programs (ASQ, IASSC) for regulated industries; consultancy programs are fine elsewhere",
    "Belt-collecting without demonstrated customer outcomes is a liability, not a credential",
    "Build a customer-side belt map to know whether you're talking to a Yellow, Green, or Black; adjust language accordingly"
  ],
  questions: [
    {
      prompt: "What does the Lean Six Sigma belt ladder primarily signal about a practitioner?",
      options: ["Years of CSA experience at Microsoft.", "Depth of continuous-improvement capability, from knowing the vocabulary to leading org-wide CI strategy.", "How many customer engagements they have closed in the last quarter.", "Their internal performance rating."],
      correctIndex: 1,
      explanation: "The belt ladder is a shared way to talk about <strong>how deep</strong> CI capability runs — from White (vocabulary and awareness) to Master Black (designs an organization's CI strategy). It is a capability signal, not a tenure or performance metric."
    },
    {
      prompt: "How should a CSA decide which belt to pursue next?",
      options: ["Always pursue the highest belt the organization will fund.", "Match whichever belt the customer's most senior CI lead holds.", "Pick the belt that formalizes the next capability gap they should be demonstrating in real engagements.", "Pursue belts in strict order on a fixed annual cadence regardless of work."],
      correctIndex: 2,
      explanation: "The guidance is to <strong>pick the belt that formalizes the next gap</strong> — not the highest available. A CSA who has never run a real Kaizen should pursue Yellow, not Black. Credentials should trail the work, not the other way around."
    },
    {
      prompt: "For Green Belt and Black Belt certifications, what is the &ldquo;point&rdquo; of the certification?",
      options: ["Passing the multiple-choice exam.", "Completing the required classroom training hours.", "Delivering a real, measured improvement project — the project is the credential and the exam is the formality.", "Joining the certifying body's alumni network."],
      correctIndex: 2,
      explanation: "Green/Black Belt programs require a real improvement project with measured outcomes. The advice is to pick that project from <strong>real customer work</strong>, not a contrived case, so the same engagement produces both customer value and the credential."
    },
    {
      prompt: "What is the &ldquo;belt-collecting&rdquo; anti-pattern described in the guide?",
      options: ["Holding belts from more than one accreditation body.", "Accumulating belts without validated engagement outcomes to back them up.", "Re-certifying belts every year.", "Listing belt credentials on internal playbooks."],
      correctIndex: 1,
      explanation: "A CSA with five belts and no validated engagement outcomes is <strong>less effective</strong> than one with a Green Belt and a track record of measured customer wins. The credential is corroborating evidence, not a substitute for the work."
    },
    {
      prompt: "How does Master Black Belt differ from Black Belt?",
      options: ["It is the same scope but with a longer exam.", "It is a leadership-only credential with no technical content.", "It trains and certifies Black Belts and designs the organization&rsquo;s CI strategy — a teaching credential as much as a doing one.", "It is awarded automatically after holding Black Belt for five years."],
      correctIndex: 2,
      explanation: "Master Black Belt is rare and usually held by the head of a CI / operational-excellence function. They <strong>train and certify Black Belts</strong> and shape the organization's CI program design."
    }
  ]
}, "ms-ci-cop": {
  id: "ms-ci-cop",
  title: "Continuous Improvement @ Microsoft",
  group: "Foundations",
  duration: "30 min",
  executiveSummary: "Continuous Improvement at Microsoft is the connective tissue between the customer-facing CSA practice and the engineering groups that build Azure. It shows up as the iCSU CI Community of Practice, the WAF and Advisor feedback loops, the CSA playbook repositories, and the cross-team rituals that compound learnings across the org. For a CSA it is both a resource (skilling, playbooks, peers) and a responsibility (contribute the patterns you validate, escalate systemic issues to product groups). Done well, CI@MS turns every customer engagement into both an outcome for that customer and a reusable asset for every CSA that follows.",
  whatYouGain: [
    "Understand how CI@MS aggregates learnings across thousands of CSAs and feeds them back to Azure product groups",
    "Learn to consume existing playbooks (WAF, CSA Playbook Library, Azure Advisor) instead of re-inventing engagement patterns",
    "Know how to contribute validated patterns back to the community and watch them compound across the org",
    "See how field signal (cross-account incident Paretos, ACR blockers) drives product-level improvements",
    "Recognize the belt accreditation landscape at Microsoft and choose ASQ as the default for Lean Six Sigma certification"
  ],
  explanation: "<p>CI@MS exists to solve a scale problem: a single CSA owns a handful of accounts, but Microsoft has thousands of CSAs and tens of thousands of customers. Without a CI practice that aggregates learnings, every CSA re-discovers the same patterns, every customer relives the same incidents, and product groups never hear the signal loudly enough to fix root causes. <strong>CI@MS is the feedback loop that turns field observations into product improvements.</strong></p><p>What distinguishes CI@MS structures is that they are <strong>measured, versioned, owned, and reusable</strong>. Every published pattern carries the evidence that it worked. Playbooks evolve cycle over cycle; old versions are deprecated, not deleted. Each playbook has a named maintainer and a refresh cadence. Patterns are written for the next CSA to apply, not as war stories. The major surfaces include the iCSU CI Community of Practice, the WAF assessment framework, Azure Advisor and Defender for Cloud as per-account baselines, versioned CSA / CSE / FastTrack playbooks, MS Learn curriculum, and structured field-to-PG escalation channels (ACR blockers, ICM signature analysis).</p><p>The rhythm of community participation is simple: consume existing playbooks before designing a new engagement; run PDCA on real customer work; document measured outcomes; bring patterns to the monthly CoP call; let peers review and critique; merge validated patterns into shared libraries. CSAs both consume and contribute. Skipping either side breaks the loop. When the same root cause appears across 3+ accounts, that is a PG conversation, not a CSA workaround. Use the ACR blocker or ICM signature channels to escalate systemic signals so engineering can prioritize fixes.</p>",
  csamExample: "<p>A CSAM is preparing an EBR for a Tier-1 strategic account and wants to baseline the customer's reliability and cost posture. Rather than starting from scratch, the CSAM consults CI@MS resources: the WAF Reliability playbook (standard assessment, standardized scoring, proven remediation backlog structure), the cross-account incident Pareto dashboard (shows if this account's incident signatures match industry patterns), and the Azure Advisor export template (quick data pull). Assembly time drops from 2 days to 3 hours. The readout is peer-reviewed against the CoP's EBR standard work before delivery. The CSAM then structures the follow-up engagement as a 6-week CI cycle—pick the top reliability finding, run a small change, measure the result, standardize in the customer's IaC. After three cycles, the customer has measurable reliability gains and sees compounding value.</p>",
  csaExample: "<p>A CSA running AKS engagements notices that Cosmos DB hierarchical partition keys (HPK) reduce RU/s consumption by 35–40% on three of their accounts. Instead of keeping the pattern as a personal playbook, they document it in the customer's Azure Design Repository with before-and-after metrics, give a 5-minute lightning talk at the monthly CoP meeting, and submit it for peer review. Two Cosmos domain CSAs provide feedback; one round of revisions; merged into the Data CSA playbook with a versioned IaC module. Six months later, 6 other CSAs have applied the same pattern to their accounts. A single CSA's validated experiment became standard work that now compounds across the org. When the CSA escalates a systemic issue—'Cosmos containers created without indexed partition paths in 8 accounts'—the aggregated evidence goes to the product group; the portal experience gets updated with an indexing recommender.</p>",
  recap: [
    "CI@MS is the connective tissue between field learnings and product-group priorities—it turns one CSA's observation into org-wide improvement",
    "Every CSA consumes existing playbooks (WAF, CSA Playbook Library, Advisor guidance) before starting a new engagement",
    "Contribute validated patterns back to the CoP; let peers review; merge into shared libraries; watch them compound across thousands of CSAs",
    "When the same root cause appears across 3+ accounts, escalate as a field signal (ACR blocker or ICM signature) to product groups, not as a CSA workaround",
    "ASQ is the default belt credentialing body at Microsoft; it is tracked in the Devices DFSS Lean Six Sigma ROB alongside project graduation and mentorship",
    "CI@MS itself runs on CI: playbooks are versioned and refreshed each cycle; old patterns are deprecated as Azure evolves"
  ],
  questions: [
    {
      prompt: "What is the primary purpose of Continuous Improvement at Microsoft (CI@MS)?",
      options: ["To replace customer-specific engagement plans with a single corporate template.", "To aggregate learnings across CSAs and provide a data-driven feedback loop from the field to product groups.", "To certify CSAs in Azure services.", "To provide a centralized time-tracking system for the CSA practice."],
      correctIndex: 1,
      explanation: "CI@MS is the connective tissue between the field and engineering. It <strong>aggregates patterns</strong> so PG can prioritize fixes, codifies validated engagement patterns into shared playbooks, and turns one CSA's observation into a product-level improvement."
    },
    {
      prompt: "What distinguishes a CI@MS playbook from a generic &ldquo;internal Wiki of tips&rdquo;?",
      options: ["Playbooks are only accessible to senior CSAs.", "Playbooks are auto-generated from Azure telemetry.", "Playbooks are measured, versioned, owned by a named maintainer with a refresh cadence, and written to be reusable.", "Playbooks are written exclusively by product groups."],
      correctIndex: 2,
      explanation: "Each published pattern carries the <strong>evidence that it worked</strong>, evolves cycle over cycle, has a named owner, and is written for the next CSA to apply — not as a war story."
    },
    {
      prompt: "A CSA spots the same product limitation showing up across three or more of their accounts. What does CI@MS recommend they do?",
      options: ["Build a private workaround per account and move on.", "Wait until the next quarterly review to mention it.", "Aggregate the evidence as a cross-account Pareto and escalate via the ACR blocker or ICM signature channel to PG.", "File a Sev A incident on each affected subscription."],
      correctIndex: 2,
      explanation: "When the same root cause appears across multiple accounts, that's a <strong>PG conversation, not a CSA workaround</strong>. The field-to-PG signal channels (ACR blocker tracker, ICM signature analysis) exist to turn aggregated evidence into product-level CI."
    },
    {
      prompt: "According to the FY26 DFSS / Lean Six Sigma Rhythm of Business, which credentialing body does Microsoft&rsquo;s Lean Six Sigma program track for belt progress?",
      options: ["IASSC (International Association for Six Sigma Certification).", "CSSC (Council for Six Sigma Certification).", "ASQ (American Society for Quality).", "Shingo Institute."],
      correctIndex: 2,
      explanation: "The FY26 DFSS / Lean Six Sigma ROB tracks <strong>ASQ certification progress</strong> alongside project graduation and mentorship. ASQ is the default when scoping a belt, though other Microsoft orgs may also accept IASSC or CSSC — confirm with your HR business partner before committing."
    },
    {
      prompt: "What is the &ldquo;lone genius&rdquo; anti-pattern in CI@MS?",
      options: ["A CSA who escalates every issue directly to PG without trying to resolve it first.", "A CSA who only consumes playbooks but never contributes back.", "A CSA who validates many patterns across their accounts but never publishes them — forcing every other CSA to re-discover the same lessons.", "A CSA who works without a manager or peer reviewer."],
      correctIndex: 2,
      explanation: "CI@MS is a many-to-many practice. The lone-genius CSA validates 30 patterns and never publishes — <strong>the org pays the cost of every other CSA re-discovering them</strong>. Contribution is the entry fee for the loop to compound."
    }
  ]
},
"data-types": {
  id: "data-types",
  title: "Understanding Data in CI",
  group: "Foundations",
  duration: "30 min",
  executiveSummary: "Continuous Improvement runs on data, but not all data is the same kind—and using the wrong kind produces confident, wrong decisions. This module gives CSAs a working vocabulary for four data distinctions that appear in every engagement: empirical vs. theoretical (measured reality vs. modeled expectation), qualitative vs. quantitative (descriptive vs. numeric), continuous vs. discrete (measured on a continuum vs. counted), and direct vs. circumstantial (evidence of the thing itself vs. a correlated proxy). Knowing which kind of data you hold tells you which statistical tool is valid, how large a sample you need, and how much weight a finding can bear. The core discipline: anchor every CI decision in empirical, direct measurement of the metric that matters, and treat models, proxies, and sentiment as inputs that point you there—not as proof.",
  whatYouGain: [
    "Distinguish empirical (measured) from theoretical (modeled) data and know when each can be trusted",
    "Tell quantitative from qualitative data, and turn qualitative signal into something you can measure",
    "Classify data as continuous or discrete and pick the control chart and sample size that fit",
    "Separate direct evidence of a problem from circumstantial proxies, and avoid correlation-as-causation traps",
    "Choose the right data type for a CTQ so your baseline, analysis, and Control phase stay statistically valid"
  ],
  explanation: "<p>Continuous Improvement is only as good as the data feeding it. The trap is not missing data—it is using the <strong>wrong kind</strong> of data with the wrong tool and reaching a confident but wrong conclusion. Every measurement carries four attributes at once, and naming them keeps your analysis honest.</p><p><strong>Empirical vs. theoretical.</strong> Empirical data is obtained by observation, measurement, or experiment—the actual values the real system produced (four weeks of logged P95 latency, the real incident count last month). Theoretical data is produced by a model, assumption, or first-principles calculation—the values a system <em>should</em> produce (a queuing model's predicted latency, a normal-curve DPMO estimate, a renewal forecast). Theory is invaluable for planning, but in CI you <strong>validate theory against empirics</strong> and never standardize a change on a model alone.</p><p><strong>Qualitative vs. quantitative.</strong> Quantitative data is numeric and measurable (latency in ms, RU/s, cost, counts) and supports statistical analysis. Qualitative data is descriptive or categorical (VOC verbatims, incident categories, root-cause themes, sentiment). Qualitative is not second-class: you <strong>code it into nominal or ordinal categories and count it</strong>, turning sentiment into a Pareto of themes. The two work together—qualitative data tells you <em>what</em> to measure; quantitative data tells you <em>how much</em>.</p><p><strong>Continuous vs. discrete.</strong> Continuous data can take any value on a continuum (latency, CPU %, cost, temperature) and is infinitely divisible. Discrete data is counted in whole units (number of incidents, failed deployments, defects per release)—you cannot have 2.5 failed deployments. The distinction is practical: continuous data uses I-MR or X-bar/R charts and detects a shift with relatively few samples; discrete <strong>attribute</strong> data uses p-, np-, c-, or u-charts and needs a far larger sample to detect the same change, because each pass/fail outcome carries less information than a measurement.</p><p><strong>Direct vs. circumstantial.</strong> Direct data measures the metric of interest itself (actual P95 latency when latency is the CTQ). Circumstantial—indirect—data measures a correlated proxy you reason from (CPU %, support-ticket volume, portal sign-ins). Circumstantial evidence is excellent for forming hypotheses and triaging where to look, but a correlation is not proof: <strong>correlation is not causation</strong>. Gather direct measurement of the CTQ before you treat a cause as confirmed or standardize a fix.</p><p>A single metric carries all four attributes simultaneously. &lsquo;Measured P95 latency in ms&rsquo; is empirical, quantitative, continuous, and direct—about as trustworthy as data gets. &lsquo;Twelve Sev-B incidents tagged networking this quarter&rsquo; is empirical, the count is quantitative and discrete, the tag is qualitative, and using incident count to judge reliability is partly circumstantial. Naming the attributes tells you exactly how much that number can be asked to prove.</p>",
  csamExample: "<p>A CSAM is preparing an EBR for a strategic account and has four very different inputs on the table: a qualitative VOC theme (&lsquo;the platform team feels deployments are risky&rsquo;), a quantitative consumption trend (AKS and ACR spend), a circumstantial signal (portal sign-ins dipped 20% last month), and a theoretical renewal forecast projecting 12% growth. A weaker readout would react to the forecast or the sign-in dip in isolation. Instead the CSAM anchors on <strong>empirical, direct</strong> data—pulls actual consumption and incident history—and codes the VOC verbatims into categories so the dominant concern (deployment confidence) becomes a counted, quantified theme rather than an anecdote. The forecast is presented as a model to pressure-test, not a fact; the sign-in dip is flagged as a hypothesis to investigate, not a conclusion. The renewal conversation lands because it rests on measured reality, and the one qualitative theme that mattered becomes a measurable CTQ for the next CI cycle.</p>",
  csaExample: "<p>A CSA on an AKS reliability engagement hears the customer assert, &lsquo;CPU spikes are causing our latency SLO breaches,&rsquo; pointing to a chart where CPU and latency rise together. CPU is <strong>circumstantial</strong>—a proxy, not the CTQ. The CSA gathers <strong>direct, empirical</strong> data: actual P95/P99 latency percentiles (continuous) and the count of SLO-breaching releases (discrete). Because latency is continuous, an I-MR / X-bar-R chart on ~20–25 subgroups is enough to see the pattern; because deployment outcome is attribute data, the CSA knows a p-chart would need a much larger sample to confirm a real shift. The latency control chart shows breaches cluster after scale-in cold starts—not with CPU at all. The CSA rejects the theoretical assumption, fixes the actual cause (warm pool / minimum replica count), and standardizes it in IaC. Treating the CPU correlation as proof would have sent the team down the wrong path entirely.</p>",
  recap: [
    "Every metric carries four attributes at once—empirical/theoretical, qualitative/quantitative, continuous/discrete, direct/circumstantial—name them to keep analysis honest",
    "Empirical (measured) data validates theoretical (modeled) expectations; never standardize a change on a model alone",
    "Qualitative signal is not second-class—code it into categories and count it so VOC drives a measurable CTQ",
    "Continuous data uses I-MR / X-bar-R charts and needs fewer samples; discrete attribute data uses p-/c-/u-charts and needs far larger samples",
    "Direct measurement of the CTQ is proof; circumstantial proxies (CPU, tickets, sign-ins) form hypotheses—correlation is not causation",
    "Pick the data type deliberately in Define/Measure so your baseline, chart, and Control phase stay statistically valid"
  ],
  questions: [
    {
      prompt: "A CSA pulls four weeks of actual P95 latency readings from Azure Monitor to baseline a process. What kind of data is this?",
      options: ["Theoretical, because percentiles are statistical estimates.", "Empirical, because it is observed measurement of the real system.", "Qualitative, because latency describes user experience.", "Circumstantial, because latency is only a proxy for reliability."],
      correctIndex: 1,
      explanation: "<strong>Empirical</strong> data is obtained by observation or measurement of the real world. Actual logged latency readings are empirical; a model that <em>predicts</em> latency would be theoretical. Even though a percentile is a computed summary, it is computed from observed measurements, so the data is empirical."
    },
    {
      prompt: "Which of these metrics is discrete (attribute) data rather than continuous?",
      options: ["Average request latency in milliseconds.", "CPU utilization percentage.", "The number of failed deployments per release.", "Monthly Azure spend in dollars."],
      correctIndex: 2,
      explanation: "Discrete data is counted in whole units—you cannot have 2.5 failed deployments. Latency, CPU %, and cost are <strong>continuous</strong> (any value on a continuum). The distinction drives chart choice: counts use p-/c-/u-charts, while continuous values use I-MR or X-bar/R."
    },
    {
      prompt: "A customer's VOC interviews produce dozens of free-text comments about deployment pain. What is the best way to make this qualitative data usable in a CI baseline?",
      options: ["Discard it, because only numeric data belongs in a baseline.", "Treat every individual comment as its own separate root cause.", "Code the comments into categories and count them so the dominant theme can be quantified.", "Forward it to the product group without further analysis."],
      correctIndex: 2,
      explanation: "Qualitative data becomes actionable when it is <strong>coded into categories and counted</strong>—turning sentiment into a Pareto of themes. Qualitative signal tells you what to measure; quantifying it lets it drive a measurable CTQ rather than staying an anecdote."
    },
    {
      prompt: "A team asserts CPU spikes are the root cause of latency breaches, citing a chart where CPU and latency both rise. Before standardizing a fix, what should a CSA do?",
      options: ["Accept it—two correlated lines on a chart are sufficient proof of causation.", "Gather direct measurement of the latency CTQ to test the hypothesis, since CPU is circumstantial evidence.", "Raise CPU limits immediately and close the investigation.", "Replace the measurements with a theoretical queuing model."],
      correctIndex: 1,
      explanation: "CPU is a <strong>circumstantial</strong> (indirect) proxy, and a correlation is a hypothesis, not proof. Direct measurement of the metric that matters—the latency CTQ—is required before a cause is treated as confirmed. Correlation is not causation."
    },
    {
      prompt: "Why does attribute (discrete) data generally require a much larger sample than continuous data to detect the same process change?",
      options: ["Because attribute data cannot be plotted on a control chart.", "Because each continuous measurement carries more information than a single pass/fail outcome.", "Because discrete data is always theoretical rather than empirical.", "Because continuous data is inherently qualitative."],
      correctIndex: 1,
      explanation: "Each continuous measurement conveys more information than a single discrete pass/fail result, so continuous data detects a shift with fewer samples. Attribute/count data (proportion defective, defect counts) needs substantially larger samples for equivalent sensitivity—an important sample-size consideration when choosing a metric."
    }
  ]
},
"dmaic": {
  id: "dmaic",
  title: "DMAIC",
  group: "Methodologies & Cycles",
  duration: "30 min",
  executiveSummary: "DMAIC—Define, Measure, Analyze, Improve, Control—is the Six Sigma methodology for fixing underperforming processes. Each phase has a tollgate; you do not proceed until evidence is sufficient. The discipline prevents the most expensive engineering mistake: solving the wrong problem confidently. Use DMAIC when the problem merits weeks-to-months of structured, data-driven work.",
  whatYouGain: ["Understand when to use DMAIC vs. faster cycles like PDCA or Kaizen", "Run a structured five-phase project with tollgates that prevent jumping to solutions", "Use data to anchor decisions and kill opinion-driven changes", "Set up a Control phase that keeps improvement gains from regressing", "Apply DMAIC to reliability, cost, and capacity programs"],
  explanation: "<p>DMAIC provides a structured framework with five phases and tollgates. <strong>Define</strong> aligns on problem, scope, and measurable goal using project charter, SIPOC, and voice of customer. <strong>Measure</strong> establishes baseline performance and validates the measurement system itself. <strong>Analyze</strong> identifies root causes through Ishikawa, 5 Whys, and data-driven hypothesis testing—not guesses. <strong>Improve</strong> pilots changes and compares post-change performance to baseline. <strong>Control</strong> sustains the gain through standardization via infrastructure as code, policy, runbooks, and monitoring.</p><p>Each tollgate prevents the team from advancing without sufficient evidence. A control chart showing that gains held, an Ishikawa diagram with root causes grounded in data, and a baseline with 4+ weeks of defensible measurement are examples of tollgate requirements. The anti-pattern to avoid is the 'DMAIC sprint'—running all five phases in a week without real gates. That is a Kaizen, not a DMAIC.</p><p>DMAIC pairs naturally with Belt projects and large programs. Use it when existing processes are underperforming and the cause is unclear. Do not use DMAIC for designing new processes (use DMADV), same-day fixes (use PDCA), or strategic change (use Hoshin Kanri).</p>",
  csamExample: "<p>A CSAM supporting a customer's reliability initiative uses DMAIC to structure a multi-quarter program that cuts incident rate from 8 per month to 2 per month. During Define, the CSAM aligns the customer's leadership on the charter: reduce MTTR and incident volume to improve customer trust and platform consumption. Measure establishes a baseline incident rate and MTTR from 8 weeks of production data. Analyze uses a Pareto chart to show that 60% of incidents come from one root cause: a single microservice's timeout. Improve pilots a circuit-breaker pattern; post-pilot measurement confirms the change. Control phase codifies the pattern across all similar services via policy and runbooks. The CSAM translates the capability number (incident rate post-control) into business value: 'Platform is now stable enough for your team to focus on feature velocity instead of firefighting.' Consumption grows because engineering team velocity increases.</p>",
  csaExample: "<p>A CSA leads a customer's AKS reliability DMAIC. Define: eliminate ImagePullBackOff incidents. Measure: baseline shows ImagePullBackOff is 41% of all incidents in a Pareto chart. Analyze: root cause is mutable image tags + public ACR access, allowing stale images. Improve: implement private ACR endpoint, enforce immutable tags, and manage identity via managed identity. Test on one cluster; Compare baseline (41% of incidents) to post-change (0% ImagePullBackOff-related incidents). Control: Azure Policy denies mutable tags cluster-wide; a runbook documents the standard. The CSA sets up a control chart on incident type in Azure Workbooks to sustain the baseline.</p>",
  recap: ["DMAIC is for weeks-to-months problems with unclear root causes; use PDCA for faster cycles and Kaizen for same-day events", "Tollgates stop you from jumping to solutions before understanding the problem via data", "Define → Measure → Analyze → Improve → Control is the rigid sequence; each phase has concrete deliverables", "The Control phase is not optional; standardization and sustained monitoring prevent regression", "Use DMAIC to certify Green and Black Belts, structure customer reliability programs, and build searchable playbook knowledge"],
  questions: [
    {
      prompt: "What does DMAIC stand for?",
      options: ["Design, Measurement, Analysis, Implementation, Control.", "Define, Measure, Analyze, Improve, Control.", "Deploy, Monitor, Assess, Improve, Correct.", "Decision, Metrics, Assessment, Implementation, Closure."],
      correctIndex: 1,
      explanation: "DMAIC stands for <strong>Define, Measure, Analyze, Improve, Control</strong> &mdash; five sequential phases, each with a tollgate preventing advancement without sufficient evidence."
    },
    {
      prompt: "What is the primary purpose of tollgates in DMAIC?",
      options: ["To schedule meetings with project stakeholders.", "To prevent jumping to solutions before the problem is understood.", "To assign budget to each phase of the project.", "To document lessons learned at phase boundaries."],
      correctIndex: 1,
      explanation: "Tollgates stop the most expensive engineering mistake: <strong>solving the wrong problem confidently</strong>. Each gate ensures evidence is sufficient before the next phase begins."
    },
    {
      prompt: "When should you use DMAIC instead of PDCA or Kaizen?",
      options: ["For any quick fix or same-day problem resolution.", "When the problem is significant enough to merit weeks-to-months of structured work.", "For designing brand-new processes that don&rsquo;t yet exist.", "Only when you have a Green Belt project certification candidate."],
      correctIndex: 1,
      explanation: "DMAIC fits problems big enough to merit weeks-to-months of structured, data-driven work. For shorter cycles use PDCA or Kaizen; for <strong>new process design</strong> use DMADV."
    },
    {
      prompt: "What happens during the Control phase of DMAIC?",
      options: ["The team identifies which hypotheses to test next.", "Measurement systems are validated for accuracy.", "The gain is standardized and sustained through standard work and monitoring.", "Root causes are identified and ranked by impact."],
      correctIndex: 2,
      explanation: "The Control phase <strong>sustains the gain</strong> through standardization via IaC, Policy, runbooks, dashboards, and alerts &mdash; so improvements do not regress after the project ends."
    },
    {
      prompt: "Which is an anti-pattern to avoid in DMAIC execution?",
      options: ["Collecting more data than absolutely required during Measure.", "Running all five phases in a week with no meaningful tollgates.", "Involving the process owner too early in Define.", "Using statistical tools like hypothesis testing in Analyze."],
      correctIndex: 1,
      explanation: "Running all phases in a week without real gates is not DMAIC &mdash; it&rsquo;s a <strong>Kaizen event</strong>. DMAIC requires phases to have real gates and adequate evidence per phase."
    }
  ]
}, "pdca": {
  id: "pdca",
  title: "PDCA / PDSA",
  group: "Methodologies & Cycles",
  duration: "30 min",
  executiveSummary: "PDCA—Plan, Do, Check, Act—is the foundational improvement cycle: hypothesize a change, try it, measure the result, and standardize or learn. Deming later refined it to PDSA (Study instead of Check) to emphasize learning. PDCA is the atomic unit of continuous improvement; every change inside DMAIC, every Kaizen event, and every daily standup decision is a PDCA cycle.",
  whatYouGain: ["Write falsifiable hypotheses before making any change", "Run small experiments with real measurement instead of changes-by-opinion", "Standardize successful changes into standard work via IaC or runbooks", "Learn from negative results instead of hiding them", "Chain PDCAs together for compounding improvement across months"],
  explanation: "<p>PDCA is simple but requiring discipline. <strong>Plan:</strong> Write a falsifiable hypothesis: 'If we [change], then [metric] will move from [baseline] to [target] within [window], because [theory].' Define the measurement: same source, same query, before and after. <strong>Do:</strong> Make the change small—pilot scope, canary cluster, one team. Collect data unmodified; don't cherry-pick the time window post-hoc. <strong>Check / Study:</strong> Compare actual result to prediction. Did it move? In the expected direction? By the expected amount? <strong>Act:</strong> Choose one of three: standardize via IaC or policy, adapt (run another cycle with one variable changed), or abandon and document the learning.</p><p>The discipline prevents solution-first thinking. Most 'improvements' are uncontrolled changes—no hypothesis, no measure, no standardization. PDCA forces minimum scientific rigor. Negative results are data, not failure. A team that reverts a failed experiment and documents the learning has learned more than a team that blindly rolls out every change.</p><p>PDCA scales: inside a single sprint, inside a DMAIC Improve phase (often 3–5 chained PDCAs), inside a Kaizen event (one PDCA per intervention), and across a team's daily-improvement cadence. Chaining PDCAs compounds improvement.</p>",
  csamExample: "<p>A CSAM coaches a customer's SRE team to improve alerting discipline. The team had tweaked alert thresholds weekly for a year with no measured MTTR improvement. The CSAM imposes PDCA discipline on each change. Cycle 1: Hypothesis—'If we lower spike-alert threshold from 90% CPU to 80%, we catch load issues earlier and MTTR drops 20%.' Measurement window: 2 weeks. Result: MTTR dropped 18%. Act: standardized. Cycle 2: Hypothesis on a different signal; MTTR drops another 15%. Over four cycles, MTTR fell 31% and the team stopped thrashing. The CSAM's constraint—'every change needs a hypothesis and a 2-week measurement window'—accelerated improvement by forcing scientific discipline.</p>",
  csaExample: "<p>A CSA and customer engineer run a PDCA on autoscale tuning. Plan: 'If we lower the scale-out threshold from 80% CPU to 65%, P95 latency drops ≥20%, because we get ahead of load faster.' Do: deploy to one node pool; collect 2 weeks of P95 latency data. Check: P95 dropped 27%. Act: standardize the threshold change via IaC template across all node pools. The CSA follows up with a negative-result PDCA: retry-policy tuning. Hypothesis disconfirmed—throughput actually dropped. Act: revert within a day and document that retry-with-backoff already saturated on this workload. No wasted month-long rollout.</p>",
  recap: ["PDCA enforces hypothesis → experiment → measurement → decision on every change", "Plan must be falsifiable; Do must be small; Check must be honest about negative results", "Chain PDCAs inside DMAIC's Improve phase and at team standup for daily improvement", "Standardize wins via IaC, policy, or runbooks; abandon failures and document learning", "A PDCA meeting is not a PDCA—the discipline is applied to the work, not the calendar"],
  questions: [
    {
      prompt: "A team says &ldquo;we improved alerting last Friday &mdash; we adjusted thresholds.&rdquo; A month later MTTR hasn&rsquo;t changed. What would PDCA discipline have prevented?",
      options: ["It would have prevented the team from ever changing the alerting thresholds.", "It would have required a hypothesis before the change, a measurement window after, and a decision to standardize or revert.", "It would have made the change happen faster.", "It ensures the entire team uses the same monitoring tools."],
      correctIndex: 1,
      explanation: "PDCA enforces minimum discipline on every change. Without a <strong>hypothesis, measurement, and decision</strong>, changes are invisible experiments. PDCA would have surfaced that this change had no effect."
    },
    {
      prompt: "You&rsquo;re coaching a team to reduce AKS cluster-autoscaler latency. What should the Plan phase include?",
      options: ["Just the metric you want to improve; details emerge during Do.", "A falsifiable hypothesis: &ldquo;If we [change], then [metric] will improve from [baseline] to [target] within [window], because [theory].&rdquo;", "A commitment to roll out the change to all clusters immediately when early signs look good.", "A survey asking engineers if they think the change will work."],
      correctIndex: 1,
      explanation: "Plan must include a <strong>falsifiable hypothesis</strong> and a success metric. This prevents solution-first thinking and lets Check make an honest yes/no decision."
    },
    {
      prompt: "A retry-policy test shows throughput went down, not up. What is the correct Act decision?",
      options: ["Ignore the result because it conflicts with the hypothesis.", "Roll out the change to all systems and hope throughput improves with scale.", "Revert the change and document the learning that this approach doesn&rsquo;t work as theorized.", "Claim the measurement was wrong and run the test again."],
      correctIndex: 2,
      explanation: "Negative results are <strong>data, not failure</strong>. If the hypothesis is disconfirmed, revert and document. The learning is valuable for future cycles."
    },
    {
      prompt: "A team ran 6 PDCA cycles in a quarter. Five resulted in standardized improvements; one was reverted. What does this tell you?",
      options: ["The team is experimenting without discipline because not all changes succeeded.", "The team is practicing CI with scientific honesty &mdash; some changes work, some don&rsquo;t, and all results inform the next cycle.", "They should stop running PDCA because 83% isn&rsquo;t high enough.", "One failed cycle proves the entire program is broken."],
      correctIndex: 1,
      explanation: "A mixed success rate is <strong>exactly what good PDCA looks like</strong>. A 100% success rate would suggest the hypotheses were too safe. Continuous improvement compounds from chains of cycles."
    },
    {
      prompt: "A customer says: &ldquo;We&rsquo;re doing PDCA &mdash; we added a Friday &lsquo;PDCA meeting&rsquo; to the calendar.&rdquo; What should you clarify?",
      options: ["Perfect &mdash; a Friday meeting will ensure consistent discipline.", "PDCA is a cycle applied to specific changes, not a meeting format. The discipline is hypothesis &rarr; experiment &rarr; measurement &rarr; decision.", "PDCA meetings should be held twice per week to improve velocity.", "The calendar invitation validates the team is doing PDCA correctly."],
      correctIndex: 1,
      explanation: "PDCA is not a meeting; it&rsquo;s a <strong>cycle applied to a change</strong>. A calendar event is meaningless without a real hypothesis, measurement, and honest decision on real work."
    }
  ]
}, "a3": {
  id: "a3",
  title: "A3 Thinking",
  group: "Methodologies & Cycles",
  duration: "30 min",
  executiveSummary: "A3—named after the A3-size paper (~11\"×17\")—is a structured one-page report capturing the entire arc of a problem-solving effort: background, current state, goal, root cause, countermeasures, plan, and follow-up. The physical constraint forces clarity; the act of drafting an A3 with a coach (the 'A3 coach') teaches structured reasoning. A3 is both a thinking tool and a communication tool.",
  whatYouGain: ["Create one-page problem-solving reports that busy leaders actually read in five minutes", "Capture complete thinking arc in a durable format that lasts years", "Use A3 drafting as a coaching mechanism to teach structured reasoning to engineers", "Replace 40-slide decks nobody re-reads with one searchable A3", "Standardize problem-solving shape across your organization or customer account"],
  explanation: "<p>A3 layout is disciplined: <strong>Left side (top to bottom):</strong> Background/context, Current State (with data/diagram), Goal/Target State. <strong>Right side (top to bottom):</strong> Root Cause Analysis, Countermeasures (what to do), Implementation Plan (who/what/when), Follow-up (how to verify, sustain). Variants exist—Proposal A3 for new initiatives, Status A3 for ongoing work, Strategy A3 for Hoshin Kanri planning.</p><p>Discipline: One page. Two if absolutely required; never three. Data and visuals dominate; prose is minimal. The story must read left-to-right, top-to-bottom. Author signs, coach signs, sponsor signs. The anti-pattern is A3-as-a-slide: if your A3 fits a slide deck, it's not an A3—it's a status report wearing the label.</p><p>A3 is a coaching mechanism. The author + coach + iterative review IS the training. The redrafts teach structured reasoning. The final A3 goes into the knowledge base as a permanent reference, not a shared drive nobody opens. This contrasts with 90-slide quarterly reviews: leadership reading time fell from 2 hours to 15 minutes per A3; decision reversal rate dropped from 40% to 12%.</p>",
  csamExample: "<p>A CSAM wraps a major customer engagement (Azure landing zone migration, consumption acceleration program) as an A3. Background: customer's legacy infrastructure is costly and inflexible; prevents adoption of modern Azure services. Current State: 40% of workloads still on-premises, monthly cloud costs $180K, deployment lead time 6 weeks. Goal: migrate 60% of workloads, drop monthly cloud spend 25%, reduce deployment lead time to 2 weeks within 6 months. Root Cause (via Ishikawa): governance policy delays, immature IaC, teams unfamiliar with Azure native patterns. Countermeasures: establish landing zone blueprints, train teams on IaC + Azure governance, run Kaizen on deployment pipeline. Plan: CSA leads design weeks 1–4, customer team implements weeks 5–16. Follow-up: CSA reviews migration progress and consumption metrics every 2 weeks; success = target metrics met and consumption accelerating. The A3 becomes the engagement contract and the knowledge artifact for future similar accounts.</p>",
  csaExample: "<p>A CSA completes a Kaizen on AKS ImagePullBackOff incidents and documents it as an A3. Background: production incidents cost the customer $50K/quarter in downtime. Current State: Pareto shows 41% of incidents are ImagePullBackOff; root cause via 5 Whys: mutable image tags + public ACR endpoint allows stale/incorrect image pulls. Goal: eliminate ImagePullBackOff incidents within 6 weeks. Countermeasures: (1) enforce immutable tags via Azure Policy, (2) create private ACR endpoint, (3) wire managed identity auth. Plan: CSA codes the Policy, customer team implements; test on dev cluster first. Follow-up: control chart on incident type for 8 weeks post-change. The A3 is signed by the CSA, customer engineer, and sponsor; it goes into the CSA's portfolio as both certification artifact and future reference when coaching similar reliability programs.</p>",
  recap: ["A3 is one page: Background, Current State, Goal, Root Cause, Countermeasures, Plan, Follow-up", "One-page constraint forces clarity and creates durable artifacts that last years", "A3 author + coach + iterative redrafts = belt-grade training in structured reasoning", "Use A3 for DMAIC wrap-ups, Kaizen readouts, Belt certification, and proposing programs", "Store A3s in a searchable knowledge base, not a shared drive; future teams re-read them"],
  questions: [
    {
      prompt: "What are the seven sections of a standard problem-solving A3, in order?",
      options: ["Intro, Problem Statement, Analysis, Solution, Timeline, Review, Approval.", "Background, Current State, Goal, Root Cause, Countermeasures, Plan, Follow-up.", "Title, Summary, Methods, Results, Actions, Owner, Sign-off.", "Opening, Issue, Investigation, Fix, Test, Close, Notes."],
      correctIndex: 1,
      explanation: "The A3 captures the entire problem-solving arc on one page: where we started, where we are, where we want to go, why the gap exists, what to do, the plan, and how to verify &mdash; a <strong>complete narrative</strong>."
    },
    {
      prompt: "Why is the one-page constraint of an A3 a strength rather than a limitation?",
      options: ["It&rsquo;s cheaper to print and distribute to the team.", "It forces sharp problem statements and clarity &mdash; nobody re-reads 40-slide decks.", "It simplifies email delivery and reduces file sizes.", "It reduces editing time and accelerates approvals."],
      correctIndex: 1,
      explanation: "The physical <strong>constraint</strong> of one page eliminates fluff, forces prioritization, and creates a durable artifact that future teams re-read. Clarity and reuse are the product."
    },
    {
      prompt: "What is the role of an A3 coach in the development process?",
      options: ["To write the A3 for the author so the project moves faster.", "To review and challenge &mdash; the redrafts ARE the training, not the final A3.", "To collect data from team members and assemble it into slides.", "To get signatures from stakeholders and archive the document."],
      correctIndex: 1,
      explanation: "A3 development is a <strong>coaching mechanism</strong>. The author redrafts multiple times under mentor guidance; the learning happens in the iteration, not in the final document."
    },
    {
      prompt: "When is an A3 the appropriate artifact instead of a quick runbook entry?",
      options: ["For every incident, regardless of severity or frequency.", "For routine one-time incidents &mdash; an A3 is overkill there.", "For repeated or systemic incidents where root cause and countermeasures matter.", "Only for Sev A incidents that cause customer impact."],
      correctIndex: 2,
      explanation: "A two-line runbook entry handles one-time incidents. An A3 with root-cause analysis is appropriate when the incident <strong>recurs</strong> or reveals systemic gaps."
    },
    {
      prompt: "What is a sign that an &ldquo;A3&rdquo; has failed as a thinking tool?",
      options: ["It has too much white space and visual elements.", "It compresses neatly into a multi-slide PowerPoint deck.", "It&rsquo;s readable by a busy leader in five minutes.", "It documents a failed initiative with disconfirming evidence."],
      correctIndex: 1,
      explanation: "If your A3 fits a slide deck, it&rsquo;s not an A3 &mdash; it&rsquo;s a <strong>status report wearing the label</strong>. The one-page form factor is the mechanism that forces thinking rigor."
    }
  ]
}, "control-charts": {
  id: "control-charts",
  title: "Control Charts (SPC)",
  group: "Measurement & Control",
  duration: "30 min",
  executiveSummary: "A control chart is a time-series plot of a process metric with statistical control limits (typically ±3σ) to distinguish common-cause variation (noise—the process is what it is) from special-cause variation (signal—something has changed). Statistical Process Control detects drift before customers do and proves that improvement gains held.",
  whatYouGain: ["Tell the difference between a real problem and normal process variation", "Detect process drift early, before SLO breaches and customer impact", "Prove that Kaizen gains are sustained with statistics, not claims", "Reduce wasted effort reacting to false alarms and noise", "Monitor any CTQ metric: latency, error rate, cost, throughput, AI eval metrics"],
  explanation: "<p>Control chart components: <strong>Center Line (CL)</strong> = typically the mean or median. <strong>Upper/Lower Control Limits (UCL/LCL)</strong> = CL ± 3σ where σ is the within-subgroup standard deviation. <strong>Points</strong> = the metric over time. Common chart types: I-MR for individual values (e.g., cost per day), X-R for subgroup means (e.g., P95 latency by 5-min window), p-chart for proportion defective (e.g., error rate per deployment), c-chart for defect counts per period.</p><p>Special-cause signals (Western Electric / Nelson rules): (1) One point outside ±3σ, (2) 9 consecutive points on one side of CL, (3) 6 consecutive points trending up or down, (4) 14 points alternating up/down, (5) 2 of 3 consecutive points outside ±2σ on same side. Any rule firing = investigate the process; do not tweak settings for common-cause variation. Anti-pattern: moving control limits to 'absorb' variation—that destroys the tool's signal capability.</p><p>How to use: (1) Establish stable baseline of 20–25 subgroups, investigating and removing any clear special causes. (2) Compute CL and limits. (3) Plot ongoing data on the locked baseline; do not recompute limits each period. (4) Apply rules; investigate signals. (5) Re-baseline only after deliberate process change, documented.</p>",
  csamExample: "<p>A CSAM uses control charts in QBR/EBR customer reviews to demonstrate account health. The CSA provides a control chart of the customer's infrastructure costs by month: CL $145K, UCL $180K, LCL $110K. For 6 months, cost is stable within limits. After a Kaizen to optimize database RU spend, a re-baselined control chart shows CL $110K, UCL $130K. The CSAM tells the customer's CFO: 'Your platform is now stable at the new lower cost level. Nine consecutive points below the old center line statistically proves the gain held.' Leadership confidence in the program and account consumption increases.</p>",
  csaExample: "<p>A CSA sets up an Azure Workbook with control charts for latency (P99) and error rate. Baseline is 4 weeks of production data. P99 latency CL 312ms, UCL 410ms; error-rate p-chart CL 0.3%, UCL 1.2%. After a Kaizen on tail-latency (connection pool tuning), the CSA re-baselines: P99 CL 187ms, UCL 245ms. The control chart is locked and displayed in the operations dashboard. Two weeks later, a spike appears: one data point shoots to 520ms (outside UCL). CSA's runbook triggers: investigate that hour for infrastructure changes. Root cause found: misconfigured load balancer on one region. Without the control chart, the spike would have looked like noise.</p>",
  recap: ["Control limits separate signal (special-cause) from noise (common-cause) using ±3σ math", "Western Electric rules detect special causes; investigate them rather than tweaking the process", "Establish baseline with 20–25 stable subgroups; lock limits and only re-baseline after deliberate change", "Use control charts in the Control phase of DMAIC, in ongoing reliability monitoring, and in QBR reporting", "Control charts prove that Kaizen gains held, not that compliance was lucky"],
  questions: [
    {
      prompt: "What is the primary purpose of drawing control limits (typically &plusmn;3&sigma;) on a process metric chart?",
      options: ["To set production targets the team must meet.", "To distinguish common-cause from special-cause variation.", "To predict future metric values with statistical certainty.", "To replace traditional statistical hypothesis testing."],
      correctIndex: 1,
      explanation: "Control limits separate noise (common-cause &mdash; the process is what it is) from signal (special-cause &mdash; something has changed). This prevents over-reacting to normal <strong>variation</strong>."
    },
    {
      prompt: "How should you respond when a single metric point falls outside the upper control limit?",
      options: ["Immediately adjust process settings to bring it back in.", "Recompute the control limits to accommodate the new data.", "Investigate for a special cause per Western Electric rules.", "Tighten the SLO by 10% to prevent recurrence."],
      correctIndex: 2,
      explanation: "One point outside &plusmn;3&sigma; is a <strong>special-cause signal</strong> per Western Electric rules. Investigate the cause; don&rsquo;t tweak the process for common-cause variation."
    },
    {
      prompt: "When should you recalculate and re-baseline control chart limits?",
      options: ["Every week to keep limits current with the latest data.", "Only after a deliberate, documented process change.", "Never once the baseline is established and locked.", "Whenever the metric looks out of control or concerning."],
      correctIndex: 1,
      explanation: "Lock the baseline on 20&ndash;25 stable subgroups. Do not recompute each period &mdash; that destroys signal capability. <strong>Re-baseline only</strong> after intentional process change."
    },
    {
      prompt: "Which control chart type would you use to monitor P99 latency measured at 5-minute intervals?",
      options: ["I-MR (individuals and moving range) for single values.", "p-chart (proportion defective) for pass/fail outcomes.", "c-chart (count of defects) for defect counts per period.", "X-R (subgroup means and range) for aggregated metrics."],
      correctIndex: 3,
      explanation: "P99 latency by 5-minute window is subgroup data. X-R plots the mean and range of each subgroup &mdash; ideal for <strong>percentile metrics</strong> over time windows."
    },
    {
      prompt: "What does a run of nine consecutive points below the center line indicate?",
      options: ["The process is improving and will stay improved automatically.", "A special-cause signal per Western Electric rule 2.", "Normal common-cause variation; no action required.", "Control limits are too tight and need widening."],
      correctIndex: 1,
      explanation: "Nine consecutive points on one side of the center line is a <strong>special-cause signal</strong> (Western Electric rule 2). In a Kaizen context, this confirms sustained gain statistically."
    }
  ]
}, "process-capability": {
  id: "process-capability",
  title: "Process Capability (Cp, Cpk)",
  group: "Measurement & Control",
  duration: "30 min",
  executiveSummary: "Process capability quantifies how well a stable process meets its specification limits. Cp is potential capability; Cpk is actual capability accounting for centering. Convention: Cpk ≥ 1.33 = capable; ≥ 1.67 = highly capable; ≥ 2.0 = Six Sigma. A low Cpk on an in-spec process is an early warning: compliance is luck, not capability.",
  whatYouGain: ["Distinguish between 'hitting the SLO last quarter' and 'capable of hitting the SLO'", "Use Cpk to predict whether the SLO will hold as load grows or variation increases", "Know how much headroom a service has: Is it Cpk 0.33 (at risk) or 1.67 (comfortable)?", "Identify whether to reduce variation (σ) or center the mean (μ) to improve capability", "Translate capability numbers into business-language risk statements for leadership"],
  explanation: "<p><strong>Cp</strong> = (USL − LSL) / 6σ measures potential capability assuming the process is centered. <strong>Cpk</strong> = min((USL − μ)/3σ, (μ − LSL)/3σ) measures actual capability accounting for whether the mean sits off-center. Convention: Cpk &lt; 1.0 = not capable (defects expected at normal operation), 1.0–1.33 = marginally capable, 1.33–1.67 = capable (standard target), 1.67–2.0 = highly capable, ≥ 2.0 = Six Sigma (~3.4 defects per million opportunities with shift).</p><p>Prerequisites: (1) Stable process—confirm via control chart that special causes are removed. (2) Normal distribution—or transform via Box-Cox; heavy-tailed metrics like latency often need percentile-based capability or non-parametric methods. (3) Defined CTQ with upper/lower spec limits. Real example: customer claimed 'we hit our P99 latency SLO.' Capability analysis: μ = 178ms, σ = 22ms, USL = 200ms, Cpk = 0.33. Not capable—recent compliance is luck. Three months later, a routine load increase pushed P99 past 200ms; the Cpk had predicted it.</p><p>Improvement levers: Low Cpk because Cp is low? Reduce variation (process improvement). Low Cpk because mean is off-center? Center the process away from the nearer spec. Both levers deliver real capability gain.</p>",
  csamExample: "<p>A CSAM reviews quarterly platform health with a customer's CTO. One metric: P99 API response time. Current state: P99 = 178ms, spec limit (SLO) = 200ms. The CSAM presents Cpk = 0.33: 'You're meeting the SLO now, but you're not actually capable. Your 22ms standard deviation is too large relative to your 22ms buffer. As customer load grows, you'll breach.' The CTO is surprised—the team thought they were healthy. The CSA's improvement plan (optimize hot queries, add caching) targets reducing σ to 10ms and re-centering to 150ms, projected Cpk = 1.67. The CSAM ties this to business: 'With higher capability, your platform sustains performance as you scale consumption with that enterprise customer.'</p>",
  csaExample: "<p>A CSA computes Cpk on an Azure Function App's execution time. Stable baseline (control chart verified): μ = 850ms, σ = 120ms, spec limit (SLO) = 1000ms. Cpk = (1000 − 850) / (3 × 120) = 0.42. Not capable. Analysis: a single database query on the hot path is consuming 700ms on average, with high variance. Countermeasure: add query result caching. Post-improvement: μ = 320ms, σ = 40ms, Cpk = 2.27 (highly capable). The CSA locks a new control chart at the improved baseline and sets up an alert if Cpk trends below 1.67, as an early warning before SLO breach.</p>",
  recap: ["Cpk measures actual capability; Cp measures potential. Both require a stable process", "Cpk < 1.0 = not capable. Cpk ≥ 1.33 is the standard target; ≥ 2.0 is Six Sigma", "Low Cpk because σ is high? Reduce variation. Because μ is off-center? Center the mean", "Capability is a leading indicator: Cpk 0.33 with in-spec performance predicts future breach", "Compute Cpk in DMAIC Control, quarterly health reviews, and SLO design discussions"],
  questions: [
    {
      prompt: "What does Cpk measure that Cp does not?",
      options: ["Long-term variation rather than short-term variation.", "Process centering &mdash; the actual capability accounting for whether the mean sits midway between spec limits.", "The total number of opportunities per million.", "Customer satisfaction scores against the spec."],
      correctIndex: 1,
      explanation: "Cp = (USL &minus; LSL) / 6&sigma; assumes the process is centered. <strong>Cpk</strong> = min((USL &minus; &mu;)/3&sigma;, (&mu; &minus; LSL)/3&sigma;) penalizes off-center processes, so it reflects real-world capability."
    },
    {
      prompt: "A customer says &ldquo;we hit our P99 latency SLO last quarter.&rdquo; Capability analysis shows Cpk = 0.33. What does that tell you?",
      options: ["The SLO is being achieved with plenty of headroom.", "The process is not capable &mdash; recent compliance is luck and breaches are predictable as load grows.", "Cpk doesn&rsquo;t apply to latency metrics.", "The customer should tighten the spec immediately."],
      correctIndex: 1,
      explanation: "Cpk &lt; 1.0 means the process is <strong>not capable</strong>. Hitting the spec is luck, not capability. The CSA&rsquo;s job is to translate the number into &ldquo;trouble ahead&rdquo; before the next load increase causes a breach."
    },
    {
      prompt: "What rule-of-thumb Cpk value is the standard target for &ldquo;capable&rdquo;?",
      options: ["Cpk &ge; 0.5", "Cpk &ge; 1.0", "Cpk &ge; 1.33", "Cpk &ge; 3.0"],
      correctIndex: 2,
      explanation: "Convention is <strong>Cpk &ge; 1.33 = capable</strong>; &ge; 1.67 = highly capable; &ge; 2.0 is the Six Sigma target (~3.4 defects per million opportunities with shift)."
    },
    {
      prompt: "What is the key prerequisite for a Cpk calculation to be meaningful?",
      options: ["The team must have at least one Black Belt member.", "The process must be stable &mdash; an in-control control chart is required first.", "The dataset must have at least 1,000 observations.", "The customer must have explicitly requested a Cpk number."],
      correctIndex: 1,
      explanation: "Capability of an <strong>out-of-control process is meaningless</strong>. You need a stable process (via control charts) and defined CTQ spec limits before Cpk has any signal."
    },
    {
      prompt: "Cpk is low because the variation is wide and the mean sits near a spec limit. Which two improvement levers does this point to?",
      options: ["Hire more engineers and run more tests.", "Reduce variation (&sigma;) and center the mean (&mu;).", "Loosen the spec and accept the variation.", "Increase sample size and recalculate."],
      correctIndex: 1,
      explanation: "Cpk gains come from two levers: <strong>reduce variation</strong> (process improvement, narrow &sigma;) and <strong>center the mean</strong> (move &mu; away from the nearer spec limit). Both deliver real capability gain."
    }
  ]
},
"value": {
  id: "value",
  title: "Value",
  group: "Value & Quality Definition",
  duration: "30 min",
  executiveSummary: "Value is anything the customer is willing to fund—stated in their terms, not the CSA's. Every activity in an engagement is either value-add (VA), necessary non-value-add (NNVA), or pure waste (NVA). Defining value precisely is the move that separates engagements that justify themselves at renewal from those that produce motion without outcome.",
  whatYouGain: [
    "Renewal conversations grounded in measured customer outcomes instead of activity logs",
    "A framework to say 'no' to low-value requests without damaging relationships",
    "The ability to justify CSA hours to leadership through outcomes, not effort",
    "A structured way to find and eliminate the 40% of calendar time that is pure waste",
    "Engagement clarity: cost optimizations justified by real customer business impact"
  ],
  explanation: "<p>A CSA's calendar fills itself with low-value work—recurring status meetings, exploratory pilots that never ship, decks rewritten for new stakeholders. Without an explicit value lens, the engagement looks busy and produces nothing the customer will defend at renewal. With a value lens, every activity is challenged against 'what would the customer pay for this if billed?'</p><p>Value has three useful framings: <strong>Customer-defined</strong> (value is what the customer would pay for; if they don't see it or measure it, it isn't value to them); <strong>Outcome-shaped, not output-shaped</strong> ('Delivered the WAF assessment' is an output; 'Reduced unplanned downtime by 40% over 90 days' is an outcome); and <strong>Lean's three buckets</strong>: Value-add (VA) transforms the service in a way the customer would pay for; Non-value-add (NVA) is pure waste to eliminate; Necessary non-value-add (NNVA) is required by compliance or contract but doesn't directly create value—minimize it, don't eliminate it.</p><p>A healthy engagement is mostly VA, deliberately small NNVA, and continuously eliminates NVA. Most engagements that go off the rails are NVA-heavy without anyone noticing. During an audit, a typical CSA discovers 38% VA, 22% NNVA, 40% NVA. That 40% NVA—redundant meetings, duplicate decks, re-explaining the same architecture to new stakeholders—is the recovery opportunity.</p>",
  csamExample: "<p><strong>CSAM scenario:</strong> You're managing a strategic account's renewal. Instead of leading with an activity recap ('we delivered 47 WAF findings, held 12 architecture syncs, produced 8 decks'), you lead with value in the customer's language: 'We reduced Sev B incidents from 312/month to 84/month (73% improvement), cut AKS spend from $4.20 to $2.85 per 1M transactions, and gained 30 Defender security points—moving the organization from 58 to 88 on the CSA maturity model.' You created a quarterly dashboard that tracks these outcomes, linked each engagement activity to one of these metrics, and classified 40% of the prior quarter's activities as NVA, which you eliminated. The renewal conversation is now anchored in business impact, not effort.</p>",
  csaExample: "<p><strong>CSA scenario:</strong> Your customer asks for a 3-day hackathon on Azure AI Foundry. Sounds fun, but your engagement's value spine is 'checkout API reliability (P95 < 400ms) and AKS cost (≤ $2.85/1M txns).' The AI hackathon doesn't map to either. You reframe it: 'This is high potential value, but it doesn't fit the current engagement's value statement. Let's add it to next quarter's scope if your business sponsor agrees, or run it as a separate FastTrack engagement.' Result: the hackathon happens the next quarter with proper sponsorship and a defined value goal; both engagements stay value-coherent, and you've protected the 90-day sprint focused on the outcomes the customer is paying for now.</p>",
  recap: [
    "Value is customer-defined and outcome-shaped—measured in the customer's currency ($ saved, downtime avoided, time-to-market, secure-score points), never in CSA activity",
    "Classify all activities into VA (value-add), NNVA (necessary non-value-add), and NVA (pure waste)—most engagements are 40% NVA and can reclaim that time immediately",
    "Tag every activity with a measurable value link—if you can't draw the line from the activity to a customer outcome, the activity is suspect",
    "At intake, ask the customer: 'If we're cut in half in 12 months, what would you fight to keep?' That answer is the value spine of the engagement",
    "Report value at EBR/QBR in one slide, customer's terms, no CSA activity metrics—this slide is worth more for renewal than 30 slides of activity"
  ],
  questions: [
    {
      prompt: "Who defines value in a Lean engagement?",
      options: [
        "The CSA, based on technical excellence.",
        "The customer — in their own terms (revenue, downtime, $ saved, time-to-market, engineers unblocked).",
        "Microsoft leadership, based on strategic priorities.",
        "The account team, based on consumption targets."
      ],
      correctIndex: 1,
      explanation: "Value is always stated in <strong>the customer's vocabulary</strong>. If the customer doesn't see it, hear about it, or measure it, it isn't value to them — regardless of how virtuous the activity feels internally."
    },
    {
      prompt: "What are the three Lean buckets for classifying activities?",
      options: [
        "High, Medium, Low priority.",
        "Value-add (VA), Non-value-add (NVA), and Necessary non-value-add (NNVA).",
        "Strategic, Tactical, Operational.",
        "Plan, Do, Check."
      ],
      correctIndex: 1,
      explanation: "VA transforms the product in a way the customer would pay for; <strong>NVA is pure waste</strong> to eliminate; NNVA (e.g., SOC 2 evidence) is required but doesn't directly create value — minimize it."
    },
    {
      prompt: "A CSA classifies the last 90 days as 38% VA, 22% NNVA, 40% NVA. What does this signal?",
      options: [
        "The engagement is healthy because more than a third is VA.",
        "40% NVA is the recovery opportunity — consolidate meetings, kill duplicate decks, automate the rest.",
        "The CSA should request more budget to absorb the overhead.",
        "NNVA must be reduced to zero before anything else."
      ],
      correctIndex: 1,
      explanation: "A healthy engagement is mostly VA with deliberately small NNVA. <strong>40% NVA is the opportunity</strong>; that's where calendar time can be reclaimed and redirected to value-add work the customer will defend at renewal."
    },
    {
      prompt: "How should value be measured?",
      options: [
        "By number of meetings attended and tickets closed.",
        "In customer currency — $ saved, downtime avoided, engineer-hours unblocked, time-to-market shortened, secure-score gained.",
        "By total CSA hours billed to the account.",
        "By the number of slides produced for QBR."
      ],
      correctIndex: 1,
      explanation: "Activity is not value. Measure in <strong>customer currency</strong>: $ impact, minutes of downtime avoided, RU/s recovered, NSAT delta. \"Hours delivered\" and \"decks produced\" are inputs, not outcomes."
    },
    {
      prompt: "A customer's CFO uses a Power BI spend dashboard the CSA built to approve $1.2M in modernization. Is this dashboard VA, NVA, or NNVA?",
      options: [
        "NVA — reporting that doesn't directly change anything.",
        "High-value NNVA — required for the decision but not directly transforming the product, and clearly upstream of funded value.",
        "VA only if it's automated.",
        "Pure overhead that should be eliminated."
      ],
      correctIndex: 1,
      explanation: "Value thinking is <strong>context-sensitive</strong>. A dashboard that unlocks $1.2M of funded modernization isn't waste even though it's not directly transforming a service. The dashboard is the means; the funding is the value."
    }
  ]
},
"voc": {
  id: "voc",
  title: "Voice of the Customer (VOC)",
  group: "Value & Quality Definition",
  duration: "30 min",
  executiveSummary: "Voice of the Customer (VOC) is the structured capture of what customers actually need, expressed in their own words, and the translation of those needs into measurable requirements (CTQs). Without VOC, teams optimize what is convenient to measure instead of what customers value—which wastes engineering effort and derails engagement priorities.",
  whatYouGain: [
    "Alignment on what actually matters to the customer, not what the team assumes matters",
    "Discovery of unspoken expectations (Kano 'basic' requirements) before they become escalations",
    "Identification of delighters—capabilities that disproportionately drive renewal and satisfaction",
    "A framework to refresh customer priorities on a cadence, catching drift before engagement strategy goes stale",
    "Prevention of over-engineering features customers are indifferent to"
  ],
  explanation: "<p>An SRE team improved P50 latency for 8 months. VOC interviews with downstream consumers revealed they only cared about P99 and TTFB. Eight months of real, measurable work was irrelevant to the actual need. <strong>Engineers optimize what's measurable; what's measurable is rarely what customers value. VOC closes that gap.</strong></p><p>VOC has three stages: <strong>Capture</strong> (customer statements in their words, verbatim quotes, observations), <strong>Translate</strong> (group quotes into need statements), and <strong>Specify</strong> (convert needs to measurable specs via CTQs). Capture sources include direct interviews and observations (highest fidelity), support tickets and NPS comments (free, lossy), telemetry (what customers do, not just say), and internal surrogates like the account team (useful but biased).</p><p><strong>Ways to collect VOC.</strong> Choose the instrument by the question you need answered, and triangulate across several&mdash;each carries a different bias. <strong>Structured interviews</strong> and <strong>contextual observation (Gemba)</strong> give the highest fidelity and surface unspoken needs, but cost time and reach few people. <strong>Surveys</strong> scale: NPS gauges loyalty and advocacy, CSAT gauges satisfaction with a specific interaction, and CES (Customer Effort Score) gauges how hard it was to get something done&mdash;pick the one that matches the decision. <strong>Support tickets, escalations, and NPS verbatims</strong> are free and continuous but lossy and skewed toward complainers. <strong>Telemetry and behavioral data</strong> show what customers actually do rather than what they say&mdash;the two often disagree. <strong>Win/loss and churn interviews</strong> expose the needs that drove a buying or leaving decision. <strong>Internal surrogates</strong> (the account team) are convenient but biased&mdash;use them to form hypotheses, then confirm directly with the customer. The discipline: never rely on a single source, and weight direct, empirical signal over second-hand or self-reported claims.</p><p>The Kano model provides useful framing: <strong>Basic / Must-be</strong> requirements are unspoken expectations—customers expect them; absence kills satisfaction; presence is invisible. <strong>Performance / Linear</strong> requirements scale satisfaction with performance (more is better). <strong>Delighter / Excitement</strong> requirements customers don't know to ask for; presence creates loyalty. VOC is the antidote to the most common engagement failure: shipping technical excellence the customer didn't need.</p><p><strong>Factoring VOC into continuous improvement.</strong> VOC is the front door of the CI loop. In <strong>Define</strong> it sets the problem and the CTQs that become your baseline and success criteria; in <strong>Measure</strong> and <strong>Analyze</strong> it keeps you anchored to the metric the customer actually values; in <strong>Check</strong> you validate the improvement against the original VOC rather than an internal proxy; and you <strong>refresh VOC on a cadence</strong> (quarterly is a sensible default) because needs drift and yesterday's CTQ goes stale silently. Run the captured statements through a Pareto of coded themes to decide which need to tackle first, then convert the top theme into a SMART CTQ so the next PDCA cycle improves something the customer will actually feel.</p>",
  csamExample: "<p><strong>CSAM scenario:</strong> During quarterly business reviews, you conduct brief VOC interviews with the customer's business sponsors (CFO, CTO, product VP). You ask open questions like 'Tell me about your biggest frustration with our current engagement' and 'What would you add to next quarter's roadmap if budget weren't a constraint?' The answers are categorized as Basic (e.g., 'logs must persist 90 days'), Performance (e.g., 'checkout latency matters'), or Delighter (e.g., 'one-click reproducible local dev'). The delighter that cost 2 weeks to implement moved renewal rate 18 points on the cohort that used it. You share this finding with the account exec and CSM, anchoring the next contract expansion on these customer-validated priorities rather than internal Microsoft roadmap assumptions.</p>",
  csaExample: "<p><strong>CSA scenario:</strong> During Define phase of a DMAIC project, you run VOC interviews with the customer's SRE and app teams. You observe their incident triage workflow and ask 'What's the metric that would convince you the reliability problem is solved?' You capture verbatim: 'P99 latency under 400ms during peak.' You also uncover that they monitor both Azure Monitor and a legacy on-prem observability stack—VOC reveals the 'logs must persist 90 days' requirement wasn't in the Azure architecture. You translate these captures into CTQs: P99 ≤ 400ms (5-min windows, last 7 days); ≥ 99.95% success rate (rolling 28 days); 90-day log retention with searchability. These CTQs become the project charter success criteria and the SLO definition.</p>",
  recap: [
    "VOC captures what customers need in their own words—not what the team hypothesizes; open questions and direct observation work better than surveys",
    "Translate VOC into three Kano categories: Basic (unspoken expectations that kill satisfaction if absent), Performance (more is better), and Delighter (creates disproportionate loyalty)",
    "Refresh VOC on a cadence (quarterly recommended)—customer needs evolve; undocumented assumptions decay and drive optimization toward what used to matter",
    "Use VOC to anchor CTQ translation—convert need statements into SMART-spec requirements that become CTQs, project charters, and SLOs",
    "VOC prevents over-engineering—teams that optimize what they can measure without VOC ship features customers don't value"
  ],
  questions: [
    {
      prompt: "An SRE team has improved P50 latency for 8 months. VOC interviews reveal downstream consumers only care about P99 and TTFB. What does this teach about VOC?",
      options: [
        "P50 improvements are always wasted effort.",
        "Without VOC, teams optimize what is convenient to measure rather than what customers value — 8 months of real work was irrelevant to the actual need.",
        "P99 work should always start before P50 work.",
        "The SRE team should have refused the project."
      ],
      correctIndex: 1,
      explanation: "Engineers optimize what's measurable; what's measurable is rarely what customers value. <strong>VOC closes that gap</strong> — without it, technical excellence and customer value drift apart."
    },
    {
      prompt: "What are the three stages of a VOC effort?",
      options: [
        "Survey, Analyze, Report.",
        "Capture (verbatim quotes), Translate (to need statements), Specify (to CTQs with metrics).",
        "Plan, Do, Check.",
        "Detect, Triage, Mitigate."
      ],
      correctIndex: 1,
      explanation: "VOC moves from <strong>Capture → Translate → Specify</strong>. Verbatim quotes preserve nuance, need statements group themes, and CTQs convert needs into measurable specs with targets."
    },
    {
      prompt: "In the Kano model, what is a \"Basic / Must-be\" requirement?",
      options: [
        "An enhancement customers actively request and love.",
        "Something customers expect — absence kills satisfaction, but presence is invisible (taken for granted).",
        "An optional delighter the team may add when capacity allows.",
        "A regulatory item only relevant in audits."
      ],
      correctIndex: 1,
      explanation: "<strong>Basic / Must-be</strong> requirements are unspoken expectations — like \"logs must persist 90 days for audit.\" Their absence breaks trust; their presence earns no credit. VOC is the way to surface them."
    },
    {
      prompt: "What is the recommended way to capture VOC?",
      options: [
        "A 4-question multiple-choice survey designed by engineers.",
        "Open questions (\"Tell me about your last bad day with X\"), observe as well as ask, and capture verbatim quotes.",
        "A leadership-only interview sample.",
        "Use only support tickets and skip direct contact."
      ],
      correctIndex: 1,
      explanation: "<strong>Open questions and direct observation</strong> with verbatim capture. A survey designed by engineers captures the team's hypotheses, not the customer's voice — that's the anti-pattern to avoid."
    },
    {
      prompt: "Why should VOC be refreshed on a cadence rather than treated as a one-shot?",
      options: [
        "Because regulations require quarterly customer interviews.",
        "Customer needs evolve and undocumented assumptions decay; stale VOC drives optimization toward what used to matter.",
        "Because metrics teams demand recurring data input.",
        "Because the Kano model resets every quarter."
      ],
      correctIndex: 1,
      explanation: "<strong>Customer needs evolve.</strong> Yesterday's delighter becomes today's basic; today's pain becomes tomorrow's solved problem. Recurring VOC keeps the engagement aimed at what matters now."
    }
  ]
},
"ctq": {
  id: "ctq",
  title: "Critical to Quality (CTQ)",
  group: "Value & Quality Definition",
  duration: "30 min",
  executiveSummary: "Critical to Quality (CTQ) trees translate qualitative customer needs from VOC into specific, measurable, achievable specifications with targets and limits. A CTQ has three elements: a need, a driver (the dimension of that need), and a requirement (target + spec limits). Without CTQs, customer needs stay too vague to engineer against or measure progress toward.",
  whatYouGain: [
    "Conversion of fuzzy customer expectations into testable, measurable contracts",
    "Specification limits (USL, LSL) for process capability analysis and control charts",
    "Alignment between customer language and engineering metrics—no 'fast' or 'reliable,' only P99 ≤ 800ms or ≥ 99.95% uptime",
    "SLO/SLA documentation that mirrors the CTQ tree, reducing duplication and drift",
    "A framework for acceptance testing that reflects what the customer actually values, not engineering convenience"
  ],
  explanation: "<p>A customer's 'API must be fast' expectation tells you nothing. A CTQ converts it: dimension = response time; target = P99 ≤ 800ms; spec limits = 0 to 800ms; measurement window = 5-min windows over the last 7 days. Before CTQ: 18 months of disagreement about what 'fast' means. After: a number, a dashboard, and an SLO.</p><p>A CTQ tree has three levels: <strong>Need</strong> ('Fast checkout'), <strong>Driver</strong> (the dimension of that need: response time, retry rate, etc.), and <strong>Requirement</strong> (a spec: P99 ≤ 800ms over 5-min windows). Good CTQ requirements are Specific (single dimension), Measurable (data already collected or collectable), Achievable (proven possible), Customer-relevant (moving this moves satisfaction), Time-bounded (over what window?), and Bounded (both USL and LSL, or one with a stated justification).</p><p>CTQs come paired with process capability work—they are the specification limits the Cpk calculation uses. CTQs become the success criteria in project charters, the metrics for DMAIC Measure phase, the specs for control charts, and the contract for handoff. The discipline of CTQ writing is the moment fuzzy expectations become testable contracts and the bridge between Define and Measure in DMAIC.</p>",
  csamExample: "<p><strong>CSAM scenario:</strong> The customer's product leadership wants 'better time-to-market.' Instead of launching into a modernization pitch, you ask for a CTQ. The conversation: 'What's the measurable difference you'd like to see?' Answer: 'Lead time under 1 day P90; change failure rate under 5%.' You document the CTQ in the engagement charter: two dimensions (lead time and CFR), two targets, two measurement windows (P90, rolling 90 days), and the data source (CI/CD metrics). This CTQ becomes the success criteria for the quarter—and the story you tell at renewal: 'Lead time dropped from 7 days to 18 hours; CFR fell from 18% to 3%.' The CFO understands what faster shipping means to revenue.</p>",
  csaExample: "<p><strong>CSA scenario:</strong> Your customer's team needs 'reliable Cosmos queries.' You build a CTQ tree: Need = reliable queries; Driver = P99 RU consumption per query; Requirement = ≤ 12 RU P99, measured from query-level telemetry over rolling 24 hours. During Measure phase, you baseline current state (P99 is 34 RU), set the control chart limits (UCL = 12, LCL = 0), and use it to evaluate the partition-key redesign: success means P99 ≤ 12 RU in steady state. The CTQ is also the acceptance test for the code change—no deploy without the baseline shift to the requirement.</p>",
  recap: [
    "CTQ is the bridge between Define (VOC) and Measure (DMAIC)—it converts customer needs into measurable specs with targets and limits",
    "Three levels: Need (what customer wants) → Driver (dimension) → Requirement (target + USL/LSL + measurement window)",
    "Write CTQs with the customer and engineering team together—engineer-written specs often set targets tighter than true customer need, wasting capacity",
    "CTQs become SLOs, acceptance criteria, control chart limits, and project success metrics—use the same spec across all documents to reduce drift",
    "Validate CTQ translations with the customer—read the spec back; confirm it captures the original need; iterate if the translation lost meaning"
  ],
  questions: [
    {
      prompt: "What are the three levels of a CTQ tree?",
      options: [
        "Need, Driver, and Requirement.",
        "Define, Measure, and Control.",
        "Specification, Baseline, and Target.",
        "Customer, Engineering, and Operations."
      ],
      correctIndex: 0,
      explanation: "A CTQ tree has three levels: <strong>Need</strong> (what the customer wants), <strong>Driver</strong> (dimensions of that need), and <strong>Requirement</strong> (target + spec limits). This structure turns customer expectations into testable contracts."
    },
    {
      prompt: "In which DMAIC phase are CTQs primarily developed?",
      options: [
        "Measure phase.",
        "Define phase.",
        "Analyze phase.",
        "Control phase."
      ],
      correctIndex: 1,
      explanation: "CTQs are developed in the <strong>Define phase</strong>, translating Voice of Customer and problem statements into measurable specifications that guide the rest of the project."
    },
    {
      prompt: "What does SMART mean when writing a CTQ requirement?",
      options: [
        "Stakeholder, Measurement, Achievable, Relevant, Timely.",
        "Specific, Measurable, Achievable, Relevant, Time-bounded.",
        "Service, Metrics, Acceptable, Result, Targeted.",
        "Stakeholder, Manager-approved, Auditable, Realistic, Tracked."
      ],
      correctIndex: 1,
      explanation: "<strong>SMART</strong> CTQs are Specific, Measurable, Achievable, Relevant, and Time-bounded. Each property makes the requirement actionable."
    },
    {
      prompt: "What anti-pattern should you avoid when setting CTQs?",
      options: [
        "Setting multiple drivers per need.",
        "Including both USL and LSL in requirements.",
        "Writing engineer-specified limits tighter than the true customer need.",
        "Changing CTQs during the Measure phase."
      ],
      correctIndex: 2,
      explanation: "The engineer-written CTQ above customer need is the key anti-pattern. For example, setting P99 ≤ 50 ms when the customer would accept 500 ms <strong>wastes capacity</strong> and misaligns the project from reality."
    },
    {
      prompt: "How do CTQs relate to process capability analysis?",
      options: [
        "CTQs are inputs that define which processes to analyze.",
        "CTQs become the specification limits used in Cpk calculations.",
        "CTQs are only used after capability analysis is complete.",
        "CTQs replace the need for capability analysis entirely."
      ],
      correctIndex: 1,
      explanation: "CTQs come paired with process capability work — they are the <strong>specification limits</strong> (USL and LSL) the Cp/Cpk calculation uses to evaluate process fit."
    }
  ]
},
"copq": {
  id: "copq",
  title: "Cost of Poor Quality (COPQ)",
  group: "Value & Quality Definition",
  duration: "30 min",
  executiveSummary: "Cost of Poor Quality (COPQ) quantifies what defects, rework, escapes, and missed prevention cost the business—split into four buckets: internal failure, external failure, appraisal, and prevention. Empirically, COPQ in unmeasured engineering orgs runs 15–40% of total spend. For CSAs, calculating COPQ is the single most effective way to fund CI work—once leadership sees the hidden tax of low quality, prevention investment justifies itself.",
  whatYouGain: [
    "Quantification of the current cost of not improving—usually much larger than the cost of improving",
    "A business case that flips the framing from 'CI is a cost' to 'poor quality is a larger cost'",
    "Justification for prevention spend (training, automation, design reviews, test suites) that otherwise looks like overhead",
    "Visibility into rework hidden in roadmaps as 'v2,' 'remediation,' or 'stabilization' cycles",
    "Alignment between finance and engineering on the same numbers—making investment decisions data-driven"
  ],
  explanation: "<p>CI programs die when leadership sees them as costs, not investments. COPQ flips the framing. <strong>Empirically, COPQ in unmeasured engineering orgs runs 15–40% of total spend—the unfunded 'tax' of low quality.</strong> A customer's CFO blocked further 'DevOps investment.' The CSA computed COPQ from incident hours, escaped-defect rework, and customer credits over 12 months: $4.7M, or 22% of platform spend. The CFO funded a $600K prevention program the next quarter. Year-end COPQ fell to $1.9M. Net: $2.2M.</p><p>COPQ has four traditional buckets: <strong>Internal failure</strong> (rework, scrap, failed builds, rolled-back deploys); <strong>External failure</strong> (customer-found defects, incidents, SLA credits, churn—the most expensive bucket per defect); <strong>Appraisal</strong> (QA inspection, manual testing, audits); <strong>Prevention</strong> (training, design reviews, automation—the cheapest bucket per dollar of COPQ reduced). The progression of a maturing org: external → internal → appraisal → prevention.</p><p>To estimate COPQ: pick a 12-month window, quantify each bucket in engineering hours and $ impact, sum and express as a % of total spend, then tie reduction targets to specific DMAIC or Kaizen projects. A defensible range beats false precision—report COPQ ±20% and sensitivity-check assumptions.</p>",
  csamExample: "<p><strong>CSAM scenario:</strong> During a renewal conversation, the customer's CFO asks 'Why should we renew with you instead of hiring internal staff?' Instead of a pitch about Azure expertise, you lead with COPQ. You show: before engagement, COPQ was 28% of platform spend (incidents, firefighting, rework); after 6 months of your Kaizen and reliability work, COPQ is 11% of spend. Net savings: $2.1M annualized, achieved by preventing the incidents that used to burn 40% of SRE time. You funded a $300K prevention program (automation, runbooks, design reviews) and recovered $2.1M in firefighting costs. The CFO approves renewal. The conversation wasn't about effort; it was about the size of the hidden tax you eliminated.</p>",
  csaExample: "<p><strong>CSA scenario:</strong> Your customer has 87 rolled-back Cosmos deployments per year, each costing 6 engineer-hours to investigate and remediate. You calculate the COPQ: 87 × 6 hr × $150/hr (loaded rate) = $78K/mo in internal failure cost. You add the lost feature throughput (developers context-switching to firefight) and customer perception damage. Total internal failure: $220K/yr. You propose a pre-merge gate that runs the Cosmos-specific integration tests before allowing promotion—investment cost: $40K for test harness + automation. Year-1 result: rollbacks drop 78% (19/yr), internal failure COPQ drops to $50K. Payback: 2 months. You've quantified the business case in terms the customer's engineering leadership understands: COPQ reduction.</p>",
  recap: [
    "COPQ captures four buckets: Internal failure (rework, failed builds, rollbacks), External failure (incidents, SLA credits, churn), Appraisal (QA, testing, audits), and Prevention (automation, training, design reviews)",
    "External failure is the most expensive per defect; Prevention is the cheapest lever per dollar of COPQ reduced—the maturing org's progression moves left to right",
    "Use COPQ to fund CI and Kaizen programs—once leadership sees COPQ at 22-40% of spend, a $300K prevention program becomes an obvious investment",
    "Express COPQ as a percentage of total spend for portability and comparison across teams; a defensible range beats false precision",
    "Tie COPQ reduction targets to specific projects—each DMAIC or Kaizen effort should claim a piece of the COPQ reduction to stay focused on business impact"
  ],
  questions: [
    {
      prompt: "What are the four traditional buckets that make up COPQ?",
      options: [
        "Labor, Materials, Overhead, Profit.",
        "Internal failure, External failure, Appraisal, Prevention.",
        "Design, Build, Test, Deploy.",
        "Rework, Failures, Audits, Automation."
      ],
      correctIndex: 1,
      explanation: "COPQ captures <strong>all costs</strong> of poor quality: internal rework, customer-found defects, inspection/testing, and prevention work to avoid defects."
    },
    {
      prompt: "Which COPQ bucket is typically the most expensive per defect?",
      options: [
        "Prevention (training, automation, design reviews).",
        "Appraisal (inspection, manual testing, audits).",
        "Internal failure (rework, rolled-back deploys).",
        "External failure (incidents, SLA credits, churn)."
      ],
      correctIndex: 3,
      explanation: "Customer-found defects — incident response, SLA credits, and churn — are the most expensive. <strong>Prevention</strong> is the cheapest lever per dollar of COPQ reduced."
    },
    {
      prompt: "What is the most effective role for COPQ when proposing a new CI or Kaizen program?",
      options: [
        "Show leadership how much the program will cost.",
        "Document the current quality baseline for auditing.",
        "Justify the program as an investment that reduces larger hidden costs.",
        "Replace traditional budgeting processes."
      ],
      correctIndex: 2,
      explanation: "COPQ flips the framing from \"CI is a cost\" to \"poor quality is a larger cost.\" Showing COPQ at 15–40% of unmeasured spend justifies <strong>prevention investment</strong>."
    },
    {
      prompt: "Which of these items should NOT be included in a COPQ calculation?",
      options: [
        "Rolled-back deploys and emergency rework.",
        "Incident hours and firefighting labor.",
        "Estimated revenue churn from quality-related customer departures.",
        "Normal engineering salaries for feature development work."
      ],
      correctIndex: 3,
      explanation: "COPQ includes defect-related rework and escalations. It does NOT include the baseline cost of <strong>value-adding work</strong> — only waste and failure costs."
    },
    {
      prompt: "Why is expressing COPQ as a percentage of total spend more useful than reporting an absolute dollar amount?",
      options: [
        "Percentages are simpler to calculate without a finance partner.",
        "It makes COPQ portable and comparable across teams of different sizes.",
        "It reduces the absolute number reported to leadership.",
        "It complies with accounting standards and audit requirements."
      ],
      correctIndex: 1,
      explanation: "A $2M COPQ is hard to contextualize without total spend. Expressing it as a percentage (22% vs. 5%) makes the <strong>true business impact</strong> visible and comparable."
    }
  ]
},
"waste": {
  id: "waste",
  title: "8 Types of Waste",
  group: "Value & Quality Definition",
  duration: "30 min",
  executiveSummary: "The 8 Wastes (DOWNTIME—Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing) are Lean's 360° checklist for spotting non-value-add activity in any system. For CSAs, the 8 Wastes translate cleanly to the Azure estate: over-provisioned RUs, idle VMs, stale environments, redundant observability stacks, unnecessary data egress, engineers stuck on toil, slow incident response loops, and redundant approval gates. Use the 8 Wastes as a structured walk-through during cost optimizations, reliability reviews, and modernization assessments—every category surfaces a different class of opportunity.",
  whatYouGain: [
    "A structured 360° framework for cost optimization that goes beyond VM rightsizing into Inventory, Extra-processing, and Transportation",
    "Identification of process waste (Waiting, Motion) that explains why MTTR is slow and incidents escalate",
    "Discovery of Non-utilized talent—the most expensive waste—and the opportunity to reallocate engineers from toil to roadmap work",
    "A diagnostic lens for modernization business cases (current-state vs. target-state waste) that resonates with financial leaders",
    "A cadence-based walk (quarterly) that catches waste regrowth before it compounds into larger problems"
  ],
  explanation: "<p>Cost optimization engagements often look at only one waste—<strong>Overproduction</strong> (rightsizing)—and miss the larger picture. A CSA was asked to find $200K/yr in savings. Rightsizing found $90K. A structured 8 Wastes walk found another $260K: 14 idle subscriptions (Inventory), 7 redundant observability stacks (Extra-processing), $40K/mo of cross-region data egress (Transportation), and 3 FTEs spending 60% of their time on toil (Non-utilized talent). The waste lens unlocked 3× the original ask.</p><p>The DOWNTIME mnemonic: <strong>D—Defects</strong> (incidents, failed deployments, rollbacks); <strong>O—Overproduction</strong> (over-provisioned RUs, idle VMs, oversized App Service plans); <strong>W—Waiting</strong> (pipelines waiting on manual approval, engineers waiting on access); <strong>N—Non-utilized talent</strong> (senior engineers running manual tasks, data scientists blocked by toil); <strong>T—Transportation</strong> (cross-region data egress, redundant data copies); <strong>I—Inventory</strong> (stale environments, orphaned disks, unused subscriptions); <strong>M—Motion</strong> (context-switching between 6 portals for incident triage); <strong>E—Extra-processing</strong> (triple-approval pipelines, duplicate observability stacks).</p><p>Use the 8 Wastes as a structured walk: pick scope, walk each waste in order with evidence sources (Azure Resource Graph, Cost Management, App Insights), quantify each finding, Pareto-rank the findings, tie each to a hypothesis, run PDCA on the top 3–5, and re-walk quarterly.</p>",
  csamExample: "<p><strong>CSAM scenario:</strong> During QBR, you present a cost optimization business case using the 8 Wastes as section headers. Each section has 2–3 findings with $ or hour impact: Overproduction ($8.4K/mo under-utilized Cosmos), Waiting (18 eng-days blocked on approval gates), Inventory ($6.2K/mo stale subscriptions), Extra-processing ($4.8K/mo duplicate observability), Transportation ($11K/mo cross-region egress), Motion (MTTR +40% due to 5-portal incident triage). The customer's CFO said: 'This is the first cost analysis I've seen that feels complete instead of like a list of VM sizes.' The 8 Wastes framework did the convincing. You prioritize top 3 wastes for next quarter's execution—the rest go on a backlog that the customer owns.</p>",
  csaExample: "<p><strong>CSA scenario:</strong> During a reliability postmortem on a Sev A incident, you extend the technical root cause (health probe too aggressive) with the surrounding process waste. Defects: 22% of AKS deployments rolled back due to probe misconfigs. Waiting: pipelines average 4h waiting on manual security approval; incident response averaged 3h handoff delays between on-call shifts. Motion: triage required jumping between 5 portals + 3 dashboards; MTTR was 6× target. You use the 8 Wastes to surface not just the immediate technical fix (probe configuration) but also the Waiting and Motion categories that turned a minor defect into a major outage. The incident becomes the trigger for process improvements: automation of security approval for dev/test, a single incident triage workbook, and runbook templates—all Waiting and Motion reduction.</p>",
  recap: [
    "The 8 Wastes (DOWNTIME) are a 360° checklist—most engagements look at 1–2 wastes and miss the rest; a structured walk through all 8 typically surfaces 3× the opportunity",
    "Quantify every finding in $ or hours before Pareto-ranking; 5 well-quantified wastes drive action; 80 unranked wastes paralyze the engagement",
    "Defects and Waiting explain reliability problems; Overproduction and Inventory drive cost; Motion and Extra-processing explain slow incident response; Non-utilized talent is the highest leverage for skilling conversations",
    "Use the 8 Wastes to structure modernization business cases (current-state vs. target-state waste)—CFOs understand waste reduction better than 'cloud-native' buzzwords",
    "Re-walk quarterly—waste regrows; a cadence catches new instances before they compound; the same walk is also your PDCA validation that prior eliminations stuck"
  ],
  questions: [
    {
      prompt: "What does the DOWNTIME mnemonic stand for?",
      options: [
        "Defects, Operations, Workload, Networking, Time, Inventory, Money, Energy.",
        "Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing.",
        "Delivery, Outcomes, Workflow, Notifications, Tickets, Issues, Metrics, Errors.",
        "Detection, Observation, Wait-states, Notes, Triage, Incidents, Mitigation, Escalation."
      ],
      correctIndex: 1,
      explanation: "<strong>D</strong>efects, <strong>O</strong>verproduction, <strong>W</strong>aiting, <strong>N</strong>on-utilized talent, <strong>T</strong>ransportation, <strong>I</strong>nventory, <strong>M</strong>otion, <strong>E</strong>xtra-processing. Each category surfaces a different class of opportunity."
    },
    {
      prompt: "Over-provisioned Cosmos RU/s, idle VMs, and oversized App Service plans are examples of which waste?",
      options: [
        "Defects.",
        "Overproduction — producing more capacity than is needed.",
        "Motion.",
        "Inventory."
      ],
      correctIndex: 1,
      explanation: "<strong>Overproduction</strong> is producing more than demand calls for. Rightsizing engagements typically target this waste — but it's only 1 of 8, which is why pure rightsizing misses larger opportunities."
    },
    {
      prompt: "A CSA was asked to find $200K/yr in savings. Rightsizing found $90K. A structured 8 Wastes walk found another $260K (idle subs, redundant observability, egress, toil). What's the lesson?",
      options: [
        "Rightsizing always misses most of the savings.",
        "Looking at only one waste (Overproduction) misses Inventory, Extra-processing, Transportation, and Non-utilized talent — the framework unlocks 3× the ask.",
        "The CSA should have done a WAF assessment instead.",
        "The customer should have requested $500K from the start."
      ],
      correctIndex: 1,
      explanation: "Most engagements look at <strong>one or two wastes</strong> and miss the rest. The 8-Waste lens provides a 360° structured walk — every category typically surfaces a different opportunity."
    },
    {
      prompt: "Engineers swiveling between Jira, GitHub, Teams, and Azure DevOps to track one work item is an example of which waste?",
      options: [
        "Transportation (movement of things).",
        "Motion (unnecessary movement of people / context-switching).",
        "Defects.",
        "Inventory."
      ],
      correctIndex: 1,
      explanation: "<strong>Motion</strong> is unnecessary movement of <em>people</em>: context-switching between portals or tools. Transportation, by contrast, is unnecessary movement of <em>things</em> (data egress, log shipping)."
    },
    {
      prompt: "What is the anti-pattern to avoid when using the 8 Wastes?",
      options: [
        "Tying each finding to a specific hypothesis.",
        "Quantifying each finding in $ or hours.",
        "Treating waste-hunting as \"find as many as possible\" — a list of 80 wastes is not actionable.",
        "Pareto-ranking findings before acting."
      ],
      correctIndex: 2,
      explanation: "A list of 80 wastes paralyzes action. <strong>5 well-quantified, well-Pareto'd wastes drive change.</strong> The 8 Wastes is a structured walk, not a brainstorm-everything exercise."
    }
  ]
},
"sipoc": {
  id: "sipoc",
  title: "SIPOC",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "SIPOC—Suppliers, Inputs, Process, Outputs, Customers—is a one-page, high-level process map that forces the team to agree on scope and boundaries before drilling into detail. Most stalled improvement efforts fail not from bad analysis but from ambiguous scope. SIPOC nails scope down in a single page everyone can read and sign off on.",
  whatYouGain: [
    "Align sponsors, engineers, and customers on what 'this process' actually means",
    "Surface hidden suppliers and downstream customers ignored by the original problem statement",
    "Anchor the Define phase of DMAIC and pre-work for Kaizen events",
    "Provide the input list for a value stream map and output list for a VOC exercise"
  ],
  explanation: "<p>SIPOC is a five-column diagram: Suppliers (who provides the inputs), Inputs (what the process consumes), Process (5–7 highest-level steps), Outputs (what the process produces), and Customers (who receives the outputs).</p><p>The Process column is the key constraint: 5–7 steps maximum. More than 7 means too low-level; fewer than 5 usually means hidden steps. Each output must have a customer; each input must have a supplier—no orphans. Suppliers and customers can be internal teams, external customers, or systems.</p><p>To build a SIPOC: define the start trigger and done state first (boundaries), sticky-note the 5–7 process steps, then identify outputs and their customers, then inputs and suppliers. Walk it backwards with the team—read C → O → P → I → S aloud—so gaps and disagreements surface fast. The SIPOC becomes the scope reference for the rest of the project.</p>",
  csamExample: "<p>A CSAM is onboarding a new customer for an Azure consumption engagement. The customer says they want a 'deployment improvement project,' but four teams (dev, security, DBA, network) have different views of what 'deployment' means. In 60 minutes with those four teams on a whiteboard, the CSAM builds a SIPOC. The Process column lists Build → Test → Scan → Approve → Deploy. Suppliers include upstream security-gate teams and DBAs. Customers are QA teams and API consumers. Suddenly the team sees that 3 hidden suppliers exist and half the lead time lives in handoffs to those teams. Scope resets in one hour instead of drifting for six months.</p>",
  csaExample: "<p>A CSA is leading a reliability modernization for a customer running AKS on Azure. The customer's SIPOC for their deployment process reveals that Suppliers include the Azure Container Registry, Key Vault, and a Fleet Management system. The Process includes: Commit → Build → Push to ACR → Deploy to Staging → Health Check → Deploy to Prod. The absence of a Scan or Policy step in the Process column exposes a governance gap—secrets scanning and admission control aren't part of the flow. Adding those steps becomes an IaC change, and the SIPOC becomes the north star for the modernization engagement.</p>",
  recap: [
    "SIPOC forces agreement on scope boundaries before drilling into detail",
    "The Process column must have 5–7 steps maximum; more means too granular",
    "Each output has a customer; each input has a supplier—no orphans allowed",
    "Build SIPOC in 60 minutes with the people who do the work",
    "SIPOC anchors DMAIC Define, Kaizen pre-work, and new engagement scoping"
  ],
  questions: [
    {
      prompt: "What does SIPOC stand for?",
      options: [
        "Sources, Items, Procedure, Owners, Customers.",
        "Suppliers, Inputs, Process, Outputs, Customers.",
        "Sponsors, Issues, Plan, Outcomes, Controls.",
        "Stakeholders, Inputs, Phases, Outputs, Constraints."
      ],
      correctIndex: 1,
      explanation: "SIPOC — <strong>Suppliers, Inputs, Process, Outputs, Customers</strong> — reads left-to-right and is the first artifact built when a team can't yet agree on what they're improving."
    },
    {
      prompt: "How many steps should the Process column contain?",
      options: [
        "1 to 3, to keep things simple.",
        "5 to 7 maximum — more means too low-level, fewer usually means hidden steps.",
        "Exactly 10, one per phase.",
        "As many as needed to capture every detail."
      ],
      correctIndex: 1,
      explanation: "The <strong>5–7 step rule</strong> keeps SIPOC at the right altitude. More steps belong in a value stream map or detailed process map; fewer usually hide important handoffs."
    },
    {
      prompt: "What is the primary failure mode that SIPOC prevents?",
      options: [
        "Slow approvals from leadership.",
        "Stalled improvement efforts caused by ambiguous scope.",
        "Insufficient automation coverage.",
        "Engineering burnout from too many meetings."
      ],
      correctIndex: 1,
      explanation: "Most stalled improvement efforts fail not from bad analysis but from <strong>ambiguous scope</strong>. SIPOC pins scope down in a single page everyone can read and sign off on."
    },
    {
      prompt: "When facilitating a SIPOC, what should you do BEFORE drawing the process steps?",
      options: [
        "List every possible supplier and customer.",
        "Define the start trigger and the done state — the boundaries — first.",
        "Have leadership pre-approve the steps.",
        "Pick a software tool to capture the diagram."
      ],
      correctIndex: 1,
      explanation: "<strong>Boundaries first.</strong> Write the trigger event and success criterion above the board before sticky-noting steps. Without explicit boundaries, the process column drifts and the SIPOC loses focus."
    },
    {
      prompt: "When is SIPOC the wrong tool to use?",
      options: [
        "DMAIC Define phase.",
        "Pre-work for a Kaizen event.",
        "A detailed VSM already exists and the team agrees on scope — SIPOC would be duplicative.",
        "Resolving scope disputes between teams."
      ],
      correctIndex: 2,
      explanation: "Don't use SIPOC when a detailed VSM already exists and scope is agreed, when the work is genuinely one-step, or when it becomes a <strong>substitute for actually walking the process</strong> (Gemba)."
    }
  ]
}, "value-stream": {
  id: "value-stream",
  title: "Value Stream Mapping",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "A value stream maps end-to-end work flow from customer request to delivered value, making process time, lead time, handoffs, waits, and rework visible as data. When a customer's symptoms—slow releases, high incident MTTR, missed SLAs, runaway cost—are caused by flow problems across teams, VSM is the diagnostic that reveals where time is spent versus where it is waited.",
  whatYouGain: [
    "See where time is actually spent versus where it is waited in handoffs and queues",
    "Calculate the value-add ratio (active work / total time), usually a shocking single-digit percentage",
    "Identify silent rework chains through percent-complete-and-accurate metrics",
    "Design future-state flows that merge steps, automate gates, and reduce WIP",
    "Sequence improvement work in waves that compound over quarters"
  ],
  explanation: "<p>A value stream captures three layers: process flow (the sequence of steps), information flow (how each step learns what to do via tickets, approvals, chats), and timeline metrics. The map shows process time (PT, active work) versus lead time (LT, wall-clock including waits). The ratio PT/LT is the value-add ratio—the fraction of end-to-end time spent on actual value-adding work.</p><p>Key metrics include Lead Time (wall-clock from request to delivery), Process Time (sum of active-work durations), Value-add Ratio (PT/LT, often horrifyingly low), % Complete &amp; Accurate (%C/A, fraction passing each handoff without rework), and Rolled %C/A (the product across all handoffs, which surfaces silent rework). High WIP (work in progress) at any stage lengthens lead time per Little's Law.</p><p>The workflow: define the value stream precisely, walk the actual process with the people doing the work (not the documentation), capture data at every step, draw the current state on a single page, identify waste using the 8 Wastes framework, calculate the value-add ratio, design the future state by reshaping the flow rather than optimizing individual steps, quantify the gap, and plan improvement in 2–4 PDCA waves.</p>",
  csamExample: "<p>A CSAM's customer has been in 'DevOps transformation' for 8 months with no measurable improvement in deployment frequency. The CSAM runs a 2-day VSM workshop and discovers that of 6 hours end-to-end deploy time, 5 hours are Waiting on two manual approval gates and a queued security scan. The customer had optimized the 1 hour of active build work. The VSM made the gap visible: remove one approval, automate the security gate, pool scan runners. End-to-end drops to 75 minutes. The VSM anchored the engagement on the right work.</p>",
  csaExample: "<p>A CSA is assessing a customer's cloud-native release pipeline for AKS. The VSM reveals that code undergoes 18% rework in the integration-test stage due to environment-configuration flakiness. Rolled %C/A across four handoffs is 18% × 73% × 91% × 85% = 10%—meaning 90% of releases experience at least one bounce-back. The CSA identifies that the %C/A gap is in test-environment stability and Azure resource quotas causing CrashLoopBackOff in canaries. The remediation targets IaC consistency and quota reservations, not tool upgrades.</p>",
  recap: [
    "VSM exposes where time is waited, not just where it is spent",
    "Value-add ratio (PT/LT) is the headline number leadership remembers",
    "% Complete &amp; Accurate reveals silent rework chains at handoffs",
    "Use VSM for multi-team flows; use Pareto + Ishikawa for single-system issues",
    "VSM is a working artifact; re-map after each PDCA cycle to validate progress"
  ],
  questions: [
    {
      prompt: "A customer is 8 months into a &ldquo;DevOps transformation&rdquo; with no measurable improvement in deployment frequency. End-to-end deploy time is 6 hours. What is VSM's likely contribution?",
      options: [
        "Recommend a new deployment tool to replace the current one.",
        "Make visible that most of the 6 hours is spent Waiting on approvals and queued scans — not in active work.",
        "Suggest hiring more engineers to parallelize the work.",
        "Refactor the application architecture into microservices."
      ],
      correctIndex: 1,
      explanation: "VSM exposes <strong>where time is waited vs. spent</strong>. Customers often optimize the active work (e.g., the 1 hour of build) while ignoring the 5 hours of waiting that dominate end-to-end lead time."
    },
    {
      prompt: "What is the value-add ratio?",
      options: [
        "The dollars saved per CSA hour.",
        "Process Time / Lead Time — the fraction of end-to-end time spent on active value-adding work.",
        "The number of approvers divided by the number of steps.",
        "Cycle time multiplied by WIP."
      ],
      correctIndex: 1,
      explanation: "<strong>Value-add ratio = PT / LT</strong>. On un-improved streams it's often a horrifying single-digit percentage. It's the headline number leadership remembers from a VSM."
    },
    {
      prompt: "What is %C/A (Percent Complete and Accurate) and why does it matter?",
      options: [
        "The percentage of process automation; high values mean less waste.",
        "The fraction of work passing each handoff without rework; multiplied across all handoffs (Rolled %C/A) it surfaces silent rework chains.",
        "Compliance audit pass rate; required for regulated industries only.",
        "The percentage of engineers attending the workshop."
      ],
      correctIndex: 1,
      explanation: "%C/A measures <strong>rework leakage at each handoff</strong>. Rolled %C/A (the product across all handoffs) typically reveals huge hidden rework no single team owns — a classic VSM insight."
    },
    {
      prompt: "When is VSM the WRONG tool to reach for?",
      options: [
        "DevOps assessments with end-to-end symptoms.",
        "A &ldquo;Cosmos is slow&rdquo; engagement where the problem is a hot partition key inside a single system — use Pareto + Ishikawa instead.",
        "Tenant onboarding flow optimization across multiple teams.",
        "Modernization business cases that need a credible &ldquo;why.\""
      ],
      correctIndex: 1,
      explanation: "VSM is for <strong>multi-team / multi-system flows</strong>. For single-system issues, reach for Pareto + Ishikawa. Reflexively pulling out VSM for the wrong problem wastes the tool's credibility."
    },
    {
      prompt: "What is the key anti-pattern to avoid when running a VSM workshop?",
      options: [
        "Drawing the current state before the future state.",
        "Producing a wall-sized poster you never look at again — the VSM must be a working artifact during the engagement.",
        "Including process owners in the walk.",
        "Calculating the value-add ratio."
      ],
      correctIndex: 1,
      explanation: "A VSM is a <strong>working artifact</strong>, not a one-time poster. If it isn't open during the next 6 weeks of engagement to guide PDCA cycles and decisions, the workshop didn't land."
    }
  ]
}, "pareto-chart": {
  id: "pareto-chart",
  title: "Pareto Chart",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "A Pareto chart ranks categories in descending order by impact (incident count, downtime, $, RU/s consumed) and overlays a cumulative percentage line so the 'vital few' causes driving ~80% of impact are immediately visible. It is the prioritization tool CSAs use for EBR/QBR prep, WAF reviews, cost optimization, and escalation triage—weight by business impact, not raw frequency.",
  whatYouGain: [
    "Rank problems by business impact, not by count, so CSA hours land on the vital few",
    "Weight incident impact by downtime minutes or $ at risk, not by frequency",
    "Identify which Azure services, SKUs, or error codes drive the majority of spend or failure",
    "Visualize the 80/20 principle so leadership sees where effort should go",
    "Re-measure after remediation to validate the work and detect emerging problems"
  ],
  explanation: "<p>A Pareto chart is a bar chart sorted in descending order with a cumulative percentage line overlaid. The X-axis shows categories—incident signatures, error codes, resource types, customer workloads, root-cause classifications, Azure regions, or SKUs. The left Y-axis shows measured impact (ticket count, downtime minutes, RU/s consumed, $ spend, dropped messages, failed deployments). The right Y-axis shows cumulative percentage (0–100%). The bars are sorted descending; the cumulative line shows where the vital few categories reach ~80% of total impact.</p><p>The unit of measure matters more than the chart. Counting tickets weights a 5-minute glitch equal to a 6-hour outage. CSAs should weight by business impact: downtime minutes, $ at risk, customer-reported severity. A Pareto by incident count may show 'Flaky liveness probes' as the top bar; a Pareto by downtime minutes may show 'Regional outage' as the real driver—different data, different action priorities.</p><p>Workflow: frame the question precisely, pick the right data source (Kusto, Cost Management, Resource Health), choose the measurement unit and state it on the chart, define categories consistently, aggregate over 30–90 days, sort descending and compute cumulative %, identify the vital few bars left of the 80% line, drive engagement on those bars, and re-measure 30–90 days later to validate and detect new patterns.</p>",
  csamExample: "<p>A CSAM managing a Tier-1 retail account pulls 90 days of ICM tickets for the customer's AKS estate and builds a Pareto. By incident count, 'Flaky liveness probes' dominates. By downtime minutes, 'ImagePullBackOff' and 'CoreDNS resolution failures' account for 71% of SLA impact. The CSAM stops reacting case-by-case and drives a single architecture review covering ACR private endpoint + kubelet managed identity and CoreDNS autoscaler tuning. ICM volume for that customer drops 60% the following quarter.</p>",
  csaExample: "<p>A CSA is helping a customer with Azure-cost optimization. A Pareto of spend by resource type shows AKS clusters consume 35% of monthly spend, followed by App Service plans (22%) and SQL databases (18%). But the 80% line crosses after just two bars. The CSA focuses on cluster rightsizing: converting 12 Standard_D4s_v3 nodes to Automatic SKU with proper pod resource requests reduces monthly cluster spend 35%. The remaining resource types wait for the next cycle. Pareto made the vital few visible; the customer saw 12% monthly cost drop from focused effort.</p>",
  recap: [
    "Weight categories by business impact (downtime, $, severity), not raw count",
    "The vital few bars left of the 80% line receive engagement focus",
    "A Pareto by count differs from Pareto by downtime or spend—pick the right metric",
    "One-time Paretos are posters; re-measure 30–90 days later to validate and detect new patterns",
    "Pareto identifies 'which to fix first'; Ishikawa drills 'why it happened'"
  ],
  questions: [
    {
      prompt: "A customer has 4,200 Azure Advisor alerts. How should you build the Pareto to prioritize CSA effort?",
      options: [
        "Rank alerts in the order they appear in the Advisor list.",
        "Rank alerts by severity level alone, without considering business impact.",
        "Rank by weighted business impact ($ at risk, downtime minutes, secure-score gain) so the vital few high-impact alerts receive focus.",
        "Treat all alerts equally and work through them randomly."
      ],
      correctIndex: 2,
      explanation: "Raw alert count is misleading. A useful Pareto weights by <strong>business impact</strong>, not frequency. One $50K/month rightsizing matters more than 200 minor hardening tweaks."
    },
    {
      prompt: "Two Paretos: one ranked by incident frequency, one by downtime minutes. Why is the downtime-weighted version more useful?",
      options: [
        "Because incident count is always wrong and should never be used.",
        "Because downtime-weighted Pareto reveals which failures actually impact SLA, not which occur most often.",
        "Because downtime is always more important than frequency.",
        "Because the downtime version requires less data."
      ],
      correctIndex: 1,
      explanation: "Frequency and impact are different dimensions. The <strong>downtime-weighted Pareto</strong> shows which failures drive SLA risk. A rare but catastrophic outage may matter more than 200 brief glitches."
    },
    {
      prompt: "A customer hands you 87 WAF findings to analyze. What should you push back on?",
      options: [
        "Accept all 87 findings and treat them equally in the Pareto.",
        "Weight findings by severity &times; blast radius &times; business impact before charting, so the vital few driving 80% of risk are visible.",
        "Refuse to use Pareto because it oversimplifies complex findings.",
        "Recommend analyzing findings one at a time instead of charting."
      ],
      correctIndex: 1,
      explanation: "An 87-finding Pareto is a flat list disguised as prioritization. <strong>Weight each finding</strong> before charting to transform 87 items into a few vital findings that justify focused engagement."
    },
    {
      prompt: "A teammate says a service-cost Pareto must be wrong because monthly costs are still trending up. What should you explain?",
      options: [
        "The Pareto is definitely wrong if costs are trending upward.",
        "A Pareto is a snapshot at a point in time. Use a run chart for trends; use Pareto to identify which services are worth optimizing.",
        "Cost growth proves no Pareto shape exists in the data.",
        "Rebuild the chart weekly to capture the upward trend."
      ],
      correctIndex: 1,
      explanation: "A Pareto is a <strong>snapshot of categorical impact at one time</strong>, not a time-series. For trends, use a run chart. For prioritizing, use Pareto. Different tools, different questions."
    },
    {
      prompt: "After completing a Pareto-guided Kaizen, how do you validate success?",
      options: [
        "Check that all 87 findings have been closed.",
        "Re-run the same Pareto query 30–90 days later to see if the top bars have shrunk and new patterns emerge.",
        "Count how many team members participated in the remediation.",
        "Measure total CSA hours and compare to original estimate."
      ],
      correctIndex: 1,
      explanation: "Validation is <strong>re-measurement</strong>. Re-run the same query post-remediation. If the top bars shrink and the curve flattens earlier, the work is validated. Pareto → engagement → re-measure is the repeatable pattern."
    }
  ]
}, "ishikawa": {
  id: "ishikawa",
  title: "Ishikawa Diagram",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "An Ishikawa (fishbone or cause-and-effect) diagram is a structured brainstorming tool that maps potential causes of a single problem into named categories—typically the 6Ms: Man, Machine, Method, Material, Measurement, Mother Nature. It forces breadth before depth and surfaces causes outside any single domain, preventing premature fixation on the first hypothesis.",
  whatYouGain: [
    "Explore causes systematically across people, service, process, config, observability, and demand",
    "Prevent engineering teams from fixating on 'code is the cause' and missing process or skills gaps",
    "Surface causes across multiple domains that single-discipline analysis misses",
    "Generate hypothesis lists that prioritize with Pareto and drill with 5 Whys",
    "Document the full search space for future similar incidents"
  ],
  explanation: "<p>An Ishikawa is a visual structure: a horizontal spine pointing to the problem statement on the right, bones branching off—one per category of potential cause, sub-bones for specific causes, sub-sub-bones for contributing factors. The 6Ms are the canonical category set: Man (people, skills, on-call rotation), Machine (Azure service, SDK, runtime), Method (process, queries, deployment flow), Material (configuration, data, IaC, dependencies), Measurement (observability, alerting, SLOs), Mother Nature (demand, time-of-day, external events).</p><p>Key property: Ishikawa is divergent (generates candidate causes) but not convergent (does not pick the cause). After filling the diagram, teams must use evidence—logs, traces, metrics, telemetry—to confirm which branches matter. Ishikawa output is a hypothesis list.</p><p>Workflow: state the problem precisely (avoid 'slow'; use 'Checkout API P95 latency exceeds 800ms during 09:00–11:00 UTC weekdays'), choose the category set (6Ms is default), assemble cross-functional participants, brainstorm 4–8 causes per category, drill 1–2 levels deep, cluster and prioritize the 3–5 most consistent with the symptom, define a test for each hypothesis, run the tests, confirm causes, and convert to actions.</p>",
  csamExample: "<p>A CSAM is facilitating a postmortem on a Cosmos DB incident where the customer reports 'Cosmos is throttling us.' Engineering has spent 3 weeks tuning queries. The Ishikawa maps the full search space: Man (single Cosmos SME on PTO), Machine (client SDK without retry-after honoring), Method (hot partition key design), Material (no autoscale), Measurement (no alerting on 429 trend), Mother Nature (5x demand spike from a marketing campaign). The team discovers the actual fix is partition-key redesign + autoscale, plus systemic gaps (SME coverage, SDK configuration, alerting standards). Engineers alone would never have seen most of those causes.</p>",
  csaExample: "<p>A CSA is leading a WAF reliability review for a customer with recurring App Service deployment failures. The Ishikawa branches reveal: Man (on-call team not briefed on new rollout pattern), Machine (App Service plan SKU at capacity during peak), Method (deploys overlap with peak traffic windows), Material (slot warm-up configuration missing), Measurement (no alert on slot warm-up failures), Mother Nature (marketing email shipped before the outage, spiking traffic). The CSA's Ishikawa prevents the team from reflexively raising the SKU and instead drives four small changes across four Ms.</p>",
  recap: [
    "Ishikawa forces systematic exploration across 6 categories before drilling deep",
    "Output is a hypothesis list; evidence confirms which branches matter",
    "Always assemble cross-functional teams to avoid single-discipline fixation",
    "Each candidate requires a test; untestable candidates are unfalsifiable noise",
    "Pair Ishikawa with Pareto (which to prioritize) and 5 Whys (why it happened)"
  ],
  questions: [
    {
      prompt: "Your team is investigating slow Azure SQL queries. Engineering suspects indexes, the DBA suspects schema, the platform lead suspects sizing. What is the primary value of an Ishikawa diagram here?",
      options: [
        "It makes the final decision about which factor is the true root cause.",
        "It forces the team to explore causes across all categories before fixating on one.",
        "It measures which hypothesis generates the fastest query improvement.",
        "It eliminates all low-probability causes immediately."
      ],
      correctIndex: 1,
      explanation: "An Ishikawa is a <strong>divergent</strong> tool that broadens the search space before narrowing it. It prevents fixating on the first hypothesis by forcing systematic exploration across categories. It generates hypotheses; data confirms them later."
    },
    {
      prompt: "When is an Ishikawa most valuable during a postmortem?",
      options: [
        "Only when the incident cause is already known and you need to document it.",
        "When a symptom has multiple plausible causes across different domains and the team risks premature commitment.",
        "As a replacement for writing down the incident timeline and impact.",
        "Only if the team has more than 10 engineers available to attend."
      ],
      correctIndex: 1,
      explanation: "Ishikawa shines when <strong>multiple domains</strong> are involved. It ensures the team walks every category — Man, Machine, Method, Material, Measurement, Mother Nature — rather than defaulting to the loudest voice's pet theory."
    },
    {
      prompt: "A customer says the Ishikawa diagram is the deliverable for their recent Cosmos DB 429 fix. What should you clarify?",
      options: [
        "The diagram is the final output and no further action is needed.",
        "Ishikawa generated hypotheses; the actual deliverables are the tested root cause, the implemented fix, and the measured before/after.",
        "They should repeat the Ishikawa weekly to ensure the cause stays fixed.",
        "The diagram should have included budget approval from leadership."
      ],
      correctIndex: 1,
      explanation: "An Ishikawa is a <strong>hypothesis-generation</strong> tool, not a decision tool. The real deliverables are the tested hypotheses, the implemented changes, and the before/after measurements that validate the fix."
    },
    {
      prompt: "A teammate insists the only category to explore is &ldquo;Method&rdquo; for a deployment-failure investigation. What should you do first?",
      options: [
        "Agree and start drilling into Method with 5 Whys.",
        "Walk the team through every remaining category before drilling deep into any single branch.",
        "Ask engineering to test the Method hypothesis immediately.",
        "Reshape the problem statement because it's too vague."
      ],
      correctIndex: 1,
      explanation: "Ishikawa is a <strong>de-fixation</strong> tool. The team should walk Man, Machine, Method, Material, Measurement, and Mother Nature before drilling depth. Breadth-first exposes causes that single disciplines miss."
    },
    {
      prompt: "Which statement best captures what NOT to do with an Ishikawa?",
      options: [
        "Don't use it with cross-functional teams because they disagree too much.",
        "Don't treat it as a decision tool — use Pareto to choose among findings to fund.",
        "Don't include more than three categories because the diagram becomes too complex.",
        "Don't reference it in postmortems because it takes too much time to explain."
      ],
      correctIndex: 1,
      explanation: "Ishikawa generates <strong>candidates</strong>, not decisions. To choose which finding to fund, use Pareto-by-weighted-impact. Ishikawa answers 'what are the possible causes?'; Pareto answers 'which one to fix first?'"
    }
  ]
}, "5-whys": {
  id: "5-whys",
  title: "5 Whys",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "5 Whys is an iterative root-cause technique: take a confirmed problem and ask 'why?' repeatedly until the chain reaches a systemic cause (a change in IaC, policy, runbook, training, or org design) rather than a symptom or individual action. Used in postmortems and escalations, it disciplines teams away from blaming individuals toward fixing the system.",
  whatYouGain: [
    "Reach systemic causes you can actually change in IaC, policy, or process",
    "Stop blaming individuals ('the engineer made a mistake') and fix the system that allowed the mistake",
    "Convert recurring incidents into one-time incidents by addressing root, not surface causes",
    "Document the full cause chain for future similar incidents",
    "Prevent the same postmortem from repeating next quarter"
  ],
  explanation: "<p>5 Whys is a linear drill: start with a problem statement (a confirmed observation, not speculation), then iteratively ask 'why?' until the answer is an actionable system property. The number 5 is approximate—sometimes 3 is enough, sometimes 7 is needed. Stop when the answer is something you can change: missing automation, lack of standard work, no training, incentive misalignment, unfunded capability, or org redesign.</p><p>Key discipline: each 'why' must be evidence-backed. Logs, traces, configs, ADRs, interviews. Speculation propagates; an unverified 'why' at step 2 misleads steps 3–5. Causes are often multi-causal; chain each contributor separately. A useful pattern: Ishikawa → pick top 2–3 branches → 5 Whys each → combine into the action plan.</p><p>Move from blame to design: instead of 'Why did the engineer push the wrong tag?' ask 'Why did the system allow the wrong tag to reach production?' The terminal answer should be system-shaped, not person-shaped. Workflow: confirm the problem statement, pair with Ishikawa when multi-domain causes likely, require evidence for each step, watch for premature termination (still describing a person's action, not a system property), watch for runaway abstraction (stop at the most concrete change you can make), chain per cause, and convert the terminal answer to a PDCA action.</p>",
  csamExample: "<p>A CSAM's customer reported a Sev B: 'An engineer manually rotated a Cosmos key and broke production.' Stopping at 'don't rotate keys manually' produces useless training. Five whys deeper: managed identity wasn't enabled → IaC modules didn't support it → platform team's backlog was 6 months behind → no funded platform-engineering capacity → leadership treats platform as overhead. The action wasn't a runbook update—it was an org funding decision for platform engineering. CSA coaching pushed the customer to fund platform capacity, not just procedural controls.</p>",
  csaExample: "<p>A CSA is leading a postmortem on a Sev B App Service incident. The team says 'the alert didn't fire.' 5 Whys: alert didn't fire → none configured for canaries → canaries added after the alerting policy was written → policy wasn't updated → no process-owner discipline on policy refresh. The action is updating the alerting policy to be canary-aware, with a quarterly refresh schedule. Standard work for alert maintenance becomes the system change, not reactive firefighting.</p>",
  recap: [
    "5 Whys reaches systemic causes, not symptoms or blame",
    "Each step requires evidence; speculation contaminates the chain",
    "Terminal answer must be an actionable system property (policy, standard work, org structure)",
    "Avoid premature termination—if the answer still sounds like a person's action, keep asking",
    "Chain per cause; real causes are usually multi-causal"
  ],
  questions: [
    {
      prompt: "What is the primary benefit of using 5 Whys over stopping at the first plausible cause?",
      options: [
        "Find symptoms faster and resolve incidents quicker.",
        "Change the system, not the individual; reach systemic causes you can actually act on.",
        "Document who was at fault during the incident.",
        "Speed up postmortems by skipping detailed investigation."
      ],
      correctIndex: 1,
      explanation: "5 Whys drills to <strong>systemic causes</strong> that can be changed via IaC, policy, or process — not individual actions. This prevents recurrence rather than repeating the same incident."
    },
    {
      prompt: "How many times should you iteratively ask &ldquo;why&rdquo; when using 5 Whys?",
      options: [
        "Always exactly five times, no more and no less.",
        "As many as needed until you reach an actionable system property.",
        "Never more than three times to keep the postmortem short.",
        "Only during critical incidents, not routine ones."
      ],
      correctIndex: 1,
      explanation: "The number 5 is approximate. Stop when the answer is an <strong>actionable system property</strong> like 'no standard work' or 'unfunded capability' — not at an arbitrary count."
    },
    {
      prompt: "Which terminal answer represents a true root cause in 5 Whys?",
      options: [
        "The engineer made a mistake during deployment.",
        "The alert didn't fire when the threshold was breached.",
        "No standard work exists for updating canary alerting when SLOs change.",
        "The code contained a subtle bug in the parser."
      ],
      correctIndex: 2,
      explanation: "The terminal answer must be a <strong>system change</strong> you can actually make — through IaC, policy, process, or funding. Personal blame is not a root cause."
    },
    {
      prompt: "What requirement does 5 Whys place on each answer in the chain?",
      options: [
        "It should be plausible and agreed upon by the team.",
        "Each step must be evidence-backed: logs, traces, configs, or interviews.",
        "It should reference previous postmortems on similar issues.",
        "It must identify a person responsible for the failure."
      ],
      correctIndex: 1,
      explanation: "Each why must be supported by <strong>evidence</strong>. Unverified answers propagate error down the chain, misleading the remaining steps and contaminating the entire analysis."
    },
    {
      prompt: "When is the best time to run 5 Whys in a postmortem?",
      options: [
        "In real time during active incident response while emotions are fresh.",
        "After the incident is resolved, when complete data is available.",
        "Before any logs are collected, to avoid confirmation bias.",
        "Weeks later, after the team has moved on to other work."
      ],
      correctIndex: 1,
      explanation: "5 Whys requires <strong>evidence</strong> at each step. Running it during active triage with incomplete data contaminates the chain with speculation."
    }
  ]
}, "6-ms": {
  id: "6-ms",
  title: "6Ms",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "The 6Ms—Man, Machine, Method, Material, Measurement, Mother Nature—are the canonical category set for structuring Ishikawa diagrams and disciplining root-cause analysis. They force cause search beyond code and config into people, process, telemetry, and demand. A problem that lives in only one M is rare; realistic answers usually involve 3+ Ms.",
  whatYouGain: [
    "Expand the cause search beyond code and config into people, process, observability, and demand",
    "Prevent single-discipline fixation (engineers blame config; SREs blame process; on-call blames telemetry)",
    "Surface cross-category causes that contribute simultaneously",
    "Score each M as primary, contributing, or non-contributing to focus effort",
    "Create a shared vocabulary across CSA, customer, and PG conversations"
  ],
  explanation: "<p>The 6Ms—Man, Machine, Method, Material, Measurement, Mother Nature—are scaffolding for systematic cause exploration. In cloud/CSA vocabulary: Man = people, skills, on-call rotation; Machine = Azure service, SDK, runtime, tier, SKU; Method = process, queries, partition-key strategy, deployment flow, rollout pattern; Material = configuration, secrets, IaC, image versions, container manifests, RU/s settings, NSGs, dependencies; Measurement = observability, alerting, SLOs, dashboards, sampling rates, retention; Mother Nature = traffic patterns, time-of-day, region peaks, marketing campaigns, upstream bursts, holidays, customer behavior shifts.</p><p>Use the 6Ms as a checklist during postmortems, WAF reviews, and reliability assessments. Walk every M, even if the answer is 'no contributor here, evidence X confirms.' The discipline matters more than the volume. After evidence, score each M as primary, contributing, or non-contributing. Direct effort to primaries; remediate contributing causes opportunistically; document non-contributing ones as ruled out. Some practitioners add Management as a 7th M for org/funding/strategy causes—for CSA work this is often where 5 Whys terminates.</p><p>Translate vocabulary to the audience. 'Man' is fine internally but reads as gendered. Prefer 'People &amp; Skills.' Use whichever vocabulary the room will engage with.</p>",
  csamExample: "<p>A CSAM is coaching a customer's SRE team on incident analysis. The team initially defaulted to 'the alert was misconfigured' (Method). The CSAM walks the 6Ms: Man (are alert thresholds owned by a team, or is alerting orphaned?), Machine (is the service instrumentation correct for the workload?), Method (is the escalation runbook tied to the alert?), Material (are secrets rotated, credentials fresh?), Measurement (what's the sampling rate? Are slow traces filtered out?), Mother Nature (what's the typical traffic pattern? Was this incident unusual?). The team discovered all 6 Ms had contributors: alert ownership was unclear (Man), instrumentation wasn't sampling the right percentile (Measurement), and the traffic pattern was anomalous (Mother Nature). Fixing only Method would have missed the systemic gaps.</p>",
  csaExample: "<p>A CSA is leading a WAF reliability assessment for a customer's AKS infrastructure. The team worried the cluster was 'under-resourced' (Machine). Walking the 6Ms: Man (is there on-call depth for AKS or a single SME?), Machine (are nodes right-sized for workload, or are they over-provisioned?), Method (are there pod disruption budgets? Is the deployment strategy canary or rolling?), Material (what are the pod resource requests? Are they reasonable?), Measurement (is there a dashboard for node utilization? Is alerting at 70% capacity?), Mother Nature (does traffic spike on weekends? Are there batch jobs that compress resources?). The team found that pod requests were set too high (Material), on-call was a single SME who was on PTO (Man), and no alerting existed at capacity thresholds (Measurement). Rightsizing nodes alone would have missed all three system issues.</p>",
  recap: [
    "The 6Ms force cause search beyond code and config into all domains",
    "Walk every M, even if the answer is 'no contributor—evidence confirms'",
    "Score each M as primary, contributing, or non-contributing; focus effort on primaries",
    "Realistic problems have 3+ Ms; single-M problems are rare",
    "Pair 6Ms (breadth) with 5 Whys (depth per M)"
  ],
  questions: [
    {
      prompt: "What do the 6Ms represent in structured root-cause analysis?",
      options: [
        "Manufacturing, Materials, Marketing, Methods, Management, Money.",
        "Man, Machine, Method, Material, Measurement, Mother Nature.",
        "Metrics, Models, Mechanization, Maintenance, Mindset, Motivation.",
        "Market, Money, Mindset, Maintenance, Maturity, Momentum."
      ],
      correctIndex: 1,
      explanation: "The 6Ms force the cause search beyond <strong>code and config</strong> — covering people/skills, service/runtime, process/logic, config/data, observability/SLOs, and demand/environment."
    },
    {
      prompt: "Why is the 6Ms framework more effective than single-discipline analysis?",
      options: [
        "It takes less time and reduces the need for meetings.",
        "It prevents single-discipline fixation and surfaces cross-category causes.",
        "It simplifies documentation and reduces rework.",
        "It replaces detailed investigation with a checklist."
      ],
      correctIndex: 1,
      explanation: "Without a category checklist, engineers blame config, SREs blame process, on-call blames telemetry. The 6Ms give every reviewer the same <strong>prompt</strong>, surfacing multi-category causes."
    },
    {
      prompt: "In the Cosmos 429 throttling example, which three Ms were primary contributors?",
      options: [
        "Man, Machine, Mother Nature.",
        "Method, Measurement, Material.",
        "Method, Material, Mother Nature.",
        "Man, Measurement, Mother Nature."
      ],
      correctIndex: 2,
      explanation: "Hot partition (Method), manual RU/s without autoscale (Material), and EMEA peak plus marketing campaign (Mother Nature) were primary. Other Ms were contributing but remediated <strong>opportunistically</strong>."
    },
    {
      prompt: "When is it NOT appropriate to use the 6Ms framework?",
      options: [
        "During routine postmortems with the engineering team.",
        "When the cause is a known platform issue confirmed by Service Health.",
        "During WAF reliability reviews with the customer.",
        "On your first engagement with a new customer."
      ],
      correctIndex: 1,
      explanation: "The 6Ms are for broad exploration. If the cause is a <strong>known platform issue</strong> confirmed by Service Health, the framework is unnecessary overhead."
    },
    {
      prompt: "&ldquo;An engineer left a VM on over a holiday.&rdquo; Which 6M represents the systemic root cause, not the blame?",
      options: [
        "Man — the engineer's carelessness.",
        "Measurement — no budget alert at 80% spend.",
        "Mother Nature — the unexpected holiday timing.",
        "Material — the VM's retention settings."
      ],
      correctIndex: 1,
      explanation: "Blaming the engineer is not a root cause. The systemic cause is the absence of an alert. <strong>Measurement</strong> discipline reveals preventable gaps."
    }
  ]
}, "fmea": {
  id: "fmea",
  title: "FMEA",
  group: "Process Mapping & Analysis",
  duration: "30 min",
  executiveSummary: "FMEA—Failure Mode and Effects Analysis—systematically anticipates how a process or system can fail, scores each failure mode on Severity × Occurrence × Detection to produce a Risk Priority Number (RPN), and drives mitigations on the highest-RPN items first. It is structured 'what could go wrong?' for pre-deployment risk assessment and AI system governance.",
  whatYouGain: [
    "Anticipate failures before they happen, not after postmortems",
    "Score failures by Severity (how bad), Occurrence (how often), Detection (how well controlled)",
    "Prioritize mitigations by RPN (risk priority number), focusing on the worst risks first",
    "Identify failure modes that current controls don't detect",
    "Create a living risk document that travels with the system and updates after incidents"
  ],
  explanation: "<p>FMEA systematically documents failure modes, effects, causes, and current controls for each function in a system. For each mode: rate Severity (1–10, where 10 is catastrophic), Occurrence (1–10, how likely), Detection (1–10, where 10 is 'won't detect it'), then calculate RPN = S × O × D (1–1000). Sort by RPN and address the highest-RPN modes first. Variants: Process FMEA (manufacturing/processes, maps to engineering workflows), Design FMEA (product pre-release), System FMEA (architecture-level risks across services).</p><p>Key practice: agree on the 1–10 scales before you start. Otherwise teams burn 80% of the workshop debating whether something is a 7 or an 8. Anti-pattern to avoid: the one-time FMEA that ships with the project and never updates. The risk model decays; incidents should trigger a refresh to the FMEA to capture newly discovered modes.</p><p>Workflow: pick scope (one process, system, or feature), build a cross-functional team, brainstorm failure modes (use Ishikawa / 6Ms for exhaustiveness), for each mode capture effect, cause, current controls, then score S, O, D and calculate RPN. Assign actions and re-score after mitigation. RPN should fall. Make it a living document refreshed on incidents, releases, and architecture changes.</p>",
  csamExample: "<p>A CSAM is running an FMEA with a customer before their first multi-region failover drill. Top-RPN finding: secrets rotation in the DR region (S=9, O=4, D=9, RPN=324). Current controls (manual pre-drill rotation) have low detection. The team pre-rotates and tests before the drill; the drill succeeds. Post-action RPN drops to 18 (via automation). Without the FMEA, the failover would have failed for the most embarrassing reason in front of leadership.</p>",
  csaExample: "<p>A CSA is running FMEA on a customer's Cosmos DB architecture before a production launch. Failure modes identified: hot partition key (S=8, O=6, D=8, RPN=384), network timeout due to connection pooling (S=7, O=3, D=6, RPN=126), data corruption from application bug (S=10, O=2, D=4, RPN=80). Top-RPN is partition-key design. The team implements partition-key validation in IaC (reducing O to 1 post-implementation). Secondary modes (timeout, data corruption) get detective controls (alerting, audit logging) rather than prevention. The FMEA ranked effort by actual risk.</p>",
  recap: [
    "FMEA anticipates failures before incidents happen",
    "RPN = Severity × Occurrence × Detection; rank by RPN to prioritize",
    "Establish 1–10 scoring scales before starting—debating a single score kills productivity",
    "FMEA is a living document; refresh after incidents and architecture changes",
    "Pair with Poka-Yoke—each top-RPN mode becomes a mistake-proofing target"
  ],
  questions: [
    {
      prompt: "What does RPN stand for in FMEA?",
      options: [
        "Risk Planning Number.",
        "Risk Priority Number.",
        "Ranked Priority Number.",
        "Risk Process Notation."
      ],
      correctIndex: 1,
      explanation: "<strong>Risk Priority Number</strong> (RPN) is Severity &times; Occurrence &times; Detection, producing a score that prioritizes which failure modes to address first."
    },
    {
      prompt: "How is RPN calculated?",
      options: [
        "Severity + Occurrence + Detection.",
        "Severity &minus; Occurrence + Detection.",
        "Severity &times; Occurrence &times; Detection.",
        "(Severity &times; Occurrence) &divide; Detection."
      ],
      correctIndex: 2,
      explanation: "RPN = <strong>Severity &times; Occurrence &times; Detection</strong>. Multiplication means a single dimension at the worst score drives a high RPN, focusing attention on the most consequential modes."
    },
    {
      prompt: "What should you establish BEFORE starting an FMEA workshop?",
      options: [
        "A list of every conceivable failure mode.",
        "Pre-agreed 1–10 scoring scales for Severity, Occurrence, and Detection.",
        "The budget for mitigating the top-RPN items.",
        "Two years of historical incident data."
      ],
      correctIndex: 1,
      explanation: "Teams must agree on the <strong>1–10 scales</strong> before brainstorming. Otherwise the workshop is spent debating whether something is a 7 or an 8 instead of analyzing risk."
    },
    {
      prompt: "What are the three main variants of FMEA?",
      options: [
        "Hardware, Software, and Process.",
        "Design, System, and Architecture.",
        "Process, Design, and System.",
        "Preventive, Detective, and Corrective."
      ],
      correctIndex: 2,
      explanation: "The variants are <strong>Process FMEA</strong> (manufacturing/processes), <strong>Design FMEA</strong> (product pre-release), and <strong>System FMEA</strong> (architecture-level risks across services)."
    },
    {
      prompt: "What is the key anti-pattern to avoid in FMEA management?",
      options: [
        "Scoring a failure mode as Severity 10 when it should be 9.",
        "Creating a one-time FMEA document that is never updated again.",
        "Involving too many people in the workshop.",
        "Addressing the lowest-RPN items first to build momentum."
      ],
      correctIndex: 1,
      explanation: "The <strong>one-time FMEA</strong> ships with the project and never updates. Risk models decay; FMEA must be a living document refreshed after incidents and architecture changes."
    }
  ]
},
"5s": {
  id: "5s",
  title: "5S: Visual Workplace Organization",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "5S—Sort, Set in order, Shine, Standardize, Sustain—is a proven method for organizing engineering estates to eliminate the hidden waste of searching, mis-identifying, and re-creating artifacts. Applied to repos, subscriptions, dashboards, and runbooks, it recovers 5–15% of engineering hours lost in unmaintained estates. The discipline is the sequence: skip Sort and you organize trash; skip Standardize and Sustain fails. Treat 5S as recurring quarterly work, not a one-shot cleanup.",
  whatYouGain: [
    "Eliminate orphaned resources and reduce search/identification waste by applying a proven five-step sequence to engineering estates",
    "Use 5S to organize repos, subscriptions, dashboards, runbooks, and ChatOps channels—recovering hours lost to disorganization",
    "Build convention into your estate so organization stays consistent without constant manual effort",
    "Train your team on the anti-pattern: one-time cleanups fail; Sustain is what makes order stick"
  ],
  explanation: "<p><strong>5S is the visual workplace discipline born on Toyota's shop floor, now applied to engineering estates.</strong> Disorganized repos, subscriptions, and dashboards leak time invisibly: engineers fork instead of finding the canonical module; they wing incidents because they can't find the runbook; they build redundant dashboards because they can't find the existing one.</p><p>The five steps form a sequence:</p><ul><li><strong>Sort (Seiri):</strong> Identify what's needed; remove what isn't. Cut hard. Archive what might be needed; delete the rest.</li><li><strong>Set in order (Seiton):</strong> Put what's needed in a known, conventional place. Define folder, tag, and naming conventions.</li><li><strong>Shine (Seiso):</strong> Continuously clean. Automated linters, dependency bots, scheduled cost audits, broken-link checks.</li><li><strong>Standardize (Seiketsu):</strong> Codify the convention into templates, Policy, repo templates, or dashboard packs.</li><li><strong>Sustain (Shitsuke):</strong> Audit cadence + culture so it doesn't decay. Quarterly audit; metric on dashboard; named owner.</li></ul><p>The anti-pattern: a one-time \"5S Saturday\" cleanup with no Standardize and Sustain. The mess returns within a quarter. Real 5S is recurring work, not a project.</p>",
  csamExample: "<p>A CSAM inherits a customer 90 days into an engagement. The subscription estate has 1,400 resources; the customer can't account for 380 of them. There are no tags, no clear ownership, and cost allocation is becoming political. The CSAM proposes a 3-week 5S sweep: identify and tag or retire orphaned resources, establish a naming convention and tagging standard, add a quarterly audit dashboard, and assign an owner. By week 3, all 380 are either tagged to a team, retired, or transferred. Cost allocation arguments vanish; recurring audit automation keeps the count under 20. The CSAM uses the 5S outcome to build trust: \"We found $94K/yr of waste and made the cleanup stick,\" credible proof of value that opens doors to deeper work.</p>",
  csaExample: "<p>A CSA works with a customer's platform team on an AKS modernization. IaC monorepo has 142 modules; the team wastes hours searching for the canonical one vs. outdated clones. The CSA leads a 5S on the repo: the team Sorts, identifies 38 truly canonical modules vs. 104 clones, and archives the clones. They Set in order by establishing a naming convention and folder hierarchy. They Shine by adding a CI gate that auto-detects and flags duplicate module logic. They Standardize by creating a repo template that new projects inherit; every new module goes into the canonical repo by default. They Sustain with a monthly audit metric. PR cycle time on the IaC repo falls 40%. The standardized repo template prevents future drift.</p>",
  recap: [
    "5S is a five-step sequence applied to engineering estates; the sequence matters—skip Sort or Standardize and the discipline breaks.",
    "The five S's: Sort (remove trash), Set in order (conventional placement), Shine (automate upkeep), Standardize (codify), Sustain (audit cadence).",
    "Use 5S to organize repos, subscriptions, dashboards, runbook libraries, ChatOps channels, and agent prompt libraries.",
    "The anti-pattern is the one-time cleanup with no Sustain; the mess returns within a quarter. Real 5S is recurring work.",
    "Done well, 5S removes 5–15% of engineering hours lost to searching and re-creating artifacts."
  ],
  questions: [
    {
      prompt: "What are the five steps of 5S in the correct order?",
      options: [
        "Organize, Clean, Define, Audit, Refresh",
        "Sort, Set in order, Shine, Standardize, Sustain",
        "Set in order, Sort, Shine, Sustain, Standardize",
        "Clean, Organize, Check, Codify, Maintain"
      ],
      correctIndex: 1,
      explanation: "The sequence matters. Sort removes what isn&rsquo;t needed, Set puts the rest in conventional order, Shine automates upkeep, Standardize codifies convention, and Sustain creates the <strong>audit cadence</strong>."
    },
    {
      prompt: "Why is the sequence of the 5S steps critical rather than a flexible checklist?",
      options: [
        "Each step depends on prior steps being complete; skipping sequence breaks the discipline.",
        "The order doesn&rsquo;t matter &mdash; the same result occurs either way.",
        "It speeds up the process and shortens the overall timeline.",
        "It exists for branding reasons only."
      ],
      correctIndex: 0,
      explanation: "Skip Sort and you organize trash; skip Standardize and Sustain collapses. The <strong>sequence</strong> is the mechanism that works."
    },
    {
      prompt: "What is the most common anti-pattern that prevents 5S from delivering lasting results?",
      options: [
        "Monthly cleanup cycles that are too frequent.",
        "Quarterly audits that don&rsquo;t include new team members.",
        "A one-time cleanup (e.g., a &ldquo;5S Saturday&rdquo;) with no Sustain phase.",
        "Insufficient documentation of the cleanup decisions."
      ],
      correctIndex: 2,
      explanation: "A one-time cleanup without <strong>Standardize and Sustain</strong> returns the mess within a quarter. The method requires recurring audit cadence to hold order."
    },
    {
      prompt: "Which engineering surface is a proper target for 5S methodology?",
      options: [
        "Individual developers&rsquo; personal desk arrangements.",
        "IaC monorepos, subscription estates, dashboards, and runbook libraries.",
        "Personal email inboxes and note-taking systems.",
        "Spreadsheets used for manual project tracking."
      ],
      correctIndex: 1,
      explanation: "5S applies anywhere engineering artifacts live &mdash; repos, subscriptions, dashboards, runbooks. These surfaces leak invisible <strong>waste</strong> when disorganized."
    },
    {
      prompt: "After completing a 5S sweep on a repo, which step is most critical for sustaining results?",
      options: [
        "Documenting all changes in a wiki or handbook.",
        "Notifying the entire team in a mandatory meeting.",
        "Creating a metric and audit cadence as part of Sustain.",
        "Holding a celebration to recognize the cleanup effort."
      ],
      correctIndex: 2,
      explanation: "Sustain is the fifth S &mdash; without a named owner, audit cadence, and a <strong>metric on a dashboard</strong>, entropy returns. Audit cadence is what makes order last."
    }
  ]
},

"standard-work": {
  id: "standard-work",
  title: "Standard Work: The Baseline for Improvement",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "Standard Work is the current best-known way to perform a task—documented, taught, and followed until a PDCA cycle proves a better way. Without a standard, you can't tell whether a change improved or just varied. For CSAs, standard work is how Kaizen and DMAIC gains are codified into IaC modules, Policy, runbooks, templates, and agent prompts. The standard is not static; it's a living artifact, owned, versioned, and explicitly designed to be replaced by its better self.",
  whatYouGain: [
    "Establish a measurable baseline against which improvement is proven—variation can't be managed or improved without a standard to compare against",
    "Reduce variation and defects by codifying the best-known procedure into IaC, Policy, and runbooks that everyone follows",
    "Accelerate onboarding by giving new engineers a proven procedure instead of asking them to reinvent it",
    "Embed poka-yoke safeguards directly into the standard so errors become impossible or immediately detected"
  ],
  explanation: "<p><strong>Standard Work is the current best-known way to perform a task.</strong> It has three components per Toyota's formulation:</p><ul><li><strong>Takt time:</strong> The demand pace (e.g., one deploy every 8 hours).</li><li><strong>Work sequence:</strong> The step-by-step procedure in the required order.</li><li><strong>Standard WIP:</strong> The items or state required to perform the procedure smoothly (e.g., 2 staging environments warm).</li></ul><p>In engineering, standard work takes forms like IaC modules with locked defaults, Azure Policy assignments, runbook templates, ChatOps payloads, repo templates, and versioned agent prompts with evaluated baselines. The word &quot;standard&quot; here means the current best-known variant, not the final word. Every PR that updates the standard is a PDCA cycle made permanent.</p><p><strong>How to establish standard work:</strong> Don't write it from scratch; observe your best engineers doing the work well, document the variant with the best measured outcome, pilot it, train everyone, and plan the refresh cadence. The anti-pattern is the binder of standards nobody opens—standards must live where the work happens: in the IaC module, the pipeline, the IDE, the ChatOps payload, not in a wiki page.</p>",
  csamExample: "<p>A CSAM's customer has 8 engineers deploying AKS clusters; each does it differently. Upgrade incidents vary widely (1.5 to 6 hours MTTR) and the team blames complexity. The CSAM proposes: observe the best engineer's procedure, document it as a ChatOps workflow + pre-check playbook, pilot with two teams, and roll to all. Within a quarter, upgrade MTTR is 38 minutes near-constant. The CSAM framed it to leadership: \"We didn't add people or resources—we made the good procedure everyone's procedure.\" That story is high-credibility value: consistency and speed from captured knowledge.</p>",
  csaExample: "<p>A CSA's customer has a Cosmos DB IaC module used by 12 teams. Three months of DMAIC work proves that hierarchical partition keys + autoscale + index tuning + SDK upgrade prevent 429 errors. The CSA codifies all four into a new standard module with locked defaults. New containers inherit the pattern; old ones get a migration script. Standard WIP now includes \"autoscale warmup time\" in the takt definition. The module is versioned and goes into the platform's standard catalog. A year later, a 5 Whys discovers a better tuning approach; the CSA updates the module in a PR, teams pull the new version, and the standard evolves without anyone being left behind.</p>",
  recap: [
    "Standard Work is the baseline for measurement—without a standard, improvement is invisible and variation can't be managed.",
    "Three components: Takt time (demand pace), Work sequence (the steps), and Standard WIP (items needed to perform smoothly).",
    "Establish by observing your best engineers, documenting the best variant, piloting, training, and planning refresh cadence.",
    "Standards must live where the work happens—in IaC modules, pipelines, Policy, ChatOps payloads—not in a separate wiki.",
    "A standard is the current best-known way, not the final word. Update via PDCA cycles; every PR that updates is a cycle made permanent."
  ],
  questions: [
    {
      prompt: "Why is standard work essential as a baseline for improvement?",
      options: [
        "It enforces compliance with corporate policy.",
        "Without a standard, you can&rsquo;t tell whether a change actually improved or just varied.",
        "It eliminates the need for runbooks and onboarding.",
        "It locks in best practices permanently."
      ],
      correctIndex: 1,
      explanation: "Improvement requires a <strong>comparator</strong>. Without a standard, every engineer reinvents the procedure, variation explodes, and there&rsquo;s no baseline to measure change against."
    },
    {
      prompt: "What are the three components of standard work in Toyota's formulation?",
      options: [
        "Documentation, Training, Audit.",
        "Takt time, Work sequence, Standard WIP.",
        "Define, Measure, Control.",
        "Policy, Process, Procedure."
      ],
      correctIndex: 1,
      explanation: "<strong>Takt</strong> (demand pace), <strong>Work sequence</strong> (the step-by-step procedure), and <strong>Standard WIP</strong> (items / state required to perform the procedure smoothly)."
    },
    {
      prompt: "When establishing standard work, where should you start?",
      options: [
        "Write the standard from scratch based on industry best practices.",
        "Observe current variations and document what your best engineers do well; pick the variant with the best measured outcome.",
        "Buy a commercial standard from a consultancy.",
        "Have leadership define the standard top-down."
      ],
      correctIndex: 1,
      explanation: "Don&rsquo;t write from scratch &mdash; <strong>observe and codify the best-known variant</strong>. Standards built from real practice survive contact with the work; standards written in a vacuum die in the field."
    },
    {
      prompt: "Where should standard work live to actually be followed?",
      options: [
        "In a binder in the team room.",
        "In a wiki page nobody opens.",
        "Where the work happens &mdash; in the IaC module, the pipeline, the IDE, the ChatOps payload.",
        "In an annual training course."
      ],
      correctIndex: 2,
      explanation: "The anti-pattern is the <strong>binder of standards nobody opens</strong>. Standards must be embedded where the work happens &mdash; IaC defaults, pipeline templates, Policy, runbooks &mdash; not in a separate document."
    },
    {
      prompt: "Should standard work ever change?",
      options: [
        "No &mdash; once standardized, the standard is locked permanently.",
        "Yes &mdash; a standard is a living artifact, owned and versioned, replaced by a better version through a PDCA cycle.",
        "Only every 5 years during major reviews.",
        "Only if leadership signs off in writing."
      ],
      correctIndex: 1,
      explanation: "A standard is the <strong>current best-known way</strong>, not the final word. Every PR that updates the standard is a PDCA cycle made permanent. Without a refresh cadence, the standard ossifies."
    }
  ]
},

"gemba": {
  id: "gemba",
  title: "Gemba Walk: Observe Where Work Actually Happens",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "Gemba means 'the actual place'—going where the work happens, observing it directly, and asking respectful questions instead of relying on reports, dashboards, or hearsay. The gemba reveals silent friction and workarounds that metrics average away. For CSAs, gemba walks anchor DMAIC Measure and Analyze phases, prepare Kaizen pre-work, and validate whether team narratives match observed reality. A 5-minute observation often beats a 50-page audit.",
  whatYouGain: [
    "Discover silent friction and undocumented workarounds that dashboards and reports systematically miss",
    "Build CSA credibility with customer engineers by seeing their reality firsthand, not relying on summaries",
    "Validate or invalidate team self-narratives—\"we deploy daily\" often hides a 11-day average hidden by the way the metric is reported",
    "Surface undocumented standards (good and bad) that are the real procedures the team follows"
  ],
  explanation: "<p><strong>Gemba is a structured observation of work as it happens.</strong> It is not an audit, not an interrogation, not a status meeting. Gemba principles, adapted from Taiichi Ohno:</p><ul><li><strong>Go see:</strong> Be physically or virtually present where the work happens.</li><li><strong>Ask why:</strong> Curious, respectful, repeated (the 5 Whys discipline applies here).</li><li><strong>Show respect:</strong> The practitioners know things you don't. Listen first.</li></ul><p>Engineering surfaces that count as gemba: the repo and IDE during a development task, the build and deploy as it runs, the ChatOps channel during an incident, the standup as it happens, on-call observations, customer usage telemetry. What gemba is <em>not</em>: a dashboard review, a status meeting, a slide-summarized walkthrough, or \"executive gemba\"—a 30-minute visit with a 6-person entourage where nobody works naturally.</p><p><strong>How to do a gemba walk:</strong> Pick a purpose (\"understand deploy lead time\"), schedule with the team's consent, bring a notebook and leave the laptop, observe one full cycle in silence, then ask open questions. Record verbatim where useful. Synthesize off-site. Report back to the team first, before leadership. The friction you surface becomes the pre-work for Kaizen or the diagnosis for a Measure phase.</p>",
  csamExample: "<p>A CSAM's customer claims \"we deploy daily.\" The CSA shadows the deployment process for three days. Builds do run daily; but promotions to production happen every 11 days on average, gated by a weekly change advisory board (CAB). The metric the team showed leadership was accurate and misleading. The CSA's gemba walk reframed the program: the bottleneck isn't development speed—it's change governance. The CAB meeting became the CSA's intervention target, not the CI pipeline. This framing would never have surfaced from a dashboard.</p>",
  csaExample: "<p>A CSA is diagnosing AKS pod churn on a customer's production cluster. Dashboards show occasional restarts; the on-call team says \"it's probably network blips.\" The CSA sits with on-call for a 4-hour shift and watches the incident channel in real-time. Sees: each restart is followed by 4 manual context-gathering steps (find the pod logs, check the node, check the network namespace, check DNS). Each step takes 5–10 minutes. The CSA proposes a workbook that auto-gathers all four with a single link. On-call adoption is immediate; manual toil drops 40%. Gemba revealed undocumented procedure; the fix was obvious once visible.</p>",
  recap: [
    "Gemba means 'the actual place'—observe where work happens, ask why respectfully, show respect for what practitioners know.",
    "Gemba surfaces silent friction and workarounds that metrics average away and reports summarize out of existence.",
    "Especially valuable in DMAIC Measure and Analyze phases and Kaizen pre-work—anchors diagnosis in reality, not reported narrative.",
    "Go small: invite yourself with consent, bring a notebook, watch silently first, then ask. Report back to the team before leadership.",
    "The anti-pattern: 'executive gemba'—a large entourage visit where nobody works naturally. Genuine gemba is small and scheduled with consent."
  ],
  questions: [
    {
      prompt: "What does &ldquo;gemba&rdquo; mean?",
      options: [
        "A scheduled management review meeting.",
        "The actual place where work happens.",
        "A formal audit or inspection process.",
        "A retrospective discussion of past events."
      ],
      correctIndex: 1,
      explanation: "<strong>Gemba</strong> is Japanese for &ldquo;the actual place.&rdquo; It means going where work is done, observing it directly, and asking respectful questions &mdash; not relying on dashboards or hearsay."
    },
    {
      prompt: "What are the three Ohno principles of a gemba walk?",
      options: [
        "Listen, Learn, Lead.",
        "Plan, Observe, Report.",
        "Go see, Ask why, Show respect.",
        "Find facts, Analyze data, Recommend action."
      ],
      correctIndex: 2,
      explanation: "The three principles are <strong>Go see, Ask why, Show respect</strong> &mdash; go where work happens, ask why repeatedly, and respect that the practitioners know things the observer doesn&rsquo;t."
    },
    {
      prompt: "What is gemba NOT?",
      options: [
        "A way to discover undocumented workarounds.",
        "An audit conducted with the team&rsquo;s consent.",
        "A 30-minute visit with a 6-person executive entourage that disrupts the work being observed.",
        "An observation of the real incident-response process."
      ],
      correctIndex: 2,
      explanation: "Gemba is NOT &ldquo;executive gemba&rdquo; &mdash; a <strong>large entourage visit</strong> where nobody works naturally. Genuine gemba is small, scheduled with consent, and conducted with a notebook, not a laptop."
    },
    {
      prompt: "What does a gemba walk surface that dashboards and reports typically miss?",
      options: [
        "High-level trends and aggregated metrics.",
        "Silent friction and undocumented workarounds.",
        "Formal process documentation and standards.",
        "Historical baseline data from past months."
      ],
      correctIndex: 1,
      explanation: "Gemba walks surface <strong>silent friction</strong> &mdash; workarounds everyone uses but nobody documents, manual steps that metrics average away. Dashboards lie by omission; gemba reveals texture."
    },
    {
      prompt: "In which DMAIC phases is gemba walking especially valuable?",
      options: [
        "Define and Improve only.",
        "Measure and Analyze.",
        "Control and Improve.",
        "All phases equally."
      ],
      correctIndex: 1,
      explanation: "Gemba is especially valuable in <strong>Measure and Analyze</strong> to anchor the baseline in reality, validate or invalidate team narratives, and discover what reports systematically miss."
    }
  ]
},

"poka-yoke": {
  id: "poka-yoke",
  title: "Poka-Yoke: Design Systems So Errors Are Impossible",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "Poka-Yoke means 'mistake-proofing'—designing systems and processes so errors are impossible, or failing that, immediately detected. Prevention (error becomes impossible) beats detection (error caught at the moment). For CSAs, poka-yoke is how you make CI gains stick: the change can't be undone, the misconfiguration can't be deployed, the secret can't be committed. Training and reminders fail at scale; only mechanism works. Pair with FMEA and Standard Work to identify where to apply poka-yoke and what behavior to enforce.",
  whatYouGain: [
    "Make CI gains stick by designing systems where errors are impossible—lock the prod resource, deny the bad config, block the secret commit",
    "Remove dependence on training, checklists, and human attention at scale—mechanism beats memo every time",
    "Sustain Kaizen and DMAIC improvements by removing the regression path—the change becomes structure, not discipline",
    "Apply Azure-native poka-yokes: Policy (deny mode), RBAC (least privilege), schema validation, CI gates, resource locks, managed identity"
  ],
  explanation: "<p><strong>Poka-Yoke has two classes:</strong></p><ul><li><strong>Prevention:</strong> Error is physically or logically impossible. Policy denies the action. The resource cannot be deleted. The tag cannot be non-immutable.</li><li><strong>Detection:</strong> Error is immediately, visibly flagged at the moment it happens. Schema validation rejects malformed config. Pre-commit hook blocks the secret.</li></ul><p>Shingo's three control levels: <strong>Warning</strong> (operator alerted on a dashboard), <strong>Shutdown/refusal</strong> (system refuses the action), <strong>Self-correcting</strong> (system fixes and proceeds). Refusal is harder to design than a warning but stops the error from occurring.</p><p><strong>Common poka-yokes in Azure/engineering:</strong> Azure Policy (deny/audit modes), RBAC scoped least-privilege, schema validation, pre-commit hooks (secret scanning, lint), pipeline gates, resource locks (CanNotDelete/ReadOnly), managed identity, immutable infrastructure, type systems and lints.</p><p><strong>How to design:</strong> Identify the error (from FMEA, postmortems, near-misses), choose class (prevention &gt; detection), choose level (refusal &gt; warning), place it closest to the error source (pre-commit &gt; CI &gt; runtime &gt; audit). Test the poka-yoke itself. Standardize into IaC, Policy, or shared tooling. Monitor for bypass—some teams will route around; detect it.</p>",
  csamExample: "<p>A CSAM's customer has deleted a production database three times in 18 months despite training. The CSAM proposes a poka-yoke mechanism: Policy assigns `cannot_be_deleted = true` to every prod resource; CI runners block the `--no-prompt` flag; a delete request now requires approvals the team knows to queue. Training alone failed at scale; mechanism works. Zero recurrences in the next 24 months. The CSAM framed it to leadership: \"Memos cannot beat mechanism. We removed the ability to make the mistake.\"</p>",
  csaExample: "<p>A CSA's customer's image registry is public, risking a supply-chain vulnerability. The CSA proposes: Azure Policy denies public endpoints on ACR, enforces managed identity for pod pulls, and blocks mutable image tags. RBAC limits delete permissions to break-glass only. Pre-commit hook blocks `latest` tag in Helm charts. A developer attempting the old unsafe pattern now hits refusal at multiple layers—the error becomes impossible before it reaches runtime. Standardized into the IaC module so every new ACR inherits the poka-yokes.</p>",
  recap: [
    "Prevention poka-yokes make the error impossible; detection poka-yokes catch it immediately. Prevention is preferred when feasible.",
    "Place poka-yokes close to the error source: pre-commit beats CI beats runtime beats post-hoc audit.",
    "Refusal (system refuses the action) is stronger than warning (system alerts). Mechanism beats training, checklist, and memo at scale.",
    "Common Azure poka-yokes: Policy (deny mode), RBAC (least privilege), schema validation, pre-commit hooks, CI gates, resource locks, managed identity.",
    "Any error that has happened twice should have a poka-yoke; high-severity modes (rare ones bite hardest) especially need them."
  ],
  questions: [
    {
      prompt: "What are the two classes of poka-yoke per Shingo's original distinction?",
      options: [
        "Manual and Automated.",
        "Prevention (error physically/logically impossible) and Detection (error caught at the moment it happens).",
        "Hardware and Software.",
        "Pre-commit and Post-deploy."
      ],
      correctIndex: 1,
      explanation: "Prevention makes the error <strong>impossible</strong> (Policy denies the action); detection catches it the moment it happens (schema validation rejects malformed config). Prevention is preferred when feasible."
    },
    {
      prompt: "A customer's prod database has been deleted three times in 18 months despite training. What is the right next step?",
      options: [
        "Add a fourth round of training and a checklist.",
        "Apply a mechanism: resource lock (CanNotDelete), Policy deny, and block --no-prompt in CI runners.",
        "Document the issue in a wiki and move on.",
        "Issue a strongly worded memo from leadership."
      ],
      correctIndex: 1,
      explanation: "Training and reminders fail at scale. The poka-yoke principle is &ldquo;<strong>memos cannot beat mechanism</strong>.&rdquo; Lock the resource and deny the action in policy &mdash; the deletion becomes impossible."
    },
    {
      prompt: "Which is generally the strongest control level for a poka-yoke?",
      options: [
        "Warning &mdash; alert the operator on a dashboard.",
        "Shutdown / refusal &mdash; the system refuses the action.",
        "Self-correcting &mdash; quietly fix and proceed.",
        "Audit &mdash; record the action for later review."
      ],
      correctIndex: 1,
      explanation: "Refusal is harder to design than a warning but stops the error from occurring. <strong>Refusal &gt; Warning</strong> in the Shingo control hierarchy."
    },
    {
      prompt: "Where should you place a poka-yoke for maximum effect?",
      options: [
        "As far downstream as possible to avoid blocking developers.",
        "Closest to the error source &mdash; pre-commit beats CI; CI beats runtime; runtime beats audit.",
        "Only in production, never in dev or test environments.",
        "Wherever it&rsquo;s easiest to implement, regardless of source."
      ],
      correctIndex: 1,
      explanation: "Catch errors as close to the source as possible. A <strong>pre-commit hook</strong> beats a CI gate beats a runtime check beats post-hoc audit. The earlier, the cheaper."
    },
    {
      prompt: "Which is the key anti-pattern to avoid when designing poka-yoke?",
      options: [
        "Using Azure Policy in deny mode for prod resources.",
        "Treating &ldquo;training plus a checklist&rdquo; as a poka-yoke when only a mechanism qualifies.",
        "Locking down RBAC to least privilege.",
        "Using managed identity instead of secrets in code."
      ],
      correctIndex: 1,
      explanation: "Training is not poka-yoke; <strong>only mechanism is</strong>. A checklist that depends on human attention will fail at scale &mdash; that&rsquo;s precisely what poka-yoke exists to remove."
    }
  ]
},

"takt-time": {
  id: "takt-time",
  title: "Takt Time: The Demand-Set Pace",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "Takt time is the rate at which a process must produce to meet customer demand: takt = available time / customer demand. If demand is 480 requests per 8-hour day, takt is 1 minute per request. Cycle time slower than takt = unmet demand and growing queues. Cycle time faster than takt = overproduction waste unless paced down. For CSAs, takt applies to deploy cadence, alert response, incident triage pace, request throughput, and AI agent invocation rate. Use takt to size capacity, set SLOs, design Standard Work, and detect overproduction.",
  whatYouGain: [
    "Size capacity intelligently by matching cycle time to takt—neither under-provisioning (queues grow) nor over-provisioning (waste accumulates)",
    "Set SLOs and deploy cadence that align to actual demand, not guesses or peak-of-peak",
    "Detect overproduction as waste—cycle time significantly less than takt means producing faster than demand, a hidden cost",
    "Balance process steps within ~10% of takt to eliminate bottleneck steps that constrain the entire flow"
  ],
  explanation: "<p><strong>Takt time formula:</strong> takt = available production time / customer demand.</p><p>Three related measures often confused:</p><ul><li><strong>Takt time:</strong> The demand-set pace the process must match.</li><li><strong>Cycle time:</strong> Actual time per unit produced (averaged).</li><li><strong>Lead time:</strong> End-to-end time per unit, including queues.</li></ul><p><strong>Cases:</strong> Cycle time &gt; takt = under-capacity; queues grow; demand unmet. Cycle time = takt = balanced; smooth flow at sustainable pace. Cycle time &lt; takt = over-capacity; overproduction unless paced down (the Heijunka discipline).</p><p><strong>Line balancing:</strong> Individual step times should fall within roughly ±10% of takt. A 4-step process where one step takes 2× takt is the bottleneck and limits the entire flow, regardless of the other steps. For engineering, compute takt against a defensible busy-window definition (peak hour for capacity planning, daily for steady-state), not peak-of-peak; you'll over-provision permanently if you size to absolute peak.</p>",
  csamExample: "<p>A CSAM's customer's CI build farm \"feels slow.\" The CSAM computes takt: 800 builds per 8-hour day = 36 seconds per build. Measured cycle time: 4 minutes. The diagnosis is stark: capacity is fundamentally insufficient; queueing is inevitable. The CSAM proposes adding 6 runners. Cycle time drops to 32 seconds; demand is met without overprovisioning. The diagnosis (capacity, not flakiness) had eluded the team for a quarter because they never computed takt. The business case for the hardware purchase becomes obvious: \"We're 7× over-takt.\"</p>",
  csaExample: "<p>A CSA is tuning AKS HPA (Horizontal Pod Autoscaler) for a customer's microservice. Peak demand is 12 requests/second. Per-pod capacity is 18 req/s. Takt = 1 pod handles demand with 50% headroom. HPA settings: scale up at 70% utilization (12.6 req/s), scale down at 30%. The customer previously sized for 5 pods \"just to be safe.\" The CSA's takt-based tuning: 1 pod baseline + 1 buffer = 2 pods during peak. 60% cost reduction. Standard math applied; invisible waste exposed.</p>",
  recap: [
    "Takt time = available time / customer demand. It's the demand-set pace the process must match to avoid queues.",
    "Cycle time slower than takt = under-capacity and growing queues. Cycle time faster than takt = overproduction waste.",
    "Size capacity to match takt, not peak-of-peak. Use a defensible busy-window definition (peak hour, not absolute peak).",
    "Balance process steps to within ~10% of takt. One step at 2× takt becomes the bottleneck regardless of other steps.",
    "For engineering: apply takt to CI runner sizing, HPA configuration, Service Bus consumer count, incident response staffing, and AI agent inference capacity."
  ],
  questions: [
    {
      prompt: "What is the formula for takt time?",
      options: [
        "Available time &divide; customer demand.",
        "Customer demand &times; cycle time.",
        "Total cost &divide; throughput.",
        "Process time + queue time."
      ],
      correctIndex: 0,
      explanation: "<strong>Takt = available time / customer demand.</strong> If demand is 480 requests per 8-hour day, takt is 1 minute per request. It&rsquo;s the demand-set pace the process must match."
    },
    {
      prompt: "A CI build farm processes 800 builds per 8-hour day with a measured per-build cycle of 4 minutes. What does the math show?",
      options: [
        "The farm is sized correctly because builds are completing.",
        "Takt is 36 seconds; cycle is 4 minutes &mdash; the farm cannot possibly meet demand and queueing is inevitable.",
        "The team should optimize for individual build speed, not capacity.",
        "Cycle being longer than takt is fine because builds are async."
      ],
      correctIndex: 1,
      explanation: "Takt = 8h / 800 = 36s; cycle = 240s. <strong>Cycle &gt; takt</strong> means under-capacity and growing queues. Adding runners until cycle drops below takt is the fix &mdash; not optimizing individual builds."
    },
    {
      prompt: "Cycle time is significantly less than takt. What does this indicate?",
      options: [
        "The team is doing great &mdash; this is the goal.",
        "Over-capacity &mdash; the process risks overproduction waste unless paced down.",
        "The takt calculation is wrong.",
        "Customers are about to complain about slow service."
      ],
      correctIndex: 1,
      explanation: "Cycle &lt; takt = <strong>over-capacity / overproduction</strong>. Producing faster than demand creates inventory waste unless deliberately paced down (the Heijunka discipline). Faster is not always better."
    },
    {
      prompt: "How tightly should individual steps be balanced relative to takt?",
      options: [
        "Each step can take any duration; only total cycle matters.",
        "Within roughly &plusmn;10% of takt &mdash; one step at 2&times; takt becomes the bottleneck regardless of the others.",
        "Each step should take exactly 1 second.",
        "Steps should be 5&times; takt to allow safety margin."
      ],
      correctIndex: 1,
      explanation: "Line balancing aims for step times within <strong>~10% of takt</strong>. A 4-step process where one step takes 2&times; takt is the bottleneck and limits the entire flow."
    },
    {
      prompt: "What is the anti-pattern to avoid when computing takt for capacity planning?",
      options: [
        "Using real telemetry to measure demand.",
        "Computing takt against peak-of-peak demand, which over-provisions permanently.",
        "Re-measuring takt when demand shifts.",
        "Comparing takt to current cycle time."
      ],
      correctIndex: 1,
      explanation: "Sizing to absolute peak wastes money; sizing to average misses peak. Use a <strong>defensible busy-window definition</strong> (peak hour for capacity planning, daily for steady-state) instead of peak-of-peak."
    }
  ]
},

"kaizen": {
  id: "kaizen",
  title: "Kaizen: Focused Improvement Events That Ship in Days",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "Kaizen—'change for the better'—is a focused, time-boxed improvement event run by the people who do the work. A 3–5 day Kaizen event gathers a cross-functional team that scopes, analyzes, and implements a specific change end-to-end before the week ends. Especially powerful when customer skepticism is high and a visible, measured win is needed to rebuild momentum. Use Kaizen to compress modernization wins, reliability uplifts, cost optimizations, and skilling jumps into customer-attended events with hard before/after data. Respect Kaizen's limits: it works for execution of known solutions in days, not design of complex systems needing months.",
  whatYouGain: [
    "Break stalled transformation programs by shipping a real, measured improvement in 5 days instead of hoping a 5-month roadmap lands",
    "Rebuild customer trust and momentum after failed programs—nothing regains credibility like a visible win demoed to leadership on day 5",
    "Compress PDCA cycles for high-priority problems from weeks to days, with working code/config shipped before the team disperses",
    "Build customer-team CI muscle through participation—Kaizen is taught by doing, not slide decks"
  ],
  explanation: "<p><strong>Kaizen is both a philosophy and a format.</strong></p><p><strong>Philosophy:</strong> Small, continuous improvement compounds faster than rare large change. The people doing the work design the improvement. Standardize what works; the standard becomes the baseline for the next Kaizen. Problems are treasures—visibility is a virtue.</p><p><strong>Format: A 3–5 day time-boxed workshop.</strong> Cross-functional team (6–10 people) meets daily using Pareto, Ishikawa, 5 Whys, value stream mapping, and the 8 Wastes to scope, analyze, implement, and validate change by week's end, presenting to leadership with before/after data.</p><p><strong>Standard phases:</strong> Pre-work (scope, agree metric, collect baseline, secure calendars). Day 1—Understand (walk the process, build VSM, Ishikawa + 5 Whys). Day 2—Analyze (Pareto causes, design future state). Day 3—Implement (make change in real systems, IaC PRs, runbook updates). Day 4—Validate (measure new state, iterate, standardize). Day 5—Sustain & report (define cadence, handoff, present results with before/after data).</p><p><strong>Non-negotiables:</strong> Cross-functional team with calendars cleared. Decision authority in the room (or one text away). Predefined baseline metric and success target. Something real ships by day 5. Baseline and new measurement use the same data source (apples-to-apples).</p>",
  csamExample: "<p>A CSAM inherits a customer 7 months into a \"DevOps transformation\" with no visible wins. The CTO is openly skeptical of further CSA hours. The CSAM proposes: a 5-day Kaizen on a single value stream—deployment lead time for the checkout service. Pre-work: collect 90 days of deploy data. Day 1: value stream map reveals 6-hour lead time; 80 min in manual gates, 4 min in actual fix. Day 2: design unified checkout-deploy runbook + ChatOps `\\/deploy` command. Day 3: ship it. Day 4: measure on 10 real deploys—75 minutes end-to-end, 4x/day instead of 2x/week. Day 5: demo to CTO with live metric. The CTO funds the next 4 Kaizens on the spot. One week of validated change opens what 7 months of planning could not.</p>",
  csaExample: "<p>A CSA's customer has a Cosmos DB container throwing 412 429-errors per day, limiting throughput. Pre-work: 90 days of telemetry. Day 1: Pareto + Ishikawa + 5 Whys identifies hierarchical partition key (HPK) + autoscale + SDK upgrade + index tuning as the fix. Day 2: design the change (HPK migration, SDK update, IaC module lock). Day 3: implement in prod; deploy SDK upgrade across services; autoscale warmup. Day 4: measure against day-1 baseline—38,000 RU/s → 9,200 RU/s; 429s → 0; monthly cost $11,400 → $2,800. Day 5: readout; standardize the IaC module; calendar 6 more Kaizens on adjacent containers. A single week of execution becomes the customer's repeatable pattern.</p>",
  recap: [
    "Kaizen ships a working improvement in 5 days; it's execution format, not a magic timeline compressor—respect its limits.",
    "Pre-work and decision authority are non-negotiable; without a predefined baseline, you can't declare victory at the end.",
    "Five-day phases: Understand (day 1), Analyze (day 2), Implement (day 3), Validate (day 4), Sustain & report (day 5).",
    "Use Kaizen when diagnosis exists and fix can ship in days; avoid for design problems needing months of architecture.",
    "Measure before/after with the same query; standardize via IaC, Policy, runbooks; calendar the next Kaizen before day 5 ends."
  ],
  questions: [
    {
      prompt: "A customer is 8 months into a &ldquo;digital transformation&rdquo; with no shipped improvements. What is the strategic value of running a Kaizen now?",
      options: [
        "It extends the transformation program timeline so more planning can occur.",
        "It ships a measured, working improvement in 5 days, rebuilding customer trust and justifying further engagement.",
        "It produces a comprehensive strategy document that aligns all stakeholders.",
        "It eliminates the need to do any other improvement work."
      ],
      correctIndex: 1,
      explanation: "A Kaizen breaks the cycle of stalled transformation by shipping real, <strong>measured results</strong> in days. The visible win &mdash; often demoed to leadership on day 5 &mdash; rebuilds momentum faster than any roadmap."
    },
    {
      prompt: "Which is a non-negotiable requirement for Kaizen success?",
      options: [
        "The customer&rsquo;s CEO must attend all five days.",
        "Cross-functional team members have calendars cleared, and decision authority is present in the room.",
        "All 47 engineers in the department should attend so everyone is trained.",
        "Code must ship by day 2 with days 3&ndash;5 reserved for other activities."
      ],
      correctIndex: 1,
      explanation: "Kaizen depends on <strong>full participant commitment</strong> and someone in the room with authority to approve changes. Half-attended teams fail because context-switching kills focus."
    },
    {
      prompt: "On day 2, the team designs a change that requires tooling approval from a committee meeting in 4 weeks. What should you do?",
      options: [
        "Redesign the improvement to avoid the tooling cost so the team can ship it by day 5.",
        "Pause the Kaizen and reschedule it after the budget committee meets.",
        "If the required decision-maker isn&rsquo;t in the room (or one text away), the scope was misframed &mdash; reframe to what current authority can approve in 5 days.",
        "Have the team implement a partial workaround and commit to the full change later."
      ],
      correctIndex: 2,
      explanation: "The <strong>decision authority</strong> requirement is non-negotiable. A Kaizen that ends with &ldquo;we&rsquo;ll need approval next month&rdquo; is a planning meeting, not a Kaizen."
    },
    {
      prompt: "Pre-work for a Kaizen reveals the team hasn&rsquo;t defined a baseline metric or success target. How should you proceed?",
      options: [
        "Start the event anyway and define the metric on day 1 during kickoff.",
        "Go back and lock down a specific, measurable baseline and a target before day 1.",
        "Skip pre-work and use workshop time to brainstorm possible metrics.",
        "Focus on process improvements instead since reliability metrics are hard to define."
      ],
      correctIndex: 1,
      explanation: "A Kaizen without a predefined <strong>baseline and success metric</strong> cannot declare victory at the end. Pre-work must lock this in; it protects the event&rsquo;s credibility."
    },
    {
      prompt: "A customer asks for a Kaizen on &ldquo;redesigning our multi-region active-active database topology.&rdquo; The work genuinely needs months of design. Is this the right scope?",
      options: [
        "Yes, because Kaizen compresses any timeline into 5 days.",
        "Yes, as long as you extend it to 10 days instead of 5.",
        "No &mdash; Kaizen only works when the diagnosis exists and the fix can ship in days. Respect the format&rsquo;s limits.",
        "Yes, but only if all senior architects attend full-time."
      ],
      correctIndex: 2,
      explanation: "Kaizen is a <strong>format for execution</strong>, not a magic timeline compressor. For work that genuinely needs months of architecture, Kaizen will fail."
    }
  ]
},

"kanban": {
  id: "kanban",
  title: "Kanban: Flow Control for Continuous Work",
  group: "Workplace, Flow & Standardization",
  duration: "30 min",
  executiveSummary: "Kanban—'signboard'—is a visual workflow system that limits work-in-progress (WIP) to expose bottlenecks and pull work through a value stream at sustainable pace. By Little's Law, lead time scales with WIP; halve WIP and you halve lead time at the same throughput. For CSAs, Kanban is the operational complement to Pareto/Ishikawa/Kaizen: those identify the right work; Kanban flows it through to done. Use Kanban to manage CI cycles, incident-response queues, modernization backlogs, customer onboarding pipelines, and your own engagement backlog. The headline mechanics—visualize, limit WIP, manage flow, make policies explicit, evolve—apply equally to 4-person SRE teams and 40-person platform orgs.",
  whatYouGain: [
    "Cut lead time by half without adding people—WIP limits force focus and eliminate context-switching waste; Little's Law makes this math visible",
    "Expose bottlenecks immediately—aging WIP is the leading indicator of trouble; fix the constraint before it cascades",
    "Finish what you start—explicit Definition of Ready and Done prevents half-done work from accumulating and poisoning the backlog",
    "Run CI cycles, incident response, and modernization flows with visible throughput and lead time metrics"
  ],
  explanation: "<p><strong>Six core practices (David Anderson):</strong></p><ul><li><strong>Visualize:</strong> Every item is a card on a board. Columns represent stages. Nothing is invisible.</li><li><strong>Limit WIP:</strong> Each column has a maximum. When full, upstream stops or downstream finishes. This is the discipline that works.</li><li><strong>Manage flow:</strong> Watch lead time and throughput, not utilization. High utilization hides bottlenecks.</li><li><strong>Make policies explicit:</strong> What does \"Done\" mean? What is \"Ready\"? Write it on the board.</li><li><strong>Implement feedback loops:</strong> Daily standup, replenishment meeting, service delivery review, risk review, strategy review.</li><li><strong>Improve collaboratively:</strong> Change the board based on data; this is PDCA applied to the board itself.</li></ul><p><strong>Core mechanics:</strong> Pull (downstream pulls when capacity opens; upstream cannot push). Swim lanes (by type or service area). Classes of service (Standard, Expedite, Fixed-date, Intangible). Metrics: Lead time (submitted to delivered), Cycle time (started to delivered), Throughput (delivered per period), Aging WIP (how long current items have been in progress). Cumulative Flow Diagram visualizes lead time and WIP at a glance.</p><p><strong>How to use:</strong> Map the actual workflow as columns (don't invent stages; reflect reality). Set initial WIP limits (rule of thumb: WIP ≈ team size for Doing). Define Ready and Done per column. Hold short ceremonies (daily standup, weekly replenishment). Track and surface aging. Respect limits when it hurts—that's when they're working.</p>",
  csamExample: "<p>A CSAM's customer has 14 platform-team initiatives in flight across 5 engineers; nothing shipped in 11 weeks. The CSAM introduces a simple 3-column Kanban (Ready → Doing → Done) with a WIP limit of 5 on Doing. Within 2 weeks, 4 initiatives finished. Within 6 weeks, 11 shipped. The team didn't add capacity; their focus did. The CSAM also brought visibility to the replenishment meeting: items pulled by Pareto impact, not stakeholder pressure. The top quartile of initiatives by value drove 80% of throughput.</p>",
  csaExample: "<p>A CSA's customer runs incident response on a large AKS cluster. Incident channel is chaos: alerts flood in, on-call context-switches between triage/assign/remediate/postmortem with no visible queue. The CSA proposes a Kanban (Triage → Assigned → Debugging → Fix → Validation → Closed) with WIP limits: Assigned ≤ 8, Debugging ≤ 5, Fix ≤ 3. Board is pinned in the channel. Within a week, aging incidents visible as bottleneck: 3 stuck in Assigned for 4+ hours. Root cause: assignment required on-call manager availability. New policy: on-call manager staffs Assigned review every 30 min. Lead time normalized to 2 hours. The board didn't add capacity; it exposed constraint + forced a policy change that fixed it.</p>",
  recap: [
    "Kanban exposes bottlenecks through WIP limits—when a column fills, upstream stops or downstream finishes; the constraint becomes visible.",
    "Little's Law: lead time scales with WIP. Halve WIP and you halve lead time at the same throughput—focus beats capacity.",
    "Visualize work, limit WIP per column (rule of thumb: WIP ≈ team size), define Ready and Done, hold feedback ceremonies, improve via data.",
    "Aging WIP is the leading indicator—items aging past expected cycle time highlight stalls; fix the stall, not the aging metric.",
    "Respect WIP limits when the calendar gets uncomfortable; that's when they're doing their work—forcing visible tradeoffs instead of invisible overload."
  ],
  questions: [
    {
      prompt: "A team has 14 initiatives in flight across 5 engineers; nothing has shipped in 11 weeks. You set a WIP limit of 5 on the Doing column. What is the fundamental mechanism that should improve throughput?",
      options: [
        "The team gains visibility into the backlog, so motivation increases.",
        "Limiting WIP forces the team to finish work instead of context-switching &mdash; reducing lead time and increasing actual throughput.",
        "Engineers will work faster because they see the board during standups.",
        "The board automatically prioritizes which work is most important."
      ],
      correctIndex: 1,
      explanation: "By Little&rsquo;s Law, lead time scales with WIP. A <strong>WIP limit</strong> removes contention and forces focus. The team doesn&rsquo;t work harder &mdash; they finish what they start, so throughput improves."
    },
    {
      prompt: "A team proposes six columns for an incident board. Which approach is correct?",
      options: [
        "All six stages, because they are all important.",
        "Only the stages that represent real handoffs and bottlenecks in the workflow.",
        "Just Open and Closed, to keep the board simple.",
        "Five stages, excluding &ldquo;waiting for customer input&rdquo; because that&rsquo;s external."
      ],
      correctIndex: 1,
      explanation: "Columns map to <strong>real workflow stages</strong>, not every status variation. &ldquo;Waiting for customer&rdquo; belongs in a Blocked lane &mdash; it&rsquo;s not active work. Extra columns hide flow problems instead of exposing them."
    },
    {
      prompt: "A VP asks to push a 5th item into a Doing column with a WIP limit of 4. What is the correct response?",
      options: [
        "Break the WIP limit this once because the VP's request is urgent.",
        "Quietly add the new work to a separate &ldquo;Expedite&rdquo; lane outside the WIP limit.",
        "Surface the conflict on the board, make the tradeoff explicit, and let the VP choose what to pause or stop.",
        "Reject the VP's request because the Kanban policy forbids it."
      ],
      correctIndex: 2,
      explanation: "The WIP limit&rsquo;s point is to <strong>force a visible tradeoff</strong>. When the VP sees the actual list of current work, they often choose differently than they would if the conflict was invisible."
    },
    {
      prompt: "A customer asks how to decide which of 40 modernization apps to pull into the pipeline. What's the right answer?",
      options: [
        "Kanban decides priority automatically based on app complexity.",
        "Use Pareto to rank applications by business value, then use Kanban to flow them through the migration pipeline.",
        "Pull applications in the order they were requested, without prioritization.",
        "The Kanban board replaces the need for any other planning tool."
      ],
      correctIndex: 1,
      explanation: "Kanban is an <strong>execution engine</strong>, not a decision engine. Pareto answers &ldquo;what&rdquo;; Kanban answers &ldquo;how do we move it.&rdquo;"
    },
    {
      prompt: "A board shows a rising count of cards aging past the expected cycle time, even though the team feels &ldquo;just as busy as ever.&rdquo; What does this indicate?",
      options: [
        "The team needs to hire more engineers.",
        "The WIP limit is too low and should be raised.",
        "Something is blocking work or causing stalls; aging WIP is a leading indicator of trouble that needs investigation.",
        "The cycle-time metric is unreliable; switch to utilization."
      ],
      correctIndex: 2,
      explanation: "Aging WIP is the <strong>leading indicator</strong>. High utilization can hide bottlenecks &mdash; waiting on approvals, dependencies, or skills. Aging is the signal to stop and investigate, not to raise WIP."
    }
  ]
},
"hoshin-kanri": {
  id: "hoshin-kanri",
  title: "Hoshin Kanri (X-Matrix)",
  group: "Strategy & Governance",
  duration: "30 min",
  executiveSummary: "Hoshin Kanri (Policy Deployment) translates a small number of strategic objectives into cascading annual and quarterly improvement projects with explicit ownership and measurable progress at every level. The signature X-Matrix connects long-term objectives, annual breakthroughs, improvement projects, and KPIs/owners on a single page, replacing scattered initiatives with a coherent strategic narrative.",
  whatYouGain: [
    "Narrow portfolio chaos: reduce 47 scattered initiatives to 3–5 strategic breakthroughs",
    "Cascade alignment: trace every project from C-level down to team level with explicit ownership",
    "Replace planning theater: transform annual strategy into a living quarterly review discipline",
    "Lock accountability: assign one owner and one KPI to every objective at every level",
    "Unlock throughput: teams focused on what matters see project completion rates double"
  ],
  explanation: "<p>Hoshin Kanri is the discipline of translating breakthrough strategic objectives into cascading improvement projects with measurable progress at every level. Most CI programs accumulate initiatives without coherence; Hoshin imposes one.</p><p><strong>The X-Matrix</strong> is the signature artifact — a one-page diamond linking four quadrants: long-term objectives (3–5 year vision), annual breakthrough objectives, top-priority improvement projects (DMAIC, Kaizen, programs), and KPIs with accountable owners. Correlation marks (●, ○) show which project supports which objective owned by whom.</p><p><strong>The cascade</strong> has four typical layers: Enterprise (3–5 yr long-term objectives), Division/BU (annual X-Matrix + breakthroughs), Team (quarterly bowler charts + A3s), and Individual (monthly project commitments). The <strong>Catchball process</strong> is the beating heart — objectives are negotiated up and down, not dictated. Leaders propose; teams respond with feasibility; iterate until aligned.</p><p><strong>Quarterly operations:</strong> Each team maintains a Bowler chart — a simple table showing planned vs. actual per month for each KPI, with red/green status. Red KPIs get attention; red KPIs without a plan escalate. Annual refresh triggers another round of Catchball and reset.</p><p><strong>When to use it:</strong> Hoshin is right for CI-mature orgs where leadership wants strategic CI, not scattered tactical fixes. Skip it for early-stage programs — establish PDCA discipline and run a few Kaizens first. Hoshin formalizes what's already happening; it does not jumpstart it.</p>",
  csamExample: "<p>A CSAM discovers that a customer's platform org has 47 active improvement initiatives. None is tied to a measurable customer outcome or to the customer's stated business goals (reliability, cost reduction, faster time-to-onboard). The CSAM facilitates a Hoshin session that cascades the customer's strategic intent into 3 annual breakthrough objectives: 99.95% reliability on top-10 services, 25% reduction in cloud spend, and onboarding time from 4 weeks to 1. The 47 initiatives are re-mapped: 18 support one of the 3 breakthroughs; 29 are paused or killed. The CSAM then uses the X-Matrix in quarterly business reviews to show the customer their strategic progress and align future service improvements to their outcomes.</p>",
  csaExample: "<p>A CSA is designing a 12-month Azure reliability program for a customer. Rather than start with a backlog of 12 isolated DMAIC projects (logging fixes, circuit breaker patterns, DR rehearsals), the CSA facilitates Hoshin to define: Long-term objective = industry-leading reliability. Annual breakthrough = 99.95% uptime on top-10 services. Supporting projects include: 6 DMAIC (Root cause on top incident signatures), 3 Kaizen (SRE toil reduction), 1 program (AKS zone-redundancy + Azure Backup). The X-Matrix links each DMAIC project to the KPI (uptime %) and assigns a DRI per project. Quarterly bowler charts show which projects are on-track (green) or slipping (red); red projects trigger escalation for engineering capacity or blocked dependencies. Year-end result: 8 of 10 top services hit the 99.95 target.</p>",
  recap: [
    "Hoshin Kanri translates 3–5 strategic objectives into cascading improvement projects with explicit ownership",
    "The X-Matrix (one page) links long-term vision, annual breakthroughs, projects, and KPIs with correlation marks",
    "Catchball is the iterative negotiation of objectives up and down the org — not top-down dictation",
    "Bowler charts (monthly planned vs. actual per KPI) are the operational dashboard; red KPIs trigger escalation",
    "Use Hoshin for mature CI orgs seeking strategic focus; skip it for early-stage programs",
    "Annual refresh resets Catchball; quarterly reviews defend focus against initiative creep"
  ],
  questions: [
    {
      prompt: "What does the X-Matrix link together in Hoshin Kanri?",
      options: [
        "Budget, timeline, resources, and constraints.",
        "Long-term objectives, annual breakthroughs, improvement projects, and KPIs with owners.",
        "Departmental goals, team targets, individual tasks, and performance ratings.",
        "Historical data, current baseline, improvement targets, and forecast."
      ],
      correctIndex: 1,
      explanation: "The X-Matrix is a one-page diamond linking <strong>long-term objectives (north), annual breakthroughs (south), priority projects (west), and KPIs / owners (east)</strong>, with correlation marks showing which project supports which objective."
    },
    {
      prompt: "How many long-term objectives should a Hoshin plan typically hold?",
      options: [
        "10 to 15 to ensure comprehensive coverage.",
        "25 to 30 for a portfolio approach.",
        "3 to 5 to enforce focus over portfolio.",
        "1 to 2 to simplify decision making."
      ],
      correctIndex: 2,
      explanation: "Hoshin limits strategic objectives to <strong>3–5 per cycle</strong> — focus over portfolio. Too many objectives make the strategy incoherent."
    },
    {
      prompt: "What is the catchball process in Hoshin Kanri?",
      options: [
        "Marketing slogans for the strategy.",
        "The iterative negotiation of objectives up and down the organization until alignment is reached.",
        "The final approval meeting where leadership signs off on the plan.",
        "The implementation phase where teams execute their assigned projects."
      ],
      correctIndex: 1,
      explanation: "Catchball is the <strong>negotiation process</strong> — objectives proposed downward, feasibility concerns returned upward, iterating until aligned. The cascade is not top-down dictation."
    },
    {
      prompt: "What is the bowler chart in Hoshin Kanri?",
      options: [
        "A chart showing team rotation and on-call schedules.",
        "A simple table tracking planned vs. actual performance per month for each KPI.",
        "A ranking of employees by performance ratings.",
        "A visualization of resource allocation across projects."
      ],
      correctIndex: 1,
      explanation: "The <strong>bowler chart</strong> is a per-KPI table of planned vs. actual each month with red/green status. It's Hoshin's operational dashboard, updated in quarterly reviews."
    },
    {
      prompt: "When is Hoshin Kanri the right approach to use?",
      options: [
        "When you are in the early stages of establishing CI discipline.",
        "When a mature customer wants strategic CI tied to measurable outcomes — not scattered tactical initiatives.",
        "When deploying a single improvement project to one team.",
        "When you need to respond quickly to urgent operational issues."
      ],
      correctIndex: 1,
      explanation: "<strong>Hoshin is for mature CI programs</strong> where leadership wants strategic focus. Early-stage programs should establish PDCA discipline and run a few Kaizens first; Hoshin formalizes what's already happening."
    }
  ]
},

"project-charter": {
  id: "project-charter",
  title: "Project Charter",
  group: "Strategy & Governance",
  duration: "30 min",
  executiveSummary: "A Project Charter is a one-page authorization document that aligns sponsor, lead, scope, success metric, timeline, and team before improvement work begins. It prevents scope drift by locking the problem statement, goal, and boundaries with sponsor signature — converting ambiguous intent into a defendable contract.",
  whatYouGain: [
    "Stop scope creep: explicit problem statement and locked scope defend against 'while we're here' requests",
    "Align sponsor commitment: signature converts wish list into binding authorization",
    "Name the team and time: realistic percentage-allocations prevent under-resourced projects",
    "Define success upfront: measurable goals tied to CTQ prevent vague 'improvement'",
    "Unlock the Define phase: charter IS the DMAIC Define deliverable — no extra ceremony"
  ],
  explanation: "<p>A Project Charter is a one-page contract that authorizes an improvement project and aligns its sponsor, lead, scope, success metric, timeline, and team before work begins. The most common improvement-project failure is scope drift — \"while we're in there, can we also...?\"; the charter is the institutional answer.</p><p><strong>Standard sections:</strong> Problem statement (what's wrong, where, since when, magnitude), Business case (why it matters now, $ or strategic value, COPQ link), Goal (specific, measurable, time-bounded), In scope (what's included, tied to SIPOC), Out of scope (explicit exclusions — at least 3), Team (lead, sponsor, members, %time, advisors), Milestones/tollgates (Define-Measure-Analyze-Improve-Control dates), Risks &amp; dependencies (top 3–5, mitigation owner), and Signatures (sponsor, lead, process owner).</p><p><strong>How to write it:</strong> Start with the problem statement (specific, no solutions). Draft the business case (tie to dollars or strategic objective). Set the goal (SMART, pulled from CTQ if available). List scope and explicit exclusions (the exclusions are as important as the inclusions). Name the team and realistic time commitment. Set milestones with tollgate dates. List top risks with mitigation owners. Get signatures — without them the charter is a wish list.</p><p><strong>Anti-pattern:</strong> naming a solution in the problem statement (e.g., \"Deploy ArgoCD to improve deploys\"). This prejudges Analyze. Restate as the problem (\"Mean deployment time is 47 min vs. target 10 min\") and let DMAIC find the right countermeasure.</p><p><strong>When to skip it:</strong> Charters are overkill for same-day fixes and standalone PDCA cycles by a single engineer. Use them for DMAIC Define, Kaizen pre-work (3+ days), cross-team projects, and Belt certification.</p>",
  csamExample: "<p>A CSAM is scoping a 12-week improvement engagement with a customer's payments platform team. The team has three different leaders and three different expectations of what 'faster checkout' means. Rather than 6 weeks of rework, the CSAM insists on a charter-writing workshop: sponsor alignment, problem statement (current checkout LT = 387 sec vs. target 90 sec, 4 deploys/week vs. target 8/day), business case ($600K/quarter in abandoned carts), goal (LT ≤90 min, 4 deploys/day, 90 days), scope (checkout flow + CI/CD, not payment-processor integration), and team commitment (lead + 2 engineers at 50% each). Signatures lock everyone. The charter exercise itself resolves the three different expectations; the next 4 weeks ship the actual project. The CSAM then uses the charter in the 90-day QBR to show progress against the agreed goal and business case.</p>",
  csaExample: "<p>A CSA is defining a DMAIC project to fix ImagePullBackOff failures that cause 41% of customer AKS incidents. Problem statement: 'ImagePullBackOff signature = 41% of incidents, 18 occurrences/week, costing $85K/mo in incident response.' Business case: 'Fix linked to Hoshin reliability objective; zero of this signature = unplanned availability gain.' Goal: 'Zero ImagePullBackOff signature, 90 days.' Scope: 'Registry auth failures, image manifest issues, quota limits.' Out of scope: 'Other pod-failure signatures (separate projects), image scanning.' Team: 'SRE lead (100%), Platform engineer (50%), CSA (advisory).' Milestones: Define (week 1), Measure (week 3), Analyze (week 6), Improve (week 10), Control (week 12). Risk: 'Registry team capacity — mitigation owner = SRE lead.' Charter signed by platform VP, SRE lead, and CTO. Quarterly review shows 8 weeks to zero incidents; Control phase establishes monitoring and runbook.</p>",
  recap: [
    "Project Charter is a one-page contract that authorizes a project and locks sponsor commitment with signatures",
    "Standard sections: problem statement, business case, goal (SMART), scope, explicit out-of-scope, team, milestones, risks",
    "Anti-pattern: naming a solution in the problem statement — let DMAIC Analyze discover the right countermeasure",
    "Explicit out-of-scope items are as important as inclusions — they defend against scope creep months later",
    "Use charters for DMAIC Define, Kaizen pre-work, cross-team projects, and Belt certification projects",
    "Without sponsor signature the charter is a wish list — signatures convert intent into binding commitment"
  ],
  questions: [
    {
      prompt: "What is the most common improvement-project failure that a Project Charter prevents?",
      options: [
        "Insufficient budget for the project.",
        "Scope drift — \"while we're in there, can we also...\" requests.",
        "Slow approval from leadership.",
        "Lack of technical talent on the team."
      ],
      correctIndex: 1,
      explanation: "The charter forces explicit problem statement, goal, and scope <em>before</em> work starts and locks sponsor commitment with a signature. It is the answer to <strong>scope drift</strong> later."
    },
    {
      prompt: "Which item is essential to include in the charter — even if the team wants to skip it?",
      options: [
        "Branding guidelines and slide templates.",
        "Explicit Out-of-Scope items (at least three).",
        "A historical timeline of every prior attempt.",
        "Email addresses of every individual stakeholder."
      ],
      correctIndex: 1,
      explanation: "Explicit <strong>exclusions are as important as inclusions</strong>. They prevent \"while we're here\" scope creep and make the boundaries enforceable months later when new requests arrive."
    },
    {
      prompt: "Which is an anti-pattern when writing the problem statement on a charter?",
      options: [
        "Stating the magnitude (size, frequency, when it started).",
        "Linking the business case to COPQ.",
        "Naming the solution in the problem statement — e.g., \"Deploy ArgoCD to improve deploys.\"",
        "Tying the goal to a CTQ."
      ],
      correctIndex: 2,
      explanation: "Naming a solution <strong>prejudges Analyze</strong>. Restate as the problem (\"deploys take too long — mean 47 min vs. target 10 min\") and let DMAIC find the right countermeasure."
    },
    {
      prompt: "When is a Project Charter typically overkill?",
      options: [
        "DMAIC Define phase.",
        "Kaizen events lasting 3+ days.",
        "A same-day fix or a standalone PDCA cycle by a single engineer.",
        "Belt certification projects (Green/Black)."
      ],
      correctIndex: 2,
      explanation: "Charters are mandatory for DMAIC, Kaizen pre-work, and cross-team projects. They are <strong>overkill for same-day fixes</strong> and solo PDCA cycles — ceremony should match scale."
    },
    {
      prompt: "Why do signatures (sponsor, lead, process owner) matter on a charter?",
      options: [
        "They satisfy a compliance audit requirement.",
        "Without them the charter is a wish list — signatures lock sponsor commitment and unblock the team to spend cycles.",
        "They're needed to publish to the company intranet.",
        "They prove the team read the document."
      ],
      correctIndex: 1,
      explanation: "Signatures convert a draft into a <strong>commitment</strong>. The sponsor agrees to clear blockers; the lead owns delivery; the process owner accepts the controlled process. Without these, the charter is decoration."
    }
  ]
}
};

