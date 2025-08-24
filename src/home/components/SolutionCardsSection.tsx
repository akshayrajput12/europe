import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { homeData } from "@/data/home"

export default function SolutionCardsSection() {
  return (
    <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 -mx-4 px-4 mb-8 sm:mb-12 md:mb-16">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {homeData.solutions.items.map((solution, index) => {
            const linkMap: { [key: string]: string } = {
              "Custom Exhibition Stands": "/custom-stands",
              "Modular Exhibition Stands": "/modular-stands",
              "Double Decker Exhibition Stands": "/double-decker-stands",
              "Exhibition Pavilion Design": "/pavilion-design",
            }

            return (
              <Card
                key={index}
                className="border border-gray-200 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6">
                  <div className="overflow-hidden mb-3 sm:mb-4 rounded-md">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={300}
                      height={200}
                      className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                    />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-gray-900 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link href={linkMap[solution.title] || "#"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs md:text-sm border-gray-400 text-gray-900 hover:bg-[#A5CD39] hover:text-white hover:border-[#A5CD39] transition-all duration-300 px-3 sm:px-4 py-1.5 sm:py-2"
                    >
                      LEARN MORE
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}