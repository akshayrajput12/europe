"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPortfolioData } from "@/data/portfolio";

type PortfolioSectionProps = {
  title?: string;
  subtitle?: string;
};

export default function PortfolioSection({ title, subtitle }: PortfolioSectionProps) {
  const [portfolioData, setPortfolioData] = useState<Awaited<ReturnType<typeof getPortfolioData>> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const data = await getPortfolioData();
        setPortfolioData(data);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="relative aspect-[4/3] bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!portfolioData) {
    return null;
  }

  const { items, ctaText, ctaLink } = portfolioData;

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

        {/* Portfolio Grid - Show first 6 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] bg-gray-200 overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={`Portfolio image ${index + 1}`}
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