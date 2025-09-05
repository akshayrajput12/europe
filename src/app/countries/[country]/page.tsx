import { 
  getCountryBySlugFromDB,
  getAvailableCountriesFromDB,
  isCountryAvailableFromDB,
  CountryDetail,
  generateCountryMetadata
} from "@/data/countries"
import HeroSection from "@/countries/components/HeroSection"
import WhyChooseUsSection from "@/countries/components/WhyChooseUsSection"
import WhatWeDoSection from "@/countries/components/WhatWeDoSection"
import SolutionCardsSection from "@/home/components/SolutionCardsSection"
import PortfolioSection from "@/components/PortfolioSection"
import CompanyInfoSection from "@/countries/components/CompanyInfoSection"
import BestCompanySection from "@/countries/components/BestCompanySection"
import ProcessSection from "@/countries/components/ProcessSection"
import CitiesSection from "@/countries/components/CitiesSection"
import ContactSection from "@/components/ContactSection"
import { notFound } from 'next/navigation'
import { getHomeSectionData } from "@/data/home"
import { Solutions } from "@/data/home"
import { Metadata } from 'next'

interface CountryPageProps {
  params: Promise<{
    country: string
  }>
}

// Generate metadata for SEO with full SSR
export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params
  const countryKey = country.toLowerCase()
  
  // Generate complete SEO metadata
  const metadata = await generateCountryMetadata(countryKey)
  return metadata
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { country } = await params
  const countryKey = country.toLowerCase()
  
  // Check if country is available using the database
  const countryIsAvailable = await isCountryAvailableFromDB(countryKey);
  
  if (!countryIsAvailable) {
    notFound()
  }

  // Get country-specific data from the database
  const countryData: CountryDetail | null = await getCountryBySlugFromDB(countryKey);
  
  // This should not happen since we checked availability above, but for TypeScript safety
  if (!countryData) {
    notFound()
  }

  // Fetch solutions data dynamically
  const solutionsData = await getHomeSectionData('solutions') as Solutions;

  return (
    <main>
      <HeroSection data={countryData.hero} />
      <WhyChooseUsSection data={countryData.whyChooseUs} />
      <WhatWeDoSection data={countryData.whatWeDo} />
      <SolutionCardsSection solutionsData={solutionsData} />
      <PortfolioSection title="OUR PORTFOLIO" subtitle="Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project." />
      <CompanyInfoSection data={countryData.companyInfo} />
      <BestCompanySection data={countryData.bestCompany} />
      <ProcessSection data={countryData.processSection} />
      <CitiesSection data={countryData.citiesSection} countrySlug={countryKey} />
      <ContactSection />
    </main>
  )
}

// Generate static params for available countries using the database
export async function generateStaticParams() {
  const availableCountries = await getAvailableCountriesFromDB()
  return availableCountries.map((country) => ({
    country: country,
  }))
}

// ISR Configuration - Revalidate every 30 days
export const revalidate = 2592000; // 30 days in seconds