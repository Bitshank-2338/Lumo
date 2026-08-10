/* eslint-disable i18n/no-literal-ui-text -- Public Hub copy is intentionally English-first. */
import { Blocks, Construction, Sparkles } from 'lucide-react'

import { HubExplorer } from '@/components/marketing/HubExplorer'
import { MarketingShell } from '@/components/marketing/MarketingShell'

export default function HubPage() {
  return (
    <MarketingShell>
      <main className="px-5 pb-24 pt-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-300/10 px-3 py-1.5 text-xs font-medium text-violet-200">
                <Blocks size={14} /> Lumo Hub
              </div>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
                Skills make Lumo yours.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Start with seven focused skills designed by Lumo for planning, teaching, research,
                revision, applications, and visual learning.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-amber-300/20 bg-amber-300/[0.06] px-5 py-4">
              <Construction className="text-amber-300" size={21} />
              <div>
                <div className="font-semibold">Community marketplace</div>
                <div className="text-xs text-amber-100/60">In progress · coming soon</div>
              </div>
            </div>
          </div>

          <HubExplorer />

          <section className="relative mt-12 overflow-hidden rounded-3xl border border-violet-300/20 bg-gradient-to-br from-violet-500/15 via-white/[0.04] to-cyan-500/10 p-8 sm:p-10">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="relative max-w-3xl">
              <div className="inline-flex rounded-xl bg-white/10 p-3 text-cyan-300">
                <Sparkles size={22} />
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Coming soon
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A community skill marketplace built for Lumo.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-400">
                We’re working on creator profiles, verified publishing, security reviews, ratings,
                version history, and one-click installation. Until it is ready, community skills
                will not appear in the public Lumo Hub.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-xs text-slate-300">
                {[
                  'Verified creators',
                  'Security review',
                  'Ratings',
                  'Version history',
                  'One-click install',
                ].map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </MarketingShell>
  )
}
