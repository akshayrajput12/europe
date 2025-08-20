import { pavilionData } from "@/data/pavilionData"

export default function WhyChooseSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{pavilionData.whyChoose.title}</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {pavilionData.whyChoose.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}