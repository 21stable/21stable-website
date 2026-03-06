'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, User } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export default function KontaktPage() {
  const { lang } = useLang()
  
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
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
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">
              {lang === 'de' ? 'Kontakt' : 'Contact'}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6 tracking-tight">
              {lang === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              {lang === 'de' 
                ? 'Kontaktieren Sie uns für Ihr Projekt. Wir antworten innerhalb eines Werktages.'
                : 'Contact us to discuss your project. We respond within one business day.'}
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {/* CEO Contact */}
                <div className="flex items-start gap-4">
                  <User className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-subtle mb-1">
                      {lang === 'de' ? 'Geschäftsführung' : 'CEO'}
                    </p>
                    <p className="text-foreground font-medium">Dr. rer. nat. Sina Stäble</p>
                    <p className="text-sm text-muted">Chief Executive Officer</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-subtle mb-1">
                      {lang === 'de' ? 'Adresse' : 'Address'}
                    </p>
                    <p className="text-foreground">
                      21Stable<br />
                      Krähenweg 7<br />
                      76646 Bruchsal<br />
                      {lang === 'de' ? 'Deutschland' : 'Germany'}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-subtle mb-1">E-Mail</p>
                    <a href="mailto:contact@21stable.dev" className="text-foreground hover:text-muted transition-colors duration-200">
                      contact@21stable.dev
                    </a>
                  </div>
                </div>
              </div>

              <div className="border border-border p-6">
                <h3 className="font-serif text-lg text-foreground mb-4">
                  {lang === 'de' ? 'Was Sie erwarten können' : 'What to expect'}
                </h3>
                <ul className="space-y-3 text-sm text-muted">
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">—</span>
                    {lang === 'de' ? 'Antwort innerhalb eines Werktages' : 'Response within one business day'}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">—</span>
                    {lang === 'de' ? 'Erstgespräch zur Bedarfsanalyse' : 'Initial consultation to understand your needs'}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">—</span>
                    {lang === 'de' ? 'Individuelles Angebot mit Zeitplan' : 'Customized proposal with timeline and scope'}
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-foreground">—</span>
                    {lang === 'de' ? 'NDA auf Anfrage verfügbar' : 'NDA available upon request'}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}