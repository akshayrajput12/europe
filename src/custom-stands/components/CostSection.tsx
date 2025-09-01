import type { CostSection } from "@/data/custom-stands"

interface CostSectionProps {
  costSectionData: CostSection
}

export default function CostSection({ costSectionData }: CostSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{costSectionData.title}</h2>
        <h3 className="text-xl md:text-3xl font-bold mb-6 text-[#A5CD39]">{costSectionData.subtitle}</h3>
        <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm md:text-base">
          {costSectionData.description}
        </p>
      </div>
    </section>
  )
}