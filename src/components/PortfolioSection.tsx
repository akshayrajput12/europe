"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";

type PortfolioSectionProps = {
  title?: string;
  subtitle?: string;
};

export default function PortfolioSection({ title, subtitle }: PortfolioSectionProps) {
  const { items, ctaText, ctaLink } = portfolioData;

  // Filter only featured items for display
  const featuredItems = items.filter(item => item.featured);

  // ✅ If no props are passed, section header is hidden
  const showTitle = title ?? null;
  const showSubtitle = subtitle ?? null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header (only shows if props passed) */}
        {(showTitle || showSubtitle) && (
          <div className="text-center mb-12">
            {showTitle && (
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {showTitle}
              </h2>
            )}
            {showSubtitle && (
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {showSubtitle}
              </p>
            )}
          </div>
        )}

        {/* Portfolio Grid - Only Featured Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="text-center mt-12">
            <a
              href={ctaLink}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
