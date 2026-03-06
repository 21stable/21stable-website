'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, User, Check, AlertCircle, Send } from 'lucide-react'
import { useLang } from '@/lib/i18n'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function KontaktPage() {
  const { lang, t } = useLang()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [gdprAccepted, setGdprAccepted] = useState(false)
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          gdprAccepted,
          language: lang
        })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setGdprAccepted(false)
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  {lang === 'de' ? 'Schreiben Sie uns' : 'Send us a message'}
                </h2>

                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-green-900 mb-1">
                          {lang === 'de' ? 'Nachricht gesendet!' : 'Message sent!'}
                        </h3>
                        <p className="text-green-700 text-sm">
                          {lang === 'de' 
                            ? 'Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb eines Werktages bei Ihnen.'
                            : 'Thank you for your message. We will get back to you within one business day.'}
                        </p>
                        <button
                          onClick={() => setStatus('idle')}
                          className="mt-4 text-sm text-green-700 hover:text-green-900 underline"
                        >
                          {lang === 'de' ? 'Weitere Nachricht senden' : 'Send another message'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : status === 'error' ? (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-6 h-6 text-red-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-red-900 mb-1">
                          {lang === 'de' ? 'Fehler beim Senden' : 'Error sending message'}
                        </h3>
                        <p className="text-red-700 text-sm">{errorMessage}</p>
                      </div>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {lang === 'de' ? 'Name' : 'Name'} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      placeholder={lang === 'de' ? 'Ihr vollständiger Name' : 'Your full name'}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {lang === 'de' ? 'E-Mail' : 'Email'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      placeholder={lang === 'de' ? 'ihre.email@beispiel.de' : 'your.email@example.com'}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      {lang === 'de' ? 'Betreff' : 'Subject'} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                      placeholder={lang === 'de' ? 'Worum geht es?' : 'What is this about?'}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {lang === 'de' ? 'Nachricht' : 'Message'} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                      placeholder={lang === 'de' ? 'Beschreiben Sie Ihr Projekt oder Ihre Frage...' : 'Describe your project or question...'}
                    />
                  </div>

                  {/* GDPR Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="gdpr"
                      checked={gdprAccepted}
                      onChange={(e) => setGdprAccepted(e.target.checked)}
                      required
                      className="mt-1 w-4 h-4 border-border rounded text-foreground focus:ring-foreground/20"
                    />
                    <label htmlFor="gdpr" className="text-sm text-muted leading-relaxed">
                      {lang === 'de' 
                        ? 'Ich habe die '
                        : 'I have read the '}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                        {lang === 'de' ? 'Datenschutzerklärung' : 'privacy policy'}
                      </a>
                      {lang === 'de'
                        ? ' gelesen und stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.'
                        : ' and agree to the processing of my data in accordance with the privacy policy.'}
                      {' *'}
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'submitting' || !gdprAccepted}
                    className="w-full px-6 py-4 bg-foreground text-background font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="animate-spin">⟳</span>
                        {lang === 'de' ? 'Wird gesendet...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {lang === 'de' ? 'Nachricht senden' : 'Send message'}
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted text-center">
                    {lang === 'de' 
                      ? '* Pflichtfelder. Wir antworten innerhalb eines Werktages.'
                      : '* Required fields. We respond within one business day.'}
                  </p>
                </form>
              </div>

              {/* Contact Info */}
              <div className="lg:pl-8">
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  {lang === 'de' ? 'Kontaktinformationen' : 'Contact information'}
                </h2>

                <div className="space-y-8 mb-12">
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
                      <a href="mailto:21stable@proton.me" className="text-foreground hover:text-muted transition-colors duration-200">
                        21stable@proton.me
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to expect */}
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
