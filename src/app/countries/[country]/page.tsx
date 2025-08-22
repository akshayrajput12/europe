import { franceData, getCountryData } from "@/data/countries"
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

// Available countries
const availableCountries = ['france', 'germany', 'netherlands', 'italy', 'spain']

export default async function CountryDetailPage({ params }: CountryPageProps) {
  const { country } = await params
  
  // Check if country is available
  if (!availableCountries.includes(country.toLowerCase())) {
    notFound()
  }

  // Get country-specific data (for now using France data as template)
  const countryData = country.toLowerCase() === 'france' 
    ? franceData 
    : getCountryData(country.charAt(0).toUpperCase() + country.slice(1))

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

// Generate static params for available countries
export async function generateStaticParams() {
  return availableCountries.map((country) => ({
    country: country,
  }))
}