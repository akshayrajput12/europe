"use client"

import { useState } from "react"
import TradeShowCard from "./TradeShowCard"
import TradeShowSearch from "./TradeShowSearch"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/contexts/QuoteModalContext"
import { TradeShowData } from "@/data/trade-shows"

const ITEMS_PER_PAGE = 6

// Helper function to check if a trade show is expired
function isTradeShowExpired(endDate: string): boolean {
  const today = new Date();
  const end = new Date(endDate);
  // Set time to end of day for comparison
  end.setHours(23, 59, 59, 999);
  return end < today;
}

export default function TradeShowGrid({ tradeShowData }: { tradeShowData: TradeShowData }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const { openQuoteModal } = useQuoteModal()

  // Filter shows based on search term and expiration
  const filteredShows = tradeShowData.shows
    .filter(show => !isTradeShowExpired(show.endDate)) // Additional filter for expired shows
    .filter(show => 
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.city.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
    setCurrentPage(1) // Reset to first page when searching
  }

  // Calculate pagination
  const totalPages = Math.ceil(filteredShows.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentShows = filteredShows.slice(startIndex, endIndex)

  const goToPage = (page: number) => {
    setCurrentPage(page)
    // Scroll to top of grid
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1)
    }
  }

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

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1)
    }
  }

  return (
    <>
      {/* Search Bar */}
      <TradeShowSearch onSearch={handleSearch} />
      
      {/* Trade Shows Grid */}
      <section className="bg-gray-50 py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* First card needs extra top padding for logo */}
          <div className="pt-8 sm:pt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {currentShows.map((show) => (
                <TradeShowCard key={show.id} show={show} />
              ))}
            </div>
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
                {generatePageNumbers().map((page, index) => (
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
          {filteredShows.length > 0 && (
            <div className="text-center mt-4 text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredShows.length)} of {filteredShows.length} trade shows
            </div>
          )}

          {/* No Results Message */}
          {filteredShows.length === 0 && (
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
                <Button 
                  size="lg"
                  onClick={openQuoteModal}
                  className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
                >
                  View Other Trade Shows
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}