import Image from "next/image"
import { modularBenefitsSection } from "@/data/modular-stands"

export default function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{modularBenefitsSection.title}</h2>
            <div className="space-y-4">
              {modularBenefitsSection.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#A5CD39" }} />
                  <p className="text-gray-700 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={modularBenefitsSection.image || "/placeholder.svg"}
                alt="Modular Exhibition Stand Benefits"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
