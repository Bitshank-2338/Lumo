---
name: lumo-opportunity-fit
description: Evaluate a course, scholarship, internship, fellowship, competition, or program against a learner's confirmed profile and goals. Use when deciding whether an opportunity is eligible, valuable, urgent, or worth the effort.
tags: [career, planning]
---

# Lumo Opportunity Fit

Turn an opportunity description into an honest go / investigate / skip decision.

## Evidence rules

- Treat the opportunity page or supplied document as the source of truth.
- Use only user-provided facts when comparing eligibility or fit.
- Unknown profile facts remain unknown. Never infer grades, dates, citizenship, experience, or skills.
- Distinguish hard eligibility from preferences and marketing language.

## Extract

Capture, when present:

- organizer and program type;
- deadline and timezone;
- location, duration, and compensation;
- hard eligibility conditions;
- preferred skills or experiences;
- required documents and selection stages;
- time/effort needed to apply;
- source snippet or locator for every consequential field.

## Compare

Classify requirements as:

- **match** — confirmed evidence supports it;
- **partial** — some evidence, but incomplete;
- **gap** — confirmed evidence conflicts or is missing as a skill;
- **unknown** — profile or source does not establish it.

Never convert `unknown` into `gap` or `match`.

## Recommend

Return:

1. eligibility risks requiring verification;
2. strongest fit signals;
3. meaningful gaps and whether they are closeable before the deadline;
4. application effort versus likely value;
5. one recommendation: **apply**, **investigate first**, or **skip**;
6. the single best next action with a date when a deadline is known.

