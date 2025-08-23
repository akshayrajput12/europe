import { 
  getCountryDataByKey, 
  getAvailableCountries, 
  isCountryAvailable 
} from "@/data/countries"
import HeroSection from "@/countries/components/HeroSection"
import WhyChooseUsSection from "@/countries/components/WhyChooseUsSection"
import SolutionsSection from "@/home/components/SolutionsSection"
import PortfolioSection from "@/home/components/PortfolioSection"
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
  const countryData = getCountryDataByKey(countryKey)
  
  // This should not happen since we checked availability above, but for TypeScript safety
  if (!countryData) {
    notFound()
  }

  return (
    <main>
      <HeroSection data={countryData.hero} />
      <WhyChooseUsSection data={countryData.whyChooseUs} />
      <SolutionsSection />
      <PortfolioSection />
      <CompanyInfoSection data={countryData.companyInfo} />
      <BestCompanySection data={countryData.bestCompany} />
      <ProcessSection data={countryData.processSection} />
      <CitiesSection data={countryData.citiesSection} />
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