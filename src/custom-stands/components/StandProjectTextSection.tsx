import type { StandProjectText } from "@/data/custom-stands"

interface StandProjectTextSectionProps {
  standProjectTextData: StandProjectText
}

export default function ProjectsSection({ standProjectTextData }: StandProjectTextSectionProps) {
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

          {/* Subtitle (optional) */}
          {/* {standProjectTextData.highlight && (
            <p className="text-lg md:text-xl font-medium mb-4 text-gray-200">
              {standProjectTextData.highlight}
            </p>
          )} */}

          {/* Description */}
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