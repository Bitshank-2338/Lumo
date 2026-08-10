# Lumo public demo

Lumo turns a learning goal into a structured path instead of another pile of disconnected AI answers. This public demo presents the project, Lumo Hub, the build book, documentation links, and an authenticated workflow experience.

## Demo workflow

Visitors sign in with ChatGPT and can create exactly one persistent demo workflow per ChatGPT user ID. A workflow includes:

- a structured lesson and key points;
- a concept map;
- five recall questions;
- a seven-day learning plan.

The workflow is stored in Cloudflare D1 and can be reopened in the private `/member` space. The database uses the authenticated user ID as its primary key, so the one-workflow limit is enforced server-side. Lumo does not store the visitor's email in the workflow table.

## Authentication and privacy

The marketing page remains public. `/member` and workflow write operations require Sites-managed Sign in with ChatGPT. Ownership checks happen on the server using the authenticated identity headers supplied by the hosting platform.

## Local development

Requires Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

Useful checks:

```bash
npm run db:generate
npm run lint
npm test
```

The project uses Next-compatible vinext, Drizzle ORM, Cloudflare D1, and Sites hosting. `.openai/hosting.json` declares the `DB` binding; the generated migration is under `drizzle/`.

## Links

- Live demo: https://lumo-ai-learning-hub.shanky2338.chatgpt.site
- Repository: https://github.com/Bitshank-2338/Lumo
