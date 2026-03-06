'use client'

import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function ProduktePage() {
  const { t, lang } = useLang()
  
  const products = [
    { num: '01', tag: t('products.01.tag'), title: t('products.01.title'), body: t('products.01.desc'), features: [t('products.01.f1'), t('products.01.f2'), t('products.01.f3'), t('products.01.f4'), t('products.01.f5')], featured: true },
    { num: '02', tag: t('products.02.tag'), title: t('products.02.title'), body: t('products.02.desc'), features: [t('products.02.f1'), t('products.02.f2'), t('products.02.f3'), t('products.02.f4')], featured: false },
    { num: '03', tag: t('products.03.tag'), title: t('products.03.title'), body: t('products.03.desc'), features: [t('products.03.f1'), t('products.03.f2'), t('products.03.f3'), t('products.03.f4')], featured: false },
    { num: '04', tag: t('products.04.tag'), title: t('products.04.title'), body: t('products.04.desc'), features: [t('products.04.f1'), t('products.04.f2'), t('products.04.f3'), t('products.04.f4')], featured: false },
    { num: '05', tag: t('products.05.tag'), title: t('products.05.title'), body: t('products.05.desc'), features: [t('products.05.f1'), t('products.05.f2'), t('products.05.f3'), t('products.05.f4')], featured: false },
    { num: '06', tag: t('products.06.tag'), title: t('products.06.title'), body: t('products.06.desc'), features: [t('products.06.f1'), t('products.06.f2'), t('products.06.f3'), t('products.06.f4')], featured: false },
  ]
  
  const methods = [
    { title: t('methods.01.title'), body: t('methods.01.desc') },
    { title: t('methods.02.title'), body: t('methods.02.desc') },
    { title: t('methods.03.title'), body: t('methods.03.desc') },
    { title: t('methods.04.title'), body: t('methods.04.desc') },
  ]
  
  const phases = [
    { label: 'Phase I', name: 'First-in-Human', desc: t('phases.01.desc'), active: true },
    { label: 'Phase I/II', name: 'Dose Optimization', desc: t('phases.02.desc'), active: true },
    { label: 'Phase II', name: 'Proof of Concept', desc: t('phases.03.desc'), active: true },
    { label: 'Phase III', name: 'Pivotal Studies', desc: t('phases.04.desc'), active: false },
    { label: 'Post-Market', name: 'Phase IV', desc: t('phases.05.desc'), active: false },
  ]
  
  const consultingModels = [
    { type: t('consulting.01.type'), title: t('consulting.01.title'), body: t('consulting.01.desc') },
    { type: t('consulting.02.type'), title: t('consulting.02.title'), body: t('consulting.02.desc') },
    { type: t('consulting.03.type'), title: t('consulting.03.title'), body: t('consulting.03.desc') },
    { type: t('consulting.04.type'), title: t('consulting.04.title'), body: t('consulting.04.desc') },
  ]
  
  const expertise = [
    t('expertise.01'), t('expertise.02'), t('expertise.03'), t('expertise.04'), t('expertise.05'), t('expertise.06'), t('expertise.07')
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
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
          <div className="flex items-center gap-8">
            <Link href="/produkte" className="text-sm text-foreground transition-colors duration-200">
              {t('nav.produkte')}
            </Link>
            <Link href="/team" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
              {t('nav.team')}
            </Link>
            <Link href="/kontakt" className="text-sm text-muted hover:text-foreground transition-colors duration-200">
              {t('nav.kontakt')}
            </Link>
            <button 
              onClick={() => {}} 
              className="text-xs uppercase tracking-wider text-muted hover:text-foreground transition-colors duration-200 border border-border px-2 py-1"
            >
              {lang === 'de' ? 'EN' : 'DE'}
            </button>
          </div>
        </nav>
      </header>

      {/* Hero with SVG Background */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ 
            backgroundPosition: '50% 0',
            backgroundImage: 'url(/produkte-bg.svg)'
          }}
        />
        <div className="absolute inset-0 bg-white/88" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-muted mb-6">
            {t('products.tagline')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-[1.1] mb-8 tracking-tight max-w-2xl">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl">
            {t('hero.desc')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-muted mb-4">{t('products.section')}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">{t('products.title')}</h2>

          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {products.map((product) => (
              <div
                key={product.num}
                className={`p-8 relative group ${
                  product.featured
                    ? 'bg-foreground text-background'
                    : 'bg-white hover:bg-surfaceHover'
                }`}
              >
                <span className={`absolute top-6 right-6 font-serif text-5xl font-bold leading-none pointer-events-none ${
                  product.featured ? 'text-white/20' : 'text-border group-hover:text-muted/30'
                }`}>
                  {product.num}
                </span>
                <p className="text-xs uppercase tracking-wider text-muted mb-4">{product.tag}</p>
                <h3 className={`font-serif text-xl mb-4 ${product.featured ? 'text-background' : 'text-foreground'}`}>
                  {product.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${product.featured ? 'text-white/60' : 'text-muted'}`}>
                  {product.body}
                </p>
                <ul className="flex flex-col gap-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className={`text-sm flex items-start gap-2 ${product.featured ? 'text-background' : 'text-foreground'}`}>
                      <span className="text-muted mt-0.5">–</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-muted mb-8">{t('methods.section')}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">
            {t('methods.title')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {methods.map((method) => (
              <div key={method.title}>
                <h3 className="text-sm font-medium uppercase tracking-wider mb-2 flex items-center gap-3">
                  <span className="w-4 h-px bg-foreground"></span>
                  {method.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{method.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-white/40 mb-4">
            {t('phases.section')}
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-background mb-12">
            {t('phases.title')}
          </h2>
          <div className="grid md:grid-cols-5 border border-white/20">
            {phases.map((phase) => (
              <div
                key={phase.label}
                className={`p-8 border-r last:border-r-0 border-white/20 ${
                  phase.active ? 'bg-background text-foreground' : ''
                }`}
              >
                <p className={`text-xs uppercase tracking-wider mb-2 ${phase.active ? 'text-muted' : 'text-white/40'}`}>
                  {phase.label}
                </p>
                <p className={`font-serif text-lg font-medium mb-2 ${phase.active ? 'text-foreground' : 'text-background'}`}>
                  {phase.name}
                </p>
                <p className={`text-sm leading-relaxed ${phase.active ? 'text-muted' : 'text-white/50'}`}>
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section id="beratung" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs uppercase tracking-wider text-muted mb-4">{t('consulting.section')}</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-12">{t('consulting.title')}</h2>

          <div className="grid md:grid-cols-[3fr_2fr] gap-16">
            <div className="flex flex-col gap-px bg-border border border-border">
              {consultingModels.map((model) => (
                <div key={model.type} className="bg-white p-8 grid md:grid-cols-[1fr_2fr] gap-8 hover:bg-surfaceHover transition-colors">
                  <p className="text-xs uppercase tracking-wider text-muted">{model.type}</p>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-2">{model.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{model.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="p-8 bg-foreground text-background">
              <h3 className="font-serif text-xl mb-6">{t('expertise.title')}</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {expertise.map((item) => (
                  <li key={item} className="text-sm text-white/60 flex gap-3">
                    <span className="text-white/40">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/kontakt" className="inline-block px-6 py-3 bg-background text-foreground text-sm font-medium hover:bg-surface transition-colors">
                {t('cta.button.primary')}
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="font-serif text-lg text-foreground">21Stable</Link>
          <p className="text-xs text-muted">{t('footer.tagline')}</p>
        </div>
      </footer>
    </div>
  )
}