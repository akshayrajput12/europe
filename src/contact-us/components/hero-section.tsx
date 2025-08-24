import { contactData } from "@/data/contact-data"

export default function HeroSection() {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactData.hero.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">{contactData.hero.title}</h1>
      </div>
    </section>
  )
}