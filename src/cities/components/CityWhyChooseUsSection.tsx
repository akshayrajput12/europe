import { WhyChooseUs } from "@/data/cities"
import Image from "next/image"

interface CityWhyChooseUsSectionProps {
  data: WhyChooseUs
}

export default function CityWhyChooseUsSection({ data }: CityWhyChooseUsSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Image */}
          <div className="lg:pr-8">
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden group">
              <Image
                src={data.mainImage}
                alt="Exhibition stand"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              {data.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#A5CD39] mb-8">
              {data.subtitle}
            </h3>
            <div className="space-y-4">
              <p className="text-slate-700 leading-relaxed">
                {data.benefits[0]?.text}
              </p>
            </div>
          </div>
        </div>
        
        {/* Gray line at section ending */}
        <div className="mt-12 border-b border-gray-300"></div>
      </div>
    </section>
  )
}