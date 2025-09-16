import TradeShowHeroSection from "./components/TradeShowHeroSection"
import TradeShowGrid from "./components/TradeShowGrid"
import TradeShowDescription from "./components/TradeShowDescription"
import { getTradeShowData, getPaginatedTradeShows } from "@/data/trade-shows"
import type { Metadata } from 'next'

// Export for ISR
export const dynamic = 'force-dynamic'
// Update to 30 days revalidation as per project specifications
export const revalidate = 2592000 // Revalidate every 30 days

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

interface TradeShowPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function TradeShowPage({ searchParams }: TradeShowPageProps) {
  const tradeShowData = await getTradeShowData()
  const resolvedSearchParams = await searchParams
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page as string) : 1
  const paginatedData = await getPaginatedTradeShows(page, 6)
  
  if (!tradeShowData) {
    return <div>Error loading trade show data</div>
  }

  if (!paginatedData) {
    return <div>Error loading trade show data</div>
  }

  return (
    <main className="m-0 p-0">
      <TradeShowHeroSection tradeShowData={tradeShowData} />
      <TradeShowGrid initialShows={paginatedData.shows} totalShows={paginatedData.total} />
      <TradeShowDescription tradeShowData={tradeShowData} />
    </main>
  )
}