import Image from "next/image"
import { TradeShow, TRADE_SHOW_HERO_IMAGE } from "@/data/trade-shows"

interface TradeShowDetailHeroProps {
  show: TradeShow
}

export default function TradeShowDetailHero({ show }: TradeShowDetailHeroProps) {
  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={TRADE_SHOW_HERO_IMAGE}
          alt={show.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-wide">
            {show.title.toUpperCase()}
          </h1>
        </div>
      </div>
    </section>
  )
}