'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useLang } from '@/lib/i18n'

export default function ProduktePage() {
  const { t, lang } = useLang()
  
  const products = [
    { id: '01', tag: t('products.01.tag'), title: t('products.01.title'), body: t('products.01.desc'), features: [t('products.01.f1'), t('products.01.f2'), t('products.01.f3'), t('products.01.f4'), t('products.01.f5')], featured: true },
    { id: '02', tag: t('products.02.tag'), title: t('products.02.title'), body: t('products.02.desc'), features: [t('products.02.f1'), t('products.02.f2'), t('products.02.f3'), t('products.02.f4')], featured: false },
    { id: '03', tag: t('products.03.tag'), title: t('products.03.title'), body: t('products.03.desc'), features: [t('products.03.f1'), t('products.03.f2'), t('products.03.f3'), t('products.03.f4')], featured: false },
    { id: '04', tag: t('products.04.tag'), title: t('products.04.title'), body: t('products.04.desc'), features: [t('products.04.f1'), t('products.04.f2'), t('products.04.f3'), t('products.04.f4')], featured: false },
    { id: '05', tag: t('products.05.tag'), title: t('products.05.title'), body: t('products.05.desc'), features: [t('products.05.f1'), t('products.05.f2'), t('products.05.f3'), t('products.05.f4')], featured: false },
    { id: '06', tag: t('products.06.tag'), title: t('products.06.title'), body: t('products.06.desc'), features: [t('products.06.f1'), t('products.06.f2'), t('products.06.f3'), t('products.06.f4')], featured: false },
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
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero with SVG Background */}
        <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/produkte-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-overlay" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-6">
              {t('products.tagline')}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.1] mb-6 sm:mb-8 tracking-tight max-w-2xl">
              {t('hero.title')}
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              {t('hero.desc')}
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">{t('products.section')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">{t('products.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-6 sm:p-8 relative group ${
                    product.featured
                      ? 'bg-foreground text-background'
                      : 'bg-background hover:bg-surface-hover'
                  }`}
                >
                  <p className="text-xs uppercase tracking-wider text-muted mb-4">{product.tag}</p>
                  <h3 className={`font-serif text-lg sm:text-xl mb-4 ${product.featured ? 'text-background' : 'text-foreground'}`}>
                    {product.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${product.featured ? 'text-background/60' : 'text-muted'}`}>
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
        <section className="py-16 sm:py-24 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-8">{t('methods.section')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">
              {t('methods.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-background/40 mb-4">
              {t('phases.section')}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-background mb-8 sm:mb-12">
              {t('phases.title')}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border border-background/20">
              {phases.map((phase) => (
                <div
                  key={phase.label}
                  className={`p-6 sm:p-8 border-r last:border-r-0 border-background/20 sm:border-b lg:border-b-0 ${
                    phase.active ? 'bg-background text-foreground' : ''
                  }`}
                >
                  <p className={`text-xs uppercase tracking-wider mb-2 ${phase.active ? 'text-muted' : 'text-background/40'}`}>
                    {phase.label}
                  </p>
                  <p className={`font-serif text-lg font-medium mb-2 ${phase.active ? 'text-foreground' : 'text-background'}`}>
                    {phase.name}
                  </p>
                  <p className={`text-sm leading-relaxed ${phase.active ? 'text-muted' : 'text-background/50'}`}>
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consulting */}
        <section id="beratung" className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">{t('consulting.section')}</p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-8 sm:mb-12">{t('consulting.title')}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16">
              <div className="flex flex-col gap-px bg-border border border-border">
                {consultingModels.map((model) => (
                  <div key={model.type} className="bg-background p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-[1fr_2fr] gap-4 sm:gap-8 hover:bg-surface-hover transition-colors">
                    <p className="text-xs uppercase tracking-wider text-muted">{model.type}</p>
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-2">{model.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{model.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="p-6 sm:p-8 bg-foreground text-background">
                <h3 className="font-serif text-xl mb-6">{t('expertise.title')}</h3>
                <ul className="flex flex-col gap-3 mb-8">
                  {expertise.map((item) => (
                    <li key={item} className="text-sm text-background/60 flex gap-3">
                      <span className="text-background/40">→</span>
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
      </main>
      <Footer />
    </>
  )
}