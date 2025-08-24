import Link from "next/link"
import { CountryCard as CountryCardType } from "@/data/countries"

interface CountryCardProps {
  country: CountryCardType
}

export default function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      href={`/countries/${country.slug}`}
      className="bg-gray-50 hover:bg-white p-6 md:p-8 text-center rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer group border border-gray-100"
    >
      <h3 className="font-medium text-lg md:text-xl text-gray-800 group-hover:text-[#A5CD39] transition-colors duration-300">
        {country.name}
      </h3>
    </Link>
  )
}