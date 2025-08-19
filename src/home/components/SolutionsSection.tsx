import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { homeData } from "@/data/home"

export default function SolutionsSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 -mx-4 px-4 mb-12 md:mb-16">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            {homeData.solutions.title.split(" ").map((word, index) =>
              word === "SOLUTIONS" ? (
                <span key={index} className="text-[#A5CD39]">
                  {word}{" "}
                </span>
              ) : (
                <span key={index} className="text-slate-800">
                  {word}{" "}
                </span>
              )
            )}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed px-4 md:px-0">
            {homeData.solutions.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                <CardContent className="p-4">
                  <div className="overflow-hidden mb-4 rounded-md">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={300}
                      height={200}
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300 rounded-md"
                    />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link href={linkMap[solution.title] || "#"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs md:text-sm border-gray-400 text-gray-900 hover:bg-[#A5CD39] hover:text-white hover:border-[#A5CD39] transition-all duration-300"
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
