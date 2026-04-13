'use client'

import { useLang } from '@/lib/i18n'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  titleEn: string
  excerpt: string
  excerptEn: string
  date: string
  author: string
  category: string
  categoryEn: string
}

// All blog posts - English content, titles switch DE/EN
const allPosts: BlogPost[] = [
  {
    slug: 'ki-ethik-irb-review-2026-04-13',
    title: 'Neue Rahmen für die ethische Überwachung von KI-gestützten klinischen Studien',
    titleEn: 'New Frameworks for Ethical Oversight of AI-Driven Clinical Trials',
    excerpt: 'Drei neue peer-reviewte Studien zeigen, wie IRBs und Ethikkommissionen die Herausforderungen von KI-gestützter Forschung bewältigen können.',
    excerptEn: 'Three new peer-reviewed studies show how IRBs and ethics committees can address AI-driven research challenges.',
    date: '2026-04-13',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'AI Ethics'
  },
  {
    slug: 'trialmatchai-ki-patient-trial-matching-2026-03-25',
    title: 'TrialMatchAI: KI-gestütztes Patient-Trial Matching revolutioniert klinische Studiendesigns',
    titleEn: 'TrialMatchAI: AI-powered Patient-Trial Matching Revolutionizes Clinical Trial Designs',
    excerpt: 'Neue KI-Plattform erreicht 92% Trefferquote bei der Zuordnung von Krebspatienten zu klinischen Studien.',
    excerptEn: 'New AI platform achieves 92% success rate in matching oncology patients to clinical trials.',
    date: '2026-03-25',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Clinical Trial Designs'
  },
  {
    slug: 'win-statistics-onkologie-klinische-studien-2026-03-24',
    title: 'Win Statistics: Eine Alternative zu Hazard Ratios in klinischen Studien',
    titleEn: 'Win Statistics: An Alternative to Hazard Ratios in Clinical Trials',
    excerpt: 'Neue statistische Methode hierarchisiert composite Endpunkte und bietet intuitive Behandlungseffekte.',
    excerptEn: 'New statistical method hierarchizes composite endpoints and offers intuitive treatment effects.',
    date: '2026-03-24',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistics'
  },
  {
    slug: 'meaningful-explanations-ai-clinical-practice-2026-03-23',
    title: 'Beyond Compliance: Making AI Explanations Meaningful for Patients in Clinical Practice',
    titleEn: 'Beyond Compliance: Making AI Explanations Meaningful for Patients in Clinical Practice',
    excerpt: 'Der EU AI Act gibt Patienten das Recht auf Erklärungen—aber was ist eine sinnvolle Erklärung in der klinischen Praxis?',
    excerptEn: 'The EU AI Act gives patients the right to explanations—but what does a meaningful explanation actually look like?',
    date: '2026-03-23',
    author: '21Stable Team',
    category: 'AI Ethics',
    categoryEn: 'AI Ethics'
  },
  {
    slug: 'ngs-companion-diagnostics-precision-oncology-2026-03-19',
    title: 'NGS Companion Diagnostics: Das Rückgrat der Präzisionsonkologie 2026',
    titleEn: 'NGS Companion Diagnostics: The Backbone of Precision Oncology in 2026',
    excerpt: 'Neue FDA-Zulassungen revolutionieren die biomarkergesteuerte Krebstherapie.',
    excerptEn: 'New FDA approvals are revolutionizing biomarker-driven cancer therapy.',
    date: '2026-03-19',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'statistische-methoden-onkologie-bayes-2026-03-17',
    title: 'Bayesianische Methoden: Die Lösung für Paradoxien klassischer Tests?',
    titleEn: 'Bayesian Methods: Solving the Paradoxes of Classical Statistical Tests?',
    excerpt: 'Wie Bayesianische Statistik die Grenzen von p-Werten überwindet.',
    excerptEn: 'How Bayesian statistics overcomes the limitations of p-values.',
    date: '2026-03-17',
    author: '21Stable Team',
    category: 'Biostatistik',
    categoryEn: 'Biostatistics'
  },
  {
    slug: 'ki-ethik-klinische-studien-2026-03-16',
    title: 'Ethik der EHR-Daten für KI-Entwicklung',
    titleEn: 'Ethics of EHR Data for AI Development',
    excerpt: 'Vier zentrale ethische Herausforderungen bei der Nutzung von EHR-Daten.',
    excerptEn: 'Four key ethical challenges in using EHR data for AI development.',
    date: '2026-03-16',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'AI Ethics'
  },
  {
    slug: 'real-world-evidence-precision-oncology-2026-03-15',
    title: 'Life-Cycle Real-World Evidence: Brückenbau in der Precision Oncology',
    titleEn: 'Life-Cycle Real-World Evidence: Bridging Evidentiary Gaps in Precision Oncology',
    excerpt: 'Wie Real-World Evidence Evidenzlücken schließen kann.',
    excerptEn: 'How real-world evidence can bridge evidentiary gaps.',
    date: '2026-03-15',
    author: '21Stable Team',
    category: 'Real-World Evidence',
    categoryEn: 'Real-World Evidence'
  },
  {
    slug: 'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
    title: 'ML sagt Chemotherapie-bedingte Knochenmarksuppression voraus',
    titleEn: 'Machine Learning Predicts Chemotherapy-Induced Myelosuppression',
    excerpt: 'Neues ML-Modell sagt Myelosuppression mit 89% Genauigkeit voraus.',
    excerptEn: 'New ML model predicts myelosuppression with 89% accuracy.',
    date: '2026-03-14',
    author: '21Stable Team',
    category: 'Maschinelles Lernen',
    categoryEn: 'Machine Learning'
  },
  {
    slug: 'pan-cancer-prognostic-models-survival-2026-03-13',
    title: 'Pan-Cancer Prognosemodelle: ML revolutioniert Überlebensanalyse',
    titleEn: 'Pan-Cancer Prognostic Models: ML Revolutionizes Survival Analysis',
    excerpt: 'Pan-Cancer-Modelle übertreffen Einzeltumor-Modelle.',
    excerptEn: 'Pan-cancer models outperform single-cancer models.',
    date: '2026-03-13',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Survival Analysis'
  },
  {
    slug: 'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
    title: 'Dynamisches ctDNA-Monitoring beim Nasopharynxkarzinom',
    titleEn: 'Dynamic ctDNA Monitoring in Nasopharyngeal Carcinoma',
    excerpt: 'ctDNA-geleitete Therapie verbessert Überleben.',
    excerptEn: 'ctDNA-guided therapy improves survival.',
    date: '2026-03-12',
    author: '21Stable Team',
    category: 'Biomarker',
    categoryEn: 'Biomarker'
  },
  {
    slug: 'adaptives-studiendesign-onkologie-2026-03-11',
    title: 'Adaptive Studiendesigns: Effizienz durch Bayes\'sche Methoden',
    titleEn: 'Adaptive Trial Designs: Efficiency Through Bayesian Methods',
    excerpt: 'Bayes\'sche adaptive Designs verbessern Effizienz klinischer Studien.',
    excerptEn: 'Bayesian adaptive designs improve efficiency in oncology trials.',
    date: '2026-03-11',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Clinical Trial Designs'
  }
]

export default function BlogPage() {
  const { lang, t } = useLang()
  
  // Sort by date descending
  const sortedPosts = [...allPosts].sort((a, b) => 
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
                  {lang === 'en' ? post.categoryEn : post.category}
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
                  {lang === 'en' ? post.titleEn : post.title}
                </Link>
              </h2>
              
              <p className="text-muted mb-4 line-clamp-3">
                {lang === 'en' ? post.excerptEn : post.excerpt}
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
