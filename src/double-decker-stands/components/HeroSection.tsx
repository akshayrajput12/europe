import { doubleDeckHeroData } from "@/data/double-decker-stands"

export default function HeroSection() {
  return (
    <section
      className=" relative min-h-[70vh] flex items-center justify-center text-white"

      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {doubleDeckHeroData.title}
        </h1>
        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6"
          style={{ color: "#A5CD39" }}
        >
          {doubleDeckHeroData.subtitle}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          {doubleDeckHeroData.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {doubleDeckHeroData.buttons.map((btn, index) => (
            <button
              key={index}
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-full font-semibold"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
