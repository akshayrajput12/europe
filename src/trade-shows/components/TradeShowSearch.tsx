"use client"

import { useState, useEffect } from "react"

interface TradeShowSearchProps {
  onSearch?: (searchTerm: string) => void
}

export default function TradeShowSearch({ onSearch }: TradeShowSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  // Real-time search on typing
  useEffect(() => {
    if (onSearch) {
      onSearch(searchTerm)
    }
  }, [searchTerm, onSearch])

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="bg-chart-2 py-6 sm:py-8 mb-6 sm:mb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full max-w-md">
            <input
              type="text"
              placeholder="Search Trade Fairs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white"
            />
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-slate-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-md sm:rounded-l-none sm:rounded-r-md transition-colors duration-300 text-sm font-medium whitespace-nowrap"
            >
              Search Fairs
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}