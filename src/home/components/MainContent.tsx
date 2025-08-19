import { homeData } from "@/data/home"

export default function MainContent() {
  return (
    <main className="container mx-auto px-4 py-8 md:py-16">
      {/* Title Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-800">{homeData.hero.title}</h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          {homeData.hero.subtitle.split(" ").map((word, index) =>
            word === "EUROPE" ? (
              <span key={index} className="text-[#A5CD39]">
                {word}
              </span>
            ) : (
              <span key={index} className="text-slate-800">
                {word}{" "}
              </span>
            ),
          )}
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-8 text-base md:text-lg leading-relaxed px-4 md:px-0">
          {homeData.hero.description}
        </p>
      </div>

      <div className="max-w-6xl mx-auto mb-16 md:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {homeData.countries.map((country, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-white p-6 md:p-8 text-center rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer group border border-gray-100"
            >
              <h3 className="font-medium text-lg md:text-xl text-gray-800 group-hover:text-[#A5CD39] transition-colors duration-300">
                {country}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-[#A5CD39] hover:bg-[#94b832] text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl">
            Load More
          </button>
        </div>
      </div>
    </main>
  )
}
