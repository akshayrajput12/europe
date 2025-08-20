"use client";

import { useState, useEffect } from "react";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 for desktop
  const length = testimonialsData.length;

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 768) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Auto-slide every 5 seconds (move 1 card)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev >= length - visibleCards ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [length, visibleCards]);

  const nextSlide = () => {
    setCurrent((prev) => (prev >= length - visibleCards ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - visibleCards : prev - 1));
  };

  // Calculate the width of each card based on the number of visible cards
  const cardWidth = 100 / visibleCards;

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
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * cardWidth}%)`, // Shift by one card's width
            }}
          >
            {testimonialsData.map((testimonial: Testimonial, index) => (
              <div
                key={index}
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

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3">
                    {testimonial.text}
                  </p>

                  {/* Star Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#A5CD39] text-sm sm:text-base">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-1 sm:left-2 -translate-y-1/2 bg-white rounded-full shadow p-1 sm:p-2 hover:bg-gray-100 transition sm:flex hidden"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-1 sm:right-2 -translate-y-1/2 bg-white rounded-full shadow p-1 sm:p-2 hover:bg-gray-100 transition sm:flex hidden"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        {length > visibleCards && (
          <div className="flex justify-center mt-3 sm:mt-4 space-x-1 sm:space-x-2">
            {Array.from({ length: length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition ${
                  current === index ? "bg-[#A5CD39]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}