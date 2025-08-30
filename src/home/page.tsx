import { HomeData } from "@/data/home"
import HeroSection from "./components/HeroSection"
import { ExhibitionSection } from "./components/ExhibitionSection"
import MainContent from "./components/MainContent"
import SolutionsHeaderSection from "./components/SolutionsHeaderSection"
import SolutionCardsSection from "./components/SolutionCardsSection"
import PortfolioSection from "./components/PortfolioSection"
import TestimonialsSection from "../components/TestimonialsSection"
import WhyBestSection from "./components/WhyBestSection"

interface HomePageProps {
  data: HomeData
}

export default function HomePage({ data }: HomePageProps) {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection heroData={data.hero} />
      <ExhibitionSection exhibitionData={data.exhibitionData} />
      <SolutionsHeaderSection solutionsData={data.solutions} />
      <SolutionCardsSection solutionsData={data.solutions} />
      <PortfolioSection />
      <MainContent mainSectionData={data.mainSection} />
      <WhyBestSection whyBestData={data.whyBest} />
      <TestimonialsSection />
    </div>
  )
}
