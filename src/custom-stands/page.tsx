
import ContactSection from "@/components/ContactSection"
import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection"
import BenefitsSection from "./components/BenefitsSection"
import StandProjectTextSection from "./components/StandProjectTextSection"
import BespokeSection from "./components/BespokeSection"
import FreshDesignSection from "./components/FreshDesignSection"
import CostSection from "./components/CostSection"
import PortfolioSection from "@/components/PortfolioSection"

export default function CustomStandsPage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <MainSection />
        <BenefitsSection />
        <StandProjectTextSection />
        <PortfolioSection />
        <BespokeSection />
        <FreshDesignSection />
        <CostSection />
        <ContactSection />
      </main>
    </div>
  )
}
