import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/", init = {}) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  const headers = new Headers(init.headers);
  if (!headers.has("accept")) headers.set("accept", "text/html");
  return worker.fetch(new Request(`http://localhost${pathname}`, { ...init, headers }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the Lumo public demo", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>Lumo/);
  assert.match(html, /Learn deeply/);
  assert.match(html, /Lumo Hub/);
  assert.match(html, /Interactive Product Demo/i);
  assert.match(html, /Sign in with ChatGPT/);
  assert.doesNotMatch(html, /codex-preview/);
});

test("protects the member space with ChatGPT sign-in", async () => {
  const response = await render("/member");
  assert.ok([302, 307, 308].includes(response.status));
  assert.match(response.headers.get("location") ?? "", /^\/signin-with-chatgpt\?return_to=%2Fmember$/);
});

test("requires a ChatGPT identity before creating a workflow", async () => {
  const response = await render("/api/workflow", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ mode: "Learn", goal: "Understand retrieval-augmented generation" }),
  });
  assert.equal(response.status, 401);
  assert.match(await response.text(), /Sign in with ChatGPT/i);
});
