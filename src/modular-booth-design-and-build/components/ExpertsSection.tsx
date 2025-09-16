"use client"

import type { ExpertsSection } from "@/data/modular-stands"

interface ExpertsSectionProps {
  expertsData: ExpertsSection
}

export default function ExpertsSection({ expertsData }: ExpertsSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
          {expertsData.title}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-8" style={{ color: "#A5CD39" }}>
          {expertsData.subtitle}
        </h3>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{expertsData.description}</p>
        </div>
      </div>
    </section>
  )
}
