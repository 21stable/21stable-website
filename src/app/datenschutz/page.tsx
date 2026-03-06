'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

export default function DatenschutzPage() {
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
              {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </h1>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-xl space-y-8 text-muted leading-relaxed">
              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? '1. Datenschutz auf einen Blick' : '1. Privacy at a Glance'}
                </h2>
                <p>
                  {lang === 'de'
                    ? 'Diese Datenschutzerklärung klärt Sie über die Art, den Zweck und den Umfang der Verarbeitung personenbezogener Daten auf unserer Website auf.'
                    : 'This privacy policy informs you about the type, purpose, and scope of processing personal data on our website.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? '2. Verantwortlicher' : '2. Data Controller'}
                </h2>
                <p>
                  {lang === 'de' ? 'Verantwortlich für die Datenverarbeitung:' : 'Responsible for data processing:'}<br />
                  21Stable<br />
                  Dr. rer. nat. Sina Stäble<br />
                  Krähenweg 7<br />
                  76646 Bruchsal<br />
                  contact@21stable.dev
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? '3. Erfassung von Daten' : '3. Data Collection'}
                </h2>
                <p>
                  {lang === 'de'
                    ? 'Beim Besuch unserer Website werden automatisch Informationen an unseren Webserver gesendet. Diese umfassen: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage.'
                    : 'When visiting our website, information is automatically sent to our web server. This includes: browser type and version, operating system used, referrer URL, hostname of the accessing computer, time of server request.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? '4. Cookies' : '4. Cookies'}
                </h2>
                <p>
                  {lang === 'de'
                    ? 'Unsere Website verwendet keine Cookies zur Analyse oder zum Tracking. Technisch notwendige Cookies werden nur für den Betrieb der Website verwendet.'
                    : 'Our website does not use cookies for analysis or tracking. Technically necessary cookies are only used for the operation of the website.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? '5. Kontakt' : '5. Contact'}
                </h2>
                <p>
                  {lang === 'de'
                    ? 'Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der Kontaktdaten zwecks Bearbeitung der Anfrage bei uns gespeichert.'
                    : 'If you contact us by email, your information including contact details will be stored for the purpose of processing your request.'}
                </p>
              </div>

              <div>
                <h2 className="font-serif text-lg text-foreground mb-2">
                  {lang === 'de' ? '6. Ihre Rechte' : '6. Your Rights'}
                </h2>
                <p>
                  {lang === 'de'
                    ? 'Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bei Fragen kontaktieren Sie uns unter '
                    : 'You have the right to information, correction, deletion, restriction of processing, data portability, and objection. For questions, contact us at '}
                  <a href="mailto:contact@21stable.dev" className="text-foreground hover:text-muted transition-colors duration-200">
                    contact@21stable.dev
                  </a>.
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