import Link from "next/link";
import { mainCountriesData } from "@/data/maincountries";

export default function CountryButtonsGrid() {
  // Get countries from the data file
  const { countries } = mainCountriesData;
  
  return (
    <section className="bg-white py-6 md:py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto mb-4">
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-3">
            {countries.map((country, index) => (
              <Link
                key={index}
                href={`/countries/${country.slug.toLowerCase()}`}
                className="bg-gray-50 hover:bg-white p-3 md:p-4 text-center rounded-md transition-all duration-300 hover:shadow-md cursor-pointer group border border-gray-100"
              >
                <h3 className="font-medium text-sm md:text-base text-gray-800 group-hover:text-[#A5CD39] transition-colors duration-300">
                  {country.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}