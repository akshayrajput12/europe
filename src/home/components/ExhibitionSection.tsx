import { Button } from "@/components/ui/button"
import { homeData } from "@/data/home"

export function ExhibitionSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{homeData.exhibitionData.europe.title}</h2>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          IN <span style={{ color: "#A5CD39" }}>EUROPE</span>
        </h3>

        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          {homeData.exhibitionData.europe.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-center">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Trade Show Booth Image */}
        <div className="relative">
          <img
            src={homeData.exhibitionData.europe.boothImage}
      alt={homeData.exhibitionData.europe.title}
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - USA Section Content */}
        <div className="space-y-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">{homeData.exhibitionData.usa.title}</h3>

          <div className="space-y-4 text-gray-700 leading-relaxed text-sm md:text-base">
            {homeData.exhibitionData.usa.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Request Form Button */}
          <div className="mt-8">
            <Button
              variant="outline"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200 rounded-full font-medium bg-transparent"
            >
              Request Form
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
