import { heroData } from "@/data/about-data"

export default function HeroSection() {
  return (
    <section className="relative h-[500px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${heroData.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em]">{heroData.title}</h1>
      </div>
    </section>
  )
}
