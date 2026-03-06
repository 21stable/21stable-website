'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function Header() {
  const { lang, setLang, t } = useLang()
  
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <svg viewBox="0 0 60 60" className="w-14 h-14">
            <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
            <text x="8" y="40" fontSize="26" fill="currentColor" className="text-foreground" style={{fontFamily: 'Georgia, serif'}}>21</text>
            <line x1="12" y1="48" x2="48" y2="48" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
          </svg>
          <span className="font-serif text-3xl tracking-tight text-foreground group-hover:text-muted transition-colors">
            21Stable
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/produkte" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
            {t('nav.produkte')}
          </Link>
          <Link href="/team" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
            {t('nav.team')}
          </Link>
          <Link href="/kontakt" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
            {t('nav.kontakt')}
          </Link>
          <button 
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors duration-200 border border-border px-2 py-1"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
        </div>
      </nav>
    </header>
  )
}