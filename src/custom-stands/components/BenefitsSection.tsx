import Image from "next/image"
import { customStandsData } from "@/data/custom-stands"

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">{customStandsData.benefits.title}</h2>
            <ul className="space-y-4">
              {customStandsData.benefits.items.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#A5CD39] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-first lg:order-last">
            <Image
              src={customStandsData.benefits.image || "/placeholder.svg"}
              alt="Custom Exhibition Stand Benefits"
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
