import { heroData } from "@/data/testimonials"

export default function HeroSection() {
  return (
    <section
      className="relative  text-white px-4 flex items-center justify-center"
      style={{
        height: "70vh",
        backgroundImage: `url(${heroData.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/50 bg-opacity-60"></div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{heroData.text}</h1>
      </div>
    </section>
  )
}
