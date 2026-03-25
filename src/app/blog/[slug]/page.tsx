import { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

interface Props {
  params: Promise<{ slug: string }>
}

// All blog post slugs - hardcoded for static export
const BLOG_SLUGS = [
  'trialmatchai-ki-patient-trial-matching-2026-03-25',
  'win-statistics-onkologie-klinische-studien-2026-03-24',
  'meaningful-explanations-ai-clinical-practice-2026-03-23',
  'ngs-companion-diagnostics-precision-oncology-2026-03-19',
  'statistische-methoden-onkologie-bayes-2026-03-17',
  'ki-ethik-klinische-studien-2026-03-16',
  'real-world-evidence-precision-oncology-2026-03-15',
  'maschinelles-lernen-chemotherapie-colorectal-2026-03-14',
  'pan-cancer-prognostic-models-survival-2026-03-13',
  'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12',
  'adaptives-studiendesign-onkologie-2026-03-11'
]

// English titles for metadata
const TITLES_EN: Record<string, string> = {
  'trialmatchai-ki-patient-trial-matching-2026-03-25': 'TrialMatchAI: AI-powered Patient-Trial Matching Revolutionizes Clinical Trial Designs',
  'win-statistics-onkologie-klinische-studien-2026-03-24': 'Win Statistics: An Alternative to Hazard Ratios in Clinical Trials', 
  'meaningful-explanations-ai-clinical-practice-2026-03-23': 'Beyond Compliance: Making AI Explanations Meaningful for Patients in Clinical Practice',
  'ngs-companion-diagnostics-precision-oncology-2026-03-19': 'NGS Companion Diagnostics: The Backbone of Precision Oncology in 2026',
  'statistische-methoden-onkologie-bayes-2026-03-17': 'Bayesian Methods: Solving the Paradoxes of Classical Statistical Tests?',
  'ki-ethik-klinische-studien-2026-03-16': 'Ethics of EHR Data for AI Development',
  'real-world-evidence-precision-oncology-2026-03-15': 'Life-Cycle Real-World Evidence: Bridging Evidentiary Gaps in Precision Oncology',
  'maschinelles-lernen-chemotherapie-colorectal-2026-03-14': 'Machine Learning Predicts Chemotherapy-Induced Myelosuppression',
  'pan-cancer-prognostic-models-survival-2026-03-13': 'Pan-Cancer Prognostic Models: ML Revolutionizes Survival Analysis',
  'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12': 'Dynamic ctDNA Monitoring in Nasopharyngeal Carcinoma',
  'adaptives-studiendesign-onkologie-2026-03-11': 'Adaptive Trial Designs: Efficiency Through Bayesian Methods'
}

export async function generateStaticParams() {
  return BLOG_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  return {
    title: `${TITLES_EN[slug] || 'Blog'} — 21Stable`,
    description: 'Expert articles on AI in oncology, cancer research and clinical trials.',
  }
}

function parseFrontmatter(content: string): { data: Record<string, string>; body: string } {
  const lines = content.split('\n')
  const data: Record<string, string> = {}
  let bodyStart = 0
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.trim() === '---') {
      if (Object.keys(data).length === 0) {
        continue
      } else {
        bodyStart = i + 1
        break
      }
    }
    const colonIndex = line.indexOf(':')
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim()
      let value = line.slice(colonIndex + 1).trim()
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }
      data[key] = value
    }
  }
  
  return { data, body: lines.slice(bodyStart).join('\n') }
}

function mdxToHtml(content: string): string {
  return content
    .split('\n')
    .map(line => {
      if (line.startsWith('## ')) return `<h2 class="text-2xl font-serif mt-8 mb-4 text-foreground">${line.slice(3)}</h2>`
      if (line.startsWith('### ')) return `<h3 class="text-xl font-medium mt-6 mb-3 text-foreground">${line.slice(4)}</h3>`
      if (line.startsWith('- **')) {
        const rest = line.slice(4)
        const colonIdx = rest.indexOf('**')
        if (colonIdx > 0) {
          return `<li class="ml-4 my-2 font-medium text-foreground"><strong>${rest.slice(0, colonIdx)}</strong>${rest.slice(colonIdx + 2)}</li>`
        }
        return `<li class="ml-4 my-2 font-medium text-foreground">${rest}</li>`
      }
      if (line.startsWith('- ')) return `<li class="ml-4 my-1 text-muted">${line.slice(2)}</li>`
      if (line.match(/^\d+\. /)) return `<li class="ml-4 my-1 list-decimal text-muted">${line.replace(/^\d+\. /, '')}</li>`
      if (line.trim() === '') return ''
      if (line.startsWith('|')) return ''
      if (line.startsWith('**')) return `<p class="font-bold my-4 text-foreground">${line.replace(/\*\*/g, '')}</p>`
      if (line.startsWith('# ')) return '' // Skip H1, title shown separately
      return `<p class="my-3 text-muted leading-relaxed">${line}</p>`
    })
    .join('')
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const filePath = join(process.cwd(), 'src/app/blog', slug, 'page.mdx')
  
  if (!existsSync(filePath)) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl text-foreground mb-4">Article not found</h1>
          <Link href="/blog" className="text-foreground hover:underline">← Back to Blog</Link>
        </div>
      </main>
    )
  }
  
  const fileContent = readFileSync(filePath, 'utf-8')
  const { data, body } = parseFrontmatter(fileContent)
  const contentHtml = mdxToHtml(body)
  
  const post = {
    title: TITLES_EN[slug] || data.title || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    author: data.author || '21Stable Team'
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8">
          ← Back to Blog
        </Link>

        <header className="mb-8">
          <time className="text-sm text-muted">
            {new Date(post.date).toLocaleDateString('en-US', {
              day: '2-digit',
              month: 'long',
              year: 'numeric'
            })}
          </time>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mt-2 mb-4">
            {post.title}
          </h1>
          <p className="text-muted">by {post.author}</p>
        </header>

        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  )
}
