import { Button } from "@/components/ui/button"
import { pavilionData } from "@/data/pavilionData"

export default function HeroSection() {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center bg-slate-800"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${pavilionData.hero.backgroundImage}')`,
      }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-2">{pavilionData.hero.title.main}</h1>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">{pavilionData.hero.title.highlight}</h2>
          <Button size="lg" className="bg-primary hover:bg-primary text-white px-8 py-3">
            {pavilionData.hero.ctaButton}
          </Button>
        </div>
      </div>
    </section>
  )
}