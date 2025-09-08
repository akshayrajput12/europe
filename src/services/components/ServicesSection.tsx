import Image from "next/image"
import { servicesData } from "@/data/services"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  // Static icon mapping based on service IDs
  const getServiceIcon = (serviceId: string) => {
    const iconMap: { [key: string]: string } = {
      "graphic-production": "/services icon/Graphic Production.png",
      "project-management": "/services icon/Project Management.png",
      "installation": "/services icon/Installaton, Dismantle & Shipping.png",
      "booth-design": "/services icon/Trade Show Booth Design.png",
      "booth-construction": "/services icon/Booth Construction & Custom Fabrication.png",
      "site-supervision": "/services icon/On Site Supervision.png"
    }
    return iconMap[serviceId] || "/services icon/Graphic Production.png" // fallback
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg max-w-4xl mx-auto text-slate-700">
            {servicesData.introText}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded shadow-sm">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 relative group">
                  <Image
                    src={getServiceIcon(service.id)}
                    alt={service.title}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-slate-700 text-center mb-4">
                {service.description}
              </p>
              <div className="flex justify-center">
                <Button
                  className="bg-[#A5CD39] hover:bg-[#8fb32e] text-white px-8"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}