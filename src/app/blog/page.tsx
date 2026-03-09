'use client'

import { useLang } from '@/lib/i18n'
import Link from 'next/link'

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
    slug: 'multimodale-ki-pathologie',
    title: 'Multimodale KI in der Pathologie: Der neue Standard',
    excerpt: 'Multimodale Large Language Models erreichen Pathologen-Niveau in der Tumordiagnose — eine aktuelle Studie aus Nature Communications zeigt das Potenzial.',
    date: '2026-03-09',
    author: 'Data Science Team',
    category: 'KI & Pathologie'
  },
  {
    slug: 'ctdna-liquid-biopsy-fortschritte',
    title: 'ctDNA-Liquid-Biopsy: Fortschritte in der Krebstherapie',
    excerpt: 'Die Analyse von zirkulierender Tumor-DNA revolutioniert die Krebsfrüherkennung. Neue Studien zeigen vielversprechende Sensitivitätswerte.',
    date: '2026-03-08',
    author: 'Clinical Research Team',
    category: 'Diagnostik'
  },
  {
    slug: 'multi-omicsPraezisionsmedizin',
    title: 'Multi-Omics in der Präzisionsonkologie',
    excerpt: 'Die Integration von Genomik, Proteomik und Metabolomics ermöglicht personalisierte Therapieentscheidungen. Aktuelle Entwicklungen und klinische Anwendung.',
    date: '2026-03-05',
    author: 'Bioinformatik Team',
    category: 'Methodik'
  }
]

const postsEn: BlogPost[] = [
  {
    slug: 'multimodale-ki-pathologie',
    title: 'Multimodal AI in Pathology: The New Standard',
    excerpt: 'Multimodal Large Language Models achieve pathologist-level accuracy in tumor diagnosis — a recent study from Nature Communications demonstrates the potential.',
    date: '2026-03-09',
    author: 'Data Science Team',
    category: 'AI & Pathology'
  },
  {
    slug: 'ctdna-liquid-biopsy-fortschritte',
    title: 'ctDNA Liquid Biopsy: Advances in Cancer Therapy',
    excerpt: 'The analysis of circulating tumor DNA is revolutionizing cancer early detection. New studies show promising sensitivity rates.',
    date: '2026-03-08',
    author: 'Clinical Research Team',
    category: 'Diagnostics'
  },
  {
    slug: 'multi-omicsPraezisionsmedizin',
    title: 'Multi-Omics in Precision Oncology',
    excerpt: 'The integration of genomics, proteomics and metabolomics enables personalized therapy decisions. Current developments and clinical application.',
    date: '2026-03-05',
    author: 'Bioinformatics Team',
    category: 'Methodology'
  }
]

export default function BlogPage() {
  const { lang, t } = useLang()
  const currentPosts = lang === 'de' ? posts : postsEn

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            {t('blog.title')}
          </h1>
          <p className="text-lg text-muted max-w-2xl">
            {t('blog.desc')}
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {currentPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-surface rounded-xl p-6 border border-border hover:border-foreground/20 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider text-muted bg-background px-2 py-1 rounded">
                  {post.category}
                </span>
                <time className="text-sm text-muted">
                  {new Date(post.date).toLocaleDateString(lang === 'de' ? 'de-DE' : 'en-US', {
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
                  {t('blog.readMore')}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {currentPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">{lang === 'de' ? 'Noch keine Blog-Beiträge verfügbar.' : 'No blog posts available yet.'}</p>
          </div>
        )}
      </div>
    </main>
  )
}
