import { TradeShowData } from "@/data/trade-shows"

export default function TradeShowDescription({ tradeShowData }: { tradeShowData: TradeShowData }) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-justify">
          <div 
            className="text-slate-700 leading-relaxed text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: tradeShowData.description }}
          />
        </div>
      </div>
    </section>
  )
}