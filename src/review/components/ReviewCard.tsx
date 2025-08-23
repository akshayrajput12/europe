import type { Testimonial } from "@/data/testimonials"
import Image from "next/image"

interface ReviewCardProps {
  review: Testimonial
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 md:p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <Image
              src={review.logo || "/placeholder.svg"}
              alt={review.company}
              width={80}
              height={80}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>

        {/* Review Content */}
        <div className="flex-1">
          {/* Quote Icon */}
          <div className="text-slate-400 text-4xl font-serif mb-4">&ldquo;</div>

          {/* Client Info */}
          <div className="mb-4">
            {/* Client Name */}
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1">{review.name}</h3>
            {/* Star Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-base ${i < (review.rating || 5) ? "text-[#A5CD39]" : "text-slate-400"}`}>
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Review Text */}
          <p className="text-slate-500 leading-relaxed text-sm md:text-base">{review.text}</p>
        </div>
      </div>
    </div>
  )
}
