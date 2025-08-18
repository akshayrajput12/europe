import { homeData } from "@/data/home";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {homeData.solutions.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {homeData.solutions.subtitle}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeData.solutions.items.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[16/9] bg-gray-200 relative overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                />
              </div>
              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors"
                  asChild
                >
                  <Link href={item.link}>LEARN MORE</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
