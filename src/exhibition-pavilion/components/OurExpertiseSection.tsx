import type { OurExpertiseData } from "@/data/pavilionData"

interface OurExpertiseSectionProps {
  ourExpertiseData: OurExpertiseData
}

export default function OurExpertiseSection({ ourExpertiseData }: OurExpertiseSectionProps) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{ourExpertiseData.title}</h2>
        <div 
          className="rich-content space-y-6 text-gray-700 text-center max-w-4xl mx-auto"
          dangerouslySetInnerHTML={{ __html: ourExpertiseData.content }}
        />
      </div>
    </section>
  )
}