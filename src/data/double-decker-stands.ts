import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Constants for hero section background image
export const DOUBLE_DECKER_STANDS_HERO_BG_IMAGE = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=600&fit=crop";

// Interfaces for strong typing
export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage?: string // Made optional since we'll use constant
}

export interface BenefitsSection {
  title: string
  image?: string
  content: string // Single HTML content instead of items array
}

export interface PointsTableData {
  title: string
  // Combined content as single HTML string
  content: string
}

export interface BoothPartnerData {
  title: string
  subtitle: string
  description: string
}

export interface BoldStatementData {
  title: string
  subtitle: string
  description: string
}

export interface StandProjectText {
  title: string
  highlight?: string // for green part of heading
  description: string // Will be rendered as HTML content
}

export interface ExhibitionBenefits {
  title: string
  subtitle: string
  content: string // Single HTML content instead of items array
  image: string
}

export interface MetaData {
  title: string
  description: string
}

// ✅ Added `exhibitionBenefits` here
export interface DoubleDeckerStandsData {
  meta: MetaData
  hero: HeroSection
  benefits: BenefitsSection
  pointsTable: PointsTableData  // Moved to be just after benefits
  StandProjectText: StandProjectText
  exhibitionBenefits: ExhibitionBenefits
  boothPartner: BoothPartnerData
  boldStatement: BoldStatementData
}

// Main function to get double decker stands data from database (NO FALLBACK DATA)
export async function getDoubleDeckerStandsData(): Promise<DoubleDeckerStandsData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Fetch data directly from the double_decker_stands_page table
    const { data, error } = await client
      .from('double_decker_stands_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching double decker stands data:', error)
      throw new Error('Failed to fetch double decker stands data from database: ' + error.message)
    }
    
    if (!data) {
      console.error('No double decker stands data found in database')
      throw new Error('No double decker stands data available in database')
    }
    
    // Transform database columns to match TypeScript interfaces
    const doubleDeckerStandsData: DoubleDeckerStandsData = {
      meta: {
        title: data.meta_title || '',
        description: data.meta_description || ''
      },
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: DOUBLE_DECKER_STANDS_HERO_BG_IMAGE, // Use constant instead of database value
      },
      benefits: {
        title: data.benefits_title || '',
        image: data.benefits_image || '',
        content: data.benefits_content || ''
      },
      pointsTable: {  // Moved to be just after benefits
        title: data.points_table_title || '',
        content: data.points_table_content || ''
      },
      StandProjectText: {
        title: data.stand_project_title || '',
        highlight: data.stand_project_highlight || '',
        description: data.stand_project_description || ''
      },
      exhibitionBenefits: {
        title: data.exhibition_benefits_title || '',
        subtitle: data.exhibition_benefits_subtitle || '',
        content: data.exhibition_benefits_content || '',
        image: data.exhibition_benefits_image || ''
      },
      boothPartner: {
        title: data.booth_partner_title || '',
        subtitle: data.booth_partner_subtitle || '',
        description: data.booth_partner_description || ''
      },
      boldStatement: {
        title: data.bold_statement_title || '',
        subtitle: data.bold_statement_subtitle || '',
        description: data.bold_statement_description || ''
      }
    }
    
    return doubleDeckerStandsData
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

// Remove static initialization - components will fetch data directly