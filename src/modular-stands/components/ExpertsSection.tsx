import { expertsSection } from "@/data/modular-stands"

export default function ExpertsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
          EXPERTS IN <span style={{ color: "#A5CD39" }}>PROVIDING</span> MODULAR BOOTHS
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{expertsSection.description}</p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">{expertsSection.additionalText}</p>
        </div>
      </div>
    </section>
  )
}
