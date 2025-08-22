import { portfolioPageData } from "@/data/portfolio"

export default function PortfolioHero() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
          {portfolioPageData.title}
        </h1>
        <p className="text-slate-600 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          {portfolioPageData.subtitle}
        </p>
      </div>
    </section>
  )
}