import { WhatWeDo } from "@/data/countries"

interface WhatWeDoSectionProps {
  data: WhatWeDo
}

export default function WhatWeDoSection({ data }: WhatWeDoSectionProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 -mx-4 px-4">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="text-slate-800">WHAT </span>
            <span className="text-[#A5CD39]">WE </span>
            <span className="text-slate-800">DO?</span>
          </h2>
          <p className="text-gray-600 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed px-2 sm:px-4 md:px-0">
            {data.description}
          </p>
        </div>
      </div>
    </section>
  )
}