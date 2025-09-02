"use client"

import { getModularStandsData } from "@/data/modular-stands"
import type { ModularDiversitySection } from "@/data/modular-stands"

interface ModularDiversitySectionProps {
  modularDiversityData: ModularDiversitySection
}

export default function ModularDiversitySection({ modularDiversityData }: ModularDiversitySectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {modularDiversityData.title}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-8" style={{ color: "#A5CD39" }}>
          {modularDiversityData.subtitle}
        </h3>

        <div 
          className="rich-content max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: modularDiversityData.content }}
        />
      </div>
    </section>
  )
}
