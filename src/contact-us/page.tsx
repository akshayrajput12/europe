import HeroSection from "./components/hero-section"
import ContactSection from "./components/contact-section"
import MapSection from "./components/map-section"
import OtherOfficesSection from "./components/other-offices-section"
import SupportSection from "./components/support-section"

export default function ContactUsPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactSection />
      <MapSection />
      <OtherOfficesSection />
      <SupportSection />
    </main>
  )
}
