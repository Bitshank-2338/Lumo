import { buildDemoWorkflow, isWorkflowMode } from "../../../lib/workflows";
import { getChatGPTUser } from "../../chatgpt-auth";

export async function GET() {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in with ChatGPT to continue." }, { status: 401 });

  const { getUserWorkflow } = await import("../../../db/workflows");
  const workflow = await getUserWorkflow(user.userId);
  return Response.json({ workflow });
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in with ChatGPT to continue." }, { status: 401 });

  const payload = (await request.json()) as { mode?: unknown; goal?: unknown };
  if (!isWorkflowMode(payload.mode)) {
    return Response.json({ error: "Choose a valid workflow type." }, { status: 400 });
  }

  const goal = typeof payload.goal === "string" ? payload.goal.trim() : "";
  if (goal.length < 10 || goal.length > 500) {
    return Response.json({ error: "Describe your goal in 10 to 500 characters." }, { status: 400 });
  }

  const { createUserWorkflow } = await import("../../../db/workflows");
  const result = await createUserWorkflow(user.userId, buildDemoWorkflow(payload.mode, goal));
  return Response.json(
    { workflow: result.workflow, alreadyExists: !result.created },
    { status: result.created ? 201 : 409 },
  );
}
