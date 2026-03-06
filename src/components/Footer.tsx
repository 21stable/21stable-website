'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLang()
  
  return (
    <footer className="border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg viewBox="0 0 60 60" className="w-10 h-10">
                <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" fill="none" className="text-foreground"/>
                <text x="8" y="40" fontSize="26" fill="currentColor" className="text-foreground" style={{fontFamily: 'Georgia, serif'}}>21</text>
                <line x1="12" y1="48" x2="48" y2="48" stroke="currentColor" strokeWidth="2" className="text-foreground"/>
              </svg>
              <span className="font-serif text-2xl text-foreground">21Stable</span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              KI-gestützte Biostatistik-Beratung für frühe Arzneimittelentwicklung.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-subtle mb-3">{t('nav.produkte')}</p>
            <div className="flex flex-col gap-2">
              <Link href="/produkte" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                {t('products.01.title')}
              </Link>
              <Link href="/produkte" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                {t('products.02.title')}
              </Link>
              <Link href="/produkte" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                {t('products.03.title')}
              </Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-subtle mb-3">Rechtliches</p>
            <div className="flex flex-col gap-2">
              <Link href="/impressum" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                {t('impressum.title')}
              </Link>
              <Link href="/datenschutz" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
                {t('datenschutz.title')}
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-subtle">
            {t('footer.tagline')}
          </p>
        </div>
      </div>
    </footer>
  )
}