import { 
  getCityByCountryAndSlug, 
  getAvailableCities, 
  isCityAvailable 
} from "@/data/cities"
import { notFound } from 'next/navigation'
import SolutionCardsSection from "@/home/components/SolutionCardsSection"
import PortfolioSection from "@/components/PortfolioSection"

// Import specialized city components
import CityHeroSection from "../../../../cities/components/CityHeroSection"
import CityWhyChooseUsSection from "../../../../cities/components/CityWhyChooseUsSection"
import CityWhatWeDoSection from "../../../../cities/components/CityWhatWeDoSection"
import TradeShowsCarouselSection from "../../../../cities/components/TradeShowsCarouselSection"
import ExhibitingExperienceSection from "../../../../cities/components/ExhibitingExperienceSection"

interface CityDetailPageProps {
  params: Promise<{
    country: string
    city: string
  }>
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { country, city } = await params
  const countrySlug = country.toLowerCase()
  const citySlug = city.toLowerCase()
  
  // Check if city is available in the specified country
  if (!isCityAvailable(countrySlug, citySlug)) {
    notFound()
  }

  // Get city-specific data
  const cityData = getCityByCountryAndSlug(countrySlug, citySlug)
  
  // This should not happen since we checked availability above, but for TypeScript safety
  if (!cityData) {
    notFound()
  }

  return (
    <main>
      <CityHeroSection data={cityData.hero} />
      <CityWhyChooseUsSection data={cityData.whyChooseUs} />
      <CityWhatWeDoSection data={cityData.whatWeDo} />
      <SolutionCardsSection />
      <PortfolioSection title={`Our Portfolio in ${cityData.name}`} subtitle="View our exhibition stand projects" />
      <ExhibitingExperienceSection data={cityData.exhibitingExperience} />
      <TradeShowsCarouselSection cityName={cityData.name} />
    </main>
  )
}

// Generate static params for available cities
export async function generateStaticParams() {
  const availableCities = getAvailableCities()
  return availableCities.map((city) => ({
    country: city.countrySlug,
    city: city.citySlug,
  }))
}