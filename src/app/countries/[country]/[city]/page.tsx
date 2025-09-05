import { notFound } from 'next/navigation'
import SolutionCardsSection from "@/home/components/SolutionCardsSection"
import PortfolioSection from "@/components/PortfolioSection"
import { getHomeSectionData } from "@/data/home"
import { Solutions } from "@/data/home"

// Import specialized city components
import CityHeroSection from "../../../../cities/components/CityHeroSection"
import CityWhyChooseUsSection from "../../../../cities/components/CityWhyChooseUsSection"
import CityWhatWeDoSection from "../../../../cities/components/CityWhatWeDoSection"
import TradeShowsCarouselSection from "../../../../cities/components/TradeShowsCarouselSection"
import ExhibitingExperienceSection from "../../../../cities/components/ExhibitingExperienceSection"

// Import new database functions
import { getCityByCountryAndSlugFromDB as getCityByCountryAndSlug, getAvailableCitiesFromDB as getAvailableCities, isCityAvailableFromDB as isCityAvailable, generateCityMetadata } from '@/data/cities'
import { Metadata } from 'next'

interface CityDetailPageProps {
  params: Promise<{
    country: string
    city: string
  }>
}

// Generate metadata for SEO with full SSR
export async function generateMetadata({ params }: { params: Promise<{ country: string; city: string }> }): Promise<Metadata> {
  const { country, city } = await params
  const countrySlug = country.toLowerCase()
  const citySlug = city.toLowerCase()
  
  // Generate complete SEO metadata
  const metadata = await generateCityMetadata(countrySlug, citySlug)
  return metadata
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { country, city } = await params
  const countrySlug = country.toLowerCase()
  const citySlug = city.toLowerCase()
  
  // Check if city is available in the specified country
  const cityIsAvailable = await isCityAvailable(countrySlug, citySlug)
  if (!cityIsAvailable) {
    notFound()
  }

  // Get city-specific data from database
  const cityData = await getCityByCountryAndSlug(countrySlug, citySlug)
  
  // This should not happen since we checked availability above, but for TypeScript safety
  if (!cityData) {
    notFound()
  }

  // Fetch solutions data dynamically
  const solutionsData = await getHomeSectionData('solutions') as Solutions;

  return (
    <main>
      <CityHeroSection data={cityData.hero} />
      <CityWhyChooseUsSection data={cityData.whyChooseUs} />
      <CityWhatWeDoSection data={cityData.whatWeDo} />
      <SolutionCardsSection solutionsData={solutionsData} />
      <PortfolioSection title={`Our Portfolio in ${cityData.name}`} subtitle="View our exhibition stand projects" />
      <ExhibitingExperienceSection data={cityData.exhibitingExperience} />
      <TradeShowsCarouselSection cityName={cityData.name} />
    </main>
  )
}

// Generate static params for available cities - for ISR
export async function generateStaticParams() {
  const availableCities = await getAvailableCities()
  return availableCities.map((city) => ({
    country: city.countrySlug,
    city: city.citySlug,
  }))
}

// ISR Configuration - Revalidate every 30 days
export const revalidate = 2592000; // 30 days in seconds