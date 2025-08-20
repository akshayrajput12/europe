import Image from "next/image"
import { Button } from "@/components/ui/button"
import { modularStandsHero } from "@/data/modular-stands"

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={modularStandsHero.backgroundImage || "/placeholder.svg"}
          alt="Modular Exhibition Stands"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            {modularStandsHero.title}
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold" style={{ color: "#A5CD39" }}>
            {modularStandsHero.subtitle}
          </h2>
          <p className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            {modularStandsHero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            
            <Button
              size="lg"
              className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white transition-all duration-300"
            >
              REQUEST FOR QUOTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
