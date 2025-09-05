import { CitiesSection as CitiesSectionType } from "@/data/countries"
import { getCitiesByCountryFromDB, getSelectedCitiesForCountry } from "@/data/countries"
import Link from "next/link"

interface CitiesSectionProps {
  data: CitiesSectionType
  countrySlug: string
}

interface City {
  id: number;
  name: string;
  country_slug: string;
  city_slug: string;
}

export default async function CitiesSection({ data, countrySlug }: CitiesSectionProps) {
  // Get selected cities for this country
  const selectedCitySlugs = await getSelectedCitiesForCountry(countrySlug)
  
  // If no cities are selected, don't show the section
  if (selectedCitySlugs.length === 0) {
    return null
  }
  
  // Get only the cities that are selected and exist in database
  const allCitiesInCountry = await getCitiesByCountryFromDB(countrySlug)
  
  // Filter to only show selected cities
  const availableCities = allCitiesInCountry.filter(city => 
    selectedCitySlugs.includes(city.city_slug)
  )
  
  // If no selected cities exist in database, don't show the section
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {availableCities.map((city: City) => (
              <Link
                key={city.id}
                href={`/countries/${city.country_slug}/${city.city_slug}`}
                className="bg-white text-center p-4 hover:bg-gray-50 rounded-sm transition-colors group"
              >
                <div className="text-slate-700 font-medium text-sm group-hover:text-[#A5CD39] transition-colors truncate">
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