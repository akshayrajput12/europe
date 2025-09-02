import HeroSection from "./components/HeroSection"
import WhyChooseSection from "./components/WhyChooseSection"
import BenefitsSection from "./components/BenefitsSection"
import OurExpertiseSection from "./components/OurExpertiseSection"
import AdvantagesSection from "./components/AdvantagesSection"
import PortfolioSection from "@/components/PortfolioSection"
import StandProjectTextSection from "./components/StandProjectTextSection"
import CompanyInfoSection from "./components/CompanyInfoSection"
import { PavilionPageData } from "@/data/pavilionData"

interface PavilionPageProps {
  data: PavilionPageData
}

export default function PavilionPage({ data }: PavilionPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection heroData={data.hero} />
      <WhyChooseSection whyChooseData={data.whyChoose} />
      <BenefitsSection benefitsData={data.benefits} />
      <StandProjectTextSection standProjectTextData={data.StandProjectText} />
      <PortfolioSection />
      <AdvantagesSection advantagesData={data.advantages} />
      <OurExpertiseSection ourExpertiseData={data.ourExpertise} />
      <CompanyInfoSection companyInfoData={data.companyInfo} />
    </div>
  )
}