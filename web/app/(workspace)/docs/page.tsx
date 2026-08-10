/* eslint-disable i18n/no-literal-ui-text -- Public documentation is intentionally English-first. */
import Link from 'next/link'
import { ArrowRight, BookOpen, Bot, Boxes, Files, GraduationCap, Settings2 } from 'lucide-react'

import { MarketingShell } from '@/components/marketing/MarketingShell'

const sections = [
  {
    id: 'start',
    icon: GraduationCap,
    title: 'Start with Lumo',
    text: 'Open the learning workspace, add the model providers you want to use, and ask Lumo to teach, plan, research, or create. The home composer is the fastest starting point.',
    steps: [
      'Open Lumo and choose a starter',
      'Attach notes, a paper, or course material',
      'State your goal and the depth you need',
    ],
  },
  {
    id: 'materials',
    icon: Files,
    title: 'Learn from your materials',
    text: 'Lumo can work with your own documents and organized knowledge bases, keeping the answer connected to the material you care about.',
    steps: [
      'Upload files directly in a conversation',
      'Use Knowledge Center for reusable collections',
      'Ask for citations, comparisons, quizzes, or a study map',
    ],
  },
  {
    id: 'agents',
    icon: Bot,
    title: 'Work with agents',
    text: 'Lumo can connect specialized agents and local coding assistants to a learning session. Use them when the task needs research, implementation, or a second perspective.',
    steps: [
      'Manage connections under My Agents',
      'Choose an agent from the composer',
      'Keep the final explanation inside your Lumo session',
    ],
  },
  {
    id: 'skills',
    icon: Boxes,
    title: 'Use and create skills',
    text: 'Skills are reusable playbooks. Lumo includes seven learning-first skills, and its in-app Skill Library can import compatible community skills after you review their source and security verdict.',
    steps: [
      'Browse the public Lumo Hub',
      'Open Learning Space → Skills to manage installed skills',
      'Create a private skill for a repeatable workflow',
    ],
  },
  {
    id: 'configure',
    icon: Settings2,
    title: 'Configure your workspace',
    text: 'Settings controls model providers, search, speech, image generation, agents, memory, tools, appearance, and network behavior.',
    steps: [
      'Add at least one language model provider',
      'Configure search for source-grounded research',
      'Keep API secrets in local settings—not in skill files',
    ],
  },
] as const

export default function DocsPage() {
  return (
    <MarketingShell>
      <main className="px-5 pb-24 pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-medium text-cyan-200">
              <BookOpen size={14} /> Lumo Docs
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              Build your learning system.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              A practical guide to using Lumo as a tutor, research partner, planner, creator, and
              extensible agent workspace.
            </p>
          </div>
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[220px_1fr]">
            <aside className="sticky top-24 hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm lg:block">
              <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Guide
              </p>
              {sections.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/5 hover:text-white"
                >
                  {section.title}
                </a>
              ))}
              <Link
                href="/source"
                className="mt-3 flex items-center justify-between border-t border-white/10 px-3 pt-4 text-violet-300"
              >
                Deployment <ArrowRight size={14} />
              </Link>
            </aside>
            <div className="space-y-5">
              {sections.map(({ id, icon: Icon, title, text, steps }, index) => (
                <section
                  id={id}
                  key={id}
                  className="scroll-mt-24 rounded-2xl border border-white/10 bg-[#0b0e1b] p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl bg-violet-400/10 p-3 text-violet-300">
                      <Icon size={22} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {String(index + 1).padStart(2, '0')}
                      </p>
                      <h2 className="mt-1 text-2xl font-semibold">{title}</h2>
                    </div>
                  </div>
                  <p className="mt-6 max-w-3xl leading-7 text-slate-400">{text}</p>
                  <ol className="mt-6 grid gap-3 sm:grid-cols-3">
                    {steps.map((step, stepIndex) => (
                      <li
                        key={step}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-4 text-sm leading-6 text-slate-300"
                      >
                        <span className="mb-2 block text-xs font-semibold text-cyan-300">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </section>
              ))}
            </div>
          </div>
          <div className="mt-10 rounded-2xl border border-violet-300/20 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 p-8 sm:flex sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold">Ready to learn with it?</h2>
              <p className="mt-2 text-sm text-slate-400">
                Open the workspace or browse a skill designed for your next task.
              </p>
            </div>
            <div className="mt-5 flex gap-3 sm:mt-0">
              <Link
                href="/hub"
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold"
              >
                Browse skills
              </Link>
              <Link
                href="/home"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950"
              >
                Open Lumo
              </Link>
            </div>
          </div>
        </div>
      </main>
    </MarketingShell>
  )
}
