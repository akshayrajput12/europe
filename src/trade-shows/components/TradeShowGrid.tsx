"use client"

import { useState, useCallback } from "react"
import { getTradeShows } from "@/data/trade-shows"
import TradeShowCard from "./TradeShowCard"
import TradeShowSearch from "./TradeShowSearch"

export default function TradeShowGrid() {
  const allShows = getTradeShows()
  const [filteredShows, setFilteredShows] = useState(allShows)

  const handleSearch = useCallback((searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredShows(allShows)
      return
    }

    const filtered = allShows.filter(show => 
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredShows(filtered)
  }, [allShows])

  return (
    <>
      {/* Search Bar */}
      <TradeShowSearch onSearch={handleSearch} />
      
      {/* Trade Shows Grid */}
      <section className="bg-gray-50 py-6 sm:py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredShows.map((show) => (
              <TradeShowCard key={show.id} show={show} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredShows.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <p className="text-gray-500 text-base sm:text-lg">No trade shows found matching your search criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}