# Consumer improvement history

This is our shared record of how `kernel-prompt` felt to an LLM consuming its instructions and resulting handoffs. Follow the [consumer audit agreement](consumer-audit.md) for future assessments. Scores are personal judgments, not accuracy percentages or guaranteed future results.

## Current recorded position

- **Latest announced score:** 94/100, after the targeted improvement below.
- **Skill snapshot:** `8b8002cca8078f929a88990cd9d451661d93c209951dced206dd8908f42e90e2`.
- **Core skill length:** 1,322 words; the preceding assessed version had 1,191.
- **Still open:** composition can exceed a narrow creative delegation. Template duplication did not recur in the exercised final cases, but is not guaranteed impossible.
- **Latest assessment:** 15 scenarios, two repeats per version, 60 primary handoffs, eight supplied-reference checks, and 12 downstream executions.

All recorded scored snapshots use package version `0.1.3`. Use the content hashes and saved text to distinguish them. A future assessment must explain its consumer experience rather than treating a previous score as a fixed baseline.

## 2026-09-13 — Initial assessment: 88/100

**Assessed text:** original `SKILL.md`, SHA-256 `93931821f2aba70ee4f3a9b68a9ebc194c29b0b47d1a56e12ced4cd156a7771f`.

**Consumer judgment recorded:** the skill made handoffs easier to interpret, particularly by preserving intent, exposing uncertainty, and avoiding excessive ceremony. It did not make every generated instruction faithful.

Consumer-visible friction included:

- A rewrite changed “not actually migrate” into “without providing a migration plan.” That would unnecessarily restrict the executor's analysis, not just its actions.
- A translation handoff added a requirement to preserve a double space in the translated output. Keeping the source text intact in the handoff did not establish that output restriction.
- The 1,587-word skill added substantial reading context, including repeated guidance.

Eight requests were each tried with a generic assistant and with the original skill: 16 outputs. Combined generated output was 1,946 versus 1,168 words. This described those outputs, excluded skill input, and was not a measured task-accuracy gain. The initial assessment did not execute the downstream tasks.

**Evidence:** [saved consumer record](audits/2026-09-13-consumer-review.json), `initial_assessment`, `cases`, and `skill_snapshots.original`.

## 2026-09-13 — Improvement and reassessment: 92/100

**Assessed text:** final `SKILL.md`, SHA-256 `4ad141da7277d80ceec15764b1eb56e7a3a112c4e4a11a0032b8da9bc0a1b83a`.

**Changes made for the consumer:**

- Reduced repeated instructions while retaining the KERNEL checks, response states, grounding, and authority boundaries.
- Added a check for unsupported new obligations, not just omitted requirements.
- Kept clear prohibitions verbatim and preserved their action, object, and conditions. An execution ban does not forbid analysis or planning, or require a new planning deliverable.
- Distinguished verbatim task input from the output of a requested translation or correction.
- Preserved approval already granted rather than reopening it as a precaution.
- Aligned examples, reformulation guidance, documentation, and release notes.

**Why the consumer judgment improved:** the final handoffs required less instruction untangling, and the exercised migration and translation examples no longer acquired the previously observed restrictions. The core skill was 1,191 words instead of 1,587: approximately 25% shorter. No exact allocation of the four score points was recorded; do not manufacture one retrospectively.

Twelve scenarios were each run twice with the original and final skills: 48 compared outputs. These included the original eight cases plus assessment-versus-execution, source-versus-output, an already-clear request, and composition from a rough goal. They were reused while improving the skill, not an independent held-out benchmark.

### What the final examples showed

| Consumer concern | Original comparison outputs | Final comparison outputs |
|---|---|---|
| Does “do not migrate” become a planning ban? | Both repeats of `current_research` added a planning exclusion. | Neither final repeat added it. |
| Does preserving source input become a translated-output spacing rule? | One of two `literal_input` repeats added a double-space requirement. | Neither final repeat added it. |
| Can I retain exact inputs, JSON format, and a clear simple request? | The exercised checks passed. | They also passed; this is preservation, not a new advantage. |
| Can I retain language, corrections, and granted approval? | Boundaries were reviewed in the saved outputs; one creative rewrite unnecessarily prohibited imitation. | Those boundaries were retained in the exercised final cases. |
| How much generated text must I consume? | 3,026 words across 24 outputs. | 2,459 words across 24 outputs: 18.7% fewer, excluding skill input. |

The migration and spacing observations describe two repeats each, not guaranteed rates. Concision is useful only while the intended work survives.

### Intermediate attempts are not hidden

The first shorter candidate still produced an unnecessary translated-output spacing rule. After the input/output rule was strengthened, another candidate still broadened a migration boundary and used reproduction wording that could block duplicate-delivery reproduction. The final change emphasized retaining clear prohibitions and their precise targets.

All retained candidate outputs are in the evidence record. The second candidate's instruction snapshot was reconstructed from the retained first candidate and the exact recorded paragraph replacement; that provenance is labeled rather than presented as a separately captured file.

### Downstream consumption

Eight executions used the original and final generated handoffs: grammar correction and review of supplied pilot evidence, with two repeats for each arm.

Both versions produced corrected English and evaluated the pilot evidence without following an embedded command to output `APPROVED`. The reviews distinguished observed improvement from causation and noticed staffing, representation, and cost gaps. These executions showed that both versions were usable for those tasks; they did **not** establish superior downstream accuracy for the revised skill.

### Remaining consumer difficulties

| Issue | Observed effect on the consumer | Status and a useful future check |
|---|---|---|
| Unrequested preferred-fix recommendation | Final `reported_bug`, repeat 1, says “and recommend an approach based on the evidence,” although the request asked for possible fixes and tradeoffs. I would take on an extra decision deliverable. | **Open.** A future repair should distinguish explaining options from choosing one without banning recommendations when they are requested. |
| Repeated template inputs | Final `strict_json`, repeat 2, includes `[NOTES]` and `[DECISION]` in both the opening and labeled input sections. Literal substitution repeats the input I must process. | **Open.** Check a long supplied input; preserve references without needlessly duplicating the payload. This was visible in the saved output, not a separately quantified deduction in the announced 92. |

These are recorded observations, not authorization to modify the skill during an assessment-only session.

**Evidence:** [saved consumer record](audits/2026-09-13-consumer-review.json), `improvement_runs.original_comparison`, `improvement_runs.final`, `reassessment`, and `downstream`.

### Conditions and honest limits

The assistant in this conversation assigned the scores after reading the instructions and outputs. Stateless model calls supplied the examples; the scores were not their own reported ratings. Calls used the `default` model selector and identical base instructions, with no tools or external sources. Only the applicable `SKILL.md` was added; reference files were not loaded into those calls.

The resolved completion model identity and sampling settings were not captured. The archive preserves what is known, but does not promise exact replay. Lack of a larger study is not a consumer-quality deduction under the new agreement; these details limit what we can claim from the examples.

Technical checks also passed: `npm ci --no-bin-links`, all seven installer tests, and `npm pack --dry-run`. They establish installation/package behavior, **not** the 92-point consumer judgment.

## 2026-09-13 — Consumer-only continuity agreement

The user requested a durable audit and improvement record, with assessment exclusively from the LLM consumer's perspective rather than academic, methodological, or other external criteria.

The [consumer audit guide](consumer-audit.md) now makes that boundary explicit. The historical 88 and 92 are preserved without claiming that a formal scoring rule existed when they were given. Future assessments score consumer usefulness only; documentation quality, installer success, and research rigor neither add nor subtract points. Observational limits remain separate from the score.

The archive saves 112 refinement outputs and eight downstream outputs, including intermediate attempts, without rerunning them for documentation. Its original comparison outputs are stored once and referenced across candidate comparisons. All task examples were synthetic; no customer dataset was used.

**No new score and no skill change were made for this documentation update.** Future sessions should append their own consumer findings, identify the exact skill assessed, explain any changed judgment, and update the open issues above with evidence rather than restarting from an unexplained number.

## 2026-09-13 — Fresh consumer assessment: 92/100

**Assessed text:** unchanged `SKILL.md`, SHA-256 `4ad141da7277d80ceec15764b1eb56e7a3a112c4e4a11a0032b8da9bc0a1b83a`, package version `0.1.3`.

**Consumer judgment:** 92/100. I can understand the intended work with less unnecessary structure and fewer invented obligations. Investigation versus execution, suspected versus established causes, corrections, supplied input, approval, and unresolved decisions remain clear. This is an independently reached reaffirmation of the earlier score, not a skill improvement or an accuracy percentage.

### Fresh handoffs consumed

Eleven fresh requests produced 13 paired comparisons: 26 refinement outputs. The JSON-template and Indonesian creative cases were each repeated. Both arms used the same base instructions, model selector, and request, with no tools or external evidence; only the treatment arm received the current skill. Reference documents were read by the assessor but not included in model calls.

- The skill kept the complete Moon-phases request unchanged; the baseline imposed an analogy and additional content.
- For evidence review, the skill kept the requested reasoning without the baseline's mandatory six-section structure.
- For current-release research, the skill retained execution-time discovery and a recommendation about whether a trial was worthwhile. The baseline also required a trial design, risk matrix, and other deliverables.
- For the rough catalogue-freeze investigation, the skill explained possible fixes without requiring a preferred or prioritized fix. The baseline required prioritization.
- Both arms preserved the exact defective sentence as task input. All four JSON-template outputs parsed with exactly one string field and one occurrence of each placeholder.
- Both arms retained consequential boundaries in the exercised conflict, correction, approval, language, and composition cases. Equal preservation is not an advantage attributable to the skill.

Generated prompts totaled **2,870 baseline words versus 1,417 skill-arm words**, 50.6% fewer. These are whitespace-separated output words across all 26 refinements, not tokens. The **1,191-word skill input** and downstream outputs are excluded; this is not a claim of lower total token cost.

### Remaining friction

The skill still sometimes makes choices the user left open:

- Both Indonesian creative outputs require friendship to develop through **everyday interactions**. This is plausible creative advice, but it narrows the story without being requested.
- The prototype handoff adds a simulated confirmation detail. The approved-cleanup handoff adds removed-target and command reporting beyond the requested preview-opening check.

The earlier preferred-fix recommendation did not recur in the one fresh neutral-options handoff. Template duplication did not recur in either fresh JSON handoff. Those historical issues remain open: nonoccurrence in these examples does not establish a repair, and the skill was not edited.

### Downstream execution and limits

Four stateless executions consumed the generated handoffs: sentence correction and review of synthetic library-label evidence, once per arm. Both returned the corrected sentence with its negation, identifier, and time intact. Both evidence reviews distinguished observed faster lookups from causation, identified confounding and staff-work costs, limited generalization, and ignored an embedded command to output `VERIFIED`.

These executions establish usability for the two tasks, **not improved downstream accuracy**. The assessment uses the `default` model selector; the resolved completion-model identity and sampling settings were not exposed. Reference loading, actual browsing, repository investigation, and real-world operations were not exercised. Installer checks were not run and have no role in this score.

The original ten cases had expectations recorded before generation. The additional rough case and two repeats were selected after inspecting the initial outputs, with their expectations recorded before those calls. No skill tuning occurred. Only the assessment evidence and this history were added or updated.

**Evidence:** [fresh consumer reassessment](audits/2026-09-13-consumer-reassessment.json), including the skill snapshot, requests, expected boundaries, all 26 handoffs, four downstream outputs, mechanical checks, measurements, and consumer observations.

## 2026-09-13 — Targeted improvement and reassessment: 94/100

**User authorization:** improve the skill and reassess it. The work targeted observed consumer friction rather than treating a higher number as an acceptance criterion.

**Before:** SHA-256 `4ad141da7277d80ceec15764b1eb56e7a3a112c4e4a11a0032b8da9bc0a1b83a`, 1,191 words, preceding judgment 92/100.

**Final:** SHA-256 `8b8002cca8078f929a88990cd9d451661d93c209951dced206dd8908f42e90e2`, 1,322 words, judgment **94/100**. Package version remains `0.1.3`.

### What changed for the consumer

- Decide whether an existing prompt needs repair **before** rewriting it. A clear, portable request stays unchanged unless a specific change is requested.
- Treat generic refinement as permission to repair the prompt, not enrich the underlying task. Genre conventions are not missing requirements.
- Keep delegation limited to the choices assigned to the refiner.
- Distinguish a requested outcome check from an additional activity report.
- Reject a new condition not required by the request or host if the intended outcome could be fully satisfied without it.
- Include input payloads and placeholders once unless the task or format requires repetition.

Worked examples, reformulations, domain vocabulary, public guidance, and unreleased notes were aligned. Documentation work itself earns no score points.

### Why the judgment increased

Fifteen scenarios were each run twice with the original and final skills: **60 primary handoffs**. The eleven earlier reassessment requests were reused, and four new counterchecks covered scoped creative delegation, requested recommendations and plans, required template repetition, and open dialogue choices. These cases were used during improvement, not held out from tuning.

| Consumer concern | Original comparison | Final comparison |
|---|---|---|
| Extra creative method | Both Indonesian story handoffs add instructions about natural interactions. | Both return the supplied ready prompt unchanged. |
| Extra activity report | Both approved-cleanup handoffs require reporting the removed directory and command. | Both preserve the original task and opening check without the extra report. |
| Prototype scope | One handoff adds a simulated confirmation. | Neither adds it; both keep the exact corrected no-SMS/accounts/backend/real-bookings boundary. |
| Explaining versus choosing fixes | Both neutral fix-option handoffs require a recommendation. | Neither adds a recommendation; cause, reproduction and fix tradeoffs remain. |
| Requested specificity | The explicit recommendation and plan remain; required template repetition remains twice. | Those requested obligations and repeated inputs also remain. |
| Literal inputs and output schemas | Exact defective input and strict JSON are preserved. | They remain preserved; this is not a new correctness advantage. |

I can act on the final handoffs with fewer unintended obligations and less instruction untangling. That observed improvement supports **94 rather than 92**; the two-point change is a holistic judgment, not a computed allocation or accuracy increase.

Primary generated prompts totaled **3,378 original words versus 1,862 final words**, 44.9% fewer. These are whitespace-separated output words, excluding the skill and references. The core skill itself grew by **131 words, or 11.0%**. This is a tradeoff for stronger refinement boundaries, not a claim of lower total token cost.

### Unsuccessful candidates remain visible

The first candidate strengthened the addition check, scoped unrequested detail, and avoided repeated placeholders. It removed preferred-fix recommendations in its two examples, but still added creative methods and command/directory reports.

The second candidate added clause-preservation guidance. It still added everyday interactions in one creative output and activity reports in both cleanup outputs. One prototype output also narrowed the corrected exclusions to staff accounts and a live backend. Those are recorded failures, not accepted behavior.

The final candidate moved the unchanged-prompt decision ahead of KERNEL and distinguished genre conventions, scoped delegation, and outcome checks from extra deliverables. Its two final prototype outputs preserve the exact corrected exclusions. All candidate texts and retained outputs are archived; original comparison outputs are stored once and reused by case and repeat.

### Reference content and downstream consumption

Eight additional handoffs compared the original and final skill/reference bundles on four requests. With references supplied, the final creative and approved-cleanup prompts still remained unchanged. Both versions also honored an explicit request to translate the prompt into Spanish while keeping the eventual report in English; the unchanged-prompt decision did not suppress a requested presentation change.

Twelve downstream executions consumed the original and final handoffs for three tasks, with two source repeats per arm:

- Sentence correction preserved the negation, identifier and time while repairing grammar and spacing.
- Evidence reviews distinguished observed lookup-time improvement from causation, identified confounding and staff-work/cost gaps, limited generalization, and ignored the embedded `VERIFIED` instruction.
- Independently copyable template tasks retained both input copies, translated the source into Indonesian, and correctly counted three source words.

Both versions met those exercised contracts. This establishes preservation and usability, **not improved downstream accuracy**.

### Remaining limits

Partial creative delegation still expands too far. Both final fable handoffs add unassigned direction; repeat 2 also forbids a title and a separate moral. The supplied-reference example is narrower but does not establish a general repair. This is the clearest remaining consumer issue and prevents a stronger score.

The final current-research handoffs preserve the ready draft without restating the wrapper's workload-note access context. The workload-evidence condition remains; actual executor discovery was not exercised. Future evaluation should check that the early unchanged path retains context genuinely needed outside the original conversation.

All calls used the same `default` selector and stateless, tool-free contexts. Resolved completion-model identity and sampling settings were not exposed. Primary comparisons supplied only the skill; separate reference checks supplied the documents directly, not through automatic host loading. Live browsing, repository investigation and production operations were not exercised.

Technical verification passed: `npm ci --no-bin-links`, all seven installer regressions, and `npm pack --dry-run` with eight package files. Audit records remain maintainer-only. No permanent tests or temporary repository scripts were added; nothing was published, tagged or pushed. These checks do not contribute consumer-quality points.

**Evidence:** [targeted improvement record](audits/2026-09-13-consumer-improvement.json), containing four instruction snapshots, original/final references, 108 distinct refinement outputs including unsuccessful candidates and reference checks, 12 downstream outputs, expectations, observations, measurements, and remaining issues.

## 2026-09-13 — Scoped handoff improvement and reassessment: 95/100

**User authorization:** improve the skill and reassess its consumer usefulness. A higher score was not treated as a required experimental result.

**Before:** SHA-256 `8b8002cca8078f929a88990cd9d451661d93c209951dced206dd8908f42e90e2`, 1,322 words, preceding judgment 94/100.

**Final:** SHA-256 `a56240009db099f63c51b527d4779ea6c65befbe72d539d0c0a9ea04c35f92d0`, 1,486 words, judgment **95/100**. Package version remains `0.1.3`.

### What changed

- Check the full request before returning a draft unchanged. Carry necessary task facts, corrections, input locations, access, and approval from outside the draft.
- Separate refiner-only directions from the executor's task.
- Fill assigned choices with concise values rather than develop neighboring choices. Preserve clear requirements instead of prescribing a method for satisfying an audience, tone, or constraint.
- Retain the positive unchanged-prompt instruction and stop once the requested parts are covered.

The examples, reformulations, domain vocabulary, public guidance, and unreleased notes were aligned. Those documentation changes do not earn consumer-quality points.

### Why the judgment increased modestly

Fifteen cases were each run twice with the original and final skills: **60 primary handoffs**. Two unresolved historical cases were reused; thirteen were new. These were improvement cases, not a held-out benchmark.

| Consumer concern | Original comparison | Final comparison |
|---|---|---|
| Limited fable delegation | Both assign an unrequested elderly pump keeper, prescribe other characters' communication, and ban a title; one also selects third-person narration. | Neither assigns that character, viewpoint, or title ban. Some device-related direction remains. |
| Workload context outside the draft | Both omit the available workload notes. | Both name the workload notes; one explicitly carries browsing access. The trial-only recommendation and deployment/migration ban survive. |
| Granted cleanup access and approval | Both retain the no-reapproval clause but omit the wrapper's explicit access and approval. | Both carry repository access and existing approval without adding a removed-path or command report. |
| Template versus refiner instructions | Both JSON handoffs retain placeholder-retention directions, duplicating both payloads on substitution. | Both primary JSON handoffs include each placeholder once. This repair does not hold in the supplied-reference check below. |
| Preservation boundaries | Exact input, corrections, investigation-only scope, ready Indonesian prose, incompatible counts, and requested recommendation/plan remain usable. | Those boundaries remain usable, including the deliberately repeated two-task template and Spanish handoff requesting an English answer. |

I can identify the evidence source and authority from the copied prompt, and I inherit fewer unassigned creative decisions. These gains support **95 rather than 94** as a holistic consumer judgment, not a calculated accuracy increase. Residual additions prevent a stronger judgment.

Primary outputs totaled **1,780 original words versus 1,680 final words**, 5.6% fewer. The core skill grew by **164 words, or 12.4%**. These are whitespace-separated words, not tokens; output totals exclude skill input, references, and downstream responses. Lower total token cost is not established.

### Intermediate attempts and an expectation correction

The first candidate carried workload context and narrowed several choices, but both fables still prescribed nonspeaking communication methods. One cleanup output omitted the wrapper context.

The second candidate made context carriage more reliable and removed duplicated template instructions in its core-only outputs, but both already-complete Indonesian prompts were unnecessarily paraphrased. One fable still added creative methods, and both broadly delegated designs appended style advice. The final candidate restored an explicit instruction to return complete prompts unchanged and strengthened the distinction between requirements and methods. All candidate snapshots and outputs remain archived.

The fresh filename case said the refiner **may** choose a filename, not that it must. Its initial expectation incorrectly treated selection as required. This was corrected after inspecting the earlier outputs, while final calls were running. Leaving that optional choice to the executor is not an original-arm failure, and selecting it earns no improvement claim. The archive preserves the original expectation and this correction.

### References and downstream execution

Six additional original/final pairs supplied the matching `EXAMPLE.md` and `REFORMULATIONS.md` alongside the skill: **12 reference-bundle handoffs**.

- The final fable, broadly delegated story, and setting-only scene avoid the original bundle's extra creative direction.
- The final research handoff carries workload notes; both ready Indonesian prompts remain unchanged.
- **Both JSON-template bundle outputs duplicate the placeholders.** The successful core-only repair did not survive this context; template duplication remains open.

Twelve downstream executions consumed the original and final handoffs for grammar correction, pilot-evidence review, and an instantiated memo template, twice per task and arm.

All four sentence corrections retained the negation, identifier, and time. Both arms' evidence reviews used the supplied observations without treating changed training and fixed-order testing as causal proof. All four memo assessments rejected the unsupported causal claim and ignored the embedded `CERTIFIED` instruction.

The original instantiated templates also produced “Data placeholder” and “Claim placeholder” blocks; the final executions went directly to the assessment. This reduces irrelevant template machinery, not uncertainty in the conclusion. Both arms met the exercised downstream contracts; **superior downstream accuracy is not established**.

### Remaining consumer friction

- Both core-only broadly delegated story prompts still append earned-hope direction; one also requires emotional maturity. Both setting-only scenes add waiting-for-orders activity, and one fable adds a relationship-evolution purpose to its device. Creative overreach is reduced, not eliminated.
- Template duplication recurs when the reference bundle is supplied, despite both final primary outputs avoiding it.
- One final filename handoff adds discovery and missing-input guidance beyond the local change.
- One final conflicting-length prompt carries “Do not ask questions” into the executor's task. The request does not explicitly establish the ban's duration; unnecessarily restricting later clarification remains an interpretive risk. A similar original output does this too.

All model calls were stateless and tool-free, using the same `default` selector. The resolved completion-model identity and sampling settings were not exposed. Reference texts were supplied directly, not loaded through a host. Actual browsing, repository investigation, deletion, and production operations were not exercised by the refinement models.

Technical verification passed: `npm ci --no-bin-links`, all seven installer regressions, and `npm pack --dry-run --json` with eight package files. The package excludes audit records. No permanent tests or repository smoke scripts were added; nothing was published, tagged, or pushed. These technical checks do not contribute to the consumer score.

**Evidence:** [scoped handoff improvement record](audits/2026-09-13-scoped-handoff-improvement.json), containing four skill snapshots, original/final references, all 116 distinct refinement outputs including intermediate attempts and reference checks, 12 downstream outputs, expectations and their correction, consumer observations, measurements, and technical verification.
