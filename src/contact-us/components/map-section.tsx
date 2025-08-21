import { contactData } from "@/data/contact-data"

export default function MapSection() {
  return (
    <section className="py-0 relative">
      <div
        className="w-full h-64 md:h-96 bg-gray-200 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${contactData.map.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2432.5!2d15.2!3d52.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDI0JzAwLjAiTiAxNcKwMTInMDAuMCJF!5e0!3m2!1sen!2spl!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0, opacity: 0.8 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
          className="hover:opacity-100 transition-opacity duration-300"
        ></iframe>

        {/* Overlay for better visual integration */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </section>
  )
}
