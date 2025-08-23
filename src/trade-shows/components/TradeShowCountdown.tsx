"use client"

import { useState, useEffect } from "react"
import { TradeShow } from "@/data/trade-shows"
import { Calendar, MapPin } from "lucide-react"

interface TradeShowCountdownProps {
  show: TradeShow
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function TradeShowCountdown({ show }: TradeShowCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(show.startDate)
      const now = new Date()
      const difference = eventDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
        const minutes = Math.floor((difference / 1000 / 60) % 60)
        const seconds = Math.floor((difference / 1000) % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [show.startDate])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", { 
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  return (
    <>
      {/* Countdown Timer */}
      <section className="bg-gradient-to-r from-pink-500 to-orange-500 py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
            {/* Left side - Countdown */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
              {/* Days */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-none">
                  {timeLeft.days.toString().padStart(3, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
                  DAYS
                </div>
              </div>

              {/* Hours */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-none">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
                  HRS
                </div>
              </div>

              {/* Minutes */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-none">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
                  MIN
                </div>
              </div>

              {/* Seconds */}
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white leading-none">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm text-white/90 uppercase tracking-wider font-medium">
                  SEC
                </div>
              </div>
            </div>

            {/* Right side - Join the Event */}
            <div className="flex lg:hidden items-center bg-orange-600 px-4 sm:px-6 py-3 sm:py-4 rounded-md">
              <div className="text-white font-bold text-sm sm:text-base uppercase tracking-wide">
                + JOIN THE EVENT
              </div>
            </div>
            <div className="hidden lg:flex items-center bg-orange-600 px-6 xl:px-8 py-4 xl:py-6">
              <div className="text-white font-bold text-lg xl:text-xl 2xl:text-2xl uppercase tracking-wide">
                + JOIN THE EVENT
              </div>
            </div>
          </div>
        </div>
      </section>

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