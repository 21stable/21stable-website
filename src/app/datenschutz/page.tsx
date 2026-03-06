'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useLang } from '@/lib/i18n'

export default function DatenschutzPage() {
  const { lang } = useLang()
  
  if (lang === 'de') {
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
                Datenschutzerklärung
              </h1>
            </div>
          </section>

          <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
              <div className="prose prose-neutral max-w-none">
                
                {/* Einleitung */}
                <div className="space-y-6 text-muted leading-relaxed">
                  <p>
                    Wir haben diese Datenschutzerklärung (Fassung Januar 2025) verfasst, um Ihnen gemäß der Vorgaben der Datenschutz-Grundverordnung (EU) 2016/679 und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.
                  </p>
                  <p className="font-medium text-foreground">
                    Kurz gesagt: Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
                  </p>
                  <p>
                    Datenschutzerklärungen klingen für gewöhnlich sehr technisch. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Wir informieren in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist.
                  </p>
                </div>

                <hr className="my-12 border-border" />

                {/* 1. Anwendungsbereich */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    1. Anwendungsbereich
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Der Anwendungsbereich dieser Datenschutzerklärung umfasst:
                  </p>
                  <ul className="space-y-2 text-muted ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">—</span>
                      alle Onlineauftritte (Websites, Onlineshops), die wir betreiben
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">—</span>
                      Social Media Auftritte und E-Mail-Kommunikation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">—</span>
                      mobile Apps für Smartphones und andere Geräte
                    </li>
                  </ul>
                  <p className="text-muted leading-relaxed">
                    Kurz gesagt: Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden.
                  </p>
                </div>

                <hr className="my-12 border-border" />

                {/* 2. Rechtsgrundlagen */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    2. Rechtsgrundlagen
                  </h2>
                  <p className="text-muted leading-relaxed">
                    In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie auf EUR-Lex unter <a href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">eur-lex.europa.eu</a> nachlesen.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:
                  </p>
                  <ul className="space-y-3 text-muted ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">1.</span>
                      <span>
                        <strong>Einwilligung (Artikel 6 Absatz 1 lit. a DSGVO):</strong> Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">2.</span>
                      <span>
                        <strong>Vertrag (Artikel 6 Absatz 1 lit. b DSGVO):</strong> Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene Informationen.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">3.</span>
                      <span>
                        <strong>Rechtliche Verpflichtung (Artikel 6 Absatz 1 lit. c DSGVO):</strong> Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">4.</span>
                      <span>
                        <strong>Berechtigte Interessen (Artikel 6 Absatz 1 lit. f DSGVO):</strong> Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können.
                      </span>
                    </li>
                  </ul>
                  <p className="text-muted leading-relaxed">
                    Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:
                  </p>
                  <ul className="space-y-2 text-muted ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground">—</span>
                      In Deutschland: Bundesdatenschutzgesetz (BDSG)
                    </li>
                  </ul>
                </div>

                <hr className="my-12 border-border" />

                {/* 3. Kontaktdaten des Verantwortlichen */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    3. Kontaktdaten des Verantwortlichen
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten des Verantwortlichen gemäß Artikel 4 Absatz 7 EU-Datenschutz-Grundverordnung (DSGVO):
                  </p>
                  <div className="bg-surface p-6 border border-border">
                    <p className="text-foreground font-medium">21Stable Biostatistics Consulting</p>
                    <p className="text-foreground">Dr. rer. nat. Sina Stäble</p>
                    <p className="text-muted">Krähenweg 7</p>
                    <p className="text-muted">76646 Bruchsal</p>
                    <p className="text-muted">Deutschland</p>
                    <p className="mt-3 text-muted">
                      E-Mail: <a href="mailto:21stable@proton.me" className="text-foreground hover:underline">21stable@proton.me</a>
                    </p>
                  </div>
                </div>

                <hr className="my-12 border-border" />

                {/* 4. Speicherdauer */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    4. Speicherdauer
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist.
                  </p>
                  <p className="text-muted leading-relaxed">
                    In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprünglichen Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.
                  </p>
                </div>

                <hr className="my-12 border-border" />

                {/* 5. Rechte laut DSGVO */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    5. Ihre Rechte laut Datenschutz-Grundverordnung
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:
                  </p>
                  <ul className="space-y-3 text-muted ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Auskunftsrecht (Artikel 15 DSGVO):</strong> Sie haben Recht auf Auskunft darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Recht auf Berichtigung (Artikel 16 DSGVO):</strong> Sie haben das Recht auf Berichtigung falscher Daten.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Recht auf Löschung (Artikel 17 DSGVO):</strong> Sie haben das Recht auf Löschung Ihrer Daten („Recht auf Vergessenwerden").
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Recht auf Einschränkung (Artikel 18 DSGVO):</strong> Sie haben das Recht auf Einschränkung der Verarbeitung.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Recht auf Datenübertragbarkeit (Artikel 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten in einem gängigen Format zu erhalten.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Widerspruchsrecht (Artikel 21 DSGVO):</strong> Sie haben das Recht, gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-foreground font-medium">✓</span>
                      <span>
                        <strong>Beschwerderecht (Artikel 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Datenschutzbehörde zu beschweren.
                      </span>
                    </li>
                  </ul>
                  <p className="text-muted leading-relaxed font-medium">
                    Kurz gesagt: Sie haben Rechte – zögern Sie nicht, die oben gelistete verantwortliche Stelle zu kontaktieren!
                  </p>
                </div>

                <hr className="my-12 border-border" />

                {/* 6. Datenschutzerklärung für das Kontaktformular */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    6. Datenschutzerklärung für das Kontaktformular
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Auf unserer Website verwenden wir ein Kontaktformular zur elektronischen Kommunikation. Nachfolgend informieren wir Sie darüber, welche Daten wir dabei verarbeiten und wie Sie Ihre Datenschutzrechte wahrnehmen können.
                  </p>
                  
                  <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                    Welche Daten werden verarbeitet?
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Wenn Sie das Kontaktformular verwenden, werden folgende Daten von Ihnen verarbeitet:
                  </p>
                  <ul className="space-y-2 text-muted ml-6">
                    <li>— Name (freiwillige Angabe)</li>
                    <li>— E-Mail-Adresse (Pflichtangabe)</li>
                    <li>— Betreff (Pflichtangabe)</li>
                    <li>— Ihre Nachricht (Pflichtangabe)</li>
                    <li>— Datum und Uhrzeit der Absendung</li>
                    <li>— Ihre IP-Adresse</li>
                  </ul>

                  <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                    Zweck der Datenverarbeitung
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Die Verarbeitung der Daten erfolgt ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage und zur Beantwortung Ihrer Fragen. Ohne Ihre E-Mail-Adresse können wir Ihre Nachricht nicht beantworten.
                  </p>

                  <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                    Rechtsgrundlage
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Die Verarbeitung der Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie durch das Absenden des Formulars und das Akzeptieren der Datenschutzerklärung erteilen. Alternativ kann die Verarbeitung auch auf berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) beruhen, nämlich dem Interesse an der Beantwortung Ihrer Anfrage.
                  </p>

                  <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                    Speicherdauer
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Die über das Kontaktformular eingegebenen Daten werden bei uns gespeichert, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>

                  <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                    Weitergabe der Daten
                  </h3>
                  <p className="text-muted leading-relaxed">
                    Die von Ihnen über das Kontaktformular eingegebenen Daten werden ausschließlich intern verarbeitet und nicht an Dritte weitergegeben. Eine Ausnahme bildet der Versand Ihrer Nachricht per E-Mail an unsere Unternehmensadresse, der zur Bearbeitung Ihrer Anfrage erforderlich ist.
                  </p>
                </div>

                <hr className="my-12 border-border" />

                {/* 7. Web Analytics */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    7. Web Analytics
                  </h2>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <p className="text-green-900 font-medium leading-relaxed">
                      <strong>✓ Wir verwenden KEINE Web-Analytics-Tools</strong>
                    </p>
                    <p className="text-green-800 mt-2 leading-relaxed">
                      Unsere Website verwendet <strong>keine</strong> Tracking-Tools, Cookies zur Analyse oder andere Web-Analytics-Dienste wie Google Analytics, Matomo oder ähnliche Dienste. Wir erfassen ausschließlich technisch notwendige Daten, die Ihr Browser automatisch an unseren Server übermittelt (Server-Logfiles).
                    </p>
                  </div>
                  <p className="text-muted leading-relaxed">
                    Wir haben bewusst auf den Einsatz von Analytics-Tools verzichtet, um Ihre Privatsphäre bestmöglich zu schützen.
                  </p>
                </div>

                <hr className="my-12 border-border" />

                {/* 8. Zuständige Datenschutzbehörde */}
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                    8. Zuständige Datenschutzbehörde
                  </h2>
                  <p className="text-muted leading-relaxed">
                    Wenn Sie der Meinung sind, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                  </p>
                  <p className="text-muted leading-relaxed">
                    Für unser Unternehmen ist die folgende Datenschutzbehörde zuständig:
                  </p>
                  <div className="bg-surface p-6 border border-border">
                    <p className="text-foreground font-medium">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</p>
                    <p className="text-muted">Königstraße 10a</p>
                    <p className="text-muted">70173 Stuttgart</p>
                    <p className="text-muted mt-2">
                      Telefon: <a href="tel:+497116155410" className="text-foreground hover:underline">+49 (0) 7 11/6 15 54 10</a>
                    </p>
                    <p className="text-muted">
                      E-Mail: <a href="mailto:poststelle@bfdi.bwl.de" className="text-foreground hover:underline">poststelle@bfdi.bwl.de</a>
                    </p>
                    <p className="text-muted mt-2">
                      Website: <a href="https://www.baden-wuerttemberg.datenschutz.de" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">www.baden-wuerttemberg.datenschutz.de</a>
                    </p>
                  </div>
                </div>

                <hr className="my-12 border-border" />

                {/* Footer */}
                <div className="pt-8 mt-12 border-t border-border">
                  <p className="text-xs text-muted">
                    <strong>Stand:</strong> Januar 2025<br />
                    <strong>Version:</strong> 1.0<br />
                    <strong>Unternehmen:</strong> 21Stable Biostatistics Consulting
                  </p>
                  <p className="text-xs text-muted mt-4">
                    Diese Datenschutzerklärung wurde auf Basis der Mustervorlage von biostats.de erstellt und an unsere Bedürfnisse angepasst.
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
  
  // English Version
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
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4 tracking-tight">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="prose prose-neutral max-w-none text-sm sm:text-base">
              
              {/* Introduction */}
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  We have prepared this privacy policy (Version January 2025) to provide you with information in accordance with the requirements of the General Data Protection Regulation (EU) 2016/679 and applicable national laws about what personal data (simply called "data") we process as the responsible party, will process in the future, and what lawful options you have.
                </p>
                <p className="font-medium text-foreground">
                  In short: We provide you with comprehensive information about data we process about you.
                </p>
                <p>
                  Privacy policies usually sound very technical. This privacy policy, on the other hand, is intended to describe the most important matters to you as simply and transparently as possible. We provide information in clear and simple language.
                </p>
              </div>

              <hr className="my-12 border-border" />

              {/* 1. Scope */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  1. Scope
                </h2>
                <p className="text-muted leading-relaxed">
                  This privacy policy applies to all personal data processed by our company and to all personal data processed by companies commissioned by us (data processors). By personal data we mean information within the meaning of Art. 4 No. 1 GDPR, such as name, email address and postal address of a person.
                </p>
                <p className="text-muted leading-relaxed">
                  The scope of this privacy policy includes:
                </p>
                <ul className="space-y-2 text-muted ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground">—</span>
                    all online presences (websites, online shops) that we operate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground">—</span>
                    social media presence and email communication
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground">—</span>
                    mobile apps for smartphones and other devices
                  </li>
                </ul>
              </div>

              <hr className="my-12 border-border" />

              {/* 2. Legal Basis */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  2. Legal Basis
                </h2>
                <p className="text-muted leading-relaxed">
                  We only process your data if at least one of the following conditions applies:
                </p>
                <ul className="space-y-3 text-muted ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">1.</span>
                    <span>
                      <strong>Consent (Article 6(1)(a) GDPR):</strong> You have given us your consent to process data for a specific purpose. An example would be storing your data entered in a contact form.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">2.</span>
                    <span>
                      <strong>Contract (Article 6(1)(b) GDPR):</strong> To fulfill a contract or pre-contractual obligations with you, we process your data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">3.</span>
                    <span>
                      <strong>Legal Obligation (Article 6(1)(c) GDPR):</strong> If we are subject to a legal obligation, we process your data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">4.</span>
                    <span>
                      <strong>Legitimate Interests (Article 6(1)(f) GDPR):</strong> In the case of legitimate interests that do not restrict your fundamental rights, we reserve the right to process personal data.
                    </span>
                  </li>
                </ul>
              </div>

              <hr className="my-12 border-border" />

              {/* 3. Contact Details */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  3. Contact Details of the Controller
                </h2>
                <p className="text-muted leading-relaxed">
                  If you have any questions about data protection, you will find the contact details of the responsible party below in accordance with Article 4 Paragraph 7 EU General Data Protection Regulation (GDPR):
                </p>
                <div className="bg-surface p-6 border border-border">
                  <p className="text-foreground font-medium">21Stable Biostatistics Consulting</p>
                  <p className="text-foreground">Dr. rer. nat. Sina Stäble</p>
                  <p className="text-muted">Krähenweg 7</p>
                  <p className="text-muted">76646 Bruchsal</p>
                  <p className="text-muted">Germany</p>
                  <p className="mt-3 text-muted">
                    Email: <a href="mailto:21stable@proton.me" className="text-foreground hover:underline">21stable@proton.me</a>
                  </p>
                </div>
              </div>

              <hr className="my-12 border-border" />

              {/* 4. Storage Duration */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  4. Storage Duration
                </h2>
                <p className="text-muted leading-relaxed">
                  We store personal data only for as long as is absolutely necessary to provide our services and products. This means that we delete personal data as soon as the reason for data processing no longer exists.
                </p>
                <p className="text-muted leading-relaxed">
                  In some cases we are legally obliged to store certain data even after the original purpose has ceased to exist, for example for accounting purposes.
                </p>
              </div>

              <hr className="my-12 border-border" />

              {/* 5. Your Rights */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  5. Your Rights Under GDPR
                </h2>
                <p className="text-muted leading-relaxed">
                  In accordance with Articles 13, 14 GDPR, we inform you about the following rights that you have:
                </p>
                <ul className="space-y-3 text-muted ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Information (Article 15 GDPR):</strong> You have the right to information about whether we process data from you.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Rectification (Article 16 GDPR):</strong> You have the right to have incorrect data corrected.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Erasure (Article 17 GDPR):</strong> You have the right to have your data deleted ("right to be forgotten").
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Restriction (Article 18 GDPR):</strong> You have the right to restriction of processing.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Data Portability (Article 20 GDPR):</strong> You have the right to receive your data in a commonly used format.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Object (Article 21 GDPR):</strong> You have the right to object to the processing of your data.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-foreground font-medium">✓</span>
                    <span>
                      <strong>Right to Lodge a Complaint (Article 77 GDPR):</strong> You have the right to lodge a complaint with a data protection authority.
                    </span>
                  </li>
                </ul>
              </div>

              <hr className="my-12 border-border" />

              {/* 6. Contact Form */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  6. Privacy Policy for the Contact Form
                </h2>
                <p className="text-muted leading-relaxed">
                  On our website we use a contact form for electronic communication. Below we inform you about what data we process and how you can exercise your data protection rights.
                </p>
                
                <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                  What data is processed?
                </h3>
                <p className="text-muted leading-relaxed">
                  When you use the contact form, the following data is processed:
                </p>
                <ul className="space-y-2 text-muted ml-6">
                  <li>— Name (voluntary)</li>
                  <li>— Email address (required)</li>
                  <li>— Subject (required)</li>
                  <li>— Your message (required)</li>
                  <li>— Date and time of submission</li>
                  <li>— Your IP address</li>
                </ul>

                <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                  Purpose of data processing
                </h3>
                <p className="text-muted leading-relaxed">
                  The data is processed exclusively for the purpose of processing your request and answering your questions. Without your email address we cannot answer your message.
                </p>

                <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                  Legal basis
                </h3>
                <p className="text-muted leading-relaxed">
                  The processing of the data is based on your consent (Art. 6 (1) lit. a GDPR), which you give by submitting the form and accepting the privacy policy. Alternatively, processing may be based on legitimate interests (Art. 6 (1) lit. f GDPR).
                </p>

                <h3 className="font-serif text-lg text-foreground mt-6 mb-3">
                  Storage duration
                </h3>
                <p className="text-muted leading-relaxed">
                  The data entered via the contact form will be stored by us until you request us to delete it, revoke your consent to the storage or the purpose for the data storage no longer applies. Mandatory legal provisions – in particular retention periods – remain unaffected.
                </p>
              </div>

              <hr className="my-12 border-border" />

              {/* 7. Web Analytics */}
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-4">
                  7. Web Analytics
                </h2>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-green-900 font-medium leading-relaxed">
                    <strong>✓ We do NOT use web analytics tools</strong>
                  </p>
                  <p className="text-green-800 mt-2 leading-relaxed">
                    Our website does <strong>not</strong> use tracking tools, cookies for analysis or other web analytics services such as Google Analytics, Matomo or similar services. We only collect technically necessary data that your browser automatically transmits to our server (server log files).
                  </p>
                </div>
                <p className="text-muted leading-relaxed">
                  We have consciously decided against using analytics tools in order to protect your privacy as best as possible.
                </p>
              </div>

              <hr className="my-12 border-border" />

              {/* Footer */}
              <div className="pt-8 mt-12 border-t border-border">
                <p className="text-xs text-muted">
                  <strong>Version:</strong> January 2025<br />
                  <strong>Version:</strong> 1.0<br />
                  <strong>Company:</strong> 21Stable Biostatistics Consulting
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
