import { contactData } from "@/data/contact-data"

export default function MapSection() {
  return (
    <section className="py-0">
      <div className="w-full h-64 md:h-96">
        <iframe
          src={contactData.map.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location Map"
        ></iframe>
      </div>
    </section>
  )
}