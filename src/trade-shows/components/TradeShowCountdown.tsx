"use client"

import { TradeShow } from "@/data/trade-shows"
import { Calendar, MapPin } from "lucide-react"

interface TradeShowCountdownProps {
  show: TradeShow
}

export default function TradeShowCountdown({ show }: TradeShowCountdownProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <>
      {/* Event Details */}
      <section className="bg-slate-700 py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            {/* Date */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-lg rotate-45 flex items-center justify-center">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white -rotate-45" />
              </div>
              <div className="text-white">
                <div className="text-sm sm:text-base font-medium">
                  {formatDate(show.startDate)} - {formatDate(show.endDate)}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg rotate-45 flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white -rotate-45" />
              </div>
              <div className="text-white">
                <div className="text-sm sm:text-base font-medium">
                  {show.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}