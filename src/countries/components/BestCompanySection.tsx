import { BestCompany as BestCompanyType } from "@/data/countries"

interface BestCompanySectionProps {
  data: BestCompanyType
}

export default function BestCompanySection({ data }: BestCompanySectionProps) {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
            {data.title}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#A5CD39] mb-8">
            {data.subtitle}
          </h3>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-slate-700 leading-relaxed text-justify mb-12">
            {data.content.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}