import Image from "next/image"
import type { ExhibitionBenefits } from "@/data/double-decker-stands"

interface ExhibitionBenefitsSectionProps {
  exhibitionBenefitsData: ExhibitionBenefits
}

export default function DoubleDeckBenefitsSection({ exhibitionBenefitsData }: ExhibitionBenefitsSectionProps) {
  const { title, subtitle, content, image } = exhibitionBenefitsData

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">
              {title}
            </h2>
            <p className="text-gray-600 mb-6">{subtitle}</p>
            <div 
              className="rich-content space-y-4"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          {/* Image Section */}
          <div className="order-first lg:order-last group">
            <Image
              src={image || "/placeholder.svg"}
              alt="Exhibition Stand Benefits"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}