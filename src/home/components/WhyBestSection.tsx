"use client";

import { homeData } from "@/data/home";

export default function WhyBestSection() {
  const { title, subtitle, content } = homeData.whyBest;

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            {title}
            <br />
            <span className="text-[#A5CD39]">{subtitle}</span>
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <div className="text-gray-700 leading-relaxed text-base md:text-lg space-y-6">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}