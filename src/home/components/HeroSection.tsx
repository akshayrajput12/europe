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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-20" />
    </section>
  )
}
