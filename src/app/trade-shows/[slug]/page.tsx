import { getTradeShowBySlug, getTradeShows } from "@/data/trade-shows"
import { notFound } from "next/navigation"
import TradeShowDetailHero from "@/trade-shows/components/TradeShowDetailHero"
import TradeShowCountdown from "@/trade-shows/components/TradeShowCountdown"
import TradeShowContent from "@/trade-shows/components/TradeShowContent"
import PortfolioSection from "@/components/PortfolioSection"

interface TradeShowDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TradeShowDetailPage({ params }: TradeShowDetailPageProps) {
  const { slug } = await params
  const show = await getTradeShowBySlug(slug)

  if (!show) {
    notFound()
  }

  return (
    <main>
      {/* Hero Section */}
      <TradeShowDetailHero show={show} />
      
      {/* Countdown Section */}
      <TradeShowCountdown show={show} />
      
      {/* Content Section */}
      <TradeShowContent show={show} />
      
      {/* Portfolio Section */}
      <PortfolioSection 
        title={`Our Exhibition Stand Work at ${show.title.replace(' 2025', '')} 2025`}
      />
    </main>
  )
}

// Generate static params for available trade shows
export async function generateStaticParams() {
  const shows = await getTradeShows()
  return shows.map((show) => ({
    slug: show.slug,
  }))
}