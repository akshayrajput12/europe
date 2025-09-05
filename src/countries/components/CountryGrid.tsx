import { getCountryCards } from "@/data/countries"
import CountryCard from "./CountryCard"

export default async function CountryGrid() {
  const countries = await getCountryCards()

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            FEATURED COUNTRIES
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
            Discover our premium exhibition stand services across Europe&apos;s major trade show destinations.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {countries.map((country) => (
            <CountryCard key={country.slug} country={country} />
          ))}
        </div>
      </div>
    </section>
  )
}