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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-wide">
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

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 text-center">
            <div className="bg-gray-50 p-6 rounded-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#A5CD39] mb-2">
                {data.stats.projects.toLocaleString()}+
              </div>
              <div className="text-slate-600 font-medium text-sm">
                COMPLETED PROJECTS
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#A5CD39] mb-2">
                {data.stats.years}+
              </div>
              <div className="text-slate-600 font-medium text-sm">
                YEARS OF EXPERIENCE
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-sm">
              <div className="text-3xl md:text-4xl font-bold text-[#A5CD39] mb-2">
                {data.stats.tradeshows.toLocaleString()}+
              </div>
              <div className="text-slate-600 font-medium text-sm">
                TRADE SHOWS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}