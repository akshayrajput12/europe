import { CustomStandsData } from "@/data/custom-stands"
import ContactSection from "@/components/ContactSection"
import HeroSection from "./components/HeroSection"
import MainSection from "./components/MainSection"
import BenefitsSection from "./components/BenefitsSection"
import StandProjectTextSection from "./components/StandProjectTextSection"
import ExhibitionBenefitsSection from "./components/ExhibitionBenefitsSection"
import BespokeSection from "./components/BespokeSection"
import FreshDesignSection from "./components/FreshDesignSection"
import CostSection from "./components/CostSection"
import PortfolioSection from "@/components/PortfolioSection"

interface CustomStandsPageProps {
  data: CustomStandsData
}

export default function CustomStandsPage({ data }: CustomStandsPageProps) {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection heroData={data.hero} />
        <BenefitsSection benefitsData={data.benefits} />
        <MainSection pointsTableData={data.pointsTable} />
        <StandProjectTextSection standProjectTextData={data.StandProjectText} />
        <PortfolioSection />
        <ExhibitionBenefitsSection exhibitionBenefitsData={data.exhibitionBenefits} />
        <BespokeSection bespokeData={data.bespoke} />
        <FreshDesignSection freshDesignData={data.freshDesign} />
        <CostSection costSectionData={data.costSection} />
        <ContactSection />
      </main>
    </div>
  )
}