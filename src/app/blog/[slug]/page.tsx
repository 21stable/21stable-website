import { Metadata } from 'next'
import Link from 'next/link'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return [
    { slug: 'ki-gestuetzte-tumor-klassifikation' },
    { slug: 'ct-dna-frueherkennung' },
    { slug: 'multi-omics-integration' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const titles: Record<string, string> = {
    'ki-gestuetzte-tumor-klassifikation': 'KI-gestützte Tumorklassifikation',
    'ct-dna-frueherkennung': 'ctDNA: Flüssigbiopsie',
    'multi-omics-integration': 'Multi-Omics in der Onkologie'
  }
  
  return {
    title: `${titles[slug] || 'Blog'} — 21Stable`,
    description: 'Fachartikel und Insights zu klinischen Studien, Biostatistik und KI in der Medizin.',
  }
}

const posts: Record<string, { title: string; content: string; date: string; author: string }> = {
  'ki-gestuetzte-tumor-klassifikation': {
    title: 'KI-gestützte Tumorklassifikation erreicht neue Genauigkeit',
    date: '2026-03-09',
    author: 'Data Science Team',
    content: `
Deep-Learning-Modelle zur Tumorklassifikation erreichen in aktuellen Studien eine Genauigkeit von 95% bei der Unterscheidung zwischen benignen und malignen Gewebeproben.

## Stand der Forschung

Forscher haben Transformer-basierte Modelle trainiert, die histopathologische Bilder analysieren. Die Ergebnisse übertreffen traditionelle pathologische Bewertungen in Geschwindigkeit und Konsistenz.

## Klinische Relevanz

- Schnellere Befundung von Biopsien
- Konsistente Ergebnisse unabhängig vom Ermüdungsgrad
- Unterstützung bei seltenen Tumortypen

## Ausblick

Die Integration in klinische Workflows wird in den nächsten 12-18 Monaten erwartet. 21Stable unterstützt Kliniken bei der Implementierung solcher Lösungen.
    `
  },
  'ct-dna-frueherkennung': {
    title: 'ctDNA: Flüssigbiopsie erkennt Krebs früher',
    date: '2026-03-06',
    author: 'Clinical Research Team',
    content: `
Krebsfrüherkennung durch circulating tumor DNA (ctDNA) macht große Fortschritte. Aktuelle Studien zeigen, dass die Methode bereits in frühen Stadien zuverlässig funktioniert.

## Methode

Die Flüssigbiopsie analysiert tumor-DNA im Blut, statt Gewebeproben zu entnehmen. Das ermöglicht:
- Weniger invasive Diagnostik
- Kontinuierliches Monitoring
- Frühzeitige Rezidiverkennung

## Ergebnisse aktueller Studien

- Nachweis von Stadium I-Tumoren mit 85% Sensitivität
- Erkennung von Rezidiven 3-6 Monate vor bildgebenden Verfahren
- Reduktion unnötiger Biopsien um 40%
    `
  },
  'multi-omics-integration': {
    title: 'Multi-Omics: Dataintegration in der Onkologie',
    date: '2026-03-01',
    author: 'Bioinformatik Team',
    content: `
Die Kombination von Genomik, Proteomik und Metabolomics ermöglicht ganzheitliche Therapieentscheidungen in der Onkologie.

## Was ist Multi-Omics?

- **Genomik**: Veränderungen in der DNA
- **Proteomik**: Protein-Expressionsmuster
- **Metabolomik**: Stoffwechselprodukte

## Klinischer Nutzen

Durch Integration dieser Daten lassen sich:
- Therapie-Responder identifizieren
- Resistenzmechanismen verstehen
- Personalisierte Behandlungspläne erstellen

## Herausforderungen

Die Datenintegration erfordert robuste Bioinformatik-Pipelines und spezialisierte Auswertungsexpertise.
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
