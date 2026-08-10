/* eslint-disable i18n/no-literal-ui-text -- Public marketing copy is intentionally English-first. */
import Link from 'next/link'
import {
  ArrowRight,
  Blocks,
  BookOpenCheck,
  BrainCircuit,
  Check,
  Compass,
  FileSearch,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

import { MarketingShell } from '@/components/marketing/MarketingShell'

const capabilities = [
  [
    BrainCircuit,
    'Adaptive tutoring',
    'A patient tutor that changes its explanations, examples, and pace around you.',
  ],
  [
    FileSearch,
    'Grounded in your material',
    'Bring papers, notes, books, and links. Lumo answers with your sources in view.',
  ],
  [
    Compass,
    'Direction, not just answers',
    'Turn a goal into a study plan, research path, or application you can actually finish.',
  ],
  [
    Blocks,
    'Skills that compose',
    'Install focused learning workflows from Lumo Hub or write a private skill of your own.',
  ],
] as const

const featuredSkills = [
  [GraduationCap, 'Socratic Coach', 'Learn through guided questions'],
  [BookOpenCheck, 'Exam Revision', 'Turn material into a revision system'],
  [FileSearch, 'Source Research', 'Build answers from reliable sources'],
  [Compass, 'Opportunity Fit', 'Find the path that fits your goals'],
] as const

export default function HomePage() {
  return (
    <MarketingShell>
      <main>
        <section className="relative isolate overflow-hidden px-5 pb-24 pt-20 sm:pt-28 lg:px-8 lg:pb-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.26),transparent_38%),radial-gradient(circle_at_85%_40%,rgba(34,211,238,0.12),transparent_28%)]" />
          <div className="mx-auto max-w-5xl text-center">
            <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3.5 py-1.5 text-xs font-medium text-violet-200">
              <Sparkles size={14} /> Your learning, finally connected
            </div>
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-7xl lg:text-[86px] lg:leading-[0.98]">
              Learn deeply.
              <span className="block bg-gradient-to-r from-violet-300 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
                Move with direction.
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              Lumo turns your materials, ambitions, and questions into a personal learning
              system—powered by agents that research, plan, teach, and create with you.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/home"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-[#090b16] transition hover:bg-violet-100 sm:w-auto"
              >
                Start learning <ArrowRight size={17} />
              </Link>
              <Link
                href="/hub"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Explore Lumo Hub <Blocks size={17} />
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-20 max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.055] p-2 shadow-2xl shadow-violet-950/50 backdrop-blur">
            <div className="grid min-h-[460px] overflow-hidden rounded-[22px] border border-white/10 bg-[#0c0f1e] lg:grid-cols-[230px_1fr]">
              <aside className="hidden border-r border-white/10 bg-white/[0.025] p-5 lg:block">
                <div className="mb-8 flex items-center gap-2 font-semibold">
                  <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-400 to-cyan-300" />{' '}
                  Lumo
                </div>
                {['Home', 'My Agents', 'Co-Writer', 'Learning Space'].map((item, index) => (
                  <div
                    key={item}
                    className={`mb-2 rounded-lg px-3 py-2 text-sm ${index === 0 ? 'bg-white/10 text-white' : 'text-slate-500'}`}
                  >
                    {item}
                  </div>
                ))}
              </aside>
              <div className="relative flex flex-col justify-center p-7 sm:p-12">
                <div className="absolute right-7 top-7 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  7 skills ready
                </div>
                <div className="max-w-xl">
                  <p className="text-sm font-medium text-violet-300">Good evening</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    What do you want to understand?
                  </h2>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-slate-400 shadow-xl">
                    Build me a 4-week learning plan from these materials…
                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                      <span>Study planner · Source research</span>
                      <span className="rounded-full bg-violet-500 px-3 py-1.5 text-white">
                        Ask Lumo ↑
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {['Explain a concept', 'Plan my semester', 'Research a topic'].map(item => (
                      <div
                        key={item}
                        className="rounded-xl border border-white/10 p-3 text-sm text-slate-400"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.025] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              One learning workspace
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
              From “I should learn this” to “I can do this.”
            </h2>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(([Icon, title, body]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-white/10 bg-[#0b0e1b] p-6 transition hover:-translate-y-1 hover:border-violet-300/30"
                >
                  <div className="mb-5 inline-flex rounded-xl bg-violet-400/10 p-3 text-violet-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Lumo Hub
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                A library of ways to learn.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
                Browse reusable skills for revision, research, planning, writing, visualization, and
                more. Start with Lumo’s first-party collection, then install compatible community
                skills when you need them.
              </p>
              <ul className="mt-7 space-y-3 text-slate-300">
                {[
                  'Searchable skill catalog',
                  'Security verdicts and clear provenance',
                  'Private, editable skills for your own workflow',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="rounded-full bg-emerald-300/10 p-1 text-emerald-300">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/hub"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-violet-300 hover:text-violet-200"
              >
                Visit Lumo Hub <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {featuredSkills.map(([Icon, title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-6"
                >
                  <Icon className="text-cyan-300" size={22} />
                  <h3 className="mt-6 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </MarketingShell>
  )
}
