import HeroSection from "./components/hero-section"
import ContactSection from "./components/contact-section"
import MapSection from "./components/map-section"
import OtherOfficesSection from "./components/other-offices-section"
import SupportSection from "./components/support-section"
import { initializeContactData } from "@/data/contact-data"
import { getContactPageData } from "@/lib/database"
import type { Metadata } from 'next'

// Export for ISR
export const dynamic = 'force-dynamic'
// Revalidate every 24 hours
export const revalidate = 86400

// Metadata generation for SEO
export async function generateMetadata(): Promise<Metadata> {
  const dbData = await getContactPageData()
  
  if (!dbData) {
    return {
      title: 'Contact Us - Exhibition Stand Solutions',
      description: 'Get in touch with us for exhibition stand design, construction, and project management services.',
    }
  }

  return {
    title: dbData.meta.title,
    description: dbData.meta.description,
    keywords: dbData.meta.keywords,
  }
}

// Initialize the contact data when the page loads
export default async function ContactUsPage() {
  // Initialize the dynamic contact data
  await initializeContactData()
  
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