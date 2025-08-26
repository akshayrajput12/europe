import { contactData } from "@/data/contact-data"

export default function OtherOfficesSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#1E293B]">
          {contactData.otherOffices.title}
        </h2>

        <div className="max-w-2xl mx-auto">
          {contactData.otherOffices.offices.map((office, index) => (
            <div
              key={index}
              className="bg-[#1E293B] text-white p-6 md:p-8 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white text-black p-4 md:p-6 rounded-lg">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#1E293B]">{office.name}</h3>
                <div className="space-y-3 text-[#64748B]">
                  <p className="text-sm md:text-base leading-relaxed">{office.address}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[#A5CD39]">📞</span>
                    <a
                      href={`tel:${office.phone.replace(/\s/g, "")}`}
                      className="hover:text-[#A5CD39] transition-colors text-sm md:text-base"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#A5CD39]">✉️</span>
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-[#A5CD39] transition-colors text-sm md:text-base"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#A5CD39]">🌐</span>
                    <a
                      href={`https://${office.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#A5CD39] hover:text-[#8fb32e] transition-colors text-sm md:text-base"
                    >
                      {office.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
