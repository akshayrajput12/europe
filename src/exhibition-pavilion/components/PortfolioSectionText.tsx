import { pavilionData } from "@/data/pavilionData"

export default function PortfolioSection() {
  return (
    <section className="py-16 bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            {pavilionData.portfolio.title}
          </h2>
          <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed">{pavilionData.portfolio.description}</p>
        </div>

      </div>
    </section>
  )
}