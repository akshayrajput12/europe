import { Metadata } from 'next'
import { getPavilionData, PAVILION_HERO_BG_IMAGE } from '@/data/pavilionData'
import PavilionPage from "@/exhibition-pavilion/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const pavilionData = await getPavilionData()
    
    return {
      title: pavilionData.meta.title,
      description: pavilionData.meta.description,
      keywords: 'exhibition pavilion design, pavilion stands, trade show pavilion, exhibition design',
      openGraph: {
        title: pavilionData.meta.title,
        description: pavilionData.meta.description,
        type: 'website',
        images: [{
          url: PAVILION_HERO_BG_IMAGE, // Use constant instead of database value
          width: 1200,
          height: 630,
          alt: 'Exhibition Pavilion Design',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: pavilionData.meta.title,
        description: pavilionData.meta.description,
      },
    }
  } catch (error) {
    console.error('Error generating metadata for pavilion design page:', error)
    return {
      title: 'Exhibition Pavilion Design & Build Services',
      description: 'Professional exhibition pavilion design and build services.',
    }
  }
}

export default async function Page() {
  // Fetch all pavilion design page data on the server with ISR
  const pavilionData = await getPavilionData()
  
  return <PavilionPage data={pavilionData} />
}