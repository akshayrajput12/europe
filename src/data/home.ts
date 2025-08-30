import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Interfaces for strong typing
export interface Hero {
  backgroundImage: string
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
  htmlContent: string // Unified to HTML content only
}

export interface SolutionItem {
  title: string
  description: string
  image: string
}

export interface Solutions {
  title: string
  htmlContent: string // Changed from subtitle to htmlContent
  items: SolutionItem[]
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
        backgroundImage: data.hero_background_image || ''
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
        items: data.solutions_items || []
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
export async function getHomeSectionData(sectionName: string): Promise<any> {
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
          backgroundImage: data.hero_background_image
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
          items: data.solutions_items
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

// Function to update section data (for admin use) - works with single row
export async function updateHomeSectionData(
  sectionName: string,
  sectionData: any
): Promise<boolean> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Use direct table updates instead of RPC functions
    let updateData: any = {}
    
    switch (sectionName) {
      case 'hero':
        updateData.hero_background_image = sectionData.backgroundImage
        break
      case 'mainSection':
        updateData.main_title = sectionData.title
        updateData.main_subtitle = sectionData.subtitle
        updateData.main_html_content = sectionData.htmlContent
        break
      case 'exhibitionEurope':
        updateData.exhibition_europe_title = sectionData.title
        updateData.exhibition_europe_subtitle = sectionData.subtitle
        updateData.exhibition_europe_booth_image = sectionData.boothImage
        updateData.exhibition_europe_html_content = sectionData.htmlContent
        break
      case 'exhibitionUsa':
        updateData.exhibition_usa_title = sectionData.title
        updateData.exhibition_usa_html_content = sectionData.htmlContent
        break
      case 'solutions':
        updateData.solutions_title = sectionData.title
        updateData.solutions_html_content = sectionData.htmlContent
        updateData.solutions_items = sectionData.items
        break
      case 'whyBest':
        updateData.why_best_title = sectionData.title
        updateData.why_best_subtitle = sectionData.subtitle
        updateData.why_best_html_content = sectionData.htmlContent
        break
      default:
        throw new Error(`Unknown section: ${sectionName}`)
    }
    
    const { error } = await client
      .from('home_page')
      .update(updateData)
      .eq('is_active', true)
    
    if (error) {
      console.error(`Error updating ${sectionName} data:`, error)
      return false
    }
    
    return true
  } catch (error) {
    console.error(`Unexpected error updating ${sectionName} data:`, error)
    return false
  }
}

// Function to update entire home page record (for complete admin updates)
export async function updateEntireHomePage(updates: Partial<{
  hero_background_image: string
  main_title: string
  main_subtitle: string
  main_html_content: string
  exhibition_europe_title: string
  exhibition_europe_subtitle: string
  exhibition_europe_booth_image: string
  exhibition_europe_html_content: string
  exhibition_usa_title: string
  exhibition_usa_html_content: string
  solutions_title: string
  solutions_html_content: string
  solutions_items: any
  why_best_title: string
  why_best_subtitle: string
  why_best_html_content: string
}>): Promise<boolean> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    const { error } = await client
      .from('home_page')
      .update(updates)
      .eq('is_active', true)
    
    if (error) {
      console.error('Error updating entire home page:', error)
      return false
    }
    
    return true
  } catch (error) {
    console.error('Unexpected error updating entire home page:', error)
    return false
  }
}


