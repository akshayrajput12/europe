import PortfolioHero from "./components/PortfolioHero"
import PortfolioGallery from "./components/PortfolioGallery"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PortfolioHero />
      <PortfolioGallery />
    </main>
  )
}