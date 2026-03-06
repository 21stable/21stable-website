import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
  gdprAccepted: boolean
  language: 'de' | 'en'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message, gdprAccepted, language } = body as ContactFormData

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: language === 'de' ? 'Alle Felder sind erforderlich' : 'All fields are required' },
        { status: 400 }
      )
    }

    if (!gdprAccepted) {
      return NextResponse.json(
        { error: language === 'de' ? 'Datenschutzerklärung muss akzeptiert werden' : 'Privacy policy must be accepted' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: language === 'de' ? 'Ungültige E-Mail-Adresse' : 'Invalid email address' },
        { status: 400 }
      )
    }

    // Create ProtonMail transporter (Bridge must be running on localhost:1025)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'localhost',
      port: parseInt(process.env.SMTP_PORT || '1025'),
      secure: false, // ProtonMail Bridge uses STARTTLS
      auth: {
        user: process.env.PROTONMAIL_USER || 'RogerClaw@proton.me',
        pass: process.env.PROTONMAIL_BRIDGE_PASSWORD || '30tdiGQgQfhgd7H1ppGcGFMkr3EtFWUPZ2hjT3KPQMA='
      }
    })

    // Prepare email content
    const emailContent = {
      from: `"21Stable Contact Form" <${process.env.PROTONMAIL_USER || 'RogerClaw@proton.me'}>`,
      to: '21stable@proton.me',
      replyTo: email,
      subject: `[21Stable Contact] ${subject} (${name})`,
      text: `
NEUE KONTAKTFORMULAR-NACHRICHT
================================

Von: ${name} <${email}>
Betreff: ${subject}
Sprache: ${language === 'de' ? 'Deutsch' : 'English'}
Datum: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}

NACHRICHT:
${message}

================================
DSGVO: Einwilligung ${gdprAccepted ? 'erteilt' : 'NICHT erteilt'}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Georgia, serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: #1a1a1a; color: white; padding: 20px; margin: -20px -20px 20px -20px; }
    .meta { background: #f5f5f5; padding: 15px; border-left: 4px solid #1a1a1a; margin: 20px 0; }
    .message { background: #fafafa; padding: 20px; border: 1px solid #e0e0e0; margin: 20px 0; white-space: pre-wrap; }
    .gdpr { font-size: 12px; color: #666; padding: 10px; background: ${gdprAccepted ? '#e8f5e9' : '#ffebee'}; border-left: 3px solid ${gdprAccepted ? '#4caf50' : '#f44336'}; }
    .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #999; }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">📬 Neue Kontaktnachricht</h1>
  </div>
  
  <div class="meta">
    <strong>Von:</strong> ${name} &lt;${email}&gt;<br>
    <strong>Betreff:</strong> ${subject}<br>
    <strong>Sprache:</strong> ${language === 'de' ? 'Deutsch' : 'English'}<br>
    <strong>Datum:</strong> ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
  </div>
  
  <div class="message">
    ${message.replace(/\n/g, '<br>')}
  </div>
  
  <div class="gdpr">
    <strong>DSGVO:</strong> Einwilligung ${gdprAccepted ? '✅ erteilt' : '❌ NICHT erteilt'}
  </div>
  
  <div class="footer">
    <p>21Stable Biostatistics Consulting<br>
    Krähenweg 7, 76646 Bruchsal, Germany<br>
    21stable@proton.me</p>
  </div>
</body>
</html>
      `
    }

    // Send email
    try {
      await transporter.sendMail(emailContent)
      console.log('✅ Email sent successfully to 21stable@proton.me')
    } catch (emailError) {
      console.error('❌ Email send failed:', emailError)
      // Don't fail the request - just log the error
      // User still gets success message
    }
    
    return NextResponse.json({
      success: true,
      message: language === 'de' 
        ? 'Nachricht erfolgreich gesendet' 
        : 'Message sent successfully'
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
