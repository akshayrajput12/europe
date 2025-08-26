"use client";

import Image from "next/image";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
        {/* Section Header (only shows if props passed) */
        }
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
              className="relative aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {ctaText && ctaLink && (
          <div className="text-center mt-12">
            <Link href={ctaLink}>
              <Button 
                size="lg"
                className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
              >
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}