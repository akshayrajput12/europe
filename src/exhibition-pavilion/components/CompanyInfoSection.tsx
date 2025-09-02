import type { CompanyInfoData } from "@/data/pavilionData"

interface CompanyInfoSectionProps {
  companyInfoData: CompanyInfoData
}

export default function CompanyInfoSection({ companyInfoData }: CompanyInfoSectionProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{companyInfoData.title}</h2>
        <div 
          className="rich-content max-w-4xl mx-auto space-y-4 text-gray-700"
          dangerouslySetInnerHTML={{ __html: companyInfoData.content }}
        />
      </div>
    </section>
  )
}