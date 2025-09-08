import { TestimonialsPageData } from "@/data/testimonials"
import HeroSection from "./components/HeroSection"
import IntroSection from "./components/IntroSection"
import ReviewsSection from "./components/ReviewsSection"

interface ReviewPageProps {
  data: TestimonialsPageData
}

export default function ReviewPage({ data }: ReviewPageProps) {
  return (
    <main className="min-h-screen">
      <HeroSection heroData={data.hero} />
      <IntroSection introData={data.intro} />
      <ReviewsSection testimonials={data.testimonials} />
    </main>
  )
}