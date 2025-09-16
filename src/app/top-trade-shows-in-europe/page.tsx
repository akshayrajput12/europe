import TradeShowPage from "@/trade-shows/page"

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default function Page({ searchParams }: PageProps) {
  return <TradeShowPage searchParams={searchParams} />
}