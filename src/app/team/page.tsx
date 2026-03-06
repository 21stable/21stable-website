'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

const teamEn = [
  { number: '01', role: 'Chief Scientific Officer', focus: 'Scientific leadership, regulatory strategy, clinical partner communication' },
  { number: '02', role: 'Bioinformatics & Genomics', focus: 'NGS analysis, variant interpretation, pipeline development' },
  { number: '03', role: 'Data Engineering & EHR', focus: 'Clinical data integration, FHIR/OMOP, data quality' },
  { number: '04', role: 'Biostatistics & ML', focus: 'Statistical modeling, predictive models, multi-omics integration' },
  { number: '05', role: 'DevOps & Infrastructure', focus: 'Cloud infrastructure, CI/CD, containerization' },
  { number: '06', role: 'Software Engineering', focus: 'Analysis tools, dashboards, APIs' },
  { number: '07', role: 'Clinical Science', focus: 'Clinical validation, study design, biomarker development' },
  { number: '08', role: 'Regulatory & Data Privacy', focus: 'GDPR compliance, ethics, IT security' },
  { number: '09', role: 'Legal & Healthcare Law', focus: 'Contracts, MDR/IVDR, IP protection' },
]

const teamDe = [
  { number: '01', role: 'Chief Scientific Officer', focus: 'Wissenschaftliche Leitung, Regulatorik, klinische Partnerkommunikation' },
  { number: '02', role: 'Bioinformatik & Genomik', focus: 'NGS-Analyse, Varianteninterpretation, Pipeline-Entwicklung' },
  { number: '03', role: 'Data Engineering & EHR', focus: 'Klinische Datenintegration, FHIR/OMOP, Datenqualität' },
  { number: '04', role: 'Biostatistik & ML', focus: 'Statistische Modellierung, Prädiktionsmodelle, Multi-Omics-Integration' },
  { number: '05', role: 'DevOps & Infrastruktur', focus: 'Cloud-Infrastruktur, CI/CD, Containerisierung' },
  { number: '06', role: 'Software Engineering', focus: 'Analyse-Tools, Dashboards, APIs' },
  { number: '07', role: 'Clinical Science', focus: 'Klinische Validierung, Studiendesign, Biomarker-Entwicklung' },
  { number: '08', role: 'Regulatory & Datenschutz', focus: 'DSGVO-Compliance, Ethik, IT-Sicherheit' },
  { number: '09', role: 'Recht & Gesundheitsrecht', focus: 'Verträge, MDR/IVDR, IP-Schutz' },
]

export default function TeamPage() {
  const { t, lang } = useLang()
  const team = lang === 'de' ? teamDe : teamEn
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero with SVG Background */}
        <section className="relative pt-32 pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/team-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-white/88" />
          
          <div className="relative max-w-6xl mx-auto px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-6">
              {lang === 'de' ? 'Unternehmen & Führung' : 'Company & Leadership'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
              {lang === 'de' ? 'Team' : 'Team'}
            </h1>
          </div>
        </section>

        {/* Leadership (Human) */}
        <section className="py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <div className="border border-border p-8 bg-white">
              <p className="text-xs uppercase tracking-wider text-muted mb-4">
                {lang === 'de' ? 'Unternehmensführung' : 'Leadership'}
              </p>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <h2 className="font-serif text-2xl text-foreground mb-2">
                    Dr. rer. nat. Sina Stäble
                  </h2>
                  <p className="text-sm uppercase tracking-wider text-muted mb-4">
                    {lang === 'de' ? 'Chief Executive Officer' : 'Chief Executive Officer'}
                  </p>
                  <p className="text-muted leading-relaxed">
                    {lang === 'de' 
                      ? 'Unternehmensführung, Strategie, Kundenbeziehungen, Wissenschaftliche Vision. Verantwortlich für die strategische Ausrichtung und den wissenschaftlichen Anspruch von 21Stable.'
                      : 'Executive leadership, corporate strategy, client relations, scientific vision. Responsible for strategic direction and scientific standards at 21Stable.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-wider text-muted mb-2">
                {lang === 'de' ? 'Spezialisierte KI-Agenten' : 'Specialized AI Agents'}
              </p>
              <p className="text-sm text-muted max-w-2xl">
                {lang === 'de' 
                  ? 'Jedes Teammitglied ist ein autonomer KI-Agent, spezialisiert auf seine Rolle in der Biostatistik und klinischen Entwicklung.'
                  : 'Each team member is an autonomous AI agent, specialized for their role in biostatistics and clinical development.'}
              </p>
            </div>
            <div className="space-y-0">
              {team.map((member) => (
                <div 
                  key={member.number}
                  className="group py-6 border-b border-border flex gap-8 items-start hover:bg-surfaceHover transition-colors duration-200 -mx-6 px-6"
                >
                  <span className="text-xs text-subtle font-mono w-8 flex-shrink-0 pt-1">
                    {member.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-foreground group-hover:translate-x-1 transition-transform duration-200">
                      {member.role}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mt-1">
                      {member.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}