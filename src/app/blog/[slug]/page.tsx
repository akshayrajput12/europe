import { getBlogPostBySlug, getBlogPosts, getRelatedPosts } from "@/data/blog"
import { notFound } from "next/navigation"
import BlogDetailHero from "@/blog/components/BlogDetailHero"
import RelatedPosts from "@/blog/components/RelatedPosts"
import InlineQuoteForm from "@/blog/components/InlineQuoteForm"
import Image from "next/image"

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <BlogDetailHero post={post} />
      
      {/* Main Content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <article className="bg-white max-w-4xl mx-auto px-6 lg:px-8">
                {/* Article Meta */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-200">
                  <span className="text-gray-500 text-sm">
                    {new Date(post.publishedDate).toLocaleDateString("en-US", { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                {/* Featured Image */}
                <div className="relative h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Article Content */}
                <div className="max-w-none">
                  <div 
                    className="prose prose-base max-w-none prose-headings:text-slate-800 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#A5CD39] prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-ol:text-gray-700 prose-ul:text-gray-700 prose-li:mb-2"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </div>
              </article>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <RelatedPosts posts={getRelatedPosts(post.slug)} />
              <InlineQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Generate static params for available blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}