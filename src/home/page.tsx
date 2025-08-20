import HeroSection from "./components/HeroSection"
import { homeData } from "@/data/home"
import { ExhibitionSection } from "./components/ExhibitionSection"
import MainContent from "./components/MainContent"
import SolutionsSection from "./components/SolutionsSection"
import PortfolioSection from "./components/PortfolioSection"
import TestimonialsSection from "../components/TestimonialsSection"
import WhyBestSection from "./components/WhyBestSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ExhibitionSection />
      <SolutionsSection />
      <PortfolioSection />
      <MainContent/>
      <WhyBestSection />
      <TestimonialsSection />
    </div>
  )
}
