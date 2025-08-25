import HeroSection from "./components/HeroSection"
import WhyChooseSection from "./components/WhyChooseSection"
import BenefitsSection from "./components/BenefitsSection"
import OurExpertiseSection from "./components/OurExpertiseSection"
import AdvantagesSection from "./components/AdvantagesSection"
import PortfolioSection from "@/components/PortfolioSection"
import StandProjectTextSection from "./components/StandProjectTextSection"
import CompanyInfoSection from "./components/CompanyInfoSection"

export default function PavilionPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseSection />
      <BenefitsSection />
      <StandProjectTextSection />
      <PortfolioSection />
      <AdvantagesSection />
      <OurExpertiseSection />
      <CompanyInfoSection />
    </div>
  )
}