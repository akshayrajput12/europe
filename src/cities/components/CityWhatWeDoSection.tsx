import { WhatWeDo } from "@/data/cities"

interface CityWhatWeDoSectionProps {
  data: WhatWeDo
}

export default function CityWhatWeDoSection({ data }: CityWhatWeDoSectionProps) {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="text-slate-800">WHAT </span>
            <span className="text-[#A5CD39]">WE </span>
            <span className="text-slate-800">DO?</span>
          </h2>
          <div 
            className="rich-content text-gray-600 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        </div>
      </div>
    </section>
  )
}