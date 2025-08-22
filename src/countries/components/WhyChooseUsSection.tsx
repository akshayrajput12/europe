import { WhyChooseUs as WhyChooseUsType } from "@/data/countries"
import Image from "next/image"

interface WhyChooseUsSectionProps {
  data: WhyChooseUsType
}

export default function WhyChooseUsSection({ data }: WhyChooseUsSectionProps) {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Image */}
          <div className="lg:pr-8">
            <div className="relative w-full h-[400px] rounded-sm overflow-hidden">
              <Image
                src={data.mainImage}
                alt="Exhibition stand"
                fill
                className="object-cover"
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
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              We are more than just exhibition stand builders in {data.subtitle.toLowerCase()}, we are your gateway to success
            </p>

            <div className="space-y-6">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#A5CD39] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <p className="text-slate-700 font-medium">
                      {benefit.title}
                    </p>
                    {benefit.description && (
                      <p className="text-slate-600 text-sm mt-1">
                        {benefit.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}