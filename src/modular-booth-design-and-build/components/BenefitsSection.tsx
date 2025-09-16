"use client"

import Image from "next/image"
import type { ModularBenefitsSection } from "@/data/modular-stands"

interface BenefitsSectionProps {
  benefitsData: ModularBenefitsSection
}

export default function BenefitsSection({ benefitsData }: BenefitsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">{benefitsData.title}</h2>
            <div 
              className="rich-content"
              dangerouslySetInnerHTML={{ __html: benefitsData.content }}
            />
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={benefitsData.image || "/placeholder.svg"}
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
