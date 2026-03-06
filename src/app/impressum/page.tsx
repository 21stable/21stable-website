'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

export default function ImpressumPage() {
  const { lang } = useLang()
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="relative pt-32 pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/produkte-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-white/88" />
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">
              {lang === 'de' ? 'Rechtliches' : 'Legal'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
              {lang === 'de' ? 'Impressum' : 'Legal Notice'}
            </h1>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl space-y-8 text-muted">
              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? 'Angaben gemäß § 5 TMG' : 'Information according to § 5 TMG'}
                </h2>
                <p className="leading-relaxed">
                  21Stable<br />
                  Dr. rer. nat. Sina Stäble<br />
                  Krähenweg 7<br />
                  76646 Bruchsal<br />
                  {lang === 'de' ? 'Deutschland' : 'Germany'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? 'Kontakt' : 'Contact'}
                </h2>
                <p className="leading-relaxed">
                  E-Mail: 21stable@proton.me
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? 'Vertreten durch' : 'Represented by'}
                </h2>
                <p className="leading-relaxed">
                  Dr. rer. nat. Sina Stäble<br />
                  {lang === 'de' ? 'Geschäftsführerin' : 'Chief Executive Officer'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? 'Berufsbezeichnung' : 'Professional title'}
                </h2>
                <p className="leading-relaxed">
                  {lang === 'de' 
                    ? 'Dr. rer. nat. (Doktor der Naturwissenschaften)' 
                    : 'Dr. rer. nat. (Doctor of Natural Sciences)'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? 'EU-Streitschlichtung' : 'EU Dispute Resolution'}
                </h2>
                <p className="leading-relaxed text-sm">
                  {lang === 'de' 
                    ? 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:' 
                    : 'The European Commission provides a platform for online dispute resolution (OS):'}
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    className="text-foreground hover:text-muted ml-1 transition-colors duration-200"
                  >
                    ec.europa.eu/consumers/odr/
                  </a>
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? 'Haftung für Inhalte' : 'Liability for Content'}
                </h2>
                <p className="leading-relaxed text-sm">
                  {lang === 'de'
                    ? 'Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.'
                    : 'The contents of our pages have been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.'}
                </p>
              </div>

              <p className="text-xs text-subtle pt-8 border-t border-border">
                {lang === 'de' ? 'Stand: März 2025' : 'Last updated: March 2025'}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}