import Image from "next/image"
import { homeData } from "@/data/home"

export default function HeroSection() {
  const { hero } = homeData

  return (
    <section className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[450px] lg:h-[550px] xl:h-[650px] 2xl:h-[700px] bg-gray-100 m-0 p-0">
      <Image
        src={hero.backgroundImage}
        alt="Chronicles facility aerial view"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 bg-opacity-20" />
    </section>
  )
}
