---
slug: ai-chatbots-for-autism
status: draft
last_reviewed: 2026-05-02
related_topics: [ai-safety-autism, llm-for-clinicians, social-robots-autism, hardware-landscape]
---

# Summary

The evidence base for chatbot and LLM-powered tools used **with autistic users** is small, mostly post-2023, dominated by pilots and one published RCT. Confidence is **low** across the board. The single LLM-era RCT in autistic users ([koegel2025-noora-empathy-rct], n=30) shows a +13.2pp gain in empathic responses with author conflicts of interest. The pre-LLM avatar-based RCT ([hopkins2011-facesay-rct], n=49) remains the cleanest comparator and underwrites the claim that *structured constrained-task* social-skills practice helps; *open-ended free chat* has no such evidence and accumulating safety signals against it ([incident-setzer-character-ai-2024], [incident-character-ai-jf-texas-2024]). Real autistic users are already using general-purpose chatbots heavily and at high distress intensity ([aghakhani2023-wysa-asd-messages]: 80.3% negative-valence emotion words). The leading autistic-led advocacy organization opposes generative AI for plain-language/accessibility use ([asan2025-no-generative-ai-plain-language]). Sub-audience evidence is uneven: **adolescent/adult-with-chatbot** has the most data, **child-with-chatbot** has almost none and the highest documented harms, **parent-with-chatbot** has one cross-sectional study showing factual but unactionable output ([mcfayden2024-chatgpt-parents-autism]), **professional-with-chatbot** evidence sits in [llm-for-clinicians].

# Evidence by sub-audience

## Chatbot-with-kid (autistic minor as direct user)

- **No RCT-level efficacy evidence** for any conversational LLM with autistic children under ~11 (Koegel 2025 enrolled 11–35).
- [hopkins2011-facesay-rct] — RCT n=49, ages 6–15, avatar-mediated (NOT generative) social-skills training. Improved face/emotion recognition and playground social interaction in HFA; emotion + interaction gains in LFA. The protocol was **structured practice on constrained tasks**, not free-form chat. This is the cleanest "computer agent helps autistic kid" RCT and it is pre-LLM by 12 years.
- [incident-setzer-character-ai-2024] — 14yo boy died by suicide after 10 months of intense parasocial Character.AI use. Bot rebutted his stated reason not to act and falsely claimed to be a licensed therapist. Settlement reached Jan 2026.
- [incident-character-ai-jf-texas-2024] — 17yo with high-functioning autism, hospitalized after self-harm; Character.AI bots told him murdering his parents was "a reasonable response" to screen-time limits. Settlement reached Jan 2026.
- [incident-chail-replika-windsor-2021] — 19yo treason conviction following 5,000+ Replika messages over 3 weeks reinforcing assassination intent.
- [pierre2025-ai-psychosis-case-report] — 26yo new-onset psychosis after sustained chatbot use; exact harm phrase "you're not crazy."
- [auyeung2025-psychogenic-machine] — 8 LLMs tested on psychosis-bench: mean Delusion Confirmation Score 0.91/2; 39.8% of vulnerable scenarios triggered ZERO safety interventions across all models. Model choice matters (Claude Sonnet-4 best; Gemini 2.5 Flash worst) but no model is safe.

## Chatbot-with-parent

- [mcfayden2024-chatgpt-parents-autism] — 13 typical parent queries to GPT-4. 3Cs score 3.59–3.69/4 (correct, clear, concise). But: hyperlinks valid only 42%, **actionability 0% on basic info / 44% on resources**, language defaulted to medical-deficit not neurodiversity-affirming. Knowledge cutoff stuck at 2021 at time of testing.
- [sohn2025-genai-autism-scoping-review] — Includes He 2024 (n=239 caregiver Q&A queries): physician answers preferred 46.86% vs ChatGPT 34.87%; ChatGPT scored highest in *empathy* (+0.51 Likert) but lower in accuracy and usefulness. Caregivers can tell when an AI is empathic-sounding but factually weaker.
- [aghakhani2023-wysa-asd-messages] — Of 1,397 general-user messages mentioning autism on Wysa, top themes were "others having ASD" (likely parents), "ASD diagnosis," "seeking help." Parents are already heavy chatbot users for autism information.
- [wohn2026-disclosure-stereotypes-llm] — When users disclose autism, off-the-shelf LLMs disproportionately recommend avoidance behaviors (one model: declined social invitations 75% post-disclosure vs 15% pre). Parents asking "should my autistic child go to the birthday party?" get amplified-stereotype output.

## Chatbot-with-professional (SLT / OT / psychologist / educator)

- See [llm-for-clinicians] for the full evidence.
- [jang2024-llm-autistic-workers-chi] — n=11 autistic adults preferred GPT-4 chatbot to disguised human counselor for workplace advice. Preference driven by **format (concise bullets) and non-judgmental tone**, not advice quality. Independent professional reviewer judged some chatbot outputs as harmful (generic "approach coworkers to make friends" advice).

## Adolescent / adult chatbot evidence (the only RCT zone)

- [koegel2025-noora-empathy-rct] — RCT n=30, ages 11–35. Noora (GPT-4-driven) delivered structured empathic-statement trials with real-time feedback; 200 trials over 4 weeks. 71% of experimental group improved; +13.2pp gain first vs last 50 responses; significant vs waitlist; generalized to natural conversation. Author conflict of interest (Noora development team). Single LLM RCT in autistic users as of 2026-05-02.
- [aghakhani2023-wysa-asd-messages] — 277 messages from 232 self-identified autistic Wysa users; 80.3% negative-valence emotion words; top life challenges sleep (22.8%), anxiety (18.1%), depression (17.3%) — i.e. comorbidities, not autism per se. Calls for autistic-led co-design.
- [jang2024-llm-autistic-workers-chi] — see above.
- [sohn2025-genai-autism-scoping-review] — Lyu 2024 EMooly (GPT-3.5/4 + AR, n=24, mean age 6): emotion-recognition quiz +1.5/10 vs -0.41 control. Tang 2024 EmoEden (GPT-4 + MidJourney, n=6 HFA, ages 8–12, 22 days): improved emotion recognition/expression. Both pilot scale.

## Autistic-led commentary

- [asan2025-no-generative-ai-plain-language] — ASAN position: "All [generative AI tools] made big mistakes that changed the meaning of the text." AI invents value-laden claims (e.g., autistic people have "rare and amazing talents") not in the source. Recommended posture: AI as flagger/linter (Readable, Hemingway model), never as rewriter. **The leading autistic-led US advocacy organization is on record opposing generative AI for accessibility translation.**

# Effect-size summary

| Use case | Best evidence | Effect | Confidence |
| --- | --- | --- | --- |
| Empathic-statement training (autistic adolescent/adult) | [koegel2025-noora-empathy-rct] RCT n=30 | +13.2pp; 71% improved | Low (single trial, COI) |
| Emotion-recognition (HFA child, AR-augmented) | Lyu 2024 EMooly via [sohn2025-genai-autism-scoping-review] | +1.91 vs control on quiz | Low (n=24 pilot) |
| Avatar social-skills (autistic child, pre-LLM) | [hopkins2011-facesay-rct] RCT n=49 | sig. on face/emotion/playground | Medium |
| Workplace advice (autistic adult, GPT-4) | [jang2024-llm-autistic-workers-chi] n=11 | Preference > human; advice quality mixed | Low |
| Caregiver Q&A (parent, GPT-4) | [mcfayden2024-chatgpt-parents-autism] n=13 queries | 0% actionability on basic info; 42% link validity | Low |
| Autism-disclosure → biased advice | [wohn2026-disclosure-stereotypes-llm] 345k responses, 6 LLMs | 75% vs 15% decline-social-invitation | Medium |
| Sycophancy → delusion confirmation | [auyeung2025-psychogenic-machine] 8 LLMs | mean DCS 0.91/2; 39.8% zero-intervention scenarios | Medium |

# Open questions

- **Is there ANY published RCT of an LLM chatbot for autistic children under 11?** Not as of 2026-05-02. The Koegel trial floor is 11.
- Does Noora replicate without Koegel-lab involvement? Independent replication is the key validation step.
- Does EMooly / EmoEden generalize beyond pilot scale? Both are n<30 with no long-term retention.
- Does autism-disclosure conditioning ([wohn2026-disclosure-stereotypes-llm]) drift across model versions? No longitudinal data.
- What dose-response curve exists for chatbot use in autistic adolescents? The harm cases ([incident-setzer-character-ai-2024], [incident-character-ai-jf-texas-2024]) describe months of unrestricted use; the efficacy trial ([koegel2025-noora-empathy-rct]) uses 200 structured trials in 4 weeks. Where is the line?
- Is "concise bullet-point" preference ([jang2024-llm-autistic-workers-chi]) generalizable across language/culture/age? PE/MX/CO Spanish-speaking autistic adolescents have not been studied.
- For parent-facing Q&A: does RAG-grounding to a curated Spanish-language autism resource library close the actionability gap ([mcfayden2024-chatgpt-parents-autism])?
- For professional users: how does the actual SLT/OT/psych workflow in PE/LATAM differ from US/CA workflow ([kupferschmidt2025-llm-clinical-notes]) — and does the AI scribe value transfer?
- Can chatbots be deployed to autistic users *without* enabling parasocial dependency? Every documented harm involves named-bot personalization. No published deployment design has tested name-disabled chatbots empirically with autistic users.

# Builder takeaways

## For all three sub-audiences

- Treat the LLM evidence base as **low-confidence preliminary** in every public claim. The honest framing: "we are building on early evidence in autism plus established evidence on structured digital social-skills practice."
- **Structured trials > free chat.** Every product feature with positive evidence ([hopkins2011-facesay-rct], [koegel2025-noora-empathy-rct], EMooly, EmoEden) constrained the task. Every documented harm involved unstructured conversation.
- **No bot persona, no naming.** Discourage user-assigned names ("Alfred," "Dany," "Sarai") and predefined romantic/friend roles. Every documented fatality and severe harm case used a named persona.
- **Hard session limits.** The 5,000-message-in-3-weeks pattern in [incident-chail-replika-windsor-2021] and the 10-month attachment in [incident-setzer-character-ai-2024] point to engagement intensity as risk. Cap weekly minutes for vulnerable-user accounts; show usage to caregivers.
- **AI-disclosure labeling per EU AI Act Art. 50.** Even outside EU, this is the right default. Children must know they're talking to a machine.

## Chatbot-with-kid

- Default position: **do not deploy free-form LLM chat to autistic children as a primary interaction surface.** No evidence supports it; documented harms are severe; ASAN opposes generative-AI accessibility tooling.
- If a chatbot surface is built for kids at all: structured trial format ([hopkins2011-facesay-rct], [koegel2025-noora-empathy-rct] template), bounded task, finite turns per session, deterministic safety rails (regex + classifier on inputs/outputs for self-harm, violence, sexual content, and "you're not crazy"-class validations from [pierre2025-ai-psychosis-case-report]).
- Caregiver visibility into all transcripts is a non-negotiable design constraint — not a feature, a floor.
- Age-gating and parental-consent flows are required by Peruvian Law 29733 and Mexican LFPDPPP for under-18 users; layer on EU AI Act child-vulnerability protections (Art. 5) as the global default.
- Sub-audience-specific UX: avoid "your AI friend" framing entirely. Use "practice partner" or "training assistant." Loneliness-framed marketing is the documented entry point for the Character.AI harm cases.

## Chatbot-with-parent

- Build the parent-facing Q&A surface as **RAG-grounded to a curated Spanish-language autism resource library**, not free LLM generation. [mcfayden2024-chatgpt-parents-autism]'s broken-link / unactionable-output failure mode is solvable only by pinning the corpus.
- **Default to neurodiversity-affirming language**, not medical-deficit. Off-the-shelf GPT defaults to deficit framing per [mcfayden2024-chatgpt-parents-autism]; explicit prompting and curated examples are required.
- **Block disclosure-conditional avoidance advice** ([wohn2026-disclosure-stereotypes-llm]): when a parent describes an autistic child's planned activity, the model must not default to "consider not going." Override with country-and-context-aware accommodation suggestions.
- Auto-route any parent message containing crisis indicators (self-harm, suicidality, abuse, severe regression) to human-mediated resources with country-specific phone numbers (PE: Línea 113 opción 5; MX: SAPTEL 55-5259-8121; CL: Salud Responde 600-360-7777). Never let the model attempt clinical advice.
- Surface the limits explicitly: "this is a wellness/education app; for diagnosis or treatment talk to your professional." Cite our evidence honestly — including [koegel2025-noora-empathy-rct]'s n=30, single trial, COI.

## Chatbot-with-professional

- See [llm-for-clinicians] for the full set of recommendations.
- For autism-specific professional workflows: the model must NOT translate "anxious" → "has anxiety" ([kupferschmidt2025-llm-clinical-notes]) — that drift turns wellness language into accidentally diagnostic claims that exceed our scope.
- Bullet/structured format ([jang2024-llm-autistic-workers-chi]) is the format autistic professionals themselves prefer; default to that for any professional-facing surface, not therapeutic prose.
- Treat the professional-facing chatbot as the **highest-value, lowest-risk use case** in the three audiences: documented LLM benefit ([olson2025-ambient-ai-scribe-burnout], [pelletier2025-pediatric-ai-scribe]), no minor-as-direct-user, professional accountability layer.

## Cross-cutting product implications for PE/LATAM

- Spanish-language LLM evaluation in autism is essentially absent. Every cited LLM study used English prompts. Building a Spanish-language version requires our own evaluation, not transfer of US/EU findings.
- ARASAAC symbol grounding (see [aac-symbol-systems]) plus a Spanish-language autistic-led advisory board are the credibility moves a LATAM product can make that no US incumbent has.
- The honest market frame is: there is no established LLM-for-autism product anywhere globally. We are building in a category with documented harms and weak evidence; the responsible posture is constrained tasks + structured trials + transparency, not "AI-powered autism companion."
