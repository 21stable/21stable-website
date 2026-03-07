'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

export default function TeamPage() {
  const { t } = useLang()

  const agents = [
    { id: '01', name: 'Chief Scientific Officer', role: 'Strategische Planung', focus: 'Studienprotokolle, Endpunkte, Regulatory' },
    { id: '02', name: 'Biostatistiker', role: 'Statistische Analyse', focus: 'SAS/R, Datenanalyse, Reporting' },
    { id: '03', name: 'Data Engineer', role: 'Datenmanagement', focus: 'CRFs, Datenbanken, Qualität' },
    { id: '04', name: 'Biostatistiker/ML', role: 'Modellierung', focus: 'Vorhersagemodelle, ML, Simulationen' },
    { id: '05', name: 'Regulatory Manager', role: 'Zulassung', focus: 'Dossiers, Behörden, FDA/EMA' },
    { id: '06', name: 'DevOps Engineer', role: 'Infrastruktur', focus: 'Cloud, Validierung, Sicherheit' },
    { id: '07', name: 'Software Engineer', role: 'Entwicklung', focus: 'Dashboards, APIs, Integration' },
    { id: '08', name: 'Legal Counsel', role: 'Rechtliche Beratung', focus: 'DSGVO, Verträge, Compliance' },
    { id: '09', name: 'Clinical Scientist', role: 'Klinische Expertise', focus: 'Medizin, Studienprotokolle' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero */}
        <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/team-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-overlay" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-6">
              {t('nav.team')}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground leading-[1.1] mb-6 sm:mb-8 tracking-tight">
              {t('team.title')}
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
              {t('team.desc')}
            </p>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 sm:py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">Leadership</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-8 sm:mb-12">
              Geschäftsführung
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 sm:gap-8 p-6 sm:p-8 bg-background border border-border">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-2">Dr. rer. nat. Sina Stäble</h3>
                <p className="text-sm text-muted mb-4">Chief Executive Officer</p>
                <p className="text-sm text-muted leading-relaxed">
                  Biostatistik, klinische Studien, frühe Phase Entwicklung
                </p>
              </div>
              <div className="flex flex-col gap-4 text-sm text-muted">
                <p>21Stable wurde von Dr. Sina Stäble gegründet, um biostatistische Expertise mit modernster KI-Unterstützung zu verbinden.</p>
                <p>Unser Ansatz: KI-Agenten übernehmen routinemäßige Analysen und Qualitätskontrollen, während unsere Experten sich auf strategische Entscheidungen und komplexe Probleme konzentrieren.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">KI-Agenten</p>
            <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-8 sm:mb-12">
              Specialized AI Agents
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {agents.map((agent) => (
                <div 
                  key={agent.id} 
                  className="p-6 sm:p-8 bg-background hover:bg-surface-hover transition-colors"
                >
                  <span className="text-3xl font-serif text-muted block mb-4">{agent.id}</span>
                  <h3 className="font-serif text-lg text-foreground mb-2">{agent.name}</h3>
                  <p className="text-sm text-muted mb-3">{agent.role}</p>
                  <p className="text-xs text-subtle">{agent.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 sm:py-24 bg-foreground text-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-wider text-background/40 mb-4">Philosophie</p>
              <h2 className="font-serif text-2xl sm:text-3xl mb-6">
                Mensch + KI = Przision & Effizienz
              </h2>
              <p className="text-sm sm:text-base text-background/60 leading-relaxed mb-4">
                Unsere KI-Agenten arbeiten rund um die Uhr, analysieren Daten in Echtzeit und stellen sicher, dass jede Studie nach höchsten Standards durchgeführt wird.
              </p>
              <p className="text-sm sm:text-base text-background/60 leading-relaxed">
                Die finale Verantwortung und strategische Entscheidungen liegen immer bei unserer menschlichen Expertin.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}