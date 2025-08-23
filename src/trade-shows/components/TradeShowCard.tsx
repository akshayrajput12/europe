"use client"

import Image from "next/image"
import Link from "next/link"
import { TradeShow } from "@/data/trade-shows"
import { MapPin, Calendar, MessageCircle, Eye } from "lucide-react"
import { useQuoteModal } from "@/contexts/QuoteModalContext"

interface TradeShowCardProps {
  show: TradeShow
}

export default function TradeShowCard({ show }: TradeShowCardProps) {
  const { openQuoteModal } = useQuoteModal()
  
  const formatDateRange = (startDate: string, endDate: string) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    
    const startDay = start.getDate().toString().padStart(2, '0')
    const endDay = end.getDate().toString().padStart(2, '0')
    const startMonth = start.toLocaleDateString("en-US", { month: 'short' })
    const endMonth = end.toLocaleDateString("en-US", { month: 'short' })
    const year = start.getFullYear()
    
    return `${startDay}-${startMonth}-${year} - ${endDay}-${endMonth}-${year}`
  }

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 border border-gray-100 w-full">
      {/* Logo and Title Section */}
      <div className="flex items-start gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={show.logo}
              alt={`${show.title} logo`}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 leading-tight">
            <Link href={`/trade-shows/${show.slug}`} className="hover:text-[#A5CD39] transition-colors duration-300 block">
              {show.title}
            </Link>
          </h3>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2 sm:gap-3 text-[#A5CD39] text-sm sm:text-base font-medium mb-3 sm:mb-4">
        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
        <span className="truncate">{show.location}</span>
      </div>

      {/* Date Range */}
      <div className="flex items-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#A5CD39] flex-shrink-0" />
        <span className="text-xs sm:text-sm lg:text-base">{formatDateRange(show.startDate, show.endDate)}</span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <button 
          onClick={openQuoteModal}
          className="flex-1 bg-slate-800 hover:bg-slate-700 text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 text-xs sm:text-sm flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
          Get A Quote
        </button>
        <Link
          href={`/trade-shows/${show.slug}`}
          className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 text-xs sm:text-sm text-center flex items-center justify-center gap-2"
        >
          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
          View Fair Detail
        </Link>
      </div>
    </div>
  )
}