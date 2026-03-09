import { Metadata } from 'next'
import BlogPostClient from '../BlogPostClient'

export async function generateStaticParams() {
  return [
    { slug: 'multimodale-ki-pathologie' },
    { slug: 'ctdna-liquid-biopsy-fortschritte' },
    { slug: 'multi-omicsPraezisionsmedizin' }
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const titles: Record<string, string> = {
    'multimodale-ki-pathologie': 'Multimodale KI in der Pathologie',
    'ctdna-liquid-biopsy-fortschritte': 'ctDNA-Liquid-Biopsy',
    'multi-omicsPraezisionsmedizin': 'Multi-Omics in der Präzisionsonkologie'
  }
  
  return {
    title: `${titles[slug] || 'Blog'} — 21Stable`,
    description: 'Aktuelle Forschungsergebnisse und Insights aus der KI-gestützten Onkologie.',
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return <BlogPostClient slug={resolvedParams.slug} />
}
