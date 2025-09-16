import type { BespokeSection } from "@/data/custom-stands"

interface BespokeSectionProps {
  bespokeData: BespokeSection
}

export default function BespokeSection({ bespokeData }: BespokeSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2">{bespokeData.title}</h2>
        <h3 className="text-xl md:text-3xl font-bold mb-6 text-[#A5CD39]">{bespokeData.subtitle}</h3>
        <div 
          className="text-gray-700 max-w-4xl mx-auto leading-relaxed text-sm md:text-base"
          dangerouslySetInnerHTML={{ __html: bespokeData.description }}
        />
      </div>
    </section>
  )
}