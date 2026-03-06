import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Produktpalette | 21Stable',
  description: 'Biostatistik-Beratung für klinische Studien. Dosisfindung, Proof-of-Concept und statistische Beratung für die klinische Entwicklung.',
}

export default function ProdukteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}