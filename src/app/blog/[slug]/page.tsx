import { getBlogPostBySlug, getRelatedPosts, getBlogData } from "@/data/blog"
import { notFound } from "next/navigation"
import BlogDetailHero from "@/blog/components/BlogDetailHero"
import RelatedPosts from "@/blog/components/RelatedPosts"
import InlineQuoteForm from "@/blog/components/InlineQuoteForm"
import Image from "next/image"
import "@/styles/content.css"
import type { Metadata } from 'next'

// Export for ISR
export const dynamic = 'force-dynamic'
// Update to 30 days revalidation as per project specifications
export const revalidate = 2592000 // Revalidate every 30 days

// Define the props interface correctly for Next.js 13+ app directory
interface PageProps {
  params: Promise<{
    slug: string
  }>
}

// Metadata generation for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  // Fetch blog post data from the database
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Blog Post - Exhibition Stand Builder',
      description: 'Read our latest insights and trends in exhibition stand design.',
    }
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.metaKeywords,
  }
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params
  
  // Fetch blog post data from the database
  const post = await getBlogPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  // Fetch blog data for the hero image
  const blogData = await getBlogData()

  // Fetch related posts
  const relatedPosts = await getRelatedPosts(slug)

  return (
    <main>
      {/* Hero Section */}
      <BlogDetailHero post={post} blogData={blogData || undefined} />
      
      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white max-w-4xl mx-auto px-6 lg:px-8">
                {/* Featured Image */}
                <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Article Content */}
                <div className="max-w-none">
                  <div 
                    className="rich-content text-sm sm:text-base"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                  />
                </div>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <RelatedPosts posts={relatedPosts} />
              <InlineQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}