
import ContactSection from "../components/ContactSection"
import HeroSection from "./components/HeroSection"
import BenefitsSection from "./components/BenefitsSection"
import MainSection from "./components/MainSection"
import PortfolioSection from "@/components/PortfolioSection"
import ExhibitionBenefitsSection from "./components/ExhibitionBenefitsSection"
import StandProjectText from "./components/StandProjectTextSection"
import PartnerSection from "./components/PartnerSection"
import StatementSection from "./components/StatementSection"

export default function DoubleDeckPage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <MainSection />
        <BenefitsSection />
        <StandProjectText />
        <PortfolioSection />
        <ExhibitionBenefitsSection />
        <PartnerSection />
        <StatementSection />
        <ContactSection />
      </main>
    </div>
  )
}
