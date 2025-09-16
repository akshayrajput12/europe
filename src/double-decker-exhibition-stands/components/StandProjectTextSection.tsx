import type { StandProjectText } from "@/data/double-decker-stands"

interface StandProjectTextSectionProps {
  standProjectTextData: StandProjectText
}

export default function StandProjectTextSection({ standProjectTextData }: StandProjectTextSectionProps) {
  const { title, highlight, description } = standProjectTextData

  return (
    <section className="py-12 md:py-16 bg-secondary  text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          {/* Title (optional) */}
          {title && (
            <h2 className="text-2xl md:text-4xl font-bold mb-6">
              {title}{" "}
              {highlight && (
                <span className="text-[#A5CD39]">{highlight}</span>
              )}
            </h2>
          )}

          {/* Description */}
          {description && (
            <div 
              className="text-white max-w-4xl mx-auto leading-relaxed text-base md:text-lg "
              dangerouslySetInnerHTML={{ __html: description }}
            />
          )}
        </div>

      </div>
    </section>
  )
}