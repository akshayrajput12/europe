import { Button } from "@/components/ui/button"
import { customStandsData } from "@/data/custom-stands"

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${customStandsData.hero.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{customStandsData.hero.title}</h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-primary">
          {customStandsData.hero.subtitle}
        </h2>
        <p className="text-base md:text-lg max-w-4xl mx-auto mb-8 leading-relaxed">
          {customStandsData.hero.description}
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
    </section>
  )
}
