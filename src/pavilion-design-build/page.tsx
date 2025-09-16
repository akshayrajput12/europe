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
      <BenefitsSection benefitsData={data.benefits} />
      <WhyChooseSection whyChooseData={data.whyChoose} />
      <StandProjectTextSection standProjectTextData={data.StandProjectText} />
      <PortfolioSection 
        title={data.portfolio.title}
        subtitle={data.portfolio.subtitle}
        ctaText={data.portfolio.ctaText}
        ctaLink={data.portfolio.ctaLink}
      />
      <AdvantagesSection advantagesData={data.advantages} />
      <OurExpertiseSection ourExpertiseData={data.ourExpertise} />
      <CompanyInfoSection companyInfoData={data.companyInfo} />
    </div>
  )
}