/* eslint-disable i18n/no-literal-ui-text -- Public marketing copy is intentionally English-first. */
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight, Github } from 'lucide-react'

import { LumoBrand } from '@/components/brand/LumoBrand'

const githubUrl =
  process.env.NEXT_PUBLIC_LUMO_GITHUB_URL || 'https://github.com/Bitshank-2338/Lumo'

export function MarketingShell({ children }: { children: ReactNode }) {
  return (
    <div className="h-dvh overflow-y-auto bg-[#070914] text-white selection:bg-violet-400/30">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070914]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" aria-label="Lumo home">
            <LumoBrand className="[&_*]:!text-white" />
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <Link className="transition hover:text-white" href="/docs">
              Docs
            </Link>
            <Link className="transition hover:text-white" href="/hub">
              Lumo Hub
            </Link>
            <Link className="transition hover:text-white" href="/source">
              Source
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Lumo on GitHub"
                className="hidden rounded-full border border-white/10 p-2.5 text-slate-300 transition hover:border-white/25 hover:text-white sm:block"
              >
                <Github size={17} />
              </a>
            ) : null}
            <Link
              href="/home"
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#090b16] transition hover:bg-violet-100"
            >
              Open Lumo <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </header>
      {children}
      <footer className="border-t border-white/10 bg-[#050710]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-slate-400 sm:grid-cols-2 lg:px-8">
          <div>
            <LumoBrand className="[&_*]:!text-white" />
            <p className="mt-3 max-w-sm leading-6">
              An agent-native learning companion for understanding, planning, researching, and
              creating.
            </p>
          </div>
          <div className="flex gap-6 sm:justify-end">
            <Link href="/docs" className="hover:text-white">
              Docs
            </Link>
            <Link href="/hub" className="hover:text-white">
              Lumo Hub
            </Link>
            <Link href="/source" className="hover:text-white">
              Source & credits
            </Link>
          </div>
          <p className="text-xs text-slate-500 sm:col-span-2">
            Lumo is an independent custom build based on the open-source DeepTutor project.
          </p>
        </div>
      </footer>
    </div>
  )
}
