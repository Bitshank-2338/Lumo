<div align="center">
  <img src="web/public/lumo-mark.svg" alt="Lumo" height="72" />
  <h1>Lumo</h1>
  <p><strong>Learn deeply. Move with direction.</strong></p>
  <p>An agent-native learning workspace that connects tutoring, research, planning, memory, creation, and specialized AI agents.</p>
  <p><a href="https://lumo-ai-learning-hub.shanky2338.chatgpt.site">Live Demo</a> · <a href="https://github.com/Bitshank-2338/Lumo/blob/main/HACKATHON_SUBMISSION.md">Submission Guide</a></p>
</div>

## The problem

Learning tools are fragmented. Students keep course material in one place, ask an AI questions in another, track progress manually, search the web separately, and use different tools to write or build the final outcome. Generic chatbots can answer a question, but they rarely preserve the learner's direction, evidence, mastery, and work across the full journey.

Lumo turns those disconnected activities into one persistent learning system.

## Who Lumo is for

- Students preparing for exams, projects, internships, or applications.
- Self-directed learners working through complex technical subjects.
- Researchers who need source-grounded exploration and structured notes.
- Educators and mentors who want reusable teaching workflows.
- Builders who learn by creating with coding agents and external tools.

## What Lumo does

- **Adaptive tutoring:** conversational explanations, Socratic coaching, personas, quizzes, and mastery paths.
- **Grounded knowledge:** upload documents, organize knowledge bases, and keep answers connected to source material.
- **Deep research:** decompose a question, search the web and papers, inspect evidence, and produce a structured report.
- **Learning memory:** retain useful preferences and learning context across sessions.
- **Creation:** turn understanding into notebooks, books, diagrams, animated mathematics, and polished drafts.
- **Connected agents:** work with local Claude Code, Codex, Gemini, and other supported assistants.
- **Extensible workflows:** first-party Lumo skills, MCP services, and callable CLI applications.
- **Public product surface:** a Lumo landing site, documentation, source/credits page, and Lumo Hub.

## First-party skill library

Lumo includes seven focused playbooks:

1. Study Planner
2. Socratic Coach
3. Exam Revision
4. Source Research
5. Opportunity Fit
6. Application Coach
7. Concept Visualizer

The public community marketplace is intentionally marked as coming soon while creator verification, security review, ratings, version history, and installation controls are developed.

## A flagship workflow

A learner can upload course material and an opportunity description, evaluate fit, build a study plan, learn with Socratic coaching, practise through quizzes and spaced review, conduct source-grounded research, consult a coding agent, organize results in notebooks, draft the final work in Co-Writer, and compile the journey into a Book—without losing context between tools.

## Architecture

Lumo combines a Python/FastAPI agent runtime with a Next.js interface. The backend manages chat, knowledge retrieval, memory, books, research pipelines, skills, agents, and model providers. The frontend provides the learning workspace and public product site. Internal `deeptutor` package names are retained for upstream compatibility.

The safe public hackathon demo is a self-contained Sites-compatible build under `lumo-site/`. It uses sample data so evaluators can test the product workflow without accessing a developer's local knowledge bases or credentials.

The demo supports optional **Sign in with ChatGPT** authentication. The landing page remains public, while `/member` is a protected identity-aware Lumo space. Authentication is handled by the hosting platform, so the repository does not contain app-owned OAuth secrets.

## Run locally

Prerequisites: Python 3.10+, Node.js 20+, and at least one configured language model.

```bash
python -m venv .venv
.venv/Scripts/pip install -e .
cd web
npm install
cd ..
.venv/Scripts/lumo start
```

Open `http://localhost:3782`.

Before indexing documents, configure an embedding model under **Settings → Embedding**. Search, speech, image, and video providers are optional and can be enabled independently.

Provider auth (`openai-codex` OAuth login; `github-copilot` validates an existing Copilot auth session) is available through the CLI. Container users can follow the [temporary local Codex OAuth bridge](CONTAINERIZATION.md#temporary-local-codex-oauth-bridge) when the callback must be forwarded safely.

## Public routes

Public demo: [lumo-ai-learning-hub.shanky2338.chatgpt.site](https://lumo-ai-learning-hub.shanky2338.chatgpt.site)

- `/` — Lumo product website
- `/docs` — product documentation
- `/hub` — first-party Lumo skill library
- `/source` — source, attribution, and deployment information
- `/home` — learning workspace

## Hackathon materials

The complete problem statement, target audience, product positioning, demo sequence, and recording script are in [HACKATHON_SUBMISSION.md](HACKATHON_SUBMISSION.md).

## Attribution

Lumo is an independent custom build based on [DeepTutor](https://github.com/HKUDS/DeepTutor) by the Data Intelligence Lab at The University of Hong Kong. The original Apache License 2.0, copyright, and attribution notices are preserved.

## License

Apache License 2.0. See [LICENSE](LICENSE).
