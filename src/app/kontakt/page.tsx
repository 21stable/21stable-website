'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, User, Send } from 'lucide-react'
import { useLang } from '@/lib/i18n'

export default function KontaktPage() {
  const { lang, t } = useLang()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // Generate mailto link with pre-filled content
  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    
    const mailtoLink = `mailto:21stable@proton.me?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`
    
    window.location.href = mailtoLink
  }

  const CONTACT_EMAIL = '21stable@proton.me'

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
              {t('nav.kontakt')}
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

        {/* Contact Form & Info */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">
                  {lang === 'de' ? 'Schreiben Sie uns' : 'Send us a message'}
                </h2>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                  <p className="text-xs sm:text-sm text-blue-900">
                    {lang === 'de' 
                      ? '💡 Hinweis: Das Öffnen Ihres E-Mail-Programms wird vorbereitet. Bitte senden Sie die E-Mail manuell ab.'
                      : '💡 Note: Your email program will open. Please send the email manually.'}
                  </p>
                </div>

                <form onSubmit={handleSend} className="space-y-4 sm:space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      {lang === 'de' ? 'Name' : 'Name'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all rounded"
                      placeholder={lang === 'de' ? 'Ihr vollständiger Name' : 'Your full name'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      {lang === 'de' ? 'E-Mail' : 'Email'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all rounded"
                      placeholder={lang === 'de' ? 'ihre.email@beispiel.de' : 'your.email@example.com'}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      {lang === 'de' ? 'Betreff' : 'Subject'} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all rounded"
                      placeholder={lang === 'de' ? 'Worum geht es?' : 'What is this about?'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
                      {lang === 'de' ? 'Nachricht' : 'Message'} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none rounded"
                      placeholder={lang === 'de' ? 'Beschreiben Sie Ihr Projekt oder Ihre Frage...' : 'Describe your project or question...'}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 sm:py-4 bg-foreground text-background text-sm sm:text-base font-medium hover:bg-muted transition-all flex items-center justify-center gap-2 rounded"
                  >
                    <Send className="w-4 h-4" />
                    {lang === 'de' ? 'E-Mail öffnen & senden' : 'Open email & send'}
                  </button>

                  <p className="text-xs text-muted text-center">
                    {lang === 'de' 
                      ? 'Öffnet Ihr Standard-E-Mail-Programm'
                      : 'Opens your default email program'}
                  </p>
                </form>

                {/* Alternative: Direct Email Link */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted mb-3 text-center">
                    {lang === 'de' ? 'Oder kontaktieren Sie uns direkt per E-Mail:' : 'Or contact us directly via email:'}
                  </p>
                  <a 
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center gap-2 text-foreground hover:text-muted transition-colors font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <h2 className="font-serif text-xl sm:text-2xl text-foreground mb-4 sm:mb-6">
                  {lang === 'de' ? 'Kontaktinformationen' : 'Contact information'}
                </h2>

                <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                  {/* CEO Contact */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-subtle mb-1">
                        {lang === 'de' ? 'Geschäftsführung' : 'CEO'}
                      </p>
                      <p className="text-foreground font-medium text-sm sm:text-base">Dr. rer. nat. Sina Stäble</p>
                      <p className="text-xs sm:text-sm text-muted">Chief Executive Officer</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-subtle mb-1">
                        {lang === 'de' ? 'Adresse' : 'Address'}
                      </p>
                      <p className="text-foreground text-sm sm:text-base">
                        21Stable<br />
                        Krähenweg 7<br />
                        76646 Bruchsal<br />
                        {lang === 'de' ? 'Deutschland' : 'Germany'}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-muted mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-subtle mb-1">E-Mail</p>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm sm:text-base text-foreground hover:text-muted transition-colors duration-200">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
                <div className="border border-border p-4 sm:p-6 rounded">
                  <h3 className="font-serif text-base sm:text-lg text-foreground mb-3 sm:mb-4">
                    {lang === 'de' ? 'Was Sie erwarten können' : 'What to expect'}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted">
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
                <div className="mt-6 p-4 bg-surface border border-border rounded">
                  <p className="text-xs text-muted">
                    <strong>🔒 Datenschutz:</strong>{' '}
                    {lang === 'de' 
                      ? 'Ihre Daten werden ausschließlich zur Beantwortung Ihrer Anfrage verwendet. Weitere Informationen finden Sie in unserer '
                      : 'Your data is used exclusively to answer your inquiry. More information in our '}
                    <a href="/datenschutz" className="text-foreground hover:underline">{lang === 'de' ? 'Datenschutzerklärung' : 'privacy policy'}.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
