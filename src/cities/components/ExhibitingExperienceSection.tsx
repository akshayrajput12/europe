import { ExhibitingExperience } from "@/data/cities";

interface ExhibitingExperienceSectionProps {
  data: ExhibitingExperience;
}

export default function ExhibitingExperienceSection({ data }: ExhibitingExperienceSectionProps) {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              {data.title}
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#A5CD39]">
              {data.subtitle}
            </h3>
          </div>

          {/* Benefits List */}
          <div className="space-y-4 mb-12">
            {data.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 flex-shrink-0">○</div>
                <div 
                  className="rich-content text-slate-700 text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: benefit }}
                />
              </div>
            ))}
          </div>

          {/* Excellence Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
              {data.excellence.title} <span className="text-[#A5CD39]">{data.excellence.subtitle}</span>
            </h2>
          </div>

          {/* Excellence Points */}
          <div className="space-y-4">
            {data.excellence.points.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="text-[#A5CD39] mt-1 flex-shrink-0">○</div>
                <div 
                  className="rich-content text-slate-700 text-sm md:text-base"
                  dangerouslySetInnerHTML={{ __html: point }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}