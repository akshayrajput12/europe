import { homeData } from "@/data/home"

export default function SolutionsHeaderSection() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20 mb-8 sm:mb-12 md:mb-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
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
          <p className="rich-content text-gray-600 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4 md:px-0"
             dangerouslySetInnerHTML={{ __html: homeData.solutions.htmlContent }}
          />
        </div>
      </div>
    </section>
  )
}