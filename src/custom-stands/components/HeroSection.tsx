"use client"

import { Button } from "@/components/ui/button"
import { useQuoteModal } from "@/contexts/QuoteModalContext"
import type { HeroSection } from "@/data/custom-stands"
import { CUSTOM_STANDS_HERO_BG_IMAGE, CUSTOM_STANDS_HERO_BG_IMAGE_ALT } from "@/data/custom-stands"
import Image from "next/image"

interface HeroSectionProps {
  heroData: HeroSection
}

export default function HeroSection({ heroData }: HeroSectionProps) {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${CUSTOM_STANDS_HERO_BG_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hidden image for accessibility */}
      <Image 
        src={CUSTOM_STANDS_HERO_BG_IMAGE} 
        alt={heroData.backgroundImageAlt || CUSTOM_STANDS_HERO_BG_IMAGE_ALT || heroData.title} 
        className="hidden"
        width={1920}
        height={1080}
      />
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{heroData.title}</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          {heroData.subtitle}
        </h2>
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