"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  BookOpenCheck,
  CalendarRange,
  Compass,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const STARTERS = [
  {
    icon: BookOpenCheck,
    label: "Understand a topic",
    prompt:
      "Teach me a difficult topic step by step. Start by asking what I already know, then build a short mastery path with checkpoints.",
  },
  {
    icon: CalendarRange,
    label: "Build a study plan",
    prompt:
      "Help me build a realistic study plan. Ask for my deadline, available hours, current level, and the material I need to cover before planning.",
  },
  {
    icon: Compass,
    label: "Research with sources",
    prompt:
      "Research this topic carefully, separate verified facts from interpretation, and produce a concise source-backed brief: ",
  },
  {
    icon: WandSparkles,
    label: "Create practice material",
    prompt:
      "Turn my material into an active-recall pack with a concept map, progressively harder questions, and a short revision checklist.",
  },
] as const;

export default function LumoLaunchpad({
  onPrompt,
}: {
  onPrompt: (prompt: string) => void;
}) {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-[760px]">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {STARTERS.map(({ icon: Icon, label, prompt }) => (
          <button
            key={label}
            type="button"
            onClick={() => onPrompt(prompt)}
            className="group flex min-h-24 flex-col justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)]/80 p-3 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:shadow-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-transform group-hover:scale-105">
              <Icon size={16} strokeWidth={1.8} />
            </span>
            <span className="mt-3 text-[12.5px] font-medium leading-snug text-[var(--foreground)]">
              {t(label)}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-center gap-2 text-[11.5px] text-[var(--muted-foreground)]">
        <Sparkles size={12} className="text-[var(--primary)]" />
        <span>{t("Powered by Lumo playbooks")}</span>
        <span aria-hidden="true">·</span>
        <Link
          href="/space/skills"
          className="font-medium text-[var(--foreground)] underline decoration-[var(--border)] underline-offset-4 hover:decoration-[var(--primary)]"
        >
          {t("Open skill library")}
        </Link>
      </div>
    </div>
  );
}
