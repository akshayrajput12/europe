import { doubleDeckBenefitsData } from "../../data/double-decker-stands"
import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">{doubleDeckBenefitsData.title}</h2>
            <ul className="space-y-4">
              {doubleDeckBenefitsData.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#A5CD39" }}></div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:order-last">
            <Image
              src={doubleDeckBenefitsData.image || "/placeholder.svg"}
              alt="Double Decker Exhibition Stand"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
