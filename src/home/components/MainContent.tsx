import { homeData } from "@/data/home";
import { Button } from "@/components/ui/button";

export default function MainContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${homeData.mainContent.image})`,
                }}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg opacity-20"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {homeData.mainContent.title}
            </h2>

            <div className="space-y-4">
              {homeData.mainContent.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg text-gray-600 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4">
              <Button
                size="lg"
                className="bg-secondary text-white hover:bg-secondary/90 px-8 py-3 text-lg font-semibold"
              >
                {homeData.mainContent.ctaButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
