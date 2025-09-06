"use client"

import Image from "next/image"
import Link from "next/link"
import { TradeShow } from "@/data/trade-shows"
import { MapPin, Calendar, Eye } from "lucide-react"

interface TradeShowCardProps {
  show: TradeShow
}

export default function TradeShowCard({ show }: TradeShowCardProps) {
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
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 lg:p-8 border border-gray-100 w-full relative mt-8 sm:mt-10">
      {/* Logo positioned half outside/half inside */}
      <div className="absolute -top-8 sm:-top-10 left-4 sm:left-6 lg:left-8">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border-2 border-white bg-white">
          <Image
            src={show.logo}
            alt={`${show.title} logo`}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title Section with left margin to account for logo */}
      <div className="ml-20 sm:ml-24 pt-2">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
          <Link href={`/top-trade-shows-in-europe/${show.slug}`} className="hover:text-[#A5CD39] transition-colors duration-300 block">
            {show.title}
          </Link>
        </h3>
      </div>

      {/* Location and Date - Centered */}
      <div className="text-center space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {/* Location */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-[#A5CD39] text-sm sm:text-base font-medium">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span>{show.location}</span>
        </div>

        {/* Date Range */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-gray-600 text-sm sm:text-base">
          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#A5CD39] flex-shrink-0" />
          <span className="text-xs sm:text-sm lg:text-base">{formatDateRange(show.startDate, show.endDate)}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <Link
          href={`/top-trade-shows-in-europe/${show.slug}`}
          className="flex-1 bg-[#A5CD39] hover:bg-[#8fb32e] text-white font-medium py-2.5 sm:py-3 px-4 sm:px-6 rounded-full transition-colors duration-300 text-xs sm:text-sm text-center flex items-center justify-center gap-2"
        >
          <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
          View Fair Detail
        </Link>
      </div>
    </div>
  )
}