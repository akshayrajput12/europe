import type { Metadata } from 'next'
import { getPrivacyPageData } from '@/lib/database'
import { notFound } from 'next/navigation'

// ISR Configuration - Revalidate every 30 minutes
export const revalidate = 1800

// Generate metadata for SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const privacyData = await getPrivacyPageData()
    
    if (!privacyData) {
      return {
        title: 'Privacy Policy - Chronicles Europe',
        description: 'Learn how Chronicles Europe collects, uses, and protects your personal information.',
        keywords: 'privacy policy, data protection, personal information, GDPR',
      }
    }
    
    return {
      title: privacyData.meta_title,
      description: privacyData.meta_description,
      keywords: privacyData.meta_keywords,
    }
  } catch (error) {
    console.error('Error generating metadata for privacy page:', error)
    return {
      title: 'Privacy Policy - Chronicles Europe',
      description: 'Learn how Chronicles Europe collects, uses, and protects your personal information.',
      keywords: 'privacy policy, data protection, personal information, GDPR',
    }
  }
}

export default async function PrivacyPage() {
  const privacyData = await getPrivacyPageData()
  
  if (!privacyData) {
    notFound()
  }
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div 
          className="rich-content"
          dangerouslySetInnerHTML={{ __html: privacyData.content }}
        />
      </div>
    </main>
  )
}