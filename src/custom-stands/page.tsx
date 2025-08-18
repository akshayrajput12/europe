import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CustomStandsPage() {
  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Custom Exhibition Stands
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored designs that perfectly represent your brand and meet your
            specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">
                Design Consultation
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Our expert designers work closely with you to understand your
                brand identity and exhibition goals.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">
                Custom Fabrication
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Premium materials and skilled craftsmanship ensure your stand is
                built to the highest standards.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <h3 className="text-xl font-bold text-gray-900">
                Installation & Support
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Complete installation service with on-site support throughout
                your exhibition.
              </p>
              <Button className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
