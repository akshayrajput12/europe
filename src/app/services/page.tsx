import HeroSection from "@/services/components/HeroSection"
import ServicesSection from "@/services/components/ServicesSection"
import ContactSection from "@/components/ContactSection"
import { servicesData } from "@/data/services"
import type { Metadata } from 'next'

// Static metadata generation for SEO
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Our Services - Exhibition Stand Builder',
    description: 'Discover our comprehensive range of exhibition stand services including design, construction, installation, and project management.',
    keywords: 'exhibition services, stand design, booth construction, trade show services, project management',
  }
}

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection data={servicesData} />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}