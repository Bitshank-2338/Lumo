'use client'

/* eslint-disable i18n/no-literal-ui-text -- Public catalog chrome is intentionally English-first. */

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Search, ShieldCheck, Sparkles } from 'lucide-react'

interface LumoSkill {
  slug: string
  name: string
  summary: string
  version: string
}

const lumoSkills: LumoSkill[] = [
  {
    slug: 'lumo-study-planner',
    name: 'Study Planner',
    summary:
      'Turn a goal, deadline, and set of materials into a realistic learning plan with checkpoints.',
    version: '1.0.0',
  },
  {
    slug: 'lumo-socratic-coach',
    name: 'Socratic Coach',
    summary:
      'Build understanding through hints, questions, misconceptions, and learner-led discovery.',
    version: '1.0.0',
  },
  {
    slug: 'lumo-exam-revision',
    name: 'Exam Revision',
    summary: 'Convert course material into prioritized revision, active recall, and exam practice.',
    version: '1.0.0',
  },
  {
    slug: 'lumo-source-research',
    name: 'Source Research',
    summary:
      'Research a question with an evidence trail, source comparison, and uncertainty checks.',
    version: '1.0.0',
  },
  {
    slug: 'lumo-opportunity-fit',
    name: 'Opportunity Fit',
    summary:
      'Evaluate courses, roles, scholarships, and programs against your direction and constraints.',
    version: '1.0.0',
  },
  {
    slug: 'lumo-application-coach',
    name: 'Application Coach',
    summary: 'Shape evidence-led applications that stay authentic to your experience and voice.',
    version: '1.0.0',
  },
  {
    slug: 'lumo-concept-visualizer',
    name: 'Concept Visualizer',
    summary:
      'Choose and produce a clear visual model for a difficult relationship, process, or system.',
    version: '1.0.0',
  },
]

export function HubExplorer() {
  const [query, setQuery] = useState('')
  const skills = useMemo(() => {
    const needle = query.trim().toLowerCase()
    return needle
      ? lumoSkills.filter(skill =>
          `${skill.name} ${skill.slug} ${skill.summary}`.toLowerCase().includes(needle)
        )
      : lumoSkills
  }, [query])

  return (
    <>
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        <label className="flex min-w-0 items-center gap-3 rounded-xl bg-black/20 px-4 py-3 text-slate-400">
          <Search size={18} />
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            placeholder="Search Lumo skills…"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </label>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
        <span>{skills.length} Lumo skills</span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck size={15} className="text-emerald-300" /> First-party and bundled
        </span>
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skills.map(skill => (
          <Link
            key={skill.slug}
            href="/home"
            className="group flex min-h-[235px] flex-col rounded-2xl border border-white/10 bg-[#0b0e1b] p-6 transition hover:-translate-y-1 hover:border-violet-300/30"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="rounded-xl bg-violet-400/10 p-2.5 text-violet-300">
                <Sparkles size={19} />
              </div>
              <ArrowUpRight
                size={16}
                className="text-slate-600 transition group-hover:text-white"
              />
            </div>
            <h2 className="mt-5 font-semibold text-white">{skill.name}</h2>
            <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-400">{skill.summary}</p>
            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
              <span>First-party · bundled</span>
              <span>v{skill.version}</span>
            </div>
          </Link>
        ))}
      </div>
      {skills.length === 0 ? (
        <div className="py-20 text-center text-slate-400">No Lumo skills match that search.</div>
      ) : null}
    </>
  )
}
