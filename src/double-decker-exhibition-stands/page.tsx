import ContactSection from "../components/ContactSection"
import HeroSection from "./components/HeroSection"
import BenefitsSection from "./components/BenefitsSection"
import MainSection from "./components/MainSection"
import PortfolioSection from "@/components/PortfolioSection"
import ExhibitionBenefitsSection from "./components/ExhibitionBenefitsSection"
import StandProjectText from "./components/StandProjectTextSection"
import BoothPartnerSection from "./components/BoothPartnerSection"
import BoldStatementSection from "./components/BoldStatementSection"
import { DoubleDeckerStandsData } from "@/data/double-decker-stands"

interface DoubleDeckPageProps {
  data: DoubleDeckerStandsData
}

export default function DoubleDeckPage({ data }: DoubleDeckPageProps) {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection heroData={data.hero} />
        <BenefitsSection benefitsData={data.benefits} />
        <MainSection pointsTableData={data.pointsTable} />
        <StandProjectText standProjectTextData={data.StandProjectText} />
        <PortfolioSection 
          title={data.portfolio.title}
          subtitle={data.portfolio.subtitle}
          ctaText={data.portfolio.ctaText}
          ctaLink={data.portfolio.ctaLink}
        />
        <ExhibitionBenefitsSection exhibitionBenefitsData={data.exhibitionBenefits} />
        <BoothPartnerSection boothPartnerData={data.boothPartner} />
        <BoldStatementSection boldStatementData={data.boldStatement} />
        <ContactSection />
      </main>
    </div>
  )
}