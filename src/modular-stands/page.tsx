import ContactSection from "@/components/ContactSection"
import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection"
import BenefitsSection from "./components/BenefitsSection"
import PortfolioSection from "@/components/PortfolioSection"
import ChooseUsSection from "./components/ChooseUsSection"
import ModularDiversitySection from "./components/ModularDiversitySection"
import FastestConstructionSection from "./components/FastestConstructionSection"
import ExpertsSection from "./components/ExpertsSection"

export default function ModularStandsPage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <MainSection />
        <BenefitsSection />
        <ChooseUsSection />
        <PortfolioSection />
        <ModularDiversitySection />
        <FastestConstructionSection />
        <ExpertsSection />
        <ContactSection />
      </main>
    </div>
  )
}
