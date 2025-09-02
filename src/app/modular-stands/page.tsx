import { Metadata } from 'next'
import { getModularStandsData } from '@/data/modular-stands'
import ModularStandsPage from "@/modular-stands/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const modularStandsData = await getModularStandsData()
    
    return {
      title: modularStandsData.meta.title,
      description: modularStandsData.meta.description,
      keywords: 'modular exhibition stands, exhibition stand design, trade show booth, reusable stands',
      openGraph: {
        title: modularStandsData.meta.title,
        description: modularStandsData.meta.description,
        type: 'website',
        images: [{
          url: modularStandsData.hero.backgroundImage,
          width: 1200,
          height: 630,
          alt: 'Modular Exhibition Stands',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: modularStandsData.meta.title,
        description: modularStandsData.meta.description,
      },
    }
  } catch (error) {
    console.error('Error generating metadata for modular stands page:', error)
    return {
      title: 'Modular Exhibition Stands Design & Build Services',
      description: 'Professional modular exhibition stand design and build services.',
    }
  }
}

export default async function Page() {
  // Fetch all modular stands page data on the server with ISR
  const modularStandsData = await getModularStandsData()
  
  return <ModularStandsPage data={modularStandsData} />
}