"use client";

import type { PointsTable } from "@/data/custom-stands";

interface MainSectionProps {
  pointsTableData: PointsTable;
}

export default function MainSection({ pointsTableData }: MainSectionProps) {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {pointsTableData.title}
        </h2>
        <div 
          className="rich-content space-y-4 text-gray-700"
          dangerouslySetInnerHTML={{ __html: pointsTableData.content }}
        />
      </div>
    </section>
  );
}