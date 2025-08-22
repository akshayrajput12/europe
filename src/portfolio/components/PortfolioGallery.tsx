import Image from "next/image"
import { portfolioPageData } from "@/data/portfolio"

export default function PortfolioGallery() {
  return (
    <section className="py-16 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
        {portfolioPageData.items.map((item, index) => (
          <div
            key={index}
            className="group overflow-hidden aspect-[4/3] relative shadow-md hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}