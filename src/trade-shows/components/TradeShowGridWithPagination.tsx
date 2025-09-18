"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import TradeShowCard from "./TradeShowCard"
import TradeShowSearch from "./TradeShowSearch"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getPaginatedTradeShows } from "@/data/trade-shows"
import { TradeShowCardData } from "@/data/trade-shows"
import { useQuoteModal } from "@/contexts/QuoteModalContext"

const ITEMS_PER_PAGE = 6

interface TradeShowGridWithPaginationProps {
  initialShows: TradeShowCardData[]
  totalShows: number
}

export default function TradeShowGridWithPagination({ initialShows, totalShows }: TradeShowGridWithPaginationProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { openQuoteModal } = useQuoteModal()
  
  const [shows, setShows] = useState(initialShows)
  const [total, setTotal] = useState(totalShows)
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(false)
  const [optimisticPage, setOptimisticPage] = useState<number | null>(null)
  
  const currentPage = parseInt(searchParams.get('page') || '1')
  const urlSearchTerm = searchParams.get('search') || ''
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
  const fetchShows = useCallback(async (page: number, searchTerm: string = '') => {
    setLoading(true)
    try {
      const data = await getPaginatedTradeShows(page, ITEMS_PER_PAGE, searchTerm)
      if (data) {
        setShows(data.shows)
        setTotal(data.total)
      }
    } catch (error) {
      console.error('Error fetching trade shows:', error)
    } finally {
      setLoading(false)
      setOptimisticPage(null)
    }
  }, [])

  // Fetch new shows when page or search term changes
  useEffect(() => {
    // Only fetch if we're not already loading and there's a meaningful change
    if (loading) return;
    
    // Update search term when URL changes
    if (searchTerm !== urlSearchTerm) {
      setSearchTerm(urlSearchTerm)
    }
    
    // Fetch data when page or search term changes
    if (currentPage !== 1 || searchTerm !== urlSearchTerm) {
      fetchShows(currentPage, urlSearchTerm)
    }
  }, [currentPage, fetchShows, searchTerm, urlSearchTerm, loading])

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages || page === currentPage) return
    
    // Set optimistic page for immediate UI update
    setOptimisticPage(page)
    
    // Update URL
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }
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

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
    // Reset to first page when search term changes
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', '1')
    if (searchTerm) {
      params.set('search', searchTerm)
    } else {
      params.delete('search')
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  // Since we're now doing server-side search, we don't need to filter client-side
  const displayShows = optimisticPage ? 
    Array(ITEMS_PER_PAGE).fill(null) : // Show skeleton loaders when changing pages
    shows

  return (
    <>
      {/* Search Bar */}
      <TradeShowSearch onSearch={handleSearch} initialValue={searchTerm} />
      
      {/* Trade Shows Grid */}
      <section className="bg-gray-50 py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* First card needs extra top padding for logo */}
          <div className="pt-8 sm:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {displayShows.map((show, index) => (
                <div key={show?.id || `skeleton-${index}`}>
                  {show ? (
                    <TradeShowCard show={show} />
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
          </div>

          {/* No Results Message */}
          {!loading && shows.length === 0 && (
            <div className="text-center py-16 sm:py-20 lg:py-24">
              <div className="max-w-md mx-auto">
                {/* OOPS Message */}
                <p className="text-lg sm:text-xl text-gray-800 mb-4">
                  <span className="text-[#A5CD39] font-bold">OOPS!</span> The Trade Show you are looking for is unavailable right now.
                </p>
                <p className="text-lg sm:text-xl text-gray-800 mb-8">
                  Kindly come back later.
                </p>
                
                {/* View Other Trade Shows Button */}
                <button 
                  onClick={openQuoteModal}
                  className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  View Other Trade Shows
                </button>
              </div>
            </div>
          )}

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
              Showing {Math.min(ITEMS_PER_PAGE * currentPage, total) - ITEMS_PER_PAGE + 1}-{Math.min(ITEMS_PER_PAGE * currentPage, total)} of {total} trade shows
            </div>
          )}
        </div>
      </section>
    </>
  )
}