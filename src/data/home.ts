import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Interfaces for strong typing
export interface Hero {
  backgroundImage: string
  backgroundImageAlt?: string
}

export interface MainSection {
  title: string
  subtitle: string
  htmlContent: string // Changed from description to htmlContent
}

export interface Exhibition {
  title: string
  subtitle?: string
  boothImage?: string
  boothImageAlt?: string
  htmlContent: string // Unified to HTML content only
}

export interface SolutionItem {
  title: string
  description: string
  image: string
  alt?: string
}

export interface Solutions {
  title: string
  htmlContent: string // Changed from subtitle to htmlContent
  items: SolutionItem[]
  itemsAlt?: string[]
}

export interface WhyBest {
  title: string
  subtitle: string
  htmlContent: string // Changed from content array to htmlContent
}

export interface HomeData {
  hero: Hero
  mainSection: MainSection
  exhibitionData: {
    [key: string]: Exhibition // e.g., 'europe', 'usa'
  }
  solutions: Solutions
  whyBest: WhyBest
}

// Main function to get home data from database (NO FALLBACK DATA)
export async function getHomeData(): Promise<HomeData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Fetch data directly from the home_page table
    const { data, error } = await client
      .from('home_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching home data:', error)
      throw new Error('Failed to fetch home data from database: ' + error.message)
    }
    
    if (!data) {
      console.error('No home data found in database')
      throw new Error('No home data available in database')
    }
    
    // Transform database columns to match TypeScript interfaces
    const homeData: HomeData = {
      hero: {
        backgroundImage: data.hero_background_image || '',
        backgroundImageAlt: data.hero_background_image_alt || ''
      },
      mainSection: {
        title: data.main_title || '',
        subtitle: data.main_subtitle || '',
        htmlContent: data.main_html_content || ''
      },
      exhibitionData: {
        europe: {
          title: data.exhibition_europe_title || '',
          subtitle: data.exhibition_europe_subtitle || '',
          boothImage: data.exhibition_europe_booth_image || '',
          boothImageAlt: data.exhibition_europe_booth_image_alt || '',
          htmlContent: data.exhibition_europe_html_content || ''
        },
        usa: {
          title: data.exhibition_usa_title || '',
          htmlContent: data.exhibition_usa_html_content || ''
        }
      },
      solutions: {
        title: data.solutions_title || '',
        htmlContent: data.solutions_html_content || '',
        items: data.solutions_items || [],
        itemsAlt: data.solutions_items_alt || []
      },
      whyBest: {
        title: data.why_best_title || '',
        subtitle: data.why_best_subtitle || '',
        htmlContent: data.why_best_html_content || ''
      }
    }
    
    return homeData
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

// Remove static initialization - components will fetch data directly

// Function to get individual section data (from single home page record)
export async function getHomeSectionData(sectionName: string): Promise<unknown> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { data, error } = await client
      .from('home_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error || !data) {
      console.error(`Error fetching home page data:`, error)
      throw new Error(`Failed to fetch ${sectionName} data from database`)
    }
    
    // Return specific section data based on sectionName
    switch (sectionName) {
      case 'hero':
        return {
          backgroundImage: data.hero_background_image,
          backgroundImageAlt: data.hero_background_image_alt
        }
      case 'mainSection':
        return {
          title: data.main_title,
          subtitle: data.main_subtitle,
          htmlContent: data.main_html_content
        }
      case 'exhibitionEurope':
        return {
          title: data.exhibition_europe_title,
          subtitle: data.exhibition_europe_subtitle,
          boothImage: data.exhibition_europe_booth_image,
          boothImageAlt: data.exhibition_europe_booth_image_alt,
          htmlContent: data.exhibition_europe_html_content
        }
      case 'exhibitionUsa':
        return {
          title: data.exhibition_usa_title,
          htmlContent: data.exhibition_usa_html_content
        }
      case 'solutions':
        return {
          title: data.solutions_title,
          htmlContent: data.solutions_html_content,
          items: data.solutions_items,
          itemsAlt: data.solutions_items_alt
        }
      case 'whyBest':
        return {
          title: data.why_best_title,
          subtitle: data.why_best_subtitle,
          htmlContent: data.why_best_html_content
        }
      default:
        throw new Error(`Unknown section: ${sectionName}`)
    }
  } catch (error) {
    console.error(`Unexpected error fetching ${sectionName} data:`, error)
    throw error
  }
}