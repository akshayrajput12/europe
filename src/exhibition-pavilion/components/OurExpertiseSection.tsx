import { pavilionData } from "@/data/pavilionData"

export default function OurExpertiseSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{pavilionData.ourExpertise.title}</h2>
        <div className="space-y-6">
          {pavilionData.ourExpertise.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}