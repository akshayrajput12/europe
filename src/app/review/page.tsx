import { Metadata } from 'next'
import { getTestimonialsPageData, getTestimonialsPageMeta, TESTIMONIALS_HERO_BACKGROUND_IMAGE } from '@/data/testimonials'
import ReviewPageClient from "@/review/page"

// ISR Configuration - Revalidate every month (30 days)
export const revalidate = 2592000; // 30 days in seconds

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const metaData = await getTestimonialsPageMeta()
    
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
    console.error('Error generating metadata for testimonials page:', error)
    return {
      title: 'Client Testimonials - Exhibition Stand Builder Europe',
      description: 'Read testimonials from our satisfied clients across Europe.',
    }
  }
}

export default async function Page() {
  // Fetch all testimonials page data on the server with ISR
  const testimonialsData = await getTestimonialsPageData()
  
  // Override hero background image with our constant
  const testimonialsDataWithConstantImage = {
    ...testimonialsData,
    hero: {
      ...testimonialsData.hero,
      image: TESTIMONIALS_HERO_BACKGROUND_IMAGE
    }
  }
  
  return <ReviewPageClient data={testimonialsDataWithConstantImage} />
}