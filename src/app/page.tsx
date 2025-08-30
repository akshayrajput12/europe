import { Metadata } from 'next'
import { getHomeData } from '@/data/home'
import HomePage from "@/home/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const homeData = await getHomeData()
    
    return {
      title: 'Exhibition Stand Builder Europe | Chronicles Europe',
      description: 'Leading exhibition stand builder in Europe. Custom stands, modular solutions, and complete trade show services. 20+ years experience serving 1000+ clients.',
      keywords: 'exhibition stand builder, Europe, trade show booth, custom stands, modular stands, Germany, Poland',
      openGraph: {
        title: 'Exhibition Stand Builder Europe | Chronicles Europe',
        description: 'Leading exhibition stand builder in Europe. Custom stands, modular solutions, and complete trade show services.',
        type: 'website',
        images: [{
          url: homeData.hero.backgroundImage,
          width: 1200,
          height: 630,
          alt: 'Chronicles Europe Exhibition Stands',
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Exhibition Stand Builder Europe | Chronicles Europe',
        description: 'Leading exhibition stand builder in Europe. Custom stands, modular solutions, and complete trade show services.',
      },
    }
  } catch (error) {
    console.error('Error generating metadata for home page:', error)
    return {
      title: 'Exhibition Stand Builder Europe | Chronicles Europe',
      description: 'Leading exhibition stand builder in Europe.',
    }
  }
}

export default async function Page() {
  // Fetch all home page data on the server with ISR
  const homeData = await getHomeData()
  
  return <HomePage data={homeData} />
}
