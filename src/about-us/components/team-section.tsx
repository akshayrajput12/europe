import { teamInfo } from "@/data/about-data"
import Image from "next/image"

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-8 tracking-wide">
              MEET <span className="text-[#A5CD39]">OUR TEAM</span>
            </h2>
            <p className="text-slate-700 leading-relaxed text-base md:text-lg">{teamInfo.description}</p>
          </div>
          <div className="lg:pl-8">
            <div className="relative w-full h-[350px]">
              <Image
                src={teamInfo.teamImage || "/placeholder.svg"}
                alt="Our professional team"
                fill
                className="object-cover hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
