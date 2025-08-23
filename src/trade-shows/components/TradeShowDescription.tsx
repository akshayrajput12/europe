import { tradeShowData } from "@/data/trade-shows"

export default function TradeShowDescription() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-justify">
          <p className="text-slate-700 leading-relaxed text-sm md:text-base mb-6">
            {tradeShowData.description.firstParagraph}
          </p>
          <p className="text-slate-700 leading-relaxed text-sm md:text-base">
            {tradeShowData.description.secondParagraph}
          </p>
        </div>
      </div>
    </section>
  )
}