# Contributing to Lumo

Thank you for helping build Lumo. Contributions are welcome from developers, learners, educators, designers, researchers, and documentation writers.

This guide explains how to propose a change, prepare the project, validate your work, and submit a pull request. By participating, you agree to follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

- Fix a reproducible bug.
- Improve accessibility, performance, tests, or error handling.
- Clarify documentation or add a tested example.
- Improve a learning workflow or propose a first-party skill.
- Add or improve model, retrieval, research, or agent integrations.
- Refine the public Lumo demo without exposing private data or credentials.
- Triage issues and help other contributors reproduce problems.

If this is your first contribution, look for issues labeled `good first issue` or `help wanted`.

## Before you start

1. Search existing issues and pull requests to avoid duplicate work.
2. For a small, obvious fix, you may open a pull request directly.
3. For a feature, architecture change, new dependency, data migration, or large refactor, open an issue first.
4. For a skill, use the **Lumo skill proposal** issue template before implementation.
5. Report vulnerabilities privately according to [SECURITY.md](SECURITY.md). Do not open a public security issue.

Maintainers may close work that substantially changes the product direction without prior agreement. An issue discussion protects everyone’s time.

## Understand the two application surfaces

Lumo contains two related but distinct experiences:

| Surface | Location | Purpose |
| --- | --- | --- |
| Full application | `deeptutor/`, `deeptutor_cli/`, `web/` | Local learning workspace, agent runtime, knowledge bases, research, books, memory, and skills |
| Public demo | `lumo-site/` | Safe hosted product journey, ChatGPT sign-in, and one persistent learning workflow per user |

A change to one surface does not automatically change the other. Pull requests should state which surface is affected.

## Development setup

### Requirements

- Git
- Python 3.11, 3.12, or 3.13
- Node.js 22+

### Fork and clone

Fork the repository, then clone your fork:

```bash
git clone https://github.com/YOUR-USERNAME/Lumo.git
cd Lumo
git remote add upstream https://github.com/Bitshank-2338/Lumo.git
```

Create a focused branch from the latest `main`:

```bash
git checkout main
git pull --ff-only upstream main
git checkout -b feat/short-description
```

Suggested prefixes are `feat/`, `fix/`, `docs/`, `test/`, `refactor/`, and `chore/`.

### Python and full application

```bash
python -m venv .venv
```

Activate the environment:

```bash
# Windows PowerShell
.venv\Scripts\Activate.ps1

# macOS or Linux
source .venv/bin/activate
```

Install contributor dependencies:

```bash
python -m pip install --upgrade pip
pip install -e ".[dev]"
pre-commit install
```

Install the full web workspace:

```bash
cd web
npm ci --legacy-peer-deps
cd ..
```

Start the full application with:

```bash
lumo start
```

### Public demo

```bash
cd lumo-site
npm ci
npm run dev
```

The hosted ChatGPT identity and D1 database bindings are platform-managed. Do not add fallback credentials or commit production identifiers to make local authentication work.

## Repository areas

| Path | Typical contributions |
| --- | --- |
| `deeptutor/` | Python services, capabilities, tools, knowledge, skills, APIs, and agent runtime |
| `deeptutor_cli/` | CLI commands and startup behavior |
| `web/` | Full Next.js product interface |
| `lumo-site/` | Public product demo and persistent workflow |
| `tests/` | Python behavior and regression tests |
| `scripts/` | Safe maintenance and synchronization utilities |
| `requirements/`, `pyproject.toml` | Dependency and packaging changes |

## Coding expectations

### General

- Keep changes focused; do not mix unrelated cleanup into a feature or fix.
- Preserve existing attribution and compatibility notices.
- Add or update tests for behavior changes.
- Update documentation when commands, configuration, or user behavior changes.
- Prefer clear names and small, reviewable functions.
- Do not commit generated build output, local data, uploaded documents, credentials, or secrets.
- Avoid introducing a dependency when the standard library or an existing dependency is sufficient.

### Python

- Support the Python versions declared in `pyproject.toml`.
- Add type hints to new public functions and meaningful docstrings to public modules, classes, and functions.
- Follow the Ruff configuration in `pyproject.toml`.
- Use safe subprocess and file-handling practices; never interpolate untrusted values into a shell command.

### TypeScript and React

- Keep components accessible by keyboard and assistive technology.
- Preserve type safety; do not silence errors with broad `any` types without explanation.
- Keep server-only secrets and persistence logic out of client bundles.
- Add focused tests for navigation, identity boundaries, persistence, and error states.

### Lumo skills

- Start with a skill proposal issue describing the learner, problem, inputs, outputs, safety constraints, and example result.
- A built-in skill must have a narrow learning purpose and clear instructions.
- Do not include copied proprietary course content, private prompts, credentials, or unverifiable claims.
- Document external services and licenses used by the skill.
- Treat prompt and instruction changes as product behavior: test them and explain the expected outcome in the pull request.

Community skill installation is still in progress. Acceptance into the repository does not imply immediate publication in a marketplace.

## Run the relevant checks

You do not need to run every expensive check for a documentation-only change, but you must run the checks relevant to your change and list them in the pull request.

### Python

```bash
ruff check .
ruff format --check .
pytest -q tests deeptutor/learning/tests
```

### Full web workspace

```bash
cd web
npm run lint
npm run test:node
```

### Public demo

```bash
cd lumo-site
npm run lint
npm test
```

### Pre-commit

```bash
pre-commit run --all-files
```

Do not bypass failing checks. If a failure is unrelated or environment-specific, describe it with the exact command and output in the pull request.

## Commit messages

Use a short imperative summary. Conventional prefixes help organize history:

```text
feat: add source comparison workflow
fix: preserve workflow after redirect
docs: explain local embedding setup
test: cover unauthenticated workflow creation
chore: update public demo dependencies
```

Keep commits logically grouped. Maintainers may squash commits when merging.

## Pull request structure

Every pull request should include:

- the problem and intended outcome;
- a concise description of the solution;
- the affected product surface and modules;
- screenshots or a recording for visible interface changes;
- tests run and their results;
- security, privacy, data, dependency, and migration impact;
- documentation changes; and
- the related issue, using `Closes #123` when appropriate.

Complete the repository pull-request template. Mark an item not applicable instead of deleting it.

## Review and merge process

1. Automated checks must pass.
2. A maintainer reviews correctness, scope, user impact, tests, security, and documentation.
3. Feedback should be resolved or discussed; avoid force-pushing during an active review unless necessary.
4. Maintainers may request changes, split an oversized pull request, or close work outside the roadmap.
5. Approved work is normally squash-merged into `main`.

The `main` branch is the contribution target and should remain releasable. Do not push directly to it unless you are a maintainer performing a documented release or emergency fix.

## AI-assisted contributions

AI tools are welcome as assistants, but the contributor remains responsible for every submitted line. Verify generated code, tests, licenses, citations, and security implications. In the pull request, disclose material AI assistance and describe how the result was validated.

## Licensing

By submitting a contribution, you agree that it may be distributed under the repository’s [Apache License 2.0](LICENSE). You must have the right to contribute the code, content, data, and assets you submit.

## Getting help

Read [SUPPORT.md](SUPPORT.md) or open a question using the repository’s question template. Thank you for helping make learning more connected, grounded, and useful.
