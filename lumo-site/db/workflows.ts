import { eq } from "drizzle-orm";

import type { SavedDemoWorkflow, WorkflowMode } from "../lib/workflows";
import { getDb } from ".";
import { demoWorkflows } from "./schema";

type WorkflowInsert = Omit<SavedDemoWorkflow, "createdAt">;

export async function getUserWorkflow(userId: string): Promise<SavedDemoWorkflow | null> {
  const [row] = await getDb()
    .select()
    .from(demoWorkflows)
    .where(eq(demoWorkflows.userId, userId))
    .limit(1);

  return row ? toSavedWorkflow(row) : null;
}

export async function createUserWorkflow(
  userId: string,
  workflow: WorkflowInsert,
): Promise<{ workflow: SavedDemoWorkflow; created: boolean }> {
  const createdAt = new Date();
  const [created] = await getDb()
    .insert(demoWorkflows)
    .values({
      userId,
      mode: workflow.mode,
      goal: workflow.goal,
      title: workflow.title,
      stepsJson: JSON.stringify(workflow.steps),
      output: workflow.output,
      detailsJson: JSON.stringify(workflow.details),
      createdAt,
    })
    .onConflictDoNothing({ target: demoWorkflows.userId })
    .returning();

  if (created) return { workflow: toSavedWorkflow(created), created: true };

  const existing = await getUserWorkflow(userId);
  if (!existing) throw new Error("The workflow could not be created.");
  return { workflow: existing, created: false };
}

function toSavedWorkflow(row: typeof demoWorkflows.$inferSelect): SavedDemoWorkflow {
  return {
    mode: row.mode as WorkflowMode,
    goal: row.goal,
    title: row.title,
    steps: JSON.parse(row.stepsJson) as string[],
    output: row.output,
    details: JSON.parse(row.detailsJson) as SavedDemoWorkflow["details"],
    createdAt: row.createdAt.toISOString(),
  };
}
