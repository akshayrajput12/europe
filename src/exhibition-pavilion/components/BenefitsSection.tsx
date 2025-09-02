import Image from "next/image"
import type { BenefitsData } from "@/data/pavilionData"

interface BenefitsSectionProps {
  benefitsData: BenefitsData
}

export default function BenefitsSection({ benefitsData }: BenefitsSectionProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">{benefitsData.title}</h2>
            <div 
              className="rich-content space-y-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: benefitsData.content }}
            />
          </div>
          <div className="relative group">
            <Image
              src={benefitsData.image || "/placeholder.svg"}
              alt="Exhibition Pavilion Benefits"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}