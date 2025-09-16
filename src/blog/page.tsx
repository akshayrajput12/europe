import BlogHeroSection from "./components/BlogHeroSection"
import BlogGrid from "./components/BlogGrid"
import { getBlogData, getPaginatedBlogPosts } from "@/data/blog"
import type { Metadata } from 'next'

// Export for ISR
export const dynamic = 'force-dynamic'
// Update to 30 days revalidation as per project specifications
export const revalidate = 2592000 // Revalidate every 30 days

// Metadata generation for SEO
export async function generateMetadata(): Promise<Metadata> {
  const blogData = await getBlogData()
  
  if (!blogData) {
    return {
      title: 'Blog - Exhibition Stand Builder',
      description: 'Latest insights and trends in exhibition stand design and construction.',
    }
  }

  return {
    title: blogData.metaTitle,
    description: blogData.metaDescription,
    keywords: blogData.metaKeywords,
  }
}

interface BlogPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const blogData = await getBlogData()
  const resolvedSearchParams = await searchParams
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page as string) : 1
  const paginatedData = await getPaginatedBlogPosts(page, 6)
  
  if (!blogData) {
    return <div>Error loading blog data</div>
  }

  if (!paginatedData) {
    return <div>Error loading blog posts</div>
  }

  return (
    <main>
      <BlogHeroSection />
      <BlogGrid initialPosts={paginatedData.posts} totalPosts={paginatedData.total} />
    </main>
  )
}