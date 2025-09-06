import TradeShowHeroSection from "./components/TradeShowHeroSection"
import TradeShowGrid from "./components/TradeShowGrid"
import TradeShowDescription from "./components/TradeShowDescription"
import { getTradeShowData } from "@/data/trade-shows"
import type { Metadata } from 'next'

// Export for ISR
export const dynamic = 'force-dynamic'
export const revalidate = 3600 // Revalidate every hour

// Metadata generation for SEO
export async function generateMetadata(): Promise<Metadata> {
  const tradeShowData = await getTradeShowData()
  
  if (!tradeShowData) {
    return {
      title: 'Trade Shows - Exhibition Stand Builder',
      description: 'Discover premier trade shows and exhibitions across Europe.',
    }
  }

  return {
    title: tradeShowData.metaTitle,
    description: tradeShowData.metaDescription,
    keywords: tradeShowData.metaKeywords,
  }
}

export default async function TradeShowPage() {
  const tradeShowData = await getTradeShowData()
  
  if (!tradeShowData) {
    return <div>Error loading trade show data</div>
  }

  return (
    <main className="m-0 p-0">
      <TradeShowHeroSection tradeShowData={tradeShowData} />
      <TradeShowGrid tradeShowData={tradeShowData} />
      <TradeShowDescription tradeShowData={tradeShowData} />
    </main>
  )
}