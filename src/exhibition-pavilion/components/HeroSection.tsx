"use client"

import { Button } from "@/components/ui/button"
import { pavilionData } from "@/data/pavilionData"
import { useQuoteModal } from "@/contexts/QuoteModalContext"

export default function HeroSection() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${pavilionData.hero.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{pavilionData.hero.title}</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          {pavilionData.hero.subtitle}
        </h2>
        <p className="text-base md:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
          {pavilionData.hero.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={openQuoteModal}
            className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
          >
            REQUEST FOR QUOTATION
          </Button>
        </div>
      </div>
    </section>
  )
}