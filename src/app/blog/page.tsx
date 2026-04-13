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
    slug: 'atomic-trial-survival-analysis-dmmr-colon-2026-04-10',
    title: 'ATOMIC-Trial: Neue Standards in der Survival-Analyse bei dMMR-Kolonkarzinom',
    titleEn: 'ATOMIC Trial: New Standards in Survival Analysis for dMMR Colon Cancer',
    excerpt: 'Die ATOMIC-Studie zeigt signifikante Verbesserung im krankheitsfreien Überleben durch Atezolizumab plus Chemotherapie.',
    excerptEn: 'The ATOMIC trial demonstrates significant improvement in disease-free survival with atezolizumab plus chemotherapy.',
    date: '2026-04-10',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'master-protocol-basket-trials-onkologie-2026-04-08',
    title: 'Master-Protocol-Studien: Basket-, Umbrella- und Platform-Trials revolutionieren die Onkologie',
    titleEn: 'Master Protocol Trials: Basket, Umbrella, and Platform Designs Revolutionizing Oncology',
    excerpt: 'Basket-, Umbrella- und Platform-Trials beschleunigen die Arzneimittelentwicklung durch innovative Master-Protocol-Designs.',
    excerptEn: 'Basket, umbrella, and platform trials accelerate drug development through innovative master protocol designs.',
    date: '2026-04-08',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'bayesian-dose-finding-boin-project-optimus-2026-04-07',
    title: 'Bayesian Dose-Findung in der Onkologie: BOIN, CRM & FDA Project Optimus',
    titleEn: 'Bayesian Dose-Finding in Oncology: BOIN, CRM & FDA Project Optimus',
    excerpt: 'Bayesian model-basierte Dosisfindungsdesigns lösen das alte 3+3-Design in Phase-I-Onkologiestudien ab.',
    excerptEn: 'Bayesian model-based dose-finding designs are replacing the legacy 3+3 design in Phase I oncology trials.',
    date: '2026-04-07',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'dynamische-biomarker-brustkrebs-precision-oncology-2026-04-09',
    title: 'Dynamische Biomarker revolutionieren die Precision Oncology bei Brustkrebs',
    titleEn: 'Dynamic Biomarkers Are Revolutionizing Precision Oncology in Breast Cancer',
    excerpt: 'Tissue-basierte und flüssigkeitsbasierte Biomarker verändern sich in Echtzeit und ermöglichen personalisierte Therapieentscheidungen.',
    excerptEn: 'Tissue-based and liquid biomarkers evolve in real-time, enabling personalized treatment decisions.',
    date: '2026-04-09',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'ki-ethik-entwickler-perspektive-2026-04-06',
    title: 'KI-Ethik aus Entwicklersicht: Was uns die neue JMIR-Studie 2026 lehrt',
    titleEn: 'AI Ethics from the Developer Perspective: Insights from the New JMIR Study 2026',
    excerpt: 'KI-Entwickler in der medizinischen Forschung vermissen strukturierte Ethik-Schulungen.',
    excerptEn: 'Medical AI developers lack structured ethics training.',
    date: '2026-04-06',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
  },
  {
    slug: 'real-world-evidence-onkologie-2026-04-05',
    title: 'Real-World Evidence in der Onkologie: Von der Ergänzung zum strategischen Kernstück',
    titleEn: 'Real-World Evidence in Oncology: From Supplement to Strategic Cornerstone',
    excerpt: 'Wie RWE die Onkologie transformiert: FDA-Programme, DARWIN EU und aktuelle Studiendaten.',
    excerptEn: 'How RWE is transforming oncology: FDA programs, DARWIN EU, and current study data.',
    date: '2026-04-05',
    author: '21Stable Team',
    category: 'Real-World Evidence',
    categoryEn: 'Real-World Evidence'
  },
  {
    slug: 'ml-survival-modell-katheter-thrombose-tumorpatienten-2026-04-04',
    title: 'SM-CRT: Machine-Learning-Survivalmodell zur personalisierten Vorhersage katheterassoziierter Thrombosen',
    titleEn: 'SM-CRT: ML Survival Model for Personalized Prediction of Catheter-Related Thrombosis in Cancer Patients',
    excerpt: 'ML-Survivalmodell sagt katheterassoziierte Thrombosen bei über 30.000 Tumorpatienten vorher.',
    excerptEn: 'ML survival model predicts catheter-related thrombosis in over 30,000 cancer patients.',
    date: '2026-04-04',
    author: '21Stable Team',
    category: 'Maschinelles Lernen',
    categoryEn: 'Maschinelles Lernen'
  },
  {
    slug: 'master-protocols-basket-umbrella-platform-2026-04-01',
    title: 'Master Protocols Revolutionieren Die Onkologische Forschung',
    titleEn: 'Master Protocols Are Revolutionizing Oncology Research',
    excerpt: 'Master-Protokoll-Designs wie Basket- und Umbrella-Trials beschleunigen die Präzisionsonkologie.',
    excerptEn: 'Master protocol designs like basket and umbrella trials accelerate precision oncology.',
    date: '2026-04-01',
    author: '21Stable Team',
    category: 'Klinische Studiendesigns',
    categoryEn: 'Klinische Studiendesigns'
  },
  {
    slug: 'bayesian-methoden-fda-guidance-2026',
    title: 'FDA Draft Guidance 2026: Bayesian Methoden als primäres Analyse-Framework',
    titleEn: 'FDA Draft Guidance 2026: Bayesian Methods as Primary Analysis Framework',
    excerpt: 'Die FDA veröffentlicht bahnbrechende Draft Guidance zur Verwendung Bayesianer Methoden in klinischen Studien.',
    excerptEn: 'FDA released groundbreaking draft guidance on using Bayesian methods in clinical trials.',
    date: '2026-03-31',
    author: '21Stable Team',
    category: 'Statistische Methoden',
    categoryEn: 'Statistische Methoden'
  },
  {
    slug: 'ml-indication-prioritization-onkologie-2026-03-28',
    title: 'INSPIRE: Machine Learning für Indikations-Priorisierung in der Onkologie',
    titleEn: 'INSPIRE: Machine Learning for Indication Prioritization in Oncology',
    excerpt: 'Neuer ML-Ansatz nutzt Real-World Data um Indikationen für onkologische Wirkstoffe vorherzusagen.',
    excerptEn: 'Novel ML approach leverages real-world data to predict indications for oncologic drugs.',
    date: '2026-03-28',
    author: '21Stable Team',
    category: 'Maschinelles Lernen',
    categoryEn: 'Maschinelles Lernen'
  },
  {
    slug: 'rmst-survival-analysis-threshold-time-2026-03-27',
    title: 'RMST in der modernen Überlebensanalyse: Neue Methoden zur Threshold-Bestimmung',
    titleEn: 'RMST in Modern Survival Analysis: New Methods for Threshold Time Determination',
    excerpt: 'Neue methodische Advances bei der Restricted Mean Survival Time.',
    excerptEn: 'Methodological advances in Restricted Mean Survival Time.',
    date: '2026-03-27',
    author: '21Stable Team',
    category: 'Überlebensanalyse',
    categoryEn: 'Überlebensanalyse'
  },
  {
    slug: 'precision-immunotherapy-hnscc-biomarkers-2026-03-26',
    title: 'Präzisions-Immuntherapie bei Kopf-Hals-Karzinomen: Neue Biomarker-Strategien',
    titleEn: 'Precision Immunotherapy for Head and Neck Cancer: Emerging Biomarker Strategies',
    excerpt: 'Neue Biomarker-Strategien für Immuntherapie bei Kopf-Hals-Karzinomen.',
    excerptEn: 'New biomarker strategies for immunotherapy in head and neck cancer.',
    date: '2026-03-26',
    author: '21Stable Team',
    category: 'Biomarker & Precision Oncology',
    categoryEn: 'Biomarker & Precision Oncology'
  },
  {
    slug: 'irb-three-stage-framework-ai-research-2026-03-30',
    title: 'IRB-Überprüfung von KI-Studien: Das Three-Stage Framework',
    titleEn: 'IRB Review of AI Studies: The Three-Stage Framework',
    excerpt: 'Drei-Stufen-Framework für IRB-Überprüfung von KI-Human Subjects Research.',
    excerptEn: 'Three-stage framework for IRB review of AI human subjects research.',
    date: '2026-03-30',
    author: '21Stable Team',
    category: 'KI-Ethik',
    categoryEn: 'KI-Ethik'
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
