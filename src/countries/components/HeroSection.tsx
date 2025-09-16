"use client"

import { CountryHero } from "@/data/countries"
import { useQuoteModal } from "@/contexts/QuoteModalContext"

interface HeroSectionProps {
  data: CountryHero
  countryName?: string
}

export default function HeroSection({ data, countryName }: HeroSectionProps) {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${data.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4">
          {data.title}
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#A5CD39]">
          {countryName || data.subtitle}
        </h2>
        <div className="mt-6 sm:mt-8">
          <button 
            onClick={openQuoteModal}
            className="bg-[#A5CD39] hover:bg-[#8fb52f] text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-sm transition-colors text-sm sm:text-base"
          >
            {data.subtitle}
          </button>
        </div>
      </div>
    </section>
  )
}