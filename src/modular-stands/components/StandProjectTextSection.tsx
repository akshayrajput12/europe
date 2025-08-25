import { modularStandsData } from "@/data/modular-stands"

export default function StandProjectTextSection() {
  const { StandProjectText } = modularStandsData

  return (
    <section className="py-12 md:py-16 bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Title (optional) */}
          {StandProjectText.title && (
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {StandProjectText.title}{" "}
              {StandProjectText.highlight && (
                <span className="text-[#A5CD39]">{StandProjectText.highlight}</span>
              )}
            </h2>
          )}

          {/* Description */}
          {StandProjectText.description && (
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-base md:text-lg">
              {StandProjectText.description}
            </p>
          )}
        </div>

      </div>
    </section>
  )
}