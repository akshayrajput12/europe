"use client"

import { useState } from "react"
import TradeShowCard from "./TradeShowCard"
import TradeShowSearch from "./TradeShowSearch"
import { useQuoteModal } from "@/contexts/QuoteModalContext"
import { TradeShow } from "@/data/trade-shows"

// Helper function to check if a trade show is expired
function isTradeShowExpired(endDate: string): boolean {
  const today = new Date();
  const end = new Date(endDate);
  // Set time to end of day for comparison
  end.setHours(23, 59, 59, 999);
  return end < today;
}

interface TradeShowGridProps {
  shows: TradeShow[]
}

export default function TradeShowGrid({ shows }: TradeShowGridProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const { openQuoteModal } = useQuoteModal()
  
  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm)
  }

  // Filter shows based on search term and expiration
  const filteredShows = shows
    .filter((show: TradeShow) => !isTradeShowExpired(show.endDate)) // Additional filter for expired shows
    .filter((show: TradeShow) => 
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.city.toLowerCase().includes(searchTerm.toLowerCase())
    )

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
              {filteredShows.map((show: TradeShow) => (
                <TradeShowCard key={show.id} show={show} />
              ))}
            </div>
          </div>

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
                <button 
                  onClick={openQuoteModal}
                  className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white font-medium py-3 px-6 rounded-lg transition-colors"
                >
                  View Other Trade Shows
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}