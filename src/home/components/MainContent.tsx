import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getCountryCards } from "@/data/countries"

interface MainSection {
  title: string
  subtitle: string
  htmlContent: string
}

interface MainContentProps {
  mainSectionData: MainSection
}

export default async function MainContent({ mainSectionData }: MainContentProps) {
  // Get country cards for home page display
  const featuredCountries = await getCountryCards()

  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      {/* Title Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
          {mainSectionData.title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {mainSectionData.subtitle.split(" ").map((word, index) =>
            word === "EUROPE" ? (
              <span key={index} className="text-[#A5CD39]">
                {word}
              </span>
            ) : (
              <span key={index} className="text-slate-800">
                {word}{" "}
              </span>
            ),
          )}
        </h2>
        <div 
          className="rich-content text-gray-600 max-w-4xl mx-auto mb-8 text-base md:text-lg leading-relaxed px-4 md:px-0"
          dangerouslySetInnerHTML={{ __html: mainSectionData.htmlContent }}
        />
      </div>

      {/* Countries Grid - Only Featured Countries */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {featuredCountries.map((country) => (
            <Link
              key={country.slug}
              href={`/${country.slug}`}
              className="bg-gray-50 hover:bg-white p-6 md:p-8 text-center rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer group border border-gray-100"
            >
              <h3 className="font-medium text-lg md:text-xl text-gray-800 group-hover:text-[#A5CD39] transition-colors duration-300">
                {country.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/major-exhibiting-country">
            <Button 
              size="lg"
              className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
            >
              Load More
            </Button>
          </Link>
        </div>
      </div>
    </main>
  ) 
}