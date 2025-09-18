"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
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
  const [optimisticPage, setOptimisticPage] = useState<number | null>(null)
  
  const currentPage = parseInt(searchParams.get('page') || '1')
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE)

  // Memoize page numbers generation
  const pageNumbers = useMemo(() => {
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
  }, [totalPages, currentPage])

  // Optimized data fetching with useCallback
  const fetchPosts = useCallback(async (page: number) => {
    try {
      const data = await getPaginatedBlogPosts(page, ITEMS_PER_PAGE)
      if (data) {
        setPosts(data.posts)
        setTotal(data.total)
      }
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setOptimisticPage(null)
    }
  }, [])

  // Fetch new posts when page changes
  useEffect(() => {
    // Only fetch if not already on the correct page
    if (optimisticPage && optimisticPage !== currentPage) {
      fetchPosts(optimisticPage)
    } else if (!optimisticPage && currentPage > 1) {
      // This handles initial load for pages other than 1
      fetchPosts(currentPage)
    }
  }, [currentPage, optimisticPage, fetchPosts])

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    
    // Set optimistic page for immediate UI update
    setOptimisticPage(page)
    
    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
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

  // Determine which posts to display (optimistic or actual)
  const displayPosts = optimisticPage ? 
    Array(ITEMS_PER_PAGE).fill(null) : // Show skeleton loaders when changing pages
    posts

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
          {displayPosts.map((post, index) => (
            <div key={post?.id || `skeleton-${index}`}>
              {post ? (
                <BlogCard post={post} />
              ) : (
                // Skeleton loader for better perceived performance
                <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="bg-gray-200 h-48 w-full" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    <div className="mt-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <div className="h-4 bg-gray-200 rounded w-20 mb-1"></div>
                        <div className="h-3 bg-gray-200 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 sm:mt-12">
            <div className="flex items-center border border-gray-300 rounded-lg bg-white shadow-sm">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                disabled={currentPage === 1}
                className={`px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors border-r border-gray-300 ${
                  currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Page Numbers */}
              {pageNumbers.map((page, index) => (
                <div key={index}>
                  {page === '...' ? (
                    <span className="px-3 py-2 text-gray-500 border-r border-gray-300">...</span>
                  ) : (
                    <button
                      onClick={() => goToPage(page as number)}
                      className={`px-3 py-2 text-sm font-medium transition-colors border-r border-gray-300 last:border-r-0 ${
                        currentPage === page
                          ? 'bg-slate-800 text-white'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  )}
                </div>
              ))}

              {/* Next Button */}
              <button
                onClick={goToNext}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 text-gray-500 hover:text-gray-700 transition-colors ${
                  currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-50'
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