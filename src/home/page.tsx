import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import SolutionsSection from "./components/SolutionsSection";
import PortfolioSection from "@/components/PortfolioSection";
import CountriesSection from "./components/CountriesSection";
import WhyBestSection from "./components/WhyBestSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MainContent />
      <SolutionsSection />
      <PortfolioSection />
      <CountriesSection />
      <WhyBestSection />
      <TestimonialsSection />
    </main>
  );
}
