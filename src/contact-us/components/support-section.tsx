import { contactData } from "@/data/contact-data"

export default function SupportSection() {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "design":
        return "🎨"
      case "submit":
        return "📋"
      case "phone":
        return "📞"
      default:
        return "💼"
    }
  }

  return (
    <section
      className="py-12 md:py-16 bg-[#F8F9FA] relative"
      style={{
        backgroundImage: `linear-gradient(rgba(248, 249, 250, 0.95), rgba(248, 249, 250, 0.95)), url(${contactData.support.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#1E293B]">{contactData.support.title}</h2>
        <p className="text-center text-[#64748B] mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          {contactData.support.description}
        </p>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {contactData.support.items.map((item, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 md:p-6 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl mb-4 text-[#A5CD39]">{getIcon(item.icon)}</div>
              <h3 className="text-lg md:text-xl font-bold mb-3 text-[#1E293B]">{item.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
