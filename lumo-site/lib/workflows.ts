export const WORKFLOW_MODES = ["Learn", "Research", "Apply"] as const;

export type WorkflowMode = (typeof WORKFLOW_MODES)[number];

export type WorkflowDetails = {
  lesson: string;
  conceptMap: string[];
  questions: string[];
  plan: string[];
};

export type SavedDemoWorkflow = {
  mode: WorkflowMode;
  goal: string;
  title: string;
  steps: string[];
  output: string;
  details: WorkflowDetails;
  createdAt: string;
};

const templates: Record<WorkflowMode, { title: string; steps: string[]; output: string }> = {
  Learn: {
    title: "From scattered sources to confident understanding",
    steps: ["Map the source", "Explain the hard parts", "Test understanding", "Plan the next session"],
    output: "A structured lesson, concept map, five recall questions, and a seven-day study plan.",
  },
  Research: {
    title: "From a question to an evidence-backed brief",
    steps: ["Frame the question", "Inspect sources", "Trace claims", "Compose with citations"],
    output: "A source-grounded brief with claim trails, open questions, and suggested follow-up research.",
  },
  Apply: {
    title: "From experience to a focused application",
    steps: ["Read the opportunity", "Map evidence", "Identify gaps", "Build the narrative"],
    output: "A fit analysis, tailored story bank, application draft, and interview preparation prompts.",
  },
};

export function isWorkflowMode(value: unknown): value is WorkflowMode {
  return typeof value === "string" && WORKFLOW_MODES.includes(value as WorkflowMode);
}

export function buildDemoWorkflow(mode: WorkflowMode, rawGoal: string): Omit<SavedDemoWorkflow, "createdAt"> {
  const goal = rawGoal.trim().replace(/\s+/g, " ").slice(0, 500);
  const template = templates[mode];
  const conceptMap =
    mode === "Research"
      ? ["Question", "Sources", "Claims", "Evidence", "Brief"]
      : mode === "Apply"
        ? ["Opportunity", "Experience", "Evidence", "Gaps", "Narrative"]
        : ["Source", "Core concepts", "Mental model", "Recall", "Next session"];

  return {
    mode,
    goal,
    title: template.title,
    steps: [...template.steps],
    output: template.output,
    details: {
      lesson: `Start by defining what success means for “${goal}”. Separate the source facts from assumptions, explain the central idea in plain language, and finish by producing one concrete example in your own words.`,
      conceptMap,
      questions: [
        `What is the central idea behind “${goal}”?`,
        "Which source or piece of evidence supports it most strongly?",
        "How would you explain the hardest part to a beginner?",
        "What common misunderstanding should you avoid?",
        "What can you create or demonstrate to prove understanding?",
      ],
      plan: [
        "Day 1 — define the goal and collect the best sources",
        "Day 2 — map the core concepts and unknowns",
        "Day 3 — study the hardest concept with examples",
        "Day 4 — test recall without looking at notes",
        "Day 5 — connect the ideas to a real use case",
        "Day 6 — create the final explanation or artifact",
        "Day 7 — review weak points and present the result",
      ],
    },
  };
}
