import { services } from "@/data/about-data"
import Image from "next/image"

export default function ServicesSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16 space-y-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={`grid lg:grid-cols-2 gap-8 items-center ${service.isReversed ? "lg:grid-flow-col-dense" : ""}`}
          >
            <div className={service.isReversed ? "lg:col-start-2" : ""}>
              <h2 className="text-xl md:text-2xl font-bold mb-8 tracking-wide">
                {service.title.includes("EXPERTS") ? (
                  <>
                    MARKETING <span className="text-[#A5CD39]">EXPERTS</span>
                  </>
                ) : service.title.includes("MANAGEMENT") ? (
                  <>
                    PROJECT <span className="text-[#A5CD39]">MANAGEMENT</span>
                  </>
                ) : service.title.includes("AND PLANNING") ? (
                  <>
                    DESIGN <span className="text-[#A5CD39]">AND PLANNING</span>
                  </>
                ) : service.title.includes("AND INSTALLATION") ? (
                  <>
                    FABRICATION
                    <br />
                    <span className="text-[#A5CD39]">AND INSTALLATION</span>
                  </>
                ) : (
                  <span className="text-[#A5CD39]">{service.title}</span>
                )}
              </h2>
              <p className="text-slate-700 leading-relaxed text-base md:text-lg">{service.description}</p>
            </div>
            <div className={`${service.isReversed ? "lg:col-start-1 lg:pr-8" : "lg:pl-8"}`}>
              <div className="relative w-full h-[300px]">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-110 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
