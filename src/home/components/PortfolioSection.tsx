import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { portfolioData } from "@/data/portfolio"

export default function PortfolioSection() {
  // Filter only featured items for home page display
  const featuredItems = portfolioData.items.filter(item => item.featured);
  
  return (
    <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-24">
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
            OUR <span className="text-[#A5CD39]">PORTFOLIO</span>
          </h2>
          <p className="text-gray-600 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed px-2 sm:px-4 md:px-0">
            Explore our extensive portfolio of exhibition stands and discover the quality and creativity we bring to
            every project.
          </p>
        </div>
      </div>

      <div className="px-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1">
          {featuredItems.map((item, index) => (
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
      </div>

      {/* View Portfolio Button */}
      <div className="text-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
        <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
          <Link href={portfolioData.ctaLink}>
            <Button 
              size="lg"
              className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
            >
              {portfolioData.ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}