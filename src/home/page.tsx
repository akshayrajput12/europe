import HeroSection from "./components/HeroSection"
import { ExhibitionSection } from "./components/ExhibitionSection"
import MainContent from "./components/MainContent"
import SolutionsHeaderSection from "./components/SolutionsHeaderSection"
import SolutionCardsSection from "./components/SolutionCardsSection"
import PortfolioSection from "./components/PortfolioSection"
import TestimonialsSection from "../components/TestimonialsSection"
import WhyBestSection from "./components/WhyBestSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <HeroSection />
      <ExhibitionSection />
      <SolutionsHeaderSection />
      <SolutionCardsSection />
      <PortfolioSection />
      <MainContent/>
      <WhyBestSection />
      <TestimonialsSection />
    </div>
  )
}
