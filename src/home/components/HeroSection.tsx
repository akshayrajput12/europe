import Image from "next/image"
import { homeData } from "@/data/home"

export default function HeroSection() {
  const { hero } = homeData

  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] bg-gray-100">
      <Image
        src={hero.backgroundImage}
        alt="Chronicles facility aerial view"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-opacity-20" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            {hero.title}
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            {hero.subtitle.includes("EUROPE") ? (
              <>
                IN <span className="text-[#A5CD39]">EUROPE</span>
              </>
            ) : (
              hero.subtitle
            )}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            {hero.description}
          </p>
        </div>
      </div>
    </section>
  )
}
