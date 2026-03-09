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
    slug: 'ki-in-klinischen-studien',
    title: 'Künstliche Intelligenz in klinischen Studien',
    excerpt: 'Wie KI-Agenten die Effizienz von klinischen Studien revolutionieren undwas das für Sponsoren bedeutet.',
    date: '2026-03-09',
    author: '21Stable Team',
    category: 'KI & Innovation'
  },
  {
    slug: 'mdr-compliance-checkliste',
    title: 'MDR-Compliance: Eine praktische Checkliste',
    excerpt: 'Die wichtigsten Anforderungen der MDR und wie Sie diese in Ihren Studienprozess integrieren.',
    date: '2026-02-15',
    author: 'Regulatory Team',
    category: 'Regulatorik'
  },
  {
    slug: 'survival-analysis-methoden',
    title: 'Überlebenszeitanalyse: Methoden im Vergleich',
    excerpt: 'Von Kaplan-Meier bis Cox-Regression: Welche Methode wann eingesetzt wird.',
    date: '2026-01-28',
    author: 'Biostatistik Team',
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
