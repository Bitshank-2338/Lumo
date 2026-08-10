# Security Policy

Lumo handles model credentials, uploaded learning material, generated content, and optional authenticated workflows. Security and privacy reports are taken seriously.

## Supported versions

Lumo is currently an early-stage project. Security fixes are applied to the latest commit on `main`; older commits, forks, and unpublished builds are not supported.

## Report a vulnerability privately

Do not open a public issue for a suspected vulnerability.

Use GitHub’s private vulnerability reporting flow:

<https://github.com/Bitshank-2338/Lumo/security/advisories/new>

If that flow is unavailable, contact the repository owner privately through the contact methods on the [Bitshank-2338 GitHub profile](https://github.com/Bitshank-2338).

Include, when possible:

- the affected commit, route, component, or dependency;
- clear reproduction steps or a minimal proof of concept;
- the expected and actual behavior;
- the potential impact and who may be affected;
- relevant logs or screenshots with secrets and personal data removed; and
- any suggested mitigation.

Please do not access another person’s data, degrade a service, perform denial-of-service testing, send spam, or disclose the issue before a fix can be prepared.

## Response process

The maintainer will aim to acknowledge a complete report within seven days, validate and prioritize it, and coordinate remediation and disclosure. Timelines depend on severity and maintainer availability. Reporters will be credited when desired and appropriate.

## Security expectations for contributors

- Never commit API keys, tokens, cookies, passwords, private documents, `.env` files, local databases, or generated user data.
- Keep authentication and authorization checks on the server boundary.
- Validate uploaded content, filenames, paths, URLs, and model-generated tool inputs.
- Use parameterized database operations and safe subprocess APIs.
- Treat prompts, skill instructions, retrieved documents, and external web content as untrusted input.
- Avoid exposing stack traces, credentials, internal paths, or personal data to the browser or logs.
- Document new network calls, permissions, data retention, telemetry, and third-party services.
- Pin or constrain dependencies appropriately and review dependency changes.

## Deployment note

The public `lumo-site/` demo is intentionally isolated from the developer’s local Lumo knowledge bases and credentials. Hosted authentication and workflow persistence depend on platform-managed bindings; contributors must not add embedded production secrets as a local fallback.
