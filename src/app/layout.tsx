import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: '21Stable — Biostatistik-Beratung für klinische Entwicklung',
  description: 'Biostatistik-Beratung für klinische Studien in der frühen Arzneimittelentwicklung. Spezialisierte KI-Agenten für Onkologie-Datenanalyse.',
  keywords: ['Biostatistik', 'klinische Studien', 'frühe Arzneimittelentwicklung', 'Onkologie', 'KI-Agenten'],
  authors: [{ name: '21Stable' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: '21Stable — Biostatistik-Beratung',
    description: 'Biostatistik-Beratung für klinische Studien in der frühen Arzneimittelentwicklung.',
    type: 'website',
    locale: 'de_DE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}