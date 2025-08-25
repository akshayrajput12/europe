import { CompanyInfo as CompanyInfoType } from "@/data/countries"

interface CompanyInfoSectionProps {
  data: CompanyInfoType
}

export default function CompanyInfoSection({ data }: CompanyInfoSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            {data.title}
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6 text-slate-700 leading-relaxed text-justify">
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