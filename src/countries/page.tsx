import { franceData } from "@/data/countries"
import HeroSection from "./components/HeroSection"
import WhyChooseUsSection from "./components/WhyChooseUsSection"
import SolutionsSection from "@/home/components/SolutionsSection"
import PortfolioSection from "@/home/components/PortfolioSection"
import CompanyInfoSection from "./components/CompanyInfoSection"
import BestCompanySection from "./components/BestCompanySection"
import ProcessSection from "./components/ProcessSection"
import CitiesSection from "./components/CitiesSection"
import ContactSection from "@/components/ContactSection"

export default function CountryPage() {
  return (
    <main>
      <HeroSection data={franceData.hero} />
      <WhyChooseUsSection data={franceData.whyChooseUs} />
      <SolutionsSection />
      <PortfolioSection />
      <CompanyInfoSection data={franceData.companyInfo} />
      <BestCompanySection data={franceData.bestCompany} />
      <ProcessSection data={franceData.processSection} />
      <CitiesSection data={franceData.citiesSection} />
      <ContactSection />
    </main>
  )
}