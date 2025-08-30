import { AboutPageData } from "@/data/about-data"
import HeroSection from "./components/hero-section"
import CompanyIntroSection from "./components/company-intro-section"
import TeamSection from "./components/team-section"
import ServicesSection from "./components/services-section"

interface AboutUsPageProps {
  data: AboutPageData
}

export default function AboutUsPage({ data }: AboutUsPageProps) {
  return (
    <main>
      <HeroSection heroData={data.hero} />
      <CompanyIntroSection 
        companyInfo={data.companyInfo}
        companyStats={data.companyStats}
        factsSection={data.factsSection}
      />
      <TeamSection teamInfo={data.teamInfo} />
      <ServicesSection services={data.services} />
    </main>
  )
}
