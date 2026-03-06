'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Services from '@/components/Services'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export default function Home() {
  const { t } = useLang()
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero with SVG Background */}
        <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/hero-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-white/88" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-wider text-muted mb-6">
                {t('hero.tagline')}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-6 sm:mb-8 tracking-tight">
                {t('hero.title')}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted leading-relaxed mb-8 sm:mb-12 max-w-xl">
                {t('hero.desc')}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link 
                  href="/produkte" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-muted transition-colors duration-200"
                >
                  {t('hero.cta.services')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/kontakt" 
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium hover:border-foreground transition-colors duration-200"
                >
                  {t('hero.cta.contact')}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* AI Advantage */}
        <section className="py-16 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-8 sm:mb-12">
              <p className="text-xs uppercase tracking-wider text-muted mb-4">{t('ai.advantage.tagline')}</p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                {t('ai.advantage.title')}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
              <div className="border border-border p-4 sm:p-6 bg-white hover:bg-surfaceHover transition-colors">
                <p className="font-serif text-base sm:text-lg text-foreground mb-2">{t('ai.availability.title')}</p>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {t('ai.availability.desc')}
                </p>
              </div>
              <div className="border border-border p-4 sm:p-6 bg-white hover:bg-surfaceHover transition-colors">
                <p className="font-serif text-base sm:text-lg text-foreground mb-2">{t('ai.scalability.title')}</p>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {t('ai.scalability.desc')}
                </p>
              </div>
              <div className="border border-border p-4 sm:p-6 bg-white hover:bg-surfaceHover transition-colors">
                <p className="font-serif text-base sm:text-lg text-foreground mb-2">{t('ai.expertise.title')}</p>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {t('ai.expertise.desc')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services with SVG Background */}
        <section className="relative py-16 sm:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/services-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-white/88" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-baseline justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <p className="text-xs uppercase tracking-wider text-muted mb-4">{t('services.title')}</p>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground">
                  {t('services.title')}
                </h2>
              </div>
              <Link 
                href="/produkte" 
                className="group text-sm text-muted hover:text-foreground transition-colors duration-200 flex items-center gap-2 whitespace-nowrap"
              >
                {t('services.viewAll')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <Services />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  )
}