import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog — 21Stable',
  description: 'Fachartikel und Insights zu klinischen Studien, Biostatistik und KI in der Medizin.',
}

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
}

const posts: BlogPost[] = [
  {
    slug: 'ki-gestuetzte-tumor-klassifikation',
    title: 'KI-gestützte Tumorklassifikation erreicht neue Genauigkeit',
    excerpt: 'Neueste Deep-Learning-Modelle klassifizieren Tumorgewebe mit 95% Genauigkeit — was das für die Pathologie bedeutet.',
    date: '2026-03-09',
    author: 'Data Science Team',
    category: 'AI & Krebsforschung'
  },
  {
    slug: 'ct-dna-früherkennung',
    title: 'ctDNA: Flüssigbiopsie erkennt Krebs früher',
    excerpt: 'Krebsfrüherkennung durch circulating tumor DNA wird Realität. Neue Studien zeigen vielversprechende Ergebnisse.',
    date: '2026-03-06',
    author: 'Clinical Research Team',
    category: 'Früherkennung'
  },
  {
    slug: 'multi-omics-integration',
    title: 'Multi-Omics: Dataintegration in der Onkologie',
    excerpt: 'Wie die Kombination von Genomik, Proteomik und Metabolomics neue Therapieansätze ermöglicht.',
    date: '2026-03-01',
    author: 'Bioinformatik Team',
    category: 'Methodik'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Blog
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            Fachartikel, Insights und Neuigkeiten aus der Welt der klinischen Forschung.
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <article 
              key={post.slug}
              className="bg-surface rounded-xl p-6 border border-border hover:border-foreground/20 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-muted bg-background px-2 py-1 rounded">
                  {post.category}
                </span>
                <time className="text-sm text-muted">
                  {new Date(post.date).toLocaleDateString('de-DE', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })}
                </time>
              </div>
              
              <h2 className="font-serif text-xl text-foreground mb-3 group-hover:text-muted transition-colors">
                <Link href={`/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-muted mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted">
                  {post.author}
                </span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sm text-foreground hover:underline"
                >
                  Weiterlesen →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State if no posts */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">Noch keine Blog-Beiträge verfügbar.</p>
          </div>
        )}
      </div>
    </main>
  )
}
