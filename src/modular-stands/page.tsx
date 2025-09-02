import ContactSection from "@/components/ContactSection"
import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection"
import BenefitsSection from "./components/BenefitsSection"
import PortfolioSection from "@/components/PortfolioSection"
import ExhibitionBenefitsSection from "./components/ExhibitionBenefitsSection"
import StandProjectText from "./components/StandProjectTextSection"
import ModularDiversitySection from "./components/ModularDiversitySection"
import FastestConstructionSection from "./components/FastestConstructionSection"
import ExpertsSection from "./components/ExpertsSection"
import { ModularStandsData } from "@/data/modular-stands"

interface ModularStandsPageProps {
  data: ModularStandsData
}

export default function ModularStandsPage({ data }: ModularStandsPageProps) {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection heroData={data.hero} />
        <BenefitsSection benefitsData={data.benefits} />
        <MainSection pointsTableData={data.pointsTable} />
        <StandProjectText standProjectTextData={data.StandProjectText} />
        <PortfolioSection />
        <ExhibitionBenefitsSection exhibitionBenefitsData={data.exhibitionBenefits} />
        <ModularDiversitySection modularDiversityData={data.modularDiversity} />
        <FastestConstructionSection fastestConstructionData={data.fastestConstruction} />
        <ExpertsSection expertsData={data.experts} />
        <ContactSection />
      </main>
    </div>
  )
}