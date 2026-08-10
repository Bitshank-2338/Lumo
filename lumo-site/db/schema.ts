import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const demoWorkflows = sqliteTable("demo_workflows", {
  userId: text("user_id").primaryKey(),
  mode: text("mode").notNull(),
  goal: text("goal").notNull(),
  title: text("title").notNull(),
  stepsJson: text("steps_json").notNull(),
  output: text("output").notNull(),
  detailsJson: text("details_json").notNull(),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});
