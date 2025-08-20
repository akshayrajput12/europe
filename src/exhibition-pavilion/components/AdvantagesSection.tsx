import { pavilionData } from "@/data/pavilionData"
import Image from "next/image"

export default function AdvantagesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{pavilionData.advantages.title}</h2>
            <div className="space-y-6">
              {pavilionData.advantages.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{advantage.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image
              src={pavilionData.advantages.image || "/placeholder.svg"}
              alt="Custom Exhibition Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}