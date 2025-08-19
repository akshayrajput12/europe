"use client";

import { portfolioData } from "@/data/portfolio";

type PortfolioSectionProps = {
  title?: string;
  subtitle?: string;
};

export default function PortfolioSection({ title, subtitle }: PortfolioSectionProps) {
  const { items, ctaText, ctaLink } = portfolioData;

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

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden"
            >
              {/* Image with hover zoom */}
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <h3 className="font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                  </div>
                </div>
              </div>
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
