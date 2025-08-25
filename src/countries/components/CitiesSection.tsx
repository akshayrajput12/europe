import { CitiesSection as CitiesSectionType } from "@/data/countries"
import { getCitiesByCountry } from "@/data/cities"
import Link from "next/link"

interface CitiesSectionProps {
  data: CitiesSectionType
  countrySlug: string
}

export default function CitiesSection({ data, countrySlug }: CitiesSectionProps) {
  // Get only cities that have been created (exist in cities.ts)
  const availableCities = getCitiesByCountry(countrySlug)
  
  // If no cities have been created yet, don't show the section
  if (availableCities.length === 0) {
    return null
  }

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
            {availableCities.map((city) => (
              <Link
                key={city.id}
                href={`/countries/${city.countrySlug}/${city.slug}`}
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