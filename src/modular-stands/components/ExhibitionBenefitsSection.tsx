import Image from "next/image"
import { exhibitionBenefits } from "@/data/modular-stands"

export default function ExhibitionBenefitsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
              {exhibitionBenefits.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {exhibitionBenefits.subtitle}
            </p>
            <ul className="space-y-4">
              {exhibitionBenefits.items.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A5CD39] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Section */}
          <div className="order-first lg:order-last group">
            <Image
              src={exhibitionBenefits.image || "/placeholder.svg"}
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
