import { ProcessSection as ProcessSectionType } from "@/data/countries"

interface ProcessSectionProps {
  data: ProcessSectionType
}

export default function ProcessSection({ data }: ProcessSectionProps) {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            {data.title}
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-[#A5CD39]">
            {data.subtitle}
          </h3>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {data.steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 bg-[#A5CD39] rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
              
              {/* Content */}
              <h4 className="text-lg font-bold text-slate-800 mb-2">
                {step.title}
              </h4>
              <h5 className="text-sm font-semibold text-[#A5CD39] mb-3">
                {step.subtitle}
              </h5>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}