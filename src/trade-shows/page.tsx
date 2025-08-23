import TradeShowHeroSection from "./components/TradeShowHeroSection"
import TradeShowGrid from "./components/TradeShowGrid"
import TradeShowDescription from "./components/TradeShowDescription"

export default function TradeShowPage() {
  return (
    <main className="m-0 p-0">
      <TradeShowHeroSection />
      <TradeShowGrid />
      <TradeShowDescription />
    </main>
  )
}