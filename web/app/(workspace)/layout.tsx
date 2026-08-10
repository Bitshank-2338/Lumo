'use client'

import { usePathname } from 'next/navigation'
import WorkspaceSidebar from '@/components/sidebar/WorkspaceSidebar'
import AppShell from '@/components/layout/AppShell'
import { CapabilityAccessProvider } from '@/components/access/CapabilityAccessContext'
import CapabilityGate from '@/components/access/CapabilityGate'
import { UnifiedChatProvider } from '@/context/UnifiedChatContext'

export default function WorkspaceLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
  const publicSurface =
    pathname === '/' ||
    pathname.startsWith('/docs') ||
    pathname.startsWith('/hub') ||
    pathname.startsWith('/source')

  if (publicSurface) return children

  return (
    <CapabilityAccessProvider>
      <UnifiedChatProvider>
        <AppShell sidebar={<WorkspaceSidebar />}>
          <CapabilityGate>{children}</CapabilityGate>
        </AppShell>
      </UnifiedChatProvider>
    </CapabilityAccessProvider>
  )
}
