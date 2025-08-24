"use client"

import { getBlogPostBySlug, getRelatedPosts, BlogPost } from "@/data/blog"
import { notFound } from "next/navigation"
import BlogDetailHero from "@/blog/components/BlogDetailHero"
import RelatedPosts from "@/blog/components/RelatedPosts"
import InlineQuoteForm from "@/blog/components/InlineQuoteForm"
import Image from "next/image"
import { useEffect, useState } from "react"
import "@/styles/content.css"

interface BlogDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const [post, setPost] = useState<BlogPost | null>(null)

  useEffect(() => {
    async function loadData() {
      const resolvedParams = await params
      const currentSlug = resolvedParams.slug
      
      const blogPost = getBlogPostBySlug(currentSlug)
      if (!blogPost) {
        notFound()
      }
      setPost(blogPost)
    }
    
    loadData()
  }, [params])

  useEffect(() => {
    if (post?.content) {
      // Add data labels to table cells for mobile responsiveness
      const tables = document.querySelectorAll('.rich-content table')
      tables.forEach(table => {
        const headers = table.querySelectorAll('th')
        const rows = table.querySelectorAll('tbody tr')
        
        rows.forEach(row => {
          const cells = row.querySelectorAll('td')
          cells.forEach((cell, index) => {
            if (headers[index]) {
              cell.setAttribute('data-label', headers[index].textContent || '')
            }
          })
        })
      })
    }
  }, [post?.content])

  if (!post) {
    return <div>Loading...</div>
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
                    className="rich-content text-sm sm:text-base"
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