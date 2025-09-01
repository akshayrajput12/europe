import { supabase } from '@/lib/supabase'
import { createServerClient } from '@/lib/supabase-server'

// Interfaces for strong typing
export interface HeroSection {
  title: string
  subtitle?: string
  backgroundImage: string
}

export interface BenefitsSection {
  title: string
  image?: string
  content: string // Single HTML content instead of items array
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

export interface BespokeSection {
  title: string
  subtitle?: string
  description: string
}

export interface FreshDesignSection {
  title: string
  subtitle?: string
  description: string
}

export interface CostSection {
  title: string
  subtitle?: string
  description: string
}

export interface PointsTable {
  title: string
  // Combined content as single HTML string
  content: string
}

export interface MetaData {
  title: string
  description: string
}

// ✅ Added `exhibitionBenefits` here
export interface CustomStandsData {
  meta: MetaData
  hero: HeroSection
  benefits: BenefitsSection
  StandProjectText: StandProjectText
  exhibitionBenefits: ExhibitionBenefits
  bespoke: BespokeSection
  freshDesign: FreshDesignSection
  costSection: CostSection
  pointsTable: PointsTable
}

// Main function to get custom stands data from database (NO FALLBACK DATA)
export async function getCustomStandsData(): Promise<CustomStandsData> {
  try {
    let client
    try {
      client = createServerClient()
    } catch {
      client = supabase
    }

    // Fetch data directly from the custom_stands_page table
    const { data, error } = await client
      .from('custom_stands_page')
      .select('*')
      .eq('is_active', true)
      .single()
    
    if (error) {
      console.error('Error fetching custom stands data:', error)
      throw new Error('Failed to fetch custom stands data from database: ' + error.message)
    }
    
    if (!data) {
      console.error('No custom stands data found in database')
      throw new Error('No custom stands data available in database')
    }
    
    // Transform database columns to match TypeScript interfaces
    const customStandsData: CustomStandsData = {
      meta: {
        title: data.meta_title || '',
        description: data.meta_description || ''
      },
      hero: {
        title: data.hero_title || '',
        subtitle: data.hero_subtitle || '',
        backgroundImage: data.hero_background_image || ''
      },
      benefits: {
        title: data.benefits_title || '',
        image: data.benefits_image || '',
        content: data.benefits_content || ''
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
      bespoke: {
        title: data.bespoke_title || '',
        subtitle: data.bespoke_subtitle || '',
        description: data.bespoke_description || ''
      },
      freshDesign: {
        title: data.fresh_design_title || '',
        subtitle: data.fresh_design_subtitle || '',
        description: data.fresh_design_description || ''
      },
      costSection: {
        title: data.cost_section_title || '',
        subtitle: data.cost_section_subtitle || '',
        description: data.cost_section_description || ''
      },
      pointsTable: {
        title: data.points_table_title || '',
        content: data.points_table_content || ''
      }
    }
    
    return customStandsData
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

// Remove static initialization - components will fetch data directly