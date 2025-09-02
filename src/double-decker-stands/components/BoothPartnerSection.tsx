import type { BoothPartnerData } from "@/data/double-decker-stands"

interface BoothPartnerSectionProps {
  boothPartnerData: BoothPartnerData
}

export default function BoothPartnerSection({ boothPartnerData }: BoothPartnerSectionProps) {
  const { title, subtitle, description } = boothPartnerData

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
          {title}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">
          <span className="text-gray-900">YOUR IDEAL </span>
          <span style={{ color: "#A5CD39" }}>
            DOUBLE DECK BOOTH PARTNER
          </span>
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
      </div>
    </section>
  )
}