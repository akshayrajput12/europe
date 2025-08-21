import { testimonialsData } from "@/data/testimonials"
import ReviewCard from "./ReviewCard"

export default function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {testimonialsData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
