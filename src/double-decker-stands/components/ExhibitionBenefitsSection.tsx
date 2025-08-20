import Image from "next/image"
import { exhibitionBenefitsData } from "@/data/double-decker-stands"

export default function DoubleDeckBenefitsSection() {
  const { title, subtitle, items, image } = exhibitionBenefitsData

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
            <ul className="space-y-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A5CD39] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="order-first lg:order-last">
            <Image
              src={image || "/placeholder.svg"}
              alt="Exhibition Stand Benefits"
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
