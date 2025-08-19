"use client";

import { useState, useEffect } from "react";
import { testimonialsData, Testimonial } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  // Auto-slide every 5 sec (move 1 card)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 mb-4 text-sm md:text-base uppercase tracking-wider">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
          OUR <span className="text-[#A5CD39]">HAPPY</span> CLIENTS
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / 3)}%)`, // shift by 1 card
            }}
          >
            {testimonialsData.map((testimonial: Testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center h-full">
                  {/* Company Logo */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-28 h-28 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
                      {testimonial.logo ? (
                        <img
                          src={testimonial.logo}
                          alt={testimonial.company}
                          className="object-contain w-full h-full p-4"
                        />
                      ) : (
                        <span className="text-gray-600 font-semibold text-sm">
                          {testimonial.company}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Client Name */}
                  <h4 className="font-bold text-lg mb-3 text-slate-800">
                    {testimonial.name}
                  </h4>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 text-base leading-relaxed mb-4">
                    {testimonial.text}
                  </p>

                  {/* Star Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#A5CD39] text-lg">
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
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index ? "bg-[#A5CD39]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
