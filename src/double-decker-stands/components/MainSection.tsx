"use client";

import type { PointsTableData } from "@/data/double-decker-stands";

interface MainSectionProps {
  pointsTableData: PointsTableData;
}

export default function MainSection({ pointsTableData }: MainSectionProps) {
  const { title, content } = pointsTableData;

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl text-justify font-bold text-gray-900 mb-8">
          {title}
        </h2>

        <div 
          className="rich-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}