import { pavilionData } from "@/data/pavilionData"

export default function CompanyInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          {pavilionData.companyInfo.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-gray-700 font-medium">{pavilionData.companyInfo.description}</p>
        </div>
      </div>
    </section>
  )
}