import { Metadata } from 'next'
import { readdir, readFile } from 'fs/promises'
import { join } from 'path'
import matter from 'gray-matter'
import BlogPostClient from '../BlogPostClient'

export async function generateStaticParams() {
  const blogDir = join(process.cwd(), 'src/app/blog')
  const entries = await readdir(blogDir, { withFileTypes: true })
  const slugs = entries
    .filter(entry => entry.isDirectory())
    .map(entry => ({ slug: entry.name }))
  return slugs
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const mdxPath = join(process.cwd(), 'src/app/blog', slug, 'page.mdx')
  
  try {
    const content = await readFile(mdxPath, 'utf-8')
    const { data } = matter(content)
    return {
      title: `${data.title || 'Blog'} — 21Stable`,
      description: data.description || 'Aktuelle Forschungsergebnisse und Insights aus der KI-gestützten Onkologie.',
    }
  } catch {
    return {
      title: 'Blog — 21Stable',
      description: 'Aktuelle Forschungsergebnisse und Insights aus der KI-gestützten Onkologie.',
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  return <BlogPostClient slug={resolvedParams.slug} />
}
