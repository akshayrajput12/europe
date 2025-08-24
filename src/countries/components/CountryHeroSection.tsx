import { countriesData } from "@/data/countries"

export default function CountryHeroSection() {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=800&fit=crop&crop=center')`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-[0.2em] mb-4">
          {countriesData.title}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#A5CD39] tracking-[0.1em] mb-4">
          {countriesData.subtitle}
        </h2>
        <p className="text-white/90 max-w-3xl mx-auto px-4 text-sm md:text-base">
          Professional exhibition stand design and construction services across Europe&apos;s premier trade show destinations.
        </p>
      </div>
    </section>
  )
}