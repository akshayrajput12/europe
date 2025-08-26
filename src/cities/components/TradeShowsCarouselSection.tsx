"use client";

import { useState, useEffect } from "react";
import { tradeShowData, TradeShow } from "@/data/trade-shows";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface TradeShowsCarouselSectionProps {
  cityName: string;
}

export default function TradeShowsCarouselSection({ cityName }: TradeShowsCarouselSectionProps) {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // Default to 3 for desktop
  
  // Filter shows to only include those from the city
  const cityShows = tradeShowData.shows.filter(show => 
    show.city.toLowerCase() === cityName.toLowerCase()
  );
  
  // Only use city-specific shows, don't fall back to generic shows
  const shows = cityShows;
  const length = shows.length;

  // Update visible cards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // If no shows for this city, don't render the section
  if (length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev >= length - visibleCards ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - visibleCards : prev - 1));
  };

  // Calculate the width of each card based on the number of visible cards
  const cardWidth = 100 / visibleCards;

  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Popular Trade Shows in <span className="text-[#A5CD39]">{cityName}</span>
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * cardWidth}%)`,
            }}
          >
            {shows.map((show: TradeShow, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
              >
                <div className="flex flex-col h-full">
                  {/* Trade Show Image & Logo */}
                  <div className="relative bg-black w-full aspect-[4/3] rounded-t-lg overflow-hidden mb-0">
                    <div className="flex items-center justify-center h-full">
                      {show.logo && (
                        <div className="relative w-24 h-24 md:w-32 md:h-32 z-10">
                          <Image
                            src={show.logo}
                            alt={show.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full p-4 text-center text-white">
                      <h3 className="font-bold text-lg md:text-xl">
                        {show.title.toUpperCase()}
                      </h3>
                      <p className="text-sm md:text-base mt-1">
                        {show.startDate.split("-")[2]} – {show.endDate.split("-")[2]} {getMonthName(show.startDate)} {show.startDate.split("-")[0]}
                      </p>
                      <p className="text-sm mt-1">
                        {show.city}, {show.country}
                      </p>
                    </div>
                  </div>
                  
                  {/* Trade Show Info & CTA */}
                  <div className="bg-gray-200 p-6 rounded-b-lg text-center flex-grow">
                    <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1">
                      {show.title.toUpperCase()}
                    </h3>
                    <p className="text-sm md:text-base mb-2">
                      {show.startDate.split("-")[2]} – {show.endDate.split("-")[2]} {getMonthName(show.startDate)} {show.startDate.split("-")[0]}
                    </p>
                    <p className="text-sm mb-4">
                      {show.city}, {show.country}
                    </p>
                    
                    <Link 
                      href={`/trade-shows/${show.slug}`}
                      className="inline-block bg-[#A5CD39] hover:bg-[#8fb32e] text-white font-medium py-2 px-6 rounded text-sm transition-colors"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev Button */}
          {length > visibleCards && (
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 left-1 md:left-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition hidden sm:flex"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
          )}

          {/* Next Button */}
          {length > visibleCards && (
            <button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 right-1 md:right-4 bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition hidden sm:flex"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          )}
        </div>

        {/* Dots Navigation */}
        {length > visibleCards && (
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: length - visibleCards + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  current === index ? "bg-[#A5CD39]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-10">
          <Link
            href="/trade-shows"
            className="inline-block bg-[#A5CD39] hover:bg-[#8fb32e] text-white font-medium py-2 px-8 rounded transition-colors"
          >
            View All Trade Shows
          </Link>
        </div>
      </div>
    </section>
  );
}

// Helper function to get month name from date string
function getMonthName(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', { month: 'long' });
}