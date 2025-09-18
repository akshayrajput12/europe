import type { Metadata } from 'next'
import { getTermsPageData } from '@/lib/database'
import { notFound } from 'next/navigation'

// ISR Configuration - Revalidate every 30 minutes
export const revalidate = 1800

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const termsData = await getTermsPageData()
    
    if (!termsData) {
      return {
        title: 'Terms and Conditions - Chronicles Europe',
        description: 'Read the terms and conditions governing the use of Chronicles Europe website and services.',
        keywords: 'terms and conditions, user agreement, website terms, service terms, legal agreement',
      }
    }
    
    return {
      title: termsData.meta_title,
      description: termsData.meta_description,
      keywords: termsData.meta_keywords,
    }
  } catch (error) {
    console.error('Error generating metadata for terms page:', error)
    return {
      title: 'Terms and Conditions - Chronicles Europe',
      description: 'Read the terms and conditions governing the use of Chronicles Europe website and services.',
      keywords: 'terms and conditions, user agreement, website terms, service terms, legal agreement',
    }
  }
}

export default async function TermsPage() {
  const termsData = await getTermsPageData()
  
  if (!termsData) {
    notFound()
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rich-content"
          dangerouslySetInnerHTML={{ __html: termsData.content }}
        />
      </div>
    </main>
  )
}