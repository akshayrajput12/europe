import { modularDiversitySection } from "@/data/modular-stands"

export default function ModularDiversitySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
            MODULAR <span style={{ color: "#A5CD39" }}>DIVERSITY</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {modularDiversitySection.points.map((point, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#A5CD39" }} />
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
