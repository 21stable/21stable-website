import { Metadata } from 'next'
import Link from 'next/link'
import { readFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

interface Props {
  params: Promise<{ slug: string }>
}

// Get all blog post slugs from directories
function getAllSlugs(): string[] {
  const blogDir = join(process.cwd(), 'src/app/blog')
  try {
    return readdirSync(blogDir)
      .filter(item => {
        const itemPath = join(blogDir, item, 'page.mdx')
        return item !== 'page.tsx' && item !== 'page.jsx' && existsSync(itemPath)
      })
  } catch {
    return []
  }
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const titles: Record<string, string> = {
    'ngs-companion-diagnostics-precision-oncology-2026-03-19': 'NGS Companion Diagnostics',
    'statistische-methoden-onkologie-bayes-2026-03-17': 'Statistische Methoden in der Onkologie',
    'ki-ethik-klinische-studien-2026-03-16': 'KI-Ethik in klinischen Studien',
    'real-world-evidence-precision-oncology-2026-03-15': 'Real-World Evidence',
    'maschinelles-lernen-chemotherapie-colorectal-2026-03-14': 'Maschinelles Lernen Chemotherapie',
    'pan-cancer-prognostic-models-survival-2026-03-13': 'Pan-Cancer Prognosemodelle',
    'ctdna-risk-adaptive-therapy-nasopharyngeal-2026-03-12': 'ctDNA Risk-Adaptive Therapy',
    'adaptives-studiendesign-onkologie-2026-03-11': 'Adaptive Studiendesigns',
    'multimodale-ki-pathologie': 'Multimodale KI in der Pathologie',
    'ctdna-liquid-biopsy-fortschritte': 'ctDNA-Liquid-Biopsy',
    'multi-omicsPraezisionsmedizin': 'Multi-Omics in der Präzisionsonkologie'
  }
  
  return {
    title: `${titles[slug] || 'Blog'} — 21Stable`,
    description: 'Aktuelle Forschungsergebnisse und Insights aus der KI-gestützten Onkologie.',
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
      // Remove quotes
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
      if (line.startsWith('# ')) return `<h1 class="text-3xl font-serif mt-8 mb-4 text-foreground">${line.slice(2)}</h1>`
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
          <h1 className="font-serif text-3xl text-foreground mb-4">Artikel nicht gefunden</h1>
          <Link href="/blog" className="text-foreground hover:underline">← Zurück zum Blog</Link>
        </div>
      </main>
    )
  }
  
  const fileContent = readFileSync(filePath, 'utf-8')
  const { data, body } = parseFrontmatter(fileContent)
  const contentHtml = mdxToHtml(body)
  
  const post = {
    title: data.title || data.title_en || slug,
    date: data.date || new Date().toISOString().split('T')[0],
    author: data.author || '21Stable Team'
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-sm text-muted hover:text-foreground mb-8">
          ← Zurück zum Blog
        </Link>

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

        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </main>
  )
}
