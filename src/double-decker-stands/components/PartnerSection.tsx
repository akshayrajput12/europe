import { doubleDeckPartnerData } from "../../data/double-decker-stands"

export default function PartnerSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#A5CD39" }}>
          {doubleDeckPartnerData.title}
        </h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">{doubleDeckPartnerData.subtitle}</h3>
        <p className="text-gray-700 leading-relaxed text-lg">{doubleDeckPartnerData.description}</p>
      </div>
    </section>
  )
}
