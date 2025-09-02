"use client"

import Image from "next/image"
import type { ExhibitionBenefits } from "@/data/modular-stands"

interface ExhibitionBenefitsProps {
  exhibitionBenefitsData: ExhibitionBenefits
}

export default function ExhibitionBenefitsSection({ exhibitionBenefitsData }: ExhibitionBenefitsProps) {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">
              {exhibitionBenefitsData.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {exhibitionBenefitsData.subtitle}
            </p>
            <div 
              className="rich-content"
              dangerouslySetInnerHTML={{ __html: exhibitionBenefitsData.content }}
            />
          </div>

          {/* Image Section */}
          <div className="order-first lg:order-last group">
            <Image
              src={exhibitionBenefitsData.image || "/placeholder.svg"}
              alt="Exhibition Stand Benefits"
              width={500}
              height={300}
              className="w-full h-auto rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}