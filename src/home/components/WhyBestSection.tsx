import { homeData } from "@/data/home";

export default function WhyBestSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {homeData.whyBest.title}
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {homeData.whyBest.content.map((paragraph, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="text-lg text-gray-700 leading-relaxed">
                  {paragraph.split("**").map((part, partIndex) =>
                    partIndex % 2 === 1 ? (
                      <strong
                        key={partIndex}
                        className="text-secondary font-semibold"
                      >
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1200+</div>
              <div className="text-gray-600">Trade Shows</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
