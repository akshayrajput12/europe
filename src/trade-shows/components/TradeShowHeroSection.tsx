import { TradeShowData } from "@/data/trade-shows"

export default function TradeShowHeroSection({ tradeShowData }: { tradeShowData: TradeShowData }) {
  return (
    <section className="relative h-[400px] flex items-center justify-center m-0 p-0">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${tradeShowData.heroImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em] mb-4">
          {tradeShowData.title}
        </h1>
        <p className="text-white/90 max-w-3xl mx-auto text-sm md:text-base">
          {tradeShowData.subtitle}
        </p>
      </div>
    </section>
  )
}