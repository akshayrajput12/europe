import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { SolutionItem, Solutions } from "@/data/home"

interface SolutionCardsSectionProps {
  solutionsData?: Solutions
}

export default function SolutionCardsSection({ solutionsData }: SolutionCardsSectionProps) {
  // If no solutionsData is provided, use default data
  const defaultSolutionsData: Solutions = {
    title: "Our Solutions",
    htmlContent: "Explore our comprehensive range of exhibition stand solutions designed to make your brand stand out.",
    items: [
      {
        title: "Custom Exhibition Stands",
        description: "Bespoke stand designs tailored to your brand identity and marketing objectives.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
        alt: "Custom Exhibition Stands"
      },
      {
        title: "Modular Exhibition Stands",
        description: "Flexible, cost-effective solutions that can be reconfigured for multiple events.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
        alt: "Modular Exhibition Stands"
      },
      {
        title: "Double Decker Exhibition Stands",
        description: "Maximize your exhibition space with our innovative two-level stand designs.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
        alt: "Double Decker Exhibition Stands"
      },
      {
        title: "Exhibition Pavilion Design",
        description: "Large-scale pavilion solutions for major trade shows and corporate events.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=center",
        alt: "Exhibition Pavilion Design"
      }
    ]
  };

  const data = solutionsData || defaultSolutionsData;

  return (
    <section className="pb-8 sm:pb-12 md:pb-16 lg:pb-20 mb-8 sm:mb-12 md:mb-16">
      <div className="container mx-auto px-4">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-6 xl:gap-8">
          {data.items.map((solution, index) => {
            const linkMap: { [key: string]: string } = {
              "Custom Exhibition Stands": "/custom-stands",
              "Modular Exhibition Stands": "/modular-stands",
              "Double Decker Exhibition Stands": "/double-decker-stands",
              "Exhibition Pavilion Design": "/pavilion-design",
              // Handle potential singular forms
              "Custom Exhibition Stand": "/custom-stands",
              "Modular Exhibition Stand": "/modular-stands",
              "Double Decker Exhibition Stand": "/double-decker-stands"
            }

            // Use .trim() on solution titles to handle potential whitespace issues
            const trimmedTitle = solution.title.trim();
            const route = linkMap[trimmedTitle] || "/";

            return (
              <Card
                key={index}
                className="border border-gray-200 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <CardContent className="p-3 sm:p-4 md:p-5 lg:p-4 xl:p-6">
                  <div className="overflow-hidden mb-3 sm:mb-4 rounded-md group">
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.alt || solution.title}
                      width={300}
                      height={200}
                      className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover group-hover:scale-110 transition-transform duration-500 rounded-md"
                    />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-gray-900 leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <Link href={route}>
                    <Button
                      size="lg"
                      className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
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