import type { Testimonial } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// TestimonialsSection component that receives data as props for better performance
export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null; // Don't show section if no testimonials
  }

  // For the slider, we'll show 3 cards by default
  const visibleCards = 3;
  
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-gray-50 relative">
      <div className="container mx-auto px-2 sm:px-4 text-center">
        <p className="text-gray-600 mb-3 text-xs sm:text-sm uppercase tracking-wider">
          TESTIMONIALS
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">
          OUR <span className="text-[#A5CD39]">HAPPY</span> CLIENTS
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides Wrapper */}
          <div className="flex transition-transform duration-700 ease-in-out">
            {testimonials.slice(0, Math.min(visibleCards, testimonials.length)).map((testimonial: Testimonial) => (
              <div
                key={testimonial.id}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-1 sm:px-2"
              >
                <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 flex flex-col items-center h-full">
                  {/* Company Logo */}
                  <div className="mb-3 sm:mb-4 flex justify-center">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      {testimonial.logo ? (
                        <Image
                          src={testimonial.logo}
                          alt={testimonial.company}
                          fill
                          className="object-contain p-2 sm:p-3"
                        />
                      ) : null}
                    </div>
                  </div>

                  {/* Client Name */}
                  <h4 className="font-bold text-sm sm:text-base md:text-lg mb-2 text-slate-800">
                    {testimonial.name}
                  </h4>

                  {/* Company Name */}
                  <p className="text-gray-600 text-xs mb-2">
                    {testimonial.company}
                  </p>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                    {testimonial.text}
                  </p>

                  {/* Star Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-sm sm:text-base ${i < (testimonial.rating || 5) ? "text-[#A5CD39]" : "text-gray-300"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons - only show if we have more testimonials than visible cards */}
          {testimonials.length > visibleCards && (
            <>
              <button
                className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 bg-white rounded-full shadow p-1 sm:p-2 hover:bg-gray-100 transition sm:flex hidden"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
              <button
                className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 bg-white rounded-full shadow p-1 sm:p-2 hover:bg-gray-100 transition sm:flex hidden"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
              </button>
            </>
          )}
        </div>

        {/* Dots Navigation - only show if we have more testimonials than visible cards */}
        {testimonials.length > visibleCards && (
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
            <button
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition bg-[#A5CD39]"
            />
            {Array.from({ length: Math.min(4, testimonials.length - visibleCards) }).map((_, index) => (
              <button
                key={index}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition bg-gray-300"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}