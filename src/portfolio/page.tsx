import PortfolioHero from "./components/PortfolioHero"
import PortfolioGallery from "./components/PortfolioGallery"
import { getPortfolioPageDataFromDB } from "@/lib/database"

export const revalidate = 2592000 // 30 days in seconds

export async function generateMetadata() {
  try {
    const portfolioData = await getPortfolioPageDataFromDB()
    if (portfolioData) {
      return {
        title: portfolioData.seo_title || 'Our Portfolio - Chronicle Exhibition Organizing LLC',
        description: portfolioData.seo_description || 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
        keywords: portfolioData.seo_keywords || 'portfolio, exhibition stands, trade show booths, custom displays',
      }
    }
  } catch (error) {
    console.error('Error generating portfolio metadata:', error)
  }
  
  // Fallback metadata
  return {
    title: 'Our Portfolio - Chronicle Exhibition Organizing LLC',
    description: 'Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to every project.',
    keywords: 'portfolio, exhibition stands, trade show booths, custom displays',
  }
}

// Since this is a single page and not a dynamic route, we don't need generateStaticParams
// But we're keeping the file structure for consistency

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white">
      <PortfolioHero />
      <PortfolioGallery />
    </main>
  )
}