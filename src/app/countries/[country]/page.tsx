import { 
  getCountryDetailBySlug, 
  getAvailableCountries, 
  isCountryAvailable 
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

interface CountryPageProps {
  params: Promise<{
    country: string
  }>
}

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { country } = await params
  const countryKey = country.toLowerCase()
  
  // Check if country is available using the new system
  if (!isCountryAvailable(countryKey)) {
    notFound()
  }

  // Get country-specific data using the new dynamic system
  const countryData = getCountryDetailBySlug(countryKey)
  
  // This should not happen since we checked availability above, but for TypeScript safety
  if (!countryData) {
    notFound()
  }

  return (
    <main>
      <HeroSection data={countryData.hero} />
      <WhyChooseUsSection data={countryData.whyChooseUs} />
      <WhatWeDoSection data={countryData.whatWeDo} />
      <SolutionCardsSection />
      <PortfolioSection title="OUR PORTFOLIO" subtitle="Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project." />
      <CompanyInfoSection data={countryData.companyInfo} />
      <BestCompanySection data={countryData.bestCompany} />
      <ProcessSection data={countryData.processSection} />
      <CitiesSection data={countryData.citiesSection} countrySlug={countryKey} />
      <ContactSection />
    </main>
  )
}

// Generate static params for available countries using the dynamic system
export async function generateStaticParams() {
  const availableCountries = getAvailableCountries()
  return availableCountries.map((country) => ({
    country: country,
  }))
}