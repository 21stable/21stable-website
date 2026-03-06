'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, User } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export default function KontaktPage() {
  const { lang, t } = useLang()

  const CONTACT_EMAIL = '21stable@proton.me'

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero with SVG Background */}
        <section className="relative pt-24 pb-24 sm:pt-32 sm:pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-top bg-no-repeat"
            style={{ 
              backgroundPosition: '50% 0',
              backgroundImage: 'url(/kontakt-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-white/88" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">
              {lang === 'de' ? 'Kontakt' : 'Contact'}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
              {lang === 'de' ? 'Kontaktieren Sie uns' : 'Get in touch'}
            </h1>
            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              {lang === 'de' 
                ? 'Wir freuen uns auf Ihre Anfrage. Kontaktieren Sie uns direkt per E-Mail.'
                : 'We look forward to your inquiry. Contact us directly via email.'}
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="max-w-2xl">
              
              {/* Email */}
              <div className="mb-12">
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-6">
                  {lang === 'de' ? 'E-Mail' : 'Email'}
                </h2>
                <a 
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-serif text-foreground hover:text-muted transition-colors duration-200"
                >
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
                  {CONTACT_EMAIL}
                </a>
                <p className="text-sm text-muted mt-3">
                  {lang === 'de' 
                    ? 'Wir antworten innerhalb eines Werktages.'
                    : 'We respond within one business day.'}
                </p>
              </div>

              {/* Contact Details */}
              <div className="border-t border-border pt-12">
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-6">
                  {lang === 'de' ? 'Kontaktinformationen' : 'Contact information'}
                </h2>

                <div className="space-y-6 sm:space-y-8">
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

                  {/* Email (repeat) */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-subtle mb-1">E-Mail</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:text-muted transition-colors duration-200">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="border border-border p-6 sm:p-8 mt-12 rounded">
                <h3 className="font-serif text-lg sm:text-xl text-foreground mb-4">
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

              {/* Privacy Note */}
              <div className="mt-8 p-4 bg-surface border border-border rounded">
                <p className="text-xs text-muted">
                  <strong>🔒 {lang === 'de' ? 'Datenschutz' : 'Privacy'}:</strong>{' '}
                  {lang === 'de' 
                    ? 'Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer '
                    : 'Your data is used exclusively to answer your inquiry. More information in our '}
                  <a href="/datenschutz" className="text-foreground hover:underline">{lang === 'de' ? 'Datenschutzerklärung' : 'privacy policy'}.</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
