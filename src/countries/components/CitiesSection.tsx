import { CitiesSection as CitiesSectionType } from "@/data/countries"
import Link from "next/link"

interface CitiesSectionProps {
  data: CitiesSectionType
}

export default function CitiesSection({ data }: CitiesSectionProps) {
  return (
    <section className="bg-accent py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            {data.title} <span className="text-[#A5CD39]">{data.subtitle}</span>
          </h2>
        </div>

        {/* Cities Grid */}
        <div className=" max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {data.cities.map((city, index) => (
              <Link
                key={index}
                href={city.link}
                className="bg-white text-center p-4 hover:bg-gray-50 rounded-sm transition-colors group"
              >
                <div className="text-slate-700 font-medium text-sm group-hover:text-[#A5CD39] transition-colors">
                  {city.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}