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

            <div 
              className="rich-content space-y-6 text-slate-700"
              dangerouslySetInnerHTML={{ __html: data.benefits }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}