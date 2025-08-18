import { homeData } from "@/data/home";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CountriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Countries We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide exhibition stand services across Europe and beyond
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {homeData.countries.map((country, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">
                    {country.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900">{country}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 font-semibold"
          >
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
}
