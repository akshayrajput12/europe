"use client";

import type { Testimonial } from "@/data/testimonials"
import ReviewCard from "./ReviewCard"

interface ReviewsSectionProps {
  testimonials: Testimonial[]
}

export default function ReviewsSection({ testimonials }: ReviewsSectionProps) {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {testimonials.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}