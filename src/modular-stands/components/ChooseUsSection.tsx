import Image from "next/image"
import { Button } from "@/components/ui/button"
import { chooseUsSection } from "@/data/modular-stands"

export default function ChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{chooseUsSection.title}</h2>
          {/* <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: "#A5CD39" }}>
            {chooseUsSection.subtitle}
          </h3> */}
          <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-gray-300">
            {chooseUsSection.description}
          </p>
        </div>


        
      </div>
    </section>
  )
}
