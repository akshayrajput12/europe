import Image from "next/image"
import type { BenefitsSection } from "@/data/double-decker-stands"

interface BenefitsSectionProps {
  benefitsData: BenefitsSection
}

export default function BenefitsSection({ benefitsData }: BenefitsSectionProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">{benefitsData.title}</h2>
            <div 
              className="rich-content space-y-4"
              dangerouslySetInnerHTML={{ __html: benefitsData.content }}
            />
          </div>
          <div className="lg:order-last">
            <div className="relative w-full h-80 lg:h-96">
              <Image
                src={benefitsData.image || "/placeholder.svg"}
                alt="Double Decker Exhibition Stand"
                fill
                className="object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}