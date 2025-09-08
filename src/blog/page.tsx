import BlogHeroSection from "./components/BlogHeroSection"
import BlogGrid from "./components/BlogGrid"
import { getBlogData } from "@/data/blog"
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

export default async function BlogPage() {
  const blogData = await getBlogData()
  
  if (!blogData) {
    return <div>Error loading blog data</div>
  }

  return (
    <main>
      <BlogHeroSection />
      <BlogGrid />
    </main>
  )
}