import { pavilionData } from "@/data/pavilionData"

export default function CompanyInfoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
          {pavilionData.companyInfo.title}
        </h2>
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {pavilionData.companyInfo.points.map((point, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-[#A5CD39] rounded-full mt-2 flex-shrink-0 mr-4"></div>
                <p className="text-gray-700">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}