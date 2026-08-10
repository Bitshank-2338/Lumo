<div align="center">
  <img src="web/public/lumo-mark.svg" alt="Lumo logo" height="76" />
  <h1>Lumo</h1>
  <p><strong>Learn deeply. Move with direction.</strong></p>
  <p>An open-source, agent-native learning workspace that turns scattered sources into structured understanding and useful work.</p>

  <p>
    <a href="https://lumo-ai-learning-hub.shanky2338.chatgpt.site">Live demo</a>
    · <a href="https://lumo-ai-learning-hub.shanky2338.chatgpt.site/docs">Docs</a>
    · <a href="https://lumo-ai-learning-hub.shanky2338.chatgpt.site/hub">Lumo Hub</a>
    · <a href="CONTRIBUTING.md">Contribute</a>
    · <a href="ROADMAP.md">Roadmap</a>
  </p>

  <p>
    <a href="https://github.com/Bitshank-2338/Lumo/actions/workflows/tests.yml"><img src="https://github.com/Bitshank-2338/Lumo/actions/workflows/tests.yml/badge.svg" alt="Tests" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" alt="Apache 2.0 license" /></a>
    <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg" alt="Contributions welcome" /></a>
    <a href="https://github.com/Bitshank-2338/Lumo/issues"><img src="https://img.shields.io/github/issues/Bitshank-2338/Lumo" alt="Open issues" /></a>
  </p>
</div>

> [!IMPORTANT]
> Lumo currently has two product surfaces. The public site is a safe, lightweight hackathon demo of the core learning workflow. The full local application contains the broader knowledge-base, research, book, agent, memory, and skill experience.

## Why Lumo

Learning work is fragmented. Learners upload material in one tool, ask questions in another, search for evidence elsewhere, and manually move the results into notes, plans, applications, or presentations. Ordinary chat interfaces may answer a prompt, but they rarely preserve the learner's sources, direction, progress, and final outcome.

Lumo connects those steps into a persistent learning workspace. It helps a learner move from source material to understanding, practice, research, and creation without losing context between tools.

## Who it is for

- Students preparing for exams, projects, internships, and applications.
- Self-directed learners working through difficult technical subjects.
- Researchers who need source-grounded exploration and structured notes.
- Educators and mentors who want reusable teaching workflows.
- Builders who learn by creating with coding agents and external tools.

## What it can do

| Area | Capability |
| --- | --- |
| Adaptive tutoring | Explanations, Socratic coaching, quizzes, and mastery paths |
| Grounded knowledge | Document upload, knowledge bases, retrieval, and source-aware answers |
| Deep research | Question decomposition, web and paper research, evidence inspection, and reporting |
| Learning memory | Persistent preferences and learning context across sessions |
| Creation | Notebooks, books, diagrams, mathematical animations, and polished drafts |
| Connected agents | Local Claude Code, Codex, Gemini, and other supported assistants |
| Skills | First-party learning playbooks and an extensible skill format |
| Public demo | ChatGPT sign-in and one persistent learning workflow per authenticated user |

## Try the public demo

Visit the [live Lumo website](https://lumo-ai-learning-hub.shanky2338.chatgpt.site). The landing page is public. After signing in with ChatGPT, each authenticated user can create one saved demo workflow containing:

- a structured lesson;
- a concept map;
- five recall questions; and
- a seven-day learning plan.

The public demo is isolated from the developer's local files and credentials. Authentication is provided by the hosting platform, and workflow ownership is enforced by the authenticated user ID.

## First-party Lumo skills

The repository includes seven focused learning playbooks:

1. Study Planner
2. Socratic Coach
3. Exam Revision
4. Source Research
5. Opportunity Fit
6. Application Coach
7. Concept Visualizer

The public community marketplace is intentionally marked **in progress** while contribution review, safety checks, versioning, ratings, and installation controls are designed. New skill ideas are welcome through the [skill proposal template](https://github.com/Bitshank-2338/Lumo/issues/new?template=skill_proposal.yml).

## Architecture

Lumo combines a Python/FastAPI agent runtime with a Next.js learning workspace. The backend manages chat orchestration, retrieval, memory, research pipelines, books, skills, agents, and model providers. The frontend exposes those capabilities as a unified workspace.

The public demo under `lumo-site/` is a separate Sites-compatible application using React, Cloudflare Workers, Drizzle ORM, and D1 persistence.

```text
Learner
  ├─ Full local workspace (web/) ── FastAPI + agent runtime (deeptutor/)
  │                                  ├─ knowledge and retrieval
  │                                  ├─ research and tutoring
  │                                  ├─ memory, books, and skills
  │                                  └─ model and agent providers
  └─ Public demo (lumo-site/) ────── ChatGPT auth + Worker API + D1
```

Internal `deeptutor` package names remain in the codebase for compatibility with the upstream project on which Lumo is based.

## Repository map

| Path | Purpose |
| --- | --- |
| `deeptutor/` | Python agent runtime, APIs, capabilities, services, and built-in skills |
| `deeptutor_cli/` | Command-line entry point, including the `lumo` command |
| `web/` | Full Next.js learning workspace |
| `lumo-site/` | Safe public product demo and authenticated workflow |
| `tests/` | Python tests |
| `scripts/` | Maintenance and synchronization utilities |
| `requirements/` | Layered Python dependency sets |
| `HACKATHON_SUBMISSION.md` | Problem statement, target users, demo flow, and product script |

## Run the full application locally

### Requirements

- Python 3.11, 3.12, or 3.13
- Node.js 22+
- Git
- At least one configured language-model provider

### Setup

```bash
git clone https://github.com/Bitshank-2338/Lumo.git
cd Lumo
python -m venv .venv
```

Activate the environment:

```bash
# Windows PowerShell
.venv\Scripts\Activate.ps1

# macOS or Linux
source .venv/bin/activate
```

Install and start Lumo:

```bash
python -m pip install --upgrade pip
pip install -e .
cd web
npm install
cd ..
lumo start
```

Open `http://localhost:3782`. Configure your model and embedding providers in **Settings** before indexing documents. Search, speech, image, and video providers are optional.

Provider auth (`openai-codex` OAuth login; `github-copilot` validates an existing Copilot auth session) is available through the CLI. Container users should follow the [temporary local Codex OAuth bridge](CONTAINERIZATION.md#temporary-local-codex-oauth-bridge) when the callback must be forwarded safely.

Never commit a real `.env` file, API key, uploaded document, local database, or generated user data. See [.env.example](.env.example) for safe examples.

## Run the public demo locally

```bash
cd lumo-site
npm ci
npm run dev
```

The hosted ChatGPT identity and D1 bindings are supplied by the deployment platform. Local development can render the public surface, but authenticated persistence requires the configured hosting environment.

## Validate a change

Run the checks relevant to the part you changed:

```bash
# Python
pip install -e ".[dev]"
ruff check .
ruff format --check .
pytest -q tests deeptutor/learning/tests

# Full web workspace
cd web
npm ci --legacy-peer-deps
npm run lint
npm run test:node

# Public demo
cd lumo-site
npm ci
npm run lint
npm test
```

GitHub Actions repeats the main lint, import, Python, web, and public-demo checks for pull requests.

## Contributing

Contributions are welcome from developers, learners, educators, designers, researchers, and technical writers. Start with [CONTRIBUTING.md](CONTRIBUTING.md), follow the [Code of Conduct](CODE_OF_CONDUCT.md), and use an issue template when proposing substantial work.

- Beginner-friendly work is labeled `good first issue` when available.
- Larger features should begin with an issue so scope and architecture can be agreed on.
- Security vulnerabilities must be reported privately according to [SECURITY.md](SECURITY.md).
- Questions and setup help are covered in [SUPPORT.md](SUPPORT.md).

## Project status and roadmap

Lumo is an early-stage hackathon project and active open-source experiment. APIs, data formats, and user flows may change. The priorities and contribution opportunities are tracked in [ROADMAP.md](ROADMAP.md).

## Attribution

Lumo is an independent custom build based on [DeepTutor](https://github.com/HKUDS/DeepTutor) by the Data Intelligence Lab at The University of Hong Kong. Original copyright, license, and attribution notices are preserved. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for additional notices.

## License

Licensed under the [Apache License 2.0](LICENSE). Unless stated otherwise, contributions submitted to this repository are accepted under the same license.
