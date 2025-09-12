import ExhibitionHeroSection from "./components/ExhibitionHeroSection"
import CountryButtonsGrid from "./components/CountryButtonsGrid"
import ExhibitionStandTypeSection from "./components/ExhibitionStandTypeSection"
import PortfolioShowcaseSection from "./components/PortfolioShowcaseSection"
import BuildExhibitionSection from "./components/BuildExhibitionSection"
import { exhibitionStandTypes } from "@/data/maincountries"

// Export for ISR - Revalidate every 30 days (same as other pages)
export const revalidate = 2592000; // 30 days in seconds

export default async function CountriesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ExhibitionHeroSection />
      
      {/* Country Buttons Grid */}
      <CountryButtonsGrid />
      
      {/* Exhibition Stand Types */}
      {exhibitionStandTypes.map((standType, index) => (
        <ExhibitionStandTypeSection key={index} data={standType} />
      ))}
      
      {/* Portfolio Section (using global component) */}
      <PortfolioShowcaseSection />
      
      {/* Build Exhibition Section */}
      <BuildExhibitionSection />
    </main>
  )
}