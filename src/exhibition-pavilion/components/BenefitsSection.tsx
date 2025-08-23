import { pavilionData } from "@/data/pavilionData"
import Image from "next/image"

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-slate-900">{pavilionData.benefits.title}</h2>
            <ul className="space-y-4">
              {pavilionData.benefits.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <Image
              src={pavilionData.benefits.image || "/placeholder.svg"}
              alt="Exhibition Pavilion Benefits"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}