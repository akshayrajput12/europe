import { doubleDeckPortfolioData } from "../../data/double-decker-stands"

export default function PortfolioSection() {
  return (
    <section className="py-16 px-4 bg-foreground text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{doubleDeckPortfolioData.title}</h2>
        <p className="text-lg mb-12 max-w-4xl mx-auto leading-relaxed">{doubleDeckPortfolioData.description}</p>
      </div>
    </section>
  )
}
