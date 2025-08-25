"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { TradeShow, TRADE_SHOW_HERO_IMAGE } from "@/data/trade-shows"

interface TradeShowDetailHeroProps {
  show: TradeShow
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function TradeShowDetailHero({ show }: TradeShowDetailHeroProps) {
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

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={TRADE_SHOW_HERO_IMAGE}
            alt={show.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col">
          {/* Hero Title */}
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 leading-tight tracking-wide">
                {show.title.toUpperCase()}
              </h1>
            </div>
          </div>
          
          {/* Countdown Timer and Join Button - Positioned at bottom of hero */}
          <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 bg-transparent">
            {/* Timer Section - Purple/Pink Gradient */}
            <div className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-600 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6">
              <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
                  {/* Days */}
                  <div className="text-center">
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white leading-none">
                      {timeLeft.days.toString().padStart(3, '0')}
                    </div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 uppercase tracking-wider font-medium mt-0.5 sm:mt-1">
                      DAYS
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="text-center">
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white leading-none">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 uppercase tracking-wider font-medium mt-0.5 sm:mt-1">
                      HRS
                    </div>
                  </div>

                  {/* Minutes */}
                  <div className="text-center">
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white leading-none">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 uppercase tracking-wider font-medium mt-0.5 sm:mt-1">
                      MIN
                    </div>
                  </div>

                  {/* Seconds */}
                  <div className="text-center">
                    <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white leading-none">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-xs md:text-sm lg:text-base text-white/90 uppercase tracking-wider font-medium mt-0.5 sm:mt-1">
                      SEC
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Join Button Section - Orange */}
            <div className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:bg-gray-500 transition-colors duration-300 py-2 sm:py-3 md:py-4 lg:py-5 xl:py-6 cursor-pointer">
              <div className="h-full flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="group flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 text-white">
                  <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">+</div>
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold uppercase tracking-wider group-hover:scale-105 transition-transform duration-300">
                    <span className="hidden sm:inline">JOIN THE EVENT</span>
                    <span className="sm:hidden">JOIN EVENT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}