import Image from "next/image"
import type { BenefitsSection } from "@/data/custom-stands"

interface BenefitsSectionProps {
  benefitsData: BenefitsSection
}

export default function BenefitsSection({ benefitsData }: BenefitsSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">{benefitsData.title}</h2>
            <div 
              className="rich-content space-y-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: benefitsData.content }}
            />
          </div>
          <div className="order-first lg:order-last">
            <Image
              src={benefitsData.image || "/placeholder.svg"}
              alt={benefitsData.imageAlt || "Custom Exhibition Stand Benefits"}
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}