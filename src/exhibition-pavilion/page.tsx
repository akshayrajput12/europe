import HeroSection from "./components/HeroSection"
import WhyChooseSection from "./components/WhyChooseSection"
import BenefitsSection from "./components/BenefitsSection"
import OurExpertiseSection from "./components/OurExpertiseSection"
import AdvantagesSection from "./components/AdvantagesSection"
import PortfolioSection from "@/components/PortfolioSection"
import PortfolioSectionTest from "./components/PortfolioSectionText"
import CompanyInfoSection from "./components/CompanyInfoSection"

export default function PavilionPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseSection />
      <BenefitsSection />
      <PortfolioSectionTest />
      <PortfolioSection />
      <AdvantagesSection />
      <OurExpertiseSection />
      <CompanyInfoSection />
    </div>
  )
}
