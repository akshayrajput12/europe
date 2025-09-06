import { Metadata } from 'next'
import { getAboutPageData, getAboutPageMeta } from '@/data/about-data'
import AboutUsPage from "@/about-us/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const metaData = await getAboutPageMeta()
    
    return {
      title: metaData.title,
      description: metaData.description,
      keywords: metaData.keywords,
      openGraph: {
        title: metaData.title,
        description: metaData.description,
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: metaData.title,
        description: metaData.description,
      },
    }
  } catch (error) {
    console.error('Error generating metadata for about page:', error)
    return {
      title: 'About Us - Exhibition Stand Builder Europe',
      description: 'Learn about our exhibition stand building services in Europe.',
    }
  }
}

export default async function Page() {
  // Fetch all about page data on the server with ISR
  const aboutData = await getAboutPageData()
  
  return <AboutUsPage data={aboutData} />
}