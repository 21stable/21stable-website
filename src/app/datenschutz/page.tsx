'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

export default function DatenschutzPage() {
  const { lang } = useLang()
  
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
              backgroundImage: 'url(/produkte-bg.svg)'
            }}
          />
          <div className="absolute inset-0 bg-overlay" />
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <p className="text-xs uppercase tracking-wider text-muted mb-4">
              {lang === 'de' ? 'Rechtliches' : 'Legal'}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
              {lang === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            {lang === 'de' ? (
              <div className="space-y-8">
                {/* Einleitung */}
                <div className="space-y-4">
                  <p className="text-muted leading-relaxed">
                    Wir haben diese Datenschutzerklärung (Fassung Januar 2025) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.
                  </p>
                  <p className="text-foreground font-medium">
                    Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Datenschutzerklärungen klingen für gewöhnlich sehr technisch. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Wir informieren in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist.
                  </p>
                </div>

                <hr className="border-border" />

                {/* 1. Anwendungsbereich */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">1. Anwendungsbereich</h2>
                  <p className="text-muted leading-relaxed">
                    Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person.
                  </p>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> Social Media Auftritte und E-Mail-Kommunikation</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> mobile Apps für Smartphones und andere Geräte</li>
                  </ul>
                </div>

                <hr className="border-border" />

                {/* 2. Rechtsgrundlagen */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">2. Rechtsgrundlagen</h2>
                  <p className="text-muted leading-relaxed">
                    In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie auf EUR-Lex unter <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679" target="_blank" rel="noopener noreferrer" className="text-foreground underline hover:no-underline">eur-lex.europa.eu</a> nachlesen.
                  </p>
                  <p className="text-muted leading-relaxed">Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
                  <ul className="space-y-3 text-muted">
                    <li className="flex items-start gap-2"><span className="text-foreground">1.</span> <strong className="text-foreground">Einwilligung (Artikel 6 Absatz 1 lit. a DSGVO):</strong> Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">2.</span> <strong className="text-foreground">Vertrag (Artikel 6 Absatz 1 lit. b DSGVO):</strong> Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">3.</span> <strong className="text-foreground">Rechtliche Verpflichtung (Artikel 6 Absatz 1 lit. c DSGVO):</strong> Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">4.</span> <strong className="text-foreground">Berechtigte Interessen (Artikel 6 Absatz 1 lit. f DSGVO):</strong> Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                {/* 3. Kontaktdaten */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">3. Kontaktdaten des Verantwortlichen</h2>
                  <p className="text-muted leading-relaxed">
                    Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten des Verantwortlichen:
                  </p>
                  <div className="bg-background p-6 border border-border">
                    <p className="text-foreground font-medium">21Stable Biostatistics Consulting</p>
                    <p className="text-muted">Dr. rer. nat. Sina Stäble</p>
                    <p className="text-muted">Krähenweg 7</p>
                    <p className="text-muted">76646 Bruchsal</p>
                    <p className="text-muted">Deutschland</p>
                    <p className="mt-4">
                      <a href="mailto:21stable@proton.me" className="text-foreground underline hover:no-underline">21stable@proton.me</a>
                    </p>
                  </div>
                </div>

                <hr className="border-border" />

                {/* 4. Ihre Rechte */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">4. Ihre Rechte</h2>
                  <p className="text-muted leading-relaxed">Sie haben folgende Rechte:</p>
                  <ul className="space-y-2 text-muted">
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> <strong className="text-foreground">Auskunft (Art. 15 DSGVO):</strong> Auskunft über Ihre bei uns gespeicherten Daten.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> <strong className="text-foreground">Berichtigung (Art. 16 DSGVO):</strong> Berichtigung unrichtiger Daten.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> <strong className="text-foreground">Löschung (Art. 17 DSGVO):</strong> Löschung Ihrer Daten.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> <strong className="text-foreground">Einschränkung (Art. 18 DSGVO):</strong> Einschränkung der Verarbeitung.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> <strong className="text-foreground">Datenübertragbarkeit (Art. 20 DSGVO):</strong> Herausgabe Ihrer Daten in maschinenlesbarem Format.</li>
                    <li className="flex items-start gap-2"><span className="text-foreground">—</span> <strong className="text-foreground">Widerspruch (Art. 21 DSGVO):</strong> Widerspruch gegen die Verarbeitung.</li>
                  </ul>
                </div>

                <hr className="border-border" />

                {/* 5. Datenspeicherung */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">5. Datenspeicherung</h2>
                  <p className="text-muted leading-relaxed">
                    Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies für die Erfüllung der Zwecke erforderlich ist, für die sie erhoben wurden, oder sofern dies gesetzlich vorgeschrieben ist.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Nach Ablauf der Speicherfrist werden Ihre Daten regelmäßig gelöscht, sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind und keine gesetzlichen Aufbewahrungspflichten bestehen.
                  </p>
                </div>

                <hr className="border-border" />

                {/* 6. Cookies */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">6. Cookies</h2>
                  <p className="text-muted leading-relaxed">
                    Wir verwenden auf unserer Website keine Tracking-Cookies oder Analyse-Tools. Ihre Privatsphäre steht für uns an erster Stelle.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Technisch notwendige Cookies (z.B. für die Spracheinstellung oder Dark Mode) werden lokal in Ihrem Browser gespeichert und nicht an Dritte übertragen.
                  </p>
                </div>

                <hr className="border-border" />

                {/* 7. Kontakt */}
                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">7. Kontakt</h2>
                  <p className="text-muted leading-relaxed">
                    Bei Fragen zum Datenschutz erreichen Sie uns unter:
                  </p>
                  <p className="text-muted leading-relaxed">
                    <strong className="text-foreground">E-Mail:</strong> <a href="mailto:21stable@proton.me" className="text-foreground underline hover:no-underline">21stable@proton.me</a>
                  </p>
                </div>

                {/* Footer Note */}
                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-xs text-subtle">
                    Stand: Januar 2025 | Diese Datenschutzerklärung wurde sorgfältig erstellt, erhebt aber keinen Anspruch auf Vollständigkeit.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {/* English version */}
                <div className="space-y-4">
                  <p className="text-muted leading-relaxed">
                    We have written this privacy policy (version January 2025) to explain in accordance with the requirements of the General Data Protection Regulation (EU) 2016/679 and applicable national laws which personal data (data for short) we process as controllers, will process in the future and what lawful options you have.
                  </p>
                  <p className="text-foreground font-medium">
                    In short: We inform you comprehensively about data we process about you.
                  </p>
                </div>

                <hr className="border-border" />

                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">1. Scope</h2>
                  <p className="text-muted leading-relaxed">
                    This privacy policy applies to all personal data processed by us in the company and for all personal data processed by companies commissioned by us (processors).
                  </p>
                </div>

                <hr className="border-border" />

                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">2. Legal Basis</h2>
                  <p className="text-muted leading-relaxed">
                    We process your data only if at least one of the following conditions applies: Consent (Art. 6 para. 1 lit. a GDPR), Contract (Art. 6 para. 1 lit. b GDPR), Legal obligation (Art. 6 para. 1 lit. c GDPR), Legitimate interests (Art. 6 para. 1 lit. f GDPR).
                  </p>
                </div>

                <hr className="border-border" />

                <div className="space-y-4">
                  <h2 className="font-serif text-xl sm:text-2xl text-foreground">3. Contact</h2>
                  <div className="bg-background p-6 border border-border">
                    <p className="text-foreground font-medium">21Stable Biostatistics Consulting</p>
                    <p className="text-muted">Dr. rer. nat. Sina Stäble</p>
                    <p className="text-muted">Krähenweg 7, 76646 Bruchsal, Germany</p>
                    <p className="mt-4">
                      <a href="mailto:21stable@proton.me" className="text-foreground underline hover:no-underline">21stable@proton.me</a>
                    </p>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <p className="text-xs text-subtle">
                    Version: January 2025
                  </p>
                </div>
              </div>
            )}
            
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}