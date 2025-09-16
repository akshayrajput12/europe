import { notFound } from 'next/navigation'
import SolutionCardsSection from "@/home/components/SolutionCardsSection"
import PortfolioSection from "@/components/PortfolioSection"
import { getHomeSectionData } from "@/data/home"
import { Solutions } from "@/data/home"
import { Metadata } from 'next'

// Import country components and functions
import HeroSection from "@/countries/components/HeroSection"
import WhyChooseUsSection from "@/countries/components/WhyChooseUsSection"
import WhatWeDoSection from "@/countries/components/WhatWeDoSection"
import CompanyInfoSection from "@/countries/components/CompanyInfoSection"
import BestCompanySection from "@/countries/components/BestCompanySection"
import ProcessSection from "@/countries/components/ProcessSection"
import CitiesSection from "@/countries/components/CitiesSection"

// Import city components
import CityHeroSection from "@/cities/components/CityHeroSection"
import CityWhyChooseUsSection from "@/cities/components/CityWhyChooseUsSection"
import CityWhatWeDoSection from "@/cities/components/CityWhatWeDoSection"
import TradeShowsCarouselSection from "@/cities/components/TradeShowsCarouselSection"
import ExhibitingExperienceSection from "@/cities/components/ExhibitingExperienceSection"

// Import database functions
import { 
  getCountryBySlugFromDB, 
  getAvailableCountriesFromDB, 
  isCountryAvailableFromDB, 
  CountryDetail,
  generateCountryMetadata 
} from "@/data/countries"
import { 
  getCityBySlugFromDB, 
  getAvailableCitiesFromDB, 
  isCityAvailableBySlugFromDB, 
  generateCityMetadataBySlug
} from '@/data/cities'

interface SlugPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for SEO with full SSR
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const slugKey = slug.toLowerCase()
  
  // First check if this is a city
  const isCity = await isCityAvailableBySlugFromDB(slugKey);
  if (isCity) {
    // Generate city metadata
    const metadata = await generateCityMetadataBySlug(slugKey)
    return metadata
  }
  
  // Otherwise treat as country
  const metadata = await generateCountryMetadata(slugKey)
  return metadata
}

export default async function SlugDetailPage({ params }: SlugPageProps) {
  const { slug } = await params
  const slugKey = slug.toLowerCase()
  
  // First check if this is a city
  const isCity = await isCityAvailableBySlugFromDB(slugKey);
  if (isCity) {
    // Handle as city page
    const cityData = await getCityBySlugFromDB(slugKey)
    
    if (!cityData) {
      notFound()
    }

    // Fetch solutions data dynamically
    const solutionsData = await getHomeSectionData('solutions') as Solutions;

    return (
      <main className="overflow-x-hidden">
        <CityHeroSection data={cityData.hero} cityName={cityData.name} />
        <CityWhyChooseUsSection data={cityData.whyChooseUs} cityName={cityData.name} />
        <CityWhatWeDoSection data={cityData.whatWeDo} />
        <SolutionCardsSection solutionsData={solutionsData} />
        <PortfolioSection 
          title={cityData.portfolioSection.title}
          subtitle={cityData.portfolioSection.subtitle}
          ctaText={cityData.portfolioSection.ctaText}
          ctaLink={cityData.portfolioSection.ctaLink}
        />
        <ExhibitingExperienceSection data={cityData.exhibitingExperience} />
        <TradeShowsCarouselSection cityName={cityData.name} />
      </main>
    )
  }
  
  // Otherwise treat as country
  const countryIsAvailable = await isCountryAvailableFromDB(slugKey);
  
  if (!countryIsAvailable) {
    notFound()
  }

  // Get country-specific data from the database
  const countryData: CountryDetail | null = await getCountryBySlugFromDB(slugKey);
  
  // This should not happen since we checked availability above, but for TypeScript safety
  if (!countryData) {
    notFound()
  }

  // Fetch solutions data dynamically
  const solutionsData = await getHomeSectionData('solutions') as Solutions;

  return (
    <main className="overflow-x-hidden">
      <HeroSection data={countryData.hero} countryName={countryData.name} />
      <WhyChooseUsSection data={countryData.whyChooseUs} countryName={countryData.name} />
      <WhatWeDoSection data={countryData.whatWeDo} />
      <SolutionCardsSection solutionsData={solutionsData} />
      <PortfolioSection 
        title={countryData.portfolioSection.title}
        subtitle={countryData.portfolioSection.subtitle}
        ctaText={countryData.portfolioSection.ctaText}
        ctaLink={countryData.portfolioSection.ctaLink}
      />
      <CompanyInfoSection data={countryData.companyInfo} />
      <BestCompanySection data={countryData.bestCompany} />
      <ProcessSection data={countryData.processSection} />
      <CitiesSection data={countryData.citiesSection} countrySlug={slugKey} />
    </main>
  )
}

// Generate static params for available locations (both countries and cities) - for ISR
export async function generateStaticParams() {
  // Get all available countries
  const availableCountries = await getAvailableCountriesFromDB()
  
  // Get all available cities
  const availableCities = await getAvailableCitiesFromDB()
  
  // Combine both into a single array with unique slugs
  // Use a Set to ensure uniqueness and avoid conflicts
  const allSlugs = new Set<string>()
  
  // Add country slugs
  availableCountries.forEach(slug => allSlugs.add(slug))
  
  // Add city slugs
  availableCities.forEach(city => allSlugs.add(city.citySlug))
  
  // Convert Set back to array of objects for Next.js
  return Array.from(allSlugs).map((slug) => ({
    slug: slug,
  }))
}

// ISR Configuration - Revalidate every 30 days
export const revalidate = 2592000; // 30 days in seconds