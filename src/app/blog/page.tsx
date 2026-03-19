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

// German posts
const allPosts: BlogPost[] = [
  {
    slug: 'ngs-companion-diagnostics-precision-oncology-2026-03-19',
    title: 'NGS-Companion-Diagnostik: Das Rückgrat der Präzisionsonkologie im Jahr 2026',
    excerpt: 'Neue FDA-Zulassungen revolutionieren die biomarkergesteuerte Krebstherapie: Wie Next-Generation-Sequencing Companion-Diagnostik die Behandlung von Lungenkrebs transformiert.',
    date: '2026-03-19',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'statistische-methoden-onkologie-bayes-2026-03-17',
    title: 'Bayesianische Methoden: Die Lösung für die Paradoxien klassischer statistischer Tests?',
    excerpt: 'Wie Bayesianische Statistik die Grenzen von p-Werten und Nullhypothesentests in der biomedizinischen Forschung überwindet.',
    date: '2026-03-17',
    author: '21Stable Team',
    category: 'Biostatistik'
  },
  {
    slug: 'ki-ethik-klinische-studien-2026-03-16',
    title: 'Ethik der EHR-Daten für KI-Entwicklung: Neue Wege für verantwortungsvolle klinische Forschung',
    excerpt: 'Mixed-Methods-Studie identifiziert vier zentrale ethische Herausforderungen bei der Nutzung von EHR-Daten für KI-Entwicklung in der klinischen Forschung.',
    date: '2026-03-16',
    author: '21Stable Team',
    category: 'KI-Ethik'
  },
  {
    slug: 'real-world-evidence-precision-oncology-2026-03-15',
    title: 'Life-Cycle Real-World Evidence: Brückenbau in der Precision Oncology',
    excerpt: 'Wie Real-World Evidence Evidenzlücken in der Präzisionsonkologie schließen kann.',
    date: '2026-03-15',
    author: '21Stable Team',
    category: 'Real-World Evidence'
  },
  {
    slug: 'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
    title: 'Maschinelles Lernen sagt Chemotherapie-bedingte Knochenmarksuppression bei Darmkrebs voraus',
    excerpt: 'Neues ML-Modell sagt Myelosuppression bei Darmkrebs-Patienten mit 89% Genauigkeit voraus.',
    date: '2026-03-14',
    author: '21Stable Team',
    category: 'Maschinelles Lernen in der Medizin'
  },
  {
    slug: 'pan-cancer-prognostic-models-survival-2026-03-13',
    title: 'Pan-Cancer Prognosemodelle: Machine Learning revolutiert die Überlebensanalyse',
    excerpt: 'Groß angelegte Studie zeigt: Pan-Cancer-Modelle übertreffen Einzeltumor-Modelle bei der Überlebensprädiktion.',
    date: '2026-03-13',
    author: '21Stable Team',
    category: 'Überlebensanalyse'
  },
  {
    slug: 'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
    title: 'Dynamisches ctDNA-Monitoring: Risiko-adaptierte Therapie beim Nasopharynxkarzinom',
    excerpt: 'Phase-II-Studie zeigt: ctDNA-geleitete Therapie verbessert Überleben bei Nasopharynxkarzinom.',
    date: '2026-03-12',
    author: '21Stable Team',
    category: 'Biomarker'
  },
  {
    slug: 'adaptives-studiendesign-onkologie-2026-03-11',
    title: 'Adaptive Studiendesigns in der Onkologie: Effizienz durch Bayes\'sche Methoden',
    excerpt: 'Wie Bayes\'sche adaptive Studiendesigns die Effizienz klinischer Studien in der Onkologie verbessern.',
    date: '2026-03-11',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns'
  }
]

// English posts - matching MDX title_en
const allPostsEn: BlogPost[] = [
  {
    slug: 'ngs-companion-diagnostics-precision-oncology-2026-03-19',
    title: 'NGS Companion Diagnostics: The Backbone of Precision Oncology in 2026',
    excerpt: 'New FDA approvals are revolutionizing biomarker-driven cancer therapy: How Next-Generation Sequencing companion diagnostics is transforming lung cancer treatment.',
    date: '2026-03-19',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'statistische-methoden-onkologie-bayes-2026-03-17',
    title: 'Bayesian Methods: Solving the Paradoxes of Classical Statistical Tests?',
    excerpt: 'How Bayesian statistics overcomes the limitations of p-values and null hypothesis testing in biomedical research.',
    date: '2026-03-17',
    author: '21Stable Team',
    category: 'Biostatistics'
  },
  {
    slug: 'ki-ethik-klinische-studien-2026-03-16',
    title: 'Ethics of EHR Data for AI Development: New Pathways for Responsible Clinical Research',
    excerpt: 'Mixed-methods study identifies four key ethical challenges in using EHR data for AI development in clinical research.',
    date: '2026-03-16',
    author: '21Stable Team',
    category: 'AI Ethics'
  },
  {
    slug: 'real-world-evidence-precision-oncology-2026-03-15',
    title: 'Life-Cycle Real-World Evidence: Bridging Evidentiary Gaps in Precision Oncology',
    excerpt: 'How real-world evidence can bridge evidentiary gaps in precision oncology.',
    date: '2026-03-15',
    author: '21Stable Team',
    category: 'Real-World Evidence'
  },
  {
    slug: 'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
    title: 'Machine Learning Predicts Chemotherapy-Induced Myelosuppression in Colorectal Cancer',
    excerpt: 'New ML model predicts myelosuppression in colorectal cancer patients with 89% accuracy.',
    date: '2026-03-14',
    author: '21Stable Team',
    category: 'Machine Learning'
  },
  {
    slug: 'pan-cancer-prognostic-models-survival-2026-03-13',
    title: 'Pan-Cancer Prognostic Models: Machine Learning Revolutionizes Survival Analysis',
    excerpt: 'Large-scale study shows pan-cancer models outperform single-cancer models in survival prediction.',
    date: '2026-03-13',
    author: '21Stable Team',
    category: 'Survival Analysis'
  },
  {
    slug: 'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
    title: 'Dynamic ctDNA Monitoring: Risk-Adaptive Therapy in Nasopharyngeal Carcinoma',
    excerpt: 'Phase II trial shows ctDNA-guided therapy improves survival in nasopharyngeal carcinoma.',
    date: '2026-03-12',
    author: '21Stable Team',
    category: 'Biomarker'
  },
  {
    slug: 'adaptives-studiendesign-onkologie-2026-03-11',
    title: 'Adaptive Trial Designs in Oncology: Efficiency Through Bayesian Methods',
    excerpt: 'How Bayesian adaptive trial designs improve efficiency in oncology clinical trials.',
    date: '2026-03-11',
    author: '21Stable Team',
    category: 'Clinical Trial Designs'
  }
]

export default function BlogPage() {
  const { lang, t } = useLang()
  const currentPosts = lang === 'de' ? allPosts : allPostsEn
  
  // Sort by date descending
  const sortedPosts = [...currentPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )

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
          {sortedPosts.map((post) => (
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

        {sortedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted">{lang === 'de' ? 'Noch keine Blog-Beiträge verfügbar.' : 'No blog posts available yet.'}</p>
          </div>
        )}
      </div>
    </main>
  )
}
