import { Metadata } from 'next'
import { getCustomStandsData, CUSTOM_STANDS_HERO_BG_IMAGE } from '@/data/custom-stands'
import CustomStandsPage from "@/custom-booth-design-and-build/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const customStandsData = await getCustomStandsData()
    
    return {
      title: customStandsData.meta.title,
      description: customStandsData.meta.description,
      keywords: 'custom exhibition stands, exhibition stand design, trade show booth, bespoke stands',
      openGraph: {
        title: customStandsData.meta.title,
        description: customStandsData.meta.description,
        type: 'website',
        images: [{
          url: CUSTOM_STANDS_HERO_BG_IMAGE, // Use constant instead of database value
          width: 1200,
          height: 630,
          alt: 'Custom Exhibition Stands',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: customStandsData.meta.title,
        description: customStandsData.meta.description,
      },
    }
  } catch (error) {
    console.error('Error generating metadata for custom stands page:', error)
    return {
      title: 'Custom Exhibition Stands Design & Build Services',
      description: 'Professional custom exhibition stand design and build services.',
    }
  }
}

export default async function Page() {
  // Fetch all custom stands page data on the server with ISR
  const customStandsData = await getCustomStandsData()
  
  return <CustomStandsPage data={customStandsData} />
}