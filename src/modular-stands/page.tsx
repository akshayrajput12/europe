import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ModularStandsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Modular Exhibition Stands
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible and reusable stand systems that adapt to different spaces
            and requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">
                Flexible Design
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Modular components that can be reconfigured for different
                exhibition spaces and layouts.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">
                Cost Effective
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Reusable components reduce costs while maintaining professional
                appearance and functionality.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">Quick Setup</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Easy assembly and disassembly for efficient exhibition setup and
                teardown.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
