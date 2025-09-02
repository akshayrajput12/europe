import { Metadata } from 'next'
import { getDoubleDeckerStandsData } from '@/data/double-decker-stands'
import DoubleDeckPage from "@/double-decker-stands/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const doubleDeckerStandsData = await getDoubleDeckerStandsData()
    
    return {
      title: doubleDeckerStandsData.meta.title,
      description: doubleDeckerStandsData.meta.description,
      keywords: 'double decker exhibition stands, exhibition stand design, trade show booth, two-story stands',
      openGraph: {
        title: doubleDeckerStandsData.meta.title,
        description: doubleDeckerStandsData.meta.description,
        type: 'website',
        images: [{
          url: doubleDeckerStandsData.hero.backgroundImage,
          width: 1200,
          height: 630,
          alt: 'Double Decker Exhibition Stands',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: doubleDeckerStandsData.meta.title,
        description: doubleDeckerStandsData.meta.description,
      },
    }
  } catch (error) {
    console.error('Error generating metadata for double decker stands page:', error)
    return {
      title: 'Double Decker Exhibition Stands Design & Build Services',
      description: 'Professional double decker exhibition stand design and build services.',
    }
  }
}

export default async function Page() {
  // Fetch all double decker stands page data on the server with ISR
  const doubleDeckerStandsData = await getDoubleDeckerStandsData()
  
  return <DoubleDeckPage data={doubleDeckerStandsData} />
}