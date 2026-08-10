/* eslint-disable i18n/no-literal-ui-text -- Public source and deployment copy is intentionally English-first. */
import { ArrowUpRight, Github, Globe2, HeartHandshake, ServerCog } from 'lucide-react'

import { MarketingShell } from '@/components/marketing/MarketingShell'

const githubUrl =
  process.env.NEXT_PUBLIC_LUMO_GITHUB_URL || 'https://github.com/Bitshank-2338/Lumo'
const siteUrl = process.env.NEXT_PUBLIC_LUMO_SITE_URL

export default function SourcePage() {
  return (
    <MarketingShell>
      <main className="px-5 pb-24 pt-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Open foundation, distinct direction
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] sm:text-7xl">
              Lumo’s source, credits, and home.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Everything public-facing is ready for your future domain and repository. Add the two
              environment values below when those destinations exist—no design changes are required.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-[#0b0e1b] p-7">
              <Github className="text-violet-300" />
              <h2 className="mt-6 text-xl font-semibold">Lumo on GitHub</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Set{' '}
                <code className="rounded bg-white/10 px-1.5 py-1 text-slate-300">
                  NEXT_PUBLIC_LUMO_GITHUB_URL
                </code>{' '}
                after creating the repository. Every GitHub link will point there.
              </p>
              {githubUrl ? (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300"
                >
                  Open repository <ArrowUpRight size={15} />
                </a>
              ) : (
                <p className="mt-6 text-xs text-amber-200/70">
                  Repository URL is waiting to be configured.
                </p>
              )}
            </article>
            <article className="rounded-2xl border border-white/10 bg-[#0b0e1b] p-7">
              <Globe2 className="text-cyan-300" />
              <h2 className="mt-6 text-xl font-semibold">Your Lumo domain</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Set{' '}
                <code className="rounded bg-white/10 px-1.5 py-1 text-slate-300">
                  NEXT_PUBLIC_LUMO_SITE_URL
                </code>{' '}
                to your final HTTPS address when you acquire the domain.
              </p>
              {siteUrl ? (
                <a
                  href={siteUrl}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                >
                  Visit live site <ArrowUpRight size={15} />
                </a>
              ) : (
                <p className="mt-6 text-xs text-amber-200/70">
                  Domain URL is waiting to be configured.
                </p>
              )}
            </article>
          </div>
          <section className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-emerald-300/10 p-3 text-emerald-300">
                <HeartHandshake size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Credits and licensing</h2>
                <p className="mt-3 leading-7 text-slate-400">
                  Lumo is an independent custom build based on DeepTutor by the Data Intelligence
                  Lab at The University of Hong Kong. The foundation is licensed under Apache
                  License 2.0; original copyright, license, and attribution notices remain in the
                  source distribution.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <a
                    href="https://github.com/HKUDS/DeepTutor"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-violet-300"
                  >
                    DeepTutor source <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://docs.deeptutor.info/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-violet-300"
                  >
                    DeepTutor docs <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="https://eduhub.deeptutor.info/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 text-violet-300"
                  >
                    EduHub <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-cyan-300/10 p-3 text-cyan-300">
                <ServerCog size={22} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Community skill policy</h2>
                <p className="mt-3 leading-7 text-slate-400">
                  Lumo Hub mirrors catalog metadata for discovery, but community packages stay at
                  their original EduHub source until a user chooses to import one. This preserves
                  creator attribution, published versions, and registry security information instead
                  of presenting third-party work as Lumo-owned.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </MarketingShell>
  )
}
