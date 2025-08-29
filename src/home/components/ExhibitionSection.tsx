import { Button } from "@/components/ui/button"
import { homeData } from "@/data/home"
import Image from "next/image"

export function ExhibitionSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{homeData.exhibitionData.europe.title}</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          {homeData.exhibitionData.europe.subtitle}
        </h3>

        <div 
          className="rich-content max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: homeData.exhibitionData.europe.htmlContent }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Trade Show Booth Image */}
        <div className="relative">
          <Image
            src={homeData.exhibitionData.europe.boothImage || "/placeholder.svg"}
            alt={homeData.exhibitionData.europe.title}
            width={600}
            height={384}
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - USA Section Content */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{homeData.exhibitionData.usa.title}</h3>

          <div 
            className="rich-content text-gray-700 leading-relaxed text-sm md:text-base"
            dangerouslySetInnerHTML={{ __html: homeData.exhibitionData.usa.htmlContent || '' }}
          />

          {/* Request Form Button */}
          <div className="mt-8">
            <Button
              size="lg"
              className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
            >
              Request Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}