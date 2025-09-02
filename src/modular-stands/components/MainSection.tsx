"use client";

import { getModularStandsData } from "@/data/modular-stands";
import type { ModularPointsTable } from "@/data/modular-stands";

interface MainSectionProps {
  pointsTableData: ModularPointsTable;
}

export default function MainSection({ pointsTableData }: MainSectionProps) {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div>
        <h2 className="text-2xl md:text-3xl text-justify font-bold text-gray-900 mb-8">
          {pointsTableData.title}
        </h2>
        <div 
          className="rich-content"
          dangerouslySetInnerHTML={{ __html: pointsTableData.content }}
        />
      </div>
    </section>
  );
}
