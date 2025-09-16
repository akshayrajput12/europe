"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import BlogCard from "./BlogCard"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getPaginatedBlogPosts } from "@/data/blog"
import { BlogPost } from "@/data/blog"

const ITEMS_PER_PAGE = 6

interface BlogGridProps {
  initialPosts: BlogPost[]
  totalPosts: number
}

export default function BlogGrid({ initialPosts, totalPosts }: BlogGridProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  const [posts, setPosts] = useState(initialPosts)
  const [total, setTotal] = useState(totalPosts)
  const [loading, setLoading] = useState(false)
  
  const currentPage = parseInt(searchParams.get('page') || '1')
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  // Fetch new posts when page changes
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      try {
        const page = parseInt(searchParams.get('page') || '1')
        const data = await getPaginatedBlogPosts(page, ITEMS_PER_PAGE)
        if (data) {
          setPosts(data.posts)
          setTotal(data.total)
        }
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [searchParams])

  // Generate page numbers with ellipsis
  const generatePageNumbers = () => {
    const pages = []
    const showEllipsis = totalPages > 7
    
    if (!showEllipsis) {
      // Show all pages if 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      // Always show first page
      pages.push(1)
      
      if (currentPage <= 4) {
        // Show 1, 2, 3, 4, 5, ..., last
        for (let i = 2; i <= 5; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 3) {
        // Show 1, ..., last-4, last-3, last-2, last-1, last
        pages.push('...')
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        // Show 1, ..., current-1, current, current+1, ..., last
        pages.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      }
    }
    
    return pages
  }

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            FEATURED ARTICLES
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
            Discover insights, trends, and expert advice from the world of exhibition design and trade show marketing.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 sm:mt-12">
            <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1 || loading}
                className={`px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors border-r border-gray-300 ${
                  currentPage === 1 || loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {generatePageNumbers().map((page, index) => (
                <div key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500 border-r border-gray-300">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(page as number)}
                      disabled={loading}
                      className={`px-3 py-2 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                        currentPage === page
                          ? 'bg-slate-800 text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      } ${loading ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                      {page}
                    </button>
                  )}
                </div>
              ))}

              {/* Next Button */}
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages || loading}
                className={`px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors ${
                  currentPage === totalPages || loading ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Results Info */}
        {total > 0 && (
          <div className="text-center mt-4 text-sm text-gray-600">
            Showing {Math.min(ITEMS_PER_PAGE * currentPage, total) - ITEMS_PER_PAGE + 1}-{Math.min(ITEMS_PER_PAGE * currentPage, total)} of {total} blog posts
          </div>
        )}
      </div>
    </section>
  )
}