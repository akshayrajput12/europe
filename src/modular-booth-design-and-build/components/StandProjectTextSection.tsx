import type { StandProjectText } from "@/data/modular-stands"

interface StandProjectTextProps {
  standProjectTextData: StandProjectText
}

export default function StandProjectText({ standProjectTextData }: StandProjectTextProps) {
  return (
    <section className="py-12 md:py-16 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Title (optional) */}
          {standProjectTextData.title && (
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {standProjectTextData.title}{" "}
              {standProjectTextData.highlight && (
                <span className="text-[#A5CD39]">{standProjectTextData.highlight}</span>
              )}
            </h2>
          )}

          {/* Description with HTML content */}
          {standProjectTextData.description && (
            <div 
              className="text-white max-w-4xl mx-auto leading-relaxed text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: standProjectTextData.description }}
            />
          )}
        </div>
      </div>
    </section>
  )
}