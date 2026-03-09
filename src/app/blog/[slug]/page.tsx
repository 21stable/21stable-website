import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: 'ki-in-klinischen-studien' },
    { slug: 'mdr-compliance-checkliste' },
    { slug: 'survival-analysis-methoden' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const titles: Record<string, string> = {
    'ki-in-klinischen-studien': 'Künstliche Intelligenz in klinischen Studien',
    'mdr-compliance-checkliste': 'MDR-Compliance: Eine praktische Checkliste',
    'survival-analysis-methoden': 'Überlebenszeitanalyse: Methoden im Vergleich'
  }
  
  return {
    title: `${titles[slug] || 'Blog'} — 21Stable`,
    description: 'Fachartikel und Insights zu klinischen Studien, Biostatistik und KI in der Medizin.',
  }
}

const posts: Record<string, { title: string; content: string; date: string; author: string }> = {
  'ki-in-klinischen-studien': {
    title: 'Künstliche Intelligenz in klinischen Studien',
    date: '2026-03-09',
    author: '21Stable Team',
    content: `
Künstliche Intelligenz revolutioniert die Art und Weise, wie klinische Studien durchgeführt werden. Von der Patient rekrutierung bis zur Datenanalyse bieten KI-gestützte Systeme erhebliche Effizienzgewinne.

## Der aktuelle Stand

Traditionell sind klinische Studien zeit- und kostenintensiv. Die durchschnittliche Phase-III-Studie kostet über 100 Millionen Euro und dauert 3-5 Jahre.KI kann diesen Prozess signifikant beschleunigen.

## Praktische Anwendungen

### Patient rekrutierung
KI-Algorithmen durchsuchen elektronische Patientenakten, um geeignete Kandidaten zu identifizieren. Das verkürzt die Rekrutierungsphase um bis zu 40%.

### Datenanalyse
Machine-Learning-Modelle können grote Datenmengen schneller analysieren als traditionelle statistische Methoden. Besonders bei komplexen Endpunkten wie Überlebenszeitanalysen bieten sie Vorteile.

### Prozessoptimierung
Intelligente Systeme identifizieren Engpässe in Studienprotokollen und schlagen Optimierungen vor.

## Fazit

Die Integration von KI in klinische Studien ist kein Zukunftstraum mehr — sie ist bereits Realität. Unternehmen, die diese Technologie nutzen, werden einen Wettbewerbsvorteil haben.
    `
  },
  'mdr-compliance-checkliste': {
    title: 'MDR-Compliance: Eine praktische Checkliste',
    date: '2026-02-15',
    author: 'Regulatory Team',
    content: `
Die Medical Device Regulation (MDR) stellt Hersteller von Medizinprodukten vor erhebliche Herausforderungen. Diese Checkliste hilft Ihnen, die wichtigsten Anforderungen zu erfüllen.

## Grundlegende Anforderungen

- [ ] Technische Dokumentation vollständig
- [ ] Klinische Bewertung durchgeführt
- [ ] Post-Market-Surveillance-Plan erstellt
- [ ] EUDAMED-Registrierung abgeschlossen

## Klinische Bewertung

Die klinische Bewertung muss gemäß MEDDEV 2.7/1 Rev. 4 durchgeführt werden. Folgende Elemente sind obligatorisch:

1. Literaturrecherche zu äquivalenten Produkten
2. Klinische Prüfungen (falls erforderlich)
3. Post-Market-Clinical-Follow-up

## Qualitätsmanagementsystem

Ihr QMS muss nach EN ISO 13485 zertifiziert sein. Achten Sie besonders auf:
- Risikomanagement nach EN ISO 14971
- Prozessvalidierung
- Lieferantenbewertung
    `
  },
  'survival-analysis-methoden': {
    title: 'Überlebenszeitanalyse: Methoden im Vergleich',
    date: '2026-01-28',
    author: 'Biostatistik Team',
    content: `
Die Überlebenszeitanalyse (Survival Analysis) ist ein zentrales Werkzeug in der Onkologie. Dieser Artikel vergleicht die gängigsten Methoden.

## Kaplan-Meier-Schätzer

Die nicht-parametrische Methode eignet sich für:
- Deskriptive Darstellung von Überlebenskurven
- Vergleich von zwei oder mehr Gruppen (Log-Rank-Test)
- Keine Annahmen über die Verteilungsform

## Cox-Regression

Das proportionale Hazards-Modell ermöglicht:
- Adjustierung für Confounding-Variablen
- Schätzung von Hazard Ratios
- multivariate Analysen

**Voraussetzung:** proportional hazards assumption

## Alternativen bei Nicht-Proportionalität

- Time-varying coefficients
- Accelerated failure time models
- Frailty models

## Praktische Empfehlung

Für die meisten klinischen Studien empfehlen wir:
1. Kaplan-Meier für univariate Darstellungen
2. Cox-Regression für multivariate Analysen
3. Sensitivitätsanalysen mit alternativen Modellen
    `
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = posts[slug]

  if (!post) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl text-foreground mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog" className="text-foreground hover:underline">← Zurück zum Blog</Link>
        </div>
      </main>
    )
  }

  // Simple markdown-like processing
  const contentHtml = post.content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-serif mt-8 mb-4">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="text-xl font-medium mt-6 mb-3">${line.slice(4)}</h3>`
      if (line.startsWith('- [ ]')) return `<div class="flex items-center gap-2 my-1"><input type="checkbox" disabled class="rounded"/><span>${line.slice(5)}</span></div>`
      if (line.startsWith('- ')) return `<li class="ml-4 my-1">${line.slice(2)}</li>`
      if (line.match(/^\d+\. /)) return `<li class="ml-4 my-1 list-decimal">${line.replace(/^\d+\. /, '')}</li>`
      if (line.trim() === '') return ''
      if (line.startsWith('**')) return `<p class="font-bold my-4">${line.replace(/\*\*/g, '')}</p>`
      return `<p class="my-3 text-muted leading-relaxed">${line}</p>`
    })
    .join('')

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link href="/blog" className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8">
          ← Zurück zum Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <time className="text-sm text-muted">
            {new Date(post.date).toLocaleDateString('de-DE', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-muted">von {post.author}</p>
        </header>

        {/* Content */}
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  )
}
