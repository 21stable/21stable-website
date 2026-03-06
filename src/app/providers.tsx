'use client'

import { LangProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>
        {children}
      </LangProvider>
    </ThemeProvider>
  )
}
