'use client'

import { useLang } from '@/lib/i18n'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
}

// All blog posts - add new posts here
const allPosts: BlogPost[] = [
  {
    slug: 'ngs-companion-diagnostics-precision-oncology-2026-03-19',
    title: 'NGS & Companion Diagnostics: Präzise Therapieauswahl in der Onkologie',
    excerpt: 'Next-Generation Sequencing ermöglicht die identifikation von Biomarkern für zielgerichtete Therapien.',
    date: '2026-03-19',
    author: '21Stable Team',
    category: 'Diagnostik'
  },
  {
    slug: 'statistische-methoden-onkologie-bayes-2026-03-17',
    title: 'Statistische Methoden in der Onkologie: Bayes-Ansätze für bessere Entscheidungen',
    excerpt: 'Wie Bayes\'sche Statistik die klinische Entscheidungsfindung in der Onkologie verbessert.',
    date: '2026-03-17',
    author: 'Biostatistik Team',
    category: 'Biostatistik'
  },
  {
    slug: 'ki-ethik-klinische-studien-2026-03-16',
    title: 'KI-Ethik in klinischen Studien: Transparenz und Vertrauen',
    excerpt: 'Ethische Aspekte beim Einsatz von KI in der klinischen Forschung.',
    date: '2026-03-16',
    author: '21Stable Team',
    category: 'KI & Ethik'
  },
  {
    slug: 'real-world-evidence-precision-oncology-2026-03-15',
    title: 'Real-World Evidence in der Präzisionsonkologie',
    excerpt: 'Wie Real-World Data die Evidenzbasis für personalisierte Therapien stärkt.',
    date: '2026-03-15',
    author: 'Clinical Research Team',
    category: 'Real-World Evidence'
  },
  {
    slug: 'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
    title: 'Maschinelles Lernen zur Vorhersage von Chemotherapie-Antworten',
    excerpt: 'ML-Modelle sagen das Ansprechen auf Chemotherapie bei colorectal cancer voraus.',
    date: '2026-03-14',
    author: 'Data Science Team',
    category: 'Machine Learning'
  },
  {
    slug: 'pan-cancer-prognostic-models-survival-2026-03-13',
    title: 'Pan-Cancer Prognosemodelle: Überlebensanalyse über Tumorarten hinweg',
    excerpt: 'Neue prognostische Modelle für multiple Krebsarten mittels Machine Learning.',
    date: '2026-03-13',
    author: 'Biostatistik Team',
    category: 'Survival Analysis'
  },
  {
    slug: 'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
    title: 'ctDNA & Risk-Adaptive Therapy bei Nasopharynxkarzinom',
    excerpt: 'Flüssigbiopsie für dynamisches Therapiemonitoring und risikoadaptierte Behandlungsanpassung.',
    date: '2026-03-12',
    author: 'Clinical Scientist',
    category: 'Liquid Biopsy'
  },
  {
    slug: 'adaptives-studiendesign-onkologie-2026-03-11',
    title: 'Adaptive Studiendesigns in der Onkologie: Effizienz durch Bayes\'sche Methoden',
    excerpt: 'Wie Bayes\'sche adaptive Studiendesigns die Effizienz klinischer Studien in der Onkologie verbessern.',
    date: '2026-03-11',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns'
  },
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

const allPostsEn: BlogPost[] = [
  {
    slug: 'ngs-companion-diagnostics-precision-oncology-2026-03-19',
    title: 'NGS & Companion Diagnostics: Precision Therapy Selection in Oncology',
    excerpt: 'Next-Generation Sequencing enables biomarker identification for targeted therapies.',
    date: '2026-03-19',
    author: '21Stable Team',
    category: 'Diagnostics'
  },
  {
    slug: 'statistische-methoden-onkologie-bayes-2026-03-17',
    title: 'Statistical Methods in Oncology: Bayesian Approaches for Better Decisions',
    excerpt: 'How Bayesian statistics improves clinical decision-making in oncology.',
    date: '2026-03-17',
    author: 'Biostatistics Team',
    category: 'Biostatistics'
  },
  {
    slug: 'ki-ethik-klinische-studien-2026-03-16',
    title: 'AI Ethics in Clinical Trials: Transparency and Trust',
    excerpt: 'Ethical aspects of using AI in clinical research.',
    date: '2026-03-16',
    author: '21Stable Team',
    category: 'AI & Ethics'
  },
  {
    slug: 'real-world-evidence-precision-oncology-2026-03-15',
    title: 'Real-World Evidence in Precision Oncology',
    excerpt: 'How Real-World Data strengthens the evidence base for personalized therapies.',
    date: '2026-03-15',
    author: 'Clinical Research Team',
    category: 'Real-World Evidence'
  },
  {
    slug: 'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
    title: 'Machine Learning for Chemotherapy Response Prediction',
    excerpt: 'ML models predict chemotherapy response in colorectal cancer.',
    date: '2026-03-14',
    author: 'Data Science Team',
    category: 'Machine Learning'
  },
  {
    slug: 'pan-cancer-prognostic-models-survival-2026-03-13',
    title: 'Pan-Cancer Prognostic Models: Survival Analysis Across Tumor Types',
    excerpt: 'New prognostic models for multiple cancer types using machine learning.',
    date: '2026-03-13',
    author: 'Biostatistics Team',
    category: 'Survival Analysis'
  },
  {
    slug: 'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
    title: 'ctDNA & Risk-Adaptive Therapy in Nasopharyngeal Carcinoma',
    excerpt: 'Liquid biopsy for dynamic therapy monitoring and risk-adaptive treatment adjustment.',
    date: '2026-03-12',
    author: 'Clinical Scientist',
    category: 'Liquid Biopsy'
  },
  {
    slug: 'adaptives-studiendesign-onkologie-2026-03-11',
    title: 'Adaptive Trial Designs in Oncology: Efficiency Through Bayesian Methods',
    excerpt: 'How Bayesian adaptive trial designs improve efficiency in oncology clinical trials.',
    date: '2026-03-11',
    author: '21Stable Team',
    category: 'Clinical Trial Designs'
  },
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
