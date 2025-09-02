import Image from "next/image"
import type { AdvantagesData } from "@/data/pavilionData"

interface AdvantagesSectionProps {
  advantagesData: AdvantagesData
}

export default function AdvantagesSection({ advantagesData }: AdvantagesSectionProps) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{advantagesData.title}</h2>
            <div 
              className="rich-content space-y-6 text-gray-700"
              dangerouslySetInnerHTML={{ __html: advantagesData.content }}
            />
          </div>
          <div className="relative group">
            <Image
              src={advantagesData.image || "/placeholder.svg"}
              alt="Custom Exhibition Solutions"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}