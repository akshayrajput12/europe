import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import TradeShowDetailHero from "@/trade-shows/components/TradeShowDetailHero"
import TradeShowContent from "@/trade-shows/components/TradeShowContent"
import TradeShowCountdown from "@/trade-shows/components/TradeShowCountdown"
import { getTradeShowBySlug } from "@/data/trade-shows"

interface TradeShowDetailPageProps {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const show = await getTradeShowBySlug(slug)
  
  if (!show) {
    return {
      title: 'Trade Show Not Found',
      description: 'The requested trade show could not be found.',
    }
  }

  return {
    title: show.metaTitle || `${show.title} - Trade Show Details`,
    description: show.metaDescription || show.excerpt,
    keywords: show.metaKeywords ? show.metaKeywords.split(',') : [],
  }
}

export default async function TradeShowDetailPage({ params }: TradeShowDetailPageProps) {
  const { slug } = await params
  const show = await getTradeShowBySlug(slug)
  
  if (!show) {
    notFound()
  }

  return (
    <main className="m-0 p-0">
      <TradeShowDetailHero show={show} />
      <TradeShowCountdown show={show} />
      <TradeShowContent show={show} />
    </main>
  )
}