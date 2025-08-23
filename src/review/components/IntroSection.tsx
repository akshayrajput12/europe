import { introData } from "@/data/testimonials"

export default function IntroSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
          {introData.title}{" "}
          <span className="text-[#A5CD39]">{introData.subtitle}</span>
        </h2>
        <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto text-slate-500">
          {introData.text}
        </p>
      </div>
    </section>
  )
}
