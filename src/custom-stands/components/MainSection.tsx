"use client";

import { customStandsData } from "@/data/custom-stands";

export default function MainSection() {
  const { pointsTable } = customStandsData;

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {pointsTable.title}
        </h2>

        <div className="space-y-6 mb-8 text-justify">
          {pointsTable.items.map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div
                className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: "#A5CD39" }}
              />
              <p className="text-gray-700 leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {pointsTable.descriptions.map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-700 leading-relaxed text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
